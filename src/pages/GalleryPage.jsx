import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RiImageLine,
  RiEyeLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCloseLine,
  RiUploadCloud2Line,
} from 'react-icons/ri'
import PageHero from '../components/shared/PageHero'
import SectionTitle from '../components/shared/SectionTitle'
import AnimatedSection from '../components/shared/AnimatedSection'

// ─── Gallery data ─────────────────────────────────────────────────────────────
const GALLERY_ITEMS = [
  { id: 1,  title: 'NASS Week 2024 Opening Ceremony',         category: 'Events'      },
  { id: 2,  title: 'Science Quiz Finals — Chemistry vs Physics', category: 'Events'   },
  { id: 3,  title: 'NASS Football Team Victory',               category: 'Sports'     },
  { id: 4,  title: 'Athletics Day 2024',                        category: 'Sports'     },
  { id: 5,  title: 'Chemistry Lab Open Day',                    category: 'Departments'},
  { id: 6,  title: 'Computer Science Exhibition',               category: 'Departments'},
  { id: 7,  title: 'NASS Executive Inauguration 2024',          category: 'Executives' },
  { id: 8,  title: "President's Valedictory Address",           category: 'Executives' },
  { id: 9,  title: 'Morning Lectures — Faculty Atrium',         category: 'Campus Life'},
  { id: 10, title: 'NASS Dinner & Awards Night',                category: 'Events'     },
  { id: 11, title: 'Basketball Championship Finals',            category: 'Sports'     },
  { id: 12, title: 'Biochemistry Research Showcase',            category: 'Departments'},
  { id: 13, title: 'NASS Week Closing Ceremony',                category: 'Events'     },
  { id: 14, title: 'Alumni Homecoming 2024',                    category: 'Events'     },
  { id: 15, title: 'Microbiology Outreach Programme',           category: 'Campus Life'},
  { id: 16, title: 'Faculty of Sciences Convocation Walk',      category: 'Campus Life'},
  { id: 17, title: 'NASS Secretariat Open Day',                 category: 'Campus Life'},
  { id: 18, title: 'Zoology Field Trip',                        category: 'Departments'},
]

// Inline gradient strings — avoids Tailwind purge issues with dynamic classes
const GRADIENTS = [
  'linear-gradient(135deg, rgba(0,194,255,0.30) 0%, #112236 100%)',
  'linear-gradient(135deg, rgba(0,255,157,0.20) 0%, #0d1b2a 100%)',
  'linear-gradient(135deg, rgba(245,197,24,0.20) 0%, #112236 100%)',
  'linear-gradient(135deg, rgba(0,194,255,0.20) 0%, #0d1b2a 100%)',
  'linear-gradient(135deg, rgba(0,255,157,0.30) 0%, #112236 100%)',
  'linear-gradient(135deg, rgba(0,194,255,0.25) 0%, #0d1b2a 100%)',
  'linear-gradient(135deg, rgba(245,197,24,0.30) 0%, #112236 100%)',
  'linear-gradient(135deg, rgba(0,194,255,0.20) 0%, #112236 100%)',
  'linear-gradient(135deg, rgba(0,255,157,0.15) 0%, #0d1b2a 100%)',
  'linear-gradient(135deg, rgba(245,197,24,0.20) 0%, #112236 100%)',
  'linear-gradient(135deg, rgba(0,194,255,0.30) 0%, #0d1b2a 100%)',
  'linear-gradient(135deg, rgba(0,255,157,0.25) 0%, #112236 100%)',
  'linear-gradient(135deg, rgba(0,194,255,0.15) 0%, #0d1b2a 100%)',
  'linear-gradient(135deg, rgba(245,197,24,0.15) 0%, #112236 100%)',
  'linear-gradient(135deg, rgba(0,255,157,0.20) 0%, #0d1b2a 100%)',
  'linear-gradient(135deg, rgba(0,194,255,0.20) 0%, #112236 100%)',
  'linear-gradient(135deg, rgba(0,255,157,0.30) 0%, #0d1b2a 100%)',
  'linear-gradient(135deg, rgba(245,197,24,0.20) 0%, #0d1b2a 100%)',
]

