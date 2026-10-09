/**
 * Build-time SEO output, generated from the same data the page renders:
 * - crawler HTML baked into index.html (for crawlers and AI tools that don't run JavaScript)
 * - a schema.org JSON-LD graph (ProfilePage, Person + services, projects, FAQPage)
 * - llms.txt and sitemap.xml
 * Wired up by the seo plugin in vite.config.ts.
 */
import { experiences, expertiseItems, projects, skillCategories } from "../data/portfolioData";
import { about, faqs, site } from "../data/site";

const esc = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const abs = (path: string) => new URL(path, site.url).toString();

const id = (fragment: string) => `${site.url}#${fragment}`;

/** Title, description, canonical, identity links and social-card tags for <head>. */
export function renderHeadMeta(): string {
  const shareTitle = `${site.name} — Web Developer for Hire`;
  const imageAlt = `${site.name}, ${site.jobTitle} working in React, Next.js, Tailwind CSS and Node.js`;
  const xHandle = "@" + new URL(site.socials.find((s) => s.href.includes("x.com"))?.href ?? "https://x.com/").pathname.slice(1);
  return [
    `<title>${esc(site.title)}</title>`,
    `<meta name="description" content="${esc(site.description)}">`,
    `<meta name="author" content="${esc(site.name)}">`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">`,
    `<link rel="canonical" href="${site.url}">`,
    ...site.socials.map((s) => `<link rel="me" href="${esc(s.href)}">`),
    `<meta property="og:type" content="profile">`,
    `<meta property="og:site_name" content="${esc(site.name)}">`,
    `<meta property="og:locale" content="en_US">`,
    `<meta property="og:url" content="${site.url}">`,
    `<meta property="og:title" content="${esc(shareTitle)}">`,
    `<meta property="og:description" content="${esc(site.description)}">`,
    `<meta property="og:image" content="${site.ogImage}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:type" content="image/png">`,
    `<meta property="og:image:alt" content="${esc(imageAlt)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:site" content="${esc(xHandle)}">`,
    `<meta name="twitter:creator" content="${esc(xHandle)}">`,
    `<meta name="twitter:title" content="${esc(shareTitle)}">`,
    `<meta name="twitter:description" content="${esc(site.description)}">`,
    `<meta name="twitter:image" content="${site.ogImage}">`,
    `<meta name="twitter:image:alt" content="${esc(imageAlt)}">`,
  ].join("\n  ");
}

