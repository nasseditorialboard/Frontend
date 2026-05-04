import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RiRunLine,
  RiGamepadLine,
  RiTrophyLine,
  RiTeamLine,
  RiCalendarLine,
  RiMapPinLine,
  RiTimeLine,
  RiLockLine,
} from 'react-icons/ri'
import {
  MdSportsFootball,
  MdSportsBasketball,
  MdSportsTennis,
  MdSportsVolleyball,
  MdTableBar,
} from 'react-icons/md'
import PageHero from '../components/shared/PageHero'
import SectionTitle from '../components/shared/SectionTitle'
import AnimatedSection from '../components/shared/AnimatedSection'

// ─── Sport data ───────────────────────────────────────────────────────────────
const sportsData = {
  Football: {
    Icon: MdSportsFootball,
    stats: { played: 12, wins: 8, draws: 2, losses: 2, goalsFor: 24, goalsAgainst: 11 },
    statLabels: ['Played', 'Wins', 'Draws', 'Losses', 'Goals For', 'Goals Against'],
    statKeys: ['played', 'wins', 'draws', 'losses', 'goalsFor', 'goalsAgainst'],
    roster: [
      { name: 'Chukwuemeka Ilo', position: 'Goalkeeper', dept: 'Physics' },
      { name: 'Babatunde Adeyemi', position: 'Defender', dept: 'Chemistry' },
      { name: 'Seun Olaitan', position: 'Midfielder', dept: 'Mathematics' },
      { name: 'Emmanuel Okonkwo', position: 'Forward', dept: 'Computer Science' },
      { name: 'Yusuf Garba', position: 'Defender', dept: 'Biology' },
      { name: 'Tunde Ajibade', position: 'Midfielder', dept: 'Statistics' },
    ],
    results: [
      { opponent: 'Faculty of Law', score: '3-1', result: 'W', date: 'May 10' },
      { opponent: 'Faculty of Education', score: '2-0', result: 'W', date: 'May 3' },
      { opponent: 'Faculty of Engineering', score: '1-1', result: 'D', date: 'Apr 26' },
      { opponent: 'Faculty of Arts', score: '0-2', result: 'L', date: 'Apr 19' },
    ],
    fixtures: [
      { opponent: 'Faculty of Social Sciences', date: 'Jun 15', time: '3 PM', venue: 'Main Bowl' },
      { opponent: 'Faculty of Administration', date: 'Jun 22', time: '2 PM', venue: 'Main Bowl' },
    ],
  },
  Basketball: {
    Icon: MdSportsBasketball,
    stats: { played: 8, wins: 5, draws: 0, losses: 3, pointsFor: 412, pointsAgainst: 380 },
    statLabels: ['Played', 'Wins', 'Draws', 'Losses', 'Pts For', 'Pts Against'],
    statKeys: ['played', 'wins', 'draws', 'losses', 'pointsFor', 'pointsAgainst'],
    roster: [
      { name: 'Adewale Obi', position: 'Point Guard', dept: 'Computer Science' },
      { name: 'Nnamdi Eze', position: 'Center', dept: 'Physics' },
      { name: 'Taiwo Akin', position: 'Small Forward', dept: 'Biochemistry' },
      { name: 'Rotimi Babs', position: 'Power Forward', dept: 'Mathematics' },
      { name: 'Kunle Ade', position: 'Shooting Guard', dept: 'Chemistry' },
    ],
    results: [
      { opponent: 'Engineering', score: '68-54', result: 'W', date: 'May 8' },
      { opponent: 'Social Sciences', score: '45-60', result: 'L', date: 'May 1' },
    ],
    fixtures: [
      { opponent: 'Arts Faculty', date: 'Jun 18', time: '4 PM', venue: 'Sports Complex' },
    ],
  },
  Athletics: {
    Icon: RiRunLine,
    stats: { events: 8, gold: 5, silver: 3, bronze: 2 },
    statLabels: ['Events', 'Gold', 'Silver', 'Bronze'],
    statKeys: ['events', 'gold', 'silver', 'bronze'],
    roster: [
      { name: 'Sola Adekunle', position: '100m Sprinter', dept: 'Physics' },
      { name: 'Blessing Nwachukwu', position: 'Long Jump', dept: 'Biology' },
      { name: 'Musa Ibrahim', position: '800m', dept: 'Statistics' },
    ],
    results: [
      { opponent: 'Inter-Faculty Sprint', score: '1st Place', result: 'W', date: 'May 5' },
      { opponent: 'Long Jump Event', score: '2nd Place', result: 'D', date: 'Apr 28' },
    ],
    fixtures: [
      { opponent: 'OAU Athletics Meet', date: 'Jul 2', time: '9 AM', venue: 'Athletics Track' },
    ],
  },
  Badminton: {
    Icon: MdSportsTennis,
    stats: { played: 10, wins: 7, draws: 0, losses: 3 },
    statLabels: ['Played', 'Wins', 'Draws', 'Losses'],
    statKeys: ['played', 'wins', 'draws', 'losses'],
    roster: [
      { name: 'Chioma Obi', position: 'Singles', dept: 'Biochemistry' },
      { name: 'Tunde Fashola', position: 'Doubles', dept: 'Computer Science' },
    ],
    results: [
      { opponent: 'Engineering', score: '21-15', result: 'W', date: 'May 12' },
    ],
    fixtures: [
      { opponent: 'Social Sciences', date: 'Jun 20', time: '2 PM', venue: 'Sports Hall' },
    ],
  },
  Volleyball: {
    Icon: MdSportsVolleyball,
    stats: { played: 6, wins: 4, draws: 0, losses: 2 },
    statLabels: ['Played', 'Wins', 'Draws', 'Losses'],
    statKeys: ['played', 'wins', 'draws', 'losses'],
    roster: [
      { name: 'Amara Okafor', position: 'Setter', dept: 'Biology' },
      { name: 'Dayo Adeleke', position: 'Spiker', dept: 'Chemistry' },
    ],
    results: [
      { opponent: 'Arts', score: '3-1', result: 'W', date: 'May 7' },
    ],
    fixtures: [
      { opponent: 'Engineering', date: 'Jun 25', time: '5 PM', venue: 'Sports Complex' },
    ],
  },
  'Table Tennis': {
    Icon: RiGamepadLine,
    stats: { played: 14, wins: 10, draws: 0, losses: 4 },
    statLabels: ['Played', 'Wins', 'Draws', 'Losses'],
    statKeys: ['played', 'wins', 'draws', 'losses'],
    roster: [
      { name: 'Emeka Dibia', position: 'Singles', dept: 'Physics' },
      { name: 'Ngozi Eze', position: 'Doubles', dept: 'Microbiology' },
    ],
    results: [
      { opponent: 'Law', score: '3-0', result: 'W', date: 'May 9' },
    ],
    fixtures: [
      { opponent: 'Education', date: 'Jun 12', time: '1 PM', venue: 'Sports Hall' },
    ],
  },
}

