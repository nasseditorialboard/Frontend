import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { RiTwitterXLine, RiLinkedinBoxLine } from 'react-icons/ri'
import AnimatedSection from '../shared/AnimatedSection'
import SectionTitle from '../shared/SectionTitle'

const executives = [
  {
    initials: 'CI',
    name: 'Chisom Ihejirika',
    role: 'Vice President',
    dept: 'Biochemistry',
    gradient: 'from-secondary to-primary',
    size: 'sm',
  },
  {
    initials: 'AO',
    name: 'Akinola Olawale',
    role: 'President',
    dept: 'Physics',
    gradient: 'from-primary to-secondary',
    size: 'lg',
  },
  {
    initials: 'TO',
    name: 'Taiwo Ogundimu',
    role: 'Secretary General',
    dept: 'Mathematics',
    gradient: 'from-gold to-primary',
    size: 'sm',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.14, ease: 'easeOut' },
  }),
}

function ExecCard({ exec, index }) {
  const isPresident = exec.size === 'lg'

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={cardVariants}
      whileHover={{
        y: -6,
        boxShadow: isPresident
          ? '0 0 32px rgba(0,194,255,0.25)'
          : '0 0 18px rgba(0,194,255,0.12)',
        transition: { duration: 0.25 },
      }}
      className={`glass rounded-xl flex flex-col items-center text-center transition-shadow
        ${isPresident
          ? 'p-8 border border-primary/30 glow-border shadow-glow-sm'
          : 'p-6'
        }`}
    >
      {/* Avatar */}
      <div
        className={`rounded-full bg-gradient-to-br ${exec.gradient} flex items-center justify-center font-display font-bold text-bg shrink-0
          ${isPresident ? 'w-20 h-20 text-2xl' : 'w-14 h-14 text-lg'}`}
      >
        {exec.initials}
      </div>

      {/* Name & Role */}
      <h3
        className={`font-display font-bold text-text-primary mt-4 leading-snug
          ${isPresident ? 'text-lg' : 'text-base'}`}
      >
        {exec.name}
      </h3>
      <span className="font-mono text-xs uppercase tracking-widest text-primary mt-1">
        {exec.role}
      </span>
      <span className="text-text-muted text-sm mt-1">{exec.dept}</span>

      {/* Social icons */}
      <div className="flex items-center gap-3 mt-4">
        <motion.a
          href="#"
          whileHover={{ scale: 1.2, color: '#00c2ff' }}
          className="text-text-muted transition-colors"
          aria-label="Twitter/X"
        >
          <RiTwitterXLine size={isPresident ? 18 : 16} />
        </motion.a>
        <motion.a
          href="#"
          whileHover={{ scale: 1.2, color: '#00c2ff' }}
          className="text-text-muted transition-colors"
          aria-label="LinkedIn"
        >
          <RiLinkedinBoxLine size={isPresident ? 18 : 16} />
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function ExecutiveSpotlight() {
  return (
    <section className="section-pad bg-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle label="Leadership" title="Meet Our Leaders" />

        {/* Cards layout: VP | President | Secretary */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          {executives.map((exec, i) => (
            <div
              key={exec.role}
              className={`w-full ${exec.size === 'lg' ? 'lg:w-72' : 'lg:w-56'} max-w-xs`}
            >
              <ExecCard exec={exec} index={i} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.35} className="flex justify-center mt-12">
          <Link to="/executives" className="btn-ghost">
            See All Executives
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
