# 🚀 Premium Developer Portfolio

A stunning, highly-interactive developer portfolio template built with **Next.js**, **React**, **Tailwind CSS**, and **Framer Motion**. Designed for Senior Engineers to showcase their work with a highly polished glassmorphism aesthetic without looking like a generic corporate pitch.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white) 
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?logo=framer&logoColor=white)

---

## ✨ Features

- 🌓 **Perfect Dark/Light Mode**: Completely dynamic transitions using structural HTML-level Tailwind dark mode support.
- 🎨 **Glassmorphism UI**: Beautiful frosted-glass UI cards, ambient background lighting, and premium layout structure.
- 🎭 **Micro-Interactions**: Advanced, buttery-smooth scroll-reveal animations and active hover states powered by `framer-motion`.
- ⚡ **Highly Performant**: Fully static Next.js production build (`next build`) leveraging modern Image optimization APIs.
- 🛠 **Customizable Skill Grids**: Skill components automatically map to custom brand hex-colors on hover (e.g., Python glows `#3776AB`, React glows `#61DAFB`).

---

## 🛠️ Quick Start & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pavansantosh-ps/pavansantosh-ps.git
   cd pavansantosh-ps/portfolio
   ```

2. **Install dependencies:**
   We recommend using `pnpm`, but `npm` or `yarn` work too!
   ```bash
   pnpm install
   ```

3. **Start the Development Server:**
   ```bash
   pnpm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🎨 How to Customize for Yourself

We made it incredibly easy to use this template for your own portfolio. All major configurations are contained in a few files:

1. **Update Content**: All the text, timeline data, and tech stacks are stored directly in `pages/index.js`. Search for `Pavan Santosh` and replace it with your own name and experiences!
2. **Update Brand Colors**: The color palette (Orange/Teal) is configurable in `tailwind.config.js` under `colors.brand`. 
3. **Change Avatar**: Swap out `/public/hero.png` with your own 4:5 vertical portrait or 3D avatar. *(We recommend using a transparent or solid dark base for the best glassmorphism effect!)*
4. **Update Resume**: Drop your own PDF in `/public/Resume.pdf`.

---

## 🚢 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new). Since this uses standard `next build` static generation, you can effortlessly push the code to Vercel and it will host it for free globally.

```bash
pnpm run build  # Tests local production build locally
```

Ensure your Vercel project is mapped to the `/portfolio` sub-directory if cloned from this repository structure.

---

*Found this useful? Don't forget to star the repo!* 🌟
