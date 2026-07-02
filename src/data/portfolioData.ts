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

export const skillCategories = [
  {
    category: "Frontend & Core",
    skills: ["JavaScript", "React.js", "Figma"],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express.js"],
  },
  {
    category: "Databases",
    skills: ["Supabase", "Firebase", "MongoDB"],
  },
  {
    category: "DevOps & Blockchain",
    skills: ["Docker", "Hedera SDK"],
  },
] as const;

// Backward compatible lists if needed
export const coreSkills = [
  "JavaScript",
  "React.js",
  "Figma",
  "Node.js",
  "Express.js",
] as const;

export const web3Skills = [
  "Supabase",
  "Firebase",
  "MongoDB",
  "Docker",
  "Hedera SDK",
] as const;

export const expertiseItems: ExpertiseItem[] = [
  {
    title: "Full-Stack JavaScript Engineering",
    desc: "Architecting end-to-end applications using React for responsive frontends and Node.js/Express for robust, scalable backend services.",
  },
  {
    title: "UI Design & Figma Integration",
    desc: "Translating high-fidelity Figma mockups into pixel-perfect, responsive React interfaces with clean layout semantics and micro-interactions.",
  },
  {
    title: "Database Architecture",
    desc: "Designing and optimizing data storage systems across Supabase, Firebase, and MongoDB, ensuring robust data integrity and efficient queries.",
  },
  {
    title: "Blockchain Integration",
    desc: "Building specialized blockchain features and ledger integrations utilizing the Hedera Hashgraph SDK in JavaScript/TypeScript environments.",
  },
  {
    title: "Containerization & DevOps",
    desc: "Implementing Docker containerization to standardize local development and build predictable, environment-agnostic CI/CD pipelines.",
  },
  {
    title: "API Design & Performance",
    desc: "Engineering RESTful and real-time APIs with Express, integrating third-party services and optimizing security, logging, and data flows.",
  },
  {
    title: "Sound Design",
    desc: "Applying technical audio engineering skills to create immersive soundscapes and ambient tracks using FL Studio.",
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Bolojar Technologies",
    role: "Software Engineer (Full-time)",
    period: "Apr 2026 - Present",
    location: "Lagos, Nigeria",
    desc: "Developing scalable full-stack applications with JavaScript, optimizing databases, and orchestrating containerized pipelines.",
    highlights: [
      "Building client frontends with React.js and backend service engines with Node.js/Express.",
      "Configuring datastores across MongoDB, Supabase, and Firebase.",
      "Containerizing local environments and deployment nodes using Docker.",
    ],
  },
  {
    company: "AZ-Genes (Biotech Startup)",
    role: "Backend Developer (Part-time)",
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
    role: "Lead Full Stack Engineer (Part-time)",
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
    role: "Software Engineer (Part-time)",
    period: "Jan 2025 - Present",
    location: "Remote",
    desc: "Delivering MERN stack applications, Dockerizing environments, and writing Hedera-backed smart contracts.",
    highlights: [
      "Shipped production MERN and blockchain applications with containerized pipelines for clients.",
      "Implemented blockchain integrations using Hedera SDK for secure, decentralized escrow and transaction flows.",
      "Delivered performance-focused React frontends with Tailwind and TypeScript.",
    ],
  },
  {
    company: "Telus International",
    role: "Data Entry & AI Contributor (Part-time)",
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
    title: "distriQ (Distributed Job Queue)",
    desc: "A production-grade, Redis-backed distributed job queue for Node.js and TypeScript modeled after RabbitMQ, designed for linearizable state transitions, at-least-once delivery, and worker pool scaling.",
    featured: true,
    category: "backend",
    link: "https://github.com/elshaddaioheha/distriQ",
    repo: "https://github.com/elshaddaioheha/distriQ",
    techStack: ["TypeScript", "Node.js", "Redis", "Lua Scripts", "Docker"],
    achievements: [
      "Ensures atomic job scheduling and state transition linearizability using transactional Lua scripts inside Redis ZSETs.",
      "Implements a multi-worker pool with active heartbeat monitoring, auto-recovery for crashed workers, and rate limiting.",
      "Supports delayed jobs, priority queuing, deduplication, and a capped dead-letter queue (DLQ) for failed runs.",
    ],
  },
  {
    year: "2026",
    title: "Diamond Dreams Group",
    desc: "A comprehensive digital ecosystem for event services and business training, integrating the TEBI LMS platform to deliver seamless course delivery and community engagement.",
    featured: true,
    category: "fullstack",
    link: "https://diamonddreamsgroup.com",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Redis", "Node.js", "Vercel"],
    achievements: [
      "Architected a unified digital platform for event management and business learning, scaling user engagement and course access.",
      "Integrated TEBI LMS with Redis-backed session caching to handle concurrent learners and ensure sub-second response times.",
      "Configured adaptive video encoding for low-data networks, allowing smooth media playback across various user connections.",
    ],
    media: { src: "/tebi.gif", alt: "Diamond Dreams Group homepage" },
  },
  {
    year: "2025",
    title: "Enterprise Node.js Template",
    desc: "An enterprise layered API boilerplate in JavaScript/Node.js, forked and extended to demonstrate clean architecture, type-safe validations, and comprehensive error containment.",
    category: "backend",
    link: "https://github.com/elshaddaioheha/node-template-oheha",
    repo: "https://github.com/elshaddaioheha/node-template-oheha",
    techStack: ["Node.js", "Express.js", "JavaScript", "VSL Validator", "Architecture"],
    achievements: [
      "Extended a layered REST architecture (Controller-Service-Repository), decoupling HTTP routing logic from business services.",
      "Constructed custom schema specs utilizing Validator Spec Language (VSL) to enforce strong typing and value normalization.",
      "Configured unified error handlers, winston logging telemetry, path aliases, and standard mock utilities.",
    ],
  },
  {
    year: "2025",
    title: "Swen-Autos",
    desc: "Automobile marketplace integrating blockchain-backed trust verification and broad payment gateways.",
    category: "fullstack",
    link: "https://swen-autos.vercel.app",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Node.js", "Hedera SDK", "Vercel"],
    achievements: [
      "Hedera-backed listing validation to prevent counterfeits across buyers and sellers.",
      "Multi-rail checkout supports fiat and crypto flows with escrow-style safety.",
      "Optimized search and listing delivery for fast browsing on low-bandwidth devices.",
    ],
    media: { src: "/swen-autos.gif", alt: "Swen-Autos marketplace demo" },
  },
  {
    year: "2025",
    title: "Agbejo",
    desc: "P2P escrow swap platform with secure smart contract validation and smooth onboarding.",
    category: "fullstack",
    link: "https://agbejo.vercel.app",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Hardhat", "Solidity", "Node.js"],
    achievements: [
      "Smart contract logic that enforces escrowed swaps on-chain to reduce counterparty risk.",
      "Bridges Web2 auth into wallet flows so non-crypto users can complete swaps without friction.",
      "Swap flows tuned for low latency across multiple tokens.",
    ],
    media: { src: "/agebjo.gif", alt: "Agbejo swap flow" },
  },
  {
    year: "2024",
    title: "Breezefee",
    desc: "Payment gateway for school fees with secure parent/school flows and production-grade concurrency.",
    category: "fullstack",
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
    category: "fullstack",
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
  { name: "Diamond Dreams Group", src: "/tebi.gif", alt: "Diamond Dreams Group" },
  { name: "Breezefee", src: "/breezefee.gif", alt: "Breezefee payments" },
  { name: "Oloja Foundation", src: "/gallery-oloja.png", alt: "Oloja Foundation" },
  { name: "Ayan Collection", src: "/gallery-ayan.png", alt: "Ayan Collection" },
];
