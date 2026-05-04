import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RiArticleLine,
  RiArrowRightLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCalendarLine,
  RiTimeLine,
  RiUserLine,
  RiPriceTag3Line,
} from 'react-icons/ri'

import PageHero from '../components/shared/PageHero'
import AnimatedSection from '../components/shared/AnimatedSection'
import SectionTitle from '../components/shared/SectionTitle'

export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'nass-science-symposium-2025',
    category: 'Academic',
    title: 'NASS Holds Annual Science Symposium — Groundbreaking Research Presented',
    date: 'May 15, 2025',
    author: 'Adebayo Okon',
    authorDept: 'Physics',
    readTime: '5 min read',
    excerpt:
      'The 2025 NASS Annual Science Symposium brought together over 400 students and faculty members for three days of intensive research presentations, panel discussions, and scientific exhibitions across all 12 departments.',
  },
  {
    id: 2,
    slug: 'chemistry-wins-research-grant',
    category: 'Science News',
    title: 'OAU Chemistry Department Wins National Research Grant Worth N5 Million',
    date: 'May 8, 2025',
    author: 'Chidinma Eze',
    authorDept: 'Biochemistry',
    readTime: '4 min read',
    excerpt:
      'The Department of Chemistry has been awarded a prestigious national research grant to fund cutting-edge studies in organic synthesis and pharmaceutical chemistry, a landmark achievement for OAU sciences.',
  },
  {
    id: 3,
    slug: 'nass-week-2025-theme',
    category: 'Events',
    title: 'NASS Week 2025 Theme Unveiled — "Science Without Borders"',
    date: 'April 28, 2025',
    author: 'Emeka Nwosu',
    authorDept: 'Computer Science',
    readTime: '3 min read',
    excerpt:
      "The theme for this year's flagship NASS Week has been officially announced as \"Science Without Borders\", celebrating cross-disciplinary collaboration and the universal language of science.",
  },
  {
    id: 4,
    slug: 'departmental-games-preview',
    category: 'Sports',
    title: 'Departmental Games 2025: Who Will Claim the Overall Trophy?',
    date: 'April 20, 2025',
    author: 'Yusuf Balogun',
    authorDept: 'Zoology',
    readTime: '6 min read',
    excerpt:
      'With Physics defending their title and Computer Science hungry for their first championship, the 2025 NASS Departmental Games promises to be the most fiercely contested in a decade.',
  },
  {
    id: 5,
    slug: 'microbiology-outreach',
    category: 'Announcements',
    title: 'Microbiology Students Conduct Free Health Screening in Ile-Ife',
    date: 'April 12, 2025',
    author: 'Ngozi Eze',
    authorDept: 'Microbiology',
    readTime: '4 min read',
    excerpt:
      'Over 200 community members benefited from a free health screening exercise organized by NASS Microbiology representatives in partnership with OAU Teaching Hospital.',
  },
  {
    id: 6,
    slug: 'alumni-mentorship-programme',
    category: 'Academic',
    title: 'NASS Launches Alumni Mentorship Programme — 30 Alumni Mentors Confirmed',
    date: 'April 5, 2025',
    author: 'Adaeze Nwofor',
    authorDept: 'Biology',
    readTime: '5 min read',
    excerpt:
      'Thirty distinguished NASS alumni from across industries have signed up to mentor current students through the newly launched NASS Mentorship Programme, bridging the gap between academia and industry.',
  },
]

const FILTERS = ['All', 'Academic', 'Events', 'Science News', 'Sports', 'Announcements']

// Gradient accent palettes for card placeholders, cycled by index
const CARD_GRADIENTS = [
  'from-primary/20 to-secondary/10',
  'from-secondary/20 to-primary/10',
  'from-gold/20 to-primary/10',
  'from-primary/15 to-[#7a9bb5]/10',
  'from-secondary/15 to-gold/10',
]

// Category badge colour mapping
const categoryColor = {
  Academic: 'text-primary border-primary/30',
  'Science News': 'text-secondary border-secondary/30',
  Events: 'text-gold border-gold/30',
  Sports: 'text-[#ff6b6b] border-[#ff6b6b]/30',
  Announcements: 'text-[#c084fc] border-[#c084fc]/30',
}

function CategoryBadge({ category }) {
  const colors = categoryColor[category] || 'text-text-muted border-white/10'
  return (
    <span
      className={`font-mono text-[10px] uppercase tracking-widest border rounded-full px-2.5 py-0.5 inline-block ${colors}`}
    >
      {category}
    </span>
  )
}

