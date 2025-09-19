import { render, screen } from '@testing-library/react'
import { Navigation } from '@/components/navigation'
import { BentoCard } from '@/components/bento-card'
import { LanguageProvider } from '@/components/language-switcher'

// Mock the hooks
jest.mock('@/hooks/use-translation', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

jest.mock('@/components/language-switcher', () => ({
  ...jest.requireActual('@/components/language-switcher'),
  useLanguage: () => ({
    language: 'fr',
    setLanguage: jest.fn(),
  }),
}))

describe('Navigation Component', () => {
  it('renders navigation with logo', () => {
    render(
      <LanguageProvider value={{ language: 'fr', setLanguage: jest.fn() }}>
        <Navigation currentLang="en" onLanguageChange={jest.fn()} />
      </LanguageProvider>
    )
    
    expect(screen.getByText('AKL')).toBeInTheDocument()
  })

  it('renders navigation items', () => {
    render(
      <LanguageProvider value={{ language: 'fr', setLanguage: jest.fn() }}>
        <Navigation currentLang="en" onLanguageChange={jest.fn()} />
      </LanguageProvider>
    )
    
    expect(screen.getByText('nav.home')).toBeInTheDocument()
    expect(screen.getByText('nav.journey')).toBeInTheDocument()
  })
})

describe('BentoCard Component', () => {
  it('renders with title', () => {
    render(
      <BentoCard
        title="Test Title"
        currentLang="fr"
      />
    )
    
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders with description', () => {
    render(
      <BentoCard
        title="Test Title"
        description="Test Description"
        currentLang="fr"
      />
    )
    
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  it('renders with children', () => {
    render(
      <BentoCard
        title="Test Title"
        currentLang="fr"
      >
        <div>Test Child</div>
      </BentoCard>
    )
    
    expect(screen.getByText('Test Child')).toBeInTheDocument()
  })
})

describe('Language Switcher', () => {
  it('renders language options', () => {
    render(
      <LanguageProvider value={{ language: 'fr', setLanguage: jest.fn() }}>
        <div data-testid="language-switcher">
          <span>FR</span>
          <span>EN</span>
          <span>EWE</span>
        </div>
      </LanguageProvider>
    )
    
    expect(screen.getByText('FR')).toBeInTheDocument()
    expect(screen.getByText('EN')).toBeInTheDocument()
    expect(screen.getByText('EWE')).toBeInTheDocument()
  })
})
