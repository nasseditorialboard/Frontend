// Section title — Space Mono label, Orbitron heading, gold underline bar
import AnimatedSection from './AnimatedSection'

export default function SectionTitle({ label, title, subtitle, center = false }) {
  return (
    <AnimatedSection className={`mb-12 ${center ? 'text-center' : ''}`}>
      {label && (
        <p className="font-mono text-olive text-xs tracking-widest mb-3 uppercase">
          // {label}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-nass-black mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-nass-black/50 text-base max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-[3px] w-16 bg-gradient-to-r from-gold to-yellow-500 rounded-full ${center ? 'mx-auto' : ''}`} />
    </AnimatedSection>
  )
}
