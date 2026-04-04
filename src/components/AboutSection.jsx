import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Zap, Shield } from 'lucide-react'

const stats = [
  { icon: Target, value: "2+", label: "Projects Delivered" },
  { icon: Zap, value: "100%", label: "Client Satisfaction" },
  { icon: Shield, value: "24/7", label: "Support Available" }
];

const AboutSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-display text-sm font-semibold tracking-widest uppercase">About Us</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-6">
              Building the Future,{" "}
              <span className="text-gradient">One Line at a Time</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We provide the best technical solutions including modern web development, scalable backend systems, and innovative digital experiences. Our goal is to deliver high-performance, secure, and user-friendly solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a passionate team of developers, designers, and strategists, we transform ideas into powerful digital products that drive business growth.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="glass rounded-2xl p-6 flex items-center gap-6 group hover:glow-primary transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection