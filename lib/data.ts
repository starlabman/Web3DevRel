import type { Language } from "./translations"

export const getTranslatedContent = (
  content: string | Record<string, string> | undefined,
  language: Language,
  fallback = "en"
): string => {
  if (typeof content === "string") return content
  if (!content) return ""
  const result = content[language] || content[fallback] || ""
  return typeof result === "string" ? result : ""
}

export const profile = {
  name: "AGBETSIASSI KODJO LABORE",
  firstName: "Kodjo",
  title: {
    en: "DevRel & Ecosystem Builder",
    fr: "DevRel & Constructeur d'Écosystème",
    ewe: "DevRel & Nutome Tutula",
  },
  tagline: {
    en: "Building Web3 developer communities and ecosystems across Africa",
    fr: "Construction de communautés de développeurs et d'écosystèmes Web3 en Afrique",
    ewe: "Web3 nusrɔ̃la habɔbɔwo kple nutomewo tutu le Afrika",
  },
  email: "akodjolabore@gmail.com",
  location: {
    en: "Lomé, Togo",
    fr: "Lomé, Togo",
    ewe: "Lomé, Togo",
  },
  calendarUrl: "https://calendly.com/starlabman/30min",
}

export const socialLinks = [
  { label: "X / Twitter", handle: "@0xWeb3DevRel", href: "https://x.com/0xWeb3DevRel", icon: "twitter" },
  { label: "LinkedIn", handle: "starlabman", href: "https://www.linkedin.com/in/starlabman/", icon: "linkedin" },
  { label: "GitHub", handle: "starlabman", href: "https://github.com/starlabman", icon: "github" },
  { label: "Email", handle: "akodjolabore@gmail.com", href: "mailto:akodjolabore@gmail.com", icon: "mail" },
  { label: "YouTube", handle: "TECHLABS ACADEMY", href: "https://youtube.com/@starlabman", icon: "youtube" },
  { label: "Farcaster", handle: "0xweb3devrel", href: "https://farcaster.xyz/0xweb3devrel", icon: "globe" },
]

export const proofPoints = [
  {
    icon: "users",
    value: {
      en: "Africa Blockchain Community",
      fr: "Communauté Blockchain Afrique",
      ewe: "Afrika Blockchain Habɔbɔ",
    },
    label: {
      en: "Founded & leading",
      fr: "Fondée et dirigée",
      ewe: "Gɔmeɖoanyi kple kplɔla",
    },
  },
  {
    icon: "globe",
    value: {
      en: "ETHAfrique",
      fr: "ETHAfrique",
      ewe: "ETHAfrique",
    },
    label: {
      en: "Governor — 1st Ethereum conf in Francophone Africa",
      fr: "Gouverneur — 1ère conférence Ethereum en Afrique francophone",
      ewe: "Kplɔla — Ethereum nuƒoƒo gbãtɔ le Afrika",
    },
  },
  {
    icon: "code",
    value: {
      en: "Web3.js Ambassador",
      fr: "Ambassadeur Web3.js",
      ewe: "Web3.js Ambassador",
    },
    label: {
      en: "Former Lead Ambassador",
      fr: "Ancien Ambassadeur Principal",
      ewe: "Ambassador Kplɔla",
    },
  },
  {
    icon: "book",
    value: {
      en: "Binance Campus Lead",
      fr: "Lead Campus Binance",
      ewe: "Binance Campus Kplɔla",
    },
    label: {
      en: "Blockchain education across Togo",
      fr: "Éducation blockchain au Togo",
      ewe: "Blockchain nusrɔ̃ɖoɖo le Togo",
    },
  },
  {
    icon: "mic",
    value: {
      en: "ETHSafari · Web3Lagos · ETHAccra",
      fr: "ETHSafari · Web3Lagos · ETHAccra",
      ewe: "ETHSafari · Web3Lagos · ETHAccra",
    },
    label: {
      en: "Speaker at major African Web3 conferences",
      fr: "Speaker aux principales conférences Web3 africaines",
      ewe: "Nuƒoƒola le Afrika Web3 nuƒoƒo gãtɔwo",
    },
  },
  {
    icon: "filetext",
    value: {
      en: "WallCrypt Correspondent",
      fr: "Correspondant WallCrypt",
      ewe: "WallCrypt Nyaŋlɔla",
    },
    label: {
      en: "Crypto analysis & industry interviews",
      fr: "Analyses crypto & interviews d'experts",
      ewe: "Crypto analysis kple biabiawo",
    },
  },
]

