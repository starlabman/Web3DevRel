// Data structures for AGBETSIASSI KODJO LABORE portfolio

import { Description } from "@radix-ui/react-toast"
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
    en: "Applying to DevRel Uni Cohort 6 – Connecting Developers and Technology",
    fr: "Candidature à la Cohorte 6 de DevRel Uni – Créer des Liens entre Développeurs et Technologie",
    ewe: "Metsɔ na DevRel Uni Cohorte 6 – Nuɖoɖo kple Nusrɔ̃la kple Teknɔlɔdzi",
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1841117454279295099",
  stat: "9,2k views"
},

{
  title: {
    en: "From Magma Summit to SheFi Summit – A Week of Growth and Connection",
    fr: "Du Magma Summit au SheFi Summit – Une Semaine de Croissance et de Connexion",
    ewe: "Magma Summit kple SheFi Summit – Kɔsiɖa ɖeka le Nudome kple Nuɖoɖo me",
  },
  href: "https://twitter.com/africanbuilder_/status/1964924557636051097",
  stat: "9,2k views"
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
  {
  title: {
    en: "Join and Contribute to Base – Connect with Core Builders",
    fr: "Rejoindre et Contribuer à Base – Connectez-vous aux Bâtisseurs Clés",
    ewe: "Join kple Wɔdɔ Base – Kplɔ Nudɔla gãwo kple Nuɖoɖo",
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1964451365423550494",
  stat: "2,7k views"
},
{
  title: {
    en: "Selected for Avalanche Faculty Development Program – Summer 2025",
    fr: "Sélectionné pour le Programme de Développement des Enseignants Avalanche – Été 2025",
    ewe: "Wome Avalanche Faculty Development Program – Summer 2025 me",
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1947611741908582746",
  stat: "1k views"
},
{
  title: {
    en: "Selected for ETHEnugu Builder’s Residency 2025 – Building Real Web3 Solutions",
    fr: "Sélectionné pour la Résidence des Bâtisseurs ETHEnugu 2025 – Créer de Réelles Solutions Web3",
    ewe: "Wome ETHEnugu Builder’s Residency 2025 me – Wɔ Web3 Nuvɔ̃wo gã",
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1947258430697226732",
  stat: "1k views"
},
{
  title: {
    en: "Graduated from Avalanche Faculty Development Program – Summer 2025",
    fr: "Diplômé du Programme de Développement du Corps Professoral Avalanche – Été 2025",
    ewe: "Metsɔ Avalanche Faculty Development Program – Summer 2025 ƒe Diploma",
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1964162658195657080",
  stat: "20 views"
},
{
  title: {
    en: "Completed Avalanche Faculty Development Program – Summer 2025",
    fr: "Fier d’avoir terminé le Programme de Développement Pédagogique Avalanche – Été 2025",
    ewe: "Metsɔ Avalanche Faculty Development Program – Summer 2025 ŋutifafa",
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1964161533782491478",
  stat: "16 views"
},
{
  title: {
    en: "Builders Recharge with Delicious Ghanaian Dishes at ETHAccra",
    fr: "Les Builders se Ressourcent avec de Délicieux Plats Ghanéens à ETHAccra",
    ewe: "Builders ƒe nuɖuɖu gãwo le Ghana me kple ETHAccra me",
  },
  href: "https://twitter.com/ETHAccra/status/1963645224439214115",
  stat: "1,3k views"
},
{
  title: {
    en: "ETHAccra Hackathon 2025 – 150+ Registered and Counting",
    fr: "ETHAccra Hackathon 2025 – Plus de 150 Inscriptions et ça Continue",
    ewe: "ETHAccra Hackathon 2025 – Nusrɔ̃la 150+ kple wotsɔna ɖe asi",
  },
  href: "https://twitter.com/ETHAccra/status/1963604073476723100",
  stat: "123 views"
},
{
  title: {
    en: "Day One of ETHAccra 2025 – West Africa’s Premier Ethereum Hackathon Begins",
    fr: "Jour 1 d’ETHAccra 2025 – Le Principal Hackathon Ethereum d’Afrique de l’Ouest Commence",
    ewe: "ETHAccra 2025 ƒe ŋkeke ɖeka – Ethereum Hackathon gã le Afrika ƒe Anyigba Tɔsisi me va do",
  },
  href: "https://twitter.com/ETHAccra/status/1963601739728224678",
  stat: "128 views"
},
{
  title: {
    en: "ETHSafari 2025 – Anticipating an Inspiring Lineup of Speakers",
    fr: "ETHSafari 2025 – Une Programmation Inspirante de Conférenciers Attendues",
    ewe: "ETHSafari 2025 – Nudomeɖoɖo gãwo katã va do le gɔme",
  },
  href: "https://twitter.com/ETHSafari/status/1963874745176248710",
  stat: "2,9k views"
},
{
  title: {
    en: "SolMail Giveaway – Win a Solana Seeker Phone",
    fr: "Concours SolMail – Gagnez un Téléphone Solana Seeker",
    ewe: "SolMail Giveaway – Nàtsɔ Solana Seeker ƒe Phone",
  },
  href: "https://twitter.com/SolMailOfficial/status/1963517001135161729",
  stat: "22,9k views"
},
{
  title: {
    en: "Base Workshop at ETHAccra – Empowering Ghanaians to Build Solutions for 2M+ Users",
    fr: "Atelier Base à ETHAccra – Aider les Ghanéens à Créer des Solutions pour Plus de 2M d’Utilisateurs",
    ewe: "Base Workshop le ETHAccra – Dɔwɔwɔwo tso Ghana ƒe nusrɔ̃wo dzi be woawɔ nuvɔ̃wo ɖe 2M+ ƒe ƒomeviwo",
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1963750470121382363",
  stat: "3,1k views"
},
{
  title: {
    en: "EFP Workshops with Brantly Millegan at ETHAccra",
    fr: "Ateliers EFP avec Brantly Millegan à ETHAccra",
    ewe: "EFP Workshops kple Brantly Millegan le ETHAccra",
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1963629175392129132",
  stat: "532 views"
},
{
  title: {
    en: "Silent Mode at ETHAccra – Focused with the Team, Here to Win",
    fr: "Mode Silencieux à ETHAccra – Concentrés avec l’Équipe, Ici pour Gagner",
    ewe: "Silent Mode le ETHAccra – Wometsɔa nusrɔ̃wo kple team be yewonya",
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1963405981578043503",
  stat: "535 views"
},{
  title: {
    en: "Good Morning September – Learning, Contributing & Building Across Events",
    fr: "Bonjour Septembre – Apprendre, Contribuer et Construire à Travers les Événements",
    ewe: "Good Morning September – Dɔwɔwɔ, Nusrɔ̃, kple Wɔnu le Events me",
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1962855253553901631",
  stat: "2,4k views"
},
{
  title: {
    en: "BNBChain Turns 5 – Explore, Contribute & Win Rewards",
    fr: "BNBChain Fête ses 5 Ans – Explorez, Contribuez et Gagnez des Récompenses",
    ewe: "BNBChain Turns 5 – Wɔnu, Nusrɔ̃ kple Gblɔ nuɖoɖo",
  },
  href: "https://twitter.com/BNBCHAIN/status/1962576218169188801",
  stat: "225k views"
},
{
  title: {
    en: "BNB Chain Turns 5 – Celebrating Builders, Communities & Users",
    fr: "BNB Chain Fête ses 5 Ans – Célébrons les Bâtisseurs, les Communautés et les Utilisateurs",
    ewe: "BNB Chain ƒe ƒe 5 – Dzudzɔ kple Builders, Communities kple Users",
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1962556631780077982",
  stat: "1,1k views"
},
{
  title: {
    en: "From Lomé to Web3LagosCon 2025 – A Radical Journey in Web3",
    fr: "De Lomé à Web3LagosCon 2025 – Un Parcours Radical dans le Web3",
    ewe: "Tso Lomé va do Web3LagosCon 2025 – Web3 ƒe dzidzɔɖo gã",
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1958547738695512070",
  stat: "3,2k views"
},
{
  title: {
    en: "GM EFDevcon – Hacker Mode ON for Aleph Hackathon S4",
    fr: "GM EFDevcon – Mode Hacker Activé pour l’Aleph Hackathon S4",
    ewe: "GM EFDevcon – Hacker Mode le Aleph Hackathon S4 me",
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1953778149277179986",
  stat:"787 views"
},
{
  title: {
    en: "Avalanche Faculty Development Program – Session 3 Completed: Exploring Blockchain & AI",
    fr: "Programme de Développement du Corps Professoral Avalanche – Session 3 Terminée : Explorer la Blockchain et l’IA",
    ewe: "Avalanche Faculty Development Program – Session 3 wuie: Nudome Blockchain kple AI",
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1953526838514303405",
  stat: "1k"
},
{
  title: {
    en: "Good Memories of Bitcoin Pizza Day with SatoshiLearners",
    fr: "Bons Souvenirs du Bitcoin Pizza Day avec SatoshiLearners",
    ewe: "Bitcoin Pizza Day ƒe gbɔgbɔnuwo kple SatoshiLearners",
  },
  href: "https://twitter.com/SatoshiLeaners/status/1953501261233336344",
  stat: "238 views"
},
{
  title: {
    en: "From Lomé to Global Impact – Labore’s Journey in Web3",
    fr: "De Lomé à l’Impact Global – Le Parcours de Labore dans le Web3",
    ewe: "Tso Lomé va do Global Impact – Labore ƒe Web3 dzidzɔɖo",
  },
  href: "https://twitter.com/Ebunayo08/status/1953366013141025136",
  stat: "4,2k views"
},
{
  title: {
    en: "The Future of Ethereum in Africa – Beyond Technology, About Empowerment",
    fr: "L’Avenir d’Ethereum en Afrique – Au-delà de la Technologie, une Question d’Autonomisation",
    ewe: "Ethereum ƒe ɣeyiɣi le Afrika me – Menye Teknɔlɔdzi koe, ke nya ŋutifafa hã",
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1953174193027084717",
  stat: "286 views"
},
{
  title: {
    en: "CreatorX Welcomes Kodjo as Ambassador to Togo!",
    fr: "CreatorX Accueille Kodjo comme Ambassadeur au Togo !",
    ewe: "CreatorX na Kodjo be Togo ƒe Ambassador"
  },
  href: "https://twitter.com/CreatorXinc/status/1953076800877412582",
  stat: "688 views",
  
},
{
  title: {
    en: "Africa’s Voice in Web3 – Building in Public for Opportunity & Impact",
    fr: "La Voix de l’Afrique dans le Web3 – Construire en Public pour Opportunités et Impact",
    ewe: "Afrika ƒe nuɖoɖo le Web3 me – Wɔnu le Public be nye Opportunity kple Impact"
  },
  href: "https://twitter.com/Web3LagosCon/status/1953158740040991185",
  stat: "3,5k views"
},
{
  title: {
    en: "Quick Giveaway – Share Your $SOL Wallet",
    fr: "Concours Rapide – Partagez Votre Portefeuille $SOL",
    ewe: "Quick Giveaway – Kplɔ wò $SOL Wallet"
  },
  href: "https://twitter.com/nobrainflip/status/1953043539945775357",
  stat: "65k"
},
{
  title: {
    en: "Solana Students Africa Hackathon 2025",
    fr: "Hackathon Solana Students Africa 2025"
  },
  
  href: "https://twitter.com/toby_solutions/status/1952069855227912391",
  stat: "14k views",
},
{
  title: {
    en: "ETHAfrique – Africa is Building the Future",
    fr: "ETHAfrique – L’Afrique Construit le Futur"
  },

  href: "https://twitter.com/0xWeb3DevRel/status/1952081326544232745",
  stat: "360 views",

},
{
  title: {
    en: "Decentralization as Africa’s Leverage – ETHAfrique 2025",
    fr: "La Décentralisation comme Levier pour l’Afrique – ETHAfrique 2025",
    ewe: "Decentralization nyateƒe le Afrika ŋu – ETHAfrique 2025"
  },
  href: "https://twitter.com/EthAfrique/status/1951406641666203867",
  stat: "126 views"
},
{
  title: {
    en: "Avalanche Faculty Program – Session 2 Completed!",
    fr: "Programme Pédagogique Avalanche – Session 2 Terminée !",
    ewe: "Avalanche Faculty Program – Session 2 ƒe nɔviwɔwɔwu!"
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1950968057146307037",
  stat: "989 views"
},
{
  title: {
    en: "Africa Blockchain Community – Blockchain Bootcamp Cohort 2.0",
    fr: "Africa Blockchain Community – Bootcamp Blockchain Cohorte 2.0",
    ewe: "Africa Blockchain Community – Bootcamp Blockchain Cohorte 2.0"
  },
  href: "https://twitter.com/Afroblockchain_/status/1951034848942121331",
    stat: "121 views"

},
{
  title: {
    en: "Faculty Development Program – Session 2 Completed!",
    "fr": "Faculty Development Program – Session 2 Terminée !"
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1950968057146307037",
    stat: "994 views"
},
{
  title: {
    en: "Ethereum Mainnet LIVE – Watching Blocks in Real Time!",
    fr: "Ethereum Mainnet EN DIRECT – Les Blocs en Temps Réel !"
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1950949235173605592",

  stat: "45 views"
},
{
  title: {
    en: "Claimed My Ethereum 10th-Anniversary NFT!",
    fr: "Réclamation de mon NFT du 10e Anniversaire Ethereum !"
  },
  
  href: "https://ethereum.org/en/10years/",
  stat: "152 views"
},
{
  title: {
    en: "Thrilled to Speak at Africa Fintech Summit 2025 🇬🇭!",
    fr: "Ravi de prendre la parole à l’Africa Fintech Summit 2025 🇬🇭 !"
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1973431363895513552",
  description: {
    en: "With @sen_change, we bridge the financial inclusion gap, ensure security & compliance, accelerate digital finance, and empower youth, SMEs, and the diaspora.",
    fr: "Avec @sen_change, nous comblons le fossé de l’inclusion financière, garantissons la sécurité et la conformité, accélérons la finance numérique et autonomisons la jeunesse, les PME et la diaspora."
  },
  stat: "1k views"
},
{
  title: {
    en: "Accepted into the ZK & Privacy Bootcamp!",
    fr: "Accepté(e) au Bootcamp ZK et Confidentialité !"
  },
  href: "https://x.com/0xWeb3DevRel/status/1971152356697149863",
  description: {
    en: "In July with @EthAfrique, we launched an introduction to ZK. Today, I’m thrilled to announce my acceptance into the ZK & Privacy Bootcamp by @dev3pack! ZK and privacy are the future — I’m here to learn, grow, and share. Next stop: @EFDevcon & @invisiblgarden.",
    fr: "En juillet avec @EthAfrique, nous avons lancé une introduction à ZK. Aujourd’hui, je suis ravi(e) d’annoncer mon acceptation au Bootcamp ZK et Confidentialité par @dev3pack ! ZK et la confidentialité représentent l’avenir — je suis là pour apprendre, progresser et partager. Prochaine étape : @EFDevcon et @invisiblgarden."
  },
  stat: "535 views"
},
{
  title: {
    en: "From Local Web3 Meetups to the Global Stage at TOKEN2049 🇸🇬",
    fr: "Des Rencontres Web3 Locales à la Scène Mondiale de TOKEN2049 🇸🇬"
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1969864221102875012",
  description: {
    en: "From local Web3 meetups in Africa  to the global stage in Singapore at @token2049 🇸🇬 — I’m ready to capture the alpha at Next Stop: MOON with @TrustWallet! 🎥 Me + my cameraman @zeus3_cristian are all set to make it unforgettable! #NextStopMOON #Token2049 #TrustWallet",
    fr: "Des rencontres Web3 locales en Afrique  à la scène mondiale de Singapour lors de @token2049 🇸🇬 — prêt(e) à capturer l’alpha à Next Stop: MOON avec @TrustWallet ! 🎥 Moi et mon caméraman @zeus3_cristian sommes prêts à rendre ce moment inoubliable ! #NextStopMOON #Token2049 #TrustWallet"
  },
  stat: "318 views"
},
{
  title: {
    en: "CALLING ALL CREATORS  – Win a Trip to Singapore with Trust Wallet! 🇸🇬",
    fr: "APPEL À TOUS LES CRÉATEURS  – Gagnez un Voyage à Singapour avec Trust Wallet ! 🇸🇬"
  },
  href: "https://twitter.com/TrustWallet/status/1966443381153730587",
  description: {
    en: "We’re taking YOU and one friend to Singapore  to capture our main event — ‘Next Stop: MOON’ by @TrustWallet during @token2049! Comment below with a video telling us why it should be you Like + Repost Tag your cameraman ",
    fr: "Nous vous emmenons avec un ami à Singapour  pour capturer notre événement principal — « Next Stop : MOON » de @TrustWallet lors de @token2049 ! Commentez ci-dessous avec une vidéo expliquant pourquoi cela devrait être vous Aimez + Repostez Taguez votre caméraman "
  },
  stat: "469000 views"
},
{
  title: {
    en: "Celebrating 5 Years of BNB Chain!",
    fr: "Célébration des 5 Ans de BNB Chain !"
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1968387429574001010",
  description: {
    en: "Celebrating 5 years of growth, innovation, and community  Grateful to be part of this journey  Here’s to what we’ve built together and the future ahead!  #BNBChainTurns5 @BNBCHAIN",
    fr: "Célébrons 5 ans de croissance, d’innovation et de communauté  Reconnaissant(e) de faire partie de cette aventure  À tout ce que nous avons construit ensemble et à l’avenir qui s’annonce !  #BNBChainTurns5 @BNBCHAIN"
  },
  stat: "185 views"
},
{
  title: {
    en: "GM @base  – Base is for Everyone!",
    fr: "GM @base  – Base est pour Tout le Monde !"
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1964451365423550494",
  description: {
    en: "GM @base is for everyone. If you want to join @base, contribute, learn, or build in your country, just DM these amazing Base Chiefs: @Sir_Damilare, @BasedKago, @kokocodes, @DefiDevrel, @amjoelbill, @_ChrisOketch, and @BasedWestAfrica — all at @ETHAccra 🫡",
    fr: "GM @base est pour tout le monde. Si vous souhaitez rejoindre @base, contribuer, apprendre ou construire dans votre pays, envoyez simplement un message à ces incroyables responsables de Base : @Sir_Damilare, @BasedKago, @kokocodes, @DefiDevrel, @amjoelbill, @_ChrisOketch et @BasedWestAfrica — tous présents à @ETHAccra 🫡"
  },
  stat: "2,8k views"
},
{
  title: {
    en: "GM on the Top! ",
    fr: "GM au Sommet ! "
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1946954847795765325",
  description: {
    en: "Good day to all my Web3 family! Remember to improve yourself, impact your street, and stay focused. Feeling blessed and proud of all of you.",
    fr: "Bonne journée à toute ma famille Web3 ! N'oubliez pas de vous améliorer, d’impacter votre quartier et de rester concentré(e). Je me sens béni(e) et fier/fière de vous tous."
  },
  stat: "227 views"
},
{
  title: {
    en: "Building the Future of Blockchain in Africa ",
    fr: "Construire le Futur de la Blockchain en Afrique "
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1946623248902258989",
  description: {
    en: "We're building the future of Blockchain in Africa. Shout-out to @Afroblockchain_ for supporting the journey!",
    fr: "Nous construisons le futur de la Blockchain en Afrique. Merci à @Afroblockchain_ pour son soutien dans cette aventure !"
  },
  stat: "336 views"
},
{
  title: {
    en: "ETHAfrique Tour Meetup – Abomey Calavi ",
    fr: "ETHAfrique Tour Meetup – Abomey Calavi "
  },
  href: "https://twitter.com/Alverson04/status/1946260664130937214",
  description: {
    en: "Had the chance to attend this event discussing Ethereum blockchain, open source, and tech projects. A true moment of knowledge sharing and inspiration for the future of Web3 in Africa. @EthAfrique #Web3Africa",
    fr: "J’ai eu la chance d’assister à cet événement où l’on a parlé de la blockchain Ethereum, d’open source et de projets tech. Un vrai moment de transmission, de partage et d’inspiration pour l’avenir du Web3 en Afrique. @EthAfrique #Web3Africa"
  },
  stat: "207 views"
},
{
  title: {
    en: "Being Present Every Day Makes the Difference ",
    fr: "Être Présent Chaque Jour Fait Toute la Différence "
  },
  href: "https://twitter.com/ETHAccra/status/1946284158390608106",
  description: {
    en: "There’s being present… and then there’s being present every single day without fail. Your energy was constant, focused, and inspiring. Thank you for setting the tone and motivating others to do the same. We see you! #ETHAccra #QuizWeek🥳",
    fr: "Il y a le fait d'être présent… et puis il y a le fait d'être présent chaque jour sans faute. Votre énergie était constante, concentrée et inspirante. Merci d'avoir donné le ton et d'avoir motivé les autres à faire de même. On vous voit ! #ETHAccra #QuizWeek🥳"
  },
  stat: "208 views"
},
{
  title: {
    en: "ETHAfrique | Devconnect Francophone – NBBC Official Sponsor",
    fr: "ETHAfrique | Devconnect Afrique Francophone – NBBC Sponsor Officiel"
  },
  href: "https://twitter.com/EthAfrique/status/1946197375841661217",
  description: {
    en: "@EthAfrique is excited to announce #NBBC as an official sponsor! @newbossbusines1 specializes in crypto exchanges with local currencies and other solutions. This partnership reflects our shared vision: making #Web3 and #blockchain technologies more accessible.",
    fr: "@EthAfrique est ravi d’annoncer #NBBC comme sponsor officiel ! @newbossbusines1 est spécialisée dans les échanges de #crypto en monnaies locales et d'autres solutions. Ce partenariat reflète notre vision commune : rendre les technologies #Web3 et #blockchain plus accessibles."
  },
  stat: "118 views"
},
{
  title: {
    en: "Building the Future of Blockchain in Africa, One Block at a Time ",
    fr: "Construire l’Avenir de la Blockchain en Afrique, Bloc par Bloc "
  },
  href: "https://twitter.com/Afroblockchain_/status/1945908059030831352",
  description: {
    en: "We’re thrilled to announce that Africa Blockchain Community is officially an Ecosystem Partner for @Eth_Enugu 2025! 📍 Pop-up City Tour: August 4–15, 2025 🎤 Conferences and more! #BlockchainAfrica #Web3Africa",
    fr: "Nous sommes ravis d’annoncer que Africa Blockchain Community est officiellement Ecosystem Partner de l'événement @Eth_Enugu 2025 ! 📍 Pop-up City Tour : du 4 au 15 août 2025 🎤 Conférences et plus encore ! #BlockchainAfrica #Web3Africa"
  },
  stat: "321 views"
},
{
  title: {
    en: "I’ve Done My Part — Have You?",
    fr: "Je viens de faire ma part, et vous ?"
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1943635628249251944",
  description: {
    en: "Contribute to making Devconnect ARG the best event yet: support participants, help with logistics, and get backstage access to the first Ethereum World's Fair. APPLY HERE! 🌎",
    fr: "Contribuez à faire de Devconnect ARG le meilleur événement à ce jour : soutenez les participants, participez à la logistique et obtenez un accès aux coulisses de la première Ethereum World's Fair. POSTULEZ ICI : 🌎"
  },
  stat: "306 views"
},
{
  title: {
    en: "Stuck Juggling Tokens? Meet 1-Click Reload!",
    fr: "Bloqué(e) à jongler avec vos tokens ? Découvrez 1-Click Reload !"
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1940804859022004302",
  description: {
    en: "I’ve been stuck juggling Jup & sol-incinerator for token reloads—slow, risky, and a headache! Enter @ReloadSol’s new 1-Click Reload—1 transaction, up to 20 tokens swapped & closed! #1ClickReload",
    fr: "J’étais bloqué(e) à jongler entre Jup et sol-incinerator pour recharger mes tokens — lent, risqué et stressant ! Découvrez le nouveau 1-Click Reload de @ReloadSol : 1 transaction, jusqu’à 20 tokens échangés et fermés ! #1ClickReload"
  },
  stat: "285 views"
},
{
  title: {
    en: "1-Click Reload: Fast, Secure, Convenient!",
    fr: "1-Click Reload : Rapide, Sécurisé, Pratique !"
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1940804872162758841",
  description: {
    en: "Speed: Reloads in seconds vs. minutes with Jup. Security: On-chain safety with no middlemen. Convenience: 1 click vs. multiple steps. Traditional methods? Clunky and error-prone. 1-Click Reload is my new go-to—try it and ditch the old ways! @ReloadSol #1ClickReload",
    fr: "Vitesse : rechargements en secondes contre des minutes avec Jup. Sécurité : protection on-chain sans intermédiaires. Praticité : 1 clic au lieu de plusieurs étapes. Méthodes traditionnelles ? Lourdes et sujettes aux erreurs. 1-Click Reload est mon nouveau réflexe — essayez-le et oubliez les anciennes méthodes ! @ReloadSol #1ClickReload"
  },
  stat: "54 views"
},
{
  title: {
    en: "Ready to Reload Like a Pro?",
    fr: "Prêt(e) à Recharger Comme un Pro ?"
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1940804878806429718",
  description: {
    en: "Try @ReloadSol’s 1-Click Reload now! Challenge: Tag 3 Solana friends to join, and let’s get 50+ likes! Share your reload story below! #1ClickReload",
    fr: "Essayez dès maintenant le 1-Click Reload de @ReloadSol ! Challenge : Taguez 3 amis Solana pour participer, et atteignons 50+ likes ! Partagez votre histoire de recharge ci-dessous ! #1ClickReload"
  },
  stat: "50 views"
},
{
  title: {
    en: "Oracle Token Stress-Test is Live! 🔮",
    fr: "Test de Résistance des Tokens Oracle en Direct ! 🔮"
  },
  href: "https://twitter.com/0xWeb3DevRel/status/1940442810853069171",
  description: {
    en: "LINK, BAND, DIA, and API3 under pressure—who breaks first? Who recovers best? 📊 Drawdowns 📉 Price vs Liquidity 📈 Recovery Built with @glintanalytics for @SuperteamEarn. Check it out! #SuperteamEarn",
    fr: "LINK, BAND, DIA et API3 sous pression — qui casse en premier ? Qui récupère le mieux ? 📊 Drawdowns 📉 Prix vs Liquidité 📈 Récupération Construit avec @glintanalytics pour @SuperteamEarn. Découvrez-le ! #SuperteamEarn"
  },
  stat: "100 views"
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
      en: "Twitter Thread: Web3.js Ambassador Program Update",
      fr: "Thread Twitter : Mise à Jour du Programme Ambassadeur Web3.js",
      ewe: "Twitter Nya: Web3.js Ambassador Dɔwɔwɔ ƒe Nya Yeye",
    },
    href: "https://x.com/0xWeb3DevRel/status/1953526838514303405",
    stat: "N/A",
  },
  {
    title: {
      en: "Twitter Thread: DeFi Opportunities in Emerging Markets",
      fr: "Thread Twitter : Opportunités DeFi dans les Marchés Émergents",
      ewe: "Twitter Nya: DeFi Mɔnukpɔkpɔwo ƒe Nya le Asia Dziŋɔwɔlawo Me",
    },
    href: "https://x.com/0xWeb3DevRel/status/1950968057146307037",
    stat: "N/A",
  },
  {
    title: {
      en: "Twitter Thread: Blockchain Security Best Practices",
      fr: "Thread Twitter : Meilleures Pratiques de Sécurité Blockchain",
      ewe: "Twitter Nya: Blockchain Dzigbɔkpɔ Dɔwɔwɔ Nyuitɔwo ƒe Nya",
    },
    href: "https://x.com/0xWeb3DevRel/status/1948418868658995388",
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
      en: "Twitter Thread: Smart Contract Development Techniques",
      fr: "Thread Twitter : Techniques de Développement de Contrats Intelligents",
      ewe: "Twitter Nya: Smart Contract Dɔwɔwɔ ƒe Nya",
    },
    href: "https://x.com/0xWeb3DevRel/status/1952081326544232745",
    stat: "N/A",
  },
  {
    title: {
      en: "Twitter Thread: Web3 Career Transition Guide",
      fr: "Thread Twitter : Guide de Transition de Carrière Web3",
      ewe: "Twitter Nya: Web3 Dɔwɔƒe Gbɔgblɔ Mɔfiame ƒe Nya",
    },
    href: "https://t.co/t5uO1F3b77",
    stat: "N/A",
  },
  {
    title: {
      en: "Twitter Thread: Blockchain Education & Community Building Strategies",
      fr: "Thread Twitter : Éducation Blockchain & Stratégies de Construction de Communauté",
      ewe: "Twitter Nya: Blockchain Nusrɔ̃ɖoɖo & Hamewo Tutu ƒe Nya",
    },
    href: "https://x.com/0xWeb3DevRel/status/1939701646734290950",
    stat: "N/A",
  },
  {
    title: {
      en: "Twitter Thread: IsyChain Marketing Strategy",
      fr: "Thread Twitter : Stratégie Marketing IsyChain",
      ewe: "Twitter Nya: IsyChain Marketing ƒe Nya",
    },
    href: "https://x.com/0xWeb3DevRel/status/1930007463723708674",
    stat: "N/A",
  },
  {
    title: {
      en: "Twitter Thread: Decentralized Solutions & IsyChain",
      fr: "Thread Twitter : Solutions Décentralisées & IsyChain",
      ewe: "Twitter Nya: Decentralized Dɔwɔwɔwo & IsyChain ƒe Nya",
    },
    href: "https://x.com/0xWeb3DevRel/status/1926948041363271862",
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
      en: "Twitter Thread: Web3 Investment Strategies",
      fr: "Thread Twitter : Stratégies d'Investissement Web3",
      ewe: "Twitter Nya: Web3 Gakɔkɔ Aɖaŋuɖoɖo ƒe Nya",
    },
    href: "https://x.com/0xWeb3DevRel/status/1895157668244754768",
    stat: "N/A",
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
    {
    title: {
      en: "Binance Campus Ambassador Lead - Blockchain Education",
      fr: "Lead Ambassadeur Campus Binance - Éducation Blockchain",
      ewe: "Binance Campus Ambassador Kplɔla - Blockchain Nusrɔ̃ɖoɖo",
    },
    href: "https://www.linkedin.com/posts/starlabman_avalanche-facultydevelopment-web3education-activity-7369943532008189953-bdfv?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
    description:{
  "en": "Laboré Kodjo Agbetsiassi, graduate of the Avalanche Faculty Development Program (2025). Passionate about Web3 and blockchain, he is committed to promoting innovation and education to empower the next generation of builders in Africa.",
  
  "fr": "Laboré Kodjo Agbetsiassi est diplômé du Avalanche Faculty Development Program (2025). Passionné de Web3 et de la blockchain, il s’engage à promouvoir l’innovation et l’éducation pour former la prochaine génération de bâtisseurs en Afrique.",
  
  "ewe": "Laboré Kodjo Agbetsiassi nya Avalanche Faculty Development Program (2025) ƒe dzidzedzekpɔkpɔwo dzi. Eƒo nu le Web3 kple blockchain, eye wòdo gbe be wòakpe ɖoɖowo na gbɔgbɔ kple nusrɔ̃ɖoɖo ƒe nudzidzedzekpɔkpɔ le Afrika me."
},
    engagement: "30+ likes",
  },
    {
    title: {
      en: "Binance Campus Ambassador Lead - Blockchain Education",
      fr: "Lead Ambassadeur Campus Binance - Éducation Blockchain",
      ewe: "Binance Campus Ambassador Kplɔla - Blockchain Nusrɔ̃ɖoɖo",
    },
    href: "https://www.linkedin.com/posts/starlabman_avalanche-web3-blockchain-ugcPost-7364687379271446528-P-Ru?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
    description: {
      en: "Increasing blockchain adoption through education and awareness in Togo",
      fr: "Ce post célèbre la remise des diplômes du Programme de perfectionnement du corps professoral d’Avalanche, axé sur l’intégration de la blockchain et du Web3 dans l’éducation. Il met en avant l’impact de ces technologies sur l’innovation, l’apprentissage global et l’avenir de l’enseignement.",
      ewe: "Blockchain ƒe gbɔgblɔ kple nusrɔ̃ɖoɖo le Togo",
    },
    engagement: "16+ likes",
  },
    {
    title: {
      en: "Binance Campus Ambassador Lead - Blockchain Education",
      fr: "Lead Ambassadeur Campus Binance - Éducation Blockchain",
      ewe: "Binance Campus Ambassador Kplɔla - Blockchain Nusrɔ̃ɖoɖo",
    },
    href: "https://www.linkedin.com/posts/starlabman_web3lagos2025-web3-blockchain-activity-7364271111653457921-7eJF?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
    description: {
      en: "Increasing blockchain adoption through education and awareness in Togo",
      fr: "Ce post retrace le parcours inspirant de Laboré Agbétsiassi, qui a quitté son emploi pour se consacrer pleinement au Web3. Il y partage ses réalisations dans l'écosystème africain, notamment à travers Chaapa Ride, Africa Blockchain Community, ETHAfrique et OrgaAfrica.",
      ewe: "Blockchain ƒe gbɔgblɔ kple nusrɔ̃ɖoɖo le Togo",
    },
    engagement: "44+ likes",
  },
    {
    title: {
      en: "Binance Campus Ambassador Lead - Blockchain Education",
      fr: "Lead Ambassadeur Campus Binance - Éducation Blockchain",
      ewe: "Binance Campus Ambassador Kplɔla - Blockchain Nusrɔ̃ɖoɖo",
    },
    href: "https://www.linkedin.com/posts/starlabman_avalanche-facultydevelopment-blockchaineducation-ugcPost-7359306650668720128-dJxb?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
    description: {
      en: "Avalanche Faculty Development Program – Session III Complete!  An engaging and insightful session exploring blockchain & AI synergies, real classroom applications, and hands-on use of Avalanche tools like AvaCloud. Our global faculty community is growing stronger and more inspired!",
      fr: "Le programme de développement du corps professoral d’Avalanche – Session III est terminé !  Une session captivante et enrichissante, explorant les synergies entre blockchain et IA, les applications concrètes en classe, et les outils Avalanche comme AvaCloud. La communauté éducative mondiale en ressort plus forte et inspirée !",
      ewe: "Avalanche ƒe nuɖoɖoƒeɖe ɖoɖoɖo me – ƒe sesion ƒe etɔ̃lia le agbe!  Wòɖoɖo nye nyateƒe kple nunana si le yame! Wòkplɔ blockchain kple AI ƒe dɔwɔnuwo, ɖoɖo ɖe nuɖoɖoƒe me, eye wòkpɔ AvaCloud kple Avalanche ƒe nusi le agble be yewoƒe ɖoɖo katã ɖe nunɔlawo me ƒe nunana le egbe!",
    },
    engagement: "49+ likes",
  },
    {
    title: {
      en: "Binance Campus Ambassador Lead - Blockchain Education",
      fr: "Lead Ambassadeur Campus Binance - Éducation Blockchain",
      ewe: "Binance Campus Ambassador Kplɔla - Blockchain Nusrɔ̃ɖoɖo",
    },
    href: "https://www.linkedin.com/posts/starlabman_ethafrique-ethereum10-web3africa-ugcPost-7357855435594301440-v80H?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
    description: {
  en: "ETHAfrique Lomé brought together Web3 pioneers, proving that the blockchain revolution has a home in Africa.",
  fr: "ETHAfrique Lomé a réuni les pionniers du Web3, prouvant que la révolution blockchain a trouvé sa place en Afrique.",
  ewe: "ETHAfrique Lomé ƒe ɖoɖowo katã ɖe ŋutikɔkɔe me, eye wòɖo be blockchain ƒe xexlẽ ƒe afima le Afrika.",
},
    engagement: "52+ likes",
  },
    {
    title: {
      en: "Binance Campus Ambassador Lead - Blockchain Education",
      fr: "Lead Ambassadeur Campus Binance - Éducation Blockchain",
      ewe: "Binance Campus Ambassador Kplɔla - Blockchain Nusrɔ̃ɖoɖo",
    },
    href: "https://www.linkedin.com/posts/africa-blockchain-community_ethafrique2025-blockchainafrica-ethereumafrique-activity-7357159108996644865-jFiu?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
    description: {
  en: "ETHAFRIQUE 2025 will explore how Ethereum can empower Africa through decentralization and innovation.",
  fr: "ETHAFRIQUE 2025 explorera comment Ethereum peut autonomiser l’Afrique grâce à la décentralisation et à l’innovation.",
  ewe: "ETHAFRIQUE 2025 le be yewoɖo ŋu ɖe ŋutikɔkɔe kple nudɔla ƒe ŋu nyuie na Afrika ɖe Ethereum me.",
},
    engagement: "18+ likes",
  },
    {
    title: {
      en: "Binance Campus Ambassador Lead - Blockchain Education",
      fr: "Lead Ambassadeur Campus Binance - Éducation Blockchain",
      ewe: "Binance Campus Ambassador Kplɔla - Blockchain Nusrɔ̃ɖoɖo",
    },
    href: "https://www.linkedin.com/posts/starlabman_ethereum10years-escen-web3africa-ugcPost-7356710759961112576-o9au?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
description: {
  en: "Lomé celebrated Ethereum's 10th anniversary with a full Web3 bootcamp at ESCEN, exploring smart contracts, NFTs, and decentralized tools.",
  fr: "Lomé a célébré les 10 ans d’Ethereum avec un bootcamp Web3 complet à l’ESCEN, explorant les smart contracts, les NFT et les outils décentralisés.",
  ewe: "Lomé do Ethereum ƒe 10 me ɖoɖo kple Web3 gbɔgbɔ me le ESCEN, eye woyina smart contract, NFT kple decentralization gome ŋuɖɔɖɔwo.",
}
,
    engagement: "58+ likes",
  },
    {
    title: {
      en: "Binance Campus Ambassador Lead - Blockchain Education",
      fr: "Lead Ambassadeur Campus Binance - Éducation Blockchain",
      ewe: "Binance Campus Ambassador Kplɔla - Blockchain Nusrɔ̃ɖoɖo",
    },
    href: "https://www.linkedin.com/posts/bassim-sw%C3%A9-hugues-bamassi-a2b783211_confaezrenceethafrica-pitch-ugcPost-7356653596374880256-cs6M?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
   description: {
  en: "Encouraging tech enthusiasts to attend ETHAFRIQUE 2025, where Bassim will speak about the art of pitching in the Web3 space.",
  fr: "Encouragement aux passionnés de tech à participer à ETHAFRIQUE 2025, où Bassim interviendra sur l'art du pitch dans l’univers Web3.",
  ewe: "Bassim le dɔwɔɖowo na tech gbɔbɔƒe ame be wogblɔ na ETHAFRIQUE 2025 me le pitch dzi le Web3 dome.",
},
    engagement: "38+ likes",
  },
    {
    title: {
      en: "Binance Campus Ambassador Lead - Blockchain Education",
      fr: "Lead Ambassadeur Campus Binance - Éducation Blockchain",
      ewe: "Binance Campus Ambassador Kplɔla - Blockchain Nusrɔ̃ɖoɖo",
    },
    href: "https://www.linkedin.com/posts/starlabman_official-ethereum-10-year-nft-mint-yours-activity-7356295718992568321-Bn1z?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
    description: {
  en: "Celebrate Ethereum’s 10th anniversary by minting the official NFT — a symbolic time capsule of the Web3 journey.",
  fr: "Célébrez les 10 ans d’Ethereum en frappant le NFT officiel — une capsule temporelle symbolique de l’aventure Web3.",
  ewe: "To wòwɔ Ethereum ƒe 10 ƒe nɔvia, mint NFT si wòli — nyateƒe si le Web3 dzikpɔkpɔ me ɖe afima.",
},
    engagement: "15+ likes",
  },
    {
    title: {
      en: "Binance Campus Ambassador Lead - Blockchain Education",
      fr: "Lead Ambassadeur Campus Binance - Éducation Blockchain",
      ewe: "Binance Campus Ambassador Kplɔla - Blockchain Nusrɔ̃ɖoɖo",
    },
    href: "https://www.linkedin.com/posts/starlabman_ethafrique-togototheworld-blockchainafrica-ugcPost-7356225152180744192-W8nw?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
    description: {
      en: "Increasing blockchain adoption through education and awareness in Togo",
      fr: "Augmenter l'adoption de la blockchain par l'éducation et la sensibilisation au Togo",
      ewe: "Blockchain ƒe gbɔgblɔ kple nusrɔ̃ɖoɖo le Togo",
    },
    engagement: "32+ likes",
  },
    {
    title: {
      en: "Binance Campus Ambassador Lead - Blockchain Education",
      fr: "Lead Ambassadeur Campus Binance - Éducation Blockchain",
      ewe: "Binance Campus Ambassador Kplɔla - Blockchain Nusrɔ̃ɖoɖo",
    },
    href: "https://www.linkedin.com/posts/africa-blockchain-community_ethereum10years-blockchainafrica-web3-activity-7355959540485390336-H1pl?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
   description: {
  en: "Lomé celebrates 10 years of Ethereum with a full-day bootcamp exploring blockchain, smart contracts, and the decentralized future.",
  fr: "Lomé célèbre les 10 ans d’Ethereum avec un bootcamp d’une journée sur la blockchain, les smart contracts et l’avenir décentralisé.",
  ewe: "Lomé wɔ Ethereum ƒe 10 ɣeyiɣi kple ɣleti bootcamp si gblɔ nye blockchain, smart contract kple decentralized ɖaseɖe.",
},
    engagement: "11+ likes",
  },
    {
    title: {
      en: "Binance Campus Ambassador Lead - Blockchain Education",
      fr: "Lead Ambassadeur Campus Binance - Éducation Blockchain",
      ewe: "Binance Campus Ambassador Kplɔla - Blockchain Nusrɔ̃ɖoɖo",
    },
    href:"https://www.linkedin.com/posts/starlabman_ethereum10years-lomeblockchain-web3africa-ugcPost-7355667573163622404-3S1H?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
   description: {
  en: "Lomé celebrates 10 years of Ethereum with a full-day bootcamp exploring blockchain, smart contracts, and the decentralized future.",
  fr: "Lomé célèbre les 10 ans d’Ethereum avec un bootcamp d’une journée sur la blockchain, les smart contracts et l’avenir décentralisé.",
  ewe: "Lomé wɔ Ethereum ƒe 10 ɣeyiɣi kple ɣleti bootcamp si gblɔ nye blockchain, smart contract kple decentralized ɖaseɖe.",
},
    engagement: "42+ likes",
  },
    {
    title: {
      en: "Binance Campus Ambassador Lead - Blockchain Education",
      fr: "Lead Ambassadeur Campus Binance - Éducation Blockchain",
      ewe: "Binance Campus Ambassador Kplɔla - Blockchain Nusrɔ̃ɖoɖo",
    },
    href: "https://www.linkedin.com/posts/ethafrique_ethafrique-web3africa-onlydust-ugcPost-7355560101472010241-FREu?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
   description: {
  en: "ETHAfrique Tour Calavi was unforgettable — a day full of learning, sharing, and ambition for African Web3!",
  fr: "Le ETHAfrique Tour Calavi fut inoubliable — une journée de découvertes, de partages et d’ambition pour le Web3 africain !",
  ewe: "ETHAfrique Tour Calavi nya dzi le mía gbɔ — ŋkeke ɖeka si le nuɖoɖo, nudɔla kple Web3 Africa ƒe gagbeme le eme!",
},
    engagement: "32+ likes",
  },
    {
    title: {
      en: "Binance Campus Ambassador Lead - Blockchain Education",
      fr: "Lead Ambassadeur Campus Binance - Éducation Blockchain",
      ewe: "Binance Campus Ambassador Kplɔla - Blockchain Nusrɔ̃ɖoɖo",
    },
    href: "https://www.linkedin.com/posts/starlabman_avalanche-facultydevelopmentprogram-ethereum10years-activity-7353374205452738562-Sr4u?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
    description: {
  en: "Exciting news! Laboré has been selected for the Avalanche Faculty Development Program 2025 — a great milestone in his Web3 journey and commitment to blockchain growth in Africa.",
  fr: "Excellente nouvelle ! Laboré a été sélectionné pour le programme de développement des enseignants Avalanche 2025 — une belle étape dans son parcours Web3 et son engagement pour la blockchain en Afrique.",
  ewe: "Amɛ ŋutɔ! Laboré wòle Avalanche ƒe ŋkɔŋlɔlawo katã me ɖe 2025 ƒe blibo me — nyateƒea le eŋu si le Web3 kple blockchain ŋu na Afrika.",
},
    engagement: "51+ likes",
  },
   {
  title: {
    en: "Binance Campus Ambassador Lead - Blockchain Education",
    fr: "Lead Ambassadeur Campus Binance - Éducation Blockchain",
    ewe: "Binance Campus Ambassador Kplɔla - Blockchain Nusrɔ̃ɖoɖo"
  },
  href: "https://www.linkedin.com/posts/starlabman_ethaccra-ethereum-web3africa-ugcPost-7371879095091097601-1E6F?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
   Description:{
  en: " Binance Campus Ambassador Lead – Blockchain Education\n🇹🇬 A new milestone for Togo in Web3!\n\nExciting news! Laboré has been selected for the Avalanche Faculty Development Program 2025 — a great milestone in his Web3 journey and commitment to blockchain growth in Africa.\n\n> “Opportunities aren’t waited for — they are created.” 🚀\n\n📢 This is just the beginning. Let’s keep pushing so that Togo stands strong on the global Web3 education map.\n\n❤️ 51+ likes and growing!",
    fr: " Lead Ambassadeur Campus Binance – Éducation Blockchain\n🇹🇬 Une nouvelle étape pour le Togo dans le Web3 !\n\nExcellente nouvelle ! Laboré a été sélectionné pour le programme de développement des enseignants Avalanche 2025 — une belle étape dans son parcours Web3 et son engagement pour la croissance de la blockchain en Afrique.\n\n> « Les opportunités ne s’attendent pas — elles se créent. » 🌟\n\n📢 Ce n’est que le début. Continuons à pousser pour que le Togo s’impose sur la carte mondiale de l’éducation Web3.\n\n❤️ 51+ likes et ça continue !",
    ewe: " Binance Campus Ambassador Kplɔla – Blockchain Nusrɔ̃ɖoɖo\n🇹🇬 Togo ƒe nyateƒea gbɔgblɔm na Web3!\n\nAmɛ ŋutɔ! Laboré wòle Avalanche ƒe ŋkɔŋlɔlawo katã me ɖe 2025 ƒe blibo me — nyateƒea le eŋu si le Web3 kple blockchain ŋu na Afrika.\n\n> “Ŋusẽwo meɖoa dzra le eme — womeɖoa le ŋgɔgbɔ o, womeƒoa gbã gbe.” ✨\n\n📢 Nye ƒe nuto ƒe dzeɖoɖo wòle eme. Míetsɔ̃ nyuie be Togo nàtsɔ gbɔ le Web3 nusrɔ̃ɖoɖo gbɔdzɔƒe dzidzɔme.\n\n❤️ 51+ likes eye le kpɔkpɔ!"
},
    engagement: "120+ likes"
},
{
  title: {
    en: "Speaking at Africa Fintech Summit 2025 - Accra, Ghana",
    fr: "Prise de parole au Africa Fintech Summit 2025 - Accra, Ghana",
    ewe: "Metsɔ ɖo gbe le Africa Fintech Summit 2025 - Accra, Ghana"
  },
  href: "https://www.linkedin.com/posts/starlabman_aftsaccra2025-fintech-africa-activity-7379193158137643010-ufmy?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
  description: {
    en: "Thrilled to be speaking at the Africa Fintech Summit 2025 in Accra 🇬🇭!\n\nWith SenChange, we:\n- Bridge the financial inclusion gap\n- Ensure full security & compliance\n- Accelerate digital finance adoption\n- Empower youth, SMEs, and the diaspora\n\nWith SenChange, finance in Africa becomes accessible, local, and sustainable.\n\n👉 Join us at #AFTSAccra2025 to co-build the future of payments!",
    fr: "Fier de prendre la parole au Africa Fintech Summit 2025 à Accra 🇬🇭 !\n\nAvec SenChange, nous :\n- Réduisons le fossé de l’inclusion financière\n- Garantissons la sécurité et la conformité\n- Accélérons l’adoption de la finance digitale\n- Donnons du pouvoir aux jeunes, aux PME et à la diaspora\n\nAvec SenChange, la finance en Afrique devient accessible, locale et durable.\n\n👉 Rejoignez-nous à #AFTSAccra2025 pour co-construire l’avenir des paiements !",
    ewe: "Mele dzidzɔ gbã be metsɔ ɖo gbe le Africa Fintech Summit 2025 le Accra 🇬🇭!\n\nKple SenChange, míe:\n- Tsɔ na dzidzɔ si le nuƒoƒo ƒe gɔme\n- Na dzidzɔ ƒe balẽ kple nuwuwu\n- Kpɔ na ɖeɖe le digital finance ƒe tsɔtsɔ\n- Dzidzɔ gbã na nyɔnuviwo, SMEs kple diaspora\n\nKple SenChange, ƒe dzidzɔ le Afrika le gbɔgbe, afisia, kple hameviwo.\n\n👉 Va kple mí le #AFTSAccra2025 be míakpɔ agbalẽ gbã na dzidzɔ ƒe ɖoɖo!",
  },
 
  engagement: "35 likes"
},
{
  title: "Bienvenue en Octobre – Africa Blockchain Community",
  href: "https://www.linkedin.com/posts/africa-blockchain-community_africablockchaincommunity-blockchainafrica-activity-7379099740405411840-Zw66?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
  description: "Un nouveau mois commence, rempli d’opportunités, d’innovations et de connexions. Chez Africa Blockchain Community, nous croyons en la force de la technologie blockchain pour transformer l’Afrique et bâtir un avenir plus inclusif. 💡\n\n👉 Ce mois-ci, engageons-nous à apprendre, partager et bâtir ensemble !\n🔗 Rejoignez la communauté, connectez-vous avec des passionnés et explorez de nouvelles possibilités.\n\n💙 Happy New Month, Welcome to October!",
  
  engagement: "8 likes"
},
{
  title: {
    en: "Introduction to Zero Knowledge (ZK) by Africa Blockchain Community",
    fr: "Introduction au Zero Knowledge (ZK) par Africa Blockchain Community",
    ewe: "Zero Knowledge (ZK) ƒe ŋkɔɖi le Africa Blockchain Community me"
  },
  href: "https://www.linkedin.com/posts/starlabman_zk-privacy-web3-activity-7376931888902516736-tSdq?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
  description: {
    en: " Excited to announce the launch of our ZK & Privacy Bootcamp with Dev3pack!\n\nZero Knowledge & Privacy are the future of Web3. This bootcamp is your chance to:\n- Learn from top mentors and professors in ZK\n- Prepare for Devconnect ARG & Invisible Garden Foundation\n- Keep building the Web3 ecosystem in Africa and beyond\n\nLet’s shape the future of privacy together. #ZK #Privacy #Web3 #ETHAfrique #Learning",
    fr: "Heureux d’annoncer le lancement de notre Bootcamp ZK & Privacy avec Dev3pack !\n\nLe Zero Knowledge et la confidentialité sont l’avenir du Web3. Ce bootcamp est une opportunité de :\n- Apprendre auprès des meilleurs mentors et professeurs en ZK\n- Se préparer pour Devconnect ARG & Invisible Garden Foundation\n- Continuer à construire l’écosystème Web3 en Afrique et ailleurs\n\nConstruisons ensemble l’avenir de la confidentialité. #ZK #Privacy #Web3 #ETHAfrique #Learning",
    ewe: " Dzidzɔ gbã be míele Bootcamp ZK kple Privacy kple Dev3pack!\n\nZero Knowledge kple Privacy nye Web3 ƒe ɖoɖo. Bootcamp sia nye:\n- Le agbalẽ kple mentorwo kple professorwo ƒe ŋkɔɖi le ZK me\n- Tɔ na Devconnect ARG kple Invisible Garden Foundation\n- Tɔ na Web3 ecosystem ƒe ɖoɖo le Afrika kple dzidzɔ me\n\nVa kple mí be míakpɔ agbalẽ gbã na privacy ƒe ɖoɖo. #ZK #Privacy #Web3 #ETHAfrique #Learning"
  },
    engagement: "35 likes"

},
{
  title: {
    en: "Celebrating 5 Years of BNB Chain ",
    fr: "Célébration des 5 ans de BNB Chain ",
    ewe: "BNB Chain ƒe 5 ƒe xexeme ƒe ƒeɖeɖe "
  },
  href: "https://www.linkedin.com/posts/starlabman_bnbchainturns5-ugcPost-7374155915102425088-roMt?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
  description: {
    en: "Celebrating 5 years of BNB Chain!\n\nIt’s not every day we witness such a milestone in Web3. Over the past 5 years, BNB Chain has grown into one of the strongest ecosystems — powered by users, developers, and contributors worldwide 🌍.\n\nGrateful to be part of this journey and community 🙌. Here’s to everything we’ve built together and the exciting future ahead!",
    fr: "Célébration des 5 ans de BNB Chain !\n\nCe n’est pas tous les jours qu’on assiste à une telle étape dans le Web3. En 5 ans, BNB Chain est devenu l’un des écosystèmes les plus solides — porté par les utilisateurs, développeurs et contributeurs du monde entier 🌍.\n\nReconnaissant de faire partie de cette aventure et de cette communauté 🙌. À tout ce que nous avons construit ensemble et à l’avenir prometteur qui nous attend !",
    ewe: "BNB Chain ƒe 5 ƒe xexeme ƒe ƒeɖeɖe!\n\nWeb3 me, milestone si wòle ɖe eme le eme me ɖe sia ɖe sia. Le 5 xexeme me, BNB Chain tso ɖe ecosystem si nye dzidzɔ kple kɔkɔe — le agbalẽ kple userwo, developerwo kple contributorwo le dzidzɔ me 🌍.\n\nMetsɔ dzidzɔ be meɖo ɖe journey kple community sia me 🙌. Va kple mí be míakpɔ agbalẽ gbã na nu si míwɔwɔ kple nu si le ɖoɖo me!"
  },
    engagement: "36 likes"

}



  
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
   {
   title: {
  en: "Selected for ETH Enugu Builder’s Residency – August 2025",
  fr: "Sélectionné pour la Résidence ETH Enugu – Août 2025",
  ewe: "Wòdzo ETH Enugu ƒe Dzidzɔƒe me – August 2025",
},
href: "https://www.linkedin.com/posts/starlabman_ethenugu-web3builder-blockchainafrica-ugcPost-7353021094800322560-QK8d?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
description: {
  en: "Bringing together Africa's top builders to collaborate, prototype, and launch impactful blockchain solutions during the ETH Enugu Residency.",
  fr: "Rassembler les meilleurs builders d’Afrique pour collaborer, prototyper et lancer des solutions blockchain percutantes lors de la résidence ETH Enugu.",
  ewe: "Wotsɔ Africa ƒe builders blibo katã ɖe nyateƒea me be woatrɔ asi, woakpɔ prototype kple blockchain ƒe ŋutinya ŋu wogblɔ anyigba le ETH Enugu ƒe dzidzɔƒe me.",
},
    engagement: "38+ likes",
  },
  {
title: {
  en: "Izichange joins ETHAfrique Sponsors – Lomé Edition",
  fr: "Izichange rejoint les sponsors d’ETHAfrique – Édition Lomé",
  ewe: "Izichange tso ETHAfrique ƒe sponsors me ɖe asi – Lomé ƒe kɔkɔe",
},
href: "https://www.linkedin.com/posts/ethafrique_ethafrique-izichange-cryptoafrica-activity-7350543299654352897-_l_3?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
description: {
  en: "IZICHANGE becomes an official sponsor of ETHAfrique Lomé, supporting Web3 and crypto adoption across Africa through a secure and inclusive exchange platform.",
  fr: "IZICHANGE devient sponsor officiel d’ETHAfrique Lomé, soutenant l’adoption du Web3 et de la crypto en Afrique via une plateforme d’échange sécurisée et inclusive.",
  ewe: "IZICHANGE ƒe sponsor gbã wòle ETHAfrique Lomé me, eye wotsɔ nyateƒe be wogblɔ Web3 kple crypto le Africa, ɖe afisiawo kple akpakpaviwo dome.",
},
    engagement: "32+ likes",
  },
    {
   title: {
  en: "ETHAfrique Meetup in Benin – Web3 Tour Hits Abomey-Calavi",
  fr: "ETHAfrique Meetup au Bénin – Le Tour Web3 passe par Abomey-Calavi",
  ewe: "ETHAfrique ƒe meetup le Benin – Web3 ƒe zã do Abomey-Calavi",
},
    href: "https://www.linkedin.com/posts/crypt-o-f%C3%A9minin_ethafriquetour-blockchainbenin-web3-activity-7348026547196362753-d2gP?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
   description: {
  en: "As part of the ETHAfrique 2025 tour, a meetup in Abomey-Calavi brought together the crypto community to explore Web3 opportunities and co-build Africa’s tech future.",
  fr: "Dans le cadre de la tournée ETHAfrique 2025, un meetup à Abomey-Calavi a réuni la communauté crypto pour explorer les opportunités Web3 et co-construire le futur tech de l’Afrique.",
  ewe: "ETHAfrique 2025 ƒe zã me, meetup si wòle Abomey-Calavi ƒe ŋkɔ me do go le crypto viɖeɖeawo kple Web3 ƒe ɖaseɖewo, eye wotsɔ asi kple wogblɔ Africa ƒe tech ƒe fiẽ.",
}
,
    engagement: "29+ likes",
  },
    {
   title: {
  en: "ETHAfrique – IRL Meetup in Cotonou, Benin",
  fr: "ETHAfrique – Rencontre en présentiel à Cotonou, Bénin",
  ewe: "ETHAfrique – Ɖeɖeɖe meetup le Cotonou, Benin",
},
    href: "https://www.linkedin.com/posts/starlabman_ethafrique-web3africa-onboardingweb3-activity-7347598959453921280-eSSq?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
   description: {
  en: "On July 12th in Cotonou, ETHAfrique hosted an impactful IRL meetup focused on learning, building, and changing lives through Web3.",
  fr: "Le 12 juillet à Cotonou, ETHAfrique a organisé une rencontre en présentiel axée sur l’apprentissage, la construction et l’impact social via le Web3.",
  ewe: "July 12 le Cotonou, ETHAfrique do go ƒe meetup si wòle nu wɔm kple Web3, gblɔɖi, eye wotsɔ asi ɖe agble dzi ƒe ŋkɔ.",
},
    engagement: "37+ likes",
  },
    {
   
title: {
  en: "ETHAfrique Kickstarts the Blockchain Revolution in Francophone Africa",
  fr: "ETHAfrique LANCE la révolution blockchain en Afrique francophone",
  ewe: "ETHAfrique do go Blockchain ƒe ƒosusɔ le Francophone Africa me",
},
href: "https://www.linkedin.com/posts/starlabman_ethafrique-web3africa-onboardingweb3-activity-7347598959453921280-eSSq?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
description: {
  en: "Session #1 of ETHAfrique tackled key challenges: low awareness, limited technical resources, and lack of local solutions. With passionate participants from across Francophone Africa, the revolution is underway!",
  fr: "La Session #1 d’ETHAfrique a relevé les défis de la sensibilisation, de l’accès aux ressources et du besoin de solutions locales. Une révolution lancée avec passion à travers toute l’Afriquefrancophone !",
  ewe: "ETHAfrique ƒe Session #1 ƒe nuɖuɖu la nye nyateƒe le ɖoɖo, teknikalɔlawo ƒe agbadada kple afrikagaŋu dziɖuɖu si wotsɔ ta. Ame siwo katã tso Francophone Africa va do go kple dɔwɔnu!",
},
    engagement: "42+ likes",
  },{
    title: {
  en: "ETHAfrique Tour Meetup Completed in Lomé",
  fr: "Mission accomplie pour le meetup ETHAfrique Tour à Lomé",
  ewe: "ETHAfrique Tour ƒe meetup le Lomé wɔwɔ",
},
href: "https://www.linkedin.com/posts/ethafrique_onlydust-ethafrique-web3africa-ugcPost-7344881211711926272-hcpI?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
description: {
  en: "Despite a last-minute venue change, the ETHAfrique meetup in Lomé was a true moment of sharing and strategy. Participants left with ideas, connections, and a stronger vision for open source in Francophone Africa.",
  fr: "Malgré un changement de lieu de dernière minute, le meetup ETHAfrique à Lomé a été un vrai moment de partage et de stratégie. Des idées, des connexions et une vision renforcée pour l’open source en Afrique francophone.",
  ewe: "Fi venue si wo katã ɖo eŋu le dzidzɔme la, ETHAfrique ƒe meetup le Lomé lɔlɔ̃ be ɖe nu vovovowo kple nuwuwuwowo. Ame katã va ɖo kple nuɖuɖu, gbɔgbɔ kple anyigba me open source ƒe agbe dzi lɔ̃lɔ̃tɔwo.",
},
    engagement: "23+ likes",
  },{
    title: {
  en: "From Web2 to Web3 – Open to New Opportunities",
  fr: "Du Web2 au Web3 – Ouvert à de nouvelles opportunités",
  ewe: "Web2 tso Web3 – Mele nyuie be menye nyaɖeɖea dzi",
},
href: "https://www.linkedin.com/posts/ethafrique_onlydust-ethafrique2025-ethafrique-activity-7341782016721317889-_gf4?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
description: {
  en: "Made the leap from Web2 to Web3! With tasks done and the foundation set, I'm now open to roles like Web3 Intern, Junior DevRel, or Community Lead.",
  fr: "Passage réussi du Web2 au Web3 ! Les bases sont posées, les tâches accomplies, et je suis désormais ouvert à des rôles comme Web3 Intern, Junior DevRel ou Community Lead.",
  ewe: "Metsɔ Web2 va do Web3! Nu si le dzidzɔme le wòkpɔ ɖe asi, nye ɖe eme be meɖe agbalẽwo eye mekpɔ dzi be mate ŋu atsɔ nyuie le Web3 Intern, Junior DevRel kple Community Lead.",
},
    engagement: "17+ likes",
  },
    {
   title: {
  en: "ETHAfrique 2025 – First Ethereum Conference for Francophone Africa",
  fr: "ETHAfrique 2025 – Première Conférence Ethereum pour l'Afrique Francophone",
  ewe: "ETHAfrique 2025 – Ethereum ƒe Conference ƒe ŋutikɔkɔe le Francophone Africa me",
},
href: "https://www.linkedin.com/posts/starlabman/",
description: {
  en: "ETHAfrique 2025 is calling for partners, sponsors, and speakers for the first Ethereum-focused Web3 conference in Francophone Africa. Be part of the movement!",
  fr: "ETHAfrique 2025 recherche des partenaires, sponsors et intervenants pour la première conférence Web3 centrée sur Ethereum en Afrique francophone. Rejoignez le mouvement !",
  ewe: "ETHAfrique 2025 nya nu wòfɔm ɖe community partners, sponsors kple speakers be wòava ɖo Ethereum ƒe conference la le Afrika Francophone me. Tso ɖe asi na nu si le wò dzi!",
},
    engagement: "30+ likes",
  },
    
    {
    title:{
    en: "Binance Campus Ambassador Lead - Blockchain Education",
    fr: "Lead Ambassadeur Campus Binance - Éducation Blockchain",
    ewe: "Binance Campus Ambassador Kplɔla - Blockchain Nusrɔ̃ɖoɖo",
},
  href: "https://www.linkedin.com/posts/africa-blockchain-community_ethereum-ethafrique-blockchain-activity-7339586114707480576-sDb8?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
  description: {
    en: "A LinkedIn post by Laboré Kodjo AGBETSIASSI announcing ETHAfrique 1.0, a blockchain-focused event organized by the Africa Blockchain Community. The post invites developers, designers, students, and enthusiasts to participate in shaping the future of Ethereum in Africa.",
    fr: "Un post LinkedIn de Laboré Kodjo AGBETSIASSI annonçant ETHAfrique 1.0, un événement dédié à la blockchain organisé par Africa Blockchain Community. Le post invite les développeurs, designers, étudiants et passionnés à participer à la construction du futur d’Ethereum en Afrique.",
    ewe: "LinkedIn post si Laboré Kodjo AGBETSIASSI le wòtsɔ ETHAfrique 1.0 ƒe event si wòle Africa Blockchain Community ƒe ta. Wòle be developers, designers, students kple blockchain lovers nyɔ nu ɖe Ethereum ƒe future le Afrika me."
},
    engagement: "32+ likes",
  },
    {
  title: {
    en: "Binance Campus Ambassador Lead - Blockchain Education",
    fr: "Lead Ambassadeur Campus Binance - Éducation Blockchain",
    ewe: "Binance Campus Ambassador Kplɔla - Blockchain Nusrɔ̃ɖoɖo"
},
  href: "https://www.linkedin.com/posts/duclair-fopa_ethafrique-preuveszeroknowledge-blockchain-ugcPost-7347344771859771395-lCAJ?utm_source=share&utm_medium=member_android&rcm=ACoAAEfiB34BEhPCQSNbUgzAxPlEmeM9sGHDJd0",
  description: {
    en: "A social media post announcing the successful launch of ETHAfrique and its impact on blockchain development in Francophone Africa. It highlights key challenges such as lack of understanding, limited resources, and infrastructure gaps, while celebrating achievements like educating over 200 participants, verifying knowledge through ZK Proofs, and building a community across Togo, Benin, Ivory Coast, and Cameroon.",
    fr: "Un post sur les réseaux sociaux annonçant le lancement réussi d’ETHAfrique et son impact sur le développement de la blockchain en Afrique francophone. Il met en lumière les défis tels que le manque de compréhension, l’accès limité aux ressources et les lacunes en infrastructures, tout en célébrant les réussites: plus de 200 participants formés, vérification des acquis via les ZK Proofs, et création d’une communauté entre le Togo, le Bénin, la Côte d’Ivoire et le Cameroun.",
    ewe: "Post si wòle be ETHAfrique ƒe launch la le Afrika Francophone me le blockchain development ƒe ta. Wòɖe nu si le dzidzɔe me be: blockchain gbɔgblɔ le mɔ, resources ƒe gbɔna, infrastructure ƒe ɖeɖeɖe. Wòɖe nu si wòtsɔ le dzidzɔe me be: 200+ participants le blockchain nusrɔ̃ɖoɖo, ZK Proofs ƒe knowledge verification, kple community ƒe creation le Togo, Benin, Côte d’Ivoire kple Cameroon."
},
    engagement: "42+ likes",
  },
   {
  title: {
    en: "ETHAfrique launches the blockchain revolution in Francophone Africa!",
    fr: "ETHAfrique lance la révolution blockchain en Afrique francophone !",
    ewe: "ETHAfrique dze blockchain revolusɔn ɖe Afrika Francophone me!"
  },
  href: "https://www.linkedin.com/posts/starlabman/",
  description: {
    en: "ETHAfrique tackles key challenges: lack of awareness, limited technical access, and need for local solutions. Session #1 featured ZK Proofs, passionate participation from across Africa, and a clear blockchain vision.",
    fr: "ETHAfrique relève les défis : manque de sensibilisation, accès technique limité, besoin de solutions locales. La Session #1 a marqué les esprits avec les ZK Proofs, une forte participation africaine et une vision claire pour la blockchain.",
    ewe: "ETHAfrique le ameawo ƒe doɖo me wògblɔ be: agbaleɖeɖe meɖea nu ɖe blockchain me, technique ɖokui meɖea nu, kple nu siwo ɖe Afrika dzi fefewɔ. Session #1 dze dzi le ZK Proofs, nyateƒeviwo ƒe dɔwɔwɔ kple blockchain ƒe gɔmedzedzea."
  },
    engagement: "150+ likes",
  },
   {
  title: {
    en: "Global Pizza Party: Web3, blockchain and community vibes in Togo 🇹🇬",
    fr: "Global Pizza Party : Web3, blockchain et ambiance communautaire au Togo 🇹🇬",
    ewe: "Global Pizza Party: Web3, blockchain kple community vibes le Togo 🇹🇬"
  },
  href: "https://www.linkedin.com/posts/africa-blockchain-community/",
  description: {
    en: "On May 22, 2025, PizzaDAO brought the Global Pizza Party to Togo for an unforgettable evening mixing decentralization, culture, and pizza. From free pizzas to Web3 discussions and inspiring encounters, the event celebrated blockchain beyond code — as human connections and memories.",
    fr: "Le 22 mai 2025, PizzaDAO a organisé la Global Pizza Party au Togo pour une soirée inoubliable mêlant décentralisation, culture et pizza. Entre rires, pizzas gratuites, discussions Web3 et rencontres inspirantes, l’événement a montré que la blockchain va bien au-delà du code : ce sont aussi des liens humains et des souvenirs.",
    ewe: "May 22, 2025 la, PizzaDAO va dze Global Pizza Party va Togo me. Nɔƒe siawo kple Web3 gbɔgblɔ, kpɔkpɔwo kple nyateƒewo ɖe pizza me wotia dzi. Event la gblɔe be blockchain menye code koe o, ke nye ameawo ƒe dzikpɔkpɔ kple nu nyuieawo."
  },
    engagement: "150+ likes",
  },
   {
  title: {
    en: "Trust Wallet Community Meetup in Lomé: Web3 adoption and crypto security in focus 🇹🇬",
    fr: "Community Meetup Trust Wallet à Lomé : adoption du Web3 et sécurité crypto à l’honneur 🇹🇬",
    ewe: "Trust Wallet Community Meetup le Lomé: Web3 kple crypto ƒe gbugbɔ le dziƒo me 🇹🇬"
  },
  href: "https://www.linkedin.com/posts/africa-blockchain-community/",
  description: {
    en: "On May 31, 2025, Lomé hosted the Trust Wallet Community Meetup, bringing together blockchain enthusiasts to explore decentralization, self-custody, and crypto security. The event strengthened community ties and highlighted Africa’s role in the Web3 movement.",
    fr: "Le 31 mai 2025, Lomé a accueilli le Trust Wallet Community Meetup, réunissant les passionnés de blockchain autour de la décentralisation, du self-custody et de la sécurité crypto. L’événement a renforcé les liens communautaires et mis en avant le rôle de l’Afrique dans le mouvement Web3.",
    ewe: "May 31, 2025, Lomé va dze Trust Wallet Community Meetup. Event la kplɔ ame siwo le blockchain dzi kple decentralization, self-custody kple crypto gbugbɔwo. Eƒe gɔmedzedzea nye be event la dze community ɖo kple Afrika ƒe dziƒo le Web3 me."
  },
    engagement: "150+ likes",
  },
    {
    title: {
      en: "DevRel Spotlight: Clean Code, Smart Sync, and Farewell to a Legacy Project ",
      fr: "Lumière sur le DevRel : code propre, synchronisation intelligente et adieu à un projet marquant ",
      ewe: "DevRel ƒe xexeme: Code si le dzɔdzɔ me, sync si le nu vɔ̃ me kple adieu na project si wòle agbe dzi 🇹",
    },
    href: "https://www.linkedin.com/posts/starlabman/",
    description: {
      en: "On June 2, 2025, Laboré Kodjo AGBETSIASSI shared a behind-the-scenes look at a multi-stack development journey: Next.js for frontend, Laravel for backend, Firebase for database, and Python scripts for seamless API sync. With a commitment to clarity and structure, he bid farewell to a project built with heart and precision. As the first DevRel from Francophone Africa, his post reflects pride, discipline, and a drive to elevate developer culture.",
      fr: "Le 2 juin 2025, Laboré Kodjo AGBETSIASSI a dévoilé les coulisses d’un projet technique ambitieux : Next.js en frontend, Laravel en backend, Firebase pour la base de données, et des scripts Python pour une synchronisation fluide avec l’API. Fidèle à son approche rigoureuse, il fait ses adieux à un projet construit avec passion et méthode. Premier DevRel d’Afrique francophone, son message incarne la fierté, la clarté et l’engagement pour une culture développeur forte.",
      ewe: "June 2, 2025, Laboré Kodjo AGBETSIASSI dze nuɖuɖudzra ƒe project si wòle tech dzi: Next.js le frontend me, Laravel le backend me, Firebase le database me kple Python script si wòtsɔ na API sync. Wòɖo adieu na project si wòle xɔxɔ kple dzidzɔ. Wònyɛ Francophone Africa ƒe DevRel ƒe dzidzɔtɔ gbã, wò post la nye xexeme kple gɔmedzedzea na developer culture.",
    },
    engagement: "150+ likes",
  },
    {
    title: {
      en: "3rd Year Partnership: Trust Wallet & Africa Blockchain Community Unite for Crypto Education ",
      fr: "3e année de partenariat : Trust Wallet et Africa Blockchain Community unis pour l’éducation crypto ",
      ewe: "Trust Wallet kple Africa Blockchain Community ƒe partnership ƒe ɣeyiɣi ɣetɔ̃: Crypto ƒe nuɖuɖudzra le dzɔdzɔ me ",
    },
    href: "https://www.linkedin.com/posts/starlabman/",
    description: {
      en: "On May 31, 2025, Africa Blockchain Community and Trust Wallet mark their third consecutive year of collaboration with a regional Twitter Space event. Featuring voices from Nigeria, Benin, and Togo, the meetup explores crypto adoption, wallet security, and peer-to-peer exchanges. The mission: accelerate blockchain education across Africa and empower users through self-custody.",
      fr: "Le 31 mai 2025, Africa Blockchain Community et Trust Wallet célèbrent leur troisième année consécutive de partenariat avec un événement régional sur Twitter Space. Avec des intervenants du Nigeria, du Bénin et du Togo, le meetup aborde l’adoption de la crypto, la sécurité des portefeuilles et les échanges P2P. Objectif : accélérer l’éducation blockchain en Afrique et renforcer l’autonomie des utilisateurs.",
      ewe: "May 31, 2025, Africa Blockchain Community kple Trust Wallet dze ɣeyiɣi ɣetɔ̃ ƒe partnership le Twitter Space me. Nigeria, Benin kple Togo ƒe ameawo katã be wòɖo nuɖuɖudzra le crypto adoption, wallet gbugbɔ kple P2P exchange me. Mission la nye be wòɖo blockchain education le Afrika me kple wòtsɔ self-custody na ameawo.",
    },
    engagement: "150+ likes",
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
    fr: "Laboré Agbetsiassi – Expert Web3 & Blockchain",
    en: "Laboré Agbetsiassi – Web3 & Blockchain Expert",
    ewe: "Laboré Agbetsiassi – Web3 & Blockchain Nusrɔ̃la"
  },
  description: {
    fr: "Développeur Blockchain et ambassadeur Web3, Laboré guide l’adoption de solutions innovantes pour dApps, NFT et projets numériques. Orateur et formateur, il partage son expertise pour accompagner communautés et développeurs Web3 en Afrique.",
    en: "Blockchain developer and Web3 ambassador, Laboré drives the adoption of innovative solutions for dApps, NFTs, and digital projects. As a speaker and trainer, he shares his expertise to support communities and Web3 developers in Africa.",
    ewe: "Blockchain nusrɔ̃ɖoɖo kple Web3 ambassador, Laboré wui nɔviwo kple dApps, NFT kple digital projects me srɔ̃ gake wòkpɔ wòɖoɖowo kple Web3 nusrɔ̃lawo na Afrika."
  },
  category: {
    fr:"Conférence",

    en: "Speaking",
    ewe: "Nuƒoƒo"


    },
    imageUrl: "/kodjo-labore-profile.png",
    date: "2024",
  },
  {
    id: 2,
    title: {
      fr: "Conférence Web3 - Présentation Principale",
      en: "Web3 Conference Keynote",
      ewe: "Web3 Nuƒoƒo - Nuƒoƒo Gã",
    },
    description: {
      fr: "Présentation principale sur l'adoption Web3 dans les marchés émergents",
      en: "Keynote presentation on Web3 adoption in emerging markets",
      ewe: "Nuƒoƒo gã le Web3 ɖoɖo le nuƒoƒo yeyewo me",
    },
    category: {
      fr:"Conférence",

      en: "Speaking",
      ewe: "Nuƒoƒo",
    },
    imageUrl: "/AfricanStartupsInWeb3Space.jpg",
    date: "2024",
  },
  {
    id: 3,
    title: {
      fr: "Formation Atelier Ethereum",
      en: "Ethereum Workshop Training",
      ewe: "Ethereum Dɔwɔƒe Nusrɔ̃ɖoɖo",
    },
    description: {
      fr: "Atelier pratique de développement Ethereum pour les étudiants universitaires",
      en: "Hands-on Ethereum development workshop for university students",
      ewe: "Ethereum dɔwɔƒe nusrɔ̃ɖoɖo na sukulawo",
    },
    category: {
      fr:"Conférence",

      en: "Speaking",
      ewe: "Nuƒoƒo",
    },
    imageUrl: "/africaProductKeynote.jpeg",
    date: "2024",
  },
  {
    id: 4,
    title: {
      fr: "Sommet Blockchain Afrique",
      en: "Africa Blockchain Summit",
      ewe: "Afrika Blockchain Nuƒoƒo Gã",
    },
    description: {
      fr: "Discussion de panel sur l'infrastructure blockchain en Afrique",
      en: "Panel discussion on blockchain infrastructure in Africa",
      ewe: "Blockchain infrastructure nuƒoƒo le Afrika me",
    },
    category: {
      fr:"Conférence",

      en: "Speaking",
      ewe: "Nuƒoƒo",
    },
    imageUrl: "/AfricaProductKeynote2024.jpeg",
    date: "2024",
  },
  {
    id: 5,
    title: {
      fr: "Lancement Protocole DeFi",
      en: "DeFi Protocol Launch",
      ewe: "DeFi Protocol ƒe Dɔwɔwɔ",
    },
    description: {
      fr: "Intervention lors du lancement d'un protocole DeFi majeur",
      en: "Speaking at major DeFi protocol launch event",
      ewe: "DeFi protocol gã ƒe dɔwɔwɔ nuƒoƒo",
    },
    category: { 
      fr:"Conférence",
      en: "Speaking",
      ewe: "Nuƒoƒo",
    },
    imageUrl: "/Ama2024.jpg",
    date: "2024",
  },
  {
    id: 6,
    title: {
      fr: "Présentation Startup Web3",
      en: "Web3 Startup Pitch",
      ewe: "Web3 Startup ƒe Nuƒoƒo",
    },
    description: {
      fr: "Présentation d'idées de startups Web3 aux investisseurs",
      en: "Presenting Web3 startup ideas to investors",
      ewe: "Web3 startup susuwo nuƒoƒo na investorwo",
    },
    category: {
      fr: "Conférence",

      en: "Speaking",
      ewe: "Nuƒoƒo",
    },
    imageUrl: "/Annivairesaire.png",
    date: "2024",
  },
  {
    id: 7,
    title: {
      fr: "Conférence Sécurité Blockchain",
      en: "Blockchain Security Conference",
      ewe: "Blockchain Kɔkɔe Nuƒoƒo",
    },
    description: {
      fr: "Intervention sur les meilleures pratiques de sécurité des smart contracts",
      en: "Speaking about smart contract security best practices",
      ewe: "Smart contract kɔkɔe nuƒoƒo",
    },
    category: {
      fr:"Conférence",

      en: "Speaking",
      ewe: "Nuƒoƒo",
    },
    imageUrl: "/binanceKara.jpeg",
    date: "2024",
  },
  {
    id: 8,
    title: {
      fr: "Atelier Marketplace NFT",
      en: "NFT Marketplace Workshop",
      ewe: "NFT Marketplace Dɔwɔƒe",
    },
    description: {
      fr: "Construction de marketplaces NFT à partir de zéro",
      en: "Building NFT marketplaces from scratch",
      ewe: "NFT marketplace wɔwɔ le susu me",
    },
    category: {
      fr: "Conférence",

      en: "Speaking",
      ewe: "Nuƒoƒo",
    },
    imageUrl: "/BinanceWeb3.jpeg",
    date: "2024",
  },
 {
  id: 9,
  title: "DeFi Masterclass 2024",
  description: "Session avancée sur les stratégies DeFi, incluant le yield farming, la gestion des risques et les protocoles décentralisés les plus utilisés.",
  category: "Education",
  imageUrl: "/webTroisBridge.jpg",
  date: "2024",
},
{
  id: 10,
  title: "BitcoinD 2024 – Smart Contract Workshop",
  description: "Atelier pratique dédié à la construction de smart contracts sécurisés en Solidity, présenté dans le cadre de l’événement BitcoinD 2024.",
  category: "Education",
  imageUrl: "/BitcoinD2024.jpeg",
  date: "2024",
},
{
  id: 11,
  title: "Bitcoin Education & Freedom Meetup",
  description: "Rencontre communautaire réunissant plus de 300 passionnés de blockchain pour échanger sur l’éducation, la liberté financière et l’adoption de Bitcoin.",
  category: "Education",
  imageUrl: "/BitcoinEducationFreedom.jpg",
  date: "2024",
},
{
  id: 12,
  title: "Blockchain pour les Applications Web",
  description: "Programme ambassadeur Web3.js : initiation et accompagnement des développeurs pour intégrer la blockchain dans leurs applications web.",
  category: "Education",
  imageUrl: "/blockchainPourSonApplicationWeb.png",
  date: "2024",
},
{
  id: 13,
  title: "Build to Web3 – Crypto Trading & Development",
  description: "Formation complète sur les bases du trading crypto et sur le développement Web3, destinée aux débutants et développeurs en transition.",
  category: "Education",
  imageUrl: "/buildToDeveloppementWeb3.png",
  date: "2024",
},
{
  id: 14,
  title: "Capsule IT – Blockchain Bootcamp",
  description: "Bootcamp intensif de 12 semaines proposé par Capsule IT pour former les développeurs à la blockchain, aux smart contracts et aux DApps.",
  category: "Conférence",
  imageUrl: "/capsuleIT.jpeg",
  date: "2024",
},

{
  id: 15,
  title: "Celebrating 10 Years of Ethereum",
  description: "Un événement marquant retraçant l’évolution d’Ethereum en 10 ans : son impact sur l’écosystème Web3 et les opportunités pour les développeurs souhaitant faire la transition vers la blockchain.",
  category: "Education",
  imageUrl: "/Celebrating10YearsOfEtherum.jpeg",
  date: "2025",
},
{
  id: 16,
  title: "Celo 2025 – DApp Development Workshop",
  description: "Atelier pratique sur le développement d’applications décentralisées (DApps) avec React et Web3, présenté dans le cadre de l’initiative Celo 2025.",
  category: "Conférence",
  imageUrl: "/celo2025.jpg",
  date: "2024",
},
{
  id: 17,
  title: "Celo 25 – Crypto Education Seminar",
  description: "Séminaire éducatif dédié aux fondamentaux des cryptomonnaies et à l’introduction à l’écosystème Celo, destiné aux débutants et curieux du Web3.",
  category: "Community",
  imageUrl: "/celo-25.jpg",
  date: "2024",
},
{
  id: 18,
  title: "CMX Connect – Hackathon Mentoring",
  description: "Session de mentoring lors d’un hackathon blockchain, organisée avec CMX Connect pour accompagner les développeurs dans leurs projets innovants.",
  category: "Community",
  imageUrl: "/cmxConnect.jpeg",
  date: "2024",
},
{
  id: 19,
  title: "ETHAfrique 2025 – FinTech Blockchain Panel",
  description: "Participation à un panel de haut niveau durant la conférence ETHAfrique 2025, abordant l’impact de la blockchain dans les services financiers et la régulation en Afrique.",
  category: "Community",
  imageUrl: "/conferenceEthAfrique2025.jpeg",
  date: "2025",
},
{
  id: 20,
  title: "University Guest Lecture on Blockchain",
  description: "Conférence universitaire portant sur les bases de la blockchain, ses cas d’usage et ses perspectives de recherche, suivie d’un échange avec les étudiants.",
  category: "Conférence",
  imageUrl: "/congratulation.png",
  date: "2025",
},
{
  id: 21,
  title: "Daytona Developer Club – ESGIS Tour",
  description: "Tour technologique du Daytona Developer Club à l’ESGIS 2025 : une rencontre communautaire rassemblant étudiants, développeurs et passionnés de blockchain.",
  category: "Community",
  imageUrl: "/daytonaDeveloperclubTourESGIS2025.jpg",
  date: "2025",
},
{
  id: 22,
  title: "Daytona Tour Lomé – Web3 Women in Tech",
  description: "Événement organisé à Lomé dans le cadre du Daytona Tour 2025, mettant en avant le rôle des femmes entrepreneures et innovatrices dans l’écosystème Web3.",
  category: "Community",
  imageUrl: "/daytonaTourLome2025.jpeg",
  date: "2025",
},

{
  id: 23,
  title: "Blockchain Startup Incubator",
  description: "Mentoring and guiding early-stage blockchain startups through an accelerator program.",
  category: "Education",
  imageUrl: "/Dev_Fest2024.jpg",
  date: "2024"
},
{
  id: 24,
  title: "Crypto Investment Club",
  description: "Leading strategic discussions and reviewing crypto investment portfolios with community members.",
  category: "Community",
  imageUrl: "/FestDev2024.jpg",
  date: "2024"
},
{
  id: 25,
  title: "ETHAfrique Conference",
  description: "Co-organized and participated in one of Africa’s largest Ethereum-focused conferences.",
  category: "Events",
  imageUrl: "/DiscoveringOrgaAfrica.jpg",
  date: "2024"
},
{
  id: 26,
  title: "Binance Blockchain Week",
  description: "Represented as a campus ambassador and engaged in Web3 activities during Binance Blockchain Week.",
  category: "Events",
  imageUrl: "/DisruptionInProgress2024.jpg",
  date: "2024"
},
{
  id: 27,
  title: "Web3 Developer Conference",
  description: "Organized and contributed to the largest Web3 developer conference in West Africa.",
  category: "Events",
  imageUrl: "/EmpoweringAfricasTechlandscape.jpg",
  date: "2024"
},
{
  id: 28,
  title: "Blockchain Innovation Summit 10 Years",
  description: "Delivered a keynote at the special 10-year anniversary Blockchain Innovation Summit.",
  category: "Events",
  imageUrl: "/EthAfricaConference10ans.jpg",
  date: "2025"
},
{
  id: 29,
  title: "ETHAfrica Conference 2025",
  description: "Spoke on Ethereum’s ecosystem growth and Africa’s role in Web3 adoption.",
  category: "Events",
  imageUrl: "/EthAfricaConference2025.jpeg",
  date: "2025"
},
{
  id: 30,
  title: "Ethiopia Blockchain Forum",
  description: "Keynote address at Ethiopia’s national blockchain forum, engaging policymakers and developers.",
  category: "Events",
  imageUrl: "/Ethiopia.jpg",
  date: "2024"
},
{
  id: 31,
  title: "Ethiopia Blockchain Developers Meetup",
  description: "Interactive session with developers and entrepreneurs in Ethiopia on Web3 innovation.",
  category: "Events",
  imageUrl: "/Ethiopia3.jpg",
  date: "2024"
},

   {
  id: 32,
  title: "DevFest 2024 Participation",
  description: "Speaker session on blockchain adoption and Web3 opportunities during DevFest 2024.",
  category: "Events",
  imageUrl: "/FestDev2024.jpg",
  date: "2024"
},
{
  id: 33,
  title: "Blockchain Training Workshop",
  description: "Hands-on training workshop introducing participants to blockchain technology fundamentals.",
  category: "Events",
  imageUrl: "/formation2024.jpg",
  date: "2024"
},
{
  id: 34,
  title: "Certified Blockchain Formation",
  description: "Led a certified blockchain program, equipping learners with professional skills in Web3.",
  category: "Education",
  imageUrl: "/FormationCertifianteEnBlockchain2024.jpg",
  date: "2024"
},
{
  id: 35,
  title: "From Web2 to Web3 Developer",
  description: "Guided developers on transitioning from Web2 skills to Web3 dApp and blockchain development.",
  category: "Events",
  imageUrl: "/FromWeb2toWeb3Developer.jpg",
  date: "2025"
},
{
  id: 36,
  title: "Future of Developers Forum",
  description: "Panel discussion on the evolving role of developers in the blockchain-powered digital future.",
  category: "Events",
  imageUrl: "/futureOfDevelopers.jpg",
  date: "2025"
},
{
  id: 37,
  title: "Global Blockchain Gathering",
  description: "Keynote on global blockchain adoption and Africa’s leadership role in innovation.",
  category: "Events",
  imageUrl: "/G.jpeg",
  date: "2024"
},
{
  id: 38,
  title: "Global Pizza Party - Kara",
  description: "Community blockchain meetup and celebration during the Global Pizza Party in Kara.",
  category: "Events",
  imageUrl: "/globalpizzapartyKara2025.jpg",
  date: "2025"
},
{
  id: 39,
  title: "Global Pizza Party - Lomé",
  description: "Celebrating Bitcoin Pizza Day with developers, entrepreneurs, and blockchain enthusiasts in Lomé.",
  category: "Events",
  imageUrl: "/globalPizzaPartyLome2025.jpg",
  date: "2025"
},
{
  id: 40,
  title: "GTT Blockchain Conference",
  description: "Education and training session on blockchain solutions during the GTT conference.",
  category: "Education",
  imageUrl: "/GTT-Blockchain2025.jpg",
  date: "2025"
},
{
  id: 42,
  title: "ICP Meetup Togo",
  description: "Hosted ICP community meetup in Togo, exploring decentralized internet and blockchain applications.",
  category: "Education",
  imageUrl: "/icpMeetuoTogo.png",
  date: "2025"
},
{
  id: 43,
  title: "Initiation à l’utilisation du Bitcoin",
  description: "Formation pratique sur l’utilisation sécurisée du Bitcoin et ses opportunités dans la vie réelle.",
  category: "Education",
  imageUrl: "/InitiationUtilisationDuBitcoin.jpeg",
  date: "2025"
},
{
  id: 44,
  title: "Web3 Builders TALK #2",
  description: "Présentation : Introduction to Superteam – Work to Earn Model, une approche innovante pour les développeurs et créateurs Web3.",
  category: "Education",
  imageUrl: "/IntroductionToSuperteamWorkToEarnModel.jpg",
  date: "2025"
},
{
  id: 45,
  title: "Invitation des Bitcoiners",
  description: "Construisons une communauté unie et prospère des Bitcoiners au Togo.",
  category: "Community",
  imageUrl: "/invitationBitcoiners2024.jpeg",
  date: "2024"
},
{
  id: 46,
  title: "Journée des Métiers du Digital",
  description: "Événement consacré aux nouvelles carrières numériques et aux opportunités de la blockchain.",
  category: "Events",
  imageUrl: "/journeeDesMetierDuDigital.jpeg",
  date: "2024"
},
{
  id: 47,
  title: "Journée Internationale de l’Informatique",
  description: "Célébration mondiale de l’informatique et partage de perspectives sur la transformation numérique.",
  category: "Events",
  imageUrl: "/journeeInternatinnal2024.jpeg",
  date: "2024"
},
{
  id: 48,
  title: "World Blockchain Summit – Dubaï",
  description: "Keynote au World Blockchain Summit 2024, organisé par Trescon au JW Marriott Marina. Un forum rassemblant plus de 2 000 décideurs Web3, investisseurs et leaders de l’industrie, avec des débats sur la finance décentralisée, la régulation des actifs numériques et la convergence IA-blockchain.",
  category: "Events",
  imageUrl: "/jwMarriott.jpeg",
  date: "2024"
},
{
  id: 49,
  title: "Africa Blockchain Community",
  description: "Démocratiser la blockchain et donner plus de pouvoir aux Web3 builders en Afrique.",
  category: "Events",
  imageUrl: "/MeetAfricaBlockchain.jpg",
  date: "2024"
},
{
  id: 50,
  title: "Web3 & Blockchain Summit Nairobi",
  description: "Speaker à Nairobi lors d’un sommet réunissant innovateurs et entrepreneurs autour de l’adoption du Web3 et de la blockchain en Afrique.",
  category: "Events",
  imageUrl: "/NairobiKenya2024.png",
  date: "2024"
},
{
  id: 51,
  title: "Night Coding",
  description: "Discussion autour du monde de la tech et des réalités en entreprise.",
  category: "Events",
  imageUrl: "/nightCoding2024.jpeg",
  date: "2024"
},
{
  id: 52,
  title: "Onchain Design Sprint",
  description: "Atelier intensif sur la conception et l’innovation dans l’écosystème Onchain.",
  category: "Education",
  imageUrl: "/onchain.png",
  date: "2025"
},
{
  id: 53,
  title: "Web3Bridge Program",
  description: "Participation au programme panafricain Web3Bridge, dédié à la formation et à l’accompagnement des talents blockchain en Afrique.",
  category: "Education",
  imageUrl: "/onlydush.jpg",
  date: "2025"
},
{
  id: 54,
  title: "Workshop Blockchain – OnlyDush",
  description: "Intervention en tant que formateur dans un atelier de sensibilisation et de pratique blockchain.",
  category: "Education",
  imageUrl: "/onlydush2025.jpg",
  date: "2025"
},
{
  id: 55,
  title: "Blockchain Seminar – OnlyDush",
  description: "Participation à un séminaire blockchain autour des innovations et cas pratiques Web3.",
  category: "Education",
  imageUrl: "/onlydush_2025.jpeg",
  date: "2025"
},
   {
  id: 54,
  title: "Workshop Blockchain – OnlyDush",
  description: "Intervention en tant que formateur dans un atelier de sensibilisation et de pratique blockchain.",
  category: "Education",
  imageUrl: "/onlydush2025.jpg",
  date: "2025"
},
{
  id: 55,
  title: "Blockchain Seminar – OnlyDush",
  description: "Participation à un séminaire blockchain autour des innovations et cas pratiques Web3.",
  category: "Education",
  imageUrl: "/onlydush_2025.jpeg",
  date: "2025"
},
{
  id: 56,
  title: "Blockchain Innovation Summit 2025",
  description: "Keynote sur l’avenir de la blockchain et ses cas d’usage concrets lors du Blockchain Innovation Summit.",
  category: "Education",
  imageUrl: "/organisation.png",
  date: "2025"
},
{
  id: 57,
  title: "PyDay Togo 2024",
  description: "Présentation sur l’impact de l’intelligence artificielle sur la communication et l’automatisation dans le développement.",
  category: "Events",
  imageUrl: "/pycon.jpg",
  date: "2024"
},
{
  id: 58,
  title: "PyDay Togo 2024 ",
  description: "Discussion autour des applications de l’IA et de la collaboration avec les développeurs togolais.",
  category: "Events",
  imageUrl: "/pycon2024.jpg",
  date: "2024"
},
{
  id: 59,
  title: "PyDay Togo 2024 ",
  description: "Échanges pratiques et networking autour de l’IA appliquée au développement.",
  category: "Events",
  imageUrl: "/pyconTogoDay.jpg",
  date: "2024"
},
{
  id: 60,
  title: "Meetup Internet Protocol & Web3",
  description: "Exploration du futur de l’internet décentralisé et du rôle du Web3 dans les communications.",
  category: "Events",
  imageUrl: "/Reportage2024.jpg",
  date: "2024"
},
{
  id: 61,
  title: "Web3 & Internet Protocol",
  description: "Conférence sur la convergence entre Internet Protocol et technologies décentralisées.",
  category: "Conférence",
  imageUrl: "/sahara.jpg",
  date: "2024"
},
{
  id: 62,
  title: "Satoshi ",
  description: "Moment d’échanges et de réflexion autour de la vision de Satoshi et des fondements de la blockchain.",
  category: "Events",
  imageUrl: "/Satoshi.jpeg",
  date: "2024"
},
{
  id: 63,
  title: "Web3 Exchange Session",
  description: "Échanges interactifs avec les passionnés du Web3 et discussions sur l’évolution des technologies décentralisées.",
  category: "Education",
  imageUrl: "/SPEAk.jpg",
  date: "2024"
},
{
  id: 64,
  title: "Togo Code Run",
  description: "Session de partage et d’inspiration avec les participants du Togo Code Run.",
  category: "Events",
  imageUrl: "/speakTogoCoderun.jpg",
  date: "2024"
},
{
  id: 65,
  title: "Stellar Blockchain Session",
  description: "Présentation sur l’utilisation de la blockchain Stellar dans des cas concrets du monde réel.",
  category: "Events",
  imageUrl: "/stellar.jpg",
  date: "2025"
},
{
  id: 66,
  title: "CMX Connect Togo",
  description: "Conférence sur les stratégies de croissance des compétences et le renforcement des communautés.",
  category: "Community",
  imageUrl: "/StrategieCreationCommunity.jpeg",
  date: "2024"
},
{
  id: 67,
  title: "AfroBlockchain Francophone",
  description: "Rencontre des communautés francophones autour de la blockchain et du Web3.",
  category: "Events",
  imageUrl: "/suiEnAfriqueFrancophone.jpg",
  date: "2024"
},
{
  id: 68,
  title: "TDev Festival",
  description: "Festival incontournable dédié aux nouvelles technologies et à l’innovation numérique.",
  category: "Speaker",
  imageUrl: "/TdevFestival@)@$.png",
  date: "2024"
},
   {
  id: 69,
  title: "Tech Community Day",
  description: "Atelier sur l’intégration de la blockchain dans les applications Web modernes.",
  category: "Speaker",
  imageUrl: "/techCommunityDay2024.jpg",
  date: "2024",
},
{
  id: 70,
  title: "Togo Code Run",
  description: "Intervention en tant que speaker sur le thème de la Blockchain.",
  category: "Speaker",
  imageUrl: "/togo code run.jpeg",
  date: "2024",
},
{
  id: 71,
  title: "Bitcoin Community Togo",
  description: "Un moment d’échange et de partage entre les membres de la communauté Bitcoin au Togo.",
  category: "Community",
  imageUrl: "/TogoBitcoinCommunity.jpeg",
  date: "2024",
},
{
  id: 72,
  title: "Trust Wallet Workshop",
  description: "Séance de formation pratique sur la sécurisation de ses crypto-actifs avec Trust Wallet.",
  category: "Events",
  imageUrl: "/trustWallet.jpg",
  date: "2025",
},
{
  id: 73,
  title: "Web3 Builders Talk #4",
  description: "Discussions sur l’écosystème, les opportunités et le rôle des hubs régionaux comme le Nigeria.",
  category: "Events",
  imageUrl: "/unclockingThePotentialOfICP.jpg",
  date: "2024",
},
{
  id: 74,
  title: "Tech Savvy Summit",
  description: "Unir les passionnés de technologie en Afrique pour un impact global.",
  category: "Events",
  imageUrl: "/UnitingAfrica.jpg",
  date: "2024",
},
{
  id: 75,
  title: "Unizik Blockchain Forum",
  description: "Conférence réunissant divers speakers autour des innovations blockchain.",
  category: "Conférence",
  imageUrl: "/Unizik.jpg",
  date: "2024",
},
{
  id: 76,
  title: "Web3 Lagos Conference 2024",
  description: "Participation à la conférence Web3 Lagos sur l’avenir des applications blockchain en Afrique.",
  category: "Conférence",
  imageUrl: "/Web3LagosConference.png",
  date: "2024",
},
{
  id: 77,
  title: "Unizik Blockchain Lab Conference",
  description: "Empowering Africa’s blockchain leaders à travers conférences et workshops.",
  category: "Conférence",
  imageUrl: "/UnizikBlockchainLabConference.jpg",
  date: "2024",
},
{
  id: 78,
  title: "Web3 Lagos Conference 2025",
  description: "Speaker à la Web3 Lagos Conference 2025, un rendez-vous majeur pour développeurs, investisseurs et passionnés du Web3.",
  category: "Conférence",
  imageUrl: "/WEB3-Bridge.jpg",
  date: "2025",
},
{
  id: 79,
  title: "Web3Bridge 2025",
  description: "Programme et communauté panafricaine dédiée à l’éducation et à la montée en compétences sur le Web3.",
  category: "Events",
  imageUrl: "/web3Bridge2024.jpg",
  date: "2025",
},
{
  id: 80,
  title: "Web3Bridge 2024",
  description: "Initiative panafricaine pour former, connecter et soutenir les talents Web3.",
  category: "Events",
  imageUrl: "/WEB3-Bridge.jpg",
  date: "2024",
},
{
  id: 81,
  title: "Web3 Lagos Conference 2025",
  description: "Participation en tant que speaker, partageant des perspectives sur l’avenir du Web3 et de la blockchain en Afrique.",
  category: "Speaker",
  imageUrl: "/web3LagosConference2025.jpg",
  date: "2025",
},


{
  id: 82,
  title: "Web3 Lagos Conference 2024",
  description: "Présentation sur l’intégration de la Blockchain dans les applications Web lors de la Web3 Lagos Conference.",
  category: "Events",
  imageUrl: "/Web3LagosConference.png",
  date: "2024",
},
{
  id: 83,
  title: "Certification Web3",
  description: "Obtention d’un certificat après un atelier sur l’utilisation de la Blockchain dans les applications Web.",
  category: "Education",
  imageUrl: "/webCertificat.jpg",
  date: "2024",
},
{
  id: 84,
  title: "Workshop Blockchain",
  description: "Atelier pratique autour de la Blockchain et de ses applications concrètes dans le Web.",
  category: "Education",
  imageUrl: "/XuUtlPqMzAG6NcaR-IMG_8491.jpg",
  date: "2024",
},
{
  id: 85,
  title: "Where Blockchain Meets the Real World",
  description: "Conférence explorant les usages concrets de la Blockchain dans la vie réelle et les industries.",
  category: "Conférence",
  imageUrl: "/whereBlockchainMeetTheRealWorld.jpeg",
  date: "2024",
},

{
  id: 86,
  title: "ETHSafari 2025",
  description: "Labore Agbetsiassi, DevRel & Ecosystem Builder, intervient à l'Africa's Largest ETH Event.",
  category: "Speaker",
  imageUrl: "/ethsafari.jpg",
  date: "2025",
},
{
  id: 87,
  title: "Celebrating 10 years of Ethereum",
  description: "Labore Agbétsiassi, fondateur de Africa Blockchain Community, prend la parole pour les 10 ans d’Ethereum.",
  category: "Speaker",
  imageUrl: "/Etheum.jpg",
  date: "2025"
},


]

export const importantArticles = [
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
      en: "15 min read",
      fr: "15 min de lecture",
      ewe: "Xlẽ miniti 15",
    },
    tags: ["Blockchain", "DApp", "Next.js", "Solidity", "Web3.js"],
  },
  {
    title: {
      en: "Non-Tech: Navigating the Web3 Space for Non-Technical Professionals",
      fr: "Non-Tech : Naviguer dans l'Espace Web3 pour les Professionnels Non-Techniques",
      ewe: "Non-Tech: Web3 Nutiwɔwɔ na Mɔ̃ɖaŋu Meguwo",
    },
    description: {
      en: "A guide for non-technical individuals to understand and thrive in the Web3 ecosystem.",
      fr: "Un guide pour les individus non-techniques afin de comprendre et prospérer dans l'écosystème Web3.",
      ewe: "Mɔfiame na mɔ̃ɖaŋu meguwo be woase gɔme kple woawɔ dɔ nyuie le Web3 nutome.",
    },
    href: "https://starlabman.hashnode.dev/non-tech",
    publishedAt: "N/A",
    readTime: {
      en: "1 min read",
      fr: "1 min de lecture",
      ewe: "Xlẽ miniti 1",
    },
    tags: ["Web3", "Non-Technical", "Beginner"],
  },
  {
    title: {
      en: "How Stellar and Soroban Are Revolutionizing Finance: A Simple Guide",
      fr: "Comment Stellar et Soroban Révolutionnent la Finance : Un Guide Simple",
      ewe: "Alesi Stellar Kple Soroban Le Gadzraɖoƒe Wɔm yeye: Mɔfiame Bɔbɔe",
    },
    description: {
      en: "A straightforward explanation of how Stellar and Soroban are changing the financial landscape.",
      fr: "Une explication simple de la manière dont Stellar et Soroban transforment le paysage financier.",
      ewe: "Alesi Stellar kple Soroban le gadzraɖoƒe wɔm yeye gbɔgblɔ bɔbɔe.",
    },
    href: "https://starlabman.hashnode.dev/how-stellar-and-soroban-are-revolutionizing-finance-a-simple-guide",
    publishedAt: "N/A",
    readTime: {
      en: "5 min read",
      fr: "5 min de lecture",
      ewe: "Xlẽ miniti 5",
    },
    tags: ["Stellar", "Soroban", "Finance", "Blockchain"],
  },
  {
    title: {
      en: "Simplify Blockchain with Stellar and Soroban",
      fr: "Simplifier la Blockchain avec Stellar et Soroban",
      ewe: "Blockchain ƒe Nu Bɔbɔe Kple Stellar Kple Soroban",
    },
    description: {
      en: "Making blockchain technology more accessible and understandable using Stellar and Soroban.",
      fr: "Rendre la technologie blockchain plus accessible et compréhensible avec Stellar et Soroban.",
      ewe: "Blockchain mɔ̃ɖaŋu wɔwɔ bɔbɔe kple Stellar kple Soroban.",
    },
    href: "https://starlabman.hashnode.dev/simplify-blockchain-with-stellar-and-soroban",
    publishedAt: "N/A",
    readTime: {
     en: "5 min read",
      fr: "5 min de lecture",
      ewe: "Xlẽ miniti 5",
    },
    tags: ["Stellar", "Soroban", "Blockchain", "Simplification"],
  },
  {
    title: {
      en: "Reinventing Collaboration and Innovation in Web3",
      fr: "Réinventer la Collaboration et l'Innovation dans le Web3",
      ewe: "Yeye Yeye wɔwɔ Kple Dɔwɔwɔwo le Web3 Me",
    },
    description: {
      en: "Exploring new paradigms for collaborative innovation within the Web3 ecosystem.",
      fr: "Exploration de nouveaux paradigmes pour l'innovation collaborative au sein de l'écosystème Web3.",
      ewe: "Dɔwɔwɔ yeyewo kple eƒe nuŋlɔŋlɔwo le Web3 nutome.",
    },
    href: "https://starlabman.hashnode.dev/reinventing-collaboration-and-innovation",
    publishedAt: "N/A",
    readTime: {
      en: "5 min read",
      fr: "5 min de lecture",
      ewe: "Xlẽ miniti 5",
    },
    tags: ["Web3", "Collaboration", "Innovation"],
  },
  {
    title: {
      en: "Blockchain and NFTs: Unlocking Creative Potential in the Digital Age",
      fr: "Blockchain et NFTs : Libérer le Potentiel Créatif à l'Ère Numérique",
      ewe: "Blockchain kple NFTs: Nu yeyewo Gbɔŋlɔ le Digital Ɣeyiɣi Me",
    },
    description: {
      en: "How blockchain and NFTs are transforming creative industries and digital ownership.",
      fr: "Comment la blockchain et les NFTs transforment les industries créatives et la propriété numérique.",
      ewe: "Alesi blockchain kple NFTs le nu yeyewo wɔm le digital ɣeyiɣi me.",
    },
    href: "https://starlabman.hashnode.dev/blockchain-and-nfts-unlocking-creative-potential-in-the-digital-age",
    publishedAt: "N/A",
    readTime: {
     en: "5 min read",
      fr: "5 min de lecture",
      ewe: "Xlẽ miniti 5",
    },
    tags: ["Blockchain", "NFTs", "Digital Art", "Creative Industry"],
  },
  {
    title: {
      en: "Smart Contracts: Transforming Agreements in a Digital World",
      fr: "Contrats Intelligents : Transformer les Accords dans un Monde Numérique",
      ewe: "Smart Contracts: Nudodowo Kɔkɔ le Digital Xexeme",
    },
    description: {
      en: "Understanding the power of smart contracts to automate and secure agreements.",
      fr: "Comprendre le pouvoir des contrats intelligents pour automatiser et sécuriser les accords.",
      ewe: "Smart Contracts ƒe ŋusẽ le nudodowo kple dedinɔnɔ me.",
    },
    href: "https://starlabman.hashnode.dev/smart-contracts",
    publishedAt: "N/A",
    readTime: {
     en: "2 min read",
      fr: "2 min de lecture",
      ewe: "Xlẽ miniti 2",
    },
    tags: ["Smart Contracts", "Blockchain", "Automation", "Legal Tech"],
  },
  {
    title: {
      en: "What is Developer Relations (DevRel)?",
      fr: "Qu'est-ce que le Developer Relations (DevRel) ?",
      ewe: "Nuka Nye Nusrɔ̃lawo Kple Nuƒoƒo (DevRel)?",
    },
    description: {
      en: "An introduction to the field of Developer Relations and its importance in tech.",
      fr: "Une introduction au domaine du Developer Relations et son importance dans la technologie.",
      ewe: "Nuƒoƒo kple eƒe nuŋlɔŋlɔwo le mɔ̃ɖaŋu me.",
    },
    href: "https://starlabman.hashnode.dev/what-is-developer-relations",
    publishedAt: "N/A",
    readTime: {
      en: "N/A",
      fr: "N/A",
      ewe: "N/A",
    },
    tags: ["DevRel", "Developer Relations", "Community"],
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
      en: "2 min read",
      fr: "2 min de lecture",
      ewe: "Xlẽ miniti 2",
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
     en: "3 min read",
      fr: "3 min de lecture",
      ewe: "Xlẽ miniti 3",
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
     en: "3 min read",
      fr: "3 min de lecture",
      ewe: "Xlẽ miniti 3",
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
      en: "3 min read",
      fr: "3 min de lecture",
      ewe: "Xlẽ miniti 3",
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
      en: "3 min read",
      fr: "3 min de lecture",
      ewe: "Xlẽ miniti 3",
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
      en: "3 min read",
      fr: "3 min de lecture",
      ewe: "Xlẽ miniti 3",
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
