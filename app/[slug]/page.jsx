import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRightIcon, DocumentTextIcon, UserCircleIcon, CameraIcon } from '@heroicons/react/24/outline';
import { services, faq } from '@/data/site';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/SectionHeading';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import LeadForm from '@/components/LeadForm';

const standard = {
  ceny: { title:'Цены на ремонт квартир в Москве', intro:'Прозрачная структура бюджета: работы, материалы, мебель, комплектация и управление — без одной вводящей в заблуждение цены за м².', eyebrow:'Стоимость без мелкого шрифта' },
  process: { title:'Этапы работы: от запроса до передачи ключей', intro:'На каждом этапе понятно, что происходит, какой документ получает клиент и что нужно согласовать.', eyebrow:'Предсказуемый маршрут' },
  garantiya: { title:'Гарантия и контроль качества ремонта', intro:'Показываем, как принимаются скрытые работы, фиксируются замечания и обрабатываются обращения после сдачи.', eyebrow:'Контроль вместо обещаний' },
  about: { title:'О компании', intro:'Реальные ответственные, прозрачная производственная модель и договорная работа — без абстрактного рассказа о «динамичной команде».', eyebrow:'Кто отвечает за результат' },
  reviews: { title:'Отзывы, связанные с реальными объектами', intro:'Здесь будут только проверяемые отзывы клиентов с контекстом работ и ссылкой на соответствующий кейс.', eyebrow:'Опыт клиентов' },
  contacts: { title:'Обсудить вашу квартиру', intro:'Самый короткий путь к первичной оценке объекта и следующему шагу.', eyebrow:'Контакты' },
};

export function generateStaticParams(){ return [...services.map(s=>({slug:s.slug})), ...Object.keys(standard).map(slug=>({slug}))]; }
export async function generateMetadata({params}) { const {slug}=await params; const data=services.find(s=>s.slug===slug)||standard[slug]; if(!data)return{}; return {title:data.title,description:data.intro,alternates:{canonical:`/${slug}/`},openGraph:{title:data.title,description:data.intro,images:['/images/hero.webp']}}; }

function ServicePage({data}){return <><Breadcrumbs items={[{label:data.title}]}/><Hero eyebrow={data.eyebrow} title={data.title} intro={data.intro} cta={data.cta} image={data.image} avif={data.imageAvif}/><section className="section light"><div className="container split-intro"><div><p className="eyebrow dark">Что это даёт клиенту</p><h2>{data.purpose}</h2></div><div className="fact-card"><span>Стоимость и срок</span><strong>ДАННЫЕ ОТ БИЗНЕСА</strong><p>Диапазон появится после утверждения фактической модели расчёта.</p></div></div></section><section className="section dark"><div className="container"><SectionHeading index="01" eyebrow="Состав решения" title="Что входит в согласованный контур"/><div className="large-list">{data.included.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><h3>{x}</h3></div>)}</div></div></section><section className="section light"><div className="container two-column"><div><p className="eyebrow dark">Что влияет на бюджет</p><h2>Считаем причины, а не среднюю цену</h2></div><ul className="factor-list">{data.factors.map(x=><li key={x}>{x}</li>)}</ul></div></section><section className="section warm"><div className="container proof-grid"><DocumentTextIcon aria-hidden="true"/><div><p className="eyebrow dark">Доказательства</p><h2>Документы сильнее рекламных обещаний</h2><p>{data.proof}</p><Link href="/process/" className="text-link">Посмотреть систему контроля <ArrowRightIcon aria-hidden="true"/></Link></div></div></section><section className="section light"><div className="container faq-grid"><div><p className="eyebrow dark">FAQ</p><h2>До начала работ</h2></div><FAQ items={faq.slice(0,5)}/></div></section><ContactCTA title={`Обсудить: ${data.title.toLowerCase()}`}/></>}

