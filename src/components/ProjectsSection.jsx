import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  GraduationCap,
  BarChart3,
  Users,
  CalendarDays,
  Rocket,
  Globe,
  BookOpen,
  CheckCircle2,
} from 'lucide-react'

const deliveredProjects = [
  {
    title: 'Excellence Institute Website',
    subtitle: 'Coaching Institute Website',
    icon: Globe,
    status: 'Delivered',
    description:
      'A modern educational website designed for a coaching institute to showcase courses, institute highlights, admissions-focused content, and a strong digital brand presence.',
    highlights: [
      'Premium Landing Page',
      'Course Showcase',
      'Admissions CTA',
      'Responsive UI',
    ],
    image: '/projects/excellence-preview.png',
  },
]

const batclyFeatures = [
  {
    icon: GraduationCap,
    title: 'College Management',
    description:
      'Manage departments, classes, courses, faculty, and academic operations in one place.',
  },
  {
    icon: Users,
    title: 'Student Tracking',
    description:
      'Track attendance, engagement, progress, and academic records with ease.',
  },
  {
    icon: BarChart3,
    title: 'Performance Insights',
    description:
      'Identify weak areas, monitor outcomes, and improve student performance with smart analytics.',
  },
  {
    icon: CalendarDays,
    title: 'Academic Planning',
    description:
      'Organize schedules, timetables, assignments, and curriculum workflows efficiently.',
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
            Featured Work
          </span>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            Delivered <span className="text-gradient">Projects</span> & Product Vision
          </h2>

          <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
            We build purposeful digital products — from modern educational websites
            to scalable academic platforms designed for real-world impact.
          </p>
        </motion.div>

        {/* Delivered Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-primary" size={22} />
            <h3 className="text-2xl sm:text-3xl font-display font-bold">
              Delivered Project
            </h3>
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            {deliveredProjects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                  className="glass rounded-3xl border border-white/10 p-8 sm:p-10 hover:translate-y-[-4px] transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center">
                    {/* Left Content */}
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-5">
                        <CheckCircle2 size={16} />
                        {project.status}
                      </div>

                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-3xl font-display font-bold mb-2">
                            {project.title}
                          </h4>
                          <p className="text-primary font-medium">{project.subtitle}</p>
                        </div>

                        <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0">
                          <Icon className="text-primary" size={28} />
                        </div>
                      </div>

                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {project.highlights.map((item, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 rounded-full text-sm border border-white/10 bg-white/5 text-foreground/90"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Screenshot */}
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5">
                      <div className="rounded-2xl overflow-hidden border border-white/10 bg-background/40 shadow-2xl">
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="w-full h-[260px] sm:h-[320px] object-cover rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
                        />
                      </div>

                      <div className="flex items-center justify-between mt-4 px-1">
                        <p className="text-sm text-muted-foreground">
                          Homepage Preview
                        </p>
                        <span className="text-primary text-sm font-medium">
                          Delivered Website
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Upcoming Product - Batcly */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="text-primary" size={22} />
            <h3 className="text-2xl sm:text-3xl font-display font-bold">
              Upcoming Product
            </h3>
          </div>

          <div className="glass rounded-3xl p-8 sm:p-10 lg:p-14 max-w-6xl mx-auto border border-white/10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Rocket size={16} />
                  In Development
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-bold mb-5 leading-tight">
                  Batcly — Smarter College Management
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Batcly is being built as a modern platform to help colleges manage
                  academic operations while improving student performance through
                  better visibility, planning, and analytics.
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
                {batclyFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection