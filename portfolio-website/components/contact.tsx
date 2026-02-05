"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Send, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted//30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-muted-foreground mb-12 text-lg">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try
              my best to get back to you!
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:jaru.jawaria@gmail.com" className="font-medium hover:text-primary transition-colors">
                    jaru.jawaria@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Linkedin /> 
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium">
                    <a
                      href="https://www.linkedin.com/in/jawaria-tariq-jaru"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      Jawaria Tariq
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl pointer-events-auto relative z-50"

          >
            <form
              action="https://formspree.io/f/xqekoezk"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    name="name"
                    placeholder="John Doe"
                    className="bg-background/50 pointer-events-auto"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background/50 pointer-events-auto"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  name="message"
                  placeholder="Hi, I'd like to talk about..."
                  className="min-h-[150px] bg-background/50 pointer-events-auto"
                  required
                />
              </div>

              {/* Email subject */}
              <input type="hidden" name="_subject" value="New message from portfolio" />

              {/* Redirect back to your site */}
              <input
                type="hidden"
                name="_redirect"
                value="http://localhost:3000"
              />

              <Button type="submit" className="w-full gap-2 py-6 text-lg">
                Send Message <Send size={18} />
              </Button>
            </form>


          </motion.div>
        </div>
      </div>
    </section>
  )
}
