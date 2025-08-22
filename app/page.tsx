"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Suspense, useState, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { Hero3D } from "@/components/hero-3d"
import { BentoCard } from "@/components/bento-card"
import { MentorshipSection } from "@/components/mentorship-section"
import { Gallery } from "@/components/gallery"
import { LanguageSwitcher } from "@/components/language-switcher"
import { LoadMoreButton } from "@/components/load-more-button"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLoadMore } from "@/hooks/use-load-more"
import { useTranslation } from "@/hooks/use-translation"
import { PerformanceOptimizer } from "@/components/performance-optimizer"
import { AccessibilityEnhancer } from "@/components/accessibility-enhancer"
import {
  Code2,
  Twitter,
  Linkedin,
  Github,
  FileText,
  Mail,
  Calendar,
  ExternalLink,
  TrendingUp,
  Users,
  Zap,
  Youtube,
  Instagram,
  Camera,
  BookOpen,
} from "lucide-react"

import { quickLinks, allProjects, allThreads, allPosts, importantArticles, galleryImages, getTranslatedContent } from "@/lib/data"
import type { Language } from "@/lib/translations"
import { LanguageProvider } from "@/components/language-switcher"

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<Language>("fr")
  const { t } = useTranslation(currentLang)

  const safeT = useMemo(() => {
    return (key: string): string => {
      try {
        const result = t(key)
        // Strict check to ensure we never return an object
        if (result && typeof result === "string" && result.trim().length > 0) {
          return result
        }
        // If result is an object or not a valid string, return a fallback
        // Silently handle missing translations in production
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Translation missing or invalid for key: ${key}`)
        }
        return key.split(".").pop() || key // Return last part of key as fallback
      } catch (error) {
        // Silently handle translation errors in production
        if (process.env.NODE_ENV === 'development') {
          console.error(`Error getting translation for key: ${key}`, error)
        }
        return key.split(".").pop() || key
      }
    }
  }, [t])

  const projectsLoadMore = useLoadMore({
    items: allProjects,
    initialCount: 3,
    loadMoreCount: 2,
  })
  const threadsLoadMore = useLoadMore({
    items: allThreads,
    initialCount: 3,
    loadMoreCount: 2,
  })
  const postsLoadMore = useLoadMore({
    items: allPosts,
    initialCount: 3,
    loadMoreCount: 2,
  })
  const articlesLoadMore = useLoadMore({
    items: importantArticles,
    initialCount: 3,
    loadMoreCount: 2,
  })

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <LanguageProvider value={{ language: currentLang, setLanguage: setCurrentLang }}>
      <AccessibilityEnhancer>
        <div className="min-h-screen" id="main-content">
          <Navigation />

          <div className="fixed top-4 right-4 z-50">
            <LanguageSwitcher currentLang={currentLang} onLanguageChange={(lang) => setCurrentLang(lang as Language)} />
          </div>

        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-6 lg:space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                >
                  <motion.span
                    className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent inline-block"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    {safeT("hero.title").split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{
                          scale: 1.1,
                          color: "#8b5cf6",
                          textShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
                        }}
                        className="inline-block cursor-default"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                  <br />
                  <motion.span
                    className="text-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    {safeT("hero.lastname").split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.7 + index * 0.08 }}
                        whileHover={{
                          scale: 1.05,
                          textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                        }}
                        className="inline-block cursor-default"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl"
                >
                  {safeT("hero.subtitle")}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="text-base sm:text-lg text-muted-foreground max-w-2xl"
                >
                  {safeT("hero.description")}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="flex flex-wrap gap-3 sm:gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 glow relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 relative z-10" />
                    <span className="relative z-10">{safeT("buttons.contact")}</span>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 hover:bg-white/10 bg-transparent relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2 relative z-10" />
                    <span className="relative z-10">{safeT("hero.cta")}</span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div style={{ y, opacity }} className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
              <Suspense
                fallback={
                  <motion.div
                    className="w-full h-full bg-muted/20 rounded-2xl flex items-center justify-center"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                  </motion.div>
                }
              >
                <Hero3D />
              </Suspense>
            </motion.div>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section id="parcours" className="py-16 sm:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
                whileInView={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{
                  background: "linear-gradient(45deg, #8b5cf6, #3b82f6, #06b6d4, #8b5cf6)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {safeT("achievements.title")}
              </motion.h2>
              <motion.p
                className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {safeT("achievements.subtitle")}
              </motion.p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {quickLinks.map((link, index) => {
                const icons = {
                  twitter: Twitter,
                  linkedin: Linkedin,
                  github: Github,
                  notion: FileText,
                  blog: FileText,
                  mail: Mail,
                  youtube: Youtube,
                  instagram: Instagram,
                  twitch: TrendingUp,
                }
                const Icon = icons[link.kind as keyof typeof icons] || ExternalLink

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <BentoCard
                      title={link.label}
                      description={link.tag}
                      href={link.href}
                      icon={<Icon className="w-4 h-4 sm:w-5 sm:h-5" />}
                      size="sm"
                      currentLang={currentLang}
                    />
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-fr"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
                {/* Projects Section - Uniform display */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <BentoCard title={safeT("sections.projects")} size="sm" icon={<Code2 className="w-5 h-5 sm:w-6 sm:h-6" />} currentLang={currentLang}>
                    <div className="space-y-3">
                      {projectsLoadMore.visibleItems.map((project, index) => (
                        <motion.div
                          key={getTranslatedContent(project.title, currentLang)}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                          <h4 className="font-semibold text-foreground mb-1 text-sm">{getTranslatedContent(project.title, currentLang)}</h4>
                          <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{getTranslatedContent(project.blurb, currentLang)}</p>
                          <div className="flex flex-wrap gap-1">
                            {project.chips.slice(0, 3).map((chip) => (
                              <Badge key={chip} variant="secondary" className="text-xs px-2 py-0">
                                {chip}
                              </Badge>
                            ))}
                            {project.chips.length > 3 && (
                              <Badge variant="outline" className="text-xs px-2 py-0">
                                +{project.chips.length - 3}
                              </Badge>
                            )}
                          </div>
                        </motion.div>
                      ))}
                      <LoadMoreButton
                        onClick={projectsLoadMore.loadMore}
                        hasMore={projectsLoadMore.hasMore}
                        remainingCount={projectsLoadMore.remainingCount}
                        onUnload={projectsLoadMore.unload}
                        canUnload={projectsLoadMore.canUnload}
                        loadMoreText={safeT("buttons.loadMore")}
                        showLessText={safeT("buttons.showLess")}
                        redirectText={safeT("buttons.viewAllArticles")}
                      />
                    </div>
                  </BentoCard>
                </motion.div>

                {/* Articles Important Section - Uniform display */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <BentoCard title={safeT("sections.articles")} size="sm" icon={<BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />} currentLang={currentLang}>
                    <div className="space-y-3">
                      {articlesLoadMore.visibleItems.map((article, index) => (
                        <motion.a
                          key={getTranslatedContent(article.title, currentLang)}
                          href={article.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="block p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                        >
                          <div className="space-y-2">
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm line-clamp-1">
                              {getTranslatedContent(article.title, currentLang)}
                            </h4>
                            <p className="text-xs text-muted-foreground line-clamp-2">{getTranslatedContent(article.description, currentLang)}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-1">
                                {article.tags.slice(0, 2).map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs px-2 py-0">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <span className="text-xs text-muted-foreground">{getTranslatedContent(article.readTime, currentLang)}</span>
                            </div>
                          </div>
                        </motion.a>
                      ))}
                      <LoadMoreButton
                        onClick={articlesLoadMore.loadMore}
                        hasMore={articlesLoadMore.hasMore}
                        remainingCount={articlesLoadMore.remainingCount}
                        onUnload={articlesLoadMore.unload}
                        canUnload={articlesLoadMore.canUnload}
                        loadMoreText={safeT("buttons.loadMore")}
                        showLessText={safeT("buttons.showLess")}
                        redirectText={safeT("buttons.viewAllArticles")}
                      />
                    </div>
                  </BentoCard>
                </motion.div>

                {/* LinkedIn Posts - Uniform display */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <BentoCard title={safeT("sections.posts")} size="sm" icon={<Users className="w-4 h-4 sm:w-5 sm:h-5" />} currentLang={currentLang}>
                    <div className="space-y-2">
                      {postsLoadMore.visibleItems.map((post, index) => (
                        <motion.a
                          key={getTranslatedContent(post.title, currentLang)}
                          href={post.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="block p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                        >
                          <div className="space-y-1">
                            <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {getTranslatedContent(post.title, currentLang)}
                            </span>
                            {post.engagement && (
                              <Badge variant="outline" className="text-xs bg-blue-500/20 text-blue-400 border-blue-500/30">
                                {post.engagement}
                              </Badge>
                            )}
                          </div>
                        </motion.a>
                      ))}
                      <LoadMoreButton
                        onClick={postsLoadMore.loadMore}
                        hasMore={postsLoadMore.hasMore}
                        remainingCount={postsLoadMore.remainingCount}
                        onUnload={postsLoadMore.unload}
                        canUnload={postsLoadMore.canUnload}
                        loadMoreText={safeT("buttons.loadMore")}
                        showLessText={safeT("buttons.showLess")}
                        redirectText={safeT("buttons.viewAllArticles")}
                      />
                    </div>
                  </BentoCard>
                </motion.div>

                {/* Threads Section - Uniform display */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <BentoCard title={safeT("sections.threads")} size="sm" icon={<TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />} currentLang={currentLang}>
                    <div className="space-y-2">
                      {threadsLoadMore.visibleItems.map((thread, index) => (
                        <motion.a
                          key={getTranslatedContent(thread.title, currentLang)}
                          href={thread.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                        >
                          <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                            {getTranslatedContent(thread.title, currentLang)}
                          </span>
                          <Badge variant="outline" className="text-xs ml-2 flex-shrink-0">
                            {thread.stat}
                          </Badge>
                        </motion.a>
                      ))}
                      <LoadMoreButton
                        onClick={threadsLoadMore.loadMore}
                        hasMore={threadsLoadMore.hasMore}
                        remainingCount={threadsLoadMore.remainingCount}
                        onUnload={threadsLoadMore.unload}
                        canUnload={threadsLoadMore.canUnload}
                        loadMoreText={safeT("buttons.loadMore")}
                        showLessText={safeT("buttons.showLess")}
                        redirectText={safeT("buttons.viewAllArticles")}
                      />
                    </div>
                  </BentoCard>
                </motion.div>

                {/* Memo Section - Uniform display */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <BentoCard title={safeT("sections.memo")} size="sm" icon={<Zap className="w-4 h-4 sm:w-5 sm:h-5" />} currentLang={currentLang}>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>{safeT("memo.resource")}</p>
                      <p>{safeT("memo.technical_notes")}</p>
                      <p>{safeT("memo.project_ideas")}</p>
                      <p>{safeT("memo.key_contacts")}</p>
                    </div>
                  </BentoCard>
                </motion.div>

                {/* Achievements Section - Uniform display */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <BentoCard title={safeT("sections.keyAchievements")} size="sm" icon={<TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />} currentLang={currentLang}>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>{safeT("achievements.founder")}</p>
                      <p>{safeT("achievements.coverner")}</p>
                      <p>{safeT("achievements.devrel_expert")}</p>
                      <p>{safeT("achievements.ecosystem_builder")}</p>
                    </div>
                  </BentoCard>
                </motion.div>
                
              </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 sm:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
                whileInView={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{
                  background: "linear-gradient(45deg, #8b5cf6, #3b82f6, #06b6d4, #8b5cf6)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <Camera className="w-6 h-6 sm:w-8 sm:h-8 inline-block mr-3 mb-1" />
                {safeT("sections.gallery")}
              </motion.h2>
              <motion.p
                className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {safeT("gallery.description")}
              </motion.p>
            </motion.div>

            <PerformanceOptimizer>
              <Gallery images={galleryImages} />
            </PerformanceOptimizer>
          </div>
        </section>

        <section id="mentorship">
          <MentorshipSection currentLang={currentLang} />
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-16 sm:py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 sm:p-12 space-y-6 sm:space-y-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{safeT("contact.title")}</h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">{safeT("contact.subtitle")}</p>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 glow">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  hello@0xweb3devrel.com
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 bg-transparent">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  {safeT("buttons.calendar")}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">{safeT("footer.copyright")}</p>
            <div className="flex items-center gap-4">
              {[
                { icon: Twitter, href: "https://twitter.com/0xWeb3DevRel" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/starlabman/" },
                { icon: Github, href: "https://github.com/starlabman" },
                { icon: Mail, href: "mailto:hello@0xweb3devrel.com" },
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-muted-foreground hover:text-primary"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </footer>
      </div>
      </AccessibilityEnhancer>
    </LanguageProvider>
  )
}
