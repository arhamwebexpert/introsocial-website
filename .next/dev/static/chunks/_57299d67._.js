(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Primitives.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "Badge",
    ()=>Badge,
    "Spinner",
    ()=>Spinner,
    "initialsOf",
    ()=>initialsOf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function initialsOf(name) {
    return (name || '?').split(' ').map((w)=>w[0]).join('').toUpperCase().slice(0, 2);
}
function Avatar({ name, size = 40, variant = 'gradient' }) {
    const bg = variant === 'gradient' ? 'var(--grad-avatar)' : variant === 'chat' ? 'var(--grad-bubble)' : variant === 'solid' ? 'var(--fb-blue)' : 'var(--fb-surface2)'; // flat
    const color = variant === 'flat' ? 'var(--fb-text)' : '#fff';
    const shadow = variant === 'chat' ? '0 2px 4px rgba(0,0,0,0.3)' : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: size,
            height: size,
            borderRadius: '50%',
            background: bg,
            color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: `${Math.round(size * 0.38)}px`,
            flexShrink: 0,
            userSelect: 'none',
            boxShadow: shadow
        },
        children: initialsOf(name)
    }, void 0, false, {
        fileName: "[project]/components/Primitives.jsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
_c = Avatar;
// Tinted pill badge.  tone: 'blue' | 'green' | 'amber'
const TONES = {
    blue: [
        'rgba(24,119,242,.12)',
        '#1877f2',
        'rgba(24,119,242,.25)'
    ],
    green: [
        'rgba(66,183,42,.12)',
        '#42b72a',
        'rgba(66,183,42,.25)'
    ],
    amber: [
        'rgba(255,201,71,.12)',
        '#ffc947',
        'rgba(255,201,71,.25)'
    ]
};
function Badge({ emoji, children, tone = 'blue' }) {
    const [bg, color, border] = TONES[tone] || TONES.blue;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            fontSize: '0.75rem',
            padding: '2px 8px',
            borderRadius: '12px',
            background: bg,
            color,
            border: `1px solid ${border}`,
            whiteSpace: 'nowrap'
        },
        children: [
            emoji && `${emoji} `,
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/Primitives.jsx",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}
_c1 = Badge;
function Spinner({ size = 16 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        style: {
            animation: 'spin 0.8s linear infinite',
            width: size,
            height: size,
            flexShrink: 0
        },
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "4",
                opacity: "0.25"
            }, void 0, false, {
                fileName: "[project]/components/Primitives.jsx",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8v8z",
                opacity: "0.75"
            }, void 0, false, {
                fileName: "[project]/components/Primitives.jsx",
                lineNumber: 73,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Primitives.jsx",
        lineNumber: 67,
        columnNumber: 9
    }, this);
}
_c2 = Spinner;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Avatar");
__turbopack_context__.k.register(_c1, "Badge");
__turbopack_context__.k.register(_c2, "Spinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/login/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useAuth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Primitives$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Primitives.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// app/login/page.jsx
'use client';
;
;
;
;
;
function LoginPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { login } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        email: '',
        password: ''
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleChange = (e)=>setForm((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
            }));
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || 'Login failed');
                return;
            }
            login(data.user);
            router.push('/dashboard');
        } catch  {
            setError('Network error. Please try again.');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
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
                'linear-gradient(160deg, #0a0e14 0%, #10131a 55%, #18191a 100%)'
            ].join(',')
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                style: {
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    opacity: 0.5,
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1.5px, transparent 1.6px)',
                    backgroundSize: '26px 26px',
                    maskImage: 'radial-gradient(120% 100% at 50% 40%, #000 30%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(120% 100% at 50% 40%, #000 30%, transparent 80%)'
                }
            }, void 0, false, {
                fileName: "[project]/app/login/page.jsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                style: {
                    position: 'absolute',
                    top: '-70px',
                    left: '-60px',
                    width: '220px',
                    height: '220px',
                    borderRadius: '64px 64px 64px 14px',
                    background: 'linear-gradient(135deg, rgba(24,119,242,0.22), rgba(13,93,191,0.05))',
                    filter: 'blur(2px)',
                    transform: 'rotate(-8deg)'
                }
            }, void 0, false, {
                fileName: "[project]/app/login/page.jsx",
                lineNumber: 67,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                style: {
                    position: 'absolute',
                    bottom: '-90px',
                    right: '-50px',
                    width: '280px',
                    height: '280px',
                    borderRadius: '90px 90px 90px 20px',
                    background: 'linear-gradient(135deg, rgba(24,119,242,0.16), rgba(13,71,161,0.04))',
                    transform: 'rotate(12deg)'
                }
            }, void 0, false, {
                fileName: "[project]/app/login/page.jsx",
                lineNumber: 75,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%',
                    maxWidth: '400px',
                    position: 'relative',
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: '1.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginBottom: '1rem'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '60px',
                                        height: '60px',
                                        background: 'var(--fb-blue)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.875rem',
                                        fontWeight: 900,
                                        color: '#fff',
                                        fontStyle: 'italic'
                                    },
                                    children: "i"
                                }, void 0, false, {
                                    fileName: "[project]/app/login/page.jsx",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.jsx",
                                lineNumber: 86,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    margin: 0,
                                    fontSize: 'var(--display-size)',
                                    fontWeight: 'var(--display-weight)',
                                    color: 'var(--fb-text)'
                                },
                                children: "Introsocial"
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.jsx",
                                lineNumber: 94,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: '0.375rem 0 0',
                                    color: 'var(--fb-text-secondary)',
                                    fontSize: 'var(--body-size)'
                                },
                                children: "Connect with the people who matter most."
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.jsx",
                                lineNumber: 97,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/login/page.jsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fb-card",
                        style: {
                            padding: '1.5rem'
                        },
                        children: [
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'rgba(240,40,73,0.12)',
                                    border: '1px solid rgba(240,40,73,0.3)',
                                    color: '#ff6b81',
                                    borderRadius: 'var(--fb-radius)',
                                    padding: '0.75rem 1rem',
                                    marginBottom: '1rem',
                                    fontSize: '0.9rem'
                                },
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.jsx",
                                lineNumber: 105,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: '0.875rem'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "fb-input",
                                            name: "email",
                                            type: "email",
                                            placeholder: "Email address",
                                            value: form.email,
                                            onChange: handleChange,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/login/page.jsx",
                                            lineNumber: 120,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/login/page.jsx",
                                        lineNumber: 119,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: '1rem'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "fb-input",
                                            name: "password",
                                            type: "password",
                                            placeholder: "Password",
                                            value: form.password,
                                            onChange: handleChange,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/login/page.jsx",
                                            lineNumber: 124,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/login/page.jsx",
                                        lineNumber: 123,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        className: "btn-primary",
                                        style: {
                                            fontSize: '1.0625rem',
                                            padding: '0.75rem'
                                        },
                                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '0.5rem'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Primitives$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/login/page.jsx",
                                                    lineNumber: 132,
                                                    columnNumber: 37
                                                }, this),
                                                " Signing in…"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/login/page.jsx",
                                            lineNumber: 131,
                                            columnNumber: 35
                                        }, this) : 'Log In'
                                    }, void 0, false, {
                                        fileName: "[project]/app/login/page.jsx",
                                        lineNumber: 128,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/login/page.jsx",
                                lineNumber: 118,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    margin: '1.25rem 0',
                                    gap: '0.75rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            height: '1px',
                                            background: 'var(--fb-border)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/login/page.jsx",
                                        lineNumber: 139,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--fb-text-muted)',
                                            fontSize: '0.875rem',
                                            fontWeight: 600
                                        },
                                        children: "or"
                                    }, void 0, false, {
                                        fileName: "[project]/app/login/page.jsx",
                                        lineNumber: 140,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            height: '1px',
                                            background: 'var(--fb-border)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/login/page.jsx",
                                        lineNumber: 141,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/login/page.jsx",
                                lineNumber: 138,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/signup",
                                style: {
                                    display: 'block',
                                    textDecoration: 'none'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "hover-green",
                                    style: {
                                        width: '100%',
                                        background: 'var(--fb-green)',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: 'var(--fb-radius)',
                                        padding: '0.7rem',
                                        fontSize: '1rem',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        fontFamily: 'inherit'
                                    },
                                    children: "Create new account"
                                }, void 0, false, {
                                    fileName: "[project]/app/login/page.jsx",
                                    lineNumber: 145,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/login/page.jsx",
                                lineNumber: 144,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/login/page.jsx",
                        lineNumber: 103,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/login/page.jsx",
                lineNumber: 83,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/login/page.jsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}
_s(LoginPage, "4rAX5vIn2brhxwSTyQjjZKDAPz8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_57299d67._.js.map