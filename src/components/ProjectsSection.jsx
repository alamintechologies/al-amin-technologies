import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Rocket } from 'lucide-react'

const ProjectsSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3">
            Upcoming <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-12 text-center max-w-2xl mx-auto"
        >
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Rocket className="text-primary" size={40} />
          </div>
          <h3 className="font-display text-2xl font-bold mb-4">Exciting Things Coming Soon!</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We're working on amazing projects and will showcase them here very soon. 
            Stay tuned for updates!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection