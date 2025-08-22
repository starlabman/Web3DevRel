// Performance configuration for the application

export const PERFORMANCE_CONFIG = {
  // Image optimization
  images: {
    quality: 85,
    formats: ['webp', 'avif'],
    sizes: {
      thumbnail: 150,
      small: 300,
      medium: 600,
      large: 1200,
      xlarge: 1920,
    },
  },
  
  // Animation performance
  animations: {
    reducedMotion: 'prefers-reduced-motion: reduce',
    duration: {
      fast: 0.2,
      normal: 0.4,
      slow: 0.8,
    },
    easing: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
    },
  },
  
  // Lazy loading
  lazyLoading: {
    threshold: 0.1,
    rootMargin: '50px 0px -50px 0px',
    delay: 100,
  },
  
  // Bundle optimization
  bundle: {
    chunkSize: 244 * 1024, // 244KB
    maxChunks: 5,
    minChunkSize: 20 * 1024, // 20KB
  },
  
  // Caching
  cache: {
    staticAssets: 31536000, // 1 year
    apiResponses: 3600, // 1 hour
    images: 86400, // 1 day
  },
  
  // Preloading
  preload: {
    critical: [
      '/kodjo-labore-profile.png',
      '/blockchain-developer-bootcamp.png',
    ],
    fonts: [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    ],
  },
}

// Performance monitoring
export const PERFORMANCE_METRICS = {
  // Core Web Vitals thresholds
  lcp: 2500, // Largest Contentful Paint (ms)
  fid: 100, // First Input Delay (ms)
  cls: 0.1, // Cumulative Layout Shift
  ttfb: 800, // Time to First Byte (ms)
  
  // Custom metrics
  imageLoadTime: 1000, // Image load time (ms)
  animationFrameRate: 60, // Target FPS
  bundleLoadTime: 3000, // Bundle load time (ms)
}

// Performance utilities
export const performanceUtils = {
  // Debounce function
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout
    return (...args: Parameters<T>) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), wait)
    }
  },
  
  // Throttle function
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  },
  
  // Check if user prefers reduced motion
  prefersReducedMotion: (): boolean => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  },
  
  // Check if user is on a slow connection
  isSlowConnection: (): boolean => {
    if (typeof navigator === 'undefined') return false
    const connection = (navigator as any).connection
    return connection?.effectiveType === 'slow-2g' || 
           connection?.effectiveType === '2g' ||
           connection?.effectiveType === '3g'
  },
  
  // Preload critical resources
  preloadResources: (resources: string[]): void => {
    resources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = resource.endsWith('.css') ? 'style' : 
                resource.endsWith('.js') ? 'script' : 'image'
      link.href = resource
      document.head.appendChild(link)
    })
  },
}
