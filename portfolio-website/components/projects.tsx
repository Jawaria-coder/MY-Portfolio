"use client"

import type React from "react"
import { useRef, useState } from "react"
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  BrainCircuit,
  Bot,
  Code2,
  ExternalLink,
  Github,
  Layers3,
  Rocket,
  Sparkles,
} from "lucide-react"
import Image from "next/image"

/* =========================================================
   Types
========================================================= */

type Project = {
  title: string
  category: string
  description: string
  image: string
  tech: string[]
  github: string
  live?: string
}

type ProjectCategory =
  | "featured"
  | "full-stack"
  | "agentic-ai"
  | "machine-learning-python"

/* =========================================================
   Project Data
========================================================= */

const featuredProjects: Project[] = [
  {
    title: "MultiSense",
    category: "AI Healthcare / Final Year Project",
    description:
      "A multimodal AI platform for preliminary autism and ADHD screening using computer vision, validated questionnaires, risk prediction, and secure result management.",
    image: "/multisense.PNG",
    tech: [
      "Next.js",
      "Python",
      "PyTorch",
      "Vision Transformer",
      "MongoDB",
    ],
    github: "https://github.com/Jawaria-coder/FYP-MultiSense",
    live: "",
  },
  {
    title: "AI Venture Review Board",
    category: "Agentic AI / LangGraph",
    description:
    "A multi-agent startup evaluation system built with LangGraph, featuring market research, feasibility and risk analysis, AI report review, and human-in-the-loop approval.",
    image: "/ai-venture-review-board.png",
    tech: [
      "LangGraph",
      "LangChain",
      "OpenRouter",
      "Tavily",
      "Python",
    ],
    github:
      "https://github.com/Jawaria-coder/ai-venture-review-board",
    live: "",
  },
  {
    title: "SafeSync Backup System",
    category: "Python / Desktop Security",
    description:
      "A secure Python desktop application supporting AES encryption, automated and manual backups, restoration, notifications, scheduling, and backup version management.",
    image: "/desktop-software-ui.png",
    tech: [
      "Python",
      "AES Encryption",
      "Scheduling",
      "File Handling",
    ],
    github:
      "https://github.com/Jawaria-coder/Safe-Sync-Backup-Solutions-",
    live:
      "https://safe-sync-backup-solutions.vercel.app/",
  },
  {
    title: "AI Opportunity Radar",
    category: "AI Automation / n8n",
    description:
    "An intelligent n8n workflow that discovers, verifies, scores, deduplicates, and saves opportunities while creating Calendar reminders for valid deadlines.",
    image: "/ai-opportunity-radar.PNG",
    tech: [
      "n8n",
      "AI Agents",
      "Tavily",
      "Google Sheets",
      "Google Calendar",
    ],
    github:
      "https://github.com/Jawaria-coder/AI-opportunity-radar-n8n",
    live: "",
  },
]

const fullStackProjects: Project[] = [
  {
    title: "MultiSense",
    category: "AI Healthcare / Final Year Project",
    description:
      "A multimodal AI platform for preliminary autism and ADHD screening using computer vision, validated questionnaires, risk prediction, and secure result management.",
    image: "/multisense.PNG",
    tech: [
      "Next.js",
      "Python",
      "PyTorch",
      "Vision Transformer",
      "MongoDB",
    ],
    github: "https://github.com/Jawaria-coder/FYP-MultiSense",
    live: "",
  },
  {
    title: "VibeGuard",
    category: "Healthcare / Full Stack",
    description:
      "A full-stack healthcare platform for symptom exploration, health-metric tracking, doctor discovery, downloadable reports, secure authentication, and administrative management.",
    image: "/healthcare-dashboard-ui1.png",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "EJS",
    ],
    github:
      "https://github.com/Jawaria-coder/VibeGuard-Website-",
    live: "https://vibeguard-sigma.vercel.app/",
  },
  {
    title: "Expenso",
    category: "Finance / Flutter",
    description:
      "A Flutter mobile application for tracking income, expenses, and budgets with alerts, Firebase integration, and sharing features.",
    image: "/mobile-finance-app-ui.png",
    tech: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firestore",
    ],
    github: "https://github.com/Jawaria-coder/Expenso",
    live: "https://expenso-app.vercel.app/",
  },
  {
    title: "UniWorth",
    category: "E-Commerce / Full Stack",
    description:
      "A complete e-commerce application with product browsing, user registration, order management, and an administrative dashboard.",
    image: "/uniworth-mern.png",
    tech: [
      "Node.js",
      "MongoDB",
      "Bootstrap",
      "JavaScript",
    ],
    github:
      "https://github.com/Jawaria-coder/UniWorth-Clone",
    live: "",
  },
]

