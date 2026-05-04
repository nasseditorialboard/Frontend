// Resources page — searchable, filterable repository of past questions, notes, NASS documents, and forms
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RiSearchLine, RiGridLine, RiListCheck, RiFilePdfLine,
  RiFileWordLine, RiDownloadLine, RiUploadCloud2Line,
  RiCloseLine, RiFileTextLine,
} from 'react-icons/ri'
import PageHero from '../components/shared/PageHero'
import SectionTitle from '../components/shared/SectionTitle'
import AnimatedSection from '../components/shared/AnimatedSection'

const CATEGORIES = ['All', 'Past Questions', 'Lecture Notes', 'NASS Documents', 'Research Papers', 'Forms']

const RESOURCES = [
  { id: 1, title: 'Physics 301 — Electromagnetism Past Questions 2019–2024', category: 'Past Questions', dept: 'Physics', type: 'PDF', size: '2.4 MB', date: 'Mar 2025', downloads: 234 },
  { id: 2, title: 'Chemistry 201 — Organic Chemistry I Past Questions', category: 'Past Questions', dept: 'Chemistry', type: 'PDF', size: '1.8 MB', date: 'Feb 2025', downloads: 189 },
  { id: 3, title: 'Mathematics 301 — Real Analysis Lecture Notes', category: 'Lecture Notes', dept: 'Mathematics', type: 'PDF', size: '4.1 MB', date: 'Jan 2025', downloads: 156 },
  { id: 4, title: 'NASS Constitution and Standing Orders 2024', category: 'NASS Documents', dept: 'All', type: 'PDF', size: '890 KB', date: 'Jan 2024', downloads: 412 },
  { id: 5, title: 'Biology 201 — Cell Biology Past Questions 2020–2024', category: 'Past Questions', dept: 'Biology', type: 'PDF', size: '1.5 MB', date: 'Apr 2025', downloads: 201 },
  { id: 6, title: 'Biochemistry 301 — Enzymology Lecture Notes', category: 'Lecture Notes', dept: 'Biochemistry', type: 'PDF', size: '3.2 MB', date: 'Mar 2025', downloads: 143 },
  { id: 7, title: 'Research on Antimicrobial Properties of Nigerian Plants', category: 'Research Papers', dept: 'Microbiology', type: 'PDF', size: '5.6 MB', date: 'Dec 2024', downloads: 87 },
  { id: 8, title: 'NASS Financial Report 2023/2024', category: 'NASS Documents', dept: 'All', type: 'PDF', size: '1.1 MB', date: 'Sep 2024', downloads: 298 },
  { id: 9, title: 'Geophysics 401 — Seismic Exploration Notes', category: 'Lecture Notes', dept: 'Geophysics', type: 'PDF', size: '6.3 MB', date: 'Feb 2025', downloads: 92 },
  { id: 10, title: 'Statistics 201 — Probability Theory Past Questions', category: 'Past Questions', dept: 'Statistics', type: 'PDF', size: '1.3 MB', date: 'Mar 2025', downloads: 167 },
  { id: 11, title: 'NASS Membership Registration Form 2025', category: 'Forms', dept: 'All', type: 'DOCX', size: '340 KB', date: 'Jan 2025', downloads: 523 },
  { id: 12, title: 'Computer Science 301 — Algorithms Past Questions', category: 'Past Questions', dept: 'Computer Science', type: 'PDF', size: '2.1 MB', date: 'Apr 2025', downloads: 289 },
  { id: 13, title: 'Zoology 201 — Vertebrate Anatomy Lecture Notes', category: 'Lecture Notes', dept: 'Zoology', type: 'PDF', size: '8.2 MB', date: 'Jan 2025', downloads: 108 },
  { id: 14, title: 'Computational Study of Water Quality in Ile-Ife', category: 'Research Papers', dept: 'Chemistry', type: 'PDF', size: '4.8 MB', date: 'Nov 2024', downloads: 63 },
  { id: 15, title: 'NASS Election Nomination Form 2025', category: 'Forms', dept: 'All', type: 'DOCX', size: '280 KB', date: 'Mar 2025', downloads: 341 },
]

function FileIcon({ type, size = 24 }) {
  const Icon = type === 'DOCX' ? RiFileWordLine : RiFilePdfLine
  return <Icon size={size} />
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
}