export const experiences = [
  {
    title: {
      en: "Founder — Africa Blockchain Community",
      fr: "Fondateur — Communauté Blockchain Afrique",
      ewe: "Gɔmeɖoanyila — Afrika Blockchain Habɔbɔ",
    },
    organization: "Africa Blockchain Community",
    period: "2023 — Present",
    description: {
      en: "Founded and built one of the largest blockchain communities in Africa, connecting developers, entrepreneurs, and enthusiasts across the continent. Organize meetups, workshops, and educational programs.",
      fr: "Fondation et construction de l'une des plus grandes communautés blockchain d'Afrique, connectant les développeurs, entrepreneurs et passionnés à travers le continent. Organisation de meetups, ateliers et programmes éducatifs.",
      ewe: "Afrika blockchain habɔbɔ gãtɔ aɖe ƒe gɔmeɖoanyi, nusrɔ̃lawo, dɔwɔlawo kple ame siwo lɔ̃ la kpekpe ɖe wo nɔewo gbɔ. Meetups, dɔwɔƒewo kple nusrɔ̃ɖoɖo dɔwɔwɔwo.",
    },
    tags: ["Community Building", "Web3", "Africa", "Education"],
    priority: 1,
  },
  {
    title: {
      en: "Governor — ETHAfrique",
      fr: "Gouverneur — ETHAfrique",
      ewe: "Kplɔla — ETHAfrique",
    },
    organization: "ETHAfrique",
    period: "2024 — Present",
    description: {
      en: "Leading Ethereum ecosystem development across Francophone Africa. Organized the first Ethereum conference in Francophone Africa, driving adoption and developer education initiatives.",
      fr: "Développement de l'écosystème Ethereum en Afrique francophone. Organisation de la première conférence Ethereum en Afrique francophone, promotion de l'adoption et de l'éducation des développeurs.",
      ewe: "Ethereum nutome ɖoɖo le Afrika. Ethereum nuƒoƒo gbãtɔ le Afrika, nusrɔ̃ɖoɖo kple adoption dɔwɔwɔwo.",
    },
    tags: ["Ethereum", "Ecosystem", "Francophone Africa", "Events"],
    priority: 2,
  },
  {
    title: {
      en: "Lead Web3.js Ambassador",
      fr: "Lead Ambassadeur Web3.js",
      ewe: "Web3.js Ambassador Kplɔla",
    },
    organization: "Web3.js",
    period: "2024 — Present",
    description: {
      en: "Led the ambassador program for Web3.js, creating educational content, recruiting and mentoring developers, and producing bi-weekly tutorials for the global Web3.js developer community.",
      fr: "Direction du programme ambassadeur Web3.js, création de contenu éducatif, recrutement et mentorat de développeurs, production de tutoriels bihebdomadaires pour la communauté mondiale de développeurs Web3.js.",
      ewe: "Web3.js ambassador dɔwɔwɔ kplɔla, nusrɔ̃ɖoɖo wɔwɔ, nusrɔ̃lawo hehe kple mɔfiame, kple bi-weekly tutorials na Web3.js nusrɔ̃lawo.",
    },
    tags: ["Web3.js", "DevRel", "Education", "Ambassador"],
    priority: 3,
  },
  {
    title: {
      en: "Chief Marketing Officer — IsyChain",
      fr: "Directeur Marketing — IsyChain",
      ewe: "Marketing Dɔwɔla Kplɔla — IsyChain",
    },
    organization: "IsyChain",
    period: "2023 — Present",
    description: {
      en: "Defining and executing global marketing strategy for decentralized blockchain solutions. Leading partnerships, community growth, and market expansion initiatives.",
      fr: "Définition et exécution de la stratégie marketing mondiale pour des solutions blockchain décentralisées. Direction des partenariats, croissance communautaire et expansion de marché.",
      ewe: "Global marketing strategy ɖoɖo kple dɔwɔwɔ na decentralized blockchain solutions. Kpekpeɖeŋu, habɔbɔ dziɖuɖu kple asi ɖoɖo.",
    },
    tags: ["Marketing", "Blockchain", "Strategy", "Partnerships"],
    priority: 4,
  },
  {
    title: {
      en: "Binance Campus Lead — Togo",
      fr: "Lead Campus Binance — Togo",
      ewe: "Binance Campus Kplɔla — Togo",
    },
    organization: "Binance",
    period: "2023 — Present",
    description: {
      en: "Leading blockchain education initiatives across Togo. Organized Binance meetups, workshops, and training programs for students and developers.",
      fr: "Direction des initiatives d'éducation blockchain au Togo. Organisation de meetups Binance, ateliers et programmes de formation pour étudiants et développeurs.",
      ewe: "Blockchain nusrɔ̃ɖoɖo kplɔla le Togo. Binance meetups, dɔwɔƒewo kple nusrɔ̃ɖoɖo dɔwɔwɔwo na sukulawo kple nusrɔ̃lawo.",
    },
    tags: ["Binance", "Education", "Togo", "Events"],
    priority: 5,
  },
  {
    title: {
      en: "Blockchain Correspondent — WallCrypt",
      fr: "Correspondant Blockchain — WallCrypt",
      ewe: "Blockchain Nyaŋlɔla — WallCrypt",
    },
    organization: "WallCrypt",
    period: "2024 — Present",
    description: {
      en: "Writing crypto market analysis and conducting interviews with industry experts. Covering blockchain trends and ecosystem developments for the Francophone crypto community.",
      fr: "Rédaction d'analyses du marché crypto et interviews d'experts de l'industrie. Couverture des tendances blockchain et développements de l'écosystème pour la communauté crypto francophone.",
      ewe: "Crypto market analysis ŋɔŋlɔ kple industry experts ƒe biabiawo. Blockchain trends kple nutome ɖoɖowo na Francophone crypto habɔbɔ.",
    },
    tags: ["Writing", "Analysis", "Francophone", "Crypto"],
    priority: 6,
  },
  {
    title: {
      en: "Software Engineering Degree",
      fr: "Licence en Génie Logiciel",
      ewe: "Software Engineering Nusrɔ̃ɖoɖo",
    },
    organization: "Université de Lomé",
    period: "Completed",
    description: {
      en: "Professional degree in Software Engineering from the University of Lomé, Togo.",
      fr: "Licence professionnelle en Génie Logiciel à l'Université de Lomé, Togo.",
      ewe: "Software engineering ƒe numedzodzro le Lomé Yunivasi, Togo.",
    },
    tags: ["Education", "Software Engineering"],
    priority: 7,
  },
]