const FILTER_TABS = ['All', 'Events', 'Sports', 'Departments', 'Executives', 'Campus Life']

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filtered =
    activeFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter)

  const openLightbox = (i) => {
    setLightboxIndex(i)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const prevItem = () =>
    setLightboxIndex((idx) => (idx - 1 + filtered.length) % filtered.length)

  const nextItem = () =>
    setLightboxIndex((idx) => (idx + 1) % filtered.length)

  const currentItem = filtered[lightboxIndex] ?? filtered[0]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <PageHero
        title="Gallery"
        subtitle="Moments, memories, and milestones from NASS OAU."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <div className="max-w-7xl mx-auto px-4 section-pad">
        <SectionTitle label="Visual Archive" title="Photo Gallery" />

        {/* ── Filter Tabs ───────────────────────────────────────────────── */}
        <AnimatedSection delay={0.05}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`font-mono text-xs uppercase tracking-wide px-4 py-2 rounded-lg border transition-all duration-200 ${
                  activeFilter === tab
                    ? 'bg-primary text-bg border-primary shadow-glow-sm'
                    : 'glass text-text-muted border-transparent hover:text-primary hover:border-primary/30'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* ── Image Grid ────────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {filtered.map((item, i) => {
              // Find original index within GALLERY_ITEMS for consistent gradient
              const originalIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id)
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: i * 0.04, ease: 'easeOut' }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openLightbox(i)}
                  className="relative rounded-xl overflow-hidden cursor-pointer group glow-border"
                  style={{ aspectRatio: '1 / 1' }}
                >
                  {/* Gradient background */}
                  <div
                    className="absolute inset-0"
                    style={{ background: GRADIENTS[originalIndex % GRADIENTS.length] }}
                  />

                  {/* Placeholder icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <RiImageLine size={40} className="text-white/10" />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center px-3 gap-2">
                    <RiEyeLine size={32} className="text-primary" />
                    <p className="text-white text-xs text-center leading-snug">{item.title}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-mono text-text-muted text-sm">No photos in this category yet.</p>
          </div>
        )}

        {/* ── Upload button ─────────────────────────────────────────────── */}
        <AnimatedSection delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-2">
            <button
              disabled
              title="Admin feature — coming soon"
              className="btn-ghost opacity-50 cursor-not-allowed flex items-center gap-2 text-sm"
            >
              <RiUploadCloud2Line size={16} />
              Upload Photo
            </button>
            <span className="font-mono text-xs text-text-muted">Admin feature — coming soon</span>
          </div>
        </AnimatedSection>
      </div>

      {/* ── Lightbox ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 glass rounded-full p-3 text-primary hover:shadow-glow-sm transition-shadow z-10"
              aria-label="Close lightbox"
            >
              <RiCloseLine size={20} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevItem() }}
              className="absolute left-4 glass rounded-full p-3 text-primary hover:shadow-glow-sm transition-shadow z-10"
              aria-label="Previous"
            >
              <RiArrowLeftSLine size={24} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextItem() }}
              className="absolute right-4 glass rounded-full p-3 text-primary hover:shadow-glow-sm transition-shadow z-10"
              aria-label="Next"
            >
              <RiArrowRightSLine size={24} />
            </button>

            {/* Lightbox content */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2 }}
              className="max-w-3xl w-full mx-16"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image placeholder */}
              <div
                className="glass rounded-xl flex items-center justify-center"
                style={{ aspectRatio: '16 / 9', background: GRADIENTS[((currentItem?.id ?? 1) - 1) % GRADIENTS.length] }}
              >
                <RiImageLine size={80} className="text-primary/20" />
              </div>

              {/* Title + counter */}
              <div className="mt-4 flex items-start justify-between px-1">
                <h3 className="font-display text-lg font-bold text-text-primary flex-1 pr-4">
                  {currentItem?.title}
                </h3>
                <span className="font-mono text-text-muted text-sm flex-shrink-0">
                  {lightboxIndex + 1} / {filtered.length}
                </span>
              </div>
              <p className="font-mono text-xs text-text-muted mt-1 px-1">
                {currentItem?.category}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