function StandardPage({slug,data}){
  if(slug==='contacts') return <><Breadcrumbs items={[{label:'Контакты'}]}/><Hero eyebrow={data.eyebrow} title={data.title} intro={data.intro} secondary={null}/><section className="section light"><div className="container contact-page"><div><h2>Данные для связи</h2><dl><div><dt>Телефон</dt><dd>ДАННЫЕ ОТ БИЗНЕСА</dd></div><div><dt>Email</dt><dd>ДАННЫЕ ОТ БИЗНЕСА</dd></div><div><dt>Часы связи</dt><dd>ДАННЫЕ ОТ БИЗНЕСА</dd></div><div><dt>Зона обслуживания</dt><dd>Москва; область — требует подтверждения</dd></div><div><dt>Реквизиты</dt><dd>ДАННЫЕ ОТ БИЗНЕСА</dd></div></dl></div><LeadForm/></div></section></>;
  const content={
    ceny:[['Работы','ДАННЫЕ ОТ БИЗНЕСА'],['Материалы','ДАННЫЕ ОТ БИЗНЕСА'],['Ремонт под ключ','ДАННЫЕ ОТ БИЗНЕСА'],['Ремонт + меблировка','ДАННЫЕ ОТ БИЗНЕСА']],
    process:[['Предварительный расчёт','Вводные клиента → ориентир и перечень вопросов'],['Встреча и замер','Обследование → обмерный план'],['Проект и смета','Решения → рабочая документация и бюджет'],['Договор и план','Согласованный объём → календарный график'],['Реализация','Этапы → фотоотчёты и акты'],['Приёмка','Проверка → комплект документов и ключи'],['Сопровождение','Обращение → регламент гарантийной реакции']],
    garantiya:[['Скрытые работы','Фотофиксация и контроль до закрытия конструкций'],['Этапная приёмка','Замечания фиксируются до перехода к следующему этапу'],['Изменения','Дополнительный объём согласуется письменно'],['После сдачи','Срок гарантии и SLA — ДАННЫЕ ОТ БИЗНЕСА']],
    about:[['Руководитель компании','ФИО, фото и опыт — ДАННЫЕ ОТ БИЗНЕСА'],['Руководитель проекта','Ответственность и опыт — ДАННЫЕ ОТ БИЗНЕСА'],['Производственный контроль','Модель команды — ДАННЫЕ ОТ БИЗНЕСА'],['Комплектация и мебель','Ответственные и партнёры — ДАННЫЕ ОТ БИЗНЕСА']],
    reviews:[['Видеоотзывы','ДАННЫЕ ОТ БИЗНЕСА'],['Отзывы с привязкой к кейсам','ДАННЫЕ ОТ БИЗНЕСА'],['Яндекс и 2ГИС','Ссылки на реальные карточки — ДАННЫЕ ОТ БИЗНЕСА']],
  }[slug];
  return <><Breadcrumbs items={[{label:data.title}]}/><Hero eyebrow={data.eyebrow} title={data.title} intro={data.intro}/><section className="section light"><div className="container"><SectionHeading index="01" eyebrow="Структура" title={slug==='ceny'?'Из чего складывается бюджет':'Как устроен раздел'}/><div className="evidence-list">{content.map(([t,c],i)=><article key={t}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{t}</h3><p>{c}</p></div></article>)}</div>{slug==='ceny'&&<div className="notice">Цена за м² не равна итоговой стоимости: на бюджет влияют исходное состояние, инженерия, уровень материалов, сложность решений и комплектация.</div>}{slug==='about'&&<div className="icon-trio"><div><UserCircleIcon/><span>Команда</span></div><div><DocumentTextIcon/><span>Договор</span></div><div><CameraIcon/><span>Реальные объекты</span></div></div>}</div></section>{slug==='reviews'?<section className="section warm"><div className="container empty-state"><h2>Отзывы не выдуманы</h2><p>Раздел готов технически и будет наполнен после передачи подтверждённых отзывов и разрешений на публикацию.</p></div></section>:<ContactCTA/>}</>;
}

export default async function GenericPage({params}){const {slug}=await params; const service=services.find(s=>s.slug===slug); if(service)return <ServicePage data={service}/>; const data=standard[slug]; if(!data)notFound(); return <StandardPage slug={slug} data={data}/>;}
