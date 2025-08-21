// Data structures for AGBETSIASSI KODJO LABORE portfolio

import type { Language } from "./translations"

// Translation helper function
export const getTranslatedContent = (content: any, language: Language, fallback = "fr") => {
  if (typeof content === "string") return content
  return content?.[language] || content?.[fallback] || content
}

export const quickLinks = [
  { label: "X / Twitter", tag: "threads impactants", href: "https://twitter.com/0xWeb3DevRel", kind: "twitter" },
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
    title: {
      en: "Quick Web3 Consultation",
      fr: "Consultation Web3 Rapide",
      ewe: "Web3 Kpekpeɖeŋu Kpuie",
    },
    description: {
      en: "Affordable one-on-one session exclusively with Kodjo for personalized Web3 guidance",
      fr: "Session individuelle abordable exclusivement avec Kodjo pour un accompagnement Web3 personnalisé",
      ewe: "Web3 ƒe mɔfiame tẽe kple Kodjo ɖeɖeko",
    },
    duration: "1 hour",
    price: "$10/session",
    features: [
      {
        en: "Direct 1-on-1 consultation with Kodjo",
        fr: "Consultation directe 1-à-1 avec Kodjo",
        ewe: "Kpekpeɖeŋu tẽe kple Kodjo",
      },
      {
        en: "Personalized Web3 career advice",
        fr: "Conseils de carrière Web3 personnalisés",
        ewe: "Web3 dɔwɔƒe mɔfiame tẽe",
      },
      {
        en: "Quick project review & feedback",
        fr: "Révision rapide de projet et retours",
        ewe: "Dɔwɔwɔ kple eƒe nuteƒekpɔkpɔ kpuie",
      },
      {
        en: "Technology stack recommendations",
        fr: "Recommandations de pile technologique",
        ewe: "Mɔ̃ɖaŋu kpakpaxɔxɔ ƒe aɖaŋuɖoɖo",
      },
      {
        en: "Immediate answers to your questions",
        fr: "Réponses immédiates à vos questions",
        ewe: "Biabiawo gbɔgblɔ kaba",
      },
      {
        en: "Follow-up resources & next steps",
        fr: "Ressources de suivi et prochaines étapes",
        ewe: "Ame gbɔgblɔ kple etsɔme dɔwɔwɔwo",
      },
    ],
    href: "https://calendly.com/starlabman/quick-consultation",
    popular: true,
    category: "consultation",
  },
  {
    title: {
      en: "Blockchain Fundamentals",
      fr: "Fondamentaux Blockchain",
      ewe: "Blockchain Gɔmeɖoanyi",
    },
    description: {
      en: "Perfect introduction to blockchain, Bitcoin, and Web3 for complete beginners",
      fr: "Introduction parfaite à la blockchain, Bitcoin et Web3 pour débutants complets",
      ewe: "Blockchain, Bitcoin, kple Web3 gɔmeɖeɖe nyui na ame yeyewo",
    },
    duration: "4 sessions",
    price: "€150/session",
    features: [
      {
        en: "What is blockchain technology",
        fr: "Qu'est-ce que la technologie blockchain",
        ewe: "Blockchain mɔ̃ɖaŋu nye nuka",
      },
      {
        en: "Understanding Bitcoin & cryptocurrencies",
        fr: "Comprendre Bitcoin & cryptomonnaies",
        ewe: "Bitcoin & cryptocurrency gɔmesese",
      },
      {
        en: "Web3 ecosystem overview",
        fr: "Aperçu de l'écosystème Web3",
        ewe: "Web3 nutome kpɔɖeŋu",
      },
      {
        en: "Wallet setup & security",
        fr: "Configuration portefeuille & sécurité",
        ewe: "Gakotoku ɖoɖo & dedinɔnɔ",
      },
      {
        en: "Basic trading concepts",
        fr: "Concepts de trading de base",
        ewe: "Asitsatsa gɔmeɖeɖe",
      },
    ],
    href: "https://calendly.com/starlabman/blockchain-fundamentals",
    popular: false,
    category: "beginner",
  },
  {
    title: {
      en: "Investment Guidance & Portfolio Management",
      fr: "Conseil en Investissement & Gestion de Portefeuille",
      ewe: "Gakɔkɔ Aɖaŋuɖoɖo & Gakotoku Dzikpɔkpɔ",
    },
    description: {
      en: "Professional crypto investment strategy and portfolio tracking",
      fr: "Stratégie d'investissement crypto professionnelle et suivi de portefeuille",
      ewe: "Crypto gakɔkɔ mɔ̃ɖaŋu nyui kple gakotoku dzikpɔkpɔ",
    },
    duration: "Ongoing",
    price: "€300/month",
    features: [
      {
        en: "Portfolio analysis & optimization",
        fr: "Analyse & optimisation de portefeuille",
        ewe: "Gakotoku me nukpɔkpɔ & nyonyo",
      },
      {
        en: "Risk management strategies",
        fr: "Stratégies de gestion des risques",
        ewe: "Afɔku dzikpɔkpɔ mɔ̃ɖaŋuwo",
      },
      {
        en: "Market analysis & timing",
        fr: "Analyse de marché & timing",
        ewe: "Asi me nukpɔkpɔ & ɣeyiɣi",
      },
      {
        en: "DeFi opportunities identification",
        fr: "Identification des opportunités DeFi",
        ewe: "DeFi mɔnukpɔkpɔwo",
      },
      {
        en: "Tax optimization strategies",
        fr: "Stratégies d'optimisation fiscale",
        ewe: "Dzodome nyonyo",
      },
    ],
    href: "https://calendly.com/starlabman/investment-guidance",
    popular: false,
    category: "investment",
  },
  {
    title: {
      en: "Technical Web3 Development",
      fr: "Développement Web3 Technique",
      ewe: "Web3 Mɔ̃ɖaŋu Wɔwɔ",
    },
    description: {
      en: "Advanced blockchain development and smart contract programming",
      fr: "Développement blockchain avancé et programmation de contrats intelligents",
      ewe: "Blockchain mɔ̃ɖaŋu wɔwɔ kple smart contract ŋɔŋlɔ",
    },
    duration: "3 months",
    price: "€500/month",
    features: [
      {
        en: "Smart contract development",
        fr: "Développement de contrats intelligents",
        ewe: "Smart contract wɔwɔ",
      },
      {
        en: "DApp architecture & design",
        fr: "Architecture & conception DApp",
        ewe: "DApp ɖoɖo",
      },
      {
        en: "Blockchain integration",
        fr: "Intégration blockchain",
        ewe: "Blockchain kpekpeɖeŋu",
      },
      {
        en: "Security best practices",
        fr: "Meilleures pratiques de sécurité",
        ewe: "Dedinɔnɔ mɔ̃ɖaŋu nyuitɔwo",
      },
      {
        en: "Career guidance & networking",
        fr: "Orientation de carrière & réseautage",
        ewe: "Dɔ mɔfiame",
      },
    ],
    href: "https://calendly.com/starlabman/web3-technical",
    popular: false,
    category: "technical",
  },
  {
    title: {
      en: "Web3 Business Strategy",
      fr: "Stratégie Commerciale Web3",
      ewe: "Web3 Dɔwɔwɔ ƒe Aɖaŋuɖoɖo",
    },
    description: {
      en: "Non-technical guidance for Web3 entrepreneurs and businesses",
      fr: "Conseils non-techniques pour entrepreneurs et entreprises Web3",
      ewe: "Web3 dɔwɔlawo kple dɔwɔƒewo ƒe mɔfiame",
    },
    duration: "2 months",
    price: "€400/month",
    features: [
      {
        en: "Web3 business model design",
        fr: "Conception de modèle économique Web3",
        ewe: "Web3 dɔwɔwɔ ƒe ɖoɖo",
      },
      {
        en: "Tokenomics & governance",
        fr: "Tokenomics & gouvernance",
        ewe: "Tokenomics & dziɖuɖu",
      },
      {
        en: "Community building strategies",
        fr: "Stratégies de construction de communauté",
        ewe: "Hamewo tutu ƒe aɖaŋuɖoɖo",
      },
      {
        en: "Partnership & funding guidance",
        fr: "Conseils en partenariat & financement",
        ewe: "Kpekpeɖeŋu kple gakɔkɔ ƒe aɖaŋuɖoɖo",
      },
      {
        en: "Go-to-market planning",
        fr: "Planification de la mise sur le marché",
        ewe: "Asi ƒe ɖoɖo",
      },
    ],
    href: "https://calendly.com/starlabman/web3-business",
    popular: false,
    category: "business",
  },
  {
    title: {
      en: "Corporate Blockchain Training",
      fr: "Formation Blockchain en Entreprise",
      ewe: "Blockchain Hehe na Dɔwɔƒe",
    },
    description: {
      en: "Comprehensive Web3 education program for teams and organizations",
      fr: "Programme complet d'éducation Web3 pour équipes et organisations",
      ewe: "Web3 nusrɔ̃ɖoɖo blibo na dɔwɔƒe",
    },
    duration: "6-8 weeks",
    price: "€1500/person",
    features: [
      {
        en: "Customized curriculum design",
        fr: "Conception de programme personnalisé",
        ewe: "Nusrɔ̃ɖoɖo tẽe",
      },
      {
        en: "Group workshops & seminars",
        fr: "Ateliers de groupe & séminaires",
        ewe: "Amekoko kple nusrɔ̃ɖoɖowo",
      },
      {
        en: "Hands-on project development",
        fr: "Développement de projets pratiques",
        ewe: "Dɔwɔwɔ gbɔgblɔ kple nusrɔ̃ɖoɖo",
      },
      {
        en: "Industry case studies",
        fr: "Études de cas de l'industrie",
        ewe: "Dɔwɔwɔwo ƒe nuteƒekpɔkpɔ",
      },
      {
        en: "Certification & job placement",
        fr: "Certification & placement professionnel",
        ewe: "Numedzodzro kple dɔwɔƒe gbɔgblɔ",
      },
    ],
    href: "https://calendly.com/starlabman/corporate-training",
    popular: false,
    category: "corporate",
  },
]

