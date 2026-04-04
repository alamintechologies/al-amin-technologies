import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  GraduationCap,
  BarChart3,
  Users,
  CalendarDays,
  CheckCircle2,
} from 'lucide-react'

const features = [
  {
    icon: GraduationCap,
    title: 'College Management',
    description: 'Manage departments, classes, courses, faculty, and academic operations in one place.',
  },
  {
    icon: Users,
    title: 'Student Tracking',
    description: 'Track attendance, engagement, progress, and academic records with ease.',
  },
  {
    icon: BarChart3,
    title: 'Performance Insights',
    description: 'Identify weak areas, monitor outcomes, and improve student performance with smart analytics.',
  },
  {
    icon: CalendarDays,
    title: 'Academic Planning',
    description: 'Organize schedules, timetables, assignments, and curriculum workflows efficiently.',
  },
]

const ProjectsSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-[0.2em] uppercase">
            Upcoming Project
          </span>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            Building <span className="text-gradient">Batcly</span> for Modern Education
          </h2>

          <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
            Batcly is our upcoming smart platform focused on
            <span className="text-foreground font-medium"> college management</span> and
            <span className="text-foreground font-medium"> student performance improvement</span>.
            Designed to help institutions manage academics efficiently while helping students perform better.
          </p>
        </motion.div>

        {/* Main Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass rounded-3xl p-8 sm:p-10 lg:p-14 max-w-6xl mx-auto border border-white/10"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-6">
                <CheckCircle2 size={16} />
                In Development
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold mb-5 leading-tight">
                A smarter way to run colleges and improve student outcomes
              </h3>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Batcly is being crafted as a modern academic operations platform that helps
                institutions reduce manual work, improve coordination, and gain actionable
                insights into student learning and performance.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  'Attendance Management',
                  'Faculty Workflow',
                  'Student Analytics',
                  'Timetable & Scheduling',
                  'Academic Performance',
                  'Institution Dashboard',
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full text-sm border border-white/10 bg-white/5 text-foreground/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>

                    <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection