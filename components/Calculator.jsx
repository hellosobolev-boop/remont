'use client';
import { useMemo, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline';

const steps = [
  { key:'area', title:'Площадь квартиры', type:'range' },
  { key:'market', title:'Тип объекта', options:['Новостройка','Вторичное жильё'] },
  { key:'condition', title:'Исходное состояние', options:['Без отделки','White box','Отделка от застройщика','Требуется демонтаж'] },
  { key:'repair', title:'Формат ремонта', options:['Капитальный','Дизайнерский','Под ключ'] },
  { key:'design', title:'Нужен дизайн-проект?', options:['Да','Уже есть','Нет'] },
  { key:'furniture', title:'Нужна меблировка?', options:['Кухня и хранение','Полная меблировка','Нет'] },
  { key:'extras', title:'Дополнительная комплектация', options:['Свет и сантехника','Техника','Текстиль и декор','Пока не знаю'], multi:true },
];

export default function Calculator() {
  const [step,setStep]=useState(0); const [values,setValues]=useState({area:60,extras:[]}); const current=steps[step];
  const complete = step === steps.length;
  const progress = Math.round((step/steps.length)*100);
  const groups = useMemo(()=>[['Работы','ДАННЫЕ ОТ БИЗНЕСА'],['Материалы','ДАННЫЕ ОТ БИЗНЕСА'],['Мебель и комплектация',values.furniture==='Нет'?'Не выбрано':'ДАННЫЕ ОТ БИЗНЕСА']], [values]);
  function choose(value){ if(current.multi){const arr=values[current.key]||[]; setValues({...values,[current.key]:arr.includes(value)?arr.filter(x=>x!==value):[...arr,value]});} else {setValues({...values,[current.key]:value}); setTimeout(()=>setStep(s=>Math.min(s+1,steps.length)),120);} }
  return <div className="calculator-shell"><div className="calculator-top"><span>Шаг {Math.min(step+1,steps.length)} из {steps.length}</span><strong>{progress}%</strong></div><div className="progress"><span style={{width:`${progress}%`}} /></div>{!complete ? <div className="calculator-body"><p className="eyebrow dark">Предварительная конфигурация</p><h2>{current.title}</h2>{current.type==='range'?<div className="range-wrap"><output>{values.area} м²</output><input type="range" min="20" max="250" step="5" value={values.area} onChange={e=>setValues({...values,area:Number(e.target.value)})} aria-label="Площадь квартиры" /></div>:<div className="option-grid">{current.options.map(o=><button key={o} className={(current.multi?values[current.key]?.includes(o):values[current.key]===o)?'selected':''} onClick={()=>choose(o)}><span>{o}</span>{(current.multi?values[current.key]?.includes(o):values[current.key]===o)&&<CheckIcon aria-hidden="true" />}</button>)}</div>}<div className="calculator-nav"><button className="button button-ghost-dark" disabled={step===0} onClick={()=>setStep(s=>s-1)}><ArrowLeftIcon aria-hidden="true" /> Назад</button><button className="button" onClick={()=>setStep(s=>Math.min(s+1,steps.length))}>{step===steps.length-1?'Показать структуру':'Продолжить'} <ArrowRightIcon aria-hidden="true" /></button></div></div>:<div className="calculator-result"><p className="eyebrow dark">Предварительный результат</p><h2>Структура расчёта для {values.area} м²</h2><p>Фактические коэффициенты ещё не предоставлены бизнесом, поэтому мы не показываем ложную сумму. Ниже — честная структура будущего диапазона.</p><div className="result-groups">{groups.map(([n,v])=><div key={n}><span>{n}</span><strong>{v}</strong></div>)}</div><p className="result-note">Итог будет диапазоном, а не точной суммой до рубля. Его уточняют после замера и согласования состава работ.</p><a className="button" href="#contact">Запросить детализированный расчёт <ArrowRightIcon aria-hidden="true" /></a><button className="text-link reset" onClick={()=>setStep(0)}>Начать заново</button></div>}</div>;
}
