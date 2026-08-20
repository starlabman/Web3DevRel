"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { experiences, getTranslatedContent } from "@/lib/data"
import type { Language } from "@/lib/translations"

interface ExperienceSectionProps {
  currentLang: Language
}

export function ExperienceSection({ currentLang }: ExperienceSectionProps) {
  const sorted = [...experiences].sort((a, b) => a.priority - b.priority)

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            Leading Web3 innovation, developer education, and ecosystem growth across Africa.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-8">
            {sorted.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                <div className="absolute left-2 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background" />

                <div className="p-5 rounded-xl glass hover:border-primary/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {getTranslatedContent(exp.title, currentLang)}
                    </h3>
                    <span className="text-sm text-muted-foreground font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary font-medium text-sm mb-3">
                    {exp.organization}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {getTranslatedContent(exp.description, currentLang)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
