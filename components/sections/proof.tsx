"use client"

import { motion } from "framer-motion"
import { Users, Globe, Code, Book, Mic, FileText } from "lucide-react"
import { proofPoints, getTranslatedContent } from "@/lib/data"
import type { Language } from "@/lib/translations"

const iconMap = {
  users: Users,
  globe: Globe,
  code: Code,
  book: Book,
  mic: Mic,
  filetext: FileText,
}

interface ProofSectionProps {
  currentLang: Language
}

export function ProofSection({ currentLang }: ProofSectionProps) {
  return (
    <section className="py-16 px-4 border-y border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {proofPoints.map((point, index) => {
            const Icon = iconMap[point.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-5 rounded-xl glass"
              >
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-primary/10 text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    {getTranslatedContent(point.value, currentLang)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {getTranslatedContent(point.label, currentLang)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
