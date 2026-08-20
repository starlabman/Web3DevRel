"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ExternalLink, Plus, Image as ImageIcon } from "lucide-react"
import { galleryImages, getTranslatedContent } from "@/lib/data"
import type { Language } from "@/lib/translations"

interface EcosystemImpactProps {
  currentLang: Language
}

const categories = ["All", "Speaking", "Education", "Events"]

export function EcosystemImpact({ currentLang }: EcosystemImpactProps) {
  const [filter, setFilter] = useState("All")
  const [selected, setSelected] = useState<(typeof galleryImages)[0] | null>(null)
  const [visibleCount, setVisibleCount] = useState(8)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  const filtered =
    filter === "All"
      ? galleryImages
      : galleryImages.filter(
          (img) => getTranslatedContent(img.category, currentLang) === filter
        )

  const visible = filtered.slice(0, visibleCount)

  const handleImageError = (id: number) => {
    setImageErrors((prev) => new Set(prev).add(id))
  }

  return (
    <section id="impact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            DevRel & Ecosystem Impact
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Building Web3 across Africa — from developers to communities to ecosystems.
            Conferences, workshops, meetups, and education initiatives on the ground.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setFilter(cat)
                setVisibleCount(8)
              }}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visible.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelected(image)}
            >
              {imageErrors.has(image.id) ? (
                <div className="w-full h-full bg-muted/20 flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-muted-foreground" />
                </div>
              ) : (
                <>
                  <Image
                    src={image.imageUrl}
                    alt={getTranslatedContent(image.title, currentLang)}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={() => handleImageError(image.id)}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="text-white text-xs font-semibold line-clamp-1">
                        {getTranslatedContent(image.title, currentLang)}
                      </h3>
                      <p className="text-white/70 text-xs line-clamp-1">
                        {getTranslatedContent(image.category, currentLang)} · {image.date}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {filtered.length > visibleCount && (
          <div className="text-center mt-8">
            <Button
              variant="outline"
              onClick={() => setVisibleCount((c) => c + 4)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Load More
            </Button>
          </div>
        )}

        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-3xl w-full bg-card rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                onClick={() => setSelected(null)}
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
              >
                <X className="w-5 h-5" />
              </Button>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-square">
                  {imageErrors.has(selected.id) ? (
                    <div className="w-full h-full bg-muted/20 flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-muted-foreground" />
                    </div>
                  ) : (
                    <Image
                      src={selected.imageUrl}
                      alt={getTranslatedContent(selected.title, currentLang)}
                      fill
                      className="object-cover"
                      onError={() => handleImageError(selected.id)}
                    />
                  )}
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-2">
                    {getTranslatedContent(selected.title, currentLang)}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {getTranslatedContent(selected.description, currentLang)}
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary">
                      {getTranslatedContent(selected.category, currentLang)}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {selected.date}
                    </span>
                  </div>
                  <Button asChild>
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Post
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