export const featuredProjects = [
  {
    title: "BSC MoMo Cash",
    blurb: {
      en: "Mobile money cash management built on Binance Smart Chain.",
      fr: "Gestion de cash mobile money sur Binance Smart Chain.",
      ewe: "Mobile money cash dzikpɔkpɔ le Binance Smart Chain dzi.",
    },
    role: {
      en: "Developer",
      fr: "Développeur",
      ewe: "Dɔwɔla",
    },
    href: "https://github.com/starlabman/bsc-momo-cash",
    chips: ["BSC", "Solidity", "Web3", "Mobile Money"],
    featured: true,
  },
  {
    title: "EcoPatch",
    blurb: {
      en: "Sustainability project with environmental impact tracking on-chain.",
      fr: "Projet de durabilité avec suivi d'impact environnemental on-chain.",
      ewe: "Sustainability dɔwɔwɔ kple environment impact tracking on-chain.",
    },
    role: {
      en: "Developer",
      fr: "Développeur",
      ewe: "Dɔwɔla",
    },
    href: "https://github.com/starlabman/ecopatch",
    chips: ["Sustainability", "Blockchain", "Web3"],
    featured: true,
  },
  {
    title: "DevPlan.ai",
    blurb: {
      en: "AI-powered developer planning and productivity toolkit.",
      fr: "Outil de planification et productivité pour développeurs, propulsé par l'IA.",
      ewe: "AI-powered developer planning kple productivity toolkit.",
    },
    role: {
      en: "Developer",
      fr: "Développeur",
      ewe: "Dɔwɔla",
    },
    href: "https://github.com/starlabman/DevPlan.ai",
    chips: ["AI", "Developer Tools", "Productivity"],
    featured: true,
  },
  {
    title: "Africa Blockchain Community",
    blurb: {
      en: "Community platform connecting blockchain developers and enthusiasts across Africa.",
      fr: "Plateforme communautaire connectant les développeurs et passionnés blockchain en Afrique.",
      ewe: "Habɔbɔ platform si kpe blockchain nusrɔ̃lawo kple ame siwo lɔ̃ le Afrika.",
    },
    role: {
      en: "Founder & Developer",
      fr: "Fondateur & Développeur",
      ewe: "Gɔmeɖoanyila kple Dɔwɔla",
    },
    href: "https://github.com/starlabman/AfricaBlockchainCommunity",
    chips: ["Community", "Blockchain", "Africa", "Open Source"],
    featured: true,
  },
  {
    title: "Korea Blockchain Gaming Map",
    blurb: {
      en: "Shareable infographic mapping Korea's blockchain gaming ecosystem.",
      fr: "Infographie partageable cartographiant l'écosystème du gaming blockchain en Corée.",
      ewe: "Infographic si ɖo Korea blockchain gaming ecosystem.",
    },
    role: {
      en: "Creator",
      fr: "Créateur",
      ewe: "Wɔla",
    },
    href: "https://github.com/starlabman/Korea-Blockchain-Gaming-Map-Shareable-Infographic",
    chips: ["Infographic", "Blockchain Gaming", "Research"],
    featured: true,
  },
  {
    title: "Chaapa Ride",
    blurb: {
      en: "Landing page for Chaapa Ride mobility platform.",
      fr: "Page d'atterrissage pour la plateforme de mobilité Chaapa Ride.",
      ewe: "Landing page na Chaapa Ride mobility platform.",
    },
    role: {
      en: "Co-Founder & Developer",
      fr: "Co-Fondateur & Développeur",
      ewe: "Co-Gɔmeɖoanyila kple Dɔwɔla",
    },
    href: "https://github.com/chaapa-ride/landingpage",
    chips: ["Web", "Mobility", "Startup"],
    featured: true,
  },
]

