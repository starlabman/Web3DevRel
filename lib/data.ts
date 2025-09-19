// Data structures for AGBETSIASSI KODJO LABORE portfolio

import type { Language } from "./translations"

// Translation helper function
export const getTranslatedContent = (content: string | Record<string, string> | undefined, language: Language, fallback = "fr") => {
  if (typeof content === "string") return content
  if (!content) return ""
  
  const result = content?.[language] || content?.[fallback] || content?.["en"] || ""
  return typeof result === "string" ? result : ""
}

export const quickLinks = [
  { label: "X / Twitter", tag: "threads impactants", href: "https://twitter.com/0xWeb3DevRel", kind: "twitter" },
  { label: "LinkedIn", tag: "posts & insights", href: "https://www.linkedin.com/in/starlabman/", kind: "linkedin" },
  { label: "GitHub", tag: "repos", href: "https://github.com/starlabman", kind: "github" },
  { label: "Farcaster", tag: "projects", href: "https://farcaster.com/@0xWeb3DevRel", kind: "Fracaster" },
  { label: "YouTube", tag: "TECHLABS ACADEMY", href: "https://youtube.com/@starlabman", kind: "youtube" },
  { label: "Email", tag: "let's talk", href: "mailto:akodjolabore@gmail.com", kind: "mail" },
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
    href: "https://calendly.com/starlabman/30min",
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
    duration: "4 weeks",
    price: "$150/month",
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
    href: "https://calendly.com/starlabman/30min",
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
    price: "$200/month",
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
    href: "https://calendly.com/starlabman/30min",
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
    price: "$500/month",
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
    href: "https://calendly.com/starlabman/30min",
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
    duration: "3 months",
    price: "$300/month",
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
    href: "https://calendly.com/starlabman/30min",
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
    price: "$1500/person",
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
    href: "https://calendly.com/starlabman/30min",
    popular: false,
    category: "corporate",
  },
]

