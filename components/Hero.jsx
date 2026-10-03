import Link from 'next/link';
import { ArrowDownIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { Picture } from './Picture';

export default function Hero({ eyebrow, title, intro, image = '/images/hero.webp', avif = '/images/hero.avif', cta = 'Получить предварительный расчёт', secondary = 'Посмотреть проекты', secondaryHref = '/portfolio/', home = false }) {
  return (
    <section className={`hero ${home ? 'hero-home' : 'hero-inner'}`}>
      <Picture src={image} avif={avif} alt="Временное изображение современного интерьера; будет заменено реальным объектом компании" className="hero-media" priority />
      <div className="hero-scrim" />
      <div className="container hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-copy">{intro}</p>
        <div className="hero-actions">
          <Link href="/calculator/" className="button">{cta}<ArrowUpRightIcon aria-hidden="true" /></Link>
          {secondary && <Link href={secondaryHref} className="button button-ghost">{secondary}</Link>}
        </div>
        {home && <div className="hero-note"><span>Москва</span><span>Ремонт · Дизайн · Мебель</span><a href="#content" aria-label="Перейти к содержанию"><ArrowDownIcon aria-hidden="true" /></a></div>}
      </div>
    </section>
  );
}