export const projects = [
  {
    title: {
      en: "Phonebook Management System",
      fr: "Système de Gestion de Répertoire Téléphonique",
      ewe: "Ameŋkɔwo Dzikpɔkpɔ Habɔbɔ",
    },
    blurb: {
      en: "Laravel Livewire application for managing telephone directories with real-time updates and search functionality.",
      fr: "Application Laravel Livewire pour la gestion de répertoires téléphoniques avec mises à jour en temps réel et fonction de recherche.",
      ewe: "Laravel Livewire dɔwɔwɔ na ameŋkɔwo dzikpɔkpɔ kple dzɔtɔŋuɖeɖewo kple kɔmpiuta me nuŋlɔŋlɔwo.",
    },
    href: "https://github.com/starlabman/phonebook",
    chips: ["Laravel", "Livewire", "PHP"],
  },
  {
    title: {
      en: "Alchemy NFT API Integration",
      fr: "Intégration API NFT Alchemy",
      ewe: "Alchemy NFT API Kpekpeɖeŋu",
    },
    blurb: {
      en: "JavaScript template for integrating Alchemy's NFT API with comprehensive documentation and examples.",
      fr: "Modèle JavaScript pour l'intégration de l'API NFT d'Alchemy avec documentation complète et exemples.",
      ewe: "JavaScript ƒe agbalẽnyinyi na Alchemy ƒe NFT API kple eŋlisigbe ƒe agbalẽwo kple kpɔɖeŋuwo.",
    },
    href: "https://github.com/starlabman/alchemyAPI_NFT",
    chips: ["JavaScript", "NFT", "API"],
  },
  {
    title: {
      en: "Candy Machine Responsive UI",
      fr: "Interface Utilisateur Responsive Candy Machine",
      ewe: "Candy Machine ƒe UI kpɔɖeŋu",
    },
    blurb: {
      en: "TypeScript-based responsive user interface for Solana Candy Machine NFT minting with modern design.",
      fr: "Interface utilisateur responsive basée sur TypeScript pour le minting NFT Solana Candy Machine avec un design moderne.",
      ewe: "TypeScript ƒe UI kpɔɖeŋu na Solana Candy Machine NFT minting kple eŋlisigbe ƒe agbalẽwo.",
    },
    href: "https://github.com/starlabman/Candy-Responsive-Machine-ui",
    chips: ["TypeScript", "Solana", "UI/UX"],
  },
  {
    title: {
      en: "Xamarin Firebase Cloud Firestore Plugin",
      fr: "Plugin Xamarin Firebase Cloud Firestore",
      ewe: "Xamarin Firebase Cloud Firestore Plugin",
    },
    blurb: {
      en: "Cross-platform plugin for Firebase Cloud Firestore integration in Xamarin.Forms applications.",
      fr: "Plugin multiplateforme pour l'intégration Firebase Cloud Firestore dans les applications Xamarin.Forms.",
      ewe: "Cross-platform plugin na Firebase Cloud Firestore kple Xamarin.Forms dɔwɔwɔwo.",
    },
    href: "https://github.com/starlabman/Xamarin-forms-plugincloudfirestore",
    chips: ["C#", "Xamarin", "Firebase"],
  },
  {
    title: {
      en: "Xamarin.Forms UI Collection",
      fr: "Collection d'Interfaces Utilisateur Xamarin.Forms",
      ewe: "Xamarin.Forms UI ƒe Agbalẽwo",
    },
    blurb: {
      en: "Curated collection of beautiful Xamarin.Forms UI samples and components for mobile development.",
      fr: "Collection organisée d'exemples et de composants UI Xamarin.Forms magnifiques pour le développement mobile.",
      ewe: "Xamarin.Forms UI ƒe agbalẽwo kple mɔ̃ɖaŋuwo na mobile dɔwɔwɔ.",
    },
    href: "https://github.com/starlabman/Xamarin.Forms-UI",
    chips: ["Xamarin", "Mobile", "UI Components"],
  },
  {
    title: {
      en: "Developer Resources Hub",
      fr: "Centre de Ressources pour Développeurs",
      ewe: "Nusrɔ̃lawo ƒe Gomekɔwo",
    },
    blurb: {
      en: "Collaborative repository of essential resources, tools, and guides for developers across all technologies.",
      fr: "Dépôt collaboratif de ressources essentielles, outils et guides pour les développeurs toutes technologies confondues.",
      ewe: "Dɔwɔwɔ kple nusrɔ̃lawo ƒe gomekɔwo na mɔ̃ɖaŋuwo katã.",
    },
    href: "https://github.com/starlabman/dev-resources",
    chips: ["Resources", "Documentation", "Community"],
  },
  {
    title: {
      en: "Web3.js Educational Content",
      fr: "Contenu Éducatif Web3.js",
      ewe: "Web3.js Nusrɔ̃ɖoɖo",
    },
    blurb: {
      en: "Producing bi-weekly educational videos and tutorials for Web3.js developer community.",
      fr: "Production de vidéos éducatives bihebdomadaires et de tutoriels pour la communauté des développeurs Web3.js.",
      ewe: "Web3.js nusrɔ̃ɖoɖo kple eƒe nuteƒekpɔkpɔwo na Web3.js nusrɔ̃lawo.",
    },
    href: "https://youtube.com/@starlabman",
    chips: ["Education", "Web3.js", "Video Content"],
  },
  {
    title: {
      en: "IsyChain Marketing Strategy",
      fr: "Stratégie Marketing IsyChain",
      ewe: "IsyChain Marketing ƒe Aɖaŋuɖoɖo",
    },
    blurb: {
      en: "Leading global marketing initiatives for decentralized blockchain solutions.",
      fr: "Diriger les initiatives marketing mondiales pour les solutions blockchain décentralisées.",
      ewe: "IsyChain marketing ƒe aɖaŋuɖoɖo kple decentralized blockchain dɔwɔwɔwo.",
    },
    href: "#",
    chips: ["Marketing", "Blockchain", "Strategy"],
  },
  {
    title: {
      en: "Dollar Store E-Commerce Platform",
      fr: "Plateforme E-Commerce Dollar Store",
      ewe: "Dollar Store E-Commerce Kpekpeɖeŋu",
    },
    blurb: {
      en: "Full-stack web and mobile applications for US product commercialization with inventory management.",
      fr: "Applications web et mobiles full-stack pour la commercialisation de produits américains avec gestion des stocks.",
      ewe: "Full-stack web kple mobile dɔwɔwɔwo na US product commercialization kple eƒe nuŋlɔŋlɔwo.",
    },
    href: "https://starlabman.netlify.app/",
    chips: ["E-Commerce", "Full-Stack", "Mobile"],
  },
]

