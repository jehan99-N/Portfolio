# Quick Start Guide - Arabic | دليل البدء السريع

## التثبيت والإعداد

### المتطلبات
- Node.js 18+
- npm أو yarn

### خطوات التثبيت

```bash
# 1. التنقل إلى مجلد المشروع
cd portfolio

# 2. تثبيت المكتبات
npm install

# 3. إنشاء ملف البيئة
cp .env.example .env.local

# 4. تحديث البيانات الشخصية
# عدّل ملف: data/portfolio.ts
```

### تشغيل المشروع

```bash
# تشغيل الخادم في بيئة التطوير
npm run dev

# الفتح في المتصفح
# http://localhost:3000
```

## تخصيص البيانات

اذهب إلى `data/portfolio.ts` وحدّث:
- البيانات الشخصية
- الخبرات العملية
- المشاريع
- المهارات
- التعليم

## النشر على الإنترنت

### خيار 1: Vercel (الأسهل)
```bash
npm install -g vercel
vercel
```

### خيار 2: Server شخصي
```bash
npm run build
npm start
```

### خيار 3: Docker
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## SEO والبحث

المشروع يشمل:
- ✅ Meta tags لكل صفحة
- ✅ Open Graph لمشاركة وسائل التواصل
- ✅ Sitemap تلقائي
- ✅ Robots.txt
- ✅ البحث عن الأجهزة المحمولة

## البيئات المدعومة

- Chrome, Firefox, Safari, Edge (الإصدارات الأخيرة)
- الأجهزة المحمولة والأجهزة اللوحية

## الملفات المهمة

| الملف | الوصف |
|------|-------|
| `data/portfolio.ts` | بيانات السيرة الذاتية |
| `app/page.tsx` | الصفحة الرئيسية |
| `components/` | مكونات React |
| `styles/globals.css` | الأنماط العامة |
| `.env.local` | متغيرات البيئة |

## استكشاف الأخطاء

### المشروع لا يعمل؟
```bash
# حذف node_modules والتثبيت مرة أخرى
rm -rf node_modules
npm install
npm run dev
```

### خطأ في البناء؟
```bash
# تنظيف الملفات المؤقتة
rm -rf .next
npm run build
```

## الدعم والمساعدة

- البريد الإلكتروني: jehanabujaleel@gmail.com
- الهاتف: 0796186967
- LinkedIn: jehan_abujaleel

---

**تم بناء هذا المشروع باستخدام Next.js + React + TypeScript**
