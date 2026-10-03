'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { projects } from '@/data/site';
import { Picture } from './Picture';

export default function CaseShowcase() {
  const [active, setActive] = useState(0); const project = projects[active];
  return <div className="case-showcase"><div className="case-stage" aria-live="polite"><Picture key={project.slug} src={project.image} avif={project.avif} alt={`Временная визуализация проекта «${project.title}»`} /><div className="case-caption"><p>Временный медиа-материал</p><h3>{project.title}</h3><dl><div><dt>Площадь</dt><dd>{project.area}</dd></div><div><dt>Срок</dt><dd>{project.term}</dd></div><div><dt>Бюджет</dt><dd>{project.budget}</dd></div></dl><Link href={`/portfolio/${project.slug}/`} className="round-link" aria-label={`Открыть проект ${project.title}`}><ArrowUpRightIcon /></Link></div></div><div className="case-tabs" role="tablist" aria-label="Выбор проекта">{projects.map((p,i)=><button key={p.slug} role="tab" aria-selected={i===active} onClick={()=>setActive(i)}><span>0{i+1}</span><strong>{p.title}</strong><small>{p.type}</small></button>)}</div></div>;
}
