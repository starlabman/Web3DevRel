"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Clock, FileText, Twitter, Linkedin } from "lucide-react"
import { thoughtLeadership, getTranslatedContent } from "@/lib/data"
import type { Language } from "@/lib/translations"

interface ThoughtLeadershipProps {
  currentLang: Language
}

type Tab = "articles" | "threads" | "posts"

export function ThoughtLeadership({ currentLang }: ThoughtLeadershipProps) {
  const [tab, setTab] = useState<Tab>("articles")

  const tabs: { id: Tab; label: string; icon: typeof FileText }[] = [
    { id: "articles", label: "Articles", icon: FileText },
    { id: "threads", label: "X Threads", icon: Twitter },
    { id: "posts", label: "LinkedIn", icon: Linkedin },
  ]

  return (
    <section id="content" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Thought Leadership
          </h2>
          <p className="text-muted-foreground text-lg">
            Technical writing, threads, and insights on Web3, DevRel, and blockchain development.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((t) => (
            <Button
              key={t.id}
              variant={tab === t.id ? "default" : "outline"}
              size="sm"
              onClick={() => setTab(t.id)}
            >
              <t.icon className="w-4 h-4 mr-2" />
              {t.label}
            </Button>
          ))}
        </div>

        {tab === "articles" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {thoughtLeadership.articles.map((article, index) => (
              <motion.a
                key={index}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-5 rounded-xl glass hover:border-primary/30 transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm leading-snug">
                    {getTranslatedContent(article.title, currentLang)}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                </div>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {getTranslatedContent(article.description, currentLang)}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {getTranslatedContent(article.readTime, currentLang)}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {tab === "threads" && (
          <div className="space-y-3">
            {thoughtLeadership.threads.map((thread, index) => (
              <motion.a
                key={index}
                href={thread.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group flex items-center justify-between gap-4 p-4 rounded-xl glass hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary">
                    <Twitter className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {getTranslatedContent(thread.title, currentLang)}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </div>
        )}

        {tab === "posts" && (
          <div className="space-y-3">
            {thoughtLeadership.posts.map((post, index) => (
              <motion.a
                key={index}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group flex items-center justify-between gap-4 p-4 rounded-xl glass hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {getTranslatedContent(post.title, currentLang)}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
