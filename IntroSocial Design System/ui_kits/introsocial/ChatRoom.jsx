// IntroSocial UI kit — ChatRoom (WhatsApp-style group room with send + reply).
function ChatRoom({ group, me, onBack, onOpenEvents }) {
  const [messages, setMessages] = useState(SEED.messages);
  const [text, setText] = useState('');
  const [replyTo, setReplyTo] = useState(null);
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollTo?.(0, 99999); }, [messages]);

  const send = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setMessages(m => [...m, { _id: 'n' + Date.now(), userId: { name: 'me' }, text: text.trim(), createdAt: Date.now(), replyTo: replyTo ? { userId: replyTo.userId, text: replyTo.text } : undefined }]);
    setText(''); setReplyTo(null);
  };
  const fmt = (ts) => new Date(ts).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0a0e14' }}>
      {/* Header */}
      <div style={{ background: '#1c1e22', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0, borderBottom: '1px solid #2a2f38', boxShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span onClick={onBack} className="hover-blue" style={{ color: 'var(--fb-text-secondary)', fontSize: '1.5rem', lineHeight: 1, cursor: 'pointer', padding: '0.25rem' }}>←</span>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg,#1877f2 0%,#0d5dbf 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>💬</div>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600, color: '#e4e6eb' }}>{group.name}</h1>
            <p style={{ margin: 0, fontSize: '0.75rem', color: '#8a8d91' }}>Tap message for thread</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <span className="hover-chat-link" style={{ fontSize: '0.875rem', background: '#2a2f38', color: '#8a8d91', padding: '0.5rem 0.875rem', borderRadius: '20px', fontWeight: 600, border: '1px solid #3a3f48', cursor: 'pointer' }}>📸 Moments</span>
          <span onClick={onOpenEvents} className="hover-chat-link" style={{ fontSize: '0.875rem', background: '#2a2f38', color: '#8a8d91', padding: '0.5rem 0.875rem', borderRadius: '20px', fontWeight: 600, border: '1px solid #3a3f48', cursor: 'pointer' }}>📅 Events</span>
        </div>
      </div>

      {/* Messages */}
      <div ref={bottomRef} style={{ flex: 1, overflowY: 'auto', padding: '1rem', background: 'linear-gradient(to bottom,#0a0e14 0%,#0d1117 100%)', backgroundImage: 'radial-gradient(circle at 20% 50%,rgba(24,119,242,0.03) 0%,transparent 50%),radial-gradient(circle at 80% 80%,rgba(24,119,242,0.03) 0%,transparent 50%)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '0 0 1rem' }}>
          <div style={{ background: '#1c1e22', padding: '0.375rem 0.875rem', borderRadius: '8px', fontSize: '0.75rem', color: '#8a8d91', fontWeight: 500 }}>Today</div>
        </div>
        {messages.map(msg => {
          const own = msg.userId?.name === 'me';
          return (
            <div key={msg._id} className="chat-msg-group chat-msg-enter">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', flexDirection: own ? 'row-reverse' : 'row', marginBottom: '0.5rem', maxWidth: '85%', marginLeft: own ? 'auto' : 0 }}>
                {!own && <Avatar name={msg.userId.name} size={32} variant="gradient" />}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: own ? 'flex-end' : 'flex-start', minWidth: 0 }}>
                  {!own && <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#1877f2', marginBottom: '0.25rem', marginLeft: '0.5rem' }}>{msg.userId.name}</span>}
                  <div style={{ background: own ? 'linear-gradient(135deg,#1877f2 0%,#0d5dbf 100%)' : '#1c1e22', color: '#fff', padding: '0.375rem 0.375rem 0.625rem', borderRadius: own ? '16px 16px 4px 16px' : '16px 16px 16px 4px', fontSize: '0.9375rem', lineHeight: 1.4, boxShadow: own ? '0 2px 8px rgba(24,119,242,0.4)' : '0 2px 4px rgba(0,0,0,0.3)', minWidth: '120px' }}>
                    {msg.replyTo && (
                      <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '8px', padding: '0.5rem', marginBottom: '0.375rem', borderLeft: `4px solid ${own ? '#fff' : '#1877f2'}`, fontSize: '0.8125rem' }}>
                        <div style={{ fontWeight: 700, color: own ? '#fff' : '#1877f2', marginBottom: '0.125rem' }}>{msg.replyTo.userId?.name === 'me' ? 'You' : msg.replyTo.userId?.name}</div>
                        <div style={{ opacity: 0.8, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{msg.replyTo.text}</div>
                      </div>
                    )}
                    <div style={{ padding: '0 0.5rem', wordBreak: 'break-word' }}>{msg.text}</div>
                    <div style={{ fontSize: '0.6875rem', color: own ? 'rgba(255,255,255,0.7)' : '#8a8d91', marginTop: '0.25rem', textAlign: 'right', paddingRight: '0.5rem' }}>{fmt(msg.createdAt)}</div>
                  </div>
                  <div className="chat-actions" style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem', opacity: 0, transition: 'opacity .2s' }}>
                    <button onClick={() => setReplyTo(msg)} style={{ background: '#1c1e22', border: '1px solid #2a2f38', cursor: 'pointer', fontSize: '0.75rem', color: '#8a8d91', fontFamily: 'inherit', padding: '0.25rem 0.625rem', borderRadius: '12px', fontWeight: 500 }}>↪ Reply</button>
                    <button style={{ background: '#1c1e22', border: '1px solid #2a2f38', cursor: 'pointer', fontSize: '0.75rem', color: '#8a8d91', fontFamily: 'inherit', padding: '0.25rem 0.625rem', borderRadius: '12px', fontWeight: 500 }}>💬 {msg.replyCount > 0 ? `${msg.replyCount} ` : ''}Thread</button>
                    <button style={{ background: '#1c1e22', border: '1px solid #2a2f38', cursor: 'pointer', fontSize: '0.75rem', color: '#8a8d91', fontFamily: 'inherit', padding: '0.25rem 0.625rem', borderRadius: '12px', fontWeight: 500 }}>📅 Event</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Composer */}
      <div style={{ background: '#1c1e22', padding: '0.875rem 1rem', flexShrink: 0, borderTop: '1px solid #2a2f38', boxShadow: '0 -2px 8px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column' }}>
        {replyTo && (
          <div style={{ background: '#2a2f38', borderLeft: '4px solid #1877f2', borderRadius: '4px 8px 8px 4px', padding: '0.5rem 0.75rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ minWidth: 0, overflow: 'hidden' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1877f2', marginBottom: '0.25rem' }}>Replying to {replyTo.userId?.name === 'me' ? 'yourself' : replyTo.userId?.name}</div>
              <div style={{ fontSize: '0.8125rem', color: '#8a8d91', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{replyTo.text}</div>
            </div>
            <button onClick={() => setReplyTo(null)} style={{ background: 'transparent', border: 'none', color: '#8a8d91', cursor: 'pointer', padding: '0.25rem' }}>✕</button>
          </div>
        )}
        <form onSubmit={send} style={{ display: 'flex', gap: '0.625rem', alignItems: 'center' }}>
          <input value={text} onChange={e => setText(e.target.value)} placeholder="Type a message..." className="chat-text-input"
            style={{ flex: 1, borderRadius: '24px', padding: '0.75rem 1.125rem', fontSize: '0.9375rem', background: '#2a2f38', border: '1px solid #3a3f48', color: '#e4e6eb', outline: 'none', transition: 'background .2s,border-color .2s' }} />
          <button type="submit" disabled={!text.trim()} className="hover-scale"
            style={{ width: '48px', height: '48px', borderRadius: '50%', background: text.trim() ? 'linear-gradient(135deg,#1877f2 0%,#0d5dbf 100%)' : '#2a2f38', color: '#fff', border: 'none', cursor: text.trim() ? 'pointer' : 'not-allowed', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: text.trim() ? '0 2px 8px rgba(24,119,242,0.4)' : 'none', opacity: text.trim() ? 1 : 0.5 }}>
            <span style={{ fontSize: '1.25rem' }}>➤</span>
          </button>
        </form>
      </div>
    </div>
  );
}

window.ChatRoom = ChatRoom;
