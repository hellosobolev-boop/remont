# Design system

## Visual direction

Спокойный архитектурный editorial-интерфейс: крупные фотографии, строгая типографика, асимметрия, большие интервалы и один оранжевый action-цвет. Рекомендации UI/UX-поиска по Swiss minimalism и просторной плотности использованы только как композиционный ориентир; цвета и шрифт подчинены ТЗ.

## Tokens

- Background: `#121212`
- Light surface: `#FFFFE1`
- Neutral surface: `#F7F6EF`
- Action: `#FF6325`
- Type: Google Sans, Product Sans fallback, затем системный sans-serif
- Weights: 400, 500, 700
- Radius: 0.35rem
- Grid intent: 4 mobile / 8 tablet / 12 desktop
- Content width: 1440px max with fluid gutters
- Motion: 200–450ms for UI; 18s cinematic hero zoom; all optional motion disabled under `prefers-reduced-motion`

## Interaction rules

- Минимальная высота основных controls: 44–52px.
- Все интерактивные элементы имеют hover, active и `focus-visible`.
- Mobile menu доступно с клавиатуры и закрывается Escape.
- Галерея кейсов управляется tap/click и клавиатурой, не зависит только от hover.
- Формы используют видимые labels, inline errors и semantic controls.
