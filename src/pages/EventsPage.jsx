import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RiMapPinLine,
  RiTimeLine,
  RiCalendarLine,
  RiListCheck,
  RiGridLine,
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
} from 'react-icons/ri'
import PageHero from '../components/shared/PageHero'
import AnimatedSection from '../components/shared/AnimatedSection'
import SectionTitle from '../components/shared/SectionTitle'

// ─── Data ──────────────────────────────────────────────────────────────────────
const EVENTS = [
  {
    id: 1,
    day: '05',
    month: 'Jun',
    year: '2025',
    name: 'NASS Science Quiz Championship',
    type: 'Academic',
    location: 'Senate Building, OAU',
    time: '10:00 AM',
    desc: 'Annual inter-departmental science quiz competition with teams from all 12 departments competing for the NASS Quiz Trophy.',
  },
  {
    id: 2,
    day: '10',
    month: 'Jun',
    year: '2025',
    name: 'Sports Day — Registration Deadline',
    type: 'Sports',
    location: 'NASS Secretariat',
    time: '12:00 PM',
    desc: 'Final deadline for team registration for the 2025 NASS Departmental Games. All department reps must submit team lists.',
  },
  {
    id: 3,
    day: '15',
    month: 'Jun',
    year: '2025',
    name: 'Departmental Games Opening Ceremony',
    type: 'Sports',
    location: 'OAU Sports Complex',
    time: '9:00 AM',
    desc: 'The grand opening of the 2025 NASS Departmental Games with a parade of teams and the symbolic lighting of the NASS torch.',
  },
  {
    id: 4,
    day: '20',
    month: 'Jun',
    year: '2025',
    name: 'End-of-Semester Social Night',
    type: 'Social',
    location: 'Faculty of Sciences Hall',
    time: '7:00 PM',
    desc: 'Annual end-of-semester social gathering for all NASS members. Live music, awards, and recognition of outstanding students.',
  },
  {
    id: 5,
    day: '28',
    month: 'Jun',
    year: '2025',
    name: 'NASS Alumni Meetup & Mentorship Fair',
    type: 'Cultural',
    location: 'Great Hall, OAU',
    time: '11:00 AM',
    desc: 'Annual meeting between NASS alumni and current students featuring career talks, networking sessions, and mentorship pairings.',
  },
  {
    id: 6,
    day: '05',
    month: 'Jul',
    year: '2025',
    name: 'NASS Week 2025 — Opening Day',
    type: 'Academic',
    location: 'Faculty of Sciences, OAU',
    time: '8:00 AM',
    desc: 'The flagship annual NASS Week kicks off with the theme "Science Without Borders" — 5 days of lectures, competitions, and exhibitions.',
  },
  {
    id: 7,
    day: '10',
    month: 'Jul',
    year: '2025',
    name: 'Annual Science Exhibition',
    type: 'Academic',
    location: 'Faculty Atrium, OAU',
    time: '10:00 AM',
    desc: 'Students showcase research projects, innovations, and scientific experiments in this all-day public exhibition open to the entire university.',
  },
  {
    id: 8,
    day: '15',
    month: 'Jul',
    year: '2025',
    name: 'NASS Annual Dinner & Awards Night',
    type: 'Cultural',
    location: 'UITH Conference Hall, Ile-Ife',
    time: '6:00 PM',
    desc: 'The most prestigious night on the NASS calendar. Formal dinner, recognition of outstanding students, executives, and alumni.',
  },
]

const EVENT_TYPES = ['Academic', 'Sports', 'Social', 'Cultural']

const TYPE_BADGE = {
  Academic: 'text-primary border-primary/30',
  Sports: 'text-gold border-gold/30',
  Social: 'text-secondary border-secondary/30',
  Cultural: 'text-purple-400 border-purple-400/30',
}

// June 2025 calendar helpers
const JUNE_DAYS = 30
const JUNE_START_DOW = 0 // June 1, 2025 is a Sunday
const JUNE_EVENT_DAYS = new Set(EVENTS.filter((e) => e.month === 'Jun').map((e) => parseInt(e.day, 10)))

function TypeBadge({ type }) {
  return (
    <span
      className={`font-mono text-xs uppercase px-2 py-0.5 rounded border ${TYPE_BADGE[type] ?? 'text-text-muted border-text-muted/30'}`}
    >
      {type}
    </span>
  )
}