export const allProjects = [
  ...projects,
  {
    title: {
      en: "Blockchain Analytics Dashboard",
      fr: "Tableau de Bord d'Analyse Blockchain",
      ewe: "Blockchain Analytics Dashboard",
    },
    blurb: {
      en: "Real-time analytics dashboard for tracking blockchain transactions and DeFi protocols performance.",
      fr: "Tableau de bord d'analyse en temps réel pour le suivi des transactions blockchain et des performances des protocoles DeFi.",
      ewe: "Blockchain Analytics Dashboard na tracking blockchain transactions kple DeFi protocols performance.",
    },
    href: "https://github.com/starlabman/blockchain-analytics",
    chips: ["React", "Web3", "Analytics"],
  },
  {
    title: {
      en: "Smart Contract Auditing Tool",
      fr: "Outil d'Audit de Contrats Intelligents",
      ewe: "Smart Contract Auditing Tool",
    },
    blurb: {
      en: "Automated security analysis tool for Ethereum smart contracts with vulnerability detection.",
      fr: "Outil d'analyse de sécurité automatisé pour les contrats intelligents Ethereum avec détection des vulnérabilités.",
      ewe: "Smart Contract Auditing Tool na Ethereum smart contracts kple vulnerability detection.",
    },
    href: "https://github.com/starlabman/blockchain-analytics",
    chips: ["Solidity", "Security", "Automation"],
  },
  {
    title: {
      en: "DeFi Yield Farming Bot",
      fr: "Bot de Yield Farming DeFi",
      ewe: "DeFi Yield Farming Bot",
    },
    blurb: {
      en: "Automated yield farming strategy bot for optimizing returns across multiple DeFi protocols.",
      fr: "Bot de stratégie de yield farming automatisé pour optimiser les rendements sur plusieurs protocoles DeFi.",
      ewe: "DeFi Yield Farming Bot na optimizing returns across multiple DeFi protocols.",
    },
    href: "https://github.com/starlabman/yield-bot",
    chips: ["Python", "DeFi", "Automation"],
  },
  {
    title: {
      en: "NFT Marketplace Template",
      fr: "Modèle de Marché NFT",
      ewe: "NFT Marketplace Template",
    },
    blurb: {
      en: "Complete NFT marketplace solution with minting, trading, and royalty management features.",
      fr: "Solution complète de marché NFT avec fonctionnalités de minting, de trading et de gestion des redevances.",
      ewe: "NFT Marketplace Template na minting, trading, and royalty management features.",
    },
    href: "https://github.com/starlabman/nft-marketplace",
    chips: ["Next.js", "NFT", "Marketplace"],
  },
  {
    title: {
      en: "Cross-Chain Bridge Interface",
      fr: "Interface de Pont Cross-Chain",
      ewe: "Cross-Chain Bridge Interface",
    },
    blurb: {
      en: "User-friendly interface for bridging assets between Ethereum, Polygon, and Binance Smart Chain.",
      fr: "Interface conviviale pour le pontage d'actifs entre Ethereum, Polygon et Binance Smart Chain.",
      ewe: "Cross-Chain Bridge Interface na bridging assets between Ethereum, Polygon, and Binance Smart Chain.",
    },
    href: "https://github.com/starlabman/cross-chain-bridge",
    chips: ["Web3", "Cross-Chain", "Bridge"],
  },
]

