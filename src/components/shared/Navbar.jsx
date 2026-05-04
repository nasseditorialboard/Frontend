// Fixed top navbar — light glassmorphism, NASS OAU logo, olive active links, mobile drawer
import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { RiMenuLine, RiCloseLine, RiArrowDownSLine } from 'react-icons/ri'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Departments', href: '/departments' },
  { label: 'Blog', href: '/blog' },
  { label: 'Events', href: '/events' },
  { label: 'Sports', href: '/sports' },
  { label: 'Resources', href: '/resources' },
  { label: 'Gallery', href: '/gallery' },
]

const aboutLinks = [
  { label: 'Executives', href: '/executives' },
  { label: 'Alumni', href: '/alumni' },
  { label: 'Contact', href: '/contact' },
]

function NassLogo() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <img
        src="/logo.png"
        alt="NASS OAU"
        className="h-10 w-10 rounded-full object-cover"
        onError={(e) => { e.currentTarget.style.display = 'none' }}
      />
      <span className="font-display font-black text-base leading-none">
        <span className="text-[#7A5F00]">NASS</span>
        <span className="text-olive text-sm ml-1">OAU</span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false); setAboutOpen(false) }, [location])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(249,248,243,0.96)' : 'rgba(249,248,243,0.88)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(73,65,24,0.25)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <NassLogo />

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-body transition-all duration-200 relative group ${
                      isActive ? 'text-olive' : 'text-nass-black/65 hover:text-nass-black'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-2 right-2 h-[2px] bg-gold rounded-full"
                          style={{ boxShadow: '0 0 6px rgba(246,211,0,0.7)' }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              {/* About dropdown */}
              <div className="relative" onMouseLeave={() => setAboutOpen(false)}>
                <button
                  onMouseEnter={() => setAboutOpen(true)}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-body text-nass-black/65 hover:text-nass-black transition-colors"
                >
                  About <RiArrowDownSLine className={`transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-1 rounded-xl overflow-hidden min-w-[160px] border"
                      style={{
                        background: 'rgba(238,237,229,0.97)',
                        backdropFilter: 'blur(16px)',
                        borderColor: 'rgba(73,65,24,0.25)',
                      }}
                    >
                      {aboutLinks.map((l) => (
                        <Link
                          key={l.href}
                          to={l.href}
                          className="block px-4 py-3 text-sm text-nass-black/70 hover:text-olive hover:bg-olive/5 transition-all font-body"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CTA + burger */}
            <div className="flex items-center gap-3">
              <Link to="/contact" className="hidden sm:block btn-gold text-xs py-2 px-4">
                Join NASS
              </Link>
              <button
                className="lg:hidden p-2 rounded-lg text-nass-black/70 hover:text-olive transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-nass-black/25 z-40 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-72 z-50 lg:hidden flex flex-col"
              style={{ background: '#F9F8F3', borderLeft: '1px solid rgba(73,65,24,0.25)' }}
            >
              <div className="flex items-center justify-between p-4 border-b border-olive/25">
                <NassLogo />
                <button onClick={() => setMenuOpen(false)} className="text-nass-black/50 hover:text-olive transition-colors">
                  <RiCloseLine size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-4 px-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    end={link.href === '/'}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 rounded-lg text-sm font-body transition-all ${
                        isActive ? 'text-olive bg-olive/8' : 'text-nass-black/60 hover:text-nass-black hover:bg-nass-black/5'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="mt-2 border-t border-olive/20 pt-2">
                  <p className="px-4 py-2 font-mono text-xs text-nass-black/30 uppercase tracking-wider">// About</p>
                  {aboutLinks.map((l) => (
                    <Link
                      key={l.href}
                      to={l.href}
                      className="flex items-center px-4 py-3 rounded-lg text-sm font-body text-nass-black/60 hover:text-olive hover:bg-olive/5 transition-all"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t border-olive/20">
                <Link to="/contact" className="btn-gold block text-center text-xs py-3 w-full">
                  Join NASS
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
