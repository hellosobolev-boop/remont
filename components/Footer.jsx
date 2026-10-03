import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand"><span>КВАРТИРА</span><p>Ремонт, дизайн, меблировка и комплектация квартир в Москве.</p></div>
        <div><h2>Услуги</h2><Link href="/remont-kvartir-pod-klyuch/">Ремонт под ключ</Link><Link href="/dizayn-proekt/">Дизайн-проект</Link><Link href="/meblirovka-kvartiry/">Меблировка</Link><Link href="/komplektatsiya/">Комплектация</Link></div>
        <div><h2>Компания</h2><Link href="/portfolio/">Проекты</Link><Link href="/process/">Процесс</Link><Link href="/garantiya/">Гарантия</Link><Link href="/contacts/">Контакты</Link></div>
        <div className="footer-action"><h2>Обсудить квартиру</h2><p>Ответьте на несколько вопросов и получите структуру предварительного расчёта.</p><Link href="/calculator/" className="text-link">Начать расчёт <ArrowUpRightIcon aria-hidden="true" /></Link></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 · Reference frontend</span><div><Link href="/privacy/">Конфиденциальность</Link><Link href="/personal-data/">Обработка данных</Link></div></div>
    </footer>
  );
}