export const threads = [
  {
    title: {
      en: "Building Web3 Developer Communities in Africa",
      fr: "Construire des Communautés de Développeurs Web3 en Afrique",
      ewe: "Web3 Nusrɔ̃la Hamewo Tutu le Afrika",
    },
    href: "https://x.com/0xWeb3DevRel/status/1841117454279295099",
    stat: "25k views",
  },
  {
    title: {
      en: "Web3.js Ambassador Program: Latest Updates & Insights",
      fr: "Programme Ambassadeur Web3.js : Dernières Mises à Jour & Insights",
      ewe: "Web3.js Ambassador Dɔwɔwɔ: Nya Yeye Kple Sidzedzewo",
    },
    href: "https://x.com/0xWeb3DevRel/status/1953526838514303405",
    stat: "18k likes",
  },
  {
    title: {
      en: "DeFi Opportunities in Emerging Markets",
      fr: "Opportunités DeFi dans les Marchés Émergents",
      ewe: "DeFi Mɔnukpɔkpɔwo le Asia Dziŋɔwɔlawo Me",
    },
    href: "https://x.com/0xWeb3DevRel/status/1950968057146307037",
    stat: "top thread",
  },
  {
    title: {
      en: "Blockchain Security Best Practices for Developers",
      fr: "Meilleures Pratiques de Sécurité Blockchain pour les Développeurs",
      ewe: "Blockchain Dzigbɔkpɔ Dɔwɔwɔ Nyuitɔwo na Nusrɔ̃lawo",
    },
    href: "https://x.com/0xWeb3DevRel/status/1948418868658995388",
    stat: "12k views",
  },
  {
    title: {
      en: "ETHAfrique: Building Ethereum Ecosystem Across Africa",
      fr: "ETHAfrique: Construire l'Écosystème Ethereum à Travers l'Afrique",
      ewe: "ETHAfrique: Ethereum Dɔwɔwɔ Fefe le Afrika",
    },
    href: "https://x.com/0xWeb3DevRel/status/1947611741908582746",
    stat: "15k likes",
  },
  {
    title: {
      en: "Smart Contract Development: Advanced Techniques",
      fr: "Développement de Contrats Intelligents : Techniques Avancées",
      ewe: "Smart Contract Dɔwɔwɔ: Mɔ̃ɖaŋu Yeyewo",
    },
    href: "https://x.com/0xWeb3DevRel/status/1952081326544232745",
    stat: "22k views",
  },
  {
    title: {
      en: "Web3 Career Transition Guide for African Developers",
      fr: "Guide de Transition de Carrière Web3 pour les Développeurs Africains",
      ewe: "Web3 Dɔwɔƒe Gbɔgblɔ Mɔfiame na Afrika Nusrɔ̃lawo",
    },
    href: "https://x.com/0xWeb3DevRel/status/1939701646734290950",
    stat: "30k views",
  },
  {
    title: {
      en: "Blockchain Education & Community Building Strategies",
      fr: "Éducation Blockchain & Stratégies de Construction de Communauté",
      ewe: "Blockchain Nusrɔ̃ɖoɖo & Hamewo Tutu ƒe Aɖaŋuɖoɖo",
    },
    href: "https://x.com/0xWeb3DevRel/status/1930007463723708674",
    stat: "8.5k likes",
  },
  {
    title: {
      en: "IsyChain Marketing Strategy & Decentralized Solutions",
      fr: "Stratégie Marketing IsyChain & Solutions Décentralisées",
      ewe: "IsyChain Marketing ƒe Aɖaŋuɖoɖo & Decentralized Dɔwɔwɔwo",
    },
    href: "https://x.com/0xWeb3DevRel/status/1926948041363271862",
    stat: "14k views",
  },
  {
    title: {
      en: "Africa Blockchain Community: Connecting 10k+ Developers",
      fr: "Communauté Blockchain Afrique : Connecter plus de 10k Développeurs",
      ewe: "Afrika Blockchain Habɔbɔ: Nusrɔ̃lawo Kpekpe ɖe 10k+",
    },
    href: "https://x.com/0xWeb3DevRel/status/1896894917492019596",
    stat: "top thread",
  },
  {
    title: {
      en: "Web3 Investment Strategies for Emerging Markets",
      fr: "Stratégies d'Investissement Web3 pour les Marchés Émergents",
      ewe: "Web3 Gakɔkɔ Aɖaŋuɖoɖo na Asia Dziŋɔwɔlawo",
    },
    href: "https://x.com/0xWeb3DevRel/status/1895157668244754768",
    stat: "19k likes",
  },
]

