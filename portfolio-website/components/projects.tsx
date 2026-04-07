"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code2, Rocket } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "VibeGuard Website",
    category: "HealthTech / MERN",
    description:
      "A personal health tracking web application using MongoDB. Features symptom analysis, medicine recommendations, and auto-generated health reports.",
    image: "/healthcare-dashboard-ui1.png",
    tech: ["MongoDB", "React", "Node.js", "Chatbot"],
    github: "https://github.com/Jawaria-coder/VibeGuard-Website-",
    live: "https://vibeguard-sigma.vercel.app/",
  },
  {
    title: "Expenso App",
    category: "Finance / Flutter",
    description:
      "Flutter mobile app using Firebase. Includes income/expense tracking, budget alerts, and WhatsApp sharing features.",
    image: "/mobile-finance-app-ui.png",
    tech: ["Flutter", "Firebase", "Dart", "APIs"],
    github: "https://github.com/Jawaria-coder/Expenso",
    live: "https://expenso-app.vercel.app/",
  },
  {
    title: "Amazon Clone",
    category: "E-Commerce / Frontend",
    description:
      "Pixel-perfect clone of Amazon's landing page using HTML and CSS, focusing on layout accuracy and responsive design.",
    image: "/ecommerce-website-ui.png",
    tech: ["HTML5", "CSS3", "Responsive Design", "Flexbox"],
    github: "https://github.com/Jawaria-coder/Amazon-Clone",
    live: "https://jawaria-coder.github.io/Amazon-Clone/Amazon-Clone/",
  },
  {
    title: "Backup Solutions System",
    category: "Security / Python",
    description:
      "Python-based secure backup management system with AES encryption and decryption. Supports automated and manual backups, data restoration, real-time notifications, local and remote storage, job scheduling, and database version control.",
    image: "/desktop-software-ui.png",
    tech: ["Python", "AES Encryption", "Scheduling", "File Handling"],
    github: "https://github.com/Jawaria-coder/Safe-Sync-Backup-Solutions-",
    live: "https://safe-sync-backup-solutions.vercel.app/",
  },
  {
    title: "Uniworth Clone",
    category: "E-Commerce / FullStack",
    description:
      "Complete e-commerce landing page clone with a full admin panel for order management and user registration.",
    image: "/uniworth-mern.png",
    tech: ["Node.js", "MongoDB", "Bootstrap", "JS"],
    github: "https://github.com/Jawaria-coder/UniWorth-Clone",
    live: "#",
  },
  {
    title: "School Management",
    category: "Education / Java",
    description:
      "JavaFX desktop application focusing on student/staff management, library systems, and scholarship tracking using OOP.",
    image: "/school-mng.png",
    tech: ["Java", "JavaFX", "OOP", "File Handling"],
    github: "https://github.com/Jawaria-coder/School-Managment-System",
    live: "#",
  },
]

function ProjectCard({ project, idx }: { project: (typeof projects)[0]; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: idx * 0.1 }}
      className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-24 items-center`}
    >
      {/* Image Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full lg:w-1/2 group relative aspect-[4/3] cursor-pointer perspective-1000"
      >
        <div
          style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 glass-card">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />

          {/* Top-right GitHub / Live buttons */}
          <div
            style={{ transform: "translateZ(50px)" }}
            className="absolute bottom-6 left-6 right-6 flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">{project.category}</span>
              <h4 className="text-xl font-bold text-white">{project.title}</h4>
            </div>
            <div className="flex gap-2">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-xl h-10 w-10 bg-white/10 backdrop-blur-md transition-transform hover:scale-110 hover:shadow-lg"
                  >
                    <Github size={18} />
                  </Button>
                </a>
              )}
              {project.live && project.live !== "#" && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="glow-button h-14 px-8 rounded-2xl gap-2 bg-primary text-primary-foreground font-bold transition-transform hover:scale-105 hover:shadow-lg"
                  >
                    Live Experience <ExternalLink size={20} />
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Description */}
      <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary"
          >
            <Rocket size={12} />
            Featured Case Study
          </motion.div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{project.title}</h3>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-4 py-2 rounded-xl bg-secondary border border-border text-sm font-mono text-foreground hover:border-primary/50 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 rounded-2xl gap-2 border-primary/20 hover:bg-primary/5 hover:text-primary bg-transparent font-bold transition-colors"
              >
                <Code2 size={20} /> View Source
              </Button>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="glow-button h-14 px-8 rounded-2xl gap-2 bg-primary text-primary-foreground font-bold transition-transform hover:scale-105 hover:shadow-lg"
              >
                Live Experience <ExternalLink size={20} />
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
            Selected <span className="text-gradient">Productions</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
            A deep dive into my engineering journey through complex full-stack and mobile solutions.
          </p>
        </motion.div>

        <div className="space-y-48">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
