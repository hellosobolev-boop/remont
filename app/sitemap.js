import { routes } from '@/data/site';
export const dynamic = 'force-static';
export default function sitemap(){return routes.filter(x=>!['/thank-you/','/privacy/','/personal-data/'].includes(x)).map(path=>({url:`https://remont-kvartira.sobolevacey.chatgpt.site${path}`,lastModified:new Date('2026-10-04'),changeFrequency:path==='/'?'weekly':'monthly',priority:path==='/'?1:0.7}))}
