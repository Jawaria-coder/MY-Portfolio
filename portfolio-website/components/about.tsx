"use client"

import { motion } from "framer-motion"
import {
  BrainCircuit,
  Bot,
  Layers3,
  Sparkles,
} from "lucide-react"

const highlights = [
  {
    icon: Bot,
    title: "Agentic AI Developer",
    description:
      "Building LLM-powered applications, autonomous agents, and intelligent automation workflows using modern AI frameworks.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning Engineer",
    description:
      "Developing machine learning and computer vision solutions with a focus on practical, real-world applications.",
  },
  {
    icon: Layers3,
    title: "Full-Stack Developer",
    description:
      "Creating scalable web and mobile applications that integrate seamlessly with intelligent backend systems.",
  },
  {
    icon: Sparkles,
    title: "Continuous Learner",
    description:
      "Expanding my expertise in RAG, vector databases, MCP, LangGraph, and advanced AI system design.",
  },
]

export function About() {
  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section heading */}
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

          <p className="text-muted-foreground text-xl max-w-3xl mx-auto font-light">
            Building intelligent systems by combining AI, machine learning,
            automation, and full-stack engineering.
          </p>
        </motion.div>

        {/* About content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Who I Am card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Who I Am
              </h3>

              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed font-light">
                <p>
                  I&apos;m{" "}
                  <span className="text-primary font-semibold">
                    Jawaria Tariq
                  </span>
                  , a Machine Learning Engineer and AI Developer passionate
                  about building intelligent systems that solve real-world
                  problems.
                </p>

                <p>
                  My work spans{" "}
                  <span className="text-primary">
                    Machine Learning
                  </span>
                  ,{" "}
                  <span className="text-primary">
                    Computer Vision
                  </span>
                  ,{" "}
                  <span className="text-accent">
                    Agentic AI
                  </span>
                  , automation, and{" "}
                  <span className="text-secondary-foreground">
                    Full-Stack Development
                  </span>
                  . This allows me to build complete AI-powered applications,
                  from model development and workflow orchestration to user
                  interfaces and deployment.
                </p>

                <p>
                  I enjoy turning research and ideas into practical software,
                  whether it is a multimodal healthcare platform, an autonomous
                  AI workflow, or a scalable web application designed around a
                  real user need.
                </p>

                <p>
                  I&apos;m currently expanding my expertise in{" "}
                  <span className="text-primary">
                    LLMs, LangGraph, LangChain, RAG, vector databases, MCP,
                    and AI system design
                  </span>
                  , while continuing to strengthen my machine learning and
                  software engineering foundations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="glass-card p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>

                  <h4 className="text-lg font-bold mb-2 tracking-tight">
                    {item.title}
                  </h4>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Collaboration card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Let&apos;s Build Something Intelligent
            </h3>

            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
              I&apos;m open to opportunities and collaborations involving
              Agentic AI, machine learning, computer vision, automation, and
              full-stack development. I enjoy working on ideas that combine
              intelligent technology with practical, user-focused software.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}