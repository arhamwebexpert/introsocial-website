'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/useAuth';
import { Avatar } from '@/components/Primitives';

export default function EventChatPage() {
    const { user, loading } = useAuth();
    const { id: groupId, eventId } = useParams();
    const router = useRouter();

    const [messages, setMessages] = useState([]);
    const [eventTitle, setEventTitle] = useState('Event Chat');
    const [text, setText] = useState('');
    const [sending, setSending] = useState(false);
    const [accessDenied, setAccessDenied] = useState(false);
    const [fetching, setFetching] = useState(true);
    const bottomRef = useRef(null);

    useEffect(() => {
        if (!loading && !user) router.push('/login');
    }, [user, loading]);

    useEffect(() => {
        if (!user || !eventId) return;
        fetchEventInfo();
        fetchMessages();
        const interval = setInterval(fetchMessages, 5000);
        return () => clearInterval(interval);
    }, [user, eventId]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const fetchEventInfo = async () => {
        try {
            const res = await fetch(`/api/events?groupId=${groupId}`);
            const data = await res.json();
            const event = (data.events || []).find((e) => e._id === eventId);
            if (event) setEventTitle(event.title);
        } catch {}
    };

    const fetchMessages = async () => {
        try {
            const res = await fetch(`/api/events/${eventId}/chat`);
            if (res.status === 403) {
                setAccessDenied(true);
                setFetching(false);
                return;
            }
            const data = await res.json();
            if (data.messages) setMessages(data.messages);
        } catch {}
        finally { setFetching(false); }
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        setSending(true);
        try {
            const res = await fetch(`/api/events/${eventId}/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: text.trim() }),
            });
            const data = await res.json();
            if (res.ok) {
                setMessages((prev) => [...prev, data.message]);
                setText('');
            }
        } catch {}
        finally { setSending(false); }
    };

    const formatTime = (dateStr) => {
        return new Date(dateStr).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    };

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    };

    const grouped = messages.reduce((acc, msg) => {
        const date = new Date(msg.createdAt).toDateString();
        if (!acc[date]) acc[date] = [];
        acc[date].push(msg);
        return acc;
    }, {});

    if (loading || fetching) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#0a0e14' }}>
                <div style={{ width: '36px', height: '36px', border: '3px solid #1877f2', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    if (accessDenied) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#0a0e14' }}>
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
                    <h2 style={{ color: '#e4e6eb', margin: '0 0 0.5rem' }}>Chat Locked</h2>
                    <p style={{ color: '#8a8d91', margin: '0 0 1.5rem' }}>Only attendees who RSVP'd as "Going" can access this event chat.</p>
                    <Link
                        href={`/groups/${groupId}/events`}
                        style={{ color: '#1877f2', textDecoration: 'none', fontWeight: '600' }}
                    >
                        ← Back to Events
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#0a0e14', overflow: 'hidden' }}>
            {/* Header */}
            <div style={{
                background: '#1c1e22',
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                flexShrink: 0,
                borderBottom: '1px solid #2a2f38',
                boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
            }}>
                <Link href={`/groups/${groupId}/events`} style={{
                    color: '#8a8d91',
                    textDecoration: 'none',
                    fontSize: '1.5rem',
                    lineHeight: 1,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.25rem',
                }}>
                    ←
                </Link>
                <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1877f2 0%, #0d5dbf 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', fontWeight: '700', color: '#fff', flexShrink: 0,
                }}>
                    📅
                </div>
                <div>
                    <h1 style={{ margin: 0, fontSize: '1.125rem', fontWeight: '600', color: '#e4e6eb' }}>{eventTitle}</h1>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: '#8a8d91' }}>Event chat · Attendees only</p>
                </div>
            </div>

            {/* Messages */}
            <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: '1rem',
                background: 'linear-gradient(to bottom, #0a0e14 0%, #0d1117 100%)',
            }}>
                {Object.entries(grouped).map(([date, msgs]) => (
                    <div key={date}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '1.5rem 0 1rem' }}>
                            <div style={{
                                background: '#1c1e22', padding: '0.375rem 0.875rem', borderRadius: '8px',
                                fontSize: '0.75rem', color: '#8a8d91', fontWeight: '500',
                            }}>
                                {formatDate(msgs[0].createdAt)}
                            </div>
                        </div>
                        {msgs.map((msg) => {
                            const isOwn = msg.userId?._id === user?.userId || msg.userId?.toString() === user?.userId;
                            return (
                                <div key={msg._id} style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '0.5rem',
                                    flexDirection: isOwn ? 'row-reverse' : 'row',
                                    marginBottom: '0.75rem',
                                    maxWidth: '85%',
                                    marginLeft: isOwn ? 'auto' : '0',
                                    marginRight: isOwn ? '0' : 'auto',
                                }}>
                                    {!isOwn && <Avatar name={msg.userId?.name} size={32} variant="chat" />}
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: isOwn ? 'flex-end' : 'flex-start' }}>
                                        {!isOwn && (
                                            <span style={{ fontSize: '0.8125rem', fontWeight: '600', color: '#1877f2', marginBottom: '0.25rem', marginLeft: '0.5rem' }}>
                                                {msg.userId?.name || 'Unknown'}
                                            </span>
                                        )}
                                        <div style={{
                                            background: isOwn ? 'linear-gradient(135deg, #1877f2 0%, #0d5dbf 100%)' : '#1c1e22',
                                            color: '#fff',
                                            padding: '0.625rem 0.875rem',
                                            borderRadius: isOwn ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                                            fontSize: '0.9375rem',
                                            lineHeight: '1.4',
                                            boxShadow: isOwn ? '0 2px 8px rgba(24,119,242,0.4)' : '0 2px 4px rgba(0,0,0,0.3)',
                                            wordBreak: 'break-word',
                                        }}>
                                            {msg.text}
                                            <div style={{ fontSize: '0.6875rem', color: isOwn ? 'rgba(255,255,255,0.7)' : '#8a8d91', marginTop: '0.25rem', textAlign: 'right' }}>
                                                {formatTime(msg.createdAt)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}

                {messages.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
                        <p style={{ fontSize: '4rem', marginBottom: '0.75rem', opacity: 0.3 }}>📅</p>
                        <p style={{ color: '#8a8d91', margin: 0, fontSize: '0.9375rem' }}>No messages yet. Start the event conversation!</p>
                    </div>
                )}

                <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div style={{
                background: '#1c1e22',
                padding: '0.875rem 1rem',
                flexShrink: 0,
                borderTop: '1px solid #2a2f38',
                boxShadow: '0 -2px 8px rgba(0,0,0,0.3)',
            }}>
                <form onSubmit={sendMessage} style={{ display: 'flex', gap: '0.625rem', alignItems: 'center' }}>
                    <input
                        type="text"
                        placeholder="Message event attendees..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        style={{
                            flex: 1,
                            borderRadius: '24px',
                            margin: 0,
                            padding: '0.75rem 1.125rem',
                            fontSize: '0.9375rem',
                            background: '#2a2f38',
                            border: '1px solid #3a3f48',
                            color: '#e4e6eb',
                            outline: 'none',
                        }}
                    />
                    <button
                        type="submit"
                        disabled={sending || !text.trim()}
                        style={{
                            width: '48px', height: '48px', padding: 0, borderRadius: '50%',
                            background: text.trim() ? 'linear-gradient(135deg, #1877f2 0%, #0d5dbf 100%)' : '#2a2f38',
                            color: '#fff', border: 'none',
                            cursor: text.trim() ? 'pointer' : 'not-allowed',
                            fontSize: '1.25rem',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            opacity: text.trim() ? 1 : 0.5,
                        }}
                    >
                        {sending ? '...' : '➤'}
                    </button>
                </form>
            </div>
        </div>
    );
}
