import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  RiRadarLine as RiAtomLine,
  RiFlaskLine,
  RiCodeLine,
  RiLeafLine,
  RiMicroscopeLine,
  RiEarthLine,
  RiArrowRightLine,
  RiGroupLine,
} from 'react-icons/ri'
import AnimatedSection from '../shared/AnimatedSection'
import SectionTitle from '../shared/SectionTitle'

const departments = [
  {
    name: 'Physics',
    icon: RiAtomLine,
    category: 'Physical Sciences',
    desc: 'Exploring the fundamental laws governing matter and energy',
    students: 340,
  },
  {
    name: 'Chemistry',
    icon: RiFlaskLine,
    category: 'Physical Sciences',
    desc: 'The science of matter, its properties, structure and reactions',
    students: 290,
  },
  {
    name: 'Mathematics',
    icon: RiCodeLine,
    category: 'Physical Sciences',
    desc: 'The abstract language underlying all scientific disciplines',
    students: 260,
  },
  {
    name: 'Biochemistry',
    icon: RiMicroscopeLine,
    category: 'Biological Sciences',
    desc: 'Chemistry of living organisms and biological molecules',
    students: 275,
  },
  {
    name: 'Microbiology',
    icon: RiLeafLine,
    category: 'Biological Sciences',
    desc: 'Microorganisms that shape our world — from pathogens to probiotics',
    students: 280,
  },
  {
    name: 'Geology & Geophysics',
    icon: RiEarthLine,
    category: 'Earth Sciences',
    desc: "Earth's structure, rock formations, seismology and geomagnetism",
    students: 415,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function DepartmentsPreview() {
  return (
    <section className="section-pad">
      <SectionTitle
        label="Our Departments"
        title="Explore the Sciences"
        subtitle="Nine distinguished departments united by a passion for scientific excellence and discovery."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
        {departments.map((dept, i) => {
          const Icon = dept.icon
          return (
            <motion.div
              key={dept.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={cardVariants}
              whileHover={{
                scale: 1.025,
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                transition: { duration: 0.22 },
              }}
              className="glass rounded-xl p-6 flex flex-col cursor-default group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center shrink-0 mb-4 group-hover:bg-gold/25 transition-colors duration-300">
                <Icon size={24} className="text-[#7A5F00]" />
              </div>

              {/* Dept name */}
              <h3 className="font-display text-lg font-bold text-nass-black leading-snug">
                {dept.name}
              </h3>

              {/* Category */}
              <span className="font-mono text-xs text-olive uppercase tracking-wider mt-1">
                {dept.category}
              </span>

              {/* Description */}
              <p className="text-sm text-nass-black/50 mt-2 leading-relaxed flex-1">
                {dept.desc}
              </p>

              {/* Student count */}
              <div className="flex items-center gap-1.5 mt-4 text-nass-black/40 text-xs">
                <RiGroupLine size={13} className="shrink-0" />
                <span>{dept.students.toLocaleString()} students</span>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-olive/15 mt-4 mb-3" />

              {/* View Department link */}
              <Link
                to="/departments"
                className="inline-flex items-center gap-1.5 text-[#7A5F00] text-sm font-semibold hover:gap-3 transition-all duration-200 w-fit"
              >
                View Department
                <RiArrowRightLine size={15} />
              </Link>
            </motion.div>
          )
        })}
      </div>

      {/* View All CTA */}
      <AnimatedSection delay={0.3} className="flex justify-center mt-12">
        <Link to="/departments" className="btn-ghost">
          View All Departments
        </Link>
      </AnimatedSection>
    </section>
  )
}
