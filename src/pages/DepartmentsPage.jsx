import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import PageHero from '../components/shared/PageHero'
import AnimatedSection from '../components/shared/AnimatedSection'
import SectionTitle from '../components/shared/SectionTitle'

// ─── Data ─────────────────────────────────────────────────────────────────────
const DEPARTMENTS = [
  {
    id: 1,
    symbol: 'Phy',
    num: '01',
    name: 'Physics',
    category: 'Physical Sciences',
    desc: 'Exploring fundamental laws governing matter, energy, space, and time through theoretical and experimental approaches.',
    students: 340,
    rep: 'Olumide Adeyemi',
    color: 'from-gold/20 to-surface',
  },
  {
    id: 2,
    symbol: 'Che',
    num: '02',
    name: 'Chemistry',
    category: 'Physical Sciences',
    desc: 'The central science bridging physics and biology — studying matter, its properties, structure, and reactions.',
    students: 290,
    rep: 'Blessing Okafor',
    color: 'from-olive/10 to-surface',
  },
  {
    id: 3,
    symbol: 'Mat',
    num: '03',
    name: 'Mathematics',
    category: 'Physical Sciences',
    desc: 'The abstract language of the universe — from pure theory to applied mathematics powering every science.',
    students: 260,
    rep: 'Seun Adebola',
    color: 'from-gold/20 to-surface',
  },
  {
    id: 4,
    symbol: 'Bch',
    num: '04',
    name: 'Biochemistry',
    category: 'Biological Sciences',
    desc: 'Where chemistry meets biology — investigating molecular mechanisms that power all living systems.',
    students: 275,
    rep: 'Femi Ogunleye',
    color: 'from-olive/10 to-surface',
  },
  {
    id: 5,
    symbol: 'Mcb',
    num: '05',
    name: 'Microbiology',
    category: 'Biological Sciences',
    desc: 'Studying microorganisms that shape our world — from pathogens to probiotics and bioremediation.',
    students: 280,
    rep: 'Ngozi Eze',
    color: 'from-gold/15 to-surface',
  },
  {
    id: 6,
    symbol: 'Bot',
    num: '06',
    name: 'Botany',
    category: 'Biological Sciences',
    desc: 'Plant science encompassing morphology, physiology, ecology, and botanical conservation.',
    students: 195,
    rep: 'Kola Adeyinka',
    color: 'from-olive/15 to-surface',
  },
  {
    id: 7,
    symbol: 'Zoo',
    num: '07',
    name: 'Zoology',
    category: 'Biological Sciences',
    desc: 'Animal biology — from invertebrates to mammals, behaviour, physiology, ecology, and conservation.',
    students: 210,
    rep: 'Amaka Onuoha',
    color: 'from-gold/20 to-surface',
  },
  {
    id: 8,
    symbol: 'G&G',
    num: '08',
    name: 'Geology & Geophysics',
    category: 'Earth Sciences',
    desc: "Studying Earth's structure and physical properties — from rock formations and fossils to seismology and geomagnetism.",
    students: 415,
    rep: 'Tunde Afolabi',
    color: 'from-olive/25 to-surface',
  },
  {
    id: 9,
    symbol: 'Sta',
    num: '09',
    name: 'Statistics',
    category: 'Physical Sciences',
    desc: 'The science of data — collection, analysis, interpretation, and decision-making under uncertainty.',
    students: 245,
    rep: 'Emeka Uchenna',
    color: 'from-gold/15 to-surface',
  },
]

const FILTERS = ['All', 'Physical Sciences', 'Biological Sciences', 'Earth Sciences']

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: 'easeOut' },
  }),
}

// ─── Periodic Tile Card ────────────────────────────────────────────────────────
function DeptTile({ dept, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="tile-flip w-full aspect-square max-w-[180px] mx-auto"
    >
      <div className="tile-inner w-full h-full">
        {/* Front */}
        <div className={`tile-front glass rounded-xl p-4 h-full flex flex-col justify-between bg-gradient-to-br ${dept.color}`}>
          {/* Top row */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-olive text-xs">{dept.num}</span>
            <span className="w-2 h-2 bg-gold rounded-full" />
          </div>

          {/* Symbol */}
          <div className="flex-1 flex items-center justify-center">
            <span className="font-display text-5xl font-black text-[#7A5F00] text-center select-none">
              {dept.symbol}
            </span>
          </div>

          {/* Bottom — name */}
          <p className="font-mono text-nass-black/40 text-[9px] uppercase tracking-widest text-center">
            {dept.name}
          </p>
        </div>

        {/* Back */}
        <div className="tile-back rounded-xl p-4 h-full flex flex-col justify-center gap-2 bg-surface border border-olive/20">
          <p className="font-display text-sm font-bold text-nass-black text-center leading-tight">
            {dept.name}
          </p>
          <p className="font-mono text-olive text-[10px] text-center uppercase tracking-wide">
            {dept.category}
          </p>
          <p className="text-nass-black/50 text-xs text-center leading-relaxed">
            {dept.desc}
          </p>
          <p className="text-nass-black/30 text-xs text-center">
            Rep: {dept.rep}
          </p>
          <p className="text-[#7A5F00] text-xs font-bold text-center">
            {dept.students} students
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function DepartmentsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? DEPARTMENTS
      : DEPARTMENTS.filter((d) => d.category === activeFilter)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero
        title="Our Departments"
        subtitle="Nine disciplines. One community. Infinite possibilities."
        breadcrumbs={[{ label: 'Departments' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-pad">
        <SectionTitle
          label="Academic Divisions"
          title="Explore Every Discipline"
          subtitle="Browse all nine departments under the Faculty of Science, OAU — each with its own legacy, research culture, and student community. Hover a tile to flip it."
        />

        {/* Filter tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-mono text-xs uppercase tracking-wide px-4 py-2 rounded-lg border transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-gold text-nass-black border-gold shadow-gold-sm'
                    : 'glass text-nass-black/60 border-olive/30 hover:text-olive'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Count indicator */}
        <AnimatedSection delay={0.15}>
          <p className="font-mono text-xs text-nass-black/30 text-center mb-10">
            Showing{' '}
            <span className="text-olive font-semibold">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'department' : 'departments'}
            {activeFilter !== 'All' && <span> in {activeFilter}</span>}
          </p>
        </AnimatedSection>

        {/* Grid with stagger */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            {filtered.map((dept, i) => (
              <DeptTile key={dept.id} dept={dept} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <AnimatedSection>
            <div className="text-center py-20">
              <p className="font-mono text-nass-black/30 text-sm">
                No departments found for this category.
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </motion.div>
  )
}
