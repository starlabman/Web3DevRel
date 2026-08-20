"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Calendar, Twitter, Linkedin, Github } from "lucide-react"
import { profile } from "@/lib/data"

export function ContactSection() {
  const socials = [
    { icon: Mail, label: "Email", href: `mailto:${profile.email}`, value: profile.email },
    { icon: Twitter, label: "X / Twitter", href: "https://x.com/0xWeb3DevRel", value: "@0xWeb3DevRel" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/starlabman/", value: "starlabman" },
    { icon: Github, label: "GitHub", href: "https://github.com/starlabman", value: "starlabman" },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 rounded-2xl glass"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Building something in Web3?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s talk. Whether you need DevRel, ecosystem growth, community building,
            or developer education — I can help.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Button size="lg" asChild>
              <a href={`mailto:${profile.email}`}>
                <Mail className="w-4 h-4 mr-2" />
                {profile.email}
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={profile.calendarUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                Book a Call
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-primary/5 transition-colors"
              >
                <social.icon className="w-5 h-5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{social.label}</span>
                <span className="text-xs font-medium text-foreground truncate max-w-full">
                  {social.value}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
