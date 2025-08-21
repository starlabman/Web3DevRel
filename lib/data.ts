// Data structures for AGBETSIASSI KODJO LABORE portfolio

import type { Language } from "./translations"

// Translation helper function
export const getTranslatedContent = (content: any, language: Language, fallback = "fr") => {
  if (typeof content === "string") return content
  return content?.[language] || content?.[fallback] || content
}

export const quickLinks = [
  { label: "X / Twitter", tag: "threads impactants", href: "https://twitter.com/starlabman", kind: "twitter" },
  { label: "LinkedIn", tag: "posts & insights", href: "https://www.linkedin.com/in/starlabman/", kind: "linkedin" },
  { label: "GitHub", tag: "repos", href: "https://github.com/starlabman", kind: "github" },
  { label: "Portfolio", tag: "projects", href: "https://starlabman.netlify.app/", kind: "blog" },
  { label: "YouTube", tag: "TECHLABS ACADEMY", href: "https://youtube.com/@starlabman", kind: "youtube" },
  { label: "Email", tag: "let's talk", href: "mailto:hello@0xweb3devrel.com", kind: "mail" },
  { label: "Instagram", tag: "daily updates", href: "https://www.instagram.com/labore_agbetsiassi", kind: "instagram" },
  { label: "Twitch", tag: "live coding", href: "https://twitch.tv/starlabman", kind: "twitch" },
]

export const mentorshipServices = [
  {
    title: "Quick Web3 Consultation",
    description: "Affordable one-on-one session exclusively with Kodjo for personalized Web3 guidance",
    duration: "1 hour",
    price: "$10/session",
    features: [
      "Direct 1-on-1 consultation with Kodjo",
      "Personalized Web3 career advice",
      "Quick project review & feedback",
      "Technology stack recommendations",
      "Immediate answers to your questions",
      "Follow-up resources & next steps",
    ],
    href: "https://calendly.com/starlabman/quick-consultation",
    popular: true,
    category: "consultation",
  },
  {
    title: "Blockchain Fundamentals",
    description: "Perfect introduction to blockchain, Bitcoin, and Web3 for complete beginners",
    duration: "4 sessions",
    price: "€150/session",
    features: [
      "What is blockchain technology",
      "Understanding Bitcoin & cryptocurrencies",
      "Web3 ecosystem overview",
      "Wallet setup & security",
      "Basic trading concepts",
    ],
    href: "https://calendly.com/starlabman/blockchain-fundamentals",
    popular: false,
    category: "beginner",
  },
  {
    title: "Investment Guidance & Portfolio Management",
    description: "Professional crypto investment strategy and portfolio tracking",
    duration: "Ongoing",
    price: "€300/month",
    features: [
      "Portfolio analysis & optimization",
      "Risk management strategies",
      "Market analysis & timing",
      "DeFi opportunities identification",
      "Tax optimization strategies",
    ],
    href: "https://calendly.com/starlabman/investment-guidance",
    popular: false,
    category: "investment",
  },
  {
    title: "Technical Web3 Development",
    description: "Advanced blockchain development and smart contract programming",
    duration: "3 months",
    price: "€500/month",
    features: [
      "Smart contract development",
      "DApp architecture & design",
      "Blockchain integration",
      "Security best practices",
      "Career guidance & networking",
    ],
    href: "https://calendly.com/starlabman/web3-technical",
    popular: false,
    category: "technical",
  },
  {
    title: "Web3 Business Strategy",
    description: "Non-technical guidance for Web3 entrepreneurs and businesses",
    duration: "2 months",
    price: "€400/month",
    features: [
      "Web3 business model design",
      "Tokenomics & governance",
      "Community building strategies",
      "Partnership & funding guidance",
      "Go-to-market planning",
    ],
    href: "https://calendly.com/starlabman/web3-business",
    popular: false,
    category: "business",
  },
  {
    title: "Corporate Blockchain Training",
    description: "Comprehensive Web3 education program for teams and organizations",
    duration: "6-8 weeks",
    price: "€1500/person",
    features: [
      "Customized curriculum design",
      "Group workshops & seminars",
      "Hands-on project development",
      "Industry case studies",
      "Certification & job placement",
    ],
    href: "https://calendly.com/starlabman/corporate-training",
    popular: false,
    category: "corporate",
  },
]

