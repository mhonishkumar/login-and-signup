Here is a clean, ready-to-use **README.md** for your GitHub repo:

```markdown
# Voltmaster Pro – Smart Electrical Services Website

Voltmaster Pro is a modern, interactive landing page for an electrical engineering and services brand.  
It showcases services, workflow, testimonials, and projects with smooth animations, dark/light themes, and rich micro‑interactions, built using only HTML, CSS, and JavaScript.

---

## ✨ Features

### UI & UX

- Dark mode by default with smooth **light mode** toggle.
- Glassmorphism cards, gradients, and modern typography for a premium look.
- Responsive layout that works across desktop, tablet, and mobile screens.
- Animated hero section with call‑to‑action to explore services.
- Scroll‑triggered reveal animations for sections (`.reveal` elements).

### Interactivity

- **Custom cursor aura** that follows the mouse and highlights interactive elements.
- **Particles background** (via `particles.js`) for a dynamic hero atmosphere.
- **Sticky navbar** that changes style on scroll.
- **Hamburger menu** and mobile navigation drawer for smaller screens.
- Animated **number counters** for stats like projects, clients, and experience.
- Clickable **service items** that dynamically display detailed descriptions and images.
- **Project gallery** with filter buttons and smooth show/hide animations.
- **Testimonial slider** with sliding transitions.
- **Client logo marquee** with continuous scrolling animation.
- **Interactive SVG hotspots** with tooltips to highlight key areas.

### Quote & Contact Flow

- Multi‑step **“Quote Wizard” modal** with step-by-step form flow.
- Form validation and visual feedback on submission.
- Temporary success message and automatic reset of the wizard.

---

## 🛠 Tech Stack

- **HTML5** – Semantic structure for all sections and content.
- **CSS3** – Custom design system, glassmorphism, animations, responsive layout.
- **JavaScript (ES6+)** – All interactivity, animations, and dynamic content.
- **Particles.js** – For the animated particle background in the hero section.

No backend or database is required. The site runs entirely on the client side in any modern browser.

---

## 📁 Project Structure

```
.
├── simple.html   # Main HTML file (landing page)
├── style.css     # All styles, themes, animations, and layout
└── simple.js     # Interactive behavior and UI logic
```

---

## 🚀 Getting Started

### 1. Clone the repository

```
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### 2. Open in browser

Just open `simple.html` in any modern browser:

- Double-click `simple.html`, or  
- Use a simple local server:

```
# Python 3
python -m http.server 8000
# then open http://localhost:8000/simple.html
```

No build step is required.

---

## 🔍 Key JavaScript Modules (simple.js)

- **Particles initialization** – Configures and renders the animated background.
- **Cursor aura** – Tracks mouse movements and reacts to hover on links, buttons, and key UI elements.
- **Navbar behavior** – Adds/removes `.scrolled` class based on scroll position.
- **Theme switcher** – Toggles `light-mode` class on the `<body>` and swaps theme icons.
- **Mobile menu** – Opens/closes the mobile navigation drawer.
- **IntersectionObserver**:
  - Reveals elements with `.reveal` when they enter the viewport.
  - Triggers animated counters for elements with `data-target`.
- **Services panel** – Updates service title, description, and image based on the clicked `.service-item`.
- **Quote wizard modal** – Manages steps, validation, and submission feedback.

---

## 📱 Responsiveness

The layout is crafted to be responsive:

- Flexbox and utility classes for multi‑column layouts.
- Sections stack vertically on small screens.
- Navigation adapts to a mobile hamburger menu.
- Hover‑dependent features degrade gracefully on touch devices.

---

## 🧩 Customization

You can easily customize:

- **Branding & colors**: Update CSS variables in `style.css`:

  ```
  :root {
    --bg-dark: #111827;
    --bg-light: #f9fafb;
    --text-dark: #e5e7eb;
    --text-light: #1f2937;
    --primary: #fbbf24;
    --primary-hover: #f59e0b;
    --secondary: #374151;
  }
  ```

- **Service content**: Edit the `serviceDetails` object in `simple.js`.
- **Text & sections**: Modify the content in `simple.html` (hero, about, process, testimonials, etc.).
- **Animations**: Tweak `.reveal`, `@keyframes`, and other animation settings in `style.css`.

---

## ✅ Browser Support

Tested on modern browsers:

- Chrome
- Edge
- Firefox
- Safari

Older browsers without support for modern APIs (like `IntersectionObserver`) may not see all animations but will still display the content.

---

## 📄 License

You can add your preferred license here, for example:

```
MIT License – feel free to use, modify, and adapt this template for your own projects.
```

---




[5](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/107308094/7c1a5f46-8e7e-448f-a012-0cf2b47a2087/image.jpg)
[6](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/107308094/4f6b8a83-1e4f-4f70-9402-01cd63c9ed91/image.jpg)
