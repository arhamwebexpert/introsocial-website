// IntroSocial UI kit — EventsView (event cards with summarize toggle).
function EventCard({ event }) {
  const [summary, setSummary] = useState(false);
  const fmt = (ts) => new Date(ts).toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  return (
    <div className="fb-card" style={{ padding: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>{event.title}</h3>
        {event.visibility === 'private'
          ? <Badge emoji="🔒" tone="amber">Private</Badge>
          : <Badge emoji="🌐" tone="green">Public</Badge>}
        {event.fromThread && <Badge emoji="💬" tone="blue">From thread</Badge>}
      </div>
      {event.description && <p style={{ margin: 0, fontSize: '0.9375rem', color: 'var(--fb-text-secondary)' }}>{event.description}</p>}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.875rem', color: 'var(--fb-text-muted)', margin: '0.875rem 0' }}>
        <span>🕐 {fmt(event.dateTime)}</span>
        <span>📍 {event.location}</span>
        <span>👤 {event.createdBy.name}</span>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', borderTop: '1px solid var(--fb-border)', paddingTop: '0.75rem' }}>
        <button className="fb-action-btn" style={{ flex: 1, fontSize: '0.875rem', padding: '0.5rem 1rem', background: 'var(--fb-blue)', color: '#fff', borderRadius: '8px' }}>💬 Join Chat</button>
        <button onClick={() => setSummary(s => !s)} className="fb-action-btn" style={{ flex: 1, fontSize: '0.875rem', padding: '0.5rem 1rem', background: summary ? 'var(--fb-surface3)' : 'var(--fb-surface2)', color: 'var(--fb-text-secondary)', border: '1px solid var(--fb-border)', borderRadius: '8px' }}>📝 {summary ? 'Hide Summary' : 'Summarize'}</button>
        <button className="fb-action-btn hover-red" style={{ flexGrow: 0, fontSize: '0.875rem', padding: '0.5rem 1rem', background: 'var(--fb-surface2)', color: 'var(--fb-red)', border: '1px solid var(--fb-border)', borderRadius: '8px' }}>🔚 End Event</button>
      </div>

      {summary && (
        <div style={{ marginTop: '0.75rem', padding: '0.875rem', background: 'var(--fb-surface2)', borderRadius: '8px', borderLeft: '3px solid var(--fb-blue)' }}>
          <p className="eyebrow" style={{ margin: '0 0 0.5rem', fontSize: '0.75rem' }}>Summary</p>
          <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.5 }}>This event discussion includes planning details, RSVP confirmations, and location updates. Members are coordinating logistics and excited to attend.</p>
        </div>
      )}
    </div>
  );
}

function EventsView({ group, onBack }) {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '1rem 0.75rem' }}>
      <div className="fb-card" style={{ marginBottom: '0.75rem', padding: '0.875rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div>
          <span onClick={onBack} className="hover-blue" style={{ color: 'var(--fb-text-secondary)', fontSize: '0.875rem', fontWeight: 500, cursor: 'pointer' }}>← Back to Chat</span>
          <h1 style={{ margin: '0.25rem 0 0.125rem' }}>Events</h1>
          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--fb-text-muted)' }}>From threads or created directly</p>
        </div>
        <button className="btn-primary" style={{ padding: '0.5rem 1rem' }}>+ New Event</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {SEED.events.map(e => <EventCard key={e._id} event={e} />)}
      </div>
    </div>
  );
}

Object.assign(window, { EventCard, EventsView });