export const additionalProjects = [
  {
    title: "Phonebook Management System",
    blurb: {
      en: "Laravel Livewire app for managing telephone directories with real-time search.",
      fr: "Application Laravel Livewire pour la gestion de répertoires téléphoniques avec recherche en temps réel.",
      ewe: "Laravel Livewire dɔwɔwɔ na ameŋkɔwo dzikpɔkpɔ kple real-time search.",
    },
    href: "https://github.com/starlabman/phonebook",
    chips: ["Laravel", "Livewire", "PHP"],
  },
  {
    title: "Alchemy NFT API Integration",
    blurb: {
      en: "JavaScript template for integrating Alchemy's NFT API with documentation and examples.",
      fr: "Modèle JavaScript pour l'intégration de l'API NFT d'Alchemy avec documentation et exemples.",
      ewe: "JavaScript template na Alchemy NFT API integration kple documentation.",
    },
    href: "https://github.com/starlabman/alchemyAPI_NFT",
    chips: ["JavaScript", "NFT", "API"],
  },
  {
    title: "Candy Machine Responsive UI",
    blurb: {
      en: "TypeScript responsive UI for Solana Candy Machine NFT minting.",
      fr: "Interface TypeScript responsive pour le minting NFT Solana Candy Machine.",
      ewe: "TypeScript responsive UI na Solana Candy Machine NFT minting.",
    },
    href: "https://github.com/starlabman/Candy-Responsive-Machine-ui",
    chips: ["TypeScript", "Solana", "NFT"],
  },
  {
    title: "Xamarin Firebase Firestore Plugin",
    blurb: {
      en: "Cross-platform plugin for Firebase Cloud Firestore in Xamarin.Forms apps.",
      fr: "Plugin multiplateforme pour Firebase Cloud Firestore dans les apps Xamarin.Forms.",
      ewe: "Cross-platform plugin na Firebase Cloud Firestore le Xamarin.Forms apps me.",
    },
    href: "https://github.com/starlabman/Xamarin-forms-plugincloudfirestore",
    chips: ["C#", "Xamarin", "Firebase"],
  },
  {
    title: "Xamarin.Forms UI Collection",
    blurb: {
      en: "Curated collection of Xamarin.Forms UI samples for mobile development.",
      fr: "Collection organisée d'exemples UI Xamarin.Forms pour le développement mobile.",
      ewe: "Xamarin.Forms UI samples ƒe collection na mobile dɔwɔwɔ.",
    },
    href: "https://github.com/starlabman/Xamarin.Forms-UI",
    chips: ["Xamarin", "Mobile", "UI"],
  },
  {
    title: "Developer Resources Hub",
    blurb: {
      en: "Collaborative repository of essential resources and guides for developers.",
      fr: "Dépôt collaboratif de ressources et guides essentiels pour les développeurs.",
      ewe: "Collaborative repository na nusrɔ̃lawo ƒe resources kple guides.",
    },
    href: "https://github.com/starlabman/dev-resources",
    chips: ["Resources", "Documentation", "Community"],
  },
]

