# Anshul Khichi — Portfolio Website

Professional portfolio built with **Vite + React + React Router**.  
White, minimal, senior UI/UX level design.

---

## 🚀 Quick Start

```bash
# 1. Extract the ZIP and enter the folder
cd anshul-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# Opens at → http://localhost:5173
```

---

## 📁 Project Structure

```
src/
├── App.jsx                 ← Router + layout
├── main.jsx                ← Entry point
├── data/
│   └── portfolio.js        ← ✏️  ALL YOUR DATA HERE
├── hooks/
│   └── index.js            ← Cursor, scroll reveal, page title
├── components/
│   ├── Navbar.jsx/.module.css
│   └── Footer.jsx/.module.css
├── pages/
│   ├── Home.jsx/.module.css
│   ├── About.jsx
│   ├── Experience.jsx/.module.css
│   ├── Projects.jsx/.module.css
│   ├── Skills.jsx/.module.css
│   ├── Achievements.jsx/.module.css
│   └── Contact.jsx/.module.css
└── styles/
    └── index.css           ← Global styles, design tokens
```

---

## ✏️ How to Customize

### 1. Update your data
Open `src/data/portfolio.js` and update:
- `personal` object — name, email, links
- `education`, `experience`, `projects`, `skills`, `achievements`, `certificates`

### 2. Add your photo
In `src/pages/About.jsx` and `src/pages/Home.jsx`, replace the placeholder div with:
```jsx
<img src="/your-photo.jpg" alt="Anshul" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
```
Place your photo in the `public/` folder.

### 3. Add your resume PDF
Place `AnshulKhichi_Resume.pdf` in the `public/` folder.

### 4. Add achievement photos
Place images in `public/gallery/` and update `Achievements.jsx`:
```jsx
<img src="/gallery/udbhavan.jpg" className={styles.galleryImg} alt="Udbhavan 2.0" />
```

---

## 📦 Build for Production

```bash
npm run build
# Output in /dist folder — deploy to Vercel, Netlify, GitHub Pages
```

## 🌐 Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect to Vercel for auto-deploy.

---

## 🎨 Design System

| Token          | Value              |
|----------------|--------------------|
| Font (sans)    | Geist              |
| Font (serif)   | Instrument Serif   |
| Font (mono)    | Geist Mono         |
| Accent blue    | `#1a56db`          |
| Background     | `#f8f7f4`          |
| Surface        | `#ffffff`          |
| Text           | `#111110`          |

---

Built with ♥ by Claude for Anshul Khichi
