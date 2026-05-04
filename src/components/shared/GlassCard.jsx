// Reusable glassmorphism card — gold-tinted border, dark olive background, hover glow
import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = true, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { y: -4, boxShadow: '0 0 28px rgba(246,211,0,0.2)' } : {}}
      transition={{ duration: 0.25 }}
      className={`glass rounded-xl p-6 ${hover ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}