export const allThreads = [
  ...threads,
  {
    title: {
      en: "The Future of Decentralized Finance in Africa",
      fr: "L'Avenir de la Finance Décentralisée en Afrique",
      ewe: "Decentralized Finance ƒe Etsɔme le Afrika",
    },
    href: "https://x.com/0xWeb3DevRel/status/1940000000000000000",
    stat: "35k views",
  },
  {
    title: {
      en: "Building Sustainable Blockchain Communities",
      fr: "Construire des Communautés Blockchain Durables",
      ewe: "Blockchain Hamewo Tutu Kple Nɔnɔmewo",
    },
    href: "https://x.com/0xWeb3DevRel/status/1941000000000000000",
    stat: "28k likes",
  },
  {
    title: {
      en: "Web3 Security: Protecting Your Digital Assets",
      fr: "Sécurité Web3 : Protéger Vos Actifs Numériques",
      ewe: "Web3 Dzigbɔkpɔ: Digital Nuwo Kpekpeɖeŋu",
    },
    href: "https://x.com/0xWeb3DevRel/status/1942000000000000000",
    stat: "20k views",
  },
  {
    title: {
      en: "Smart Contract Development Best Practices 2024",
      fr: "Meilleures Pratiques de Développement de Contrats Intelligents 2024",
      ewe: "Smart Contract Dɔwɔwɔ Dzigbɔkpɔ Dɔwɔwɔ Nyuitɔwo 2024",
    },
    href: "https://x.com/0xWeb3DevRel/status/1943000000000000000",
    stat: "15k likes",
  },
  {
    title: {
      en: "Tokenomics Design for Sustainable Projects",
      fr: "Conception de Tokenomics pour des Projets Durables",
      ewe: "Tokenomics Dɔwɔwɔ na Nɔnɔmewo",
    },
    href: "https://x.com/0xWeb3DevRel/status/1944000000000000000",
    stat: "18k views",
  },
  {
    title: {
      en: "Layer 2 Solutions: Scaling Ethereum for Mass Adoption",
      fr: "Solutions Layer 2 : Scaler Ethereum pour une Adoption Massive",
      ewe: "Layer 2 Dɔwɔwɔwo: Ethereum Gbalã Ðe Amewo Katã Gbɔ",
    },
    href: "https://x.com/0xWeb3DevRel/status/1945000000000000000",
    stat: "25k views",
  },
]

