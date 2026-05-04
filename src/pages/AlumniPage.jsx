import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  RiLinkedinBoxLine,
  RiDoubleQuotesL,
  RiTeamLine,
  RiGlobalLine,
  RiBriefcase4Line,
  RiLockLine,
  RiArrowDownLine,
} from 'react-icons/ri'
import PageHero from '../components/shared/PageHero'
import SectionTitle from '../components/shared/SectionTitle'
import AnimatedSection from '../components/shared/AnimatedSection'

// ─── Notable alumni ───────────────────────────────────────────────────────────
const NOTABLE_ALUMNI = [
  {
    initials: 'OA',
    name: 'Dr. Olufemi Adeyemo',
    gradYear: 2008,
    dept: 'Biochemistry',
    role: 'Senior Researcher',
    company: 'WHO, Geneva',
    gradient: 'linear-gradient(135deg, #00c2ff, #00ff9d)',
  },
  {
    initials: 'CI',
    name: 'Prof. Chiamaka Igwe',
    gradYear: 2003,
    dept: 'Chemistry',
    role: 'Professor of Chemistry',
    company: 'University of Lagos',
    gradient: 'linear-gradient(135deg, #00ff9d, #00c2ff)',
  },
  {
    initials: 'BT',
    name: 'Engr. Babatunde Tijani',
    gradYear: 2011,
    dept: 'Physics',
    role: 'Lead Engineer',
    company: 'Shell Nigeria',
    gradient: 'linear-gradient(135deg, #f5c518, #00c2ff)',
  },
  {
    initials: 'AN',
    name: 'Dr. Adaeze Nkemdirim',
    gradYear: 2009,
    dept: 'Microbiology',
    role: 'Medical Director',
    company: 'Lagos University Teaching Hospital',
    gradient: 'linear-gradient(135deg, #00c2ff, #f5c518)',
  },
  {
    initials: 'SO',
    name: 'Seun Ogunlesi',
    gradYear: 2015,
    dept: 'Computer Science',
    role: 'CTO',
    company: 'Paystack (Stripe)',
    gradient: 'linear-gradient(135deg, #00ff9d, #f5c518)',
  },
  {
    initials: 'YM',
    name: 'Dr. Yusuf Mohammed',
    gradYear: 2006,
    dept: 'Geology',
    role: 'Exploration Geologist',
    company: 'NNPC Ltd',
    gradient: 'linear-gradient(135deg, #00c2ff, #00ff9d)',
  },
]

const TESTIMONIALS = [
  {
    quote:
      'NASS OAU gave me more than a degree — it gave me discipline, a network, and the belief that science could change Nigeria. The skills I developed through NASS competitions and leadership roles prepared me for every challenge I have faced in my career.',
    name: 'Dr. Olufemi Adeyemo',
    year: 2008,
    dept: 'Biochemistry',
  },
  {
    quote:
      'The rigour of OAU sciences and the community of NASS shaped my approach to problem-solving. Today, as a professor, I use NASS as a case study for how student associations can truly drive academic excellence.',
    name: 'Prof. Chiamaka Igwe',
    year: 2003,
    dept: 'Chemistry',
  },
]

const DEPARTMENTS = [
  'Biochemistry', 'Biology', 'Chemistry', 'Computer Science',
  'Geology', 'Mathematics', 'Microbiology', 'Physics', 'Statistics',
  'Zoology', 'Other',
]

const BLURRED_ROWS = [
  { name: 'Adeola Fasanya', dept: 'Physics', year: 2012, company: 'CERN, Geneva' },
  { name: 'Chukwuma Obiora', dept: 'Computer Science', year: 2016, company: 'Google, Lagos' },
  { name: 'Fatima Bello', dept: 'Chemistry', year: 2010, company: 'NAFDAC' },
  { name: 'Rotimi Adeleke', dept: 'Microbiology', year: 2014, company: 'Pfizer Nigeria' },
  { name: 'Ngozi Eze', dept: 'Biochemistry', year: 2013, company: 'WHO, Abuja' },
]

