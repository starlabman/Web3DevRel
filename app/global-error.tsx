'use client'

import { Button } from '@/components/ui/button'
import { Home, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center px-4 bg-background">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-destructive">Erreur Critique</h1>
              <h2 className="text-xl md:text-2xl font-semibold">Application indisponible</h2>
              <p className="text-muted-foreground text-lg max-w-md mx-auto">
                Une erreur critique s'est produite. Veuillez rafraîchir la page ou revenir plus tard.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={reset} size="lg">
                <RefreshCw className="w-4 h-4 mr-2" />
                Rafraîchir
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Accueil
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