const agenticAIProjects: Project[] = [
  {
    title: "AI Venture Review Board",
    category: "Agentic AI / LangGraph",
    description:
      "A multi-agent startup evaluation system using parallel analysis, tool calling, structured outputs, quality review, SQLite checkpointing, and human-in-the-loop approval.",
    image: "/ai-venture-review-board.png",
    tech: [
      "LangGraph",
      "LangChain",
      "OpenRouter",
      "Tavily",
      "SQLite",
    ],
    github:
      "https://github.com/Jawaria-coder/ai-venture-review-board",
    live: "",
  },
  {
    title: "AI Opportunity Radar",
    category: "AI Automation / n8n",
    description:
      "An AI automation workflow that discovers, validates, scores, deduplicates, and stores opportunities while creating reminders for verified deadlines.",
    image: "/ai-opportunity-radar.PNG",
    tech: [
      "n8n",
      "AI Agents",
      "Tavily",
      "Google Sheets",
      "Google Calendar",
    ],
    github:
      "https://github.com/Jawaria-coder/AI-opportunity-radar-n8n",
    live: "",
  },
  {
    title: "AI Travel Planner",
    category: "AI Agents / LangChain",
    description:
      "An agent-based travel planning application that coordinates hotel, attraction, transport, food, and budget tools to generate a structured travel itinerary.",
    image: "/ai-travel-planner.png",
    tech: [
      "LangChain",
      "Python",
      "AI Agents",
      "Tool Calling",
      "Pydantic",
    ],
    github:
      "https://github.com/Jawaria-coder/ai-travel-planner",
    live: "",
  },
]

const machineLearningPythonProjects: Project[] = [
  {
    title: "MultiSense",
    category: "Machine Learning / Healthcare AI",
    description:
      "A multimodal AI screening platform combining a Vision Transformer for facial-image-based ASD screening with questionnaire models for ASD and ADHD assessments.",
    image: "/multisense.PNG",
    tech: [
      "PyTorch",
      "DeiT3",
      "Computer Vision",
      "Machine Learning",
      "Python",
    ],
    github:
      "https://github.com/Jawaria-coder/FYP-MultiSense",
    live: "",
  },
  {
    title: "SafeSync Backup System",
    category: "Python / Desktop Security",
    description:
      "A secure Python desktop application supporting AES encryption, automated and manual backups, restoration, notifications, scheduling, and backup version management.",
    image: "/desktop-software-ui.png",
    tech: [
      "Python",
      "AES Encryption",
      "Scheduling",
      "File Handling",
    ],
    github:
      "https://github.com/Jawaria-coder/Safe-Sync-Backup-Solutions-",
    live:
      "https://safe-sync-backup-solutions.vercel.app/",
  },
  {
    title: "School Management System",
    category: "Desktop Application / Java",
    description:
      "A JavaFX desktop application for managing students, staff, library operations, and scholarship records using object-oriented programming.",
    image: "/school-mng.png",
    tech: [
      "Java",
      "JavaFX",
      "OOP",
      "File Handling",
    ],
    github:
      "https://github.com/Jawaria-coder/School-Managment-System",
    live: "",
  },
]

/* =========================================================
   Category Configuration
========================================================= */

const projectCategories = [
  {
    id: "featured" as ProjectCategory,
    label: "Featured",
    icon: Sparkles,
    projects: featuredProjects,
  },
  {
    id: "full-stack" as ProjectCategory,
    label: "Full Stack",
    icon: Layers3,
    projects: fullStackProjects,
  },
  {
    id: "agentic-ai" as ProjectCategory,
    label: "Agentic AI & Automation",
    icon: Bot,
    projects: agenticAIProjects,
  },
  {
    id: "machine-learning-python" as ProjectCategory,
    label: "Machine Learning & Python",
    icon: BrainCircuit,
    projects: machineLearningPythonProjects,
  },
]

