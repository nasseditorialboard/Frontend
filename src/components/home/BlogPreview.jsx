import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  RiArticleLine,
  RiCalendarLine,
  RiUserLine,
  RiArrowRightLine,
} from 'react-icons/ri'
import AnimatedSection from '../shared/AnimatedSection'
import SectionTitle from '../shared/SectionTitle'

const posts = [
  {
    category: 'Academic',
    title: 'NASS Holds Annual Science Symposium — Groundbreaking Research Presented',
    date: 'May 15, 2025',
    author: 'Adebayo Okon',
    excerpt:
      'The 2025 NASS Annual Science Symposium brought together over 400 students and faculty members for three days of intensive research presentations.',
  },
  {
    category: 'Science News',
    title: 'OAU Chemistry Department Wins National Research Grant Worth N5 Million',
    date: 'May 8, 2025',
    author: 'Chidinma Eze',
    excerpt:
      'The Department of Chemistry has been awarded a prestigious national research grant to fund cutting-edge studies in organic synthesis.',
  },
  {
    category: 'Events',
    title: 'NASS Week 2025: Theme Unveiled — "Science Without Borders"',
    date: 'April 28, 2025',
    author: 'Emeka Nwosu',
    excerpt:
      'The theme for this year\'s flagship NASS Week has been officially announced as "Science Without Borders", celebrating cross-disciplinary collaboration.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function BlogPreview() {
  return (
    <section className="section-pad bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle label="Latest Updates" title="Latest from NASS" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass rounded-xl overflow-hidden flex flex-col"
            >
              {/* Image placeholder */}
              <div className="bg-gradient-to-br from-surface to-card h-44 flex items-center justify-center shrink-0">
                <RiArticleLine
                  size={64}
                  className="text-primary/20 blur-[2px]"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <span className="bg-primary/10 text-primary font-mono text-xs px-2 py-0.5 rounded inline-block w-fit">
                  {post.category}
                </span>

                <h3 className="font-display text-base font-bold text-text-primary mt-2 leading-snug line-clamp-2">
                  {post.title}
                </h3>

                <div className="flex gap-3 mt-2 text-text-muted text-xs">
                  <span className="flex items-center gap-1">
                    <RiCalendarLine size={13} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <RiUserLine size={13} />
                    {post.author}
                  </span>
                </div>

                <p className="text-sm text-text-muted mt-2 line-clamp-2 flex-1">
                  {post.excerpt}
                </p>

                <Link
                  to="/blog"
                  className="text-primary text-sm flex items-center gap-1 mt-3 hover:gap-2 transition-all duration-200 w-fit"
                >
                  Read More <RiArrowRightLine size={15} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.3} className="flex justify-center mt-12">
          <Link to="/blog" className="btn-ghost">
            View All Posts
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