const POSTS_PER_PAGE = 6

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [page, setPage] = useState(1)

  const featuredPost = BLOG_POSTS[0]

  const allFiltered =
    activeFilter === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeFilter)

  // When a filter is active, show all matching posts in grid (including featured if it matches)
  // When filter is "All", featured is shown separately, rest go to grid
  const gridPosts =
    activeFilter === 'All' ? BLOG_POSTS.slice(1) : allFiltered

  const totalPages = Math.ceil(gridPosts.length / POSTS_PER_PAGE)
  const pagedPosts = gridPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)

  const handleFilter = (f) => {
    setActiveFilter(f)
    setPage(1)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero
        title="NASS Blog & News"
        subtitle="Insights, updates, and stories from the science community."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <div className="max-w-7xl mx-auto px-4 section-pad">
        <SectionTitle
          label="Latest Stories"
          title="From the Science Community"
          subtitle="News, announcements, academic highlights, and more — all in one place."
        />

        {/* Featured post — only shown when filter is All */}
        {activeFilter === 'All' && (
          <AnimatedSection delay={0.1} className="mb-14">
            <div className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-primary/20 transition-colors duration-300">
              <div className="flex flex-col md:flex-row">
                {/* Image placeholder */}
                <div className="md:w-2/5 min-h-[220px] bg-gradient-to-br from-primary/20 to-card flex items-center justify-center flex-shrink-0">
                  <RiArticleLine size={80} className="text-primary/20" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center gap-3">
                  <CategoryBadge category={featuredPost.category} />
                  <h2 className="font-display text-2xl font-bold text-text-primary leading-snug">
                    {featuredPost.title}
                  </h2>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted font-mono">
                    <span className="flex items-center gap-1">
                      <RiUserLine size={12} />
                      {featuredPost.author}
                      <span className="text-primary/60">— {featuredPost.authorDept}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <RiCalendarLine size={12} />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <RiTimeLine size={12} />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <p className="text-text-muted text-sm leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mt-2">
                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="btn-primary inline-flex items-center gap-2 text-sm"
                    >
                      Read Full Story
                      <RiArrowRightLine size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Filter bar */}
        <AnimatedSection delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => handleFilter(f)}
                className={`font-mono text-xs uppercase tracking-wide px-4 py-2 rounded-lg border transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-primary text-bg border-primary shadow-glow-sm'
                    : 'glass text-text-muted border-transparent hover:text-primary hover:border-primary/30'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Posts grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + page}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pagedPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
                whileHover={{ y: -4, boxShadow: '0 0 28px rgba(0,194,255,0.15)' }}
                className="glass rounded-xl overflow-hidden border border-white/5 hover:border-primary/20 transition-colors duration-300 flex flex-col"
              >
                {/* Image placeholder */}
                <div
                  className={`h-40 bg-gradient-to-br ${
                    CARD_GRADIENTS[i % CARD_GRADIENTS.length]
                  } flex items-center justify-center`}
                >
                  <RiArticleLine size={40} className="text-primary/20" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <CategoryBadge category={post.category} />

                  <h3 className="font-display text-base font-bold text-text-primary leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-[11px] text-text-muted font-mono flex-wrap">
                    <span className="flex items-center gap-1">
                      <RiCalendarLine size={11} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <RiTimeLine size={11} />
                      {post.readTime}
                    </span>
                  </div>

                  <p className="text-sm text-text-muted leading-relaxed line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-primary flex items-center gap-1 text-sm hover:gap-2 transition-all duration-200 mt-1 group"
                  >
                    Read More
                    <RiArrowRightLine
                      size={13}
                      className="group-hover:translate-x-0.5 transition-transform duration-200"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {pagedPosts.length === 0 && (
          <AnimatedSection>
            <div className="text-center py-20">
              <p className="font-mono text-text-muted text-sm">
                No posts found for this category.
              </p>
            </div>
          </AnimatedSection>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <AnimatedSection delay={0.2}>
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="btn-ghost py-2 px-4 text-sm flex items-center gap-1 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <RiArrowLeftSLine size={16} />
                Prev
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className={`w-8 h-8 rounded-lg font-mono text-xs transition-all duration-200 ${
                      page === n
                        ? 'bg-primary text-bg shadow-glow-sm'
                        : 'glass text-text-muted hover:text-primary'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="btn-ghost py-2 px-4 text-sm flex items-center gap-1 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next
                <RiArrowRightSLine size={16} />
              </button>
            </div>
          </AnimatedSection>
        )}
      </div>
    </motion.div>
  )
}
