import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    desc: "A full-featured online store with real-time inventory, payment integration, and admin dashboard.",
    gradient: "from-primary/20 to-accent/10",
  },
  {
    title: "Healthcare Dashboard",
    category: "UI/UX + Backend",
    desc: "Patient management system with analytics, appointment scheduling, and secure data handling.",
    gradient: "from-accent/20 to-primary/10",
  },
  {
    title: "SaaS Analytics Tool",
    category: "Full Stack",
    desc: "Real-time data visualization platform with multi-tenant architecture and role-based access.",
    gradient: "from-primary/15 to-accent/15",
  },
  {
    title: "Fintech Mobile API",
    category: "API Development",
    desc: "Secure RESTful API powering a mobile banking application with transaction processing.",
    gradient: "from-accent/15 to-primary/20",
  },
]

const ProjectsSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group glass rounded-2xl overflow-hidden hover:glow-primary transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,212,255,0.15),transparent_60%)]" />
                <span className="font-display text-2xl font-bold text-foreground/80 group-hover:scale-110 transition-transform duration-500">
                  {project.title.split(" ")[0]}
                </span>
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">{project.category}</span>
                <h3 className="font-display text-lg font-semibold mt-2 mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  View Details <ExternalLink size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection