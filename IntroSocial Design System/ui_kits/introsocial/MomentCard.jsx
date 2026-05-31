// IntroSocial UI kit — MomentCard (Facebook-style post with live like + comments).
function timeAgo(ts) {
  const m = Math.floor((Date.now() - ts) / 60000);
  if (m < 1) return 'Just now';
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

function MomentCard({ moment, meId = 'me' }) {
  const [likes, setLikes] = useState(moment.likes);
  const [comments, setComments] = useState(moment.comments);
  const [showComments, setShowComments] = useState(false);
  const [text, setText] = useState('');
  const [bounce, setBounce] = useState(false);
  const liked = likes.includes(meId);

  const toggleLike = () => {
    if (liked) setLikes(l => l.filter(x => x !== meId));
    else { setLikes(l => [...l, meId]); setBounce(true); setTimeout(() => setBounce(false), 400); }
  };
  const addComment = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setComments(c => [...c, { userId: { name: 'Arham Khan' }, text: text.trim() }]);
    setText(''); setShowComments(true);
  };

  return (
    <div className="fb-card">
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.875rem 1rem 0.5rem' }}>
        <Avatar name={moment.userId.name} size={40} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ margin: 0, fontWeight: 600, fontSize: '0.9375rem' }}>{moment.userId.name}</p>
          <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--fb-text-muted)' }}>{timeAgo(moment.createdAt)}</p>
        </div>
      </div>

      {moment.caption && (
        <p style={{ margin: '0.25rem 0 0.5rem', padding: '0 1rem', fontSize: '0.9375rem', lineHeight: 1.5 }}>{moment.caption}</p>
      )}

      {moment.image && (
        <div style={{ marginTop: '0.5rem', height: '300px', background: moment.image }} />
      )}

      {/* Stats */}
      {(likes.length > 0 || comments.length > 0) && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 1rem', fontSize: '0.875rem', color: 'var(--fb-text-muted)' }}>
          {likes.length > 0 && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'var(--fb-blue)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.625rem' }}>👍</span>
              {likes.length}
            </span>
          )}
          {comments.length > 0 && (
            <button onClick={() => setShowComments(v => !v)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--fb-text-muted)', fontSize: '0.875rem', marginLeft: 'auto', fontFamily: 'inherit' }}>
              {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
            </button>
          )}
        </div>
      )}

      <div style={{ borderTop: '1px solid var(--fb-border)' }} />

      {/* Actions */}
      <div style={{ display: 'flex', padding: '0.25rem 0.5rem' }}>
        <button onClick={toggleLike} className={`fb-action-btn${liked ? ' liked' : ''}`}>
          <span className={bounce ? 'like-bounce' : ''}><Icon name="like" size={20} filled={liked} /></span>
          <span>{liked ? 'Liked' : 'Like'}</span>
        </button>
        <button onClick={() => setShowComments(v => !v)} className="fb-action-btn">
          <Icon name="comment" size={20} /><span>Comment</span>
        </button>
      </div>

      {/* Comments */}
      {showComments && comments.length > 0 && (
        <div style={{ borderTop: '1px solid var(--fb-border)', padding: '0.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {comments.map((c, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <Avatar name={c.userId.name} size={28} variant="flat" />
              <div style={{ background: 'var(--fb-surface2)', borderRadius: '0 12px 12px 12px', padding: '0.375rem 0.75rem', maxWidth: '85%' }}>
                <p style={{ margin: '0 0 2px', fontSize: '0.8125rem', fontWeight: 600 }}>{c.userId.name}</p>
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--fb-text-secondary)' }}>{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Comment input */}
      <div style={{ borderTop: comments.length > 0 && showComments ? 'none' : '1px solid var(--fb-border)', padding: '0.625rem 1rem', display: 'flex', gap: '0.5rem' }}>
        <form onSubmit={addComment} style={{ display: 'flex', flex: 1, gap: '0.5rem', alignItems: 'center' }}>
          <input value={text} onChange={e => setText(e.target.value)} placeholder="Write a comment..." className="comment-input"
            style={{ flex: 1, background: 'var(--fb-surface2)', border: '1px solid transparent', borderRadius: '20px', padding: '0.5rem 1rem', fontSize: '0.9375rem', color: 'var(--fb-text)', outline: 'none', fontFamily: 'inherit', transition: 'border-color .15s' }} />
          {text.trim() && (
            <button type="submit" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--fb-blue)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
              <Icon name="send" size={16} />
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

window.MomentCard = MomentCard;
window.timeAgo = timeAgo;
