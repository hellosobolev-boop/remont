'use client';
import { PlusIcon } from '@heroicons/react/24/outline';

export default function FAQ({ items }) {
  return <div className="faq-list">{items.map(([q,a],i)=><details key={q} open={i===0}><summary><span>{String(i+1).padStart(2,'0')}</span><strong>{q}</strong><PlusIcon aria-hidden="true" /></summary><p>{a}</p></details>)}</div>;
}