export const galleryImages = [
  {
    id: 1,
    title: {
      en: "Code Africa 2.0 — Speaker",
      fr: "Code Africa 2.0 — Speaker",
      ewe: "Code Africa 2.0 — Nuƒoƒola",
    },
    description: {
      en: "Speaking at Code Africa 2.0 on the future of developers.",
      fr: "Présentation à Code Africa 2.0 sur le futur des développeurs.",
      ewe: "Code Africa 2.0 nuƒoƒo na nusrɔ̃lawo ƒe etsɔme.",
    },
    category: { en: "Speaking", fr: "Conférences", ewe: "Nuƒoƒo" },
    imageUrl: "/onedev2025.jpg",
    link: "https://x.com/_one_dev/status/1915363135512301920",
    date: "2025",
  },
  {
    id: 2,
    title: {
      en: "Web3Lagos Conference 4.0",
      fr: "Web3Lagos Conference 4.0",
      ewe: "Web3Lagos Nuƒoƒo 4.0",
    },
    description: {
      en: "Build in Public: How African developers can win in Web3.",
      fr: "Build in Public : Comment les développeurs africains peuvent gagner en Web3.",
      ewe: "Build in Public: Alesi Afrika nusrɔ̃lawo ateƒe le Web3 me.",
    },
    category: { en: "Speaking", fr: "Conférences", ewe: "Nuƒoƒo" },
    imageUrl: "/web3lagosconference2025.jpg",
    link: "https://x.com/Web3LagosCon/status/1953158740040991185",
    date: "2025",
  },
  {
    id: 3,
    title: {
      en: "ETHSafari 2025 — Speaker",
      fr: "ETHSafari 2025 — Speaker",
      ewe: "ETHSafari 2025 — Nuƒoƒola",
    },
    description: {
      en: "Africa's largest Ethereum event.",
      fr: "Le plus grand événement Ethereum d'Afrique.",
      ewe: "Afrika Ethereum nuƒoƒo gãtɔ.",
    },
    category: { en: "Speaking", fr: "Conférences", ewe: "Nuƒoƒo" },
    imageUrl: "/ethsafari2025.jpg",
    link: "https://x.com/ETHSafari/status/1963874745176248710",
    date: "2025",
  },
  {
    id: 4,
    title: {
      en: "ETHAfrique 2025 — Speaker",
      fr: "ETHAfrique 2025 — Speaker",
      ewe: "ETHAfrique 2025 — Nuƒoƒola",
    },
    description: {
      en: "First Ethereum conference in Francophone Africa.",
      fr: "Première conférence Ethereum en Afrique francophone.",
      ewe: "Ethereum nuƒoƒo gbãtɔ le Francophone Afrika.",
    },
    category: { en: "Speaking", fr: "Conférences", ewe: "Nuƒoƒo" },
    imageUrl: "/ethafrique2025.jpg",
    link: "https://x.com/0xWeb3DevRel/status/1924974335346737321",
    date: "2025",
  },
  {
    id: 5,
    title: {
      en: "Trezor Academy Lomé — Blockchain Training",
      fr: "Trezor Academy Lomé — Formation Blockchain",
      ewe: "Trezor Academy Lomé — Blockchain Nusrɔ̃ɖoɖo",
    },
    description: {
      en: "Intensive blockchain development training for African developers.",
      fr: "Formation intensive en développement blockchain pour les développeurs africains.",
      ewe: "Blockchain nusrɔ̃ɖoɖo sesẽ na Afrika nusrɔ̃lawo.",
    },
    category: { en: "Education", fr: "Éducation", ewe: "Nusrɔ̃ɖoɖo" },
    imageUrl: "/trezoracademylome2025.jpg",
    link: "https://x.com/0xWeb3DevRel/status/1950949216374641087",
    date: "2025",
  },
  {
    id: 6,
    title: {
      en: "Daytona Tour Lomé — Web3 Workshop",
      fr: "Daytona Tour Lomé — Atelier Web3",
      ewe: "Daytona Tour Lomé — Web3 Dɔwɔƒe",
    },
    description: {
      en: "Hands-on Web3 development workshop for students.",
      fr: "Atelier pratique de développement Web3 pour les étudiants.",
      ewe: "Web3 dɔwɔƒe nusrɔ̃ɖoɖo na sukulawo.",
    },
    category: { en: "Education", fr: "Éducation", ewe: "Nusrɔ̃ɖoɖo" },
    imageUrl: "/daytonatourlome2025.jpg",
    link: "https://x.com/0xWeb3DevRel/status/1907107566120800357",
    date: "2025",
  },
  {
    id: 7,
    title: {
      en: "10 Years of Ethereum — Community Event",
      fr: "10 Ans d'Ethereum — Événement Communautaire",
      ewe: "Ethereum ƒe ƒe 10 — Habɔbɔ Nuƒoƒo",
    },
    description: {
      en: "Community celebration of Ethereum's 10th anniversary.",
      fr: "Célébration communautaire du 10ème anniversaire d'Ethereum.",
      ewe: "Ethereum ƒe ƒe 10 dzidzɔkuku nuƒoƒo.",
    },
    category: { en: "Education", fr: "Éducation", ewe: "Nusrɔ̃ɖoɖo" },
    imageUrl: "/10yearseth.jpg",
    link: "https://x.com/0xWeb3DevRel/status/1896894917492019596",
    date: "2025",
  },
  {
    id: 8,
    title: {
      en: "Radio Emission — Blockchain Awareness",
      fr: "Émission Radio — Sensibilisation Blockchain",
      ewe: "Radio Emission — Blockchain Nya",
    },
    description: {
      en: "Radio broadcast on blockchain adoption and education.",
      fr: "Émission radio sur l'adoption et l'éducation blockchain.",
      ewe: "Radio nuƒoƒo na blockchain adoption kple nusrɔ̃ɖoɖo.",
    },
    category: { en: "Education", fr: "Éducation", ewe: "Nusrɔ̃ɖoɖo" },
    imageUrl: "/emmissionradio.jpg",
    link: "https://x.com/0xWeb3DevRel/status/1950949216374641087",
    date: "2025",
  },
  {
    id: 9,
    title: {
      en: "Bitcoin Pizza Party Lomé — Networking",
      fr: "Bitcoin Pizza Party Lomé — Networking",
      ewe: "Bitcoin Pizza Party Lomé — Kpekpeɖeŋu",
    },
    description: {
      en: "Networking event with the blockchain community.",
      fr: "Événement de networking avec la communauté blockchain.",
      ewe: "Blockchain habɔbɔ kple kpekpeɖeŋu nuƒoƒo.",
    },
    category: { en: "Events", fr: "Événements", ewe: "Nuƒoƒowo" },
    imageUrl: "/bitcoinpizzapartylome2025.jpg",
    link: "https://x.com/0xWeb3DevRel/status/1926948041363271862",
    date: "2025",
  },
  {
    id: 10,
    title: {
      en: "Trust Wallet Meetup Lomé",
      fr: "Meetup Trust Wallet Lomé",
      ewe: "Trust Wallet Meetup Lomé",
    },
    description: {
      en: "Keynote at blockchain innovation meetup.",
      fr: "Keynote au meetup d'innovation blockchain.",
      ewe: "Blockchain innovation meetup nuƒoƒo gã.",
    },
    category: { en: "Events", fr: "Événements", ewe: "Nuƒoƒowo" },
    imageUrl: "/trustwalletmeetuplome2025.jpg",
    link: "https://x.com/0xWeb3DevRel/status/1930007463723708674",
    date: "2025",
  },
  {
    id: 11,
    title: {
      en: "ETHAfrique Tour Calavi — Web3 Presentation",
      fr: "ETHAfrique Tour Calavi — Présentation Web3",
      ewe: "ETHAfrique Tour Calavi — Web3 Nuƒoƒo",
    },
    description: {
      en: "Presentation on Web3 adoption in emerging markets.",
      fr: "Présentation sur l'adoption Web3 dans les marchés émergents.",
      ewe: "Web3 adoption nuƒoƒo le emerging markets me.",
    },
    category: { en: "Events", fr: "Événements", ewe: "Nuƒoƒowo" },
    imageUrl: "/ethafriquetourcalavi2025.jpg",
    link: "https://x.com/0xWeb3DevRel/status/1950463537949618685",
    date: "2025",
  },
  {
    id: 12,
    title: {
      en: "ETHAfrique Conference — Panel",
      fr: "ETHAfrique Conference — Panel",
      ewe: "ETHAfrique Conference — Panel",
    },
    description: {
      en: "Panel discussion at the ETHAfrique conference.",
      fr: "Discussion panel lors de la conférence ETHAfrique.",
      ewe: "Panel discussion le ETHAfrique conference me.",
    },
    category: { en: "Events", fr: "Événements", ewe: "Nuƒoƒowo" },
    imageUrl: "/ethafriqueconf.jpg",
    link: "https://x.com/0xWeb3DevRel/status/1950463537949618685",
    date: "2024",
  },
]

