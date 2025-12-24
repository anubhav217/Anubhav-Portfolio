Anubhav Portfolio v2.3x
===============================================

This folder contains a Vite + React + Tailwind starter portfolio which uses separate components
for Sidebar, Hero, About, Education, Experience, Projects, Skills, and Contact.

How to run locally
------------------
1. cd portfolio-expanded
2. npm install
3. npm run dev
4. Open the local URL shown by Vite (default http://localhost:5173)

Deployment (GitHub Pages)
--------------------------
1. Push all changes to GitHub
2. Go to your repository on GitHub
3. Navigate to Settings → Pages
4. Under "Source", select "GitHub Actions"
5. The site will automatically deploy on every push to the `v2.3x` branch
6. Your site will be available at: `https://anubhav217.github.io/Anubhav-Portfolio/`

Note: The base path is configured in `vite.config.mjs`. If your repository name is different, update the `base` property.

Files :
-------------
- package.json, vite.config.js, tailwind.config.cjs, postcss.config.cjs
- public/assets/* (profile.jpg, hero.jpg, resume.pdf if present)
- public/index.html
- src/index.css
- src/main.jsx
- src/App.jsx
- src/components/* (Sidebar, Hero, About, Education, Experience, Projects, Skills, Contact)
- .github/workflows/deploy.yml (GitHub Actions workflow for deployment)

Assets: profile.jpg, resume.pdf, hero.jpg
