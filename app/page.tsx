"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Suspense, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Hero3D } from "@/components/hero-3d"
import { BentoCard } from "@/components/bento-card"
import { MentorshipSection } from "@/components/mentorship-section"
import { Gallery } from "@/components/gallery"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"

import { quickLinks, projects, threads, posts, galleryImages } from "@/lib/data"
import { translations } from "@/lib/translations"

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<"en" | "fr" | "ewe">("fr")
  const t = translations[currentLang]

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher currentLang={currentLang} onLanguageChange={setCurrentLang} />
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
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
                  {t.hero.title
                    .split(" ")[0]
                    .split("")
                    .map((char, index) => (
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
                  {t.hero.title
                    .split(" ")
                    .slice(1)
                    .join(" ")
                    .split("")
                    .map((char, index) => (
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
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
              >
                DevRel & Ecosystem Builder | Founder Africa Blockchain Community & Coverner ETHAfrique
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-lg text-muted-foreground max-w-2xl"
              >
                {t.hero.description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 glow relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <Mail className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">{t.contact.title}</span>
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
                  <ExternalLink className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">{t.hero.cta}</span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div style={{ y, opacity }} className="relative h-96 lg:h-[500px]">
            <Suspense
              fallback={
                <motion.div
                  className="w-full h-full bg-muted/20 rounded-2xl flex items-center justify-center"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                </motion.div>
              }
            >
              <Hero3D />
            </Suspense>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section id="parcours" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
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
              {t.achievements.title}
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {t.achievements.subtitle}
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
                    icon={<Icon className="w-5 h-5" />}
                    size="sm"
                  />
                </motion.div>
              )
            })}
          </motion.div>

          {/* Other Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr"
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
            {/* Projects Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <BentoCard
                title="Réalisations"
                size="lg"
                icon={<Code2 className="w-6 h-6" />}
                className="lg:col-span-2 lg:row-span-2"
              >
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <h4 className="font-semibold text-foreground mb-2">{project.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{project.blurb}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.chips.map((chip) => (
                          <Badge key={chip} variant="secondary" className="text-xs">
                            {chip}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </BentoCard>
            </motion.div>

            {/* Threads Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <BentoCard
                title="Threads impactants"
                size="md"
                icon={<TrendingUp className="w-5 h-5" />}
                className="lg:col-span-2"
              >
                <div className="space-y-3">
                  {threads.map((thread, index) => (
                    <motion.a
                      key={thread.title}
                      href={thread.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                    >
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {thread.title}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {thread.stat}
                      </Badge>
                    </motion.a>
                  ))}
                </div>
              </BentoCard>
            </motion.div>

            {/* LinkedIn Posts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <BentoCard title="Posts LinkedIn" size="md" icon={<Users className="w-5 h-5" />}>
                <div className="space-y-3">
                  {posts.map((post, index) => (
                    <motion.a
                      key={post.title}
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="block p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                    >
                      <div className="space-y-2">
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </span>
                        {post.description && (
                          <p className="text-xs text-muted-foreground line-clamp-2">{post.description}</p>
                        )}
                        {post.engagement && (
                          <Badge variant="outline" className="text-xs bg-blue-500/20 text-blue-400 border-blue-500/30">
                            {post.engagement}
                          </Badge>
                        )}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </BentoCard>
            </motion.div>

            {/* Memo Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <BentoCard title="Mémo personnel" size="sm" icon={<Zap className="w-5 h-5" />}>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Ressources Web3</p>
                  <p>• Notes techniques</p>
                  <p>• Idées projets</p>
                  <p>• Contacts clés</p>
                </div>
              </BentoCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
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
              <Camera className="w-8 h-8 inline-block mr-3 mb-1" />
              Galerie
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Découvrez mes moments marquants, événements et réalisations à travers cette collection d'images
            </motion.p>
          </motion.div>

          <Gallery images={galleryImages} />
        </div>
      </section>

      <section id="mentorship">
        <MentorshipSection currentLang={currentLang} />
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">{t.contact.title}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.contact.subtitle}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow">
                <Mail className="w-5 h-5 mr-2" />
                hello@0xweb3devrel.com
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 bg-transparent">
                <Calendar className="w-5 h-5 mr-2" />
                Calendly
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">© 2024 AGBETSIASSI KODJO LABORE — Tous droits réservés</p>
          <div className="flex items-center gap-4">
            {[
              { icon: Twitter, href: "https://twitter.com/starlabman" },
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
  )
}
