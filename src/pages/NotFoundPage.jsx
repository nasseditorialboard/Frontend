// 404 Not Found page — on-brand, with navigation back home
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RiArrowLeftLine, RiHomeSmileLine } from 'react-icons/ri'

export default function NotFoundPage() {
  return (
    <div className="bg-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-4 max-w-lg mx-auto"
      >
        {/* 404 number */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-black text-[120px] md:text-[160px] leading-none gradient-text mb-4 select-none"
        >
          404
        </motion.div>

        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-border flex items-center justify-center mx-auto mb-6">
          <RiHomeSmileLine size={32} className="text-primary" />
        </div>

        <h1 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-3">
          Page Not Found
        </h1>
        <p className="text-text-muted text-base leading-relaxed mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or may have been moved. Let's get you back to the science.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary flex items-center justify-center gap-2">
            <RiHomeSmileLine size={16} />
            Go Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-ghost flex items-center justify-center gap-2">
            <RiArrowLeftLine size={16} />
            Go Back
          </button>
        </div>

        {/* Subtle tagline */}
        <p className="font-mono text-xs text-text-muted mt-10 tracking-widest uppercase">
          NASS OAU — Science for Research and Integrated Development
        </p>
      </motion.div>
    </div>
  )
}