export default function AlumniPage() {
  const [form, setForm] = useState({
    fullName: '', department: '', gradYear: '', role: '',
    company: '', linkedin: '', email: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <PageHero
        title="NASS Alumni"
        subtitle="Once NASS, Always NASS."
        breadcrumbs={[{ label: 'Alumni' }]}
      />

      <div className="max-w-7xl mx-auto px-4 section-pad">

        {/* ── Intro ─────────────────────────────────────────────────────── */}
        <AnimatedSection delay={0.05}>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
              Once NASS, Always NASS
            </h2>
            <p className="text-text-muted text-base leading-relaxed">
              The NASS OAU alumni community spans decades, disciplines, and continents. From research
              labs in Geneva to boardrooms in Lagos, the bond forged through science, rigour, and
              shared ambition at Obafemi Awolowo University endures long after graduation. We are
              scientists, engineers, doctors, entrepreneurs, and academics — united by the faculty
              that shaped us.
            </p>
          </div>
        </AnimatedSection>

        {/* ── Stats Row ─────────────────────────────────────────────────── */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
            {[
              { icon: RiTeamLine, value: '500+', label: 'Alumni' },
              { icon: RiGlobalLine, value: '30+', label: 'Countries' },
              { icon: RiBriefcase4Line, value: 'Multiple', label: 'Industries' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="glass rounded-xl p-6 text-center">
                <Icon size={24} className="text-primary mx-auto mb-3" />
                <div className="gradient-text font-display text-4xl font-bold">{value}</div>
                <div className="text-text-muted font-mono text-sm uppercase tracking-widest mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* ── Notable Alumni ────────────────────────────────────────────── */}
        <SectionTitle label="Distinguished Members" title="Notable Alumni" />
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {NOTABLE_ALUMNI.map((alumni, i) => (
              <motion.div
                key={alumni.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -4, boxShadow: '0 0 28px rgba(0,194,255,0.12)' }}
                className="glass rounded-2xl p-6 flex flex-col"
              >
                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-bg font-display font-bold text-xl flex-shrink-0"
                  style={{ background: alumni.gradient }}
                >
                  {alumni.initials}
                </div>

                <h3 className="font-display text-base font-bold text-text-primary mt-3">
                  {alumni.name}
                </h3>
                <p className="font-mono text-xs text-text-muted mt-0.5">
                  {alumni.dept} &middot; Class of {alumni.gradYear}
                </p>
                <p className="text-text-primary text-sm font-semibold mt-2">{alumni.role}</p>
                <p className="text-text-muted text-sm">{alumni.company}</p>

                <div className="mt-auto pt-4">
                  <button className="text-text-muted hover:text-primary transition-colors">
                    <RiLinkedinBoxLine size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* ── Alumni Stories ────────────────────────────────────────────── */}
        <SectionTitle label="Their Words" title="Alumni Stories" />
        <AnimatedSection delay={0.1}>
          <div className="grid lg:grid-cols-2 gap-6 mb-20">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass rounded-2xl p-8 flex flex-col gap-4"
              >
                <RiDoubleQuotesL size={40} className="text-primary/20 flex-shrink-0" />
                <p className="text-text-primary italic text-base leading-relaxed flex-1">
                  {t.quote}
                </p>
                <div>
                  <p className="font-display text-sm text-primary font-semibold">{t.name}</p>
                  <p className="text-text-muted text-xs font-mono">
                    Class of {t.year} &middot; {t.dept}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* ── Alumni Directory (blurred) ────────────────────────────────── */}
        <SectionTitle label="Network" title="Alumni Directory" />
        <AnimatedSection delay={0.1}>
          <div className="glass rounded-2xl p-8 relative overflow-hidden mb-20">
            {/* Blurred table */}
            <div style={{ filter: 'blur(6px)', userSelect: 'none', pointerEvents: 'none' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left font-mono text-xs text-text-muted pb-3">Name</th>
                    <th className="text-left font-mono text-xs text-text-muted pb-3">Department</th>
                    <th className="text-left font-mono text-xs text-text-muted pb-3">Year</th>
                    <th className="text-left font-mono text-xs text-text-muted pb-3">Organisation</th>
                  </tr>
                </thead>
                <tbody>
                  {BLURRED_ROWS.map((row) => (
                    <tr key={row.name} className="border-b border-white/5 last:border-0">
                      <td className="py-3 text-text-primary font-semibold">{row.name}</td>
                      <td className="py-3 text-text-muted text-xs">{row.dept}</td>
                      <td className="py-3 font-mono text-xs text-text-muted">{row.year}</td>
                      <td className="py-3 text-text-muted text-xs">{row.company}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 glass flex flex-col items-center justify-center gap-4 rounded-2xl">
              <RiLockLine size={32} className="text-primary" />
              <p className="text-text-primary text-sm font-semibold text-center px-4">
                Register to access the full alumni directory
              </p>
              <a
                href="#register"
                className="btn-primary flex items-center gap-2 text-sm"
              >
                Register Now
                <RiArrowDownLine size={14} />
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* ── Registration Form ─────────────────────────────────────────── */}
        <div id="register">
          <SectionTitle label="Register" title="Join the Alumni Network" />
        </div>
        <AnimatedSection delay={0.1}>
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                  <RiTeamLine size={28} className="text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-text-primary">
                  Registration Submitted
                </h3>
                <p className="text-text-muted text-sm max-w-sm">
                  Thank you for registering. Your profile will be reviewed and added to the NASS
                  alumni network within 5–7 working days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-xs text-text-muted uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Dr. John Doe"
                      className="nass-input"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-xs text-text-muted uppercase tracking-wide">
                      Department
                    </label>
                    <select
                      name="department"
                      value={form.department}
                      onChange={handleChange}
                      required
                      className="nass-input"
                    >
                      <option value="">Select department</option>
                      {DEPARTMENTS.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-xs text-text-muted uppercase tracking-wide">
                      Graduation Year
                    </label>
                    <input
                      name="gradYear"
                      value={form.gradYear}
                      onChange={handleChange}
                      required
                      type="number"
                      min="1990"
                      max="2025"
                      placeholder="e.g. 2015"
                      className="nass-input"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-xs text-text-muted uppercase tracking-wide">
                      Current Role
                    </label>
                    <input
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      placeholder="e.g. Senior Researcher"
                      className="nass-input"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-xs text-text-muted uppercase tracking-wide">
                      Current Company / Organisation
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="e.g. Shell Nigeria"
                      className="nass-input"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-xs text-text-muted uppercase tracking-wide">
                      LinkedIn URL
                    </label>
                    <input
                      name="linkedin"
                      value={form.linkedin}
                      onChange={handleChange}
                      type="url"
                      placeholder="https://linkedin.com/in/..."
                      className="nass-input"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-xs text-text-muted uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="nass-input"
                  />
                </div>

                <button type="submit" className="btn-primary w-full mt-2 text-sm font-semibold">
                  Submit Registration
                </button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </motion.div>
  )
}
