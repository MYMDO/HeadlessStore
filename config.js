// config.js
const CONFIG = {
    // Налаштування бази даних Supabase
    SUPABASE_URL: 'https://ixcvjmquidfydeakvzul.supabase.co/',
    SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4Y3ZqbXF1aWRmeWRlYWt2enVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxNjczMTMsImV4cCI6MjA5Mzc0MzMxM30.fF5NYxpS21pxbDxKHpebKCb79HVBsKP3s3DsKpF6Hnk',

    // Інформація про магазин
    STORE_NAME: 'МаркетПлюс',
    CURRENCY: '₴',
    CONTACT_PHONE: '+38 (099) 123-45-67',
    WORK_HOURS: 'Пн-Нд: 09:00 - 20:00',

    // Категорії товарів (перша завжди "Всі")
    CATEGORIES:[
        'Всі', 
        'Електроніка', 
        'Одяг', 
        'Дім та сад', 
        'Продукти', 
        'Інше'
    ],

    // Дизайн (кольори Tailwind)
    COLORS: {
        primary: 'bg-blue-600',
        primaryHover: 'hover:bg-blue-700',
        header: 'bg-slate-900'
    }
};
