"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Clock } from "lucide-react"

interface ArticleCardProps {
  title: string
  description: string
  href: string
  publishedAt: string
  readTime: string
  tags: string[]
  index: number
}

export function ArticleCard({ title, description, href, publishedAt, readTime, tags, index }: ArticleCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="block p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:border-primary/30"
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h4>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(publishedAt).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {readTime}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.a>
  )
}
