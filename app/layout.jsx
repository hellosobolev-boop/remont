import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://remont-kvartira.sobolevacey.chatgpt.site'),
  title: { default: 'Ремонт и меблировка квартир в Москве', template: '%s — КВАРТИРА' },
  description: 'Ремонт, дизайн, меблировка и комплектация квартир в Москве в едином контуре ответственности.',
  robots: { index: true, follow: true },
  openGraph: { title: 'Квартира, готовая к жизни', description: 'От пустой квартиры до готового пространства.', images: ['/images/hero.webp'], locale: 'ru_RU', type: 'website' },
};

export default function RootLayout({ children }) {
  return <html lang="ru"><body><a className="skip-link" href="#main">Перейти к содержанию</a><Header /><main id="main">{children}</main><Footer /></body></html>;
}
