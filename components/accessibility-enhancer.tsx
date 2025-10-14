"use client"

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Volume2, VolumeX, Sun, Moon, Monitor } from 'lucide-react'

interface AccessibilityEnhancerProps {
  children: React.ReactNode
}

export function AccessibilityEnhancer({ children }: AccessibilityEnhancerProps) {
  const [isMuted, setIsMuted] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')
  const [fontSize, setFontSize] = useState(16)

  useEffect(() => {
    // Apply theme
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      // System theme
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      if (mediaQuery.matches) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    }

    // Apply font size
    root.style.fontSize = `${fontSize}px`
  }, [theme, fontSize])

  const toggleMute = () => {
    setIsMuted(!isMuted)
    // Mute/unmute any audio elements
    const audioElements = document.querySelectorAll('audio, video')
    audioElements.forEach((element) => {
      if (isMuted) {
        (element as HTMLMediaElement).muted = false
      } else {
        (element as HTMLMediaElement).muted = true
      }
    })
  }

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24))
  }

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12))
  }

  return (
    <div className="relative">
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-2">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleMute}
            className="rounded-full w-10 h-10 p-0"
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={increaseFontSize}
            className="rounded-full w-10 h-10 p-0"
            aria-label="Increase font size"
          >
            A+
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={decreaseFontSize}
            className="rounded-full w-10 h-10 p-0"
            aria-label="Decrease font size"
          >
            A-
          </Button>
        </div>

        <div className="flex gap-2">
          <Button
            variant={theme === 'light' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setTheme('light')}
            className="rounded-full w-10 h-10 p-0"
            aria-label="Light theme"
          >
            <Sun className="w-4 h-4" />
          </Button>
          
          <Button
            variant={theme === 'dark' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setTheme('dark')}
            className="rounded-full w-10 h-10 p-0"
            aria-label="Dark theme"
          >
            <Moon className="w-4 h-4" />
          </Button>
          
          <Button
            variant={theme === 'system' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setTheme('system')}
            className="rounded-full w-10 h-10 p-0"
            aria-label="System theme"
          >
            <Monitor className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {children}
    </div>
  )
}

export function FocusTrap({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleTabKey)
    return () => document.removeEventListener('keydown', handleTabKey)
  }, [])

  return <>{children}</>
}
