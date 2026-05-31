# IntroSocial — UI Kit

A high-fidelity, interactive recreation of the IntroSocial app, built from the product's own source (`arhamwebexpert/introsocial-website`). Open `index.html` for a click-through demo that walks the real product loop:

**Login → Dashboard (your groups) → News Feed (Moments) → Group Chat → Events.**

These are cosmetic recreations for design work — not production code. They get the visuals and interactions right so you can assemble new IntroSocial screens fast.

## Run it
Open `index.html`. Log in (prefilled) → click a group card to enter the WhatsApp-style **Chat** (send messages, reply, open Events) → use the navbar to reach the **News Feed** (like + comment on Moments live).

## Files
| File | What it is |
|---|---|
| `index.html` | Loads React + Babel and every component; mounts `App`. |
| `kit.css` | Utility classes + keyframe animations from the product's `globals.css`. Imports `../../colors_and_type.css`. |
| `data.js` | Sample groups, moments, messages, events (`window.SEED`). |
| `primitives.jsx` | `Icon`, `Avatar`, `Badge`, `Logo`, `Spinner`, `initialsOf`. |
| `Navbar.jsx` | Fixed 56px top shell with active-tab state. |
| `AuthCard.jsx` | Login card (the "i" mark, blue/green CTAs). |
| `GroupCard.jsx` | Group tile — gradient cover, member badge, invite code, hover-lift. |
| `MomentCard.jsx` | Facebook-style post with working like (bounce) + comments. |
| `ChatRoom.jsx` | WhatsApp-style room — gradient sent bubbles, replies, composer. |
| `EventsView.jsx` | Event cards with private/public + from-thread badges, summarize toggle. |
| `App.jsx` | Screen state machine + Dashboard / NewsFeed views. |

## Conventions
- Each `*.jsx` is a separate Babel script that exports its components to `window` (no bundler). Load order matters — see `index.html`.
- Hooks (`useState`, etc.) are destructured once in `primitives.jsx` and shared via the global lexical scope; later files don't re-declare them.
- All color/spacing/radius values come from CSS variables in `colors_and_type.css` — don't hardcode new colors.
