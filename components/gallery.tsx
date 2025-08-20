"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ExternalLink, Plus } from "lucide-react"
import Image from "next/image"

interface GalleryImage {
  id: number
  title: string
  description: string
  category: string
  imageUrl: string
  date: string
}

interface GalleryProps {
  images: GalleryImage[]
}

export function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [filter, setFilter] = useState<string>("All")
  const [itemsToShow, setItemsToShow] = useState<{ [key: string]: number }>({})

  const categories = ["All", ...Array.from(new Set(images.map((img) => img.category)))]

  const getFilteredImages = () => {
    if (filter === "All") {
      const totalToShow = itemsToShow["All"] || 8
      return images.slice(0, totalToShow)
    } else {
      const categoryToShow = itemsToShow[filter] || 4
      return images.filter((img) => img.category === filter).slice(0, categoryToShow)
    }
  }

  const filteredImages = getFilteredImages()

  const loadMore = () => {
    const currentCount = itemsToShow[filter] || (filter === "All" ? 8 : 4)
    const increment = filter === "All" ? 8 : 4
    setItemsToShow((prev) => ({
      ...prev,
      [filter]: currentCount + increment,
    }))
  }

  const hasMoreItems = () => {
    if (filter === "All") {
      const currentCount = itemsToShow["All"] || 8
      return images.length > currentCount
    } else {
      const currentCount = itemsToShow[filter] || 4
      const categoryImages = images.filter((img) => img.category === filter)
      return categoryImages.length > currentCount
    }
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
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="glass rounded-xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.imageUrl || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Badge variant="secondary" className="mb-2">
                    {image.category}
                  </Badge>
                  <h3 className="text-white font-semibold text-sm line-clamp-2">{image.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {image.date}
                  </Badge>
                </div>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-1">{image.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{image.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {hasMoreItems() && (
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button onClick={loadMore} variant="outline" className="border-white/20 hover:bg-white/10 bg-transparent">
            <Plus className="w-4 h-4 mr-2" />
            Voir plus
          </Button>
        </motion.div>
      )}

      {/* Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="aspect-[16/10] relative">
                <Image
                  src={selectedImage.imageUrl || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                />
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{selectedImage.category}</Badge>
                <Badge variant="outline">{selectedImage.date}</Badge>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">{selectedImage.title}</h2>
              <p className="text-muted-foreground mb-4">{selectedImage.description}</p>
              <Button variant="outline" className="border-white/20 hover:bg-white/10 bg-transparent">
                <ExternalLink className="w-4 h-4 mr-2" />
                Voir plus
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
