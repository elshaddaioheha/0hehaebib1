# Oheha Ebibi

**Full-Stack & Backend Software Engineer**

Lagos, Nigeria (WAT, UTC+1) · Remote  
[info@ohehaebibi.dev](mailto:info@ohehaebibi.dev) · [oheha.vercel.app](https://oheha.vercel.app/) · [github.com/elshaddaioheha](https://github.com/elshaddaioheha) · [linkedin.com/in/oheha-ebibi](https://linkedin.com/in/oheha-ebibi) · [x.com/0hehaebib1](https://x.com/0hehaebib1)

Available for work.

## Summary

Building software since 2022. I design and ship resilient web products, edge APIs, and distributed backends with TypeScript, Next.js, Node.js, Cloudflare Workers, Redis, and Docker. Currently building Exergy Intelligence, a corridor and landed-cost engine for volatile logistics markets, while learning Go for distributed systems.

Previously engineered multi-platform POS integrations, biotech backend infrastructure, Paystack payment rails, and low-bandwidth platforms.

## Skills

**Core:** TypeScript · Next.js · Node.js · Fastify · Cloudflare Workers · PostgreSQL · Redis · Docker · Go (learning)

**Also used:** React · Tailwind CSS · Express · Django · React Native · MongoDB · Supabase · Firebase · BullMQ · Zod · Paystack · GitHub Actions · Solidity · Hedera

## Experience

### Founder & Lead Engineer — Exergy Intelligence
Lagos, Nigeria · Sep 2026 — Present

Architecting a multi-tenant freight and landed-cost intelligence platform with Next.js, Fastify, Redis, and BullMQ.

- Designed a TypeScript monorepo: a Next.js web app, a Fastify REST API with OpenAPI docs, and BullMQ workers on Redis, sharing types and Zod validation.
- Label every cost figure as observed, estimated, or forecast, with an explicit confidence score.
- Multi-tenant data layer with organisation isolation and role-based access for owners, fleet managers, procurement, and analysts.

### Software Engineer — Bolojar Technologies
Full-time · Lagos, Nigeria · Apr 2026 — Present

Building full-stack React and Node.js/Express applications, optimizing datastores, and containerizing deployments with Docker.

- Building client frontends with React and backend services with Node.js and Express.
- Configuring datastores across MongoDB, Supabase, and Firebase.
- Containerizing local environments and deployment nodes with Docker.

### Backend Developer — AZ-Genes
Part-time · Malaga, Spain (Remote) · Oct 2024 — Mar 2026

Architected containerized Node.js backend services for regulated biotech workflows, hardened auth and logging, and built offline QA mock servers.

- Containerized services with Docker so environments stayed consistent for regulated biotech data.
- Built mock servers for offline QA so test runs continued when partner APIs were unavailable.
- Hardened authentication and logging for compliance-oriented data flows.

### Contract Developer (Full-Stack) — The Oloja Foundation
Contract · Remote · Nov 2025 — Jan 2026 · 3-month contract

Delivered the official Next.js platform with Paystack recurring donor flows and edge-optimized media for low-bandwidth users.

- Built Paystack-powered donor flows and recurring giving journeys.
- Edge-rendered pages and compressed media kept delivery usable on constrained mobile connections.
- Structured campaign pages for transparent reporting to donors and partners.

### Data Entry & AI Contributor — Telus International
Part-time · Remote · May 2022 — Aug 2023

Started in tech validating high-precision AI training datasets under strict QA checklists and tight SLAs.

- Validated large datasets for model training with a focus on accuracy and consistency.
- Followed rigorous QA checklists to keep error rates low across deliverables.
- Worked with distributed teams to keep labeling workflows on schedule.

## Selected Projects

### Diamond Girl — Multi-Platform POS Integration
2026 · Flagship · [diamond-girl-api.diamondgirl.workers.dev](https://diamond-girl-api.diamondgirl.workers.dev/)

Edge-deployed POS integration API unifying physical point-of-sale checkouts, online storefronts, and multi-platform order and inventory sync on Cloudflare Workers.

- Merchants running terminals and online channels were losing stock accuracy to inventory drift, duplicate orders, and fragmented reconciliation.
- TypeScript API on Cloudflare Workers ingests and normalizes checkout and webhook events, with idempotent order processing and real-time catalog sync.
- One low-latency API is the source of truth for in-store and online stock and fulfillment.
- Stack: TypeScript, Cloudflare Workers, REST, webhooks.

### Exergy Intelligence
2026 · In progress · [exergyintelligence.tech](https://exergyintelligence.tech)

Multi-tenant corridor trip costing and landed-cost engine for Nigerian fleets and importers.

- Prices a corridor such as Lagos to Kano leg by leg at the state where the truck refuels, then adds driver, toll, and maintenance costs.
- Breaks landed cost into components and models how naira, diesel, and freight moves change duty, VAT, and margin.
- Documented REST API so corridor and landed costs can flow into an ERP or TMS.
- Stack: Next.js, TypeScript, Fastify, MongoDB, Redis, BullMQ, Docker.

### distriQ
2026 · Open source · [github.com/elshaddaioheha/distriQ](https://github.com/elshaddaioheha/distriQ)

Redis-backed distributed job queue for Node.js, using atomic Lua scripts in sorted sets, worker heartbeats, auto-recovery, rate limiting, and dead-letter queues.

- Atomic job scheduling and state transitions via transactional Lua scripts in Redis sorted sets.
- Multi-worker pool with heartbeats, recovery for crashed workers, and rate limiting.
- Delayed jobs, priority queues, deduplication, and a capped dead-letter queue.
- Stack: TypeScript, Node.js, Redis, Lua, Docker.

### Diamond Dreams Group
2026 · [diamonddreamsgroup.com](https://diamonddreamsgroup.com)

Unified event commerce and TEBI LMS platform with Redis session caching and adaptive video encoding for low-bandwidth networks.

- Integrated TEBI LMS with Redis-backed session caching for concurrent learners.
- Tuned video delivery so courses stay watchable on low-data connections.
- Stack: Next.js, TypeScript, Redis, Node.js, Vercel.

### Enterprise Node.js Template
2025 · Open source · [github.com/elshaddaioheha/node-template-oheha](https://github.com/elshaddaioheha/node-template-oheha)

Layered Controller–Service–Repository REST boilerplate with schema validation, unified error handling, and Winston telemetry.

- Stack: Node.js, Express, JavaScript.

### Agbejo
2025 · [agbejo.vercel.app](https://agbejo.vercel.app)

P2P escrow swap platform. On-chain settlement with Solidity, with Web2 auth bridged into wallet flows.

- Stack: Next.js, TypeScript, Solidity, Hardhat, Node.js.

### Swen-Autos
2025 · [swen-autos.vercel.app](https://swen-autos.vercel.app)

Automobile marketplace with Hedera-backed listing verification, fiat and crypto checkout, and search tuned for low-bandwidth devices.

- Stack: Next.js, TypeScript, Hedera SDK, Node.js.

### Breezefee
2024 · [breezefee-32f69.web.app](https://breezefee-32f69.web.app/)

School-fee payment gateway for parents and onboarded schools, built for peak-term concurrency and mobile checkout.

- Stack: React, TypeScript, Firebase, Node.js.

### The Oloja Foundation
2025 · [theolojafoundation.vercel.app](https://theolojafoundation.vercel.app)

Non-profit site with Paystack recurring donations and compressed media for slow networks.

- Stack: Next.js, TypeScript, Paystack, Vercel.

## Education

Harvard CS50 — computer science fundamentals (self-directed). Continuing through open-source work and shipped products.

## Additional

Play 5-string bass and engineer live audio.