export const projects = [
  {
    title: "Phonebook Management System",
    blurb:
      "Laravel Livewire application for managing telephone directories with real-time updates and search functionality.",
    href: "https://github.com/starlabman/phonebook",
    chips: ["Laravel", "Livewire", "PHP"],
  },
  {
    title: "Alchemy NFT API Integration",
    blurb: "JavaScript template for integrating Alchemy's NFT API with comprehensive documentation and examples.",
    href: "https://github.com/starlabman/alchemyAPI_NFT",
    chips: ["JavaScript", "NFT", "API"],
  },
  {
    title: "Candy Machine Responsive UI",
    blurb: "TypeScript-based responsive user interface for Solana Candy Machine NFT minting with modern design.",
    href: "https://github.com/starlabman/Candy-Responsive-Machine-ui",
    chips: ["TypeScript", "Solana", "UI/UX"],
  },
  {
    title: "Xamarin Firebase Cloud Firestore Plugin",
    blurb: "Cross-platform plugin for Firebase Cloud Firestore integration in Xamarin.Forms applications.",
    href: "https://github.com/starlabman/Xamarin-forms-plugincloudfirestore",
    chips: ["C#", "Xamarin", "Firebase"],
  },
  {
    title: "Xamarin.Forms UI Collection",
    blurb: "Curated collection of beautiful Xamarin.Forms UI samples and components for mobile development.",
    href: "https://github.com/starlabman/Xamarin.Forms-UI",
    chips: ["Xamarin", "Mobile", "UI Components"],
  },
  {
    title: "Developer Resources Hub",
    blurb: "Collaborative repository of essential resources, tools, and guides for developers across all technologies.",
    href: "https://github.com/starlabman/dev-resources",
    chips: ["Resources", "Documentation", "Community"],
  },
  {
    title: "Web3.js Educational Content",
    blurb: "Producing bi-weekly educational videos and tutorials for Web3.js developer community.",
    href: "https://youtube.com/@starlabman",
    chips: ["Education", "Web3.js", "Video Content"],
  },
  {
    title: "IsyChain Marketing Strategy",
    blurb: "Leading global marketing initiatives for decentralized blockchain solutions.",
    href: "#",
    chips: ["Marketing", "Blockchain", "Strategy"],
  },
  {
    title: "Dollar Store E-Commerce Platform",
    blurb: "Full-stack web and mobile applications for US product commercialization with inventory management.",
    href: "https://starlabman.netlify.app/",
    chips: ["E-Commerce", "Full-Stack", "Mobile"],
  },
]

export const allProjects = [
  ...projects,
  {
    title: "Blockchain Analytics Dashboard",
    blurb: "Real-time analytics dashboard for tracking blockchain transactions and DeFi protocols performance.",
    href: "https://github.com/starlabman/blockchain-analytics",
    chips: ["React", "Web3", "Analytics"],
  },
  {
    title: "Smart Contract Auditing Tool",
    blurb: "Automated security analysis tool for Ethereum smart contracts with vulnerability detection.",
    href: "https://github.com/starlabman/contract-auditor",
    chips: ["Solidity", "Security", "Automation"],
  },
  {
    title: "DeFi Yield Farming Bot",
    blurb: "Automated yield farming strategy bot for optimizing returns across multiple DeFi protocols.",
    href: "https://github.com/starlabman/yield-bot",
    chips: ["Python", "DeFi", "Automation"],
  },
  {
    title: "NFT Marketplace Template",
    blurb: "Complete NFT marketplace solution with minting, trading, and royalty management features.",
    href: "https://github.com/starlabman/nft-marketplace",
    chips: ["Next.js", "NFT", "Marketplace"],
  },
  {
    title: "Cross-Chain Bridge Interface",
    blurb: "User-friendly interface for bridging assets between Ethereum, Polygon, and Binance Smart Chain.",
    href: "https://github.com/starlabman/cross-chain-bridge",
    chips: ["Web3", "Cross-Chain", "Bridge"],
  },
]

