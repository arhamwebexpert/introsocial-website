// IntroSocial UI kit — top Navbar (fixed 56px shell).
function Navbar({ active, onNavigate, me }) {
  const tabs = [
    { id: 'dashboard', icon: 'home' },
    { id: 'create', icon: 'groups' },
    { id: 'newsfeed', icon: 'moments' },
  ];
  return (
    <nav style={{
      position: 'sticky', top: 0, height: '56px', background: 'var(--fb-surface)',
      boxShadow: '0 2px 4px rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '0 1rem', zIndex: 100,
    }}>
      <div onClick={() => onNavigate('dashboard')} style={{ cursor: 'pointer' }}>
        <Logo size={40} wordmark={true} />
      </div>

      <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.25rem' }}>
        {tabs.map(t => {
          const on = active === t.id || (t.id === 'create' && active === 'group');
          return (
            <div key={t.id} className={`nav-tab${on ? ' nav-tab-active' : ''}`} onClick={() => onNavigate(t.id)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', width: '112px', height: '44px',
                borderRadius: 'var(--fb-radius)', cursor: 'pointer',
                color: on ? 'var(--fb-blue)' : 'var(--fb-text-secondary)',
                borderBottom: on ? '3px solid var(--fb-blue)' : '3px solid transparent',
              }}>
              <Icon name={t.icon} filled={on} />
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Avatar name={me.name} size={36} variant="solid" />
        <button onClick={() => onNavigate('logout')} title="Sign out" className="hover-red"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px',
            borderRadius: '50%', background: 'var(--fb-surface2)', border: 'none', cursor: 'pointer', color: 'var(--fb-text-secondary)',
          }}>
          <Icon name="logout" size={18} />
        </button>
      </div>
    </nav>
  );
}

window.Navbar = Navbar;
