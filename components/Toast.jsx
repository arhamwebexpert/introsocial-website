'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const ToastCtx = createContext(null);

const ICONS = { success: '✓', error: '✕', info: 'ℹ' };
const BORDER = { success: '#42b72a', error: '#f02849', info: '#1877f2' };

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const toast = useCallback((message, type = 'success') => {
        const id = Date.now() + Math.random();
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3200);
    }, []);

    return (
        <ToastCtx.Provider value={toast}>
            {children}
            <div style={{
                position: 'fixed',
                bottom: '1.5rem',
                right: '1.5rem',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                pointerEvents: 'none',
            }}>
                {toasts.map(t => (
                    <div key={t.id} style={{
                        background: 'var(--fb-surface)',
                        color: 'var(--fb-text)',
                        padding: '0.75rem 1.125rem',
                        borderRadius: '10px',
                        fontSize: '0.9375rem',
                        fontWeight: '500',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                        borderLeft: `3px solid ${BORDER[t.type] || BORDER.success}`,
                        animation: 'toastIn 0.25s ease-out',
                        minWidth: '200px',
                        maxWidth: '340px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.625rem',
                        fontFamily: 'inherit',
                    }}>
                        <span style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: BORDER[t.type] || BORDER.success,
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            color: '#fff',
                            flexShrink: 0,
                        }}>
                            {ICONS[t.type] || ICONS.success}
                        </span>
                        {t.message}
                    </div>
                ))}
            </div>
        </ToastCtx.Provider>
    );
}

export function useToast() {
    return useContext(ToastCtx);
}
