import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  RiImageLine,
  RiCalendarLine,
  RiTimeLine,
  RiArrowLeftLine,
  RiTwitterXLine,
  RiLinkedinBoxLine,
  RiFileCopyLine,
  RiCheckLine,
  RiArrowRightLine,
  RiPriceTag3Line,
} from 'react-icons/ri'
import { FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

import PageHero from '../components/shared/PageHero'
import AnimatedSection from '../components/shared/AnimatedSection'

// ─── Shared post data ────────────────────────────────────────────────────────
const BLOG_POSTS = [
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

const ALL_CATEGORIES = ['Academic', 'Events', 'Science News', 'Sports', 'Announcements']

// Category badge colours
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

// Author initials helper
function initials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

// ─── Not found page ──────────────────────────────────────────────────────────
function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-4">
      <p className="font-mono text-text-muted text-sm uppercase tracking-widest">404</p>
      <h1 className="font-display text-4xl font-bold text-text-primary">Post Not Found</h1>
      <p className="text-text-muted text-base max-w-md text-center">
        The article you are looking for does not exist or may have been moved.
      </p>
      <Link
        to="/blog"
        className="btn-primary inline-flex items-center gap-2 text-sm mt-2"
      >
        <RiArrowLeftLine size={14} />
        Back to Blog
      </Link>
    </div>
  )
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function BlogPostPage() {
  const { slug } = useParams()
  const [copied, setCopied] = useState(false)

  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) return <NotFound />

  // Related posts: up to 3 others (prefer same category first)
  const related = [
    ...BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category),
    ...BLOG_POSTS.filter((p) => p.slug !== slug && p.category !== post.category),
  ].slice(0, 3)

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: post.category },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back link */}
        <AnimatedSection delay={0.05}>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-text-muted text-sm hover:text-primary transition-colors mb-8 font-mono"
          >
            <RiArrowLeftLine size={14} />
            Back to Blog
          </Link>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* ── Main content ─────────────────────────────────────────────── */}
          <main className="flex-1 min-w-0">
            {/* Hero image placeholder */}
            <AnimatedSection delay={0.1}>
              <div className="glass rounded-2xl h-64 flex items-center justify-center bg-gradient-to-br from-primary/10 to-card mb-8 border border-white/5">
                <RiImageLine size={64} className="text-primary/20" />
              </div>
            </AnimatedSection>

            {/* Meta row */}
            <AnimatedSection delay={0.15}>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {/* Author avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-bg text-sm font-bold flex-shrink-0 select-none">
                  {initials(post.author)}
                </div>

                {/* Author info */}
                <div className="flex flex-col">
                  <span className="text-text-primary font-semibold text-sm leading-tight">
                    {post.author}
                  </span>
                  <span className="text-text-muted text-xs">{post.authorDept}</span>
                </div>

                <span className="w-px h-6 bg-white/10 hidden sm:block" />

                {/* Date */}
                <span className="flex items-center gap-1.5 text-text-muted text-xs font-mono">
                  <RiCalendarLine size={12} />
                  {post.date}
                </span>

                {/* Read time */}
                <span className="flex items-center gap-1.5 text-text-muted text-xs font-mono">
                  <RiTimeLine size={12} />
                  {post.readTime}
                </span>

                {/* Category */}
                <CategoryBadge category={post.category} />
              </div>
            </AnimatedSection>

            {/* Article body */}
            <AnimatedSection delay={0.2}>
              <article>
                <h2 className="font-display text-xl font-bold text-text-primary mt-8 mb-4">
                  Introduction
                </h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  {post.excerpt} The event, held at the Faculty of Science amphitheatre, saw
                  students from the 100 to 400 level come together to share their research
                  findings, challenge assumptions, and push the boundaries of what it means to
                  be a science student at Obafemi Awolowo University. Faculty advisors praised
                  the depth of preparation shown by student researchers, with several projects
                  drawing commentary from senior academics.
                </p>
                <p className="text-text-muted leading-relaxed">
                  The organising committee, led by the NASS Science and Technology Portfolio,
                  spent over six weeks coordinating logistics, reviewing abstracts, and
                  scheduling presentations across three concurrent halls. Each department was
                  allocated a themed booth and a dedicated presentation slot, ensuring broad
                  representation and equitable visibility for every discipline in the faculty.
                </p>

                <h2 className="font-display text-xl font-bold text-text-primary mt-8 mb-4">
                  Key Highlights
                </h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  Among the standout presentations was a paper by a 300-level Chemistry student
                  on the synthesis of novel antimicrobial compounds derived from Nigerian
                  medicinal plants — a study that earned a standing ovation from the audience
                  and drew interest from two visiting pharmaceutical researchers. The Physics
                  department showcased a custom-built spectrometer constructed entirely from
                  locally sourced components, demonstrating that impactful science does not
                  require imported equipment.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Computer Science students demonstrated three independent machine learning
                  projects, including a crop disease detection model trained on a dataset of
                  images sourced from farms in Osun State. The Microbiology team presented
                  findings from an eight-week community health study, reinforcing the
                  department's growing reputation for translational research with direct
                  societal impact.
                </p>

                {/* Blockquote */}
                <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 italic text-text-primary text-lg leading-relaxed">
                  "Science is not just a discipline; it is a way of thinking, a culture of
                  curiosity, and a commitment to truth."
                </blockquote>

                <h2 className="font-display text-xl font-bold text-text-primary mt-8 mb-4">
                  Looking Ahead
                </h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  Building on the success of this year's symposium, NASS plans to formalise
                  the event as an annual fixture on the faculty calendar, with increased
                  involvement from alumni, industry partners, and external universities. A
                  dedicated proceedings journal is being explored to provide students with a
                  platform for formal academic publishing before graduation.
                </p>
                <p className="text-text-muted leading-relaxed">
                  The 2026 edition is already being discussed, with proposals to include an
                  inter-university component that would invite representatives from other
                  faculties of science across Nigeria — a move that would cement OAU's
                  position as a hub of student-led scientific innovation on the continent.
                </p>
              </article>
            </AnimatedSection>

            {/* Share buttons */}
            <AnimatedSection delay={0.25}>
              <div className="mt-10 pt-8 border-t border-white/5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-text-muted text-sm font-mono">Share this post:</span>

                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on X (Twitter)"
                    className="rounded-lg border border-white/10 p-2 text-text-muted hover:text-primary hover:border-primary/40 transition-colors duration-200"
                  >
                    <RiTwitterXLine size={16} />
                  </a>

                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + (typeof window !== 'undefined' ? window.location.href : ''))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on WhatsApp"
                    className="rounded-lg border border-white/10 p-2 text-text-muted hover:text-secondary hover:border-secondary/40 transition-colors duration-200"
                  >
                    <FaWhatsapp size={16} />
                  </a>

                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="rounded-lg border border-white/10 p-2 text-text-muted hover:text-primary hover:border-primary/40 transition-colors duration-200"
                  >
                    <RiLinkedinBoxLine size={16} />
                  </a>

                  <button
                    onClick={handleCopy}
                    aria-label="Copy link"
                    className={`rounded-lg border p-2 transition-colors duration-200 ${
                      copied
                        ? 'border-secondary/40 text-secondary'
                        : 'border-white/10 text-text-muted hover:text-primary hover:border-primary/40'
                    }`}
                  >
                    {copied ? <RiCheckLine size={16} /> : <RiFileCopyLine size={16} />}
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </main>

          {/* ── Sidebar ───────────────────────────────────────────────────── */}
          <aside className="lg:w-72 flex-shrink-0 space-y-8">
            {/* Related Posts */}
            <AnimatedSection delay={0.3}>
              <div>
                <h3 className="font-display text-base font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-primary rounded-full inline-block" />
                  Related Posts
                </h3>
                <div className="space-y-3">
                  {related.map((rp) => (
                    <Link
                      key={rp.id}
                      to={`/blog/${rp.slug}`}
                      className="block glass rounded-xl p-4 border border-white/5 hover:border-primary/20 transition-colors duration-200 group"
                    >
                      <h4 className="font-display text-sm font-semibold text-text-primary line-clamp-2 group-hover:text-primary transition-colors duration-200">
                        {rp.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-text-muted text-xs font-mono flex items-center gap-1">
                          <RiCalendarLine size={10} />
                          {rp.date}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-primary text-xs mt-2 group-hover:gap-1.5 transition-all duration-200">
                        Read more
                        <RiArrowRightLine size={10} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Categories */}
            <AnimatedSection delay={0.4}>
              <div>
                <h3 className="font-display text-base font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-secondary rounded-full inline-block" />
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ALL_CATEGORIES.map((cat) => (
                    <Link
                      key={cat}
                      to={`/blog?category=${encodeURIComponent(cat)}`}
                      className="font-mono text-xs uppercase tracking-wide glass rounded-full px-3 py-1 text-text-muted hover:text-primary hover:border-primary/40 transition-colors border border-white/10 duration-200"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Tags / quick info */}
            <AnimatedSection delay={0.45}>
              <div className="glass rounded-xl p-5 border border-white/5 space-y-3">
                <h3 className="font-display text-sm font-bold text-text-primary flex items-center gap-2">
                  <RiPriceTag3Line size={14} className="text-primary" />
                  Post Details
                </h3>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Author</span>
                    <span className="text-text-primary">{post.author}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Department</span>
                    <span className="text-text-primary">{post.authorDept}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Published</span>
                    <span className="text-text-primary">{post.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Read time</span>
                    <span className="text-text-primary">{post.readTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Category</span>
                    <CategoryBadge category={post.category} />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </aside>
        </div>
      </div>
    </motion.div>
  )
}