export const projects = [
  {
    title: {
      en: "BSC MoMo Cash",
      fr: "BSC MoMo Cash",
      ewe: "BSC MoMo Cash",
    },
    blurb: {
      en: "Mobile money cash management built on Binance Smart Chain (BSC).",
      fr: "Gestion de cash mobile money construite sur Binance Smart Chain (BSC).",
      ewe: "Mobile money cash dzikpɔkpɔ wɔwɔ le Binance Smart Chain (BSC) me.",
    },
    href: "https://github.com/starlabman/bsc-momo-cash",
    chips: ["BSC", "Web3", "Open Source"],
  },
  {
    title: {
      en: "EcoPatch",
      fr: "EcoPatch",
      ewe: "EcoPatch",
    },
    blurb: {
      en: "Sustainability-focused project with environmental impact tracking.",
      fr: "Projet axé sur la durabilité avec suivi de l'impact environnemental.",
      ewe: "Sustainability dzi la, environment ɖoɖo ƒe kpɔɖeŋu.",
    },
    href: "https://github.com/starlabman/ecopatch",
    chips: ["Sustainability", "Web", "Open Source"],
  },
  {
    title: {
      en: "DevPlan.ai",
      fr: "DevPlan.ai",
      ewe: "DevPlan.ai",
    },
    blurb: {
      en: "AI-powered developer planning and productivity toolkit.",
      fr: "Boîte à outils de planification et productivité pour développeurs, propulsée par l'IA.",
      ewe: "AI kple developer planning kple dɔwɔƒe dzidzɔkpɔkpɔ ƒe agbalẽwo.",
    },
    href: "https://github.com/starlabman/DevPlan.ai",
    chips: ["AI", "Developer Tools", "Open Source"],
  },
  {
    title: {
      en: "Chaapa Ride - Landing Page",
      fr: "Chaapa Ride - Page d'atterrissage",
      ewe: "Chaapa Ride - Landing Page",
    },
    blurb: {
      en: "Landing page for Chaapa Ride mobility platform.",
      fr: "Page d'atterrissage pour la plateforme de mobilité Chaapa Ride.",
      ewe: "Landing page na Chaapa Ride mobility platform.",
    },
    href: "https://github.com/chaapa-ride/landingpage",
    chips: ["Landing Page", "Web", "Open Source"],
  },
  {
    title: {
      en: "Korea Blockchain Gaming Map - Shareable Infographic",
      fr: "Korea Blockchain Gaming Map - Infographie Partageable",
      ewe: "Korea Blockchain Gaming Map - Infographic",
    },
    blurb: {
      en: "Shareable infographic mapping Korea's blockchain gaming ecosystem.",
      fr: "Infographie partageable cartographiant l'écosystème du gaming blockchain en Corée.",
      ewe: "Infographic si wotsɔna to Korea blockchain gaming ecosystem ŋgɔ.",
    },
    href: "https://github.com/starlabman/Korea-Blockchain-Gaming-Map-Shareable-Infographic",
    chips: ["Infographic", "Blockchain Gaming", "Open Source"],
  },
  {
    title: {
      en: "Africa Blockchain Community",
      fr: "Africa Blockchain Community",
      ewe: "Africa Blockchain Community",
    },
    blurb: {
      en: "Community initiatives and resources for blockchain across Africa.",
      fr: "Initiatives communautaires et ressources pour la blockchain à travers l'Afrique.",
      ewe: "Habɔbɔ dɔwɔwɔwo kple gomekɔwo na blockchain le Afrika me.",
    },
    href: "https://github.com/starlabman/AfricaBlockchainCommunity",
    chips: ["Community", "Blockchain", "Open Source"],
  },
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
      en: "Twitter Thread: Web3 Developer Communities in Africa",
      fr: "Thread Twitter : Communautés de Développeurs Web3 en Afrique",
      ewe: "Twitter Nya: Web3 Nusrɔ̃la Habɔbɔwo ƒe Nya le Afrika",
    },
    href: "https://x.com/0xWeb3DevRel/status/1841117454279295099",
    stat: "N/A",
  },
  {
    title: {
      en: "Twitter Thread: ETHAfrique Ecosystem Building",
      fr: "Thread Twitter : Construction de l'Écosystème ETHAfrique",
      ewe: "Twitter Nya: ETHAfrique Dɔwɔwɔ Fefe ƒe Nya",
    },
    href: "https://x.com/0xWeb3DevRel/status/1947611741908582746",
    stat: "N/A",
  },
  {
    title: {
      en: "Twitter Thread: Web3 Education & Community Building",
      fr: "Thread Twitter : Éducation Web3 & Construction de Communauté",
      ewe: "Twitter Nya: Web3 Nusrɔ̃ɖoɖo & Hamewo Tutu ƒe Nya",
    },
    href: "https://x.com/0xWeb3DevRel/status/1910008213640016069",
    stat: "N/A",
  },
  {
    title: {
      en: "Twitter Thread: Blockchain Innovation in Africa",
      fr: "Thread Twitter : Innovation Blockchain en Afrique",
      ewe: "Twitter Nya: Blockchain Yeye le Afrika",
    },
    href: "https://x.com/0xWeb3DevRel/status/1880238960980709520",
    stat: "N/A",
  },
  {
    title: {
      en: "Twitter Thread: ETHSafari 2025 - Africa's Largest ETH Event",
      fr: "Thread Twitter : ETHSafari 2025 - Le Plus Grand Événement ETH d'Afrique",
      ewe: "Twitter Nya: ETHSafari 2025 - Afrika ETH Nuƒoƒo Gãtɔ",
    },
    href: "https://x.com/ETHSafari/status/1963874745176248710",
    stat: "N/A",
  },
  {
    title: {
      en: "Twitter Thread: ETHAfrique 2025 Speaker Announcement",
      fr: "Thread Twitter : Annonce Speaker ETHAfrique 2025",
      ewe: "Twitter Nya: ETHAfrique 2025 Speaker ƒe Nya",
    },
    href: "https://x.com/0xWeb3DevRel/status/1924974335346737321",
    stat: "N/A",
  },
  {
    title: {
      en: "Twitter Thread: Blockchain Education & Training",
      fr: "Thread Twitter : Éducation & Formation Blockchain",
      ewe: "Twitter Nya: Blockchain Nusrɔ̃ɖoɖo & Nusrɔ̃ɖoɖo",
    },
    href: "https://x.com/0xWeb3DevRel/status/1950949216374641087",
    stat: "N/A",
  },
  {
    title: {
      en: "Twitter Thread: Web3 Community Events & Meetups",
      fr: "Thread Twitter : Événements & Meetups Communauté Web3",
      ewe: "Twitter Nya: Web3 Habɔbɔ Nuƒoƒo & Meetups",
    },
    href: "https://x.com/0xWeb3DevRel/status/1930007463723708674",
    stat: "N/A",
  },
  {
    title: {
      en: "Twitter Thread: Blockchain Events & Networking",
      fr: "Thread Twitter : Événements Blockchain & Networking",
      ewe: "Twitter Nya: Blockchain Nuƒoƒo & Kpekpeɖeŋu",
    },
    href: "https://x.com/0xWeb3DevRel/status/1926948041363271862",
    stat: "N/A",
  },
  {
    title: {
      en: "Twitter Thread: Web3 Education & Learning Path",
      fr: "Thread Twitter : Éducation Web3 & Parcours d'Apprentissage",
      ewe: "Twitter Nya: Web3 Nusrɔ̃ɖoɖo & Nusrɔ̃ɖoɖo Mɔzɔzɔ",
    },
    href: "https://x.com/0xWeb3DevRel/status/1907107566120800357",
    stat: "N/A",
  },
  {
    title: {
      en: "Twitter Thread: Africa Blockchain Community Growth",
      fr: "Thread Twitter : Croissance de la Communauté Blockchain Africaine",
      ewe: "Twitter Nya: Afrika Blockchain Habɔbɔ Dziɖuɖu ƒe Nya",
    },
    href: "https://x.com/0xWeb3DevRel/status/1896894917492019596",
    stat: "N/A",
  },
  {
    title: {
      en: "Twitter Thread: Web3 Investment & Opportunities",
      fr: "Thread Twitter : Investissement Web3 & Opportunités",
      ewe: "Twitter Nya: Web3 Gakɔkɔ & Mɔnukpɔkpɔwo",
    },
    href: "https://x.com/0xWeb3DevRel/status/1895157668244754768",
    stat: "N/A",
  },
  {
    title: {
      en: "Twitter Thread: Blockchain Development & Innovation",
      fr: "Thread Twitter : Développement & Innovation Blockchain",
      ewe: "Twitter Nya: Blockchain Dɔwɔwɔ & Yeye",
    },
    href: "https://x.com/0xWeb3DevRel/status/1887898662363160959",
    stat: "N/A",
  },
  {
    title: {
      en: "Twitter Thread: Web3 Community Building Strategies",
      fr: "Thread Twitter : Stratégies de Construction de Communauté Web3",
      ewe: "Twitter Nya: Web3 Habɔbɔ Tutu ƒe Nya",
    },
    href: "https://x.com/0xWeb3DevRel/status/1870902690714152964",
    stat: "N/A",
  },
]