export const threads = [
  {
    title: "Building Web3 Developer Communities in Africa",
    href: "https://x.com/0xWeb3DevRel/status/1841117454279295099",
    stat: "25k views",
  },
  {
    title: "Web3.js Ambassador Program: Latest Updates & Insights",
    href: "https://x.com/0xWeb3DevRel/status/1953526838514303405",
    stat: "18k likes",
  },
  {
    title: "DeFi Opportunities in Emerging Markets",
    href: "https://x.com/0xWeb3DevRel/status/1950968057146307037",
    stat: "top thread",
  },
  {
    title: "Blockchain Security Best Practices for Developers",
    href: "https://x.com/0xWeb3DevRel/status/1948418868658995388",
    stat: "12k views",
  },
  {
    title: "ETHAfrique: Building Ethereum Ecosystem Across Africa",
    href: "https://x.com/0xWeb3DevRel/status/1947611741908582746",
    stat: "15k likes",
  },
  {
    title: "Smart Contract Development: Advanced Techniques",
    href: "https://x.com/0xWeb3DevRel/status/1952081326544232745",
    stat: "22k views",
  },
  {
    title: "Web3 Career Transition Guide for African Developers",
    href: "https://x.com/0xWeb3DevRel/status/1939701646734290950",
    stat: "30k views",
  },
  {
    title: "Blockchain Education & Community Building Strategies",
    href: "https://x.com/0xWeb3DevRel/status/1930007463723708674",
    stat: "8.5k likes",
  },
  {
    title: "IsyChain Marketing Strategy & Decentralized Solutions",
    href: "https://x.com/0xWeb3DevRel/status/1926948041363271862",
    stat: "14k views",
  },
  {
    title: "Africa Blockchain Community: Connecting 10k+ Developers",
    href: "https://x.com/0xWeb3DevRel/status/1896894917492019596",
    stat: "top thread",
  },
  {
    title: "Web3 Investment Strategies for Emerging Markets",
    href: "https://x.com/0xWeb3DevRel/status/1895157668244754768",
    stat: "19k likes",
  },
]

export const allThreads = [
  ...threads,
  {
    title: "The Future of Decentralized Finance in Africa",
    href: "https://x.com/0xWeb3DevRel/status/1940000000000000000",
    stat: "35k views",
  },
  {
    title: "Building Sustainable Blockchain Communities",
    href: "https://x.com/0xWeb3DevRel/status/1941000000000000000",
    stat: "28k likes",
  },
  {
    title: "Web3 Security: Protecting Your Digital Assets",
    href: "https://x.com/0xWeb3DevRel/status/1942000000000000000",
    stat: "20k views",
  },
  {
    title: "Smart Contract Development Best Practices 2024",
    href: "https://x.com/0xWeb3DevRel/status/1943000000000000000",
    stat: "15k likes",
  },
  {
    title: "Tokenomics Design for Sustainable Projects",
    href: "https://x.com/0xWeb3DevRel/status/1944000000000000000",
    stat: "18k views",
  },
  {
    title: "Layer 2 Solutions: Scaling Ethereum for Mass Adoption",
    href: "https://x.com/0xWeb3DevRel/status/1945000000000000000",
    stat: "25k views",
  },
]

export const posts = [
  {
    title: "Lead des Ambassadeurs Web3.js - Building Developer Communities",
    href: "https://www.linkedin.com/posts/starlabman/",
    description:
      "Leading Web3.js ambassador program, producing bi-weekly educational videos and recruiting new ambassadors",
    engagement: "120+ likes",
  },
  {
    title: "Chief Marketing Officer at IsyChain - Blockchain Solutions",
    href: "https://www.linkedin.com/posts/starlabman/",
    description: "Defining global marketing strategy and leading teams for decentralized industry solutions",
    engagement: "85+ likes",
  },
  {
    title: "Blockchain Correspondent",
    href: "https://www.linkedin.com/posts/starlabman/",
    description: "Writing articles and conducting interviews with crypto industry experts",
    engagement: "95+ likes",
  },
  {
    title: "Binance Campus Ambassador Lead - Blockchain Education",
    href: "https://www.linkedin.com/posts/starlabman/",
    description: "Increasing blockchain adoption through education and awareness in Togo",
    engagement: "150+ likes",
  },
]

