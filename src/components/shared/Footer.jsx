// Site footer — off-white bg, gold top border, four-column layout, social icons
import { Link } from 'react-router-dom'
import { RiTwitterXLine, RiInstagramLine, RiLinkedinBoxLine, RiFacebookBoxLine } from 'react-icons/ri'

const quickLinks = [
  { label: 'Home', href: '/' }, { label: 'Departments', href: '/departments' },
  { label: 'Blog', href: '/blog' }, { label: 'Events', href: '/events' },
  { label: 'Resources', href: '/resources' }, { label: 'Gallery', href: '/gallery' },
]

const departments = ['Physics', 'Chemistry', 'Mathematics', 'Biochemistry', 'Microbiology', 'Botany', 'Zoology', 'Geology', 'Geophysics', 'Statistics']

const socials = [
  { icon: RiTwitterXLine, label: 'X', href: '#' },
  { icon: RiInstagramLine, label: 'Instagram', href: '#' },
  { icon: RiLinkedinBoxLine, label: 'LinkedIn', href: '#' },
  { icon: RiFacebookBoxLine, label: 'Facebook', href: '#' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#F9F8F3', borderTop: '2px solid #F6D300' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <img src="/logo.png" alt="NASS OAU" className="h-10 w-10 rounded-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none' }} />
              <span className="font-display font-black text-base">
                <span className="text-[#7A5F00]">NASS</span>
                <span className="text-olive ml-1 text-sm">OAU</span>
              </span>
            </Link>
            <p className="font-mono text-olive text-xs leading-relaxed mb-3">
              Science for Research and Integrated Development
            </p>
            <p className="text-nass-black/40 text-xs leading-relaxed">
              Nigerian Association of Science Students,<br />
              Obafemi Awolowo University, Ile-Ife.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-olive text-xs font-bold mb-4 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-nass-black/50 text-sm hover:text-olive transition-colors font-body">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-display text-olive text-xs font-bold mb-4 uppercase tracking-widest">Departments</h4>
            <ul className="space-y-2">
              {departments.map((d) => (
                <li key={d}>
                  <Link to="/departments" className="text-nass-black/50 text-sm hover:text-olive transition-colors font-body">
                    {d}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect + Newsletter */}
          <div>
            <h4 className="font-display text-olive text-xs font-bold mb-4 uppercase tracking-widest">Connect</h4>
            <div className="flex gap-3 mb-6">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-lg border border-olive/30 flex items-center justify-center text-nass-black/50 hover:text-olive hover:border-olive/60 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <h4 className="font-display text-olive text-xs font-bold mb-3 uppercase tracking-widest">Newsletter</h4>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="your@email.com" className="nass-input text-sm py-2 flex-1" />
              <button type="submit" className="btn-gold text-xs py-2 px-3 whitespace-nowrap">Go</button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-olive/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-olive/70">
            &copy; {new Date().getFullYear()} NASS OAU — All rights reserved.
          </p>
          <p className="font-mono text-xs text-olive/70">// Science. Legacy. Excellence.</p>
        </div>
      </div>
    </footer>
  )
}