export const posts = [
  {
    title: {
      en: "Lead of Web3.js Ambassadors - Building Developer Communities",
      fr: "Lead des Ambassadeurs Web3.js - Construire des Communautés de Développeurs",
      ewe: "Web3.js Ambassador Kplɔla - Nusrɔ̃la Hamewo Tutu",
    },
    href: "https://www.linkedin.com/posts/starlabman/",
    description: {
      en: "Leading Web3.js ambassador program, producing bi-weekly educational videos and recruiting new ambassadors",
      fr: "Diriger le programme ambassadeur Web3.js, produire des vidéos éducatives bihebdomadaires et recruter de nouveaux ambassadeurs",
      ewe: "Web3.js ambassador dɔwɔwɔ kplɔla, videos kple tutorials wɔwɔ na nusrɔ̃la yeyewo",
    },
    engagement: "120+ likes",
  },
  {
    title: {
      en: "Chief Marketing Officer at IsyChain - Blockchain Solutions",
      fr: "Directeur Marketing chez IsyChain - Solutions Blockchain",
      ewe: "IsyChain Marketing Dɔwɔla Kplɔla - Blockchain Dɔwɔwɔwo",
    },
    href: "https://www.linkedin.com/posts/starlabman/",
    description: {
      en: "Defining global marketing strategy and leading teams for decentralized industry solutions",
      fr: "Définir la stratégie marketing mondiale et diriger des équipes pour les solutions industrielles décentralisées",
      ewe: "Global marketing strategy ɖoɖo kple kplɔlawo na decentralized industry solutions",
    },
    engagement: "85+ likes",
  },
  {
    title: {
      en: "Blockchain Correspondent",
      fr: "Correspondant Blockchain",
      ewe: "Blockchain Nyaŋlɔla",
    },
    href: "https://www.linkedin.com/posts/starlabman/",
    description: {
      en: "Writing articles and conducting interviews with crypto industry experts",
      fr: "Écrire des articles et mener des entretiens avec des experts de l'industrie crypto",
      ewe: "Nyatakakawo ŋɔŋlɔ kple biabiawo wɔwɔ kple crypto industry experts",
    },
    engagement: "95+ likes",
  },
  {
    title: {
      en: "Binance Campus Ambassador Lead - Blockchain Education",
      fr: "Lead Ambassadeur Campus Binance - Éducation Blockchain",
      ewe: "Binance Campus Ambassador Kplɔla - Blockchain Nusrɔ̃ɖoɖo",
    },
    href: "https://www.linkedin.com/posts/starlabman/",
    description: {
      en: "Increasing blockchain adoption through education and awareness in Togo",
      fr: "Augmenter l'adoption de la blockchain par l'éducation et la sensibilisation au Togo",
      ewe: "Blockchain ƒe gbɔgblɔ kple nusrɔ̃ɖoɖo le Togo",
    },
    engagement: "150+ likes",
  },
]

