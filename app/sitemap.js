import { routes } from '@/data/site';
export const dynamic = 'force-static';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://remont-kvartira.sobolevacey.chatgpt.site';
export default function sitemap(){return routes.filter(x=>!['/thank-you/','/privacy/','/personal-data/'].includes(x)).map(path=>({url:`${siteUrl}${path}`,lastModified:new Date('2026-10-04'),changeFrequency:path==='/'?'weekly':'monthly',priority:path==='/'?1:0.7}))}
