"use client"

import { motion } from "framer-motion"
import { Code, Globe, Users, Book, Zap, Map } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services, getTranslatedContent } from "@/lib/data"
import type { Language } from "@/lib/translations"

const iconMap = {
  code: Code,
  globe: Globe,
  users: Users,
  book: Book,
  zap: Zap,
  map: Map,
}

interface ServicesSectionProps {
  currentLang: Language
}

export function ServicesSection({ currentLang }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            What I Can Help With
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Working with Web3 protocols, foundations, and startups on developer relations,
            ecosystem growth, and community building across Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl glass hover:border-primary/30 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {getTranslatedContent(service.title, currentLang)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {getTranslatedContent(service.description, currentLang)}
                </p>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" asChild>
            <a href="#contact">Start a Conversation</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
