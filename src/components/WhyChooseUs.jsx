import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Cpu, Rocket, FileCode, Heart } from 'lucide-react'

const reasons = [
  { icon: Cpu, title: "Modern Technologies", desc: "We leverage the latest frameworks, tools, and best practices to build future-proof solutions." },
  { icon: Rocket, title: "Fast & Scalable", desc: "Performance-first architecture that grows with your business needs." },
  { icon: FileCode, title: "Clean Code", desc: "Maintainable, well-documented code following industry best practices." },
  { icon: Heart, title: "Client Satisfaction", desc: "Your success is our priority — we work closely with you at every step." },
]

const WhyChooseUs = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="why-us" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-widest uppercase">Why Us</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3">
            Why <span className="text-gradient">Choose Us</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group glass rounded-2xl p-8 hover:glow-accent transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <reason.icon className="text-accent" size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs