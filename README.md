# Jatin Srivastava - Developer Portfolio

A modern, animated developer portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Stack**: Built with React 18, Vite, and Tailwind CSS.
- **Animations**: Smooth page transitions and scroll animations using Framer Motion.
- **Responsive**: Fully responsive design for mobile, tablet, and desktop.
- **Dark Mode**: Sleek dark theme by default.
- **Command Palette**: Press `Ctrl+K` (or `Cmd+K` on Mac) to navigate the site quickly.
- **Performance**: Optimized for speed and SEO.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Scroll**: [React Scroll](https://www.npmjs.com/package/react-scroll)

## 📦 Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/jatinsri25/jatinsri25.github.io.git
    cd jatinsri25.github.io
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

## 🚀 Deployment

This project is configured to be deployed on **GitHub Pages** or **Vercel**.

### GitHub Pages

1.  Update `vite.config.js` with your base URL if needed (default is `/`).
2.  Run the build command:
    ```bash
    npm run build
    ```
3.  Deploy the `dist` folder to your `gh-pages` branch.

### Vercel / Netlify

Simply connect your GitHub repository and the deployment will be handled automatically.

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, Layout wrapper
│   ├── sections/     # Hero, About, Experience, Projects, Skills, Contact
│   └── ui/           # Reusable UI components (Buttons, Section, etc.)
├── data/             # Static data for portfolio content
├── index.css         # Global styles and Tailwind directives
├── main.jsx          # Entry point
└── App.jsx           # Main application component
```
