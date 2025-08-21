'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-destructive">Erreur</h1>
          <h2 className="text-xl md:text-2xl font-semibold">Quelque chose s'est mal passé</h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Une erreur inattendue s'est produite. Veuillez réessayer.
          </p>
          {process.env.NODE_ENV === 'development' && (
            <details className="text-left max-w-md mx-auto">
              <summary className="cursor-pointer text-sm text-muted-foreground">
                Détails de l'erreur
              </summary>
              <pre className="mt-2 text-xs bg-muted p-2 rounded overflow-auto">
                {error.message}
              </pre>
            </details>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} size="lg">
            <RefreshCw className="w-4 h-4 mr-2" />
            Réessayer
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
