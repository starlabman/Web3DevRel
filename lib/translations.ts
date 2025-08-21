"use client"

import { createContext, useContext } from "react"

export type Language = "en" | "fr" | "ewe"

export const translations = {
  en: {
    hero: {
      title: "AGBETSIASSI KODJO LABORE",
      subtitle: "DevRel & Community Builder | Web3.js Ambassador Lead",
      description:
        "Passionate about blockchain innovation, developer education, and building Web3 communities across Africa. Helping individuals and businesses navigate the decentralized future.",
      cta: "Explore Services",
    },
    nav: {
      home: "Home",
      journey: "Journey",
      gallery: "Gallery",
      mentorship: "Mentorship",
      contact: "Contact",
      services: "Services",
      about: "About",
      achievements: "Achievements",
    },
    sections: {
      projects: "Projects",
      threads: "Impactful Threads",
      posts: "LinkedIn Posts",
      articles: "Important Articles",
      memo: "Personal Memo",
      keyAchievements: "Key Achievements",
    },
    buttons: {
      contact: "Contact Me",
      loadMore: "Load More",
      showLess: "Show Less",
      calendar: "Calendar",
      bookSession: "Book Session",
    },
    mentorship: {
      title: "Mentorship & Coaching",
      subtitle:
        "Join hundreds of developers and entrepreneurs I've helped transition into Web3. Whether you're technical or non-technical, I'll guide your Web3 journey.",
      mostPopular: "Most Popular",
      notSure: "Not sure which program fits you? Let's have a free 15-minute discovery call.",
      freeDiscovery: "Free Discovery Call",
    },
    services: {
      title: "Web3 Services & Coaching",
      subtitle: "Comprehensive blockchain education and consulting services",
      beginnerTitle: "Blockchain Fundamentals",
      beginnerDesc: "Perfect introduction to blockchain, Bitcoin, and Web3 for complete beginners",
      beginnerPrice: "€150/session",
      beginnerFeatures: [
        "What is blockchain technology",
        "Understanding Bitcoin & cryptocurrencies",
        "Web3 ecosystem overview",
        "Wallet setup & security",
        "Basic trading concepts",
      ],
      investmentTitle: "Investment Guidance",
      investmentDesc: "Professional crypto investment strategy and portfolio management",
      investmentPrice: "€300/month",
      investmentFeatures: [
        "Portfolio analysis & optimization",
        "Risk management strategies",
        "Market analysis & timing",
        "DeFi opportunities",
        "Tax optimization",
      ],
      technicalTitle: "Technical Web3 Development",
      technicalDesc: "Advanced blockchain development and smart contract programming",
      technicalPrice: "€500/month",
      technicalFeatures: [
        "Smart contract development",
        "DApp architecture",
        "Blockchain integration",
        "Security best practices",
        "Career guidance",
      ],
    },
    achievements: {
      title: "Professional Journey",
      subtitle: "Leading Web3 innovation across Africa",
    },
    contact: {
      title: "Let's Build the Future Together",
      subtitle: "Ready to start your Web3 journey?",
    },
    footer: {
      copyright: "© 2024 AGBETSIASSI KODJO LABORE — All rights reserved",
    },
    gallery: {
      filterAll: "All",
      loadMore: "Load More",
      viewMore: "View More",
    },
  },
  fr: {
    hero: {
      title: "AGBETSIASSI KODJO LABORE",
      subtitle: "DevRel & Créateur de Communautés | Lead Ambassadeur Web3.js",
      description:
        "Passionné par l'innovation blockchain, l'éducation des développeurs et la création de communautés Web3 en Afrique. J'aide les individus et entreprises à naviguer vers l'avenir décentralisé.",
      cta: "Découvrir les Services",
    },
    nav: {
      home: "Accueil",
      journey: "Parcours",
      gallery: "Galerie",
      mentorship: "Mentorat",
      contact: "Contact",
      services: "Services",
      about: "À Propos",
      achievements: "Réalisations",
    },
    sections: {
      projects: "Réalisations",
      threads: "Threads impactants",
      posts: "Posts LinkedIn",
      articles: "Articles importants",
      memo: "Mémo personnel",
      keyAchievements: "Réalisations clés",
    },
    buttons: {
      contact: "Me Contacter",
      loadMore: "Voir plus",
      showLess: "Voir moins",
      calendar: "Calendly",
      bookSession: "Réserver une Session",
    },
    mentorship: {
      title: "Mentorat & Coaching",
      subtitle:
        "Rejoignez des centaines de développeurs et entrepreneurs que j'ai aidés à transitionner vers Web3. Que vous soyez technique ou non, je guiderai votre parcours Web3.",
      mostPopular: "Le Plus Populaire",
      notSure: "Pas sûr du programme qui vous convient ? Ayons un appel de découverte gratuit de 15 minutes.",
      freeDiscovery: "Appel de Découverte Gratuit",
    },
    services: {
      title: "Services Web3 & Coaching",
      subtitle: "Services complets d'éducation blockchain et de conseil",
      beginnerTitle: "Fondamentaux Blockchain",
      beginnerDesc: "Introduction parfaite à la blockchain, Bitcoin et Web3 pour débutants complets",
      beginnerPrice: "€150/session",
      beginnerFeatures: [
        "Qu'est-ce que la technologie blockchain",
        "Comprendre Bitcoin & cryptomonnaies",
        "Aperçu de l'écosystème Web3",
        "Configuration portefeuille & sécurité",
        "Concepts de trading de base",
      ],
      investmentTitle: "Conseil en Investissement",
      investmentDesc: "Stratégie d'investissement crypto professionnelle et gestion de portefeuille",
      investmentPrice: "€300/mois",
      investmentFeatures: [
        "Analyse & optimisation de portefeuille",
        "Stratégies de gestion des risques",
        "Analyse de marché & timing",
        "Opportunités DeFi",
        "Optimisation fiscale",
      ],
      technicalTitle: "Développement Web3 Technique",
      technicalDesc: "Développement blockchain avancé et programmation de contrats intelligents",
      technicalPrice: "€500/mois",
      technicalFeatures: [
        "Développement de contrats intelligents",
        "Architecture DApp",
        "Intégration blockchain",
        "Meilleures pratiques de sécurité",
        "Orientation de carrière",
      ],
    },
    achievements: {
      title: "Parcours Professionnel",
      subtitle: "Leader de l'innovation Web3 en Afrique",
    },
    contact: {
      title: "Construisons l'Avenir Ensemble",
      subtitle: "Prêt à commencer votre parcours Web3 ?",
    },
    footer: {
      copyright: "© 2024 AGBETSIASSI KODJO LABORE — Tous droits réservés",
    },
    gallery: {
      filterAll: "Tout",
      loadMore: "Voir plus",
      viewMore: "Voir plus",
    },
  },
  ewe: {
    hero: {
      title: "AGBETSIASSI KODJO LABORE",
      subtitle: "DevRel & Hamewo Tutu | Web3.js Ambassador Kplɔla",
      description:
        "Melɔ̃a blockchain yeyewo, nusrɔ̃lawo fia mɔ kple Web3 hamewo tutu le Afrika. Mekpena ame ɖekaɖekawo kple dɔwɔƒewo be woazɔ mɔ si yi etsɔme si me decentralization le.",
      cta: "Kpɔ Dɔwɔnawo",
    },
    nav: {
      home: "Aƒe",
      journey: "Mɔzɔzɔ",
      gallery: "Nɔnɔmetatawo",
      mentorship: "Mɔfiame",
      contact: "Kaƒoƒo",
      services: "Dɔwɔnawo",
      about: "Ŋutinye",
      achievements: "Dzidzedzekpɔkpɔwo",
    },
    sections: {
      projects: "Dɔwɔwɔwo",
      threads: "Thread Vevitɔwo",
      posts: "LinkedIn Nyawo",
      articles: "Nyatakaka Vevitɔwo",
      memo: "Nye Ŋkuɖodzinu",
      keyAchievements: "Dzidzedzekpɔkpɔ Vevitɔwo",
    },
    buttons: {
      contact: "Kaƒo Ŋunye",
      loadMore: "Kpɔ Bubuwo",
      showLess: "Ɖe Suetɔwo",
      calendar: "Ɣeyiɣi Ɖoɖo",
      bookSession: "Ɖo Nusrɔ̃ɖoɖo",
    },
    mentorship: {
      title: "Mɔfiame & Hehe",
      subtitle:
        "De ame alafa geɖewo siwo nye nusrɔ̃lawo kple dɔwɔlawo dome siwo mekpe ɖo be woayi Web3 me. Ne ènye mɔ̃ɖaŋutɔ alo menye mɔ̃ɖaŋutɔ o la, mafia wò Web3 mɔzɔzɔ.",
      mostPopular: "Si Wodzea Geɖe Nhã",
      notSure: "Mènya dɔɖoɖo ka sɔ na wò oa? Mina míawɔ kaƒoƒo si nye ga ɖeke aɖeke o si anɔ miniti 15.",
      freeDiscovery: "Kaƒoƒo si Nye Ga ɖeke O",
    },
    services: {
      title: "Web3 Dɔwɔnawo & Hehe",
      subtitle: "Blockchain nusrɔ̃ kple aɖaŋuɖoɖo dɔwɔnawo katã",
      beginnerTitle: "Blockchain Gɔmeɖoanyi",
      beginnerDesc: "Blockchain, Bitcoin, kple Web3 gɔmeɖeɖe nyui na ame yeyewo",
      beginnerPrice: "€150/nusrɔ̃ɖoɖo ɖeka",
      beginnerFeatures: [
        "Blockchain mɔ̃ɖaŋu nye nuka",
        "Bitcoin & cryptocurrency gɔmesese",
        "Web3 nutome kpɔɖeŋu",
        "Gakotoku ɖoɖo & dedinɔnɔ",
        "Asitsatsa gɔmeɖeɖe",
      ],
      investmentTitle: "Gakɔkɔ Aɖaŋuɖoɖo",
      investmentDesc: "Crypto gakɔkɔ mɔ̃ɖaŋu nyui kple gakotoku dzikpɔkpɔ",
      investmentPrice: "€300/ɣleti",
      investmentFeatures: [
        "Gakotoku me nukpɔkpɔ & nyonyo",
        "Afɔku dzikpɔkpɔ mɔ̃ɖaŋuwo",
        "Asi me nukpɔkpɔ & ɣeyiɣi",
        "DeFi mɔnukpɔkpɔwo",
        "Dzodome nyonyo",
      ],
      technicalTitle: "Web3 Mɔ̃ɖaŋu Wɔwɔ",
      technicalDesc: "Blockchain mɔ̃ɖaŋu wɔwɔ kple smart contract ŋɔŋlɔ",
      technicalPrice: "€500/ɣleti",
      technicalFeatures: [
        "Smart contract wɔwɔ",
        "DApp ɖoɖo",
        "Blockchain kpekpeɖeŋu",
        "Dedinɔnɔ mɔ̃ɖaŋu nyuitɔwo",
        "Dɔ mɔfiame",
      ],
    },
    achievements: {
      title: "Dɔwɔwɔ Mɔzɔzɔ",
      subtitle: "Web3 yeyewo kplɔla le Afrika",
    },
    contact: {
      title: "Mina Míawɔ Etsɔme Ɖekae",
      subtitle: "Èdzra ɖo be yeadze Web3 mɔzɔzɔ gɔmea?",
    },
    footer: {
      copyright: "© 2024 AGBETSIASSI KODJO LABORE — Mɔɖeɖe katã nye tɔnye",
    },
    gallery: {
      filterAll: "Katã",
      loadMore: "Kpɔ Bubuwo",
      viewMore: "Kpɔ Bubuwo",
    },
  },
}

