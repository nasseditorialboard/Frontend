// Reusable page hero — light gradient, formula decorations, breadcrumb
import { motion } from 'framer-motion'
import { RiArrowRightSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const formulas = ['y=mx+c', 'E=mc²', 'F=ma', 'PV=nRT', 'λν=c', 'ΔG=ΔH-TΔS']

export default function PageHero({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="relative min-h-[42vh] flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #F9F8F3 0%, #F0EFE8 50%, #E8E6DC 100%)' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-70" />

      {/* Formula decorations */}
      {formulas.map((f, i) => (
        <span
          key={f}
          className="formula-deco"
          style={{
            top: `${15 + (i * 14) % 70}%`,
            left: `${(i * 17 + 5) % 90}%`,
          }}
        >
          {f}
        </span>
      ))}

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      {/* Olive bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-olive/20" />

      {/* Subtle glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl"
        style={{ background: 'rgba(246,211,0,0.07)' }} />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full blur-3xl"
        style={{ background: 'rgba(73,65,24,0.05)' }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-1 mb-4 font-mono text-xs text-nass-black/40"
          >
            <Link to="/" className="hover:text-olive transition-colors">HOME</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1">
                <RiArrowRightSLine className="text-olive/60" />
                {b.href
                  ? <Link to={b.href} className="hover:text-olive transition-colors">{b.label.toUpperCase()}</Link>
                  : <span className="text-olive">{b.label.toUpperCase()}</span>
                }
              </span>
            ))}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl font-bold text-nass-black mb-4 leading-tight"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-nass-black/50 text-lg max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