export const posts = [
  {
    title: {
      en: "ETHAccra - Ethereum Web3 Africa Conference",
      fr: "ETHAccra - Conférence Ethereum Web3 Afrique",
      ewe: "ETHAccra - Ethereum Web3 Afrika Nuƒoƒo",
    },
    href: "https://www.linkedin.com/posts/starlabman_ethaccra-ethereum-web3africa-activity-7371879096919818240-A3Jq",
    description: {
      en: "Participating in ETHAccra, one of Africa's premier Ethereum and Web3 conferences",
      fr: "Participation à ETHAccra, l'une des principales conférences Ethereum et Web3 d'Afrique",
      ewe: "ETHAccra me nuƒoƒo, Afrika Ethereum kple Web3 nuƒoƒo gãtɔwo dometɔ",
    },
    engagement: "150+ likes",
  },
  {
    title: {
      en: "3 People, 3 Countries - Web3 Global Impact",
      fr: "3 Personnes, 3 Pays - Impact Mondial Web3",
      ewe: "Ame 3, Dukɔ 3 - Web3 Global Impact",
    },
    href: "https://www.linkedin.com/posts/starlabman_3-people-3-countries-activity-7315744661485031425-gN1C",
    description: {
      en: "Showcasing the global reach and impact of Web3 education across different countries",
      fr: "Mise en avant de la portée mondiale et de l'impact de l'éducation Web3 à travers différents pays",
      ewe: "Web3 nusrɔ̃ɖoɖo ƒe global reach kple impact le dukɔ yeyewo me",
    },
    engagement: "120+ likes",
  },
  {
    title: {
      en: "Day 1 to Day 18 - Web3 Learning Journey",
      fr: "Jour 1 à Jour 18 - Parcours d'Apprentissage Web3",
      ewe: "Ŋkeke 1 ɖe Ŋkeke 18 - Web3 Nusrɔ̃ɖoɖo Mɔzɔzɔ",
    },
    href: "https://www.linkedin.com/posts/starlabman_day1-day18-web3-activity-7300546249521324032-W3dD",
    description: {
      en: "Documenting the daily progress and learnings in Web3 development and education",
      fr: "Documentation des progrès quotidiens et des apprentissages en développement et éducation Web3",
      ewe: "Web3 dɔwɔwɔ kple nusrɔ̃ɖoɖo me ŋkeke ŋkeke dziɖuɖu kple nusrɔ̃lawo",
    },
    engagement: "180+ likes",
  },
  {
    title: {
      en: "Web3 Community Building & Lifelong Learning",
      fr: "Construction de Communauté Web3 & Apprentissage Continu",
      ewe: "Web3 Habɔbɔ Tutu & Nusrɔ̃ɖoɖo ƒe Mɔzɔzɔ",
    },
    href: "https://www.linkedin.com/posts/starlabman_web3-communitybuilding-lifelonglearning-activity-7277007166438334464-iAg4",
    description: {
      en: "Sharing insights on building strong Web3 communities and continuous learning",
      fr: "Partage d'insights sur la construction de communautés Web3 solides et l'apprentissage continu",
      ewe: "Web3 habɔbɔ gãtɔ tutu kple nusrɔ̃ɖoɖo ƒe mɔzɔzɔ gbɔgblɔ",
    },
    engagement: "200+ likes",
  },
  {
    title: {
      en: "Anniversary - Gratitude & Support",
      fr: "Anniversaire - Gratitude & Soutien",
      ewe: "Dzidzɔkuku - Akpe & Kpekpeɖeŋu",
    },
    href: "https://www.linkedin.com/posts/starlabman_anniversaire-gratitude-soutien-activity-7266778840872468480-T_4V",
    description: {
      en: "Celebrating milestones and expressing gratitude for community support",
      fr: "Célébration des étapes importantes et expression de gratitude pour le soutien communautaire",
      ewe: "Dzidzɔkuku ƒe kpɔɖeŋuwo kple akpe gbɔgblɔ na habɔbɔ ƒe kpekpeɖeŋu",
    },
    engagement: "160+ likes",
  },
  {
    title: {
      en: "Great News - Major Achievement Unlocked",
      fr: "Excellente Nouvelle - Réussite Majeure Débloquée",
      ewe: "Nya Yeye - Dzidzedzekpɔkpɔ Gãtɔ Wɔwɔ",
    },
    href: "https://www.linkedin.com/posts/starlabman_grande-nouvelle-je-viens-de-r%C3%A9aliser-activity-7230206683111690240-NdLL",
    description: {
      en: "Announcing a significant milestone in the Web3 and blockchain journey",
      fr: "Annonce d'une étape importante dans le parcours Web3 et blockchain",
      ewe: "Web3 kple blockchain mɔzɔzɔ me dzidzedzekpɔkpɔ gãtɔ ƒe nya",
    },
    engagement: "140+ likes",
  },
  {
    title: {
      en: "Binance Meetup Lomé - Blockchain Education",
      fr: "Binance Meetup Lomé - Éducation Blockchain",
      ewe: "Binance Meetup Lomé - Blockchain Nusrɔ̃ɖoɖo",
    },
    href: "https://www.linkedin.com/posts/starlabman_binancemeetuplome-binance-meetup-activity-7209154497812606976-2eVJ",
    description: {
      en: "Organizing and leading Binance meetup in Lomé for blockchain education",
      fr: "Organisation et direction du meetup Binance à Lomé pour l'éducation blockchain",
      ewe: "Binance meetup ƒe wɔwɔ kple kplɔla le Lomé na blockchain nusrɔ̃ɖoɖo",
    },
    engagement: "190+ likes",
  },
]

