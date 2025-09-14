"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ExternalLink, Plus, Image as ImageIcon } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/hooks/use-translation"
import { useLanguage } from "@/components/language-switcher"
import { getTranslatedContent } from "@/lib/data"
import { Language } from "@/lib/translations"

interface GalleryImage {
  id: number
  title: string | { [key in Language]: string }
  description: string | { [key in Language]: string }
  category: string | { [key in Language]: string }
  imageUrl: string
  link?: string
  date: string
}

interface GalleryProps {
  images: GalleryImage[]
}

export function Gallery({ images }: GalleryProps) {
  const { language } = useLanguage()
  const { t } = useTranslation(language)

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [filter, setFilter] = useState<string>(t("gallery.filterAll"))
  const [itemsToShow, setItemsToShow] = useState<{ [key: string]: number }>({})
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  const categories = [t("gallery.filterAll"), ...Array.from(new Set(images.map((img) => getTranslatedContent(img.category, language))))]

  const getFilteredImages = () => {
    if (filter === t("gallery.filterAll")) {
      const totalToShow = itemsToShow[t("gallery.filterAll")] || 8
      return images.slice(0, totalToShow)
    } else {
      const categoryToShow = itemsToShow[filter] || 4
      return images.filter((img) => getTranslatedContent(img.category, language) === filter).slice(0, categoryToShow)
    }
  }

  const filteredImages = getFilteredImages()

  const loadMore = () => {
    const currentCount = itemsToShow[filter] || (filter === t("gallery.filterAll") ? 8 : 4)
    const increment = filter === t("gallery.filterAll") ? 8 : 4
    setItemsToShow((prev) => ({
      ...prev,
      [filter]: currentCount + increment,
    }))
  }

  const hasMoreItems = () => {
    if (filter === t("gallery.filterAll")) {
      const currentCount = itemsToShow[t("gallery.filterAll")] || 8
      return images.length > currentCount
    } else {
      const currentCount = itemsToShow[filter] || 4
      const categoryImages = images.filter((img) => getTranslatedContent(img.category, language) === filter)
      return categoryImages.length > currentCount
    }
  }

  const handleImageError = (imageId: number) => {
    setImageErrors(prev => new Set(prev).add(imageId))
  }


  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap gap-2 justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(category)}
            className={`transition-all duration-300 ${
              filter === category
                ? "bg-primary text-primary-foreground glow"
                : "border-white/20 hover:bg-white/10 bg-transparent"
            }`}
          >
            {category}
          </Button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" layout>
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <motion.div
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleImageClick(image)}
            >
              {imageErrors.has(image.id) ? (
                <div className="w-full h-full bg-muted/20 flex items-center justify-center">
                  <div className="text-center">
                    <ImageIcon className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Image non disponible</p>
                  </div>
                </div>
              ) : (
                <>
                  <Image
                    src={image.imageUrl}
                    alt={getTranslatedContent(image.title, language)}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={() => handleImageError(image.id)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white font-semibold text-sm mb-1 line-clamp-1">
                        {getTranslatedContent(image.title, language)}
                      </h3>
                      <p className="text-white/80 text-xs line-clamp-2">
                        {getTranslatedContent(image.description, language)}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <Badge variant="secondary" className="text-xs">
                          {getTranslatedContent(image.category, language)}
                        </Badge>
                        <span className="text-white/60 text-xs">{image.date}</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Load More Button */}
      {hasMoreItems() && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={loadMore}
            variant="outline"
            size="lg"
            className="border-white/20 hover:bg-white/10 bg-transparent"
          >
            <Plus className="w-4 h-4 mr-2" />
            {t("buttons.loadMore")}
          </Button>
        </motion.div>
      )}

      {/* Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] w-full bg-card rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              onClick={closeModal}
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
            >
              <X className="w-5 h-5" />
            </Button>
            
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-square">
                {imageErrors.has(selectedImage.id) ? (
                  <div className="w-full h-full bg-muted/20 flex items-center justify-center">
                    <div className="text-center">
                      <ImageIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">Image non disponible</p>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={selectedImage.imageUrl}
                    alt={getTranslatedContent(selectedImage.title, language)}
                    fill
                    className="object-cover"
                    onError={() => handleImageError(selectedImage.id)}
                  />
                )}
              </div>
              
              <div className="p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2">
                  {getTranslatedContent(selectedImage.title, language)}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {getTranslatedContent(selectedImage.description, language)}
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary">
                    {getTranslatedContent(selectedImage.category, language)}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{selectedImage.date}</span>
                </div>
                <Button asChild>
                  <a href={selectedImage.link || "#"} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("buttons.viewMore")}
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
