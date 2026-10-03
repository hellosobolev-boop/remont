export const dynamic = 'force-static';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://remont-kvartira.sobolevacey.chatgpt.site';
export default function robots(){return{rules:[{userAgent:'*',allow:'/',disallow:['/thank-you/']},{userAgent:'OAI-SearchBot',allow:'/'}],sitemap:`${siteUrl}/sitemap.xml`}}