/** Semantic, visually hidden HTML mirroring the page; React replaces it on mount. */
export function renderCrawlerContent(): string {
  const services = expertiseItems
    .map((s) => `<li><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p></li>`)
    .join("");

  const skills = skillCategories
    .map((c) => `<li>${esc(c.category)}: ${c.skills.map(esc).join(", ")}</li>`)
    .join("");

  const experienceHtml = experiences
    .map(
      (e) =>
        `<article><h3>${esc(e.role)}, ${esc(e.company)}</h3><p>${esc(e.period)} · ${esc(e.location)}</p><p>${esc(e.desc)}</p>` +
        (e.highlights ? `<ul>${e.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : "") +
        `</article>`,
    )
    .join("");

  const projectsHtml = projects
    .map(
      (p) =>
        `<article><h3><a href="${esc(p.link)}">${esc(p.title)}</a> (${esc(p.year)})</h3><p>${esc(p.desc)}</p>` +
        `<p>Built with ${p.techStack.map(esc).join(", ")}.</p>` +
        `<ul>${p.achievements.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>` +
        (p.repo ? `<p><a href="${esc(p.repo)}">Source code on GitHub</a></p>` : "") +
        `</article>`,
    )
    .join("");

  const faq = faqs.map((f) => `<dt>${esc(f.q)}</dt><dd>${esc(f.a)}</dd>`).join("");

  const socials = site.socials.map((s) => `<li><a href="${esc(s.href)}" rel="me">${esc(s.label)}</a></li>`).join("");

  return [
    `<div class="seo-fallback">`,
    `<header><h1>${esc(site.name)}, ${esc(site.jobTitle)}</h1><p>${esc(site.tagline)}</p>`,
    `<p>${esc(site.description)}</p><p><a href="#contact">Start a project</a></p></header>`,
    `<main>`,
    `<section><h2>About</h2><p>${esc(about.lead)}</p>${about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}<p>${esc(site.locationLabel)}</p></section>`,
    `<section><h2>Services</h2><ul>${services}</ul></section>`,
    `<section><h2>Skills</h2><ul>${skills}</ul></section>`,
    `<section><h2>Experience</h2>${experienceHtml}</section>`,
    `<section><h2>Selected work</h2>${projectsHtml}</section>`,
    `<section><h2>Frequently asked questions</h2><dl>${faq}</dl></section>`,
    `<section><h2>Hire me</h2><p>I am currently available for new opportunities.</p>`,
    `<p>Email: <a href="mailto:${esc(site.email)}">${esc(site.email)}</a></p><ul>${socials}</ul></section>`,
    `</main>`,
    `</div>`,
  ].join("\n");
}

/** One JSON-LD graph describing the page, the person, their services, projects and FAQ. */
export function buildJsonLd(dateModified: string) {
  const knowsAbout = [
    ...new Set<string>([...skillCategories.flatMap((c) => c.skills), ...expertiseItems.map((s) => s.title)]),
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": id("page"),
        url: site.url,
        name: site.title,
        description: site.description,
        inLanguage: "en",
        dateModified,
        isPartOf: { "@id": id("website") },
        mainEntity: { "@id": id("person") },
        primaryImageOfPage: { "@type": "ImageObject", url: site.ogImage, width: 1200, height: 630 },
      },
      {
        "@type": "WebSite",
        "@id": id("website"),
        url: site.url,
        name: site.name,
        inLanguage: "en",
        publisher: { "@id": id("person") },
      },
      {
        "@type": "Person",
        "@id": id("person"),
        name: site.name,
        url: site.url,
        image: site.image,
        jobTitle: site.jobTitle,
        description: site.description,
        email: `mailto:${site.email}`,
        address: { "@type": "PostalAddress", addressCountry: site.country },
        knowsAbout,
        sameAs: site.socials.map((s) => s.href),
        worksFor: { "@type": "Organization", name: experiences[0]?.company },
        makesOffer: expertiseItems.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.desc,
            provider: { "@id": id("person") },
            areaServed: "Worldwide",
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": id("projects"),
        name: "Selected work",
        itemListElement: projects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "CreativeWork",
            name: p.title,
            description: p.desc,
            url: p.link,
            dateCreated: p.year,
            keywords: p.techStack.join(", "),
            creator: { "@id": id("person") },
            ...(p.media ? { image: abs(p.media.src) } : {}),
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": id("faq"),
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export function renderJsonLd(dateModified: string): string {
  // Escape "<" so nothing in the data can close the script tag early.
  const json = JSON.stringify(buildJsonLd(dateModified), null, 2).replace(/</g, "\\u003c");
  return `<script type="application/ld+json">\n${json}\n</script>`;
}

/** Plain-language summary for AI assistants and answer engines (https://llmstxt.org). */
export function renderLlmsTxt(): string {
  return [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `${site.name} is a ${site.jobTitle.toLowerCase()} based in Nigeria (${site.timezone}), working remotely with clients and teams.`,
    "",
    "## Services",
    ...expertiseItems.map((s) => `- **${s.title}**: ${s.desc}`),
    "",
    "## Selected work",
    ...projects.map((p) => `- [${p.title}](${p.link}) (${p.year}): ${p.desc} Stack: ${p.techStack.join(", ")}.`),
    "",
    "## Experience",
    ...experiences.map((e) => `- ${e.role}, ${e.company} (${e.period}, ${e.location}): ${e.desc}`),
    "",
    "## FAQ",
    ...faqs.flatMap((f) => [`- **${f.q}** ${f.a}`]),
    "",
    "## Contact",
    `- Email: ${site.email}`,
    `- Website: ${site.url}`,
    ...site.socials.map((s) => `- ${s.label}: ${s.href}`),
    "",
  ].join("\n");
}

export function renderSitemap(lastmod: string): string {
  const images = [site.ogImage, ...projects.flatMap((p) => (p.media ? [abs(p.media.src)] : []))];
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`,
    `  <url>`,
    `    <loc>${site.url}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>monthly</changefreq>`,
    `    <priority>1.0</priority>`,
    ...images.map((src) => `    <image:image><image:loc>${esc(src)}</image:loc></image:image>`),
    `  </url>`,
    `</urlset>`,
    "",
  ].join("\n");
}
