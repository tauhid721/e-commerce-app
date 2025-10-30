# e-commerce-app

A small React + Vite e-commerce demo app (tailwind + framer-motion). This repository contains a minimal storefront with product lists, cart, checkout and basic auth stored in localStorage for demo purposes.

## What this repo contains

- React 19 + Vite
- Tailwind CSS utilities
- Framer Motion for animations
- Small client-side contexts: Theme, Search, Cart, Auth
- Pages: Home, Menu, Category, Product Details, Checkout, Order Success, Profile, Login, Signup

## Quick start
Requirements: Node 18+ and npm installed.

1. Install dependencies

```powershell
npm install
```

2. Start dev server

```powershell
npm run dev
```

3. Open the URL shown by Vite (usually http://localhost:5173)

4. Build for production

```powershell
npm run build
```

## Project notes

- Theme: the app toggles theme via a ThemeContext that sets a `dark` class on the root element. Make sure Tailwind is configured for class-based dark mode if you expect `dark:` utilities to work.
- Cart and Auth are demo-only and stored in localStorage (no backend). Checkout saves orders to `orders` and `lastOrder` in localStorage and navigates to `/order-success`.
- Animations use Framer Motion; some components import motion as `Motion` to avoid lint false-positives.

## Helpful scripts

- `npm run dev` - start Vite dev server
- `npm run build` - build for production
- `npm run preview` - preview the production build

## Deployment
You can deploy the built `dist` folder to any static host (Netlify, Vercel, GitHub Pages, etc).

## Contributing / Next steps

- Add backend APIs for products, cart and orders
- Proper authentication and server-side order persistence
- CI (lint/test) and TypeScript migration

---
If you want, I can add a basic GitHub Action that runs `npm ci && npm run build` on push.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
