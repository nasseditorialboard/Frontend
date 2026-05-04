import { motion } from 'framer-motion'

import HeroSection from '../components/home/HeroSection'
import AnnouncementsTicker from '../components/home/AnnouncementsTicker'
import AboutSnapshot from '../components/home/AboutSnapshot'
import DepartmentsPreview from '../components/home/DepartmentsPreview'
import BlogPreview from '../components/home/BlogPreview'
import EventsPreview from '../components/home/EventsPreview'
import ExecutiveSpotlight from '../components/home/ExecutiveSpotlight'
import GalleryTeaser from '../components/home/GalleryTeaser'
import SportsHighlights from '../components/home/SportsHighlights'
import NewsletterCTA from '../components/home/NewsletterCTA'

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Full-width — no container */}
      <HeroSection />

      {/* Full-width — no container */}
      <AnnouncementsTicker />

      {/* Contained — odd #1 → bg-surface */}
      <div className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-pad">
          <AboutSnapshot />
        </div>
      </div>

      {/* Contained — even #2 → default bg */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-pad">
        <DepartmentsPreview />
      </div>

      {/* Contained — odd #3 → bg-surface */}
      <div className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-pad">
          <BlogPreview />
        </div>
      </div>

      {/* Contained — even #4 → default bg */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-pad">
        <EventsPreview />
      </div>

      {/* Contained — odd #5 → bg-surface */}
      <div className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-pad">
          <ExecutiveSpotlight />
        </div>
      </div>

      {/* Full-width — no container */}
      <GalleryTeaser />

      {/* Contained — even #6 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-pad">
        <SportsHighlights />
      </div>

      {/* Full-width — no container */}
      <NewsletterCTA />
    </motion.div>
  )
}