export const allPosts = [
  ...posts,
  {
    title: "Web3 Developer Roadmap 2024 - Complete Guide",
    href: "https://www.linkedin.com/posts/starlabman/web3-roadmap-2024",
    description: "Comprehensive roadmap for developers transitioning to Web3 with practical steps and resources",
    engagement: "200+ likes",
  },
  {
    title: "Building Africa's Largest Blockchain Community",
    href: "https://www.linkedin.com/posts/starlabman/africa-blockchain-community",
    description: "Journey of building a 10,000+ member blockchain community across African countries",
    engagement: "180+ likes",
  },
  {
    title: "DeFi Investment Strategies for Emerging Markets",
    href: "https://www.linkedin.com/posts/starlabman/defi-investment-strategies",
    description: "Risk management and investment approaches for DeFi protocols in developing economies",
    engagement: "160+ likes",
  },
  {
    title: "Smart Contract Security: Lessons from Major Hacks",
    href: "https://www.linkedin.com/posts/starlabman/smart-contract-security",
    description: "Analysis of major DeFi hacks and how to prevent common smart contract vulnerabilities",
    engagement: "140+ likes",
  },
  {
    title: "The Rise of African Blockchain Startups",
    href: "https://www.linkedin.com/posts/starlabman/african-blockchain-startups",
    description: "Spotlight on innovative blockchain startups emerging from the African continent",
    engagement: "220+ likes",
  },
]

export const achievements = [
  {
    title: "Lead Web3.js Ambassador",
    description: "Leading ambassador program, creating educational content and recruiting developers",
    year: "2024-Present",
    company: "Web3.js",
  },
  {
    title: "Chief Marketing Officer",
    description: "Defining global marketing strategy for blockchain solutions company",
    year: "2023-Present",
    company: "IsyChain",
  },
  {
    title: "Founder - Africa Blockchain Community",
    description: "Building the largest blockchain community across Africa, connecting developers and entrepreneurs",
    year: "2023-Present",
    company: "Africa Blockchain Community",
  },
  {
    title: "Coverner - ETHAfrique",
    description: "Leading Ethereum ecosystem development and adoption initiatives across African markets",
    year: "2024-Present",
    company: "ETHAfrique",
  },
  {
    title: "Blockchain Correspondent",
    description: "Writing crypto analysis and interviewing industry experts",
    year: "2024-Present",
    company: "WallCrypt",
  },
  {
    title: "Binance Campus Lead",
    description: "Leading blockchain education initiatives across Togo",
    year: "2023-Present",
    company: "Binance",
  },
  {
    title: "Software Engineering Degree",
    description: "Professional license in Software Engineering",
    year: "Completed",
    company: "Université de Lomé",
  },
]

