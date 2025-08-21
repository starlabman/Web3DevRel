"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Loader2, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

interface LoadMoreButtonProps {
  onClick: () => void
  hasMore: boolean
  remainingCount: number
  loading?: boolean
  className?: string
  redirectUrl?: string
  redirectText?: string
  onUnload?: () => void
  canUnload?: boolean
  loadMoreText?: string
  showLessText?: string
}

export function LoadMoreButton({
  onClick,
  hasMore,
  remainingCount,
  loading = false,
  className = "",
  redirectUrl,
  redirectText = "Voir tous les articles",
  onUnload,
  canUnload = false,
  loadMoreText = "Voir plus",
  showLessText = "Voir moins",
}: LoadMoreButtonProps) {
  if (!hasMore && redirectUrl) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`flex justify-center mt-6 ${className}`}
      >
        <div className="flex gap-3">
          {canUnload && onUnload && (
            <Button
              onClick={onUnload}
              variant="outline"
              size="lg"
              className="bg-white/5 border-white/20 hover:bg-white/10 text-foreground group"
            >
              <ChevronUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              {showLessText}
            </Button>
          )}
          <Button
            onClick={() => window.open(redirectUrl, "_blank")}
            variant="default"
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group"
          >
            <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
            {redirectText}
          </Button>
        </div>
      </motion.div>
    )
  }

  if (!hasMore) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex justify-center mt-6 ${className}`}
    >
      <div className="flex gap-3">
        {canUnload && onUnload && (
          <Button
            onClick={onUnload}
            variant="outline"
            size="lg"
            className="bg-white/5 border-white/20 hover:bg-white/10 text-foreground group"
          >
            <ChevronUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            {showLessText}
          </Button>
        )}
        <Button
          onClick={onClick}
          variant="outline"
          size="lg"
          disabled={loading}
          className="bg-white/5 border-white/20 hover:bg-white/10 text-foreground group"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Chargement...
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform" />
              {loadMoreText} ({remainingCount} restants)
            </>
          )}
        </Button>
      </div>
    </motion.div>
  )
}