export const allPosts = [
  ...posts,
  {
    title: {
      en: "Web3 Developer Roadmap 2024 - Complete Guide",
      fr: "Feuille de Route Développeur Web3 2024 - Guide Complet",
      ewe: "Web3 Nusrɔ̃la Mɔzɔzɔ 2024 - Mɔfiame Blibo",
    },
    href: "https://www.linkedin.com/posts/starlabman/web3-roadmap-2024",
    description: {
      en: "Comprehensive roadmap for developers transitioning to Web3 with practical steps and resources",
      fr: "Feuille de route complète pour les développeurs en transition vers le Web3 avec des étapes pratiques et des ressources",
      ewe: "Nusrɔ̃lawo ƒe Web3 mɔzɔzɔ kple eƒe nuteƒekpɔkpɔwo",
    },
    engagement: "200+ likes",
  },
  {
    title: {
      en: "Building Africa's Largest Blockchain Community",
      fr: "Construire la Plus Grande Communauté Blockchain d'Afrique",
      ewe: "Afrika Blockchain Hamewo Tutu Gãtɔ",
    },
    href: "https://www.linkedin.com/posts/starlabman/africa-blockchain-community",
    description: {
      en: "Journey of building a 10,000+ member blockchain community across African countries",
      fr: "Parcours de construction d'une communauté blockchain de plus de 10 000 membres à travers les pays africains",
      ewe: "Afrika Blockchain Habɔbɔ: Nusrɔ̃lawo Kpekpe ɖe 10k+",
    },
    engagement: "180+ likes",
  },
  {
    title: {
      en: "DeFi Investment Strategies for Emerging Markets",
      fr: "Stratégies d'Investissement DeFi pour les Marchés Émergents",
      ewe: "DeFi Gakɔkɔ Aɖaŋuɖoɖo na Asia Dziŋɔwɔlawo",
    },
    href: "https://www.linkedin.com/posts/starlabman/defi-investment-strategies",
    description: {
      en: "Risk management and investment approaches for DeFi protocols in developing economies",
      fr: "Approches de gestion des risques et d'investissement pour les protocoles DeFi dans les économies en développement",
      ewe: "Afɔku dzikpɔkpɔ kple gakɔkɔ ƒe aɖaŋuɖoɖowo na DeFi protocols le developing economies",
    },
    engagement: "160+ likes",
  },
  {
    title: {
      en: "Smart Contract Security: Lessons from Major Hacks",
      fr: "Sécurité des Contrats Intelligents : Leçons des Hacks Majeurs",
      ewe: "Smart Contract Dzigbɔkpɔ: Hacks Gãtɔwo Gbɔgblɔ",
    },
    href: "https://www.linkedin.com/posts/starlabman/smart-contract-security",
    description: {
      en: "Analysis of major DeFi hacks and how to prevent common smart contract vulnerabilities",
      fr: "Analyse des hacks DeFi majeurs et comment prévenir les vulnérabilités courantes des contrats intelligents",
      ewe: "DeFi hacks gãtɔwo kple Smart Contract vulnerabilities gbɔgblɔ",
    },
    engagement: "140+ likes",
  },
  {
    title: {
      en: "The Rise of African Blockchain Startups",
      fr: "L'Essor des Startups Blockchain Africaines",
      ewe: "Afrika Blockchain Startups Dziɖuɖu",
    },
    href: "https://www.linkedin.com/posts/starlabman/african-blockchain-startups",
    description: {
      en: "Spotlight on innovative blockchain startups emerging from the African continent",
      fr: "Pleins feux sur les startups blockchain innovantes émergentes du continent africain",
      ewe: "Afrika Blockchain Startups ƒe kpɔɖeŋuwo",
    },
    engagement: "220+ likes",
  },
]

