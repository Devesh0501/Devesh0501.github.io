# Devesh Arya — Portfolio

A production-ready React portfolio with dark/light mode, scroll animations, and a resume download button.

## Features

- **Dark / Light mode** — system preference detected on first load, toggled via the navbar button, persisted to localStorage
- **Scroll animations** — every section and card fades + slides in using `IntersectionObserver` (no library needed)
- **Resume download** — one-click `.txt` download from the hero CTA
- **Fully responsive** — mobile hamburger menu, adaptive grids, no horizontal overflow
- **CSS Modules** — scoped styles per component, zero class-name conflicts
- **Zero runtime dependencies** beyond React itself

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx / .module.css
│   ├── Hero.jsx   / .module.css
│   ├── Skills.jsx / .module.css
│   ├── Experience.jsx / .module.css
│   ├── Projects.jsx   / .module.css
│   ├── Contact.jsx    / .module.css
│   └── Footer.jsx     / .module.css
├── data/
│   └── portfolioData.js   ← all content lives here
├── hooks/
│   ├── useTheme.js        ← dark/light toggle + localStorage
│   └── useInView.js       ← IntersectionObserver scroll hook
├── App.js
├── App.css
└── index.css              ← CSS variables for both themes
```

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (opens at http://localhost:3000)
npm start

# 3. Build for production
npm run build
```

## Customisation

### Update your content
Edit **`src/data/portfolioData.js`** — all personal info, skills, experience, and project data is centralized there. No need to touch any component.

### Replace the resume download
In `Hero.jsx`, find the `handleDownload` function and swap the text content with a real PDF:
```js
// Option A: link to a hosted PDF
window.open('https://your-domain.com/Devesh_Arya_Resume.pdf', '_blank');

// Option B: bundle the PDF in /public and download it
const a = document.createElement('a');
a.href = '/Devesh_Arya_Resume.pdf';
a.download = 'Devesh_Arya_Resume.pdf';
a.click();
```

### Change the colour scheme
Open `src/index.css` and update `--accent`, `--accent2`, `--accent3` inside both `[data-theme="dark"]` and `[data-theme="light"]`.

## Deployment

```bash
npm run build
# Upload the /build folder to Vercel, Netlify, or any static host
```

For Vercel: `vercel --prod` (auto-detects Create React App).
