import Link from 'next/link';
import { ArrowRightIcon, ArrowUpRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import CaseShowcase from '@/components/CaseShowcase';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import Calculator from '@/components/Calculator';
import { faq, services } from '@/data/site';

export default function HomePage() {
  return <>
    <Hero home eyebrow="Ремонт · дизайн · мебель · Москва" title={<>Ремонт и меблировка квартир — <em>до состояния «заезжай и живи»</em></>} intro="Одна команда отвечает за ремонт, комплектацию и мебель — от первого замера до технической приёмки." />
    <div id="content" />
    <section className="section light"><div className="container"><SectionHeading index="01" eyebrow="Сначала — ориентир" title="Бюджет без ложной точности" copy="Показываем структуру расчёта до контакта. Числовые коэффициенты будут добавлены только после подтверждения бизнесом."/><Calculator /></div></section>
    <section className="section dark"><div className="container"><SectionHeading index="02" eyebrow="Три уровня результата" title="Выберите, где заканчивается наша ответственность" /><div className="purchase-grid">
      {[['Ремонт','От согласованного объёма работ до чистовой приёмки.','/remont-kvartir/'],['Под ключ','Проектирование, ремонтные этапы и управление результатом.','/remont-kvartir-pod-klyuch/'],['Готовая квартира','Ремонт + меблировка + комплектация выбранных категорий.','/meblirovka-kvartiry/']].map(([t,c,h],i)=><Link href={h} className="purchase-card" key={t}><span>0{i+1}</span><h3>{t}</h3><p>{c}</p><small>Стоимость и срок: ДАННЫЕ ОТ БИЗНЕСА</small><ArrowUpRightIcon aria-hidden="true" /></Link>)}
    </div></div></section>
    <section className="section light ready-section"><div className="container ready-grid"><div><p className="eyebrow dark">Что значит «готово к жизни»</p><h2>Не набор работ.<br/>Законченная система.</h2></div><div className="ready-list">{['Отделка и инженерные решения','Кухня и встроенное хранение','Свет, сантехника и выбранная техника','Комплектация, клининг и приёмка'].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><p>{x}</p><CheckCircleIcon aria-hidden="true" /></div>)}</div></div></section>
    <section className="section dark cases-section"><div className="container"><SectionHeading index="03" eyebrow="Портфолио как доказательство" title="Проекты, в которых важны не только кадры" copy="Фактические площадь, бюджет, срок и ЖК появятся после передачи реальных кейсов. Сгенерированные изображения ниже используются только как временная арт-дирекция."/><CaseShowcase /></div></section>
    <section className="section light"><div className="container"><SectionHeading index="04" eyebrow="Управление рисками" title="Где обычно теряются деньги и сроки"/><div className="risk-grid">{[['Изменения сметы','Дополнительный объём фиксируется и согласуется до выполнения.'],['Несвязанные закупки','Спецификация и график поставок синхронизируются с этапами работ.'],['Переделки инженерии','Кухня, свет и встроенная мебель проектируются до чистовой отделки.'],['Размытая ответственность','У проекта есть единый ответственный и понятные точки приёмки.']].map(([t,c],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{c}</p></article>)}</div></div></section>
    <section className="section dark process-preview"><div className="container process-grid"><div className="sticky-copy"><p className="eyebrow">Система контроля</p><h2>Решения становятся документами</h2><p>Не просим верить обещаниям: показываем, какие артефакты сопровождают каждый этап.</p><Link href="/process/" className="text-link light-link">Весь процесс <ArrowRightIcon aria-hidden="true" /></Link></div><ol>{['Техническое задание и замер','Детальная смета','Календарный план','Фотоотчёты и акты этапов','Лист согласования изменений','Финальная техническая приёмка'].map((x,i)=><li key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong><small>{i<3?'До старта работ':'Во время реализации'}</small></li>)}</ol></div></section>
    <section className="section light"><div className="container"><SectionHeading index="05" eyebrow="Продуктовая система" title="От проекта до последней поставки"/><div className="service-links">{services.slice(1).map((s,i)=><Link href={`/${s.slug}/`} key={s.slug}><span>{String(i+1).padStart(2,'0')}</span><strong>{s.title.replace(' в Москве','')}</strong><ArrowUpRightIcon aria-hidden="true" /></Link>)}</div></div></section>
    <section className="section warm"><div className="container faq-grid"><div><p className="eyebrow dark">Коротко о важном</p><h2>Вопросы до первого разговора</h2></div><FAQ items={faq}/></div></section>
    <ContactCTA />
  </>;
}
