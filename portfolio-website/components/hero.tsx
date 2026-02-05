"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Sparkles } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { useTheme } from "next-themes"

export function Hero() {
  const { resolvedTheme } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Ensure component is mounted to avoid hydration issues
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // Client-only particle positions
  const [particles, setParticles] = useState<{ x: number; y: number; scale: number }[]>([])
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: Math.random() * 2,
    }))
    setParticles(newParticles)

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top } = containerRef.current.getBoundingClientRect()
        setMousePosition({ x: e.clientX - left, y: e.clientY - top })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.9])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden"
    >
      {/* Radial Gradient following mouse (client-only) */}
      {mounted && (
        <div
          className="absolute pointer-events-none transition-opacity duration-1000"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${
              resolvedTheme === "dark" ? "oklch(0.75 0.2 195 / 0.15)" : "oklch(0.6 0.2 200 / 0.08)"
            }, transparent 80%)`,
            inset: 0,
          }}
        />
      )}

      {/* Floating particles (client-only) */}
      <div className="absolute inset-0 pointer-events-none">
        {mounted &&
          particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 bg-primary/40 rounded-full"
              initial={{ x: p.x + "%", y: p.y + "%", scale: p.scale }}
              animate={{
                y: ["0%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10,
              }}
            />
          ))}
      </div>

      {/* Main content */}
      <motion.div style={{ y: y1, opacity, scale }} className="max-w-5xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm mb-8 backdrop-blur-sm"
        >
          <Sparkles size={14} />
          <span>Available for Full-Stack Roles</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter"
        >
          Jawaria <span className="text-gradient">Tariq</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-foreground/80">
            Software Engineering | <span className="text-primary">MERN Stack</span> |{" "}
            <span className="text-accent">Flutter</span>
          </h2>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            I craft immersive digital experiences by blending cutting-edge full-stack technologies with creative
            technical solutions. Currently focused on building high-performance scalable applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* <Button
              size="lg"
              className="glow-button h-14 px-10 rounded-xl text-lg gap-2 bg-primary text-primary-foreground font-bold shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95"
            >
              Explore My Work <ExternalLink size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-10 rounded-xl text-lg gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary hover:text-primary transition-all active:scale-95 bg-transparent"
            >
              Get Resume <Download size={20} />
            </Button> */}
            {/* Explore My Work Button */}
            <Button
              size="lg"
              asChild // This is important!
              className="glow-button h-14 px-10 rounded-xl text-lg gap-2 bg-primary text-primary-foreground font-bold shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95"
            >
              <a href="#projects">
                Explore My Work <ExternalLink size={20} />
              </a>
            </Button>

            {/* Get Resume Button */}
            <Button
              size="lg"
              variant="outline"
              asChild // This is important!
              className="h-14 px-10 rounded-xl text-lg gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary hover:text-primary transition-all active:scale-95 bg-transparent"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Get Resume <Download size={20} />
              </a>
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest"></span>
        <div className="w-1px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  )
}
