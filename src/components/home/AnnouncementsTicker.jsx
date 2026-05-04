// AnnouncementsTicker — Gold background scrolling announcement strip with RiMegaphoneLine icons.

import { RiMegaphoneLine } from 'react-icons/ri'

const announcements = [
  'NASS Week 2025 Registration Now Open — Apply Before May 30th',
  'Science Quiz Championship — Physics vs Chemistry | June 5th, Senate Building',
  'New Resource Upload: 2024/2025 Past Questions Now Available',
  'Departmental Games Registration Deadline — June 10th',
  'NASS Annual Dinner & Awards Night — July 15th, UITH Conference Hall',
  'Alumni Mentorship Programme — 30 Alumni Mentors Confirmed',
]

function TickerItem({ text }) {
  return (
    <span className="inline-flex items-center shrink-0">
      <span className="flex items-center gap-2 whitespace-nowrap font-body text-sm font-semibold text-nass-black">
        <RiMegaphoneLine size={14} className="text-nass-black shrink-0" />
        {text}
      </span>
      {/* Separator */}
      <span className="mx-8 shrink-0 flex items-center" aria-hidden="true">
        <span style={{ color: 'rgba(246,211,0,0.5)', fontSize: '18px', lineHeight: 1 }}>|</span>
      </span>
    </span>
  )
}

export default function AnnouncementsTicker() {
  return (
    <div
      className="w-full flex items-stretch overflow-hidden"
      style={{ backgroundColor: '#F6D300' }}
      role="marquee"
      aria-label="NASS announcements"
    >
      {/* Left label */}
      <div
        className="flex items-center px-4 py-2 shrink-0 font-mono font-bold text-nass-black text-xs uppercase tracking-wider"
        style={{ borderRight: '1px solid rgba(12,10,4,0.2)' }}
      >
        ANNOUNCEMENTS
      </div>

      {/* Scrolling ticker */}
      <div className="ticker-wrap flex-1 overflow-hidden py-2">
        <div className="ticker-content">
          {announcements.map((text, i) => (
            <TickerItem key={`a-${i}`} text={text} />
          ))}
          {announcements.map((text, i) => (
            <TickerItem key={`b-${i}`} text={text} />
          ))}
        </div>
      </div>
    </div>
  )
}
