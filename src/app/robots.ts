import { DATA } from "@/data/config/site.config";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${DATA.url}/sitemap.xml`,
  };
}
