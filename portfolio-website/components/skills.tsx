"use client"

import { motion } from "framer-motion"
import {
  Binary,
  Bot,
  Braces,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Layers3,
  Sparkles,
  Wrench,
} from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 className="w-6 h-6" />,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    skills: [
      "Python",
      "JavaScript",
      "C++",
      "C",
      "Java",
      "Dart",
      "SQL",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
    skills: [
      "Machine Learning",
      "Computer Vision",
      "PyTorch",
      "LangGraph",
      "LangChain",
      "n8n",
      "LLMs",
      "OpenRouter",
      "Tavily",
      "Pandas",
      "NumPy",
      "Pydantic",
    ],
  },
  {
    title: "Full-Stack Development",
    icon: <Globe className="w-6 h-6" />,
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Flutter",
      "MongoDB",
      "Firebase",
      "Firestore",
    ],
  },
  {
    title: "Data, Tools & Engineering",
    icon: <Cpu className="w-6 h-6" />,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    border: "border-teal-400/20",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "REST APIs",
      "SQLite",
      "OOP",
      "DSA",
      "Docker",
      "Linux",
      "Framer Motion",
      "GSAP",
      "Vercel",
    ],
  },
]

const focusBadges = [
  {
    label: "AGENTIC AI",
    icon: Bot,
  },
  {
    label: "MACHINE LEARNING",
    icon: BrainCircuit,
  },
  {
    label: "FULL STACK",
    icon: Layers3,
  },
  {
    label: "PYTHON",
    icon: Braces,
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="py-32 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-mono mb-4 text-muted-foreground uppercase tracking-widest">
            <Binary
              size={12}
              className="text-primary"
            />
            Capabilities
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Technical{" "}
            <span className="text-gradient">
              Arsenal
            </span>
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto font-light">
            The technologies, frameworks, and engineering skills I use to
            build intelligent AI systems, machine learning solutions, and
            full-stack applications.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -30 : 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="glass-card group p-8 rounded-3xl relative overflow-hidden"
            >
              {/* Soft hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`p-4 rounded-2xl ${category.bg} ${category.border} border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <div className={category.color}>
                      {category.icon}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">
                      {category.title}
                    </h3>

                    <div className="h-1 w-12 bg-gradient-to-r from-primary/50 to-transparent rounded-full mt-1" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay:
                          index * 0.1 +
                          skillIndex * 0.04,
                      }}
                      whileHover={{
                        scale: 1.08,
                        y: -4,
                        backgroundColor:
                          "rgba(255, 255, 255, 0.05)",
                        borderColor:
                          "var(--primary)",
                      }}
                      className="px-4 py-2 rounded-xl bg-background/50 border border-border text-sm font-mono cursor-default transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:text-primary"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Decorative corner icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <Sparkles
                  className={category.color}
                  size={32}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Focus badges */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-24"
        >
          <div className="flex items-center justify-center gap-2 mb-8 text-muted-foreground">
            <Wrench size={16} />

            <span className="text-xs font-mono uppercase tracking-[0.25em]">
              Current Focus
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {focusBadges.map((badge, index) => {
              const Icon = badge.icon

              return (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-secondary border border-border font-mono text-sm float-animation"
                  style={{
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  <Icon size={16} />
                  {badge.label}
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}