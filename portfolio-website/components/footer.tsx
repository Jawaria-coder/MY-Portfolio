import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left space-y-2">
            <p className="font-bold text-3xl text-gradient tracking-tighter">Jawaria Tariq</p>
            <p className="text-sm text-muted-foreground font-mono uppercase tracking-widest">
              Available for Global Opportunities
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Jawaria-coder?tab=repositories"
              target="_blank"
              className="hover:text-primary transition-colors"
              rel="noreferrer"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jawaria-tariq-jaru"
              target="_blank"
              className="hover:text-primary transition-colors"
              rel="noreferrer"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <div className="text-center md:text-right space-y-2">
            <p className="text-xs text-muted-foreground font-mono uppercase tracking-[0.2em]">
              Built with Next.js & Framer Motion
            </p>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
