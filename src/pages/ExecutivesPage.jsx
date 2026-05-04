// Executives page — 2024/2025 NASS OAU Executive Council with president spotlight, principal officers, and departmental reps
import { motion } from 'framer-motion'
import { RiTwitterXLine, RiLinkedinBoxLine } from 'react-icons/ri'
import PageHero from '../components/shared/PageHero'
import SectionTitle from '../components/shared/SectionTitle'
import AnimatedSection from '../components/shared/AnimatedSection'

const president = {
  initials: 'AO',
  name: 'Akinola Olawale',
  role: 'President',
  dept: 'Physics, 400 Level',
  gradient: 'from-primary to-secondary',
  bio: 'A visionary leader with a passion for scientific advancement and student welfare, Akinola has spearheaded NASS\'s most ambitious programmes — from the revamped resources portal to the landmark Alumni Mentorship Initiative.',
}

const principalOfficers = [
  { initials: 'CI', name: 'Chisom Ihejirika', role: 'Vice President', dept: 'Biochemistry, 400L', gradient: 'from-secondary to-primary' },
  { initials: 'TO', name: 'Taiwo Ogundimu', role: 'Secretary General', dept: 'Mathematics, 300L', gradient: 'from-gold to-primary' },
  { initials: 'RB', name: 'Rotimi Babatunde', role: 'Financial Secretary', dept: 'Statistics, 400L', gradient: 'from-primary to-gold' },
  { initials: 'AN', name: 'Amaka Nwachukwu', role: 'Treasurer', dept: 'Chemistry, 300L', gradient: 'from-secondary to-gold' },
  { initials: 'YA', name: 'Yusuf Adewale', role: 'PRO', dept: 'Computer Science, 400L', gradient: 'from-primary to-secondary' },
]

const welfareOfficers = [
  { initials: 'KO', name: 'Kehinde Olatunde', role: 'Welfare Officer I', dept: 'Biology, 300L', gradient: 'from-primary/80 to-secondary/80' },
  { initials: 'BN', name: 'Bunmi Nwankwo', role: 'Welfare Officer II', dept: 'Zoology, 200L', gradient: 'from-gold/80 to-primary/80' },
  { initials: 'SM', name: 'Sola Makinde', role: 'Sports Director', dept: 'Physics, 300L', gradient: 'from-secondary/80 to-gold/80' },
  { initials: 'HD', name: 'Hauwa Dankolo', role: 'Social Secretary', dept: 'Microbiology, 300L', gradient: 'from-primary/80 to-gold/80' },
]

const deptReps = [
  { initials: 'OA', name: 'Olumide Adeyemi', dept: 'Physics' },
  { initials: 'BO', name: 'Blessing Okafor', dept: 'Chemistry' },
  { initials: 'SA', name: 'Seun Adebola', dept: 'Mathematics' },
  { initials: 'AN', name: 'Adaeze Nwofor', dept: 'Biology' },
  { initials: 'FO', name: 'Femi Ogunleye', dept: 'Biochemistry' },
  { initials: 'NE', name: 'Ngozi Eze', dept: 'Microbiology' },
  { initials: 'KA', name: 'Kola Adeyinka', dept: 'Botany' },
  { initials: 'AO', name: 'Amaka Onuoha', dept: 'Zoology' },
  { initials: 'TA', name: 'Tunde Afolabi', dept: 'Geology' },
  { initials: 'HB', name: 'Hauwa Bello', dept: 'Geophysics' },
  { initials: 'EU', name: 'Emeka Uchenna', dept: 'Statistics' },
  { initials: 'ZS', name: 'Zainab Suleiman', dept: 'Computer Science' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

function SocialRow() {
  return (
    <div className="flex items-center justify-center gap-2 mt-3">
      {[RiTwitterXLine, RiLinkedinBoxLine].map((Icon, i) => (
        <a
          key={i}
          href="#"
          className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 transition-all"
        >
          <Icon size={14} />
        </a>
      ))}
    </div>
  )
}

export default function ExecutivesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-bg min-h-screen"
    >
      <PageHero
        title="Our Leadership"
        subtitle="The 2024/2025 Executive Council of NASS OAU."
        breadcrumbs={[{ label: 'Executives' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-pad">

        {/* Session label */}
        <AnimatedSection className="text-center mb-2">
          <span className="font-mono text-xs text-primary uppercase tracking-widest">
            2024 / 2025 Academic Session
          </span>
        </AnimatedSection>

        <SectionTitle center label="Executive Council" title="Meet Your Leaders" />

        {/* President */}
        <AnimatedSection className="flex justify-center mb-16">
          <motion.div
            whileHover={{ boxShadow: '0 0 40px rgba(0,194,255,0.3)' }}
            className="glass glow-border rounded-2xl p-10 text-center w-full max-w-sm animate-pulse-glow"
          >
            <div
              className={`w-24 h-24 rounded-full bg-gradient-to-br ${president.gradient} flex items-center justify-center text-bg font-display font-bold text-3xl mx-auto mb-4 shadow-glow-md`}
            >
              {president.initials}
            </div>
            <h2 className="font-display text-2xl font-bold text-text-primary">{president.name}</h2>
            <p className="font-mono text-sm text-primary uppercase tracking-wider mt-1">{president.role}</p>
            <p className="text-text-muted text-sm mt-1">{president.dept}</p>
            <p className="text-text-muted text-sm mt-4 leading-relaxed italic">{president.bio}</p>
            <SocialRow />
          </motion.div>
        </AnimatedSection>

        {/* Principal Officers */}
        <SectionTitle center label="Leadership Team" title="Principal Officers" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {principalOfficers.map((exec, i) => (
            <motion.div
              key={exec.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: '0 0 25px rgba(0,194,255,0.2)' }}
              className="glass rounded-xl p-5 text-center"
            >
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${exec.gradient} flex items-center justify-center text-bg font-display font-bold text-base mx-auto`}
              >
                {exec.initials}
              </div>
              <p className="font-display text-sm font-bold text-text-primary mt-3 leading-tight">{exec.name}</p>
              <p className="font-mono text-xs text-primary uppercase tracking-wide mt-1">{exec.role}</p>
              <p className="text-text-muted text-xs mt-1">{exec.dept}</p>
              <SocialRow />
            </motion.div>
          ))}
        </div>

        {/* Welfare / Other Officers */}
        <SectionTitle center label="Support Team" title="Welfare Officers" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {welfareOfficers.map((w, i) => (
            <motion.div
              key={w.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: '0 0 20px rgba(0,194,255,0.15)' }}
              className="glass rounded-xl p-5 text-center"
            >
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${w.gradient} flex items-center justify-center text-bg font-bold text-sm mx-auto`}
              >
                {w.initials}
              </div>
              <p className="font-display text-sm font-bold text-text-primary mt-3 leading-tight">{w.name}</p>
              <p className="font-mono text-xs text-primary uppercase tracking-wide mt-1">{w.role}</p>
              <p className="text-text-muted text-xs mt-1">{w.dept}</p>
            </motion.div>
          ))}
        </div>

        {/* Departmental Representatives */}
        <SectionTitle center label="Faculty Voices" title="Departmental Representatives" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {deptReps.map((rep, i) => (
            <motion.div
              key={rep.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -2, boxShadow: '0 0 15px rgba(0,194,255,0.15)' }}
              className="glass rounded-xl p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                {rep.initials}
              </div>
              <div className="min-w-0">
                <p className="text-text-primary text-sm font-semibold truncate">{rep.name}</p>
                <p className="text-text-muted text-xs font-mono truncate">{rep.dept}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
