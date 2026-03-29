import type { MetadataRoute } from 'next';
import { localizedRoutes, siteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return localizedRoutes.map((route) => ({
    url: `${siteUrl}/${route.lang}${route.path}`,
    lastModified,
    changeFrequency: route.path === '' ? 'weekly' : 'monthly',
    priority: route.priority,
  }));
}