export const thoughtLeadership = {
  articles: [
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
      readTime: { en: "15 min read", fr: "15 min de lecture", ewe: "Xlẽ miniti 15" },
      tags: ["Arbitrum", "Stylus", "DApp", "Blockchain"],
      platform: "Hashnode",
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
      readTime: { en: "10 min read", fr: "10 min de lecture", ewe: "Xlẽ miniti 10" },
      tags: ["Arbitrum", "Developer Advocate", "DevRel", "Strategy"],
      platform: "Hashnode",
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
      readTime: { en: "12 min read", fr: "12 min de lecture", ewe: "Xlẽ miniti 12" },
      tags: ["DevRel", "Education", "Career", "Community"],
      platform: "Hashnode",
    },
    {
      title: {
        en: "Creating Your First Unique Digital Token: A Beginner's Guide to NFTs",
        fr: "Créer Votre Premier Jeton Numérique Unique : Un Guide pour Débutants sur les NFTs",
        ewe: "Digital Token Yeyewo Wɔwɔ: NFT Gɔmeɖeɖe na Ame Yeyewo",
      },
      description: {
        en: "A beginner-friendly guide to understanding and creating Non-Fungible Tokens.",
        fr: "Un guide convivial pour les débutants afin de comprendre et créer des Tokens Non Fongibles.",
        ewe: "Mɔfiame bɔbɔe na ame yeyewo be woase gɔme kple woawɔ NFTs.",
      },
      href: "https://starlabman.hashnode.dev/creating-your-first-unique-digital-token-a-beginners-guide-to-nfts",
      readTime: { en: "8 min read", fr: "8 min de lecture", ewe: "Xlẽ miniti 8" },
      tags: ["NFTs", "Blockchain", "Beginner"],
      platform: "Hashnode",
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
      readTime: { en: "6 min read", fr: "6 min de lecture", ewe: "Xlẽ miniti 6" },
      tags: ["DevRel", "Developer Relations", "Community"],
      platform: "Hashnode",
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
      readTime: { en: "20 min read", fr: "20 min de lecture", ewe: "Xlẽ miniti 20" },
      tags: ["Blockchain", "DApp", "Next.js", "Solidity", "Web3.js"],
      platform: "Hashnode",
    },
  ],
  threads: [
    {
      title: {
        en: "Building Web3 Developer Communities in Africa",
        fr: "Construire des Communautés de Développeurs Web3 en Afrique",
        ewe: "Web3 Nusrɔ̃la Hamewo Tutu le Afrika",
      },
      href: "https://x.com/0xWeb3DevRel/status/1841117454279295099",
    },
    {
      title: {
        en: "ETHAfrique: Building Ethereum Ecosystem Across Africa",
        fr: "ETHAfrique: Construire l'Écosystème Ethereum à Travers l'Afrique",
        ewe: "ETHAfrique: Ethereum Dɔwɔwɔ Fefe le Afrika",
      },
      href: "https://x.com/0xWeb3DevRel/status/1947611741908582746",
    },
    {
      title: {
        en: "Web3 Career Transition Guide for African Developers",
        fr: "Guide de Transition de Carrière Web3 pour les Développeurs Africains",
        ewe: "Web3 Dɔwɔƒe Gbɔgblɔ Mɔfiame na Afrika Nusrɔ̃lawo",
      },
      href: "https://x.com/0xWeb3DevRel/status/1939701646734290950",
    },
    {
      title: {
        en: "Blockchain Security Best Practices for Developers",
        fr: "Meilleures Pratiques de Sécurité Blockchain pour les Développeurs",
        ewe: "Blockchain Dzigbɔkpɔ Dɔwɔwɔ Nyuitɔwo na Nusrɔ̃lawo",
      },
      href: "https://x.com/0xWeb3DevRel/status/1948418868658995388",
    },
    {
      title: {
        en: "Africa Blockchain Community: Connecting Developers Across the Continent",
        fr: "Communauté Blockchain Afrique : Connecter les Développeurs à Travers le Continent",
        ewe: "Afrika Blockchain Habɔbɔ: Nusrɔ̃lawo Kpekpe le Dukɔa Me",
      },
      href: "https://x.com/0xWeb3DevRel/status/1896894917492019596",
    },
    {
      title: {
        en: "Smart Contract Development: Advanced Techniques",
        fr: "Développement de Contrats Intelligents : Techniques Avancées",
        ewe: "Smart Contract Dɔwɔwɔ: Mɔ̃ɖaŋu Yeyewo",
      },
      href: "https://x.com/0xWeb3DevRel/status/1952081326544232745",
    },
  ],
  posts: [
    {
      title: {
        en: "ETHAccra — Ethereum Web3 Africa Conference",
        fr: "ETHAccra — Conférence Ethereum Web3 Afrique",
        ewe: "ETHAccra — Ethereum Web3 Afrika Nuƒoƒo",
      },
      href: "https://www.linkedin.com/posts/starlabman_ethaccra-ethereum-web3africa-activity-7371879096919818240-A3Jq",
    },
    {
      title: {
        en: "3 People, 3 Countries — Web3 Global Impact",
        fr: "3 Personnes, 3 Pays — Impact Mondial Web3",
        ewe: "Ame 3, Dukɔ 3 — Web3 Global Impact",
      },
      href: "https://www.linkedin.com/posts/starlabman_3-people-3-countries-activity-7315744661485031425-gN1C",
    },
    {
      title: {
        en: "Day 1 to Day 18 — Web3 Learning Journey",
        fr: "Jour 1 à Jour 18 — Parcours d'Apprentissage Web3",
        ewe: "Ŋkeke 1 ɖe Ŋkeke 18 — Web3 Nusrɔ̃ɖoɖo Mɔzɔzɔ",
      },
      href: "https://www.linkedin.com/posts/starlabman_day1-day18-web3-activity-7300546249521324032-W3dD",
    },
    {
      title: {
        en: "Web3 Community Building & Lifelong Learning",
        fr: "Construction de Communauté Web3 & Apprentissage Continu",
        ewe: "Web3 Habɔbɔ Tutu & Nusrɔ̃ɖoɖo ƒe Mɔzɔzɔ",
      },
      href: "https://www.linkedin.com/posts/starlabman_web3-communitybuilding-lifelonglearning-activity-7277007166438334464-iAg4",
    },
    {
      title: {
        en: "Binance Meetup Lomé — Blockchain Education",
        fr: "Binance Meetup Lomé — Éducation Blockchain",
        ewe: "Binance Meetup Lomé — Blockchain Nusrɔ̃ɖoɖo",
      },
      href: "https://www.linkedin.com/posts/starlabman_binancemeetuplome-binance-meetup-activity-7209154497812606976-2eVJ",
    },
  ],
}