// ─── List View ─────────────────────────────────────────────────────────────────
function ListView({ activeTypes }) {
  const months = ['Jun', 'Jul']
  const filtered = EVENTS.filter(
    (e) => activeTypes.length === 0 || activeTypes.includes(e.type)
  )

  return (
    <div className="flex flex-col gap-10">
      {months.map((month) => {
        const group = filtered.filter((e) => e.month === month)
        if (group.length === 0) return null
        return (
          <div key={month}>
            <h3 className="font-display text-lg text-text-primary mb-4 border-b border-white/10 pb-2">
              {month === 'Jun' ? 'June 2025' : 'July 2025'}
            </h3>
            <div className="flex flex-col gap-4">
              {group.map((event, i) => (
                <AnimatedSection key={event.id} delay={i * 0.07}>
                  <div className="glass rounded-xl p-5 flex gap-5 items-start hover:border-primary/30 border border-transparent transition-all duration-300">
                    {/* Date block */}
                    <div className="flex-shrink-0 text-center min-w-[52px]">
                      <div className="gradient-text font-display text-3xl font-bold leading-none">
                        {event.day}
                      </div>
                      <div className="font-mono text-xs text-text-muted uppercase mt-1">
                        {event.month}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <h4 className="font-display text-base font-bold text-text-primary">
                          {event.name}
                        </h4>
                        <TypeBadge type={event.type} />
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-muted mb-2">
                        <span className="flex items-center gap-1">
                          <RiMapPinLine size={12} />
                          {event.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <RiTimeLine size={12} />
                          {event.time}
                        </span>
                      </div>
                      <p className="text-sm text-text-muted line-clamp-2">{event.desc}</p>
                    </div>

                    {/* RSVP */}
                    <div className="flex-shrink-0 hidden sm:block">
                      <button className="btn-ghost text-xs py-1 px-3 whitespace-nowrap">
                        RSVP
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        )
      })}

      {filtered.length === 0 && (
        <div className="glass rounded-xl p-10 text-center text-text-muted font-mono text-sm">
          No events match the selected filters.
        </div>
      )}
    </div>
  )
}

// ─── Calendar View ─────────────────────────────────────────────────────────────
function CalendarView() {
  const [selectedDay, setSelectedDay] = useState(null)
  const TODAY = 5 // hardcoded current day for June
  const DOW_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  // Build grid cells: leading empty cells + 30 days
  const cells = []
  for (let i = 0; i < JUNE_START_DOW; i++) cells.push(null)
  for (let d = 1; d <= JUNE_DAYS; d++) cells.push(d)

  const selectedEvents = selectedDay
    ? EVENTS.filter((e) => e.month === 'Jun' && parseInt(e.day, 10) === selectedDay)
    : []

  return (
    <div>
      {/* Month header */}
      <div className="glass rounded-xl p-4 flex items-center justify-between mb-4">
        <button
          disabled
          className="btn-ghost text-xs px-3 py-1.5 opacity-40 cursor-not-allowed"
        >
          Prev
        </button>
        <span className="font-display text-base font-bold text-text-primary">June 2025</span>
        <button
          disabled
          className="btn-ghost text-xs px-3 py-1.5 opacity-40 cursor-not-allowed"
        >
          Next
        </button>
      </div>

      {/* Day-of-week headers */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {DOW_LABELS.map((d) => (
          <div
            key={d}
            className="font-mono text-xs text-text-muted uppercase text-center py-1"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, idx) => (
          <div
            key={idx}
            onClick={() => day && setSelectedDay(selectedDay === day ? null : day)}
            className={`glass rounded-lg p-2 min-h-[60px] text-sm transition-all duration-200 ${
              day ? 'cursor-pointer hover:border-primary/40 border border-transparent' : 'opacity-0 pointer-events-none'
            } ${day === TODAY ? 'border border-primary shadow-glow-sm' : ''} ${
              day === selectedDay ? 'bg-primary/10 border-primary/50 border' : ''
            }`}
          >
            {day && (
              <>
                <span
                  className={`font-mono text-xs font-semibold ${
                    day === TODAY ? 'text-primary' : 'text-text-muted'
                  }`}
                >
                  {day}
                </span>
                {JUNE_EVENT_DAYS.has(day) && (
                  <div className="flex justify-center mt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {/* Selected day events */}
      <AnimatePresence>
        {selectedDay && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-6"
          >
            <div className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
              June {String(selectedDay).padStart(2, '0')} — Events
            </div>
            {selectedEvents.length > 0 ? (
              <div className="flex flex-col gap-3">
                {selectedEvents.map((event) => (
                  <div
                    key={event.id}
                    className="glass rounded-xl p-4 border border-primary/20"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-display text-sm font-bold text-text-primary">
                        {event.name}
                      </span>
                      <TypeBadge type={event.type} />
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-muted">
                      <span className="flex items-center gap-1">
                        <RiTimeLine size={11} />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <RiMapPinLine size={11} />
                        {event.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="font-mono text-xs text-text-muted glass rounded-xl p-4">
                No events scheduled for this day.
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Sidebar ───────────────────────────────────────────────────────────────────
function Sidebar({ activeTypes, setActiveTypes }) {
  const upcoming = EVENTS.slice(0, 4)

  function toggleType(type) {
    setActiveTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    )
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Upcoming quick list */}
      <div className="glass rounded-xl p-5">
        <div className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
          Upcoming Events
        </div>
        <div className="flex flex-col gap-3">
          {upcoming.map((event) => (
            <div
              key={event.id}
              className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-0 last:pb-0"
            >
              <div className="flex-shrink-0 text-center">
                <div className="gradient-text font-display text-lg font-bold leading-none">
                  {event.day}
                </div>
                <div className="font-mono text-xs text-text-muted uppercase">{event.month}</div>
              </div>
              <div className="min-w-0">
                <p className="text-text-primary text-xs font-semibold line-clamp-2 leading-snug">
                  {event.name}
                </p>
                <p className="font-mono text-xs text-text-muted mt-0.5">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter by type */}
      <div className="glass rounded-xl p-5">
        <div className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
          Filter by Type
        </div>
        <div className="flex flex-col gap-2">
          {EVENT_TYPES.map((type) => {
            const active = activeTypes.includes(type)
            return (
              <button
                key={type}
                onClick={() => toggleType(type)}
                className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-lg border text-xs font-mono uppercase tracking-wide transition-all duration-200 ${
                  active
                    ? 'bg-primary/10 border-primary/30 text-primary'
                    : 'border-transparent text-text-muted hover:text-text-primary hover:border-white/10'
                }`}
              >
                {active ? (
                  <RiCheckboxCircleLine size={14} className="text-primary flex-shrink-0" />
                ) : (
                  <RiCheckboxBlankCircleLine size={14} className="flex-shrink-0" />
                )}
                {type}
              </button>
            )
          })}
          {activeTypes.length > 0 && (
            <button
              onClick={() => setActiveTypes([])}
              className="text-xs font-mono text-text-muted hover:text-primary transition-colors mt-1 text-left"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function EventsPage() {
  const [view, setView] = useState('list')
  const [activeTypes, setActiveTypes] = useState([])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <PageHero
        title="Events & Calendar"
        subtitle="Stay connected with everything happening in NASS."
        breadcrumbs={[{ label: 'Events' }]}
      />

      <div className="max-w-7xl mx-auto px-4 section-pad">
        {/* View toggle */}
        <AnimatedSection delay={0.05}>
          <div className="flex items-center gap-2 mb-8">
            <button
              onClick={() => setView('list')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-mono uppercase tracking-wide border transition-all duration-200 ${
                view === 'list'
                  ? 'bg-primary text-bg border-primary shadow-glow-sm'
                  : 'glass text-text-muted border-transparent hover:border-primary/30 hover:text-primary'
              }`}
            >
              <RiListCheck size={15} />
              List View
            </button>
            <button
              onClick={() => setView('calendar')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-mono uppercase tracking-wide border transition-all duration-200 ${
                view === 'calendar'
                  ? 'bg-primary text-bg border-primary shadow-glow-sm'
                  : 'glass text-text-muted border-transparent hover:border-primary/30 hover:text-primary'
              }`}
            >
              <RiCalendarLine size={15} />
              Calendar View
            </button>
          </div>
        </AnimatedSection>

        {/* Content + Sidebar */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={view}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {view === 'list' ? (
                  <ListView activeTypes={activeTypes} />
                ) : (
                  <CalendarView />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <Sidebar activeTypes={activeTypes} setActiveTypes={setActiveTypes} />
          </div>
        </div>

        {/* Mobile filter (visible below lg) */}
        <div className="lg:hidden mt-10">
          <SectionTitle label="Filter" title="Filter by Type" center={false} />
          <Sidebar activeTypes={activeTypes} setActiveTypes={setActiveTypes} />
        </div>
      </div>
    </motion.div>
  )
}
