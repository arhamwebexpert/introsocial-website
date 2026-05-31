// app/login/page.jsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/useAuth';
import { Spinner } from '@/components/Primitives';

export default function LoginPage() {
    const router = useRouter();
    const { login } = useAuth();

    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok) { setError(data.error || 'Login failed'); return; }
            login(data.user);
            router.push('/dashboard');
        } catch {
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            position: 'relative',
            overflow: 'hidden',
            background: [
                'radial-gradient(120% 90% at 15% 8%, rgba(24,119,242,0.28) 0%, rgba(24,119,242,0) 42%)',
                'radial-gradient(110% 80% at 88% 90%, rgba(13,71,161,0.40) 0%, rgba(13,71,161,0) 46%)',
                'radial-gradient(90% 70% at 80% 12%, rgba(37,211,102,0.10) 0%, rgba(37,211,102,0) 40%)',
                'linear-gradient(160deg, #0a0e14 0%, #10131a 55%, #18191a 100%)',
            ].join(','),
        }}>
            {/* Atmospheric dot grid */}
            <div aria-hidden="true" style={{
                position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.5,
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1.5px, transparent 1.6px)',
                backgroundSize: '26px 26px',
                maskImage: 'radial-gradient(120% 100% at 50% 40%, #000 30%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(120% 100% at 50% 40%, #000 30%, transparent 80%)',
            }} />
            {/* Decorative top-left bubble */}
            <div aria-hidden="true" style={{
                position: 'absolute', top: '-70px', left: '-60px',
                width: '220px', height: '220px',
                borderRadius: '64px 64px 64px 14px',
                background: 'linear-gradient(135deg, rgba(24,119,242,0.22), rgba(13,93,191,0.05))',
                filter: 'blur(2px)', transform: 'rotate(-8deg)',
            }} />
            {/* Decorative bottom-right bubble */}
            <div aria-hidden="true" style={{
                position: 'absolute', bottom: '-90px', right: '-50px',
                width: '280px', height: '280px',
                borderRadius: '90px 90px 90px 20px',
                background: 'linear-gradient(135deg, rgba(24,119,242,0.16), rgba(13,71,161,0.04))',
                transform: 'rotate(12deg)',
            }} />

            <div style={{ width: '100%', maxWidth: '400px', position: 'relative', zIndex: 1 }}>
                {/* Logo + headline */}
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                        <div style={{
                            width: '60px', height: '60px',
                            background: 'var(--fb-blue)', borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.875rem', fontWeight: 900, color: '#fff', fontStyle: 'italic',
                        }}>i</div>
                    </div>
                    <h1 style={{ margin: 0, fontSize: 'var(--display-size)', fontWeight: 'var(--display-weight)', color: 'var(--fb-text)' }}>
                        Introsocial
                    </h1>
                    <p style={{ margin: '0.375rem 0 0', color: 'var(--fb-text-secondary)', fontSize: 'var(--body-size)' }}>
                        Connect with the people who matter most.
                    </p>
                </div>

                {/* Card */}
                <div className="fb-card" style={{ padding: '1.5rem' }}>
                    {error && (
                        <div style={{
                            background: 'rgba(240,40,73,0.12)',
                            border: '1px solid rgba(240,40,73,0.3)',
                            color: '#ff6b81',
                            borderRadius: 'var(--fb-radius)',
                            padding: '0.75rem 1rem',
                            marginBottom: '1rem',
                            fontSize: '0.9rem',
                        }}>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '0.875rem' }}>
                            <input className="fb-input" name="email" type="email" placeholder="Email address"
                                value={form.email} onChange={handleChange} required />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <input className="fb-input" name="password" type="password" placeholder="Password"
                                value={form.password} onChange={handleChange} required />
                        </div>

                        <button type="submit" disabled={loading} className="btn-primary"
                            style={{ fontSize: '1.0625rem', padding: '0.75rem' }}>
                            {loading
                                ? <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                    <Spinner size={16} /> Signing in…
                                  </span>
                                : 'Log In'}
                        </button>
                    </form>

                    <div style={{ display: 'flex', alignItems: 'center', margin: '1.25rem 0', gap: '0.75rem' }}>
                        <div style={{ flex: 1, height: '1px', background: 'var(--fb-border)' }} />
                        <span style={{ color: 'var(--fb-text-muted)', fontSize: '0.875rem', fontWeight: 600 }}>or</span>
                        <div style={{ flex: 1, height: '1px', background: 'var(--fb-border)' }} />
                    </div>

                    <Link href="/signup" style={{ display: 'block', textDecoration: 'none' }}>
                        <button className="hover-green" style={{
                            width: '100%',
                            background: 'var(--fb-green)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 'var(--fb-radius)',
                            padding: '0.7rem',
                            fontSize: '1rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            fontFamily: 'inherit',
                        }}>
                            Create new account
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
