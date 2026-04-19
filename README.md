# 🧩 بازی سودوکو با اعتبارسنجی لحظه‌ای

بازی سودوکوی تعاملی با دریافت پازل از API و اعتبارسنجی لحظه‌ای ورودی کاربر. این پروژه در دوره کارآموزی فرانت‌اند در **خانه رباتیک کمان** توسعه داده شده است.

## ✨ ویژگی‌ها

- 📡 دریافت پازل تصادفی سودوکو از API به همراه پاسخ صحیح
- ✅ اعتبارسنجی لحظه‌ای هر خانه با پاسخ دریافتی از سرور
- 🔒 قفل شدن خانه پس از ورود پاسخ صحیح
- 🔴 نمایش خطا با رنگ قرمز برای ورودی نادرست
- 🚫 جلوگیری از پر کردن سایر خانه‌ها تا زمان اصلاح مقدار نادرست
- 🎨 هایلایت سطر، ستون و بلوک ۳×۳ مربوط به خانه انتخاب شده
- 🔄 قابلیت دریافت پازل جدید
- 📊 نمایش تعداد خانه‌های باقی‌مانده

## 🛠️ تکنولوژی‌ها

| دسته | تکنولوژی | دلیل استفاده |
|------|----------|--------------|
| Framework | React + Vite | توسعه سریع و HMR |
| State Management | Context API | مدیریت state سراسری ۸۱ خانه |
| HTTP Client | Fetch API | دریافت پازل از API |
| Styling | TailwindCSS | طراحی responsive و conditional styling |
| Code Quality | ESLint + Prettier | یکپارچگی کد |

## 🎯 چالش‌های فنی و راه‌حل‌ها

| چالش | راه‌حل پیاده‌سازی شده |
|------|----------------------|
| **اعتبارسنجی لحظه‌ای ۸۱ خانه** | مقایسه مقدار وارد شده با پاسخ صحیح در Context API |
| **هایلایت سطر، ستون و بلوک** | محاسبه اندیس‌های مرتبط در تابع کمکی |
| **نمایش خانه‌های از پیش پر شده** | قفل اولیه خانه‌های non-zero دریافتی از API |

# 🧩 Sudoku with Real-Time Validation

Interactive Sudoku game fetching puzzles from an API with real-time answer validation. Developed during frontend internship at **Kamaan Robotics House**.

![Sudoku Game Demo](./screenshots/gameplay.gif)

## ✨ Features

- 📡 Fetches random Sudoku puzzles with solutions from external API
- ✅ Real-time validation against server-provided solution
- 🔒 Locks cell after correct input
- 🔴 Red highlight for incorrect entries
- 🚫 Prevents input in other cells until incorrect value is fixed
- 🎨 Highlights related row, column, and 3×3 block
- 🔄 New puzzle generation
- 📊 Remaining cells counter

## 🛠️ Tech Stack

- **Framework:** React + Vite
- **State Management:** Context API
- **HTTP Client:** Fetch API
- **Styling:** TailwindCSS
- **Code Quality:** ESLint + Prettier

## 🎯 Technical Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| Real-time validation across 81 cells | Compare input against solution in Context state |
| Row/column/block highlighting | Helper function with index calculation |
| Pre-filled cell protection | Lock initial non-zero cells from API |

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
