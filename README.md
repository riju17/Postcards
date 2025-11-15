# Winged Wonders – Birds Postcard Exhibit

Winged Wonders is a fully static, single-page-inspired microsite that presents a curated postcard journey through herbivorous, carnivorous, omnivorous, and concluding bird stories. The project combines immersive gradients, typographic storytelling, maxim-card scans, QR anchors, and GSAP-powered motion cues to guide visitors from chapter summaries to individual postcards and legacy narratives.

## Highlights
- **Philatelic storytelling** – Every bird detail page pairs postcard fronts, backs, and timelines that document real-world postal journeys.
- **Responsive galleries** – `bird-gallery` layouts adapt between landscape and portrait ratios, including specialty tall frames for artifacts such as the Dodo postcard.
- **Animated narrative flow** – GSAP timelines (with ScrollTrigger) bring in panels, cards, and CTA states for a museum-like reveal.
- **QR-friendly exhibit** – The `QR/` directory stores high-resolution PNG codes that link physical placards to their matching digital stories.
- **Curated long-form chapters** – Herbivore, carnivore, omnivore, and conclusion sections are authored as independent HTML chapters for easy kiosk or static hosting.

## Tech Stack
- Semantic HTML5 with Montserrat + Inter web typography
- Custom CSS (no frameworks) with CSS variables and fluid spacing
- GSAP 3 (core + ScrollTrigger) for animations
- Vanilla JavaScript (`script.js`) for nav toggles and animation hooks

## Repository Layout
```text
assets/            # Postcard scans, stamps, and supporting artwork
birds/             # Individual bird detail pages grouped by diet
stories/           # Thematic narratives (e.g., Dodo legacy, Ramsar sites)
data/              # Supplemental metadata for chapter listings
QR/                # Printable QR codes for physical exhibit signage
index.html         # Landing page with hero animation
introduction.html  # Chapter 1 – context + framing
herbivores.html    # Chapter 2 – herbivorous birds overview
carnivores.html    # Chapter 3 – carnivorous birds overview
omnivores.html     # Chapter 4 – omnivorous birds overview
conclusion.html    # Chapter 5 – closing reflections
styles.css         # Global styling, layout utilities, gallery controls
script.js          # GSAP timeline wiring + nav interactions
```

## Getting Started
1. **Clone the repository**
   ```bash
   git clone https://github.com/riju17/Postcards.git
   cd "Postcard webpage"
   ```
2. **Serve locally** – Any static server works. For example:
   ```bash
   python3 -m http.server 8080
   ```
   Then visit `http://localhost:8080` in your browser.
3. **Edit content** – Each card lives in its own HTML file under `birds/` or `stories/`. Update postcard journeys, essays, or imagery directly in those files.

## Authoring Guidelines
- Keep postcard journeys concise but chronological, noting sketch location, postmarks, and transit events.
- For new portrait artifacts, apply `.portrait-gallery` and, when needed, add specific modifiers (e.g., `.tall-portrait`) plus matching CSS rules.
- Optimize new assets (JPG/PNG) before adding them to `assets/` or `QR/` to maintain quick load times.
- Reuse typography and section patterns from existing pages to ensure a consistent visitor experience across the exhibit.

## Deployment
Because the project is static, deployment is as simple as uploading the repository contents to any static host (GitHub Pages, Netlify, Vercel, S3/CloudFront, on-prem kiosk, etc.). Ensure the `assets/` and `QR/` folders remain intact so galleries and QR signage resolve correctly.