export default function ResourcesPage() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [viewMode, setViewMode] = useState('grid')
  const [modalOpen, setModalOpen] = useState(false)

  const filtered = useMemo(() => {
    return RESOURCES.filter((r) => {
      const matchCat = activeCategory === 'All' || r.category === activeCategory
      const q = query.toLowerCase()
      const matchQuery = !q || r.title.toLowerCase().includes(q) || r.dept.toLowerCase().includes(q) || r.category.toLowerCase().includes(q)
      return matchCat && matchQuery
    })
  }, [query, activeCategory])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-bg min-h-screen"
    >
      <PageHero
        title="Resources & Downloads"
        subtitle="Past questions, lecture notes, and documents for every science student."
        breadcrumbs={[{ label: 'Resources' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-pad">

        {/* Search bar */}
        <AnimatedSection className="mb-6">
          <div className="relative max-w-xl mx-auto">
            <RiSearchLine className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search resources by title, department, or category..."
              className="nass-input pl-11 text-sm"
            />
          </div>
        </AnimatedSection>

        {/* Filters + View toggle */}
        <AnimatedSection delay={0.05} className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs uppercase tracking-wide px-4 py-2 rounded-lg border transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-bg border-primary'
                    : 'glass border-border text-text-muted hover:text-primary hover:border-primary/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {[{ icon: RiGridLine, mode: 'grid' }, { icon: RiListCheck, mode: 'list' }].map(({ icon: Icon, mode }) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`p-2 rounded-lg border transition-all ${
                  viewMode === mode
                    ? 'bg-primary/10 border-primary/40 text-primary'
                    : 'glass border-border text-text-muted hover:text-primary'
                }`}
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r, i) => (
              <motion.div
                key={r.id}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: '0 0 25px rgba(0,194,255,0.2)' }}
                className="glass rounded-xl p-5 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <FileIcon type={r.type} size={24} />
                </div>
                <span className={`font-mono text-xs uppercase px-2 py-0.5 rounded border self-start mb-2 ${
                  r.type === 'PDF' ? 'text-red-400 border-red-400/30 bg-red-400/5' : 'text-blue-400 border-blue-400/30 bg-blue-400/5'
                }`}>{r.type}</span>
                <h3 className="font-semibold text-text-primary text-sm leading-snug line-clamp-2 flex-1">{r.title}</h3>
                <div className="mt-3 flex items-center gap-3 text-text-muted text-xs">
                  <span className="font-mono">{r.dept}</span>
                  <span>•</span>
                  <span>{r.size}</span>
                  <span>•</span>
                  <span>{r.date}</span>
                </div>
                <div className="flex items-center gap-1 text-text-muted text-xs mt-1">
                  <RiDownloadLine size={12} />
                  <span>{r.downloads} downloads</span>
                </div>
                <button className="btn-primary text-xs py-2 mt-4 w-full">Download</button>
              </motion.div>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="space-y-3">
            {filtered.map((r, i) => (
              <motion.div
                key={r.id}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover={{ x: 4 }}
                className="glass rounded-xl p-4 flex flex-wrap items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <FileIcon type={r.type} size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-text-primary text-sm font-semibold truncate">{r.title}</p>
                  <p className="text-text-muted text-xs font-mono mt-0.5">{r.dept} • {r.category} • {r.size} • {r.date}</p>
                </div>
                <div className="flex items-center gap-1 text-text-muted text-xs">
                  <RiDownloadLine size={12} />
                  <span>{r.downloads}</span>
                </div>
                <button className="btn-ghost text-xs py-1 px-4">Download</button>
              </motion.div>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-text-muted">
            <RiFileTextLine size={48} className="mx-auto mb-4 text-primary/20" />
            <p className="font-mono text-sm">No resources found. Try a different search or category.</p>
          </div>
        )}

        {/* Submit resource CTA */}
        <AnimatedSection delay={0.2} className="glass rounded-xl p-8 text-center mt-12">
          <h3 className="font-display text-xl font-bold text-text-primary mb-2">Have Resources to Share?</h3>
          <p className="text-text-muted text-sm mb-6 max-w-md mx-auto">
            Help your fellow science students by contributing past questions, lecture notes, or research papers.
          </p>
          <button onClick={() => setModalOpen(true)} className="btn-primary">
            Submit a Resource
          </button>
        </AnimatedSection>
      </div>

      {/* Upload Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass rounded-2xl p-8 w-full max-w-md border border-border"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-lg font-bold text-text-primary">Submit a Resource</h3>
                <button onClick={() => setModalOpen(false)} className="text-text-muted hover:text-primary transition-colors">
                  <RiCloseLine size={22} />
                </button>
              </div>
              <div className="space-y-4">
                <input type="text" placeholder="Resource title" className="nass-input text-sm" />
                <select className="nass-input text-sm">
                  <option value="">Select category</option>
                  {CATEGORIES.slice(1).map((c) => <option key={c}>{c}</option>)}
                </select>
                <select className="nass-input text-sm">
                  <option value="">Select department</option>
                  {['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Biochemistry', 'Microbiology', 'Botany', 'Zoology', 'Geology', 'Geophysics', 'Statistics', 'Computer Science', 'All'].map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/40 transition-colors cursor-pointer">
                  <RiUploadCloud2Line size={36} className="mx-auto text-text-muted mb-2" />
                  <p className="text-text-muted text-sm">Click to upload or drag and drop</p>
                  <p className="text-text-muted text-xs mt-1">PDF, DOC, DOCX up to 20 MB</p>
                </div>
                <div className="flex gap-3 mt-2">
                  <button className="btn-primary flex-1">Submit Resource</button>
                  <button onClick={() => setModalOpen(false)} className="btn-ghost flex-1">Cancel</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
