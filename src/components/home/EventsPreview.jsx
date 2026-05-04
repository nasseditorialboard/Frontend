import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { RiMapPinLine, RiTimeLine } from 'react-icons/ri'
import AnimatedSection from '../shared/AnimatedSection'
import SectionTitle from '../shared/SectionTitle'

const events = [
  {
    day: '05',
    month: 'JUN',
    name: 'NASS Science Quiz Championship',
    type: 'Academic',
    location: 'Senate Building, OAU',
    time: '10:00 AM',
  },
  {
    day: '15',
    month: 'JUN',
    name: 'Departmental Games — Round 1',
    type: 'Sports',
    location: 'OAU Sports Complex',
    time: '2:00 PM',
  },
  {
    day: '20',
    month: 'JUN',
    name: 'End-of-Semester Social Night',
    type: 'Social',
    location: 'Faculty Hall, Sciences',
    time: '7:00 PM',
  },
  {
    day: '28',
    month: 'JUN',
    name: 'NASS Alumni Meetup & Mentorship',
    type: 'Cultural',
    location: 'Great Hall, OAU',
    time: '11:00 AM',
  },
]

const typeBadge = {
  Academic: 'bg-primary/10 text-primary border border-primary/20',
  Sports: 'bg-gold/10 text-gold border border-gold/20',
  Social: 'bg-secondary/10 text-secondary border border-secondary/20',
  Cultural: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
}

export default function EventsPreview() {
  return (
    <section className="section-pad bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle label="What's Coming" title="Upcoming Events" />

        {/* Horizontally scrollable row */}
        <AnimatedSection delay={0.1}>
          <div
            className="flex gap-4 overflow-x-auto pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {events.map((event, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass rounded-xl p-5 min-w-[260px] flex flex-col shrink-0"
              >
                {/* Date block */}
                <div className="flex flex-col leading-none">
                  <span className="font-display text-3xl font-bold gradient-text">
                    {event.day}
                  </span>
                  <span className="font-mono text-xs text-text-muted uppercase tracking-widest mt-0.5">
                    {event.month}
                  </span>
                </div>

                {/* Event name */}
                <h3 className="font-display text-sm font-bold text-text-primary mt-3 leading-snug">
                  {event.name}
                </h3>

                {/* Type badge */}
                <span
                  className={`font-mono text-xs px-2 py-0.5 rounded w-fit mt-2 ${typeBadge[event.type] ?? ''}`}
                >
                  {event.type}
                </span>

                {/* Meta */}
                <div className="flex flex-col gap-1 mt-3">
                  <span className="flex items-center gap-1.5 text-text-muted text-xs">
                    <RiMapPinLine size={13} className="shrink-0" />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-text-muted text-xs">
                    <RiTimeLine size={13} className="shrink-0" />
                    {event.time}
                  </span>
                </div>

                {/* RSVP */}
                <button className="btn-ghost text-xs py-1 px-3 mt-3 w-full">
                  RSVP
                </button>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.3} className="flex justify-center mt-10">
          <Link to="/events" className="btn-ghost">
            View Full Calendar
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
