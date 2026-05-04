// AboutSnapshot — Two-column section: animated atom SVG on the left, NASS description on the right.

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { RiAwardLine, RiTeamLine, RiLightbulbLine } from 'react-icons/ri'
import AnimatedSection from '../shared/AnimatedSection'
import SectionTitle from '../shared/SectionTitle'

/* ─── highlights data ─── */
const highlights = [
  {
    icon: RiAwardLine,
    iconColor: 'text-[#7A5F00]',
    bgColor: 'bg-gold/15',
    title: 'Academic Excellence',
    desc: 'Championing scholarly distinction across all science departments',
  },
  {
    icon: RiTeamLine,
    iconColor: 'text-olive',
    bgColor: 'bg-olive/10',
    title: 'Community Impact',
    desc: 'Building bridges between science and society through outreach programmes',
  },
  {
    icon: RiLightbulbLine,
    iconColor: 'text-[#7A5F00]',
    bgColor: 'bg-gold/15',
    title: 'Scientific Innovation',
    desc: 'Fostering a culture of research, discovery, and innovation',
  },
]

/* ─── Atom SVG ─── */
function AtomGraphic() {
  const orbits = [0, 60, 120]

  return (
    <div className="relative flex items-center justify-center">
      <svg
        width="280"
        height="280"
        viewBox="0 0 280 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          <filter id="nucleus-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="electron-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Three elliptical orbits */}
        {orbits.map((deg) => (
          <ellipse
            key={deg}
            cx="140" cy="140" rx="120" ry="48"
            stroke="#C9A800" strokeOpacity="0.35" strokeWidth="1"
            fill="none"
            transform={`rotate(${deg} 140 140)`}
          />
        ))}

        {/* Nucleus */}
        <circle cx="140" cy="140" r="12" fill="#F6D300" filter="url(#nucleus-glow)" />

        {/* Electrons — gold instead of green */}
        <circle r="5" fill="#7A5F00" filter="url(#electron-glow)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 120,0 a120,48 0 1,1 0.001,0">
            <mpath href="#orbit0" />
          </animateMotion>
        </circle>

        <circle r="5" fill="#7A5F00" filter="url(#electron-glow)">
          <animateMotion dur="4.5s" repeatCount="indefinite" begin="-1.5s">
            <mpath href="#orbit60" />
          </animateMotion>
        </circle>

        <circle r="5" fill="#7A5F00" filter="url(#electron-glow)">
          <animateMotion dur="3.8s" repeatCount="indefinite" begin="-0.9s">
            <mpath href="#orbit120" />
          </animateMotion>
        </circle>

        {/* Hidden paths for animateMotion */}
        <path id="orbit0"   d="M 260,140 a120,48 0 1,1 -0.001,0" fill="none" transform="rotate(0 140 140)" />
        <path id="orbit60"  d="M 260,140 a120,48 0 1,1 -0.001,0" fill="none" transform="rotate(60 140 140)" />
        <path id="orbit120" d="M 260,140 a120,48 0 1,1 -0.001,0" fill="none" transform="rotate(120 140 140)" />
      </svg>
    </div>
  )
}

/* ─── Main Component ─── */
export default function AboutSnapshot() {
  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column — atom graphic */}
          <AnimatedSection delay={0}>
            <motion.div
              className="glass rounded-2xl p-8 md:p-12 flex items-center justify-center"
              style={{
                border: '1px solid rgba(122,95,0,0.2)',
                boxShadow: '0 0 32px rgba(246,211,0,0.08)',
              }}
              whileHover={{
                boxShadow: '0 0 48px rgba(246,211,0,0.15)',
                transition: { duration: 0.3 },
              }}
            >
              <AtomGraphic />
            </motion.div>
          </AnimatedSection>

          {/* Right column — text */}
          <AnimatedSection delay={0.15} className="flex flex-col gap-6">
            <SectionTitle
              label="Who We Are"
              title="The Science Vanguard of OAU"
              center={false}
            />

            <p className="text-nass-black/50 text-base leading-relaxed -mt-4">
              NASS OAU is the umbrella body of science students at Obafemi Awolowo University —
              the foremost science student association at one of Nigeria's most prestigious
              institutions. Founded on the principles of academic excellence, community impact,
              and scientific advancement, NASS unites over 2,000 students across 10 departments.
            </p>

            {/* Highlight rows */}
            <div className="flex flex-col gap-4 mt-2">
              {highlights.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease: 'easeOut' }}
                    className="flex items-start gap-3"
                  >
                    <div className={`shrink-0 w-9 h-9 rounded-lg ${item.bgColor} flex items-center justify-center`}>
                      <Icon size={18} className={item.iconColor} />
                    </div>
                    <div>
                      <p className="font-semibold text-nass-black text-sm leading-snug">
                        {item.title}
                      </p>
                      <p className="text-nass-black/50 text-sm mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Learn More link */}
            <Link
              to="/about"
              className="font-mono text-olive text-sm w-fit mt-2 hover:text-[#7A5F00] transition-all"
            >
              Learn More →
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
