"use client"

import { motion } from "framer-motion"
import { Code2, Rocket, Lightbulb, Heart } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Engineer",
    description: "Proficient in MERN stack, Flutter, and Java with a passion for building scalable applications.",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    description: "Transforming complex challenges into elegant, user-centric solutions with modern technologies.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learner",
    description: "Always exploring cutting-edge frameworks and tools to stay ahead in the fast-paced tech landscape.",
  },
  {
    icon: Heart,
    title: "Creative Developer",
    description: "Merging technical excellence with creative design to craft memorable digital experiences.",
  },
]

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
            Crafting digital solutions with precision, creativity, and a full-stack mindset.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Who I Am</h3>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed font-light">
                <p>
                  I'm <span className="text-primary font-semibold">Jawaria Tariq</span>, a passionate software engineer specializing in building high-performance, scalable full-stack applications. With expertise in the <span className="text-primary">MERN stack</span>, <span className="text-accent">Flutter</span>, and <span className="text-secondary-foreground">Java</span>, I bring ideas to life through clean code and creative problem-solving.
                </p>
                <p>
                  My journey in tech has been driven by a love for innovation and a commitment to continuous learning. From developing secure backend systems to crafting intuitive user interfaces, I thrive on tackling complex challenges and delivering solutions that make an impact.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, or designing pixel-perfect interfaces that blend functionality with aesthetics.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={24} />
                </div>
                <h4 className="text-lg font-bold mb-2 tracking-tight">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-12 rounded-3xl border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Let's Build Something Amazing</h3>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
              I'm always open to new opportunities, collaborations, and exciting projects. Whether you're looking for a full-stack developer, a mobile app specialist, or a creative problem solver, let's connect and create something extraordinary together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
