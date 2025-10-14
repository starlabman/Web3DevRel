"use client"

import { useState, useMemo } from "react"

interface UseLoadMoreProps<T> {
  items: T[]
  initialCount?: number
  loadMoreCount?: number
  redirectUrl?: string
  onAllLoaded?: () => void
}

export function useLoadMore<T>({
  items,
  initialCount = 6,
  loadMoreCount = 6,
  redirectUrl,
  onAllLoaded,
}: UseLoadMoreProps<T>) {
  const [visibleCount, setVisibleCount] = useState(initialCount)

  const visibleItems = useMemo(() => {
    return items.slice(0, visibleCount)
  }, [items, visibleCount])

  const hasMore = visibleCount < items.length
  const remainingCount = items.length - visibleCount
  const canUnload = visibleCount > initialCount

  const loadMore = () => {
    const newCount = Math.min(visibleCount + loadMoreCount, items.length)
    setVisibleCount(newCount)

    if (newCount >= items.length) {
      if (onAllLoaded) {
        onAllLoaded()
      } else if (redirectUrl) {
        setTimeout(() => {
          window.open(redirectUrl, "_blank")
        }, 500)
      }
    }
  }

  const unload = () => {
    setVisibleCount(initialCount)
  }

  const reset = () => {
    setVisibleCount(initialCount)
  }

  return {
    visibleItems,
    hasMore,
    remainingCount,
    loadMore,
    unload,
    canUnload,
    reset,
    totalCount: items.length,
    visibleCount,
  }
}
