# 🛒 Ультралегкий Serverless Інтернет-магазин

Цей проєкт — це 100% безкоштовне, швидке та ультралегке (ultralight) рішення для створення інтернет-магазину. Він побудований за архітектурою **Headless & Serverless**, що означає відсутність необхідності орендувати сервер або налаштовувати складний бекенд.

Проєкт ідеально підходить для малого бізнесу, крафтових виробників або тестування ніш в Україні.

## ✨ Особливості

- 💸 **Абсолютно безкоштовно**: Використовуються лише безкоштовні тарифи (Free Tier) найкращих сервісів.
- 🚀 **Блискавична швидкість**: Жодних важких фреймворків (React/Vue) чи збірок (Webpack/Vite). Усе працює прямо в браузері.
- 🛠 **Без бекенд-коду**: База даних та API генеруються автоматично за допомогою Supabase.
- 📱 **Адаптивний дизайн**: Чудово виглядає як на комп'ютерах, так і на смартфонах.
- 🇺🇦 **Українська локалізація**: Інтерфейс повністю адаптований під українського користувача.

## 🧰 Технологічний стек

- **Frontend / Хостинг**:[GitHub Pages](https://pages.github.com/) (Безкоштовний хостинг для статики)
- **Backend / База даних**: [Supabase](https://supabase.com/) (PostgreSQL + автоматичне REST API)
- **Логіка інтерфейсу**: [Alpine.js](https://alpinejs.dev/) (Ультралегкий JS-фреймворк, ~15kb)
- **Стилізація**: [Tailwind CSS](https://tailwindcss.com/) (через CDN)

---

## 🚀 Швидкий старт (Інструкція з налаштування)

### Крок 1: Налаштування Бази Даних (Supabase)
1. Зареєструйтесь на [Supabase](https://supabase.com/) та створіть новий проєкт.
2. Перейдіть у розділ **SQL Editor** у лівому меню.
3. Скопіюйте та виконайте наступний SQL-код для створення таблиць та налаштування безпеки:

```sql
-- Створення таблиці товарів
CREATE TABLE products (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  name text NOT NULL,
  description text,
  price numeric NOT NULL,
  image_url text
);

-- Створення таблиці замовлень
CREATE TABLE orders (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  customer_name text NOT NULL,
  customer_phone text NOT NULL,
  items jsonb NOT NULL,
  total_price numeric NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- Налаштування безпеки (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Products are viewable by everyone" ON products FOR SELECT USING (true);
CREATE POLICY "Anyone can insert orders" ON orders FOR INSERT WITH CHECK (true);
```

4. Додайте свої товари через розділ **Table Editor** -> `products` або за допомогою SQL-запиту `INSERT`.
5. Перейдіть у **Project Settings** -> **API** та скопіюйте `Project URL` та `anon public key`.

### Крок 2: Налаштування Frontend
1. Склонуйте цей репозиторій або просто створіть файл `index.html` на своєму комп'ютері.
2. Відкрийте `index.html` у будь-якому текстовому редакторі.
3. Знайдіть цей блок коду (ближче до кінця файлу) та вставте ваші ключі з Supabase:

```javascript
const SUPABASE_URL = 'ВАШ_PROJECT_URL';
const SUPABASE_KEY = 'ВАШ_ANON_PUBLIC_KEY';
```

### Крок 3: Публікація (Деплой)
1. Завантажте ваш файл `index.html` у новий репозиторій на GitHub.
2. Перейдіть у налаштування репозиторію: **Settings** -> **Pages**.
3. У розділі **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main` (або `master`), папка `/ (root)`
4. Натисніть **Save**. За кілька хвилин ваш магазин буде доступний за посиланням `https://<ваш-логін>.github.io/<назва-репозиторію>/`.

---

## 📦 Як керувати магазином?

Оскільки це ультралегкий проєкт, тут немає окремої адмін-панелі. Усе керування відбувається безпосередньо через зручний інтерфейс **Supabase**:
- **Додати/змінити товар**: Перейдіть у Supabase -> Table Editor -> `products`. Ви можете редагувати дані як у звичайній таблиці Excel.
- **Переглянути замовлення**: Перейдіть у Supabase -> Table Editor -> `orders`.

---

## 💡 Поради для покращення (Pro Tips)

### Сповіщення про замовлення в Telegram
Ви можете налаштувати безкоштовні сповіщення про нові замовлення у ваш Telegram. 
Для цього в Supabase перейдіть у розділ **Database** -> **Webhooks**, створіть новий хук на подію `INSERT` для таблиці `orders` і вкажіть URL вашого Telegram-бота (через Telegram API).

### Підключення власного домену
GitHub Pages дозволяє безкоштовно підключити власний домен (наприклад, `myshop.com.ua`). Це робиться в налаштуваннях репозиторію (Settings -> Pages -> Custom domain).

---

## 📄 Ліцензія

Цей проєкт поширюється за ліцензією MIT. Ви можете вільно використовувати, змінювати та поширювати його як для особистих, так і для комерційних цілей.