export const galleryImages = [
  {
    id: 1,
    title: {
      fr: "Bootcamp Développeur Blockchain",
      en: "Blockchain Developer Bootcamp",
      ewe: "Blockchain Nusrɔ̃la Hehe",
    },
    description: {
      fr: "Formation intensive en développement blockchain pour les développeurs africains",
      en: "Leading intensive blockchain development training for African developers",
      ewe: "Blockchain nusrɔ̃ɖoɖo sesẽ na Afrika nusrɔ̃lawo",
    },
    category: {
      fr: "Conférence",
      en: "Speaking",
      ewe: "Nuƒoƒo",
    },
    imageUrl: "/blockchain-developer-bootcamp.png",
    date: "2024",
  },
  {
    id: 2,
    title: "Web3 Conference Keynote",
    description: "Keynote presentation on Web3 adoption in emerging markets",
    category: "Speaking",
    imageUrl: "/web3-conference-speaking.png",
    date: "2024",
  },
  {
    id: 3,
    title: "Ethereum Workshop Training",
    description: "Hands-on Ethereum development workshop for university students",
    category: "Speaking",
    imageUrl: "/ethereum-workshop-training.png",
    date: "2024",
  },
  {
    id: 4,
    title: "Africa Blockchain Summit",
    description: "Panel discussion on blockchain infrastructure in Africa",
    category: "Speaking",
    imageUrl: "/africa-blockchain-summit.png",
    date: "2024",
  },
  {
    id: 5,
    title: "DeFi Protocol Launch",
    description: "Speaking at major DeFi protocol launch event",
    category: "Speaking",
    imageUrl: "/defi-protocol-launch.png",
    date: "2024",
  },
  {
    id: 6,
    title: "Web3 Startup Pitch",
    description: "Presenting Web3 startup ideas to investors",
    category: "Speaking",
    imageUrl: "/web3-startup-pitch.png",
    date: "2024",
  },
  {
    id: 7,
    title: "Blockchain Security Conference",
    description: "Speaking about smart contract security best practices",
    category: "Speaking",
    imageUrl: "/blockchain-security-conference.png",
    date: "2024",
  },
  {
    id: 8,
    title: "NFT Marketplace Workshop",
    description: "Building NFT marketplaces from scratch",
    category: "Speaking",
    imageUrl: "/nft-marketplace-workshop.png",
    date: "2024",
  },
  {
    id: 9,
    title: "DeFi Masterclass Session",
    description: "Advanced DeFi strategies and yield farming techniques",
    category: "Education",
    imageUrl: "/defi-masterclass-session.png",
    date: "2024",
  },
  {
    id: 10,
    title: "Smart Contract Workshop",
    description: "Building secure smart contracts with Solidity",
    category: "Education",
    imageUrl: "/smart-contract-workshop.png",
    date: "2024",
  },
  {
    id: 11,
    title: "Blockchain Meetup Networking",
    description: "Community networking event with 300+ blockchain enthusiasts",
    category: "Education",
    imageUrl: "/blockchain-meetup-networking.png",
    date: "2024",
  },
  {
    id: 12,
    title: "Web3.js Ambassador Program",
    description: "Leading the global Web3.js ambassador initiative",
    category: "Education",
    imageUrl: "/web3-ambassador-program.png",
    date: "2024",
  },
  {
    id: 13,
    title: "Cryptocurrency Trading Course",
    description: "Teaching crypto trading fundamentals and technical analysis",
    category: "Education",
    imageUrl: "/crypto-trading-course.png",
    date: "2024",
  },
  {
    id: 14,
    title: "Blockchain Development Bootcamp",
    description: "Intensive 12-week blockchain development program",
    category: "Education",
    imageUrl: "/blockchain-dev-bootcamp.png",
    date: "2024",
  },
  {
    id: 15,
    title: "Web3 Career Transition Guide",
    description: "Helping traditional developers transition to Web3",
    category: "Education",
    imageUrl: "/web3-career-transition.png",
    date: "2024",
  },
  {
    id: 16,
    title: "DApp Development Workshop",
    description: "Building decentralized applications with React and Web3",
    category: "Education",
    imageUrl: "/dapp-development-workshop.png",
    date: "2024",
  },
  {
    id: 17,
    title: "Crypto Education Seminar",
    description: "Cryptocurrency fundamentals for beginners",
    category: "Community",
    imageUrl: "/crypto-education-seminar.png",
    date: "2024",
  },
  {
    id: 18,
    title: "Hackathon Mentoring Session",
    description: "Mentoring developers at blockchain hackathon",
    category: "Community",
    imageUrl: "/hackathon-mentoring-session.png",
    date: "2024",
  },
  {
    id: 19,
    title: "FinTech Blockchain Panel",
    description: "Panel discussion on blockchain in financial services",
    category: "Community",
    imageUrl: "/fintech-blockchain-panel.png",
    date: "2024",
  },
  {
    id: 20,
    title: "University Blockchain Lecture",
    description: "Guest lecture on blockchain technology at university",
    category: "Community",
    imageUrl: "/university-blockchain-lecture.png",
    date: "2024",
  },
  {
    id: 21,
    title: "Africa Blockchain Community Meetup",
    description: "Monthly community meetup with 500+ members",
    category: "Community",
    imageUrl: "/africa-blockchain-meetup.png",
    date: "2024",
  },
  {
    id: 22,
    title: "Web3 Women in Tech Event",
    description: "Supporting women entrepreneurs in blockchain space",
    category: "Community",
    imageUrl: "/web3-women-tech.png",
    date: "2024",
  },
  {
    id: 23,
    title: "Blockchain Startup Incubator",
    description: "Mentoring blockchain startups in accelerator program",
    category: "Community",
    imageUrl: "/blockchain-startup-incubator.png",
    date: "2024",
  },
  {
    id: 24,
    title: "Crypto Investment Club",
    description: "Leading investment discussions and portfolio reviews",
    category: "Community",
    imageUrl: "/crypto-investment-club.png",
    date: "2024",
  },
  {
    id: 25,
    title: "ETHAfrique Conference",
    description: "Co-organizing major Ethereum conference in Africa",
    category: "Events",
    imageUrl: "/ethafrique-conference.png",
    date: "2024",
  },
  {
    id: 26,
    title: "Binance Blockchain Week",
    description: "Campus ambassador activities during Binance Blockchain Week",
    category: "Events",
    imageUrl: "/binance-blockchain-week.png",
    date: "2024",
  },
  {
    id: 27,
    title: "Web3 Developer Conference",
    description: "Organizing largest Web3 developer conference in West Africa",
    category: "Events",
    imageUrl: "/web3-developer-conference.png",
    date: "2024",
  },
  {
    id: 28,
    title: "Blockchain Innovation Summit",
    description: "Keynote at blockchain innovation summit",
    category: "Events",
    imageUrl: "/blockchain-innovation-summit.png",
    date: "2024",
  },
]