const SPORT_TABS = ['Football', 'Basketball', 'Athletics', 'Badminton', 'Volleyball', 'Table Tennis']

// Dummy overall standings
const STANDINGS = [
  { rank: 1, sport: 'Football', p: 12, w: 8, d: 2, l: 2, pts: 26 },
  { rank: 2, sport: 'Table Tennis', p: 14, w: 10, d: 0, l: 4, pts: 30 },
  { rank: 3, sport: 'Basketball', p: 8, w: 5, d: 0, l: 3, pts: 15 },
  { rank: 4, sport: 'Badminton', p: 10, w: 7, d: 0, l: 3, pts: 21 },
  { rank: 5, sport: 'Volleyball', p: 6, w: 4, d: 0, l: 2, pts: 12 },
  { rank: 6, sport: 'Athletics', p: 8, w: 5, d: 3, l: 0, pts: 18 },
]

function resultColor(r) {
  if (r === 'W') return 'text-secondary font-bold'
  if (r === 'L') return 'text-red-400 font-bold'
  return 'text-[#f5c518] font-bold'
}

function getInitials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

export default function SportsPage() {
  const [activeSport, setActiveSport] = useState('Football')
  const sport = sportsData[activeSport]
  const { Icon } = sport

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <PageHero
        title="NASS Sports"
        subtitle="Representing the Faculty of Sciences — on every field, court, and track."
        breadcrumbs={[{ label: 'Sports' }]}
      />

      <div className="max-w-7xl mx-auto px-4 section-pad">

        {/* ── Sport Tab Bar ─────────────────────────────────────────────── */}
        <AnimatedSection delay={0.05}>
          <div className="flex flex-row gap-2 overflow-x-auto pb-1 mb-8 no-scrollbar">
            {SPORT_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSport(tab)}
                className={`font-mono text-xs uppercase tracking-wide px-4 py-2 rounded-lg border whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                  activeSport === tab
                    ? 'bg-primary text-bg border-primary shadow-glow-sm'
                    : 'glass text-text-muted border-transparent hover:text-primary hover:border-primary/30'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* ── Active Sport Panel ────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSport}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Sport header banner */}
            <div className="glass rounded-2xl p-6 flex items-center gap-4 mb-6">
              <Icon size={40} className="text-primary flex-shrink-0" />
              <div>
                <h2 className="font-display text-2xl font-bold text-text-primary">{activeSport}</h2>
                <span className="font-mono text-xs text-text-muted uppercase tracking-widest">
                  Current Season
                </span>
              </div>
            </div>

            {/* Stats row */}
            <div
              className={`grid gap-3 mb-8 ${
                sport.statKeys.length === 4
                  ? 'grid-cols-2 sm:grid-cols-4'
                  : 'grid-cols-3 md:grid-cols-6'
              }`}
            >
              {sport.statKeys.map((key, i) => (
                <div key={key} className="glass rounded-xl p-3 text-center">
                  <div className="gradient-text font-display text-xl font-bold">
                    {sport.stats[key]}
                  </div>
                  <div className="text-text-muted text-xs font-mono mt-0.5">
                    {sport.statLabels[i]}
                  </div>
                </div>
              ))}
            </div>

            {/* Two column layout */}
            <div className="grid lg:grid-cols-2 gap-6 mb-10">

              {/* Left — Team Roster */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <RiTeamLine className="text-primary" size={18} />
                  <h3 className="font-display text-base font-bold text-text-primary">Team Roster</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {sport.roster.map((player) => (
                    <div
                      key={player.name}
                      className="glass rounded-lg p-3 flex items-center gap-3"
                    >
                      {/* Avatar */}
                      <div className="w-9 h-9 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {getInitials(player.name)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-text-primary text-sm font-semibold truncate">
                          {player.name}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-text-muted">{player.position}</span>
                          <span className="text-text-muted/40 text-xs">·</span>
                          <span className="text-text-muted text-xs">{player.dept}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Results + Fixtures stacked */}
              <div className="flex flex-col gap-6">

                {/* Recent Results */}
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <RiTrophyLine className="text-primary" size={18} />
                    <h3 className="font-display text-base font-bold text-text-primary">Recent Results</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/5">
                          <th className="text-left font-mono text-xs text-text-muted pb-2">Date</th>
                          <th className="text-left font-mono text-xs text-text-muted pb-2">Opponent</th>
                          <th className="text-left font-mono text-xs text-text-muted pb-2">Score</th>
                          <th className="text-left font-mono text-xs text-text-muted pb-2">Result</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sport.results.map((r, i) => (
                          <tr
                            key={i}
                            className="border-b border-white/5 last:border-0 hover:bg-primary/5 transition-colors"
                          >
                            <td className="py-2 font-mono text-xs text-text-muted">{r.date}</td>
                            <td className="py-2 text-text-primary text-xs pr-3">{r.opponent}</td>
                            <td className="py-2 font-mono text-xs text-text-primary">{r.score}</td>
                            <td className={`py-2 font-mono text-xs ${resultColor(r.result)}`}>
                              {r.result}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Upcoming Fixtures */}
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <RiCalendarLine className="text-primary" size={18} />
                    <h3 className="font-display text-base font-bold text-text-primary">Upcoming Fixtures</h3>
                  </div>
                  {sport.fixtures.length === 0 ? (
                    <p className="font-mono text-xs text-text-muted">No upcoming fixtures scheduled.</p>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {sport.fixtures.map((f, i) => (
                        <div key={i} className="glass rounded-lg p-3">
                          <div className="text-text-primary text-sm font-semibold mb-1">
                            vs {f.opponent}
                          </div>
                          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-text-muted">
                            <span className="flex items-center gap-1">
                              <RiCalendarLine size={11} />
                              {f.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <RiTimeLine size={11} />
                              {f.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <RiMapPinLine size={11} />
                              {f.venue}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Season Standings ──────────────────────────────────────────── */}
        <AnimatedSection delay={0.15}>
          <SectionTitle label="Overview" title="Season Standings" />
          <div className="glass rounded-xl overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-white/5">
                    <th className="text-left font-mono text-xs text-text-muted px-4 py-3">Rank</th>
                    <th className="text-left font-mono text-xs text-text-muted px-4 py-3">Sport</th>
                    <th className="text-center font-mono text-xs text-text-muted px-3 py-3">P</th>
                    <th className="text-center font-mono text-xs text-text-muted px-3 py-3">W</th>
                    <th className="text-center font-mono text-xs text-text-muted px-3 py-3">D</th>
                    <th className="text-center font-mono text-xs text-text-muted px-3 py-3">L</th>
                    <th className="text-center font-mono text-xs text-text-muted px-3 py-3">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {STANDINGS.map((row, i) => (
                    <tr
                      key={row.sport}
                      className={`border-b border-white/5 last:border-0 hover:bg-primary/5 transition-colors ${
                        i % 2 === 0 ? 'bg-card/50' : ''
                      }`}
                    >
                      <td className="px-4 py-3">
                        {row.rank === 1 ? (
                          <span className="gradient-text font-display font-bold">{row.rank}</span>
                        ) : (
                          <span className="font-mono text-xs text-text-muted">{row.rank}</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-text-primary font-semibold text-sm">{row.sport}</td>
                      <td className="px-3 py-3 text-center font-mono text-xs text-text-muted">{row.p}</td>
                      <td className="px-3 py-3 text-center font-mono text-xs text-secondary">{row.w}</td>
                      <td className="px-3 py-3 text-center font-mono text-xs text-[#f5c518]">{row.d}</td>
                      <td className="px-3 py-3 text-center font-mono text-xs text-red-400">{row.l}</td>
                      <td className="px-3 py-3 text-center font-mono text-xs font-bold text-text-primary">{row.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Admin-only button */}
          <div className="flex flex-col items-center gap-2">
            <button
              disabled
              className="btn-ghost opacity-50 cursor-not-allowed flex items-center gap-2 text-sm"
            >
              <RiLockLine size={14} />
              Submit Sports Result
            </button>
            <span className="font-mono text-xs text-text-muted">(Admin Only)</span>
          </div>
        </AnimatedSection>
      </div>
    </motion.div>
  )
}
