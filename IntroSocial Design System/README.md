# IntroSocial — Design System

> **"Private memories for your people."**
> A dark-mode, invite-only social app for small groups — built around group chats, shared photo *Moments*, and lightweight *Events* promoted straight out of conversation.

This folder is a working design system: real color & type tokens, fonts, brand assets, copy guidelines, and high-fidelity HTML/JSX recreations of the actual product surfaces. Use it to design new IntroSocial screens, marketing, decks, or prototypes that look and feel native to the product.

---

## Sources

Everything here was reverse-engineered from the product's own source code. If you have access, explore these to go deeper:

- **Codebase (primary source of truth):** `arhamwebexpert/introsocial-website` — a Next.js 16 / React 19 app (private repo).
  - Design tokens & global CSS: `app/globals.css`
  - Components: `components/` (`Navbar`, `MomentCard`, `GroupCard`, `Toast`, `CreateEventModal`, `PromoteEventModal`)
  - Screens: `app/` (`login`, `signup`, `dashboard`, `newsfeed`, `moments`, `groups/[id]/chat`, `groups/[id]/events`, `groups/[id]/moments`, `groups/create`)

> The repo is the canonical reference. Tokens, copy, and component structure in this system were lifted directly from it — explore it to build higher-fidelity work.

---

## What IntroSocial is

IntroSocial is a **private group social network**. There is no public profile, no global feed of strangers — everything happens inside **groups** you create or join with an **invite code**. The product is three surfaces braided together:

| Surface | What it is | Visual language |
|---|---|---|
| **Feed / Shell** | Login, Dashboard (your groups), News Feed of Moments, Events list | **Facebook-dark** — near-black canvas, grey cards that lift, one brand blue |
| **Moments** | Facebook-style photo posts with likes + comments, surfaced in the News Feed and per-group | Same Feed shell; image-forward cards |
| **Group Chat** | A real-time group room with threads, inline replies, and "promote message → Event" | **WhatsApp-dark** — a darker, bluer "room"; gradient bubbles you send vs flat bubbles you receive |

The core loop: **join a group → chat → a message becomes an Event → the group shows up at the Event → photos get posted as Moments → the News Feed remembers it.** Hence the tagline — it's a memory-keeper for your real-life people, not a broadcast network.

### Core objects
- **User** — name + email; represented everywhere by **initials in a blue circle** (no uploaded avatars in the core flows).
- **Group** — name, description, cover (gradient if none), **invite code** (monospace, uppercase), member count.
- **Moment** — caption + optional image, likes, comments.
- **Message** — text, optional reply-to (WhatsApp-style quote), can be promoted to an Event, can have a thread.
- **Event** — title, date/time, location, public/private, optionally "from thread".

---

## CONTENT FUNDAMENTALS — how IntroSocial writes

The voice is **warm, plain, and second-person** — it talks to *you* about *your* people. It is friendly but never cutesy or corporate. Sentences are short and concrete.

- **Person & address:** Second person, direct. *"Connect with the people who matter most."* / *"See the latest moments from all your groups."* / *"You will see posts from your groups here once activity happens."*
- **Tone:** Encouraging and low-pressure. Empty states invite action rather than scold: *"No groups yet — Create a group or join one with an invite code."* / *"No messages yet. Start the conversation!"*
- **Casing:** **Sentence case** everywhere — headings, buttons, labels. The one exception is small **UPPERCASE eyebrow labels** with letter-spacing (e.g. `YOUR GROUPS (3)`, `SUMMARY`). The brand wordmark is lowercase: **`introsocial`**.
- **Buttons are verbs:** *Log In*, *Create new account*, *New Group*, *Join*, *Create Event*, *Join Chat*, *Summarize*, *End Event*. First-action buttons spell out the noun ("Create your first group"), not just "Submit".
- **Microcopy is literal & helpful:** placeholders say exactly what to do — *"Email address"*, *"Invite code"*, *"Write a comment…"*, *"Type a message…"*, *"Reply in thread…"*, *"Tap message for thread."*
- **Numbers & counts** are surfaced inline and pluralized correctly: *"1 comment" / "5 comments"*, *"Your Groups (3)"*.
- **Ellipsis for in-progress:** loading labels use a real ellipsis — *"Signing in…"*, *"…"* on a busy Join button.
- **Emoji are part of the voice.** They prefix section titles and label feature chips — this is intentional, friendly, and consistent (see Iconography). Examples: `📰 News Feed`, `📸 Moments`, `📅 Events`, `🔒 Private`, `🌐 Public`, `💬 From thread`, `👥 12`. Use them the way the product does (as a leading glyph on a label), not scattered into body copy.
- **No jargon, no hype.** No "leverage", "seamless", "revolutionary". Just what the thing does.