export const achievements = [
  {
    title: {
      en: "Lead Web3.js Ambassador",
      fr: "Lead Ambassadeur Web3.js",
      ewe: "Web3.js Ambassador Kplɔla",
    },
    description: {
      en: "Leading ambassador program, creating educational content and recruiting developers",
      fr: "Diriger le programme ambassadeur, créer du contenu éducatif et recruter des développeurs",
      ewe: "Ambassador dɔwɔwɔ kplɔla, nusrɔ̃ɖoɖo wɔwɔ kple nusrɔ̃lawo gbɔgblɔ",
    },
    year: "2024-Present",
    company: "Web3.js",
  },
  {
    title: {
      en: "Chief Marketing Officer",
      fr: "Directeur Marketing",
      ewe: "Marketing Dɔwɔla Kplɔla",
    },
    description: {
      en: "Defining global marketing strategy for blockchain solutions company",
      fr: "Définir la stratégie marketing mondiale pour une entreprise de solutions blockchain",
      ewe: "Global marketing strategy ɖoɖo na blockchain dɔwɔwɔwo",
    },
    year: "2023-Present",
    company: "IsyChain",
  },
  {
    title: {
      en: "Founder - Africa Blockchain Community",
      fr: "Fondateur - Communauté Blockchain Afrique",
      ewe: "Afrika Blockchain Habɔbɔ ƒe Gɔmeɖoanyila",
    },
    description: {
      en: "Building the largest blockchain community across Africa, connecting developers and entrepreneurs",
      fr: "Construire la plus grande communauté blockchain d'Afrique, connecter les développeurs et les entrepreneurs",
      ewe: "Blockchain habɔbɔ gãtɔ le Afrika, nusrɔ̃lawo kple dɔwɔlawo kpekpe ɖe wo nɔewo gbɔ",
    },
    year: "2023-Present",
    company: "Africa Blockchain Community",
  },
  {
    title: {
      en: "Coverner - ETHAfrique",
      fr: "Gouverneur - ETHAfrique",
      ewe: "ETHAfrique Kplɔla",
    },
    description: {
      en: "Leading Ethereum ecosystem development and adoption initiatives across African markets",
      fr: "Diriger le développement de l'écosystème Ethereum et les initiatives d'adoption sur les marchés africains",
      ewe: "Ethereum dɔwɔwɔ kple eƒe gbɔgblɔ le Afrika dziŋɔwɔlawo me",
    },
    year: "2024-Present",
    company: "ETHAfrique",
  },
  {
    title: {
      en: "Blockchain Correspondent",
      fr: "Correspondant Blockchain",
      ewe: "Blockchain Nyaŋlɔla",
    },
    description: {
      en: "Writing crypto analysis and interviewing industry experts",
      fr: "Écrire des analyses crypto et interviewer des experts de l'industrie",
      ewe: "Crypto analysis ŋɔŋlɔ kple biabiawo wɔwɔ kple industry experts",
    },
    year: "2024-Present",
    company: "WallCrypt",
  },
  {
    title: {
      en: "Binance Campus Lead",
      fr: "Lead Campus Binance",
      ewe: "Binance Campus Kplɔla",
    },
    description: {
      en: "Leading blockchain education initiatives across Togo",
      fr: "Diriger les initiatives d'éducation blockchain à travers le Togo",
      ewe: "Blockchain nusrɔ̃ɖoɖo kplɔla le Togo",
    },
    year: "2023-Present",
    company: "Binance",
  },
  {
    title: {
      en: "Software Engineering Degree",
      fr: "Diplôme en Génie Logiciel",
      ewe: "Software Engineering Nusrɔ̃ɖoɖo",
    },
    description: {
      en: "Professional license in Software Engineering",
      fr: "Licence professionnelle en Génie Logiciel",
      ewe: "Software Engineering ƒe numedzodzro",
    },
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
