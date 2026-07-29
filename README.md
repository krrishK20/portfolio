# Portfolio — Krrish Molla

> Backend Engineer & Security Researcher — personal portfolio built with vanilla web technologies and a security-first design philosophy.

## Overview

A single-page portfolio website built to showcase engineering expertise, security research, and project work. Designed with a dark premium aesthetic, interactive particle system, and smooth scroll-driven animations — all without frameworks or build steps.

## Live Demo & Repository

- **Repository:** [github.com/krrishK20/portfolio](https://github.com/krrishK20/portfolio)
- **Live Site:** Deploy via [GitHub Pages](https://pages.github.com) — `Settings → Pages → main branch → Save`

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | Semantic HTML5 |
| Styling | Modern CSS3 (Custom Properties, Grid, Flexbox, Glassmorphism) |
| Interactivity | Vanilla JavaScript (ES5-compatible, zero dependencies) |
| Typography | Inter (sans-serif) + JetBrains Mono (monospace) via Google Fonts |
| Version Control | Git + GitHub |

### Why No Frameworks?

Intentionally built with **zero dependencies** to demonstrate raw proficiency with the platform:

- **No React/Vue/Angular** — the site is a single static document; a framework would add unnecessary complexity
- **No Tailwind/Bootstrap** — every style is hand-crafted CSS with a custom design system
- **No build step** — no bundlers, no transpilers, no `node_modules`. Clone and open
- **Under 50 KB total** — all three files combined deliver faster than the DNS lookup for most npm packages

## Architecture

```
portfolio/
├── index.html      # Single-page document with semantic sections
├── styles.css      # Custom design system with CSS variables
└── script.js       # Vanilla JS — particles, animations, navigation
```

### Design System

The stylesheet implements a complete design token system using CSS custom properties:

- **Color palette:** Deep space gray (`#050508`) base with purple (`#7c6ff7`) accent and green (`#34d399`) highlights
- **Typography scale:** Inter for body text, JetBrains Mono for code and technical labels
- **Spacing system:** Consistent 4px-based rhythm with fluid `clamp()` values for responsive type
- **Glassmorphism:** Frosted-glass card surfaces via `backdrop-filter: blur(20px)` with semi-transparent borders
- **Dark mode only** — designed for developer audiences who live in dark UIs

### Interactive Features

| Feature | Implementation |
|---------|---------------|
| Particle Canvas | Procedural particle system with connected-node mesh via Canvas 2D API |
| Skill Bars | Animated progress bars triggered by Intersection Observer for on-scroll reveal |
| Scroll Reveal | Staggered fade-in with translateY on cards, blocks, and timeline items |
| Active Nav | Scroll-position tracking highlights the current section in navigation |
| Mobile Menu | Hamburger toggle with backdrop-blur overlay, body scroll lock |
| Loading Screen | Minimal branded loader with gradient progress bar, auto-dismisses on load |
| Tech Marquee | Infinite horizontal scroll of technology tags using CSS `@keyframes` |

### Performance Considerations

- Canvas particle count scales with viewport width (max ~80 particles)
- Intersection Observer used instead of scroll event listeners for animations
- Debounced layout paints through `requestAnimationFrame`
- Mask-image gradients on marquee for GPU-accelerated fade edges
- Zero layout shifts — all elements have reserved space from initial paint

## Sections

1. **Hero** — Full-viewport landing with particle background, gradient title, stats, and CTA
2. **About** — Professional summary with security-driven development philosophy and key highlights
3. **Skills** — Animated skill bars, scrolling tech marquee, and tools cloud for recon/security tools
4. **Experience** — Vertical timeline with role descriptions, tech tags, and impact metrics
5. **Projects** — Featured work cards with icons, descriptions, tech stacks, and GitHub/demo links
6. **Contact** — Four-channel contact grid (Email, GitHub, LinkedIn, Twitter)

## Getting Started

### Local Development

```bash
# Clone the repository
git clone git@github.com:krrishK20/portfolio.git
cd portfolio

# Open in browser
# No build step — just open index.html
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### Deploy to GitHub Pages

1. Push to the `main` branch
2. Go to repository **Settings → Pages**
3. Source: `Deploy from a branch` → `main` → `/ (root)` → Save
4. Site will be available at `https://krrishk20.github.io/portfolio`

## Customization

To personalize this portfolio for your own use:

| File | What to Change |
|------|---------------|
| `index.html` | Name, role, tagline, about text, experience entries, project descriptions, social links, email |
| `styles.css` | `--accent` and `--green` variables in `:root` to change the color scheme |
| `script.js` | Particle count and color (line ~35), or disable particles entirely by removing `initParticles()` |

## License

MIT — feel free to fork and adapt. Attribution appreciated but not required.

---

*Built with precision. Secured by design.*
