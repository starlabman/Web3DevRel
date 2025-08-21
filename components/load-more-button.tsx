"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

interface LoadMoreButtonProps {
  onClick: () => void
  hasMore: boolean
  remainingCount: number
  onUnload?: () => void
  canUnload?: boolean
  loadMoreText: string
  showLessText: string
  redirectText: string
  isLoading?: boolean
}

export function LoadMoreButton({
  onClick,
  hasMore,
  remainingCount,
  onUnload,
  canUnload,
  loadMoreText,
  showLessText,
  redirectText,
  isLoading = false,
}: LoadMoreButtonProps) {
  if (!hasMore && !canUnload) {
    return null
  }

  return (
    <motion.div
      className="flex flex-col items-center gap-2 pt-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {canUnload && onUnload ? (
        <Button
          onClick={onUnload}
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground"
        >
          <ChevronUp className="w-4 h-4 mr-2" />
          {showLessText}
        </Button>
      ) : hasMore ? (
        <div className="flex flex-col items-center gap-2">
          <Button
            onClick={onClick}
            variant="outline"
            size="sm"
            disabled={isLoading}
            className="border-white/20 hover:bg-white/10 bg-transparent min-w-[120px]"
          >
            {isLoading ? (
              <motion.div
                className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                {loadMoreText}
              </>
            )}
          </Button>
          
          {remainingCount > 0 && (
            <motion.p
              className="text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {remainingCount} {remainingCount === 1 ? "item" : "items"} restant{remainingCount > 1 ? "s" : ""}
            </motion.p>
          )}
        </div>
      ) : (
        <Button
          variant="outline"
          size="sm"
          className="border-primary/30 text-primary hover:bg-primary/10"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          {redirectText}
        </Button>
      )}
    </motion.div>
  )
}
