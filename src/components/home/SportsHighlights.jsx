import { Link } from 'react-router-dom'
import {
  MdSportsSoccer,
  MdSportsBasketball,
  MdSportsTennis,
  MdSportsVolleyball,
  MdSportsMartialArts,
} from 'react-icons/md'
import { RiRunLine } from 'react-icons/ri'
import AnimatedSection from '../shared/AnimatedSection'
import SectionTitle from '../shared/SectionTitle'

const stats = [
  { value: '47', label: 'Wins' },
  { value: '8', label: 'Championships' },
  { value: '6', label: 'Sports' },
]

const sports = [
  { name: 'Soccer', icon: MdSportsSoccer },
  { name: 'Basketball', icon: MdSportsBasketball },
  { name: 'Athletics', icon: RiRunLine },
  { name: 'Badminton', icon: MdSportsTennis },
  { name: 'Volleyball', icon: MdSportsVolleyball },
  { name: 'Table Tennis', icon: MdSportsMartialArts },
]

export default function SportsHighlights() {
  return (
    <AnimatedSection>
      <SectionTitle label="Athletics" title="NASS Sports" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* Left column */}
        <AnimatedSection delay={0.1}>
          <h3 className="font-display text-2xl font-bold text-nass-black leading-snug">
            Compete. Triumph. Represent.
          </h3>
          <p className="text-nass-black/55 mt-4 leading-relaxed">
            NASS OAU fields competitive teams across multiple sports categories,
            representing the Faculty of Sciences with pride in all inter-faculty
            and inter-departmental competitions.
          </p>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-3 mt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-lg p-3 text-center">
                <p className="gradient-text font-display text-xl font-bold leading-none">
                  {stat.value}
                </p>
                <p className="text-nass-black/50 text-xs font-mono mt-1 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Right column — sport category cards */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 gap-3">
            {sports.map((sport) => {
              const Icon = sport.icon
              return (
                <div
                  key={sport.name}
                  className="glass rounded-xl p-4 border border-transparent hover:border-olive/30 transition-all cursor-pointer"
                >
                  <Icon size={28} className="text-[#7A5F00]" />
                  <p className="text-nass-black font-semibold text-sm mt-2">
                    {sport.name}
                  </p>
                </div>
              )
            })}
          </div>
        </AnimatedSection>
      </div>

      {/* CTA */}
      <AnimatedSection delay={0.35} className="flex justify-center mt-10">
        <Link to="/sports" className="btn-ghost">
          View Sports
        </Link>
      </AnimatedSection>
    </AnimatedSection>
  )
}