export const blockchainTerms = [
  // Blockchains
  "Ethereum",
  "Bitcoin",
  "Solana",
  "Polygon",
  "Avalanche",
  "Cardano",
  "Polkadot",
  "Chainlink",
  "Binance Smart Chain",
  "Arbitrum",
  "Optimism",
  "Cosmos",
  "Near Protocol",
  "Fantom",

  // Languages & Technologies
  "Solidity",
  "Rust",
  "JavaScript",
  "TypeScript",
  "Python",
  "Go",
  "Web3.js",
  "Ethers.js",
  "React",
  "Next.js",
  "Node.js",
  "GraphQL",
  "IPFS",
  "Hardhat",
  "Truffle",
  "Foundry",

  // Jobs & Roles
  "Smart Contract Developer",
  "DApp Developer",
  "Blockchain Engineer",
  "DevRel Engineer",
  "Web3 Frontend Developer",
  "Solidity Developer",
  "DeFi Developer",
  "NFT Developer",
  "Blockchain Architect",
  "Crypto Analyst",
  "Web3 Product Manager",
  "Community Manager",
  "Tokenomics Designer",
  "Security Auditor",
  "Protocol Engineer",
  "dApp Designer",
]

// Language Context
const LanguageContext = createContext<{
  language: Language
  setLanguage: (lang: Language) => void
}>({
  language: "fr",
  setLanguage: () => {},
})

export const useLanguage = () => useContext(LanguageContext)
export const LanguageProvider = LanguageContext.Provider
