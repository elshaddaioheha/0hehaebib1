/**
 * Site-wide facts: identity, positioning copy and contact details.
 * The page, the crawler fallback baked into index.html, the JSON-LD, llms.txt and the sitemap
 * are all generated from this file and portfolioData.ts, so they can't drift apart.
 */

export const site = {
  name: "Oheha Ebibi",
  url: "https://oheha.vercel.app/",
  jobTitle: "Full-Stack Software Engineer",
  // Search-result title: name first for brand searches, then the hiring intent (~60 chars).
  title: "Oheha Ebibi — Web Developer for Hire | Websites & Redesigns",
  // Search-result snippet (~150 chars): what, for whom, and a call to action.
  description:
    "Freelance web developer for website development and redesigns. Fast React, Next.js & Node.js websites, web apps and APIs for businesses. Available now.",
  tagline: "Software Engineer | Full Stack Developer | Sound Designer",
  email: "info@ohehaebibi.dev",
  country: "NG",
  locationLabel: "Nigeria / Remote",
  timezone: "WAT, UTC+1",
  image: "https://oheha.vercel.app/profile.png",
  ogImage: "https://oheha.vercel.app/og-image.png",
  socials: [
    { label: "GitHub", href: "https://github.com/elshaddaioheha" },
    { label: "LinkedIn", href: "https://linkedin.com/in/ojeka-ebibi" },
    { label: "X (Twitter)", href: "https://x.com/0hehaebib1" },
    { label: "Instagram", href: "https://instagram.com/0hehaebib1" },
  ],
} as const;

export const about = {
  lead: "I build full-stack web products with React, Next.js and Node.js, and mobile apps with React Native.",
  paragraphs: [
    "My core stack is TypeScript, React and Tailwind CSS on the frontend and Node.js on the backend, brought together in Next.js. I use React Native when a product needs to be on phones too. I'm currently building Exergy Intelligence, a cost intelligence platform for fleets and importers, and learning Go for distributed systems.",
    "My background in data analytics (Google and Telus AI) drives a commitment to data integrity and system optimization. This analytical mindset balances my work as a sound designer.",
    "A proactive engineer grounded in rigorous CS fundamentals from Harvard CS50, I continue evolving through open source contributions and real-world product delivery.",
  ],
} as const;

/** Questions prospective clients ask before getting in touch. Shown on the page and as FAQPage data. */
export const faqs = [
  {
    q: "Are you available for new projects?",
    a: `Yes. I'm currently taking on new freelance and contract work, from MVPs to new features on existing products. Send a short brief through the contact form or email ${site.email}.`,
  },
  {
    q: "Can you revamp or redesign my existing website?",
    a: "Yes. I audit what you have, then redesign it with a modern, mobile-first layout, speed it up, fix technical SEO issues and move it to a maintainable stack such as React or Next.js, keeping your content, URLs and search rankings intact.",
  },
  {
    q: "Do you work with clients outside Nigeria?",
    a: `Yes. I work remotely and already collaborate with distributed teams. I'm based in Nigeria (${site.timezone}), which overlaps comfortably with European working hours and part of the US day.`,
  },
  {
    q: "What kind of projects can you build?",
    a: "Business websites, landing pages, portfolios and full-stack web applications with React or Next.js frontends styled in Tailwind CSS and Node.js/Express backends, REST and real-time APIs, payment flows with Paystack, databases on MongoDB, Supabase and Firebase, Dockerised deployments, and cross-platform mobile apps with React Native.",
  },
  {
    q: "Can you turn my Figma designs into a working website?",
    a: "Yes. I translate Figma mockups into responsive React interfaces with clean, semantic layouts and considered micro-interactions, then connect them to the backend and data they need.",
  },
  {
    q: "Do you take on anything besides development?",
    a: "Occasionally, writing. I ghostwrite and edit technical content such as blog posts, website copy, case studies and documentation, and help researchers and professionals with academic writing and editing: journal articles, grant proposals, literature reviews and referencing. I don't write coursework or theses for students to submit as their own.",
  },
  {
    q: "How do we get started?",
    a: "Tell me about your goals, timeline and any designs or links through the contact form, or email me directly, and we'll take it from there.",
  },
] as const;
