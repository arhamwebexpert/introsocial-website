// IntroSocial UI kit — Login / auth card.
function AuthCard({ onLogin }) {
  const [form, setForm] = useState({ email: 'arham@introsocial.app', password: 'password' });
  const [loading, setLoading] = useState(false);
  const set = (k) => (e) => setForm(p => ({ ...p, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin(); }, 650);
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem',
      position: 'relative', overflow: 'hidden',
      background: [
        'radial-gradient(120% 90% at 15% 8%, rgba(24,119,242,0.28) 0%, rgba(24,119,242,0) 42%)',
        'radial-gradient(110% 80% at 88% 90%, rgba(13,71,161,0.40) 0%, rgba(13,71,161,0) 46%)',
        'radial-gradient(90% 70% at 80% 12%, rgba(37,211,102,0.10) 0%, rgba(37,211,102,0) 40%)',
        'linear-gradient(160deg, #0a0e14 0%, #10131a 55%, #18191a 100%)',
      ].join(','),
    }}>
      {/* atmospheric bubble field — the product's chat-bubble motif, oversized + faint */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.5,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1.5px, transparent 1.6px)',
        backgroundSize: '26px 26px',
        maskImage: 'radial-gradient(120% 100% at 50% 40%, #000 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(120% 100% at 50% 40%, #000 30%, transparent 80%)',
      }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '-70px', left: '-60px', width: '220px', height: '220px', borderRadius: '64px 64px 64px 14px', background: 'linear-gradient(135deg, rgba(24,119,242,0.22), rgba(13,93,191,0.05))', filter: 'blur(2px)', transform: 'rotate(-8deg)' }} />
      <div aria-hidden="true" style={{ position: 'absolute', bottom: '-90px', right: '-50px', width: '280px', height: '280px', borderRadius: '90px 90px 90px 20px', background: 'linear-gradient(135deg, rgba(24,119,242,0.16), rgba(13,71,161,0.04))', transform: 'rotate(12deg)' }} />
      <div style={{ width: '100%', maxWidth: '400px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <Logo size={60} />
          </div>
          <h1 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 800 }}>Introsocial</h1>
          <p style={{ margin: '0.375rem 0 0', color: 'var(--fb-text-secondary)', fontSize: '0.9375rem' }}>
            Connect with the people who matter most.
          </p>
        </div>

        <div className="fb-card" style={{ padding: '1.5rem' }}>
          <form onSubmit={submit}>
            <div style={{ marginBottom: '0.875rem' }}>
              <input className="fb-input" type="email" placeholder="Email address" value={form.email} onChange={set('email')} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <input className="fb-input" type="password" placeholder="Password" value={form.password} onChange={set('password')} />
            </div>
            <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', fontSize: '1.0625rem', padding: '0.75rem' }}>
              {loading
                ? <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}><Spinner /> Signing in…</span>
                : 'Log In'}
            </button>
          </form>

          <div style={{ display: 'flex', alignItems: 'center', margin: '1.25rem 0', gap: '0.75rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--fb-border)' }} />
            <span style={{ color: 'var(--fb-text-muted)', fontSize: '0.875rem', fontWeight: 600 }}>or</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--fb-border)' }} />
          </div>

          <button onClick={onLogin} style={{
            width: '100%', background: 'var(--fb-green)', color: '#fff', border: 'none', borderRadius: '8px',
            padding: '0.7rem', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', transition: 'background .15s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--fb-green-hover)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--fb-green)'}>
            Create new account
          </button>
        </div>
      </div>
    </div>
  );
}

window.AuthCard = AuthCard;
