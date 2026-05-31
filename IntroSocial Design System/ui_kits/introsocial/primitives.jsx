// IntroSocial UI kit — primitives: Icon, Avatar, Badge, Logo, Spinner.
// Lucide-style line icons (24px, stroke 2, round caps) matching the product.
const { useState, useRef, useEffect } = React;

const ICON_PATHS = {
  home: <><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z" /><polyline points="9 21 9 12 15 12 15 21" /></>,
  groups: <><circle cx="9" cy="7" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M1 20c0-3.3 3.1-6 8-6s8 2.7 8 6" /><path d="M16 14c2.7.6 5 2.6 5 5.5" /></>,
  moments: <><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></>,
  like: <><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z" /><path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" /></>,
  comment: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
  send: <><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></>,
  plus: <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>,
  key: <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />,
  logout: <><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></>,
};

function Icon({ name, size = 24, filled = false, sw, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'} stroke="currentColor"
      strokeWidth={filled ? 0 : (sw || 2)} strokeLinecap="round" strokeLinejoin="round" style={style}>
      {ICON_PATHS[name]}
    </svg>
  );
}

function initialsOf(name) {
  return (name || '?').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

// Initials avatar. variant: 'gradient' (people) | 'flat' (comments) | 'solid' (navbar)
function Avatar({ name, size = 40, variant = 'gradient' }) {
  const bg = variant === 'gradient' ? 'linear-gradient(135deg, #1877f2, #0d47a1)'
    : variant === 'solid' ? 'var(--fb-blue)' : 'var(--fb-surface2)';
  const color = variant === 'flat' ? 'var(--fb-text)' : '#fff';
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', background: bg, color,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 700, fontSize: size * 0.38, flexShrink: 0, userSelect: 'none',
    }}>{initialsOf(name)}</div>
  );
}

// Tinted pill badge with a leading emoji. tone: blue|green|amber
function Badge({ emoji, children, tone = 'blue' }) {
  const tones = {
    blue: ['rgba(24,119,242,.12)', '#1877f2', 'rgba(24,119,242,.25)'],
    green: ['rgba(66,183,42,.12)', '#42b72a', 'rgba(66,183,42,.25)'],
    amber: ['rgba(255,201,71,.12)', '#ffc947', 'rgba(255,201,71,.25)'],
  }[tone];
  return (
    <span style={{
      fontSize: '0.75rem', padding: '2px 8px', borderRadius: '12px',
      background: tones[0], color: tones[1], border: `1px solid ${tones[2]}`, whiteSpace: 'nowrap',
    }}>{emoji} {children}</span>
  );
}

function Logo({ size = 40, wordmark = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <div style={{
        width: size, height: size, background: 'var(--fb-blue)', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: size * 0.5, fontWeight: 900, color: '#fff', fontStyle: 'italic', letterSpacing: '-1px',
      }}>i</div>
      {wordmark && <span style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--fb-blue)' }}>introsocial</span>}
    </div>
  );
}

function Spinner({ size = 16 }) {
  return (
    <svg style={{ animation: 'spin 0.8s linear infinite', width: size, height: size }} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
      <path fill="currentColor" d="M4 12a8 8 0 018-8v8z" opacity="0.75" />
    </svg>
  );
}

Object.assign(window, { Icon, Avatar, Badge, Logo, Spinner, initialsOf });
