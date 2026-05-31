---
name: introsocial-design
description: Use this skill to generate well-branded interfaces and assets for IntroSocial, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

IntroSocial is a dark-mode, invite-only group social app — "Private memories for your people." It runs on two coordinated dark palettes: a Facebook-style **Feed** shell and a WhatsApp-style **Chat** room. One brand blue (#1877f2) does almost all the work; Inter is the only typeface; identity comes from blue gradients (avatars, covers, bubbles) rather than photography. Emoji are used as functional UI glyphs.

Key files:
- `README.md` — product context, content & visual foundations, iconography. **Start here.**
- `colors_and_type.css` — all design tokens (color, type, radius, shadow, spacing, motion). Import first.
- `assets/` — `logo.html` (the "i" mark + wordmark), `icons.js` (drop-in Lucide-style SVG icon set + functional-emoji map).
- `ui_kits/introsocial/` — high-fidelity, interactive recreation of the app (login → dashboard → news feed → group chat → events) with reusable JSX components (`Navbar`, `AuthCard`, `MomentCard`, `GroupCard`, `ChatRoom`, `EventsView`, primitives).
- `preview/` — design-system specimen cards.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
