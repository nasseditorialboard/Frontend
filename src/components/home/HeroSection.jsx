// HeroSection — Full-viewport hero with animated molecular canvas, formula decorations,
// DNA helix SVG, branded headline, CTA buttons, and stat bar.

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { RiArrowDownSLine } from 'react-icons/ri'

/* ─── animation variants ─── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.25 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}
const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 1.0 + i * 0.12, ease: 'easeOut' },
  }),
}

/* ─── stat bar data ─── */
const stats = [
  { value: '10',      label: 'Departments', note: 'Active departments' },
  { value: '2.0×10³', label: 'Members',     note: 'Science students' },
  { value: '15+',    label: 'Years',         note: 'Of excellence' },
  { value: '50+',    label: 'Events/Year',   note: 'Annual activities' },
]

/* ─── formula decorations ─── */
const formulas = [
  { text: 'y = mx + c',  top: '18%', left: '6%'  },
  { text: 'E = mc²',     top: '30%', left: '82%' },
  { text: 'F = ma',      top: '65%', left: '4%'  },
  { text: 'PV = nRT',    top: '72%', left: '78%' },
]

/* ─── DNA Helix SVG ─── */
function DnaHelix() {
  const height = 320
  const width  = 80
  const cx     = width / 2
  const amplitude = 26
  const freq   = (2 * Math.PI) / 80

  const points1 = []
  const points2 = []
  for (let y = 0; y <= height; y += 4) {
    const x1 = cx + amplitude * Math.sin(freq * y)
    const x2 = cx - amplitude * Math.sin(freq * y)
    points1.push(`${x1.toFixed(2)},${y}`)
    points2.push(`${x2.toFixed(2)},${y}`)
  }
  const path1 = 'M ' + points1.join(' L ')
  const path2 = 'M ' + points2.join(' L ')

  const connectors = Array.from({ length: 12 }, (_, i) => {
    const y = (height / 13) * (i + 1)
    const x1 = cx + amplitude * Math.sin(freq * y)
    const x2 = cx - amplitude * Math.sin(freq * y)
    return { x1, x2, y }
  })

  return (
    <div
      style={{
        position: 'absolute',
        right: '5%',
        top: '50%',
        transform: 'translateY(-50%)',
        width: `${width}px`,
        height: `${height}px`,
        opacity: 0.5,
        animation: 'dna-sway 6s ease-in-out infinite',
      }}
    >
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
        <path d={path1} stroke="#C9A800" strokeWidth="1.5" fill="none" />
        <path d={path2} stroke="#C9A800" strokeWidth="1.5" fill="none" />
        {connectors.map((c, i) => (
          <line
            key={i}
            x1={c.x1.toFixed(2)} y1={c.y.toFixed(2)}
            x2={c.x2.toFixed(2)} y2={c.y.toFixed(2)}
            stroke="#C9A800" strokeWidth="1" strokeOpacity="0.4"
          />
        ))}
      </svg>
    </div>
  )
}

/* ─── Molecular Canvas ─── */
function MolecularCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const DOT_COUNT = 25
    const LINK_DIST = 150

    function resize() {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const dots = Array.from({ length: DOT_COUNT }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      r:  2 + Math.random() * 1,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }))

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dots.forEach((d) => {
        d.x += d.vx
        d.y += d.vy
        if (d.x < d.r || d.x > canvas.width  - d.r) d.vx *= -1
        if (d.y < d.r || d.y > canvas.height - d.r) d.vy *= -1
      })

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx   = dots[i].x - dots[j].x
          const dy   = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DIST) {
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.strokeStyle = 'rgba(73,65,24,0.1)'
            ctx.lineWidth   = 1
            ctx.stroke()
          }
        }
      }

      dots.forEach((d) => {
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(246,211,0,0.75)'
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  )
}

/* ─── Main Component ─── */
export default function HeroSection() {
  return (
    <>
      <style>{`
        @keyframes dna-sway {
          0%, 100% { transform: translateY(-50%) rotateY(-15deg); }
          50%       { transform: translateY(-50%) rotateY(15deg);  }
        }
      `}</style>

      <section
        className="relative min-h-screen flex flex-col overflow-hidden"
        style={{ backgroundColor: '#F9F8F3' }}
      >
        <MolecularCanvas />

        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

        {/* Formula decorations */}
        {formulas.map((f) => (
          <span
            key={f.text}
            className="absolute font-mono text-sm pointer-events-none select-none"
            style={{ top: f.top, left: f.left, color: 'rgba(12,10,4,0.07)' }}
          >
            {f.text}
          </span>
        ))}

        <DnaHelix />

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-28 pb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto"
          >
            {/* Eyebrow label */}
            <motion.div variants={itemVariants}>
              <span className="font-mono text-olive text-xs uppercase tracking-widest mb-8 block">
                // NIGERIAN ASSOCIATION OF SCIENCE STUDENTS, OAU
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl md:text-6xl font-black text-nass-black leading-tight mb-6"
            >
              Where Science Meets{' '}
              <span className="gradient-text-gold">Legacy</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="font-body text-nass-black/55 text-lg max-w-xl mx-auto leading-relaxed mb-10"
            >
              Nigerian Association of Science Students, OAU Chapter — empowering
              the next generation of scientists.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/departments" className="btn-gold">
                Explore NASS
              </Link>
              <Link to="/blog" className="btn-ghost-gold">
                Latest News
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-[148px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <div className="animate-bounce-gold text-olive/60">
              <RiArrowDownSLine size={26} />
            </div>
          </motion.div>
        </div>

        {/* Stat bar */}
        <div
          className="relative z-10 w-full border-t"
          style={{ backgroundColor: '#EEEDE5', borderColor: 'rgba(73,65,24,0.25)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-olive/20">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  variants={statVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col items-center justify-center gap-0.5 py-5 px-4"
                >
                  <span className="font-display text-2xl font-bold text-[#7A5F00] leading-none">
                    {stat.value}
                  </span>
                  <span className="font-mono text-xs text-olive uppercase tracking-wider mt-1">
                    {stat.label}
                  </span>
                  <span className="text-nass-black/30 text-xs mt-0.5 text-center">
                    {stat.note}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
