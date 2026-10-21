import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPageMetadata, SITE_URL } from "@/lib/seo";

const setMeta = (attribute: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
};

const PageMetadata = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = getPageMetadata(pathname);
    document.title = page.title;
    setMeta("name", "description", page.description);
    setMeta("name", "robots", page.indexable ? "index, follow" : "noindex, follow");
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:url", `${SITE_URL}${page.path}`);
    setMeta("name", "twitter:title", page.title);
    setMeta("name", "twitter:description", page.description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!page.indexable) {
      canonical?.remove();
    } else {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = `${SITE_URL}${page.path}`;
    }
  }, [pathname]);

  return null;
};

export default PageMetadata;
