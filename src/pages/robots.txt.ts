import type { APIRoute } from "astro";
import { SITE } from "../data/site";

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site?.toString().replace(/\/$/, "") ?? SITE.url;
  const body = [`User-agent: *`, `Allow: /`, `Sitemap: ${siteUrl}/sitemap-index.xml`].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
