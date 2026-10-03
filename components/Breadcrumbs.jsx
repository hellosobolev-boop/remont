import Link from 'next/link';

export default function Breadcrumbs({ items }) {
  return <nav className="breadcrumbs container" aria-label="Хлебные крошки"><ol><li><Link href="/">Главная</Link></li>{items.map((item, i) => <li key={item.href || item.label}>{i === items.length - 1 ? <span aria-current="page">{item.label}</span> : <Link href={item.href}>{item.label}</Link>}</li>)}</ol></nav>;
}
