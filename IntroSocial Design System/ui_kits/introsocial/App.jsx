// IntroSocial UI kit — App: screen state machine tying every surface together.
const { useState: useS } = React;

function Dashboard({ onOpenGroup }) {
  const [code, setCode] = useState('');
  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '1rem 0.75rem' }} className="page-enter">
      {/* Quick actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <div className="hover-surface" style={{ background: 'var(--fb-surface)', borderRadius: '12px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', boxShadow: 'var(--fb-shadow)' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--fb-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}><Icon name="plus" size={18} sw={2.5} /></div>
          <div><p style={{ margin: 0, fontWeight: 700, fontSize: '0.9375rem' }}>New Group</p><p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--fb-text-muted)' }}>Create a space</p></div>
        </div>
        <div style={{ background: 'var(--fb-surface)', borderRadius: '12px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', boxShadow: 'var(--fb-shadow)' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--fb-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}><Icon name="key" size={18} /></div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ margin: '0 0 0.35rem', fontWeight: 700, fontSize: '0.9375rem' }}>Join Group</p>
            <form onSubmit={e => { e.preventDefault(); setCode(''); }} style={{ display: 'flex', gap: '0.4rem' }}>
              <input value={code} onChange={e => setCode(e.target.value.toUpperCase())} placeholder="Invite code" className="mono"
                style={{ flex: 1, background: 'var(--fb-bg)', border: '1px solid var(--fb-border)', borderRadius: '6px', padding: '0.3rem 0.6rem', color: 'var(--fb-text)', fontSize: '0.8125rem', outline: 'none', minWidth: 0 }} />
              <button type="submit" style={{ background: 'var(--fb-blue)', color: '#fff', border: 'none', borderRadius: '6px', padding: '0.3rem 0.6rem', fontSize: '0.8125rem', fontWeight: 600, cursor: 'pointer' }}>Join</button>
            </form>
          </div>
        </div>
      </div>

      <h2 className="eyebrow" style={{ margin: '0 0 0.75rem' }}>Your Groups ({SEED.groups.length})</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '0.75rem' }}>
        {SEED.groups.map(g => <GroupCard key={g._id} group={g} onOpen={onOpenGroup} />)}
      </div>
    </div>
  );
}

function NewsFeed() {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '1rem 0.75rem' }} className="page-enter">
      <div className="fb-card" style={{ marginBottom: '0.75rem', padding: '0.875rem 1rem' }}>
        <h1 style={{ margin: '0 0 0.25rem' }}>📰 News Feed</h1>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--fb-text-muted)' }}>See the latest moments from all your groups</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {SEED.moments.map(m => <MomentCard key={m._id} moment={m} />)}
      </div>
    </div>
  );
}

function App() {
  const [screen, setScreen] = useS('login');   // login | dashboard | newsfeed | group | events
  const [group, setGroup] = useS(null);
  const me = SEED.me;

  const nav = (id) => {
    if (id === 'logout') { setScreen('login'); return; }
    if (id === 'create') { setScreen('dashboard'); return; }
    setScreen(id);
  };

  if (screen === 'login') return <AuthCard onLogin={() => setScreen('dashboard')} />;

  // Full-viewport surfaces (no global navbar): chat room
  if (screen === 'group') {
    return (
      <div style={{ height: '100vh' }}>
        <ChatRoom group={group} me={me} onBack={() => setScreen('dashboard')} onOpenEvents={() => setScreen('events')} />
      </div>
    );
  }

  // Shell surfaces (navbar + scrolling content)
  const active = screen === 'events' ? 'dashboard' : screen;
  return (
    <div style={{ minHeight: '100vh', background: 'var(--fb-bg)' }}>
      <Navbar active={active} onNavigate={nav} me={me} />
      {screen === 'dashboard' && <Dashboard onOpenGroup={(g) => { setGroup(g); setScreen('group'); }} />}
      {screen === 'newsfeed' && <NewsFeed />}
      {screen === 'events' && <EventsView group={group} onBack={() => setScreen('group')} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
