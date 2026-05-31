'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ClientLayoutWrapper({ children }) {
    const pathname = usePathname();
    const isInGroup = pathname?.match(/^\/groups\/[^/]+$/) || pathname?.match(/^\/groups\/[^/]+\/(chat|events|moments)/);
    const isAuth = pathname === '/login' || pathname === '/signup';

    return (
        <>
            {!isInGroup && !isAuth && <Navbar />}
            <main
                style={{
                    paddingTop: isInGroup || isAuth ? '0' : '56px',
                    paddingBottom: '0',
                    minHeight: '100vh',
                    background: 'var(--fb-bg)',
                }}
            >
                <div
                    style={{
                        maxWidth: isInGroup ? '1300px' : isAuth ? '100%' : '680px',
                        margin: '0 auto',
                        padding: isInGroup || isAuth ? '0' : '1rem 0.75rem',
                        height: isInGroup ? '100vh' : 'auto',
                    }}
                    className={isInGroup || isAuth ? '' : 'fb-main-content'}
                >
                    {!isInGroup && !isAuth ? (
                        <div key={pathname} className="page-enter">
                            {children}
                        </div>
                    ) : children}
                </div>
            </main>
            {!isInGroup && !isAuth && <div className="mobile-bottom-spacer" />}
        </>
    );
}
