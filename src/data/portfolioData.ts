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
  "FAQ",
  "Contact",
] as const;

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/elshaddaioheha" },
  { label: "Email", href: "mailto:info@ohehaebibi.dev" },
  { label: "Twitter", href: "https://x.com/0hehaebib1" },
  { label: "Instagram", href: "https://instagram.com/0hehaebib1" },
];

export const skillCategories = [
  {
    category: "Frontend",
    skills: ["TypeScript", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "TanStack Query", "Figma"],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express.js", "Fastify", "REST APIs", "Zod"],
  },
  {
    category: "Mobile",
    skills: ["React Native"],
  },
  {
    category: "Data & Queues",
    skills: ["MongoDB", "Supabase", "Firebase", "Redis", "BullMQ"],
  },
  {
    category: "DevOps & Testing",
    skills: ["Docker", "Vercel", "GitHub Actions", "Vitest"],
  },
  {
    category: "Currently learning",
    skills: ["Go (distributed systems)"],
  },
] as const;

export const expertiseItems: ExpertiseItem[] = [
  {
    title: "Website Development",
    desc: "Building fast, mobile-first websites and web apps for businesses, startups and personal brands, from landing pages to full platforms, with SEO, analytics and contact forms set up from day one.",
  },
  {
    title: "Website Revamp & Redesign",
    desc: "Revamping outdated or slow websites: a modern redesign, faster load times, better Core Web Vitals and search rankings, and a migration to React or Next.js without losing existing content or traffic.",
  },
  {
    title: "Full-Stack Web Engineering",
    desc: "Building end-to-end products in TypeScript: React and Next.js frontends styled with Tailwind CSS, backed by Node.js APIs on Express or Fastify, with background workers and queues where the work needs them.",
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
    title: "Mobile App Development",
    desc: "Building cross-platform iOS and Android apps with React Native, sharing types, validation and API clients with the web app so both stay in step.",
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
    title: "Ghostwriting & Technical Content",
    desc: "Ghostwriting blog posts, website copy, case studies, documentation and LinkedIn articles under your name, written by an engineer so the technical details are accurate and the tone still sounds like you.",
  },
  {
    title: "Academic Writing & Editing",
    desc: "Academic ghostwriting and editing support for researchers, lecturers and professionals: journal articles, book chapters, conference papers, grant proposals and literature reviews, plus proofreading, restructuring and APA, MLA or Harvard referencing.",
  },
  {
    title: "Sound Design",
    desc: "Applying technical audio engineering skills to create immersive soundscapes and ambient tracks using FL Studio.",
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Exergy Intelligence",
    role: "Founder & Lead Engineer",
    period: "Sep 2026 - Present",
    location: "Lagos, Nigeria",
    desc: "Building a cost intelligence platform for Nigerian fleets and importers: fuel benchmarks by state, corridor trip costing and landed cost. In active development.",
    highlights: [
      "Designed a TypeScript monorepo: a Next.js web app, a Fastify REST API with OpenAPI docs, and BullMQ workers on Redis, sharing types and Zod validation.",
      "Every figure is labelled observed, estimated or forecast, with a confidence score, so users know how far to trust it.",
      "Multi-tenant data layer with organisation isolation and role-based access for owners, fleet managers, procurement and analysts.",
    ],
  },
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
    desc: "Delivering React, Next.js and Node.js applications for clients, from marketing sites to payment platforms.",
    highlights: [
      "Delivered performance-focused React and Next.js frontends with Tailwind CSS and TypeScript.",
      "Shipped Node.js/Express backends and Dockerized environments with repeatable deploys.",
      "Built escrow and verification features for marketplace clients, including Hedera-based integrations.",
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
    title: "Exergy Intelligence (in progress)",
    desc: "My startup: cost intelligence for moving goods in volatile markets. Diesel benchmarks by state, corridor trip costing and landed cost for Nigerian fleets and importers, tracking currency, fuel and freight volatility.",
    featured: true,
    category: "fullstack",
    link: "https://exergyintelligence.tech",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Fastify", "MongoDB", "Redis", "BullMQ", "Docker"],
    achievements: [
      "Prices a corridor trip such as Lagos to Kano leg by leg at the state where the truck refuels, then adds driver, toll and maintenance costs.",
      "Breaks landed cost into components and models how naira, diesel and freight moves change duty, VAT and margin.",
      "API first: a documented REST API powers the app, so corridor and landed costs can flow straight into an ERP or TMS.",
    ],
    media: { src: "/exergy.webp", alt: "Exergy Intelligence landing page", width: 1200, height: 630 },
  },
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
    media: { src: "/tebi.webp", alt: "Diamond Dreams Group homepage", width: 1280, height: 628 },
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
    media: { src: "/swen-autos.webp", alt: "Swen-Autos marketplace demo", width: 1280, height: 628 },
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
    media: { src: "/agebjo.webp", alt: "Agbejo swap flow", width: 1280, height: 729 },
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
    media: { src: "/breezefee.webp", alt: "Breezefee payment flow", width: 1280, height: 728 },
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
    media: { src: "/gallery-oloja.png", alt: "Oloja Foundation homepage", width: 1024, height: 477 },
  },
];

export const galleryItems: GalleryItem[] = [
  { name: "Exergy Intelligence", src: "/exergy.webp", alt: "Exergy Intelligence landing page", width: 1200, height: 630 },
  { name: "SwenAutos", src: "/gallery-swenautos.png", alt: "SwenAutos Platform", width: 1024, height: 573 },
  { name: "SwenAutos (demo)", src: "/swen-autos.webp", alt: "SwenAutos live demo", width: 1280, height: 628 },
  { name: "Agbejo", src: "/gallery-agbejo.png", alt: "Agbejo Escrow", width: 1024, height: 489 },
  { name: "Agbejo (demo)", src: "/agebjo.webp", alt: "Agbejo swap flow", width: 1280, height: 729 },
  { name: "Diamond Dreams Group", src: "/tebi.webp", alt: "Diamond Dreams Group", width: 1280, height: 628 },
  { name: "Breezefee", src: "/breezefee.webp", alt: "Breezefee payments", width: 1280, height: 728 },
  { name: "Oloja Foundation", src: "/gallery-oloja.png", alt: "Oloja Foundation", width: 1024, height: 477 },
  { name: "Ayan Collection", src: "/gallery-ayan.png", alt: "Ayan Collection", width: 1024, height: 473 },
];
