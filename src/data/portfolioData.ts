import type {
  ExperienceItem,
  ExpertiseItem,
  GalleryItem,
  ProjectItem,
  SocialLink,
} from "../types";

export const navItems = [
  "About",
  "Skills",
  "Expertise",
  "Experience",
  "Works",
  "Contact",
] as const;

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/elshaddaioheha" },
  { label: "Email", href: "mailto:elshaddaioheha@gmail.com" },
  { label: "Twitter", href: "https://x.com/0hehaebib1" },
  { label: "Instagram", href: "https://instagram.com/0hehaebib1" },
];

export const coreSkills = [
  "MONGODB",
  "EXPRESS.JS",
  "REACT.JS",
  "NODE.JS",
  "TYPESCRIPT",
  "NEXT.JS",
] as const;

export const web3Skills = [
  "SOLIDITY",
  "HEDERA SDK",
  "DOCKER",
  "SYSTEM ARCHITECTURE",
  "FL STUDIO",
] as const;

export const expertiseItems: ExpertiseItem[] = [
  {
    title: "System Architecture",
    desc: "Designing robust, secure, and maintainable backend ecosystems using microservices (Docker).",
  },
  {
    title: "API Development",
    desc: "Building scalable RESTful APIs with Node.js and optimizing database interactions (SQL/NoSQL).",
  },
  {
    title: "Web3 & Blockchain",
    desc: "Implementing trustless logic using Solidity smart contracts and the Hedera SDK.",
  },
  {
    title: "Frontend Performance",
    desc: "Engineering responsive UIs with Next.js and Tailwind CSS that achieve 95+ Lighthouse scores.",
  },
  {
    title: "Data Modeling",
    desc: "Designing complex schemas for sensitive data (HealthTech) ensuring high performance and security.",
  },
  {
    title: "Sound Design",
    desc: "Applying technical audio engineering skills to create immersive soundscapes (FL Studio).",
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "AZ-Genes (Biotech Startup)",
    role: "Backend Developer",
    period: "Oct 2025 - Present",
    location: "Remote",
    desc: "Architecting secure Node.js services and building custom mock servers for offline testing.",
    highlights: [
      "Containerized services with Docker to standardize environments for regulated biotech data.",
      "Mock servers enable offline QA, unblocking test runs when partner APIs are unavailable.",
      "Hardened auth and logging for compliance-oriented data flows.",
    ],
  },
  {
    company: "The Oloja Foundation (Non-Profit)",
    role: "Lead Full Stack Engineer",
    period: "Nov 2025 - Present",
    location: "Remote",
    desc: "Engineering the official platform (Next.js) and optimizing performance for low-bandwidth users in emerging markets.",
    highlights: [
      "Built Paystack-powered donor flows and recurring giving journeys.",
      "Edge-rendered pages and media optimization keep TTFB low for emerging markets.",
      "Structured campaign pages for transparent reporting to donors and partners.",
    ],
  },
  {
    company: "Freelance",
    role: "Software Engineer",
    period: "Jan 2025 - Present",
    location: "Remote",
    desc: "Delivering MERN stack applications, Dockerizing environments, and writing Solidity smart contracts.",
    highlights: [
      "Shipped production MERN and Web3 apps with containerized pipelines for clients.",
      "Implemented Solidity contracts and Hardhat testing for escrow and token flows.",
      "Delivered performance-focused React frontends with Tailwind and TypeScript.",
    ],
  },
  {
    company: "Telus International",
    role: "Data Entry & AI Contributor",
    period: "May 2022 - Aug 2023",
    location: "Remote",
    desc: "High-precision data validation for AI models.",
    highlights: [
      "Validated large datasets for model training with a focus on accuracy and consistency.",
      "Followed rigorous QA checklists to keep error rates low across deliverables.",
      "Collaborated with distributed teams to unblock labeling workflows on tight SLAs.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    year: "2026",
    title: "TEBI LMS",
    desc: "LMS for event business owners and planners with resilient streaming for low-data networks.",
    featured: true,
    link: "https://tebiglobal.vercel.app",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Redis", "Node.js", "Vercel"],
    achievements: [
      "Handles 1k+ concurrent learners with Redis-backed session caching to keep latency low during launches.",
      "Adaptive high-bitrate encoding tuned for low-data environments to keep streams crisp without buffering spikes.",
      "Event-focused onboarding flows that help planners ship courses quickly.",
    ],
    media: { src: "/tebi.gif", alt: "TEBI LMS in action" },
  },
  {
    year: "2025",
    title: "Swen-Autos",
    desc: "Automobile marketplace bridging Web2 and Web3 with blockchain-backed trust and broad payment options.",
    link: "https://swen-autos.vercel.app",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Node.js", "Solidity", "Vercel"],
    achievements: [
      "Blockchain-backed identity for listings to reduce counterfeits across buyers and sellers.",
      "Multi-rail checkout supports fiat and crypto flows with escrow-style safety.",
      "Optimized search and listing delivery for fast browsing on low-bandwidth devices.",
    ],
    media: { src: "/swen-autos.gif", alt: "Swen-Autos marketplace demo" },
  },
  {
    year: "2025",
    title: "Agbejo",
    desc: "P2P token swap platform with secure smart contracts and smooth Web2 → Web3 onboarding.",
    link: "https://agbejo.vercel.app",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Hardhat", "Solidity", "Node.js"],
    achievements: [
      "Hardhat-compiled smart contract enforces escrowed swaps to reduce counterparty risk.",
      "Bridges Web2 auth into wallet flows so non-crypto users can complete swaps without friction.",
      "Swap flows tuned for low latency across multiple tokens.",
    ],
    media: { src: "/agebjo.gif", alt: "Agbejo swap flow" },
  },
  {
    year: "2024",
    title: "Breezefee",
    desc: "Payment gateway for school fees with secure parent/school flows and production-grade concurrency.",
    link: "https://breezefee-32f69.web.app/",
    techStack: ["React", "TypeScript", "Tailwind", "Firebase", "Node.js"],
    achievements: [
      "Built for peak-term fee surges with responsive, queue-safe payment submission.",
      "Supports onboarded schools managing term/session fees and receipts in one place.",
      "Fast, low-friction checkout tuned for mobile parents and guardians.",
    ],
    media: { src: "/breezefee.gif", alt: "Breezefee payment flow" },
  },
  {
    year: "2024",
    title: "The Oloja Foundation",
    desc: "Non-profit platform handling donor payments with Paystack and performant content delivery.",
    link: "https://theolojafoundation.vercel.app",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Paystack", "Vercel"],
    achievements: [
      "Multi-donor checkout with Paystack to simplify recurring giving.",
      "Optimized hero and gallery media for fast loads on slow networks.",
      "Content structure tailored for campaigns and reporting to stakeholders.",
    ],
    media: { src: "/gallery-oloja.png", alt: "Oloja Foundation homepage" },
  },
];

export const galleryItems: GalleryItem[] = [
  { name: "SwenAutos", src: "/gallery-swenautos.png", alt: "SwenAutos Platform" },
  { name: "SwenAutos (GIF)", src: "/swen-autos.gif", alt: "SwenAutos live demo" },
  { name: "Agbejo", src: "/gallery-agbejo.png", alt: "Agbejo Escrow" },
  { name: "Agbejo (GIF)", src: "/agebjo.gif", alt: "Agbejo swap flow" },
  { name: "TEBI", src: "/tebi.gif", alt: "TEBI LMS" },
  { name: "Breezefee", src: "/breezefee.gif", alt: "Breezefee payments" },
  { name: "Oloja Foundation", src: "/gallery-oloja.png", alt: "Oloja Foundation" },
  { name: "Ayan Collection", src: "/gallery-ayan.png", alt: "Ayan Collection" },
];
