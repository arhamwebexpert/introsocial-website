// app/groups/[id]/events/page.jsx
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/useAuth';
import CreateEventModal from '@/components/CreateEventModal';
import { Badge } from '@/components/Primitives';

export default function EventsPage() {
    const { user, loading } = useAuth();
    const { id: groupId } = useParams();
    const router = useRouter();

    const [events, setEvents] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [showCreate, setShowCreate] = useState(false);
    const [summaries, setSummaries] = useState({});
    const [rsvping, setRsvping] = useState({});

    useEffect(() => {
        if (!loading && !user) router.push('/login');
    }, [user, loading]);

    useEffect(() => {
        if (!user || !groupId) return;
        fetchEvents();
    }, [user, groupId]);

    const fetchEvents = async () => {
        try {
            const res = await fetch(`/api/events?groupId=${groupId}`);
            const data = await res.json();
            setEvents(data.events || []);
        } catch { }
        finally { setFetching(false); }
    };

    const formatDateTime = (dt) => {
        if (!dt) return null;
        return new Date(dt).toLocaleString('en-US', {
            weekday: 'short', month: 'short', day: 'numeric',
            hour: '2-digit', minute: '2-digit',
        });
    };

    const getUserRsvp = (event) => {
        const rsvp = event.rsvps?.find(
            (r) => r.userId?._id === user?.userId || r.userId?.toString() === user?.userId
        );
        return rsvp?.status || null;
    };

    const handleRsvp = async (eventId, status) => {
        setRsvping((prev) => ({ ...prev, [eventId]: true }));
        try {
            const res = await fetch(`/api/events/${eventId}/rsvp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status }),
            });
            const data = await res.json();
            if (res.ok) {
                setEvents((prev) =>
                    prev.map((e) => e._id === eventId ? { ...e, rsvps: data.rsvps } : e)
                );
            }
        } catch {}
        finally { setRsvping((prev) => ({ ...prev, [eventId]: false })); }
    };

    const handleJoinChat = (eventId) => {
        router.push(`/groups/${groupId}/events/${eventId}/chat`);
    };

    const handleSummarize = async (eventId) => {
        if (summaries[eventId]) {
            setSummaries((prev) => ({ ...prev, [eventId]: null }));
            return;
        }
        
        // Mock summary - in production, this would call an API
        const mockSummary = "This event discussion includes planning details, RSVP confirmations, and location updates. Members are excited and coordinating logistics.";
        setSummaries((prev) => ({ ...prev, [eventId]: mockSummary }));
    };

    const handleEndEvent = async (eventId) => {
        if (!confirm('Are you sure you want to end this event?')) return;
        
        try {
            // In production, this would call an API to delete/end the event
            setEvents((prev) => prev.filter((e) => e._id !== eventId));
            alert('Event ended successfully');
        } catch (error) {
            alert('Failed to end event');
        }
    };

    if (loading || fetching) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
                <div style={{
                    width: '36px', height: '36px',
                    border: '3px solid var(--fb-blue)',
                    borderTopColor: 'transparent',
                    borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite',
                }} />
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>

            {/* Header */}
            <div className="fb-card events-header" style={{ marginBottom: '0.75rem', padding: '0.875rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                    <Link href={`/groups/${groupId}/chat`} className="hover-blue" style={{ color: 'var(--fb-text-secondary)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '500' }}>
                        ← Back to Chat
                    </Link>
                    <h1 style={{ margin: '0.25rem 0 0.125rem', fontSize: '1.25rem', fontWeight: '800', color: 'var(--fb-text)' }}>Events</h1>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--fb-text-muted)' }}>From threads or created directly</p>
                </div>
                <div className="events-header-actions" style={{ display: 'flex', gap: '0.5rem' }}>
                    <Link
                        href="/moments"
                        className="btn-secondary"
                        style={{ 
                            width: 'auto', 
                            padding: '0.5rem 1rem', 
                            fontSize: '0.9375rem',
                            textDecoration: 'none',
                            display: 'inline-block',
                        }}
                    >
                        📸 Moments
                    </Link>
                    <button
                        onClick={() => setShowCreate(true)}
                        className="btn-primary"
                        style={{ width: 'auto', padding: '0.5rem 1rem', fontSize: '0.9375rem' }}
                    >
                        + New Event
                    </button>
                </div>
            </div>

            {/* Events list */}
            {events.length === 0 ? (
                <div className="fb-card" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                    <div style={{ fontSize: '3.5rem', marginBottom: '0.75rem' }}>📅</div>
                    <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.125rem', fontWeight: '700', color: 'var(--fb-text)' }}>No events yet</h3>
                    <p style={{ margin: '0 0 1.5rem', color: 'var(--fb-text-secondary)' }}>Promote a chat thread to an event, or create one directly</p>
                    <button onClick={() => setShowCreate(true)} className="btn-primary" style={{ width: 'auto', padding: '0.625rem 1.5rem' }}>
                        Create Event
                    </button>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {events.map((event) => {
                        const myRsvp = getUserRsvp(event);
                        const isGoing = myRsvp === 'going';
                        return (
                            <div key={event._id} className="fb-card" style={{ padding: '1rem' }}>
                                {/* Top row */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                                            <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: '700', color: 'var(--fb-text)' }}>{event.title}</h3>
                                            <Badge
                                                emoji={event.visibility === 'private' ? '🔒' : '🌐'}
                                                tone={event.visibility === 'private' ? 'amber' : 'green'}
                                            >
                                                {event.visibility === 'private' ? 'Private' : 'Public'}
                                            </Badge>
                                            {event.sourceMessageId && (
                                                <Badge emoji="💬" tone="blue">From thread</Badge>
                                            )}
                                        </div>
                                        {event.description && (
                                            <p style={{ margin: 0, fontSize: '0.9375rem', color: 'var(--fb-text-secondary)' }}>{event.description}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Meta info */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.875rem', color: 'var(--fb-text-muted)', marginBottom: '0.875rem' }}>
                                    {event.dateTime && <span>🕐 {formatDateTime(event.dateTime)}</span>}
                                    {event.location && <span>📍 {event.location}</span>}
                                    <span>👤 {event.createdBy?.name}</span>
                                </div>

                                {/* RSVP buttons */}
                                <div className="rsvp-row" style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    {[
                                        { status: 'going', label: '✅ Going', activeColor: '#25d366' },
                                        { status: 'maybe', label: '🤔 Maybe', activeColor: '#f7b731' },
                                        { status: 'not_going', label: '❌ Can\'t go', activeColor: 'var(--fb-red)' },
                                    ].map(({ status, label, activeColor }) => {
                                        const isActive = myRsvp === status;
                                        return (
                                            <button
                                                key={status}
                                                onClick={() => handleRsvp(event._id, status)}
                                                disabled={rsvping[event._id]}
                                                style={{
                                                    flex: 1,
                                                    fontSize: '0.8125rem',
                                                    fontWeight: isActive ? '700' : '500',
                                                    padding: '0.4rem 0.5rem',
                                                    background: isActive ? activeColor : 'var(--fb-surface2)',
                                                    color: isActive ? '#fff' : 'var(--fb-text-secondary)',
                                                    border: `1px solid ${isActive ? activeColor : 'var(--fb-border)'}`,
                                                    borderRadius: '8px',
                                                    cursor: rsvping[event._id] ? 'not-allowed' : 'pointer',
                                                    opacity: rsvping[event._id] ? 0.6 : 1,
                                                    transition: 'all 0.15s',
                                                }}
                                            >
                                                {label}
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Join Chat & Summarize buttons */}
                                <div style={{ display: 'flex', gap: '0.5rem', borderTop: '1px solid var(--fb-border)', paddingTop: '0.75rem' }}>
                                    <button
                                        onClick={() => isGoing && handleJoinChat(event._id)}
                                        disabled={!isGoing}
                                        title={isGoing ? 'Open event chat' : 'RSVP as Going to join the chat'}
                                        className="fb-action-btn hover-btn-blue"
                                        style={{
                                            flex: 1,
                                            fontSize: '0.875rem',
                                            fontWeight: '600',
                                            padding: '0.5rem 1rem',
                                            background: isGoing ? 'var(--fb-blue)' : 'var(--fb-surface2)',
                                            color: isGoing ? '#fff' : 'var(--fb-text-muted)',
                                            border: isGoing ? 'none' : '1px solid var(--fb-border)',
                                            borderRadius: '8px',
                                            cursor: isGoing ? 'pointer' : 'not-allowed',
                                            opacity: isGoing ? 1 : 0.6,
                                        }}
                                    >
                                        💬 {isGoing ? 'Join Chat' : 'RSVP to Chat'}
                                    </button>
                                    <button
                                        onClick={() => handleSummarize(event._id)}
                                        className="fb-action-btn hover-surface2"
                                        style={{
                                            flex: 1,
                                            fontSize: '0.875rem',
                                            fontWeight: '600',
                                            padding: '0.5rem 1rem',
                                            background: summaries[event._id] ? 'var(--fb-surface3)' : 'var(--fb-surface2)',
                                            color: 'var(--fb-text-secondary)',
                                            border: '1px solid var(--fb-border)',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        📝 {summaries[event._id] ? 'Hide Summary' : 'Summarize'}
                                    </button>
                                    <button
                                        onClick={() => handleEndEvent(event._id)}
                                        className="fb-action-btn hover-red"
                                        style={{
                                            fontSize: '0.875rem',
                                            fontWeight: '600',
                                            padding: '0.5rem 1rem',
                                            background: 'var(--fb-surface2)',
                                            color: 'var(--fb-red)',
                                            border: '1px solid var(--fb-border)',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        🔚 End Event
                                    </button>
                                </div>

                                {/* Summary display */}
                                {summaries[event._id] && (
                                    <div style={{
                                        marginTop: '0.75rem',
                                        padding: '0.875rem',
                                        background: 'var(--fb-surface2)',
                                        borderRadius: '8px',
                                        borderLeft: '3px solid var(--fb-blue)',
                                    }}>
                                        <p className="eyebrow" style={{ margin: '0 0 0.5rem' }}>Summary</p>
                                        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--fb-text)', lineHeight: '1.5' }}>
                                            {summaries[event._id]}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Create event modal */}
            {showCreate && (
                <CreateEventModal
                    groupId={groupId}
                    onClose={() => setShowCreate(false)}
                    onCreated={(event) => {
                        setEvents((prev) => [event, ...prev]);
                        setShowCreate(false);
                    }}
                />
            )}
        </div>
    );
}