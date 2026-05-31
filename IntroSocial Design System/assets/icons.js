/* ============================================================
   IntroSocial — Icon set
   Drop-in SVG strings, lifted verbatim from the product's
   components (Navbar, MomentCard, dashboard).

   Spec: 24×24 viewBox · stroke="currentColor" · stroke-width 2
         · round caps & joins · no fill when idle.
   State: pass {filled:true} on Home / Groups / Moments / ThumbsUp
          to switch to a solid (fill=currentColor, stroke-width 0)
          active/liked variant — exactly as the app does.
   Colour follows currentColor: idle = --fb-text-secondary,
   active/liked = --fb-blue.

   Usage (vanilla):
     el.innerHTML = IntroIcons.home({ filled: true, size: 24 });
   Usage (React):
     <span dangerouslySetInnerHTML={{__html: IntroIcons.like()}} />

   There is NO icon font or sprite in the product — icons live
   inline. If you need one that's missing, match the spec above;
   Lucide (24px / stroke 2 / round caps) is the correct CDN match.
   ============================================================ */
(function (global) {
  const svg = (size, body, { filled, sw } = {}) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" ` +
    `fill="${filled ? 'currentColor' : 'none'}" stroke="currentColor" ` +
    `stroke-width="${filled ? 0 : (sw || 2)}" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;

  const IntroIcons = {
    /* primary nav */
    home: (o = {}) => svg(o.size || 24,
      `<path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"/><polyline points="9 21 9 12 15 12 15 21"/>`, o),
    groups: (o = {}) => svg(o.size || 24,
      `<circle cx="9" cy="7" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M1 20c0-3.3 3.1-6 8-6s8 2.7 8 6"/><path d="M16 14c2.7.6 5 2.6 5 5.5"/>`, o),
    moments: (o = {}) => svg(o.size || 24,
      `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>`, o),

    /* post actions */
    like: (o = {}) => svg(o.size || 20,
      `<path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z"/><path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/>`, o),
    comment: (o = {}) => svg(o.size || 20,
      `<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>`, o),
    send: (o = {}) => svg(o.size || 16,
      `<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>`, { ...o, sw: 2.5 }),

    /* utility */
    plus: (o = {}) => svg(o.size || 22,
      `<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>`, { ...o, sw: 2.5 }),
    key: (o = {}) => svg(o.size || 18,
      `<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>`, o),
    logout: (o = {}) => svg(o.size || 18,
      `<path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>`, o),
  };

  /* Functional emoji glyphs — the product's other "icon set".
     Use as a LEADING glyph on a label, never scattered in prose. */
  IntroIcons.emoji = {
    feed: '📰', moments: '📸', events: '📅', chat: '💬',
    group: '👥', person: '👤', time: '🕐', location: '📍',
    private: '🔒', public: '🌐', event: '📅', like: '👍',
    note: '📝', end: '🔚', fromThread: '💬',
  };

  /* Toast status glyphs are typographic, not emoji */
  IntroIcons.status = { success: '✓', error: '✕', info: 'ℹ' };

  if (typeof module !== 'undefined' && module.exports) module.exports = IntroIcons;
  else global.IntroIcons = IntroIcons;
})(typeof window !== 'undefined' ? window : this);
