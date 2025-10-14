"use client"

import { Button } from "@/components/ui/button"

export function SkipLink() {
  return (
    <Button
      asChild
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
    >
      <a href="#main-content">Passer au contenu principal</a>
    </Button>
  )
}
