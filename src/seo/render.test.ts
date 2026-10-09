import { projects } from "../data/portfolioData";
import { faqs, site } from "../data/site";
import {
  buildJsonLd,
  renderCrawlerContent,
  renderHeadMeta,
  renderJsonLd,
  renderLlmsTxt,
  renderSitemap,
} from "./render";

type Node = { "@type": string; [key: string]: unknown };

describe("SEO output", () => {
  it("describes the page, person, projects and FAQ in one JSON-LD graph", () => {
    const graph = buildJsonLd("2026-10-01")["@graph"] as Node[];
    const byType = (type: string) => graph.find((node) => node["@type"] === type);

    expect(byType("ProfilePage")).toMatchObject({ url: site.url, dateModified: "2026-10-01" });
    expect(byType("Person")).toMatchObject({ name: site.name, email: `mailto:${site.email}` });
    expect((byType("ItemList")?.itemListElement as unknown[]).length).toBe(projects.length);
    expect((byType("FAQPage")?.mainEntity as unknown[]).length).toBe(faqs.length);
  });

  it("emits JSON-LD that parses and cannot close its script tag early", () => {
    const tag = renderJsonLd("2026-10-01");
    const body = tag.replace(/^<script[^>]*>/, "").replace(/<\/script>$/, "");
    expect(body).not.toContain("<");
    expect(() => JSON.parse(body)).not.toThrow();
  });

  it("bakes every project, FAQ and the contact email into the crawler HTML", () => {
    const html = renderCrawlerContent();
    for (const project of projects) expect(html).toContain(project.link);
    for (const faq of faqs) expect(html).toContain(faq.q);
    expect(html).toContain(`mailto:${site.email}`);
    expect(html.match(/<h1>/g)).toHaveLength(1);
  });

  it("renders the search snippet and canonical from site data", () => {
    const head = renderHeadMeta();
    expect(head).toContain(`<link rel="canonical" href="${site.url}">`);
    expect(head).toContain(`content="${site.description.replace(/&/g, "&amp;")}"`);
  });

  it("lists contact details and project links for AI assistants and crawlers", () => {
    const llms = renderLlmsTxt();
    expect(llms).toContain(site.email);
    for (const project of projects) expect(llms).toContain(project.link);

    const sitemap = renderSitemap("2026-10-01");
    expect(sitemap).toContain(`<loc>${site.url}</loc>`);
    expect(sitemap).toContain("<lastmod>2026-10-01</lastmod>");
  });
});
