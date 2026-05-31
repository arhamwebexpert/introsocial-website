'use client';

// IntroSocial shared primitives — Avatar, Badge, Spinner.
// Matches the IntroSocial Design System spec exactly.

export function initialsOf(name) {
    return (name || '?').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

// Avatar  variant: 'gradient' (people/posts) | 'chat' (chat room) | 'flat' (comments) | 'solid' (navbar)
export function Avatar({ name, size = 40, variant = 'gradient' }) {
    const bg =
        variant === 'gradient' ? 'var(--grad-avatar)' :
        variant === 'chat'     ? 'var(--grad-bubble)' :
        variant === 'solid'    ? 'var(--fb-blue)'     :
        'var(--fb-surface2)'; // flat
    const color = variant === 'flat' ? 'var(--fb-text)' : '#fff';
    const shadow = variant === 'chat' ? '0 2px 4px rgba(0,0,0,0.3)' : undefined;
    return (
        <div style={{
            width: size,
            height: size,
            borderRadius: '50%',
            background: bg,
            color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: `${Math.round(size * 0.38)}px`,
            flexShrink: 0,
            userSelect: 'none',
            boxShadow: shadow,
        }}>
            {initialsOf(name)}
        </div>
    );
}

// Tinted pill badge.  tone: 'blue' | 'green' | 'amber'
const TONES = {
    blue:  ['rgba(24,119,242,.12)',  '#1877f2',  'rgba(24,119,242,.25)'],
    green: ['rgba(66,183,42,.12)',   '#42b72a',  'rgba(66,183,42,.25)'],
    amber: ['rgba(255,201,71,.12)',  '#ffc947',  'rgba(255,201,71,.25)'],
};

export function Badge({ emoji, children, tone = 'blue' }) {
    const [bg, color, border] = TONES[tone] || TONES.blue;
    return (
        <span style={{
            fontSize: '0.75rem',
            padding: '2px 8px',
            borderRadius: '12px',
            background: bg,
            color,
            border: `1px solid ${border}`,
            whiteSpace: 'nowrap',
        }}>
            {emoji && `${emoji} `}{children}
        </span>
    );
}

// SVG arc spinner — design system standard (matches login page, buttons)
export function Spinner({ size = 16 }) {
    return (
        <svg
            style={{ animation: 'spin 0.8s linear infinite', width: size, height: size, flexShrink: 0 }}
            viewBox="0 0 24 24"
            fill="none"
        >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
            <path fill="currentColor" d="M4 12a8 8 0 018-8v8z" opacity="0.75" />
        </svg>
    );
}