**Vibe in one line:** a cozy group chat that remembers — written like a friend, not a platform.

---

## VISUAL FOUNDATIONS

### Mood
Dark, calm, and dense-but-breathable. Two coordinated dark palettes (Feed grey-on-near-black, Chat bluer-and-darker) give the product two "rooms" that still feel like one app. Colour is restrained: a single confident **brand blue (#1877f2)** carries nearly everything, with green for create/success and red for destructive. Imagery and identity are conveyed through **blue gradients** (avatars, covers, bubbles) rather than photography or illustration.

### Color
- **Feed surfaces** climb out of near-black in greys: `#18191a` canvas → `#242526` card → `#3a3b3c` input/hover → `#4e4f50` deepest. See `colors_and_type.css`.
- **Chat surfaces** are a separate, darker, bluer set: `#0a0e14` room → `#1c1e22` bar/received-bubble → `#2a2f38` field/chip.
- **Brand blue** `#1877f2` (hover `#166fe5`, gradient partner `#0d5dbf`/`#0d47a1`). **Green** `#42b72a` create/success. **Red** `#f02849` destructive. **WhatsApp green** `#25d366` only inside chat (promoted events). **Amber** `#ffc947` for private/locked badges.
- **Text** is a 3-step grey ramp on dark: `#e4e6eb` primary (off-white, never pure white for body), `#b0b3b8` secondary, `#8a8d91` muted. White (`#fff`) is reserved for text on blue/green fills.

### Type
- **One family: Inter** (Google Fonts), weights 400/500/600/700/800. Hierarchy is built from weight + size, not multiple typefaces. Body 15px/400, UI labels 600, titles 700–800. Lowercase brand wordmark.
- **Monospace** appears in exactly one place: **invite codes** (and the join-code input), set in a tinted pill.

### Backgrounds
- Mostly **flat dark fills** — no photos behind content. The Feed is flat `#18191a`.
- The **Chat room** is the one textured surface: a vertical gradient `#0a0e14 → #0d1117` plus two faint blue radial glows (`rgba(24,119,242,0.03)`) in the corners — subtle "atmosphere," never a pattern.
- **Gradients stand in for imagery:** group covers, all avatars, own-message bubbles, and the send button are 135° blue gradients. When there's no real image, you see a gradient + initials, never a grey box.

### Spacing & layout
- Works in **rem multiples of 4px**. The workhorse gap between cards is **12px (`0.75rem`)**; card padding is **16px (`1rem`)**.
- **Centered single columns:** Feed content maxes at ~680–700px; the chat room widens to ~1300px. Everything is centered with auto margins.
- **Fixed chrome:** a 56px top navbar (and a 56px bottom tab bar on mobile) is `position: fixed`; content gets matching top padding. The chat view hides the global nav and owns the full viewport (`100vh`, its own header + sticky composer).

### Corners, borders, shadows
- **Radii:** 8px default (buttons, inputs), 12px cards, 16px chat bubbles (with one corner tucked to 4px to "point" at the sender), 20–24px pills/chips/text-fields, 50% circles (avatars, icon buttons, logo).
- **Borders** are a single hairline `#3a3b3c` (= the input/hover grey). Cards generally have **no border** — they're separated by background contrast + shadow. Borders appear as **dividers inside cards** (action bars, comment sections) and around inputs/chips.
- **Shadows** are soft, near-black, two-layer. Cards rest at `0 1px 2px rgba(0,0,0,.3), 0 2px 8px rgba(0,0,0,.2)`; the navbar a touch stronger; toasts float at `0 4px 20px rgba(0,0,0,.5)`. Own chat bubbles get a **blue glow** `0 2px 8px rgba(24,119,242,.4)` instead of a black shadow.

### Hover & press
- **Hover = lighten.** Surfaces step up one shade (surface → surface2 → surface3). Idle nav/links go blue on hover. Destructive actions flood **red** on hover. Cards **lift** (`translateY(-2px)` + deeper shadow).
- **Press = shrink.** Primary/secondary buttons scale to `0.98` on `:active`; the send button scales `1.05` on hover.
- All transitions are **fast (0.15s) and `ease-out`**, color/background only.

### Motion
A small, purposeful set of keyframes (all `ease`/`ease-out`, 0.15–0.35s):
- `fadeInUp` — page-enter (content rises 8px + fades, 0.22s).
- `shimmer` — skeleton loaders (1.4s sweep between two greys). The product **always shows skeletons**, not spinners, for content loads.
- `slideInMsg` — new chat messages rise 10px + fade.
- `likeBounce` — the Like icon pops (scale 1 → 1.4 → 0.9 → 1) when you like.
- `toastIn` — toasts slide in from the right.
- `spin` — the only spinner, used inside buttons and the events loader.

No parallax, no scroll-jacking, no decorative looping animation. Motion confirms actions and masks latency.

### Transparency & blur
Used sparingly: the group-cover member-count badge is a translucent black pill (`rgba(0,0,0,.6)`) with `backdrop-filter: blur(4px)`; error banners and some badges use ~12% tinted fills with a ~25–30% tinted border (e.g. red `rgba(240,40,73,.12)` fill). Otherwise surfaces are fully opaque.

### Cards (the canonical container)
`.fb-card` = `#242526` background, **12px radius, no border**, soft two-layer shadow, `overflow: hidden` (so cover images and dividers clip cleanly). Internal structure is separated by **1px `#3a3b3c` dividers**, not nested cards. This single card style covers posts, groups, events, the login box, headers, and empty states.

---

## ICONOGRAPHY

IntroSocial uses **two parallel icon systems**, and you should respect both:

1. **Custom inline SVG line icons** for primary navigation and post actions. These are **Feather/Lucide-style**: 24×24 viewBox, `stroke="currentColor"`, **stroke-width 2**, round caps & joins, no fill when idle. They support a **`filled` state** (active nav / liked) by switching to `fill="currentColor"` with stroke-width 0. The set in the codebase: Home, Groups (people), Moments (image), Plus, Logout (sign-out arrow), Key (join), ThumbsUp (like), CommentBubble, Send (paper-plane). Colour follows state: idle `--fb-text-secondary`, active/liked `--fb-blue`.
   → These are reproduced in `assets/icons.js` (drop-in SVG strings) so you never need to hand-draw them. **There is no icon font and no sprite** in the product — the icons live inline in components. If you need an icon not in the set, match the spec (Lucide 24px / stroke 2 / round caps) — **Lucide is the correct CDN substitute.**

2. **Emoji as functional glyphs.** Emoji are a deliberate, consistent part of the UI — they prefix section titles and label feature chips/badges. They are *not* decoration sprinkled into prose. Canonical usage:
   - Section titles: `📰 News Feed`, section heroes in empty states (large `📰`, `👥`, `📅`, `💬`).
   - Feature chips: `📸 Moments`, `📅 Events`, `💬 Join Chat` / `💬 Thread`, `📝 Summarize`, `🔚 End Event`.
   - Badges: `🔒 Private`, `🌐 Public`, `💬 From thread`, `📅 Event`, `👥 {count}`, `👤 {name}`, `🕐 {time}`, `📍 {location}`.
   - Toast status glyphs are **typographic, not emoji**: `✓` success, `✕` error, `ℹ` info — each in a coloured circle. The send arrows are unicode `➤` / `↪`, not emoji.

**Logo / brand mark:** a lowercase **italic "i" in a solid blue circle** (CSS-drawn, no file): blue `#1877f2` circle, white italic 900-weight `i`, sizes 40px (navbar) / 60px (login). The wordmark **`introsocial`** is lowercase, weight 800, brand blue, shown beside the mark on ≥600px. See `assets/logo.html` for a faithful reproduction.

> **Don't** hand-draw new SVG illustrations, use a different icon family, or swap the emoji for line icons (or vice-versa). The mix of Lucide-style line icons + functional emoji *is* the brand.

---

## Index — what's in this folder

| Path | What it is |
|---|---|
| `README.md` | This file — product context, content & visual foundations, iconography. |
| `colors_and_type.css` | All design tokens: color, type, radius, shadow, spacing, motion. **Import first.** |
| `SKILL.md` | Agent-Skill manifest so this system works as a downloadable Claude skill. |
| `fonts/` | Inter (loaded via Google Fonts `@import` in the CSS). |
| `assets/` | Brand assets: `logo.html` (the "i" mark + wordmark), `icons.js` (drop-in SVG icon set). |
| `preview/` | The Design System tab cards — color, type, spacing, component specimens. |
| `ui_kits/introsocial/` | High-fidelity, interactive recreation of the app: `index.html` (click-through demo) + JSX components (`Navbar`, `MomentCard`, `GroupCard`, `ChatRoom`, `EventCard`, `AuthCard`, `Toast`, primitives). |

### How to use it
- **Designing a new screen/mock:** import `colors_and_type.css`, pull components from `ui_kits/introsocial/`, copy assets you need out of `assets/`, and follow the rules above. Build a static HTML file for the user to view.
- **Working in the real codebase:** treat `app/globals.css` in the repo as the live source; this system documents and visualizes it.
