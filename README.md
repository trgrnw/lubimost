# thugger × vichka

Приватный цифровой музей отношений на React, Three.js и Supabase.

## Настройка Supabase

1. Открой Supabase → SQL Editor и выполни `supabase/schema.sql`.
2. В Authentication → Users создай `thugger@lubimost.app` и `vichka@lubimost.app` с вашими личными паролями.
3. Скопируй `.env.example` в `.env.local` и укажи publishable key.

На сайте вход выполняется короткими никами `thugger` и `vichka`. Пароли не хранятся в коде.

## Запуск и сборка

```bash
npm install
npm run dev
npm run build
```

Собранный сайт появится в `dist`. GitHub Pages автоматически публикует его через workflow.
