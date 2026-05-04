import { Link } from 'react-router-dom'
import { RiImageLine, RiEye2Line } from 'react-icons/ri'
import AnimatedSection from '../shared/AnimatedSection'
import SectionTitle from '../shared/SectionTitle'

const placeholders = [
  'from-primary/20 to-surface',
  'from-secondary/20 to-card',
  'from-gold/20 to-surface',
  'from-primary/10 to-card',
  'from-secondary/10 to-surface',
  'from-gold/10 to-card',
  'from-primary/20 to-card',
  'from-secondary/20 to-surface',
  'from-gold/20 to-card',
]

export default function GalleryTeaser() {
  return (
    <AnimatedSection>
      <section className="section-pad bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label="Memories" title="NASS in Pictures" />

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {placeholders.map((gradient, i) => (
              <div
                key={i}
                className={`group aspect-square relative rounded-xl overflow-hidden bg-gradient-to-br ${gradient} cursor-pointer`}
              >
                {/* Default: placeholder icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <RiImageLine size={40} className="text-white/10" />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-bg/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <RiEye2Line size={28} className="text-primary" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection delay={0.3} className="flex justify-center mt-12">
            <Link to="/gallery" className="btn-ghost">
              Explore Gallery
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </AnimatedSection>
  )
}
