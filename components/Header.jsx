'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';

const links = [
  ['Услуги', '/remont-kvartir/'], ['Цены', '/ceny/'], ['Проекты', '/portfolio/'],
  ['Процесс', '/process/'], ['О компании', '/about/'], ['Контакты', '/contacts/'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const close = event => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', close);
    if (open) document.querySelector('.mobile-menu a')?.focus();
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', close);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="На главную">
          <span>КВАРТИРА</span><small>готовая к жизни</small>
        </Link>
        <nav className="desktop-nav" aria-label="Основная навигация">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link href="/calculator/" className="button button-sm header-cta">Получить расчёт <ArrowUpRightIcon aria-hidden="true" /></Link>
        <button className="menu-toggle" type="button" aria-label={open ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </button>
      </div>
      <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Мобильная навигация">
          {links.map(([label, href], index) => <Link key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</Link>)}
          <Link href="/calculator/" className="button" onClick={() => setOpen(false)}>Получить расчёт</Link>
        </nav>
      </div>
    </header>
  );
}
