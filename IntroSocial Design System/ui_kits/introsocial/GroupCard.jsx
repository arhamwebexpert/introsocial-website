// IntroSocial UI kit — GroupCard (cover + info, hover-lift).
function GroupCard({ group, onOpen }) {
  const initials = initialsOf(group.name);
  return (
    <div onClick={() => onOpen(group)} className="fb-card hover-lift" style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
      {/* Cover */}
      <div style={{ height: '140px', background: group.cover, position: 'relative' }}>
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '3rem', fontWeight: 800, color: 'rgba(255,255,255,0.25)', letterSpacing: '-2px' }}>{initials}</span>
        </div>
        <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', borderRadius: '20px', padding: '3px 10px', fontSize: '0.75rem', fontWeight: 600, color: '#fff', backdropFilter: 'blur(4px)' }}>
          👥 {group.members.length}
        </div>
      </div>
      {/* Info */}
      <div style={{ padding: '0.875rem 1rem 1rem' }}>
        <h3 style={{ margin: '0 0 0.25rem', fontSize: '1rem', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{group.name}</h3>
        <p style={{ margin: '0 0 0.75rem', fontSize: '0.8125rem', color: 'var(--fb-text-secondary)', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{group.description}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--fb-border)', paddingTop: '0.625rem' }}>
          <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--fb-text-muted)', background: 'var(--fb-bg)', padding: '2px 8px', borderRadius: '4px' }}>{group.inviteCode}</span>
          <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--fb-blue)' }}>View →</span>
        </div>
      </div>
    </div>
  );
}

window.GroupCard = GroupCard;