export const allPosts = [
  ...posts,
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
  // Conférences (4 images)
  {
    id: 1,
    title: {
      fr: "Code Africa 2.0 - Speaker",
      en: "Code Africa 2.0 - Speaker",
      ewe: "Code Africa 2.0 - Nuƒoƒola",
    },
    description: {
      fr: "Présentation à Code Africa 2.0 - Pioneering the Future of Developers",
      en: "Speaking at Code Africa 2.0 - Pioneering the Future of Developers",
      ewe: "Code Africa 2.0 nuƒoƒo - Nusrɔ̃lawo ƒe Etsɔme",
    },
    category: {
      fr: "Conférence",
      en: "Conference",
      ewe: "Nuƒoƒo",
    },
    imageUrl: "/onedev2025.jpg",
    link: "https://x.com/_one_dev/status/1915363135512301920",
    date: "2025",
  },
  {
    id: 2,
    title: {
      fr: "Web3Lagos Conference 4.0",
      en: "Web3Lagos Conference 4.0",
      ewe: "Web3Lagos Nuƒoƒo 4.0",
    },
    description: {
      fr: "Build in Public: How African Developers Can Win in Web3",
      en: "Build in Public: How African Developers Can Win in Web3",
      ewe: "Wɔwɔ le Amewo Gbɔ: Alesi Afrika Nusrɔ̃lawo Ateƒe le Web3 Me",
    },
    category: {
      fr: "Conférence",
      en: "Conference",
      ewe: "Nuƒoƒo",
    },
    imageUrl: "/web3lagosconference2025.jpg",
    link: "https://x.com/Web3LagosCon/status/1953158740040991185",
    date: "2024",
  },
  {
    id: 3,
    title: {
      fr: "ETHSafari 2025 - Speaker",
      en: "ETHSafari 2025 - Speaker",
      ewe: "ETHSafari 2025 - Nuƒoƒola",
    },
    description: {
      fr: "Africa's Largest ETH Event - DevRel & Ecosystem Builder",
      en: "Africa's Largest ETH Event - DevRel & Ecosystem Builder",
      ewe: "Afrika ETH Nuƒoƒo Gãtɔ - DevRel & Nutome Wɔwɔla",
    },
    category: {
      fr: "Conférence",
      en: "Conference",
      ewe: "Nuƒoƒo",
    },
    imageUrl: "/ethsafari2025.jpg",
    link: "https://x.com/ETHSafari/status/1963874745176248710",
    date: "2025",
  },
  {
    id: 4,
    title: {
      fr: "ETHAFrique 2025 - Speaker",
      en: "ETHAFrique 2025 - Speaker",
      ewe: "ETHAFrique 2025 - Nuƒoƒola",
    },
    description: {
      fr: "Africa's Largest ETH Event - DevRel & Ecosystem Builder",
      en: "Africa's Largest ETH Event - DevRel & Ecosystem Builder",
      ewe: "Afrika ETH Nuƒoƒo Gãtɔ - DevRel & Nutome Wɔwɔla",
    },
    category: {
      fr: "Conférence",
      en: "Conference",
      ewe: "Nuƒoƒo",
    },
    imageUrl: "/ethafrique2025.jpg",
    link: "https://x.com/0xWeb3DevRel/status/1924974335346737321",
    date: "2025",
  },
  // Éducation (4 images)
  {
    id: 5,
    title: {
      fr: "Formation Blockchain - Éducation",
      en: "Blockchain Education Training",
      ewe: "Blockchain Nusrɔ̃ɖoɖo",
    },
    description: {
      fr: "Formation intensive en développement blockchain pour les développeurs africains",
      en: "Leading intensive blockchain development training for African developers",
      ewe: "Blockchain nusrɔ̃ɖoɖo sesẽ na Afrika nusrɔ̃lawo",
    },
    category: {
      fr: "Éducation",
      en: "Education",
      ewe: "Nusrɔ̃ɖoɖo",
    },
    imageUrl: "/trezoracademylome2025.jpg",
    link: "https://x.com/0xWeb3DevRel/status/1950949216374641087",
    date: "2024",
  },
  {
    id: 6,
    title: {
      fr: "Atelier Web3 - Formation",
      en: "Web3 Workshop Training",
      ewe: "Web3 Dɔwɔƒe Nusrɔ̃ɖoɖo",
    },
    description: {
      fr: "Atelier pratique de développement Web3 pour les étudiants",
      en: "Hands-on Web3 development workshop for students",
      ewe: "Web3 dɔwɔƒe nusrɔ̃ɖoɖo na sukulawo",
    },
    category: {
      fr: "Éducation",
      en: "Education",
      ewe: "Nusrɔ̃ɖoɖo",
    },
    imageUrl: "/daytonatourlome2025.jpg",
    link: "https://x.com/0xWeb3DevRel/status/1907107566120800357",
    date: "2024",
  },
  {
    id: 7,
    title: {
      fr: "Communauté Blockchain Afrique",
      en: "Africa Blockchain Community",
      ewe: "Afrika Blockchain Habɔbɔ",
    },
    description: {
      fr: "Construction de la plus grande communauté blockchain d'Afrique",
      en: "Building Africa's largest blockchain community",
      ewe: "Afrika blockchain habɔbɔ gãtɔ wɔwɔ",
    },
    category: {
      fr: "Éducation",
      en: "Education",
      ewe: "Nusrɔ̃ɖoɖo",
    },
    imageUrl: "/10yearseth.jpg",
    link: "https://x.com/0xWeb3DevRel/status/1896894917492019596",
    date: "2025",
  },
  {
    id: 8,
    title: {
      fr: "Communauté Blockchain Afrique",
      en: "Africa Blockchain Community",
      ewe: "Afrika Blockchain Habɔbɔ",
    },
    description: {
      fr: "Construction de la plus grande communauté blockchain d'Afrique",
      en: "Building Africa's largest blockchain community",
      ewe: "Afrika blockchain habɔbɔ gãtɔ wɔwɔ",
    },
    category: {
      fr: "Éducation",
      en: "Education",
      ewe: "Nusrɔ̃ɖoɖo",
    },
    imageUrl: "/emmissionradio.jpg",
    link: "https://x.com/0xWeb3DevRel/status/1950949216374641087",
    date: "2025",
  },
  // Événements (4 images)
  {
    id: 9,
    title: {
      fr: "Événement Blockchain - Networking",
      en: "Blockchain Event Networking",
      ewe: "Blockchain Nuƒoƒo Kpekpeɖeŋu",
    },
    description: {
      fr: "Événement de networking avec la communauté blockchain",
      en: "Networking event with blockchain community",
      ewe: "Blockchain habɔbɔ kple kpekpeɖeŋu nuƒoƒo",
    },
    category: {
      fr: "Événement",
      en: "Event",
      ewe: "Nuƒoƒo",
    },
    imageUrl: "/bitcoinpizzapartylome2025.jpg",
    link: "https://x.com/0xWeb3DevRel/status/1926948041363271862",
    date: "2025",
  },
  {
    id: 10,
    title: {
      fr: "Sommet Innovation Blockchain",
      en: "Blockchain Innovation Summit",
      ewe: "Blockchain Yeye Nuƒoƒo Gã",
    },
    description: {
      fr: "Keynote au sommet d'innovation blockchain",
      en: "Keynote at blockchain innovation summit",
      ewe: "Blockchain yeye nuƒoƒo gã me nuƒoƒo gã",
    },
    category: {
      fr: "Événement",
      en: "Event",
      ewe: "Nuƒoƒo",
    },
    imageUrl: "/trustwalletmeetuplome2025.jpg",
    link: "https://x.com/0xWeb3DevRel/status/1930007463723708674",
    date: "2025",
  },
  {
    id: 11,
    title: {
      fr: "Conférence Web3 - Présentation",
      en: "Web3 Conference Presentation",
      ewe: "Web3 Nuƒoƒo - Nuƒoƒo",
    },
    description: {
      fr: "Présentation sur l'adoption Web3 dans les marchés émergents",
      en: "Presentation on Web3 adoption in emerging markets",
      ewe: "Web3 ɖoɖo nuƒoƒo le nuƒoƒo yeyewo me",
    },
    category: {
      fr: "Événement",
      en: "Event",
      ewe: "Nuƒoƒo",
    },
    imageUrl: "/ethafriquetourcalavi2025.jpg",
    link: "https://x.com/0xWeb3DevRel/status/1950463537949618685",
    date: "2025",
  },
  {
    id: 12,
    title: {
      fr: "Conférence Web3 - Présentation",
      en: "Web3 Conference Presentation",
      ewe: "Web3 Nuƒoƒo - Nuƒoƒo",
    },
    description: {
      fr: "Présentation sur l'adoption Web3 dans les marchés émergents",
      en: "Presentation on Web3 adoption in emerging markets",
      ewe: "Web3 ɖoɖo nuƒoƒo le nuƒoƒo yeyewo me",
    },
    category: {
      fr: "Événement",
      en: "Event",
      ewe: "Nuƒoƒo",
    },
    imageUrl: "/ethafriqueconf.jpg",
    link: "https://x.com/0xWeb3DevRel/status/1950463537949618685",
    date: "2024",
  },
]

