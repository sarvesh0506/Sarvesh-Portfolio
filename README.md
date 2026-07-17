# Sarveshkumar S | Personal Portfolio

A modern, premium-quality personal developer portfolio website built using **React**, **Vite**, **Tailwind CSS (v4)**, and **Framer Motion**. Optimized for speed, fully responsive, and styled with a luxury **Coca-Cola inspired theme**.

---

## 🎨 Theme & Aesthetic

- **Primary Color**: `#E41E26` (Coca-Cola Red)
- **Secondary Color**: `#FFFFFF` (White)
- **Background**: `#0A0A0A` (Matte Black)
- **Accent Color**: `#B71C1C` (Dark Red)
- **Style**: Premium, glassmorphic cards, Apple-like smooth animations, floating fizz particle backgrounds, and glowing interactive indicators.

---

## 🚀 Features

- **Custom Loading Screen**: Premium 0-100% preloader featuring animated logo and load bars.
- **Typing Intro Animation**: Hero section with custom loop typing titles.
- **Glassmorphism Metrics**: About cards with soft glow effects on hover.
- **Interactive Skill bars**: Progress indicators animating dynamically into view.
- **Project Grid Layout**: Clean layout featuring image highlights, technology badges, and action buttons.
- **Vertical Timelines**: Dedicated academic timeline detailing degrees, locations, and grades.
- **Functional Contact Form**: Integrated client-side form validation and **EmailJS** message transmission.
- **Custom Cursor Glow**: Ambient cursor-tracking glow circle for large screen desktops.
- **Smooth Navigation**: Sticky glassmorphic header tracking active viewport sections.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 (built with `@tailwindcss/vite`)
- **Animations**: Framer Motion 12
- **Icons**: React Icons (FontAwesome & SimpleIcons)
- **Scroll Tracking**: React Scroll
- **Contact Handling**: EmailJS Browser SDK

---

## 💻 Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/sarvesh0506/Sarvesh-Portfolio.git
cd Sarvesh-Portfolio
```

### 2. Install dependencies
```bash
npm install --legacy-peer-deps
```

### 3. Configure environment variables
Create a `.env` file in the root directory (or update the existing `.env`) with your **EmailJS** credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Run the development server
```bash
npm run dev
```

---

## 📦 Deployment to GitHub Pages

The project contains a pre-configured `gh-pages` deployment pipeline. To publish your portfolio to GitHub Pages:

Run the deploy command:
```bash
npm run deploy
```

This command will:
1. Automatically compile the production bundle (`predeploy` script running `npm run build`).
2. Scaffolds the build assets inside the `dist/` directory.
3. Automatically pushes the output assets to the `gh-pages` branch on your remote repository.

Ensure that the repository settings on GitHub are configured to serve pages from the `gh-pages` branch.
