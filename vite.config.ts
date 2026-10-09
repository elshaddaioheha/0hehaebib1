import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import {
  renderCrawlerContent,
  renderHeadMeta,
  renderJsonLd,
  renderLlmsTxt,
  renderSitemap,
} from "./src/seo/render";

/**
 * Bakes the page's real content and structured data into index.html at build time, and emits
 * llms.txt and sitemap.xml, all generated from src/data so they stay in step with the page.
 */
function seo(): Plugin {
  const today = new Date().toISOString().slice(0, 10);
  return {
    name: "portfolio-seo",
    transformIndexHtml(html) {
      return html
        .replace("<!-- seo:meta -->", renderHeadMeta())
        .replace("<!-- seo:jsonld -->", renderJsonLd(today))
        .replace("<!-- seo:content -->", renderCrawlerContent());
    },
    generateBundle() {
      this.emitFile({ type: "asset", fileName: "llms.txt", source: renderLlmsTxt() });
      this.emitFile({ type: "asset", fileName: "sitemap.xml", source: renderSitemap(today) });
    },
  };
}

export default defineConfig({
  plugins: [react(), seo()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    globals: true,
    css: true,
  },
});