export const importantArticles = [
  {
    title: {
      en: "Creating Your First Unique Digital Token: A Beginner's Guide to NFTs",
      fr: "Créer Votre Premier Jeton Numérique Unique : Un Guide pour Débutants sur les NFTs",
      ewe: "Digital Token Yeyewo Wɔwɔ: NFT Gɔmeɖeɖe na Ame Yeyewo",
    },
    description: {
      en: "A beginner-friendly guide to understanding and creating Non-Fungible Tokens (NFTs).",
      fr: "Un guide convivial pour les débutants afin de comprendre et créer des Tokens Non Fongibles (NFTs).",
      ewe: "Mɔfiame bɔbɔe na ame yeyewo be woase gɔme kple woawɔ NFTs.",
    },
    href: "https://starlabman.hashnode.dev/creating-your-first-unique-digital-token-a-beginners-guide-to-nfts",
    publishedAt: "N/A",
    readTime: {
      en: "8 min read",
      fr: "8 min de lecture",
      ewe: "Xlẽ miniti 8",
    },
    tags: ["NFTs", "Blockchain", "Beginner", "Digital Token"],
  },
  {
    title: {
      en: "My DevRel Uni Cohort 6 Journey: Learnings, Achievements, and Future Plans",
      fr: "Mon Parcours DevRel Uni Cohort 6 : Apprentissages, Réussites et Plans d'Avenir",
      ewe: "Nye DevRel Uni Cohort 6 Mɔzɔzɔ: Nusrɔ̃lawo, Dzidzedzekpɔkpɔwo, kple ɣeyiɣi Dɔwɔwɔwo",
    },
    description: {
      en: "Reflecting on the DevRel University Cohort 6 experience and future goals.",
      fr: "Réflexion sur l'expérience DevRel University Cohort 6 et les objectifs futurs.",
      ewe: "DevRel University Cohort 6 ƒe nuŋlɔŋlɔ kple ɣeyiɣi dɔwɔwɔwo.",
    },
    href: "https://starlabman.hashnode.dev/my-devrel-uni-cohort-6-journey-learnings-achievements-and-future-plans",
    publishedAt: "N/A",
    readTime: {
      en: "12 min read",
      fr: "12 min de lecture",
      ewe: "Xlẽ miniti 12",
    },
    tags: ["DevRel", "Education", "Career", "Blockchain"],
  },
  {
    title: {
      en: "Building a Scalable DApp on Arbitrum with Stylus: A Complete Guide",
      fr: "Construire une DApp Évolutive sur Arbitrum avec Stylus : Guide Complet",
      ewe: "Scalable DApp Wɔwɔ le Arbitrum Me Kple Stylus: Mɔfiame Blibo",
    },
    description: {
      en: "Complete guide to building scalable decentralized applications on Arbitrum using Stylus.",
      fr: "Guide complet pour construire des applications décentralisées évolutives sur Arbitrum avec Stylus.",
      ewe: "Scalable decentralized applications wɔwɔ le Arbitrum me kple Stylus.",
    },
    href: "https://starlabman.hashnode.dev/building-a-scalable-dapp-on-arbitrum-with-stylus-a-complete-guide",
    publishedAt: "N/A",
    readTime: {
      en: "15 min read",
      fr: "15 min de lecture",
      ewe: "Xlẽ miniti 15",
    },
    tags: ["Arbitrum", "Stylus", "DApp", "Blockchain", "Development"],
  },
  {
    title: {
      en: "My 30-60-90 Day Plan as a Developer Advocate at Arbitrum Foundation",
      fr: "Mon Plan 30-60-90 Jours en tant que Developer Advocate chez Arbitrum Foundation",
      ewe: "Nye 30-60-90 Ŋkeke Dɔwɔwɔ le Developer Advocate le Arbitrum Foundation Me",
    },
    description: {
      en: "Strategic plan for the first 90 days as a Developer Advocate at Arbitrum Foundation.",
      fr: "Plan stratégique pour les 90 premiers jours en tant que Developer Advocate chez Arbitrum Foundation.",
      ewe: "Strategic plan na 90 ŋkeke yeyewo le Developer Advocate le Arbitrum Foundation me.",
    },
    href: "https://starlabman.hashnode.dev/my-30-60-90-day-plan-as-a-developer-advocate-at-arbitrum-foundation",
    publishedAt: "N/A",
    readTime: {
      en: "10 min read",
      fr: "10 min de lecture",
      ewe: "Xlẽ miniti 10",
    },
    tags: ["Arbitrum", "Developer Advocate", "Career", "Strategy"],
  },
  {
    title: {
      en: "Innovative Proposals to Educate and Engage Developers with Arbitrum and Stylus",
      fr: "Propositions Innovantes pour Éduquer et Engager les Développeurs avec Arbitrum et Stylus",
      ewe: "Yeye Dɔwɔwɔwo na Nusrɔ̃lawo Nusrɔ̃ɖoɖo kple Kpekpeɖeŋu kple Arbitrum kple Stylus",
    },
    description: {
      en: "Creative strategies to educate and engage developers in the Arbitrum and Stylus ecosystem.",
      fr: "Stratégies créatives pour éduquer et engager les développeurs dans l'écosystème Arbitrum et Stylus.",
      ewe: "Creative strategies na nusrɔ̃lawo nusrɔ̃ɖoɖo kple kpekpeɖeŋu le Arbitrum kple Stylus nutome me.",
    },
    href: "https://starlabman.hashnode.dev/innovative-proposals-to-educate-and-engage-developers-with-arbitrum-and-stylus",
    publishedAt: "N/A",
    readTime: {
      en: "14 min read",
      fr: "14 min de lecture",
      ewe: "Xlẽ miniti 14",
    },
    tags: ["Arbitrum", "Stylus", "Education", "Developer Engagement"],
  },
  {
    title: {
      en: "What is Developer Relations?",
      fr: "Qu'est-ce que les Relations Développeurs ?",
      ewe: "Nuka Wɔlawo ƒe Kpekpeɖeŋu?",
    },
    description: {
      en: "Understanding the role and importance of Developer Relations in the tech industry.",
      fr: "Comprendre le rôle et l'importance des Relations Développeurs dans l'industrie tech.",
      ewe: "Developer Relations ƒe nuŋlɔŋlɔ kple eƒe yeye le tech industry me.",
    },
    href: "https://starlabman.hashnode.dev/what-is-developer-relations",
    publishedAt: "N/A",
    readTime: {
      en: "6 min read",
      fr: "6 min de lecture",
      ewe: "Xlẽ miniti 6",
    },
    tags: ["DevRel", "Developer Relations", "Tech", "Community"],
  },
  {
    title: {
      en: "Smart Contracts",
      fr: "Contrats Intelligents",
      ewe: "Smart Contracts",
    },
    description: {
      en: "Understanding the fundamentals of smart contracts and their applications.",
      fr: "Comprendre les fondamentaux des contrats intelligents et leurs applications.",
      ewe: "Smart contracts ƒe gɔmesese kple eƒe dɔwɔwɔwo.",
    },
    href: "https://starlabman.hashnode.dev/smart-contracts",
    publishedAt: "N/A",
    readTime: {
      en: "7 min read",
      fr: "7 min de lecture",
      ewe: "Xlẽ miniti 7",
    },
    tags: ["Smart Contracts", "Blockchain", "Development"],
  },
  {
    title: {
      en: "What is Open Source?",
      fr: "Qu'est-ce que l'Open Source?",
      ewe: "Nuka Wɔlawo Gbɔŋlɔ Ƒe Nuwo?",
    },
    description: {
      en: "Understanding the fundamentals of open source software and its impact on development.",
      fr: "Comprendre les fondamentaux des logiciels open source et leur impact sur le développement.",
      ewe: "Gɔmesese gbɔŋlɔ kple eƒe nuŋlɔŋlɔwo le dɔwɔwɔ me.",
    },
    href: "https://starlabman.hashnode.dev/quest-ce-que-lopen-source",
    publishedAt: "N/A",
    readTime: {
      en: "5 min read",
      fr: "5 min de lecture",
      ewe: "Xlẽ miniti 5",
    },
    tags: ["Open Source", "Software", "Development"],
  },
  {
    title: {
      en: "Blockchain DApp To-Do List with Next.js, Solidity, Web3.js: Step-by-Step Tutorial",
      fr: "Liste de Tâches DApp Blockchain avec Next.js, Solidity, Web3.js: Tutoriel Pas à Pas",
      ewe: "Blockchain DApp To-Do List kple Next.js, Solidity, Web3.js: Mɔfiame Tsitotsito",
    },
    description: {
      en: "A comprehensive guide to building a decentralized to-do list application.",
      fr: "Un guide complet pour construire une application de liste de tâches décentralisée.",
      ewe: "Aɖaŋuɖoɖo blibo na decentralized to-do list dɔwɔwɔ.",
    },
    href: "https://starlabman.hashnode.dev/to-do-list-blockchain-dapp-avec-nextjs-solidity-web3js-tutoriel-pas-a-pas",
    publishedAt: "N/A",
    readTime: {
      en: "20 min read",
      fr: "20 min de lecture",
      ewe: "Xlẽ miniti 20",
    },
    tags: ["Blockchain", "DApp", "Next.js", "Solidity", "Web3.js"],
  },
  {
    title: {
      en: "Innovative Proposals to Educate and Engage Developers with Arbitrum and Stylus",
      fr: "Propositions Innovantes pour Éduquer et Engager les Développeurs avec Arbitrum et Stylus",
      ewe: "Nu yeyewo gbɔŋlɔ na Nusrɔ̃lawo kple Arbitrum kple Stylus",
    },
    description: {
      en: "Strategies to foster developer engagement and learning within the Arbitrum and Stylus ecosystems.",
      fr: "Stratégies pour favoriser l'engagement et l'apprentissage des développeurs au sein des écosystèmes Arbitrum et Stylus.",
      ewe: "Nu yeyewo gbɔŋlɔ na nusrɔ̃lawo kple Arbitrum kple Stylus nutome.",
    },
    href: "https://starlabman.hashnode.dev/innovative-proposals-to-educate-and-engage-developers-with-arbitrum-and-stylus",
    publishedAt: "N/A",
    readTime: {
      en: "N/A",
      fr: "N/A",
      ewe: "N/A",
    },
    tags: ["Arbitrum", "Stylus", "Developer Education", "Engagement"],
  },
  {
    title: {
      en: "My 30-60-90 Day Plan as a Developer Advocate at Arbitrum Foundation",
      fr: "Mon Plan 30-60-90 Jours en tant que Developer Advocate chez Arbitrum Foundation",
      ewe: "Nye Ɣleti 30-60-90 ƒe Ðoɖo abe Nusrɔ̃lawo ƒe Nuƒola le Arbitrum Foundation",
    },
    description: {
      en: "A detailed plan outlining the first three months as a Developer Advocate, focusing on strategy and execution.",
      fr: "Un plan détaillé décrivant les trois premiers mois en tant que Developer Advocate, axé sur la stratégie et l'exécution.",
      ewe: "Ðoɖo blibo si gbɔŋlɔ na nusrɔ̃lawo ƒe nuƒolawo ƒe ɣleti etɔ̃ gbãtɔwo, eƒe aɖaŋuɖoɖo kple eƒe nuwɔwɔ.",
    },
    href: "https://starlabman.hashnode.dev/my-30-60-90-day-plan-as-a-developer-advocate-at-arbitrum-foundation",
    publishedAt: "N/A",
    readTime: {
      en: "N/A",
      fr: "N/A",
      ewe: "N/A",
    },
    tags: ["Developer Advocate", "Arbitrum", "Career Plan", "DevRel"],
  },
  {
    title: {
      en: "Building a Scalable DApp on Arbitrum with Stylus: A Complete Guide",
      fr: "Construire une DApp Scalable sur Arbitrum avec Stylus : Un Guide Complet",
      ewe: "DApp Gãtɔ Wɔwɔ le Arbitrum Kple Stylus: Mɔfiame Blibo",
    },
    description: {
      en: "A step-by-step guide to developing a scalable decentralized application using Arbitrum and Stylus.",
      fr: "Un guide étape par étape pour développer une application décentralisée évolutive en utilisant Arbitrum et Stylus.",
      ewe: "Mɔfiame tsitotsito na decentralized dɔwɔwɔ gãtɔ wɔwɔ kple Arbitrum kple Stylus.",
    },
    href: "https://starlabman.hashnode.dev/building-a-scalable-dapp-on-arbitrum-with-stylus-a-complete-guide",
    publishedAt: "N/A",
    readTime: {
      en: "N/A",
      fr: "N/A",
      ewe: "N/A",
    },
    tags: ["Arbitrum", "Stylus", "DApp", "Scalability", "Development"],
  },
  {
    title: {
      en: "My DevRelUni Cohort 6 Journey: Learnings, Achievements, and Future Plans",
      fr: "Mon Parcours DevRelUni Cohorte 6 : Apprentissages, Réalisations et Plans Futurs",
      ewe: "DevRelUni Cohort 6 Nye Mɔzɔzɔ: Nusrɔ̃lawo, Dzidzedzekpɔkpɔwo, kple Etsɔme Ðoɖowo",
    },
    description: {
      en: "A reflection on the DevRelUni Cohort 6 program, highlighting key learnings and future aspirations.",
      fr: "Une réflexion sur le programme DevRelUni Cohorte 6, mettant en lumière les apprentissages clés et les aspirations futures.",
      ewe: "Nusrɔ̃lawo ƒe DevRelUni Cohort 6 dɔwɔwɔ, eƒe nusrɔ̃lawo kple etsɔme ɖoɖowo.",
    },
    href: "https://starlabman.hashnode.dev/my-devrel-uni-cohort-6-journey-learnings-achievements-and-future-plans",
    publishedAt: "N/A",
    readTime: {
      en: "N/A",
      fr: "N/A",
      ewe: "N/A",
    },
    tags: ["DevRel", "Education", "Career", "Community"],
  },
  {
    title: {
      en: "Introduction to Stylus: The New Revolution in the Arbitrum Ecosystem",
      fr: "Introduction à Stylus : La Nouvelle Révolution dans l'Écosystème Arbitrum",
      ewe: "Stylus Gɔmeɖeɖe: Nu Yeye le Arbitrum Nutome",
    },
    description: {
      en: "An overview of Stylus and its potential to revolutionize the Arbitrum blockchain.",
      fr: "Un aperçu de Stylus et de son potentiel à révolutionner la blockchain Arbitrum.",
      ewe: "Stylus kple eƒe nuŋlɔŋlɔwo le Arbitrum blockchain me.",
    },
    href: "https://starlabman.hashnode.dev/introduction-to-stylus-the-new-revolution-in-the-arbitrum-ecosystem",
    publishedAt: "N/A",
    readTime: {
      en: "N/A",
      fr: "N/A",
      ewe: "N/A",
    },
    tags: ["Stylus", "Arbitrum", "Blockchain", "Innovation"],
  },
  {
    title: {
      en: "Creating Your First Unique Digital Token: A Beginner's Guide to NFTs",
      fr: "Créer Votre Premier Jeton Numérique Unique : Un Guide pour Débutants sur les NFTs",
      ewe: "Digital Token Yeyewo Wɔwɔ: NFT Gɔmeɖeɖe na Ame Yeyewo",
    },
    description: {
      en: "A beginner-friendly guide to understanding and creating Non-Fungible Tokens (NFTs).",
      fr: "Un guide convivial pour les débutants afin de comprendre et créer des Tokens Non Fongibles (NFTs).",
      ewe: "Mɔfiame bɔbɔe na ame yeyewo be woase gɔme kple woawɔ NFTs.",
    },
    href: "https://starlabman.hashnode.dev/creating-your-first-unique-digital-token-a-beginners-guide-to-nfts",
    publishedAt: "N/A",
    readTime: {
      en: "N/A",
      fr: "N/A",
      ewe: "N/A",
    },
    tags: ["NFTs", "Blockchain", "Beginner", "Digital Token"],
  },
]

export const socialLinks = [
  { platform: "Twitter DevRel", handle: "@0xWeb3DevRel", href: "https://x.com/0xWeb3DevRel" },
  { platform: "Farcaster", handle: "0xweb3devrel", href: "https://farcaster.xyz/0xweb3devrel" },
  { platform: "Zora", handle: "@0xweb3devrel", href: "https://zora.co/@0xweb3devrel" },
  { platform: "Telegram", handle: "Web3DevRel", href: "https://t.me/Web3DevRel" },
  { platform: "Buy Me Coffee", handle: "starlabman", href: "https://buymeacoffee.com/starlabman" },
]
