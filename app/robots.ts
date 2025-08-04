import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/images/',
        'https://www.youtube.com/',
        'https://twitter.com/',
        'https://discord.gg/',
        'https://store.steampowered.com/',
      ],
    },
    sitemap: 'https://showa-american-story.com/sitemap.xml',
  };
} 