export const services = [
  {
    icon: "code",
    title: {
      en: "Developer Relations",
      fr: "Relations Développeurs",
      ewe: "Nusrɔ̃la Kpekpeɖeŋu",
    },
    description: {
      en: "Developer programs, technical content, workshops, and developer onboarding strategies.",
      fr: "Programmes développeurs, contenu technique, ateliers et stratégies d'onboarding.",
      ewe: "Nusrɔ̃la dɔwɔwɔwo, technical content, dɔwɔƒewo kple onboarding strategies.",
    },
  },
  {
    icon: "globe",
    title: {
      en: "Ecosystem Growth",
      fr: "Croissance d'Écosystème",
      ewe: "Nutome Dziɖuɖu",
    },
    description: {
      en: "Community strategy, ecosystem activation, partnerships, and local market expansion.",
      fr: "Stratégie communautaire, activation d'écosystème, partenariats et expansion locale.",
      ewe: "Habɔbɔ aɖaŋuɖoɖo, nutome activation, kpekpeɖeŋu kple asi ɖoɖo.",
    },
  },
  {
    icon: "users",
    title: {
      en: "Community Building",
      fr: "Construction de Communauté",
      ewe: "Habɔbɔ Tutu",
    },
    description: {
      en: "Meetups, ambassador programs, community operations, and engagement strategies.",
      fr: "Meetups, programmes ambassadeurs, opérations communautaires et engagement.",
      ewe: "Meetups, ambassador programs, habɔbɔ operations kple engagement strategies.",
    },
  },
  {
    icon: "book",
    title: {
      en: "Developer Education",
      fr: "Éducation des Développeurs",
      ewe: "Nusrɔ̃la Nusrɔ̃ɖoɖo",
    },
    description: {
      en: "Bootcamps, workshops, university programs, and technical training.",
      fr: "Bootcamps, ateliers, programmes universitaires et formations techniques.",
      ewe: "Bootcamps, dɔwɔƒewo, university programs kple technical training.",
    },
  },
  {
    icon: "zap",
    title: {
      en: "Web3 Development",
      fr: "Développement Web3",
      ewe: "Web3 Dɔwɔwɔ",
    },
    description: {
      en: "DApps, blockchain integrations, smart contracts, and Web3 infrastructure.",
      fr: "DApps, intégrations blockchain, contrats intelligents et infrastructure Web3.",
      ewe: "DApps, blockchain integrations, smart contracts kple Web3 infrastructure.",
    },
  },
  {
    icon: "map",
    title: {
      en: "Africa Market Expansion",
      fr: "Expansion Marché Africain",
      ewe: "Afrika Asi Ɖoɖo",
    },
    description: {
      en: "Helping Web3 protocols understand and activate African and Francophone communities.",
      fr: "Aider les protocoles Web3 à comprendre et activer les communautés africaines et francophones.",
      ewe: "Web3 protocols mɔfiame na Afrika kple Francophone habɔbɔwo.",
    },
  },
]