export const importantArticles = [
  {
    title: {
      fr: "Comprendre la Technologie Blockchain : Guide Complet",
      en: "Understanding Blockchain Technology: A Comprehensive Guide",
      ewe: "Blockchain Mɔ̃ɖaŋu Gɔmesese: Mɔfiame Blibo",
    },
    description: {
      fr: "Plongée profonde dans les fondamentaux de la blockchain, mécanismes de consensus et applications réelles",
      en: "Deep dive into blockchain fundamentals, consensus mechanisms, and real-world applications",
      ewe: "Blockchain gɔmeɖeɖe, consensus mɔ̃ɖaŋuwo kple xexeme dɔwɔwɔwo",
    },
    href: "https://hashnode.com/@starlabman/blockchain-comprehensive-guide",
    publishedAt: "2024-01-15",
    readTime: {
      fr: "12 min de lecture",
      en: "12 min read",
      ewe: "Xlẽ miniti 12",
    },
    tags: ["Blockchain", "Education", "Technology"],
  },
  {
    title: "Web3 Development: Building Your First DApp",
    description: "Step-by-step tutorial for creating decentralized applications using React and Web3.js",
    href: "https://hashnode.com/@starlabman/web3-first-dapp",
    publishedAt: "2024-02-20",
    readTime: "15 min read",
    tags: ["Web3", "DApp", "Tutorial"],
  },
  {
    title: "DeFi Protocols: How They Work and Why They Matter",
    description: "Exploring decentralized finance protocols, yield farming, and the future of financial services",
    href: "https://hashnode.com/@starlabman/defi-protocols-explained",
    publishedAt: "2024-03-10",
    readTime: "10 min read",
    tags: ["DeFi", "Finance", "Protocols"],
  },
  {
    title: "Smart Contract Security: Best Practices and Common Pitfalls",
    description: "Essential security considerations for smart contract development and deployment",
    href: "https://hashnode.com/@starlabman/smart-contract-security",
    publishedAt: "2024-04-05",
    readTime: "18 min read",
    tags: ["Security", "Smart Contracts", "Best Practices"],
  },
  {
    title: "Building Blockchain Communities in Africa",
    description: "Strategies for growing blockchain adoption and developer communities across African markets",
    href: "https://hashnode.com/@starlabman/blockchain-communities-africa",
    publishedAt: "2024-05-12",
    readTime: "8 min read",
    tags: ["Community", "Africa", "Blockchain"],
  },
  {
    title: "The Future of Web3: Trends and Predictions for 2024",
    description: "Analysis of emerging Web3 trends, technologies, and their potential impact on various industries",
    href: "https://hashnode.com/@starlabman/web3-future-2024",
    publishedAt: "2024-06-18",
    readTime: "14 min read",
    tags: ["Web3", "Trends", "Future"],
  },
]

export const socialLinks = [
  { platform: "Twitter DevRel", handle: "@0xWeb3DevRel", href: "https://x.com/0xWeb3DevRel" },
  { platform: "Farcaster", handle: "0xweb3devrel", href: "https://farcaster.xyz/0xweb3devrel" },
  { platform: "Zora", handle: "@0xweb3devrel", href: "https://zora.co/@0xweb3devrel" },
  { platform: "Telegram", handle: "Web3DevRel", href: "https://t.me/Web3DevRel" },
  { platform: "Buy Me Coffee", handle: "starlabman", href: "https://buymeacoffee.com/starlabman" },
]
