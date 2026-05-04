// Contact page — message form, contact info cards, map placeholder, and feedback form
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  RiMailLine, RiInstagramLine, RiTwitterXLine, RiMapPin2Line,
  RiTimeLine, RiCheckboxCircleLine, RiSendPlaneLine,
} from 'react-icons/ri'
import PageHero from '../components/shared/PageHero'
import SectionTitle from '../components/shared/SectionTitle'
import AnimatedSection from '../components/shared/AnimatedSection'

const contactInfo = [
  { icon: RiMailLine, label: 'Email', value: 'nassexec@oauife.edu.ng' },
  { icon: RiInstagramLine, label: 'Instagram', value: '@nassoau' },
  { icon: RiTwitterXLine, label: 'Twitter / X', value: '@NASS_OAU' },
  { icon: RiMapPin2Line, label: 'Location', value: 'Faculty of Sciences, Obafemi Awolowo University, Ile-Ife, Osun State, Nigeria' },
  { icon: RiTimeLine, label: 'Office Hours', value: 'Mondays – Fridays, 10:00 AM – 4:00 PM' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [feedbackForm, setFeedbackForm] = useState({ name: '', email: '', type: '', message: '' })
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleFeedbackSubmit(e) {
    e.preventDefault()
    setFeedbackSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-bg min-h-screen"
    >
      <PageHero
        title="Contact Us"
        subtitle="Reach out to NASS OAU — we're here for the science community."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-pad">

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

          {/* Left — Contact Form */}
          <AnimatedSection>
            <div className="glass rounded-2xl p-8 h-full">
              <h2 className="font-display text-xl font-bold text-text-primary mb-6">Send Us a Message</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <RiCheckboxCircleLine size={56} className="text-secondary mb-4" />
                  <h3 className="font-display text-lg font-bold text-text-primary mb-2">Message Sent</h3>
                  <p className="text-text-muted text-sm max-w-xs">
                    Thank you for reaching out. We'll get back to you within 48 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    className="btn-ghost text-xs mt-6 py-2 px-4"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-xs text-text-muted uppercase tracking-wide block mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="nass-input text-sm"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-xs text-text-muted uppercase tracking-wide block mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="nass-input text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-mono text-xs text-text-muted uppercase tracking-wide block mb-1">Subject</label>
                    <select
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="nass-input text-sm"
                    >
                      <option value="">Select a subject</option>
                      {['General Inquiry', 'Academic Support', 'Sports', 'Events', 'Media / Press', 'Partnership', 'Other'].map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-mono text-xs text-text-muted uppercase tracking-wide block mb-1">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="nass-input text-sm resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    <RiSendPlaneLine size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* Right — Contact Info */}
          <AnimatedSection delay={0.15}>
            <h2 className="font-display text-xl font-bold text-text-primary mb-6">Get In Touch</h2>
            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="glass rounded-xl p-4 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-text-muted uppercase tracking-wide">{label}</p>
                    <p className="text-text-primary text-sm mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="glass rounded-xl mt-6 h-48 flex flex-col items-center justify-center border border-border">
              <RiMapPin2Line size={40} className="text-primary/30 mb-2" />
              <p className="text-text-muted text-sm font-mono">Interactive map coming soon</p>
              <p className="text-text-muted text-xs mt-1">OAU Faculty of Sciences, Ile-Ife</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Feedback / Story section */}
        <AnimatedSection delay={0.1}>
          <SectionTitle center label="Community" title="Submit a Story or Feedback" />
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            {feedbackSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-8"
              >
                <RiCheckboxCircleLine size={48} className="text-secondary mb-4" />
                <h3 className="font-display text-base font-bold text-text-primary mb-2">Feedback Received</h3>
                <p className="text-text-muted text-sm">Thank you. We read every submission carefully.</p>
                <button
                  onClick={() => { setFeedbackSubmitted(false); setFeedbackForm({ name: '', email: '', type: '', message: '' }) }}
                  className="btn-ghost text-xs mt-4 py-2 px-4"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs text-text-muted uppercase tracking-wide block mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={feedbackForm.name}
                      onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                      placeholder="Your name"
                      className="nass-input text-sm"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-text-muted uppercase tracking-wide block mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={feedbackForm.email}
                      onChange={(e) => setFeedbackForm({ ...feedbackForm, email: e.target.value })}
                      placeholder="your@email.com"
                      className="nass-input text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-xs text-text-muted uppercase tracking-wide block mb-1">Type</label>
                  <select
                    required
                    value={feedbackForm.type}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, type: e.target.value })}
                    className="nass-input text-sm"
                  >
                    <option value="">Select type</option>
                    {['Story', 'Feedback', 'Correction', 'Suggestion'].map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-mono text-xs text-text-muted uppercase tracking-wide block mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={feedbackForm.message}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, message: e.target.value })}
                    placeholder="Share your story, feedback, or suggestion..."
                    className="nass-input text-sm resize-none"
                  />
                </div>
                <button type="submit" className="btn-ghost w-full">Submit Feedback</button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </motion.div>
  )
}