/* =========================================================
   Project Card
========================================================= */

function ProjectCard({
  project,
  idx,
  activeCategory,
}: {
  project: Project
  idx: number
  activeCategory: ProjectCategory
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, {
    stiffness: 150,
    damping: 20,
  })

  const mouseYSpring = useSpring(y, {
    stiffness: 150,
    damping: 20,
  })

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["10deg", "-10deg"],
  )

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-10deg", "10deg"],
  )

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (!cardRef.current) return

    const rectangle =
      cardRef.current.getBoundingClientRect()

    const mouseX =
      event.clientX - rectangle.left

    const mouseY =
      event.clientY - rectangle.top

    x.set(mouseX / rectangle.width - 0.5)
    y.set(mouseY / rectangle.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 30,
      }}
      transition={{
        duration: 0.65,
        delay: idx * 0.08,
      }}
      className={`flex flex-col ${
        idx % 2 === 0
          ? "lg:flex-row"
          : "lg:flex-row-reverse"
      } gap-12 lg:gap-24 items-center`}
    >
      {/* Project Image */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full lg:w-1/2 group relative aspect-[4/3] perspective-1000"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 glass-card">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />

          <div
            style={{ transform: "translateZ(50px)" }}
            className="absolute bottom-6 left-6 right-6"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">
                {project.category}
              </span>

              <h4 className="text-xl font-bold text-white">
                {project.title}
              </h4>
            </div>

          
          </div>
        </div>
      </motion.div>

      {/* Project Details */}
      <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
        <div className="space-y-4">
          <motion.div
            key={`${activeCategory}-${project.title}-badge`}
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary"
          >
            <Rocket size={12} />

            {activeCategory === "featured"
              ? "Featured Case Study"
              : project.category}
          </motion.div>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="px-4 py-2 rounded-xl bg-secondary border border-border text-sm font-mono text-foreground hover:border-primary/50 transition-colors"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 rounded-2xl gap-2 border-primary/20 hover:bg-primary/5 hover:text-primary bg-transparent font-bold transition-colors cursor-pointer"
              >
                <Code2 size={20} />
                View Source
              </Button>
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="glow-button h-14 px-8 rounded-2xl gap-2 bg-primary text-primary-foreground font-bold transition-transform hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                Live Experience
                <ExternalLink size={20} />
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

/* =========================================================
   Main Projects Section
========================================================= */

export function Projects() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("featured")

  const selectedCategory =
    projectCategories.find(
      (category) => category.id === activeCategory,
    ) ?? projectCategories[0]

  return (
    <section
      id="projects"
      className="py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Heading */}
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
            duration: 0.6,
          }}
          className="mb-14 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-mono mb-5 text-muted-foreground uppercase tracking-widest">
            <Sparkles
              size={12}
              className="text-primary"
            />
            Selected Work
          </div>

          <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
            My{" "}
            <span className="text-gradient">
              Projects
            </span>
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Explore my work across agentic AI, machine learning,
            automation, full-stack development, and practical software
            applications.
          </p>
        </motion.div>

        {/* Category Tabs */}
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
            duration: 0.6,
            delay: 0.15,
          }}
          className="flex justify-center mb-28"
        >
          <div className="inline-flex flex-wrap justify-center gap-2 p-2 rounded-2xl glass-card border border-white/10">
            {projectCategories.map((category) => {
              const Icon = category.icon
              const isActive =
                activeCategory === category.id

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category.id)
                  }
                  className={`relative flex items-center gap-2 px-4 md:px-6 py-3 rounded-xl text-sm font-medium transition-colors duration-300 cursor-pointer ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-project-category"
                      className="absolute inset-0 rounded-xl bg-primary"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    <Icon size={16} />
                    {category.label}
                  </span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Selected Projects */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.4,
            }}
            className="space-y-48"
          >
            {selectedCategory.projects.map(
              (project, index) => (
                <ProjectCard
                  key={`${activeCategory}-${project.title}`}
                  project={project}
                  idx={index}
                  activeCategory={activeCategory}
                />
              ),
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}