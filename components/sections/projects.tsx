"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import {
  featuredProjects,
  additionalProjects,
  getTranslatedContent,
} from "@/lib/data"
import type { Language } from "@/lib/translations"

interface FeaturedProjectsProps {
  currentLang: Language
}

export function FeaturedProjects({ currentLang }: FeaturedProjectsProps) {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Selected work across blockchain development, Web3 infrastructure, and community platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl glass hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {getTranslatedContent(project.blurb, currentLang)}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.chips.slice(0, 4).map((chip) => (
                    <Badge key={chip} variant="secondary" className="text-xs">
                      {chip}
                    </Badge>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  {getTranslatedContent(project.role, currentLang)}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
          >
            {additionalProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="group p-5 rounded-xl glass hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {getTranslatedContent(project.blurb, currentLang)}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.chips.slice(0, 3).map((chip) => (
                    <Badge key={chip} variant="outline" className="text-xs">
                      {chip}
                    </Badge>
                  ))}
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}

        <div className="text-center mt-10">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All Projects"}
          </Button>
          {!showAll && (
            <div className="mt-4">
              <a
                href="https://github.com/starlabman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                See all repos on GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
