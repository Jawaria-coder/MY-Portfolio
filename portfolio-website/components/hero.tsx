"use client"

import { useEffect, useRef, useState } from "react"
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion"
import { useTheme } from "next-themes"
import {
  Download,
  ExternalLink,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"

type Particle = {
  x: number
  y: number
  scale: number
  duration: number
  delay: number
}

export function Hero() {
  const { resolvedTheme } = useTheme()

  const containerRef = useRef<HTMLDivElement>(null)

  const [mounted, setMounted] = useState(false)

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setMounted(true)

    const generatedParticles: Particle[] = Array.from(
      { length: 20 },
      () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        scale: Math.random() * 2,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 10,
      }),
    )

    setParticles(generatedParticles)

    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return

      const rectangle =
        containerRef.current.getBoundingClientRect()

      setMousePosition({
        x: event.clientX - rectangle.left,
        y: event.clientY - rectangle.top,
      })
    }

    window.addEventListener(
      "mousemove",
      handleMouseMove,
    )

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove,
      )
    }
  }, [])

  const { scrollY } = useScroll()

  const contentY = useTransform(
    scrollY,
    [0, 500],
    [0, 180],
  )

  const contentOpacity = useTransform(
    scrollY,
    [0, 300],
    [1, 0],
  )

  const contentScale = useTransform(
    scrollY,
    [0, 300],
    [1, 0.94],
  )

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden"
    >
      {/* Mouse-following radial glow */}
      {mounted && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
          style={{
            background: `radial-gradient(
              600px circle at ${mousePosition.x}px ${mousePosition.y}px,
              ${
                resolvedTheme === "dark"
                  ? "oklch(0.75 0.2 195 / 0.15)"
                  : "oklch(0.6 0.2 200 / 0.08)"
              },
              transparent 80%
            )`,
          }}
        />
      )}

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {mounted &&
          particles.map((particle, index) => (
            <motion.div
              key={index}
              className="absolute h-1 w-1 bg-primary/40 rounded-full"
              initial={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                scale: particle.scale,
                opacity: 0,
              }}
              animate={{
                y: [0, 100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
      </div>

      {/* Main hero content */}
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
          scale: contentScale,
        }}
        className="max-w-4xl w-full text-center relative z-10"
      >
        {/* Availability badge */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm mb-7 backdrop-blur-sm"
        >
          <Sparkles size={14} />

          <span>
            Open to AI, ML & Software Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter"
        >
          Jawaria{" "}
          <span className="text-gradient">
            Tariq
          </span>
        </motion.h1>

        {/* Role and introduction */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <h2 className="text-xl md:text-3xl font-semibold mb-6 text-foreground/80 leading-snug">
            Machine Learning Engineer
            <span className="hidden md:inline">
              {" "}|{" "}
            </span>
            <br className="md:hidden" />

            <span className="text-primary">
              Agentic AI Developer
            </span>

            <span className="hidden md:inline">
              {" "}|{" "}
            </span>
            <br className="md:hidden" />

            <span className="text-accent">
              Full-Stack Developer
            </span>
          </h2>

          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            I build intelligent applications using machine learning,
            agentic AI, automation, and full-stack engineering.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button
              size="lg"
              asChild
              className="glow-button h-13 px-8 rounded-xl text-base md:text-lg gap-2 bg-primary text-primary-foreground font-bold shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <a href="#projects">
                Explore My Work
                <ExternalLink size={19} />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-13 px-8 rounded-xl text-base md:text-lg gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary hover:text-primary transition-all active:scale-95 bg-transparent cursor-pointer"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Resume
                <Download size={19} />
              </a>
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  )
}