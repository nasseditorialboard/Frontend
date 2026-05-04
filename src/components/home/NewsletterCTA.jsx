import { useState } from 'react'
import { motion } from 'framer-motion'

export default function NewsletterCTA() {
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // Submission logic to be wired up
    setEmail('')
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary">
      {/* Dot-grid overlay */}
      <div className="dot-grid absolute inset-0 opacity-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 max-w-2xl mx-auto py-20 px-4 text-center text-bg"
      >
        {/* Label */}
        <p className="font-mono text-xs uppercase tracking-widest opacity-70 mb-3">
          Stay Informed
        </p>

        {/* Heading */}
        <h2 className="font-display text-3xl md:text-4xl font-bold text-bg">
          Stay in the Loop
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-bg/80 text-base leading-relaxed">
          Get the latest NASS updates, event announcements, and science news
          delivered straight to your inbox.
        </p>

        {/* Email form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 mt-8"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="bg-bg/20 border border-bg/30 text-bg placeholder-bg/60 rounded-lg px-4 py-3 flex-1 focus:outline-none focus:border-bg/60 transition-colors"
          />
          <button
            type="submit"
            className="bg-bg text-primary font-display font-bold text-sm px-6 py-3 rounded-lg hover:shadow-glow-md transition-all whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        {/* Privacy note */}
        <p className="text-xs opacity-70 mt-3">
          No spam. Unsubscribe anytime.
        </p>
      </motion.div>
    </section>
  )
}
