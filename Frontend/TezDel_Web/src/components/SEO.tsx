import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  schema?: Record<string, any> | Array<Record<string, any>>;
}

export default function SEO({ title, description, keywords, image, schema }: SEOProps) {
  const { pathname } = useLocation();
  const canonicalUrl = `https://tezdel.com${pathname === '/' ? '' : pathname}`;
  const defaultImage = 'https://tezdel.com/og-image.jpg';

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to dynamically update or create meta tags
    const updateMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute(attrName, attrValue);
        newTag.setAttribute('content', content);
        document.head.appendChild(newTag);
      }
    };

    // 2. Update Primary & Search Meta Tags
    updateMetaTag('name', 'title', title);
    updateMetaTag('name', 'description', description);
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    }

    // 3. Update Open Graph / Facebook Tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', image || defaultImage);
    updateMetaTag('property', 'og:url', canonicalUrl);

    // 4. Update Twitter Card Tags
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', image || defaultImage);
    updateMetaTag('name', 'twitter:url', canonicalUrl);

    // 5. Update Canonical Tag
    let canonicalElement = document.head.querySelector('link[rel="canonical"]');
    if (canonicalElement) {
      canonicalElement.setAttribute('href', canonicalUrl);
    } else {
      const newLink = document.createElement('link');
      newLink.setAttribute('rel', 'canonical');
      newLink.setAttribute('href', canonicalUrl);
      document.head.appendChild(newLink);
    }

    // 6. Manage Page-Specific JSON-LD Schema
    // Clean up existing page-specific schemas to prevent duplicates
    const existingSchemaTags = document.querySelectorAll('script[data-seo-schema="true"]');
    existingSchemaTags.forEach((tag) => tag.remove());

    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-schema', 'true');
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, image, canonicalUrl, schema]);

  return null;
}
