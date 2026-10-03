'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline';

export default function LeadForm({ compact = false }) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  function submit(e) {
    e.preventDefault(); const fd = new FormData(e.currentTarget); const next = {};
    if (!fd.get('name')?.trim()) next.name = 'Укажите имя';
    if (!fd.get('phone')?.trim()) next.phone = 'Укажите телефон или мессенджер';
    setErrors(next); if (!Object.keys(next).length) setSent(true);
  }
  if (sent) return <div className="form-success" role="status"><CheckIcon aria-hidden="true" /><h3>Запрос подготовлен</h3><p>Это локальная reference-форма: отправка в CRM будет подключена после получения реквизитов интеграции. Для следующего шага понадобятся площадь и план квартиры.</p><button className="text-link" onClick={() => setSent(false)}>Отправить другой запрос</button></div>;
  return (
    <form className={`lead-form ${compact ? 'compact' : ''}`} onSubmit={submit} noValidate>
      <div className="field"><label htmlFor={`name-${compact}`}>Имя</label><input id={`name-${compact}`} name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? `name-error-${compact}` : undefined} />{errors.name && <span className="field-error" id={`name-error-${compact}`}>{errors.name}</span>}</div>
      <div className="field"><label htmlFor={`phone-${compact}`}>Телефон или мессенджер</label><input id={`phone-${compact}`} name="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? `phone-error-${compact}` : undefined} />{errors.phone && <span className="field-error" id={`phone-error-${compact}`}>{errors.phone}</span>}</div>
      {!compact && <><div className="field"><label htmlFor="area-form">Площадь, м²</label><input id="area-form" name="area" inputMode="numeric" /></div><div className="field"><label htmlFor="type-form">Формат работ</label><select id="type-form" name="type" defaultValue=""><option value="" disabled>Выберите вариант</option><option>Ремонт</option><option>Ремонт под ключ</option><option>Ремонт + меблировка</option><option>Дизайн-проект</option></select></div></>}
      <label className="consent"><input type="checkbox" required /><span>Согласен с <Link href="/personal-data/">обработкой персональных данных</Link></span></label>
      <button className="button" type="submit">Подготовить запрос <ArrowRightIcon aria-hidden="true" /></button>
    </form>
  );
}
