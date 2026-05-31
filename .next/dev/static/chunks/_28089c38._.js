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
"[project]/components/MomentCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MomentCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Primitives$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Primitives.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// components/MomentCard.jsx
'use client';
;
;
const ThumbsUp = ({ filled })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: filled ? 'currentColor' : 'none',
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z"
            }, void 0, false, {
                fileName: "[project]/components/MomentCard.jsx",
                lineNumber: 9,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"
            }, void 0, false, {
                fileName: "[project]/components/MomentCard.jsx",
                lineNumber: 10,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/MomentCard.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = ThumbsUp;
const CommentBubble = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
        }, void 0, false, {
            fileName: "[project]/components/MomentCard.jsx",
            lineNumber: 16,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/MomentCard.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = CommentBubble;
const SendIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "22",
                y1: "2",
                x2: "11",
                y2: "13"
            }, void 0, false, {
                fileName: "[project]/components/MomentCard.jsx",
                lineNumber: 22,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "22 2 15 22 11 13 2 9 22 2"
            }, void 0, false, {
                fileName: "[project]/components/MomentCard.jsx",
                lineNumber: 23,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/MomentCard.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c2 = SendIcon;
function timeAgo(dateStr) {
    const now = Date.now();
    const then = new Date(dateStr).getTime();
    const diffMs = now - then;
    const diffMins = Math.floor(diffMs / 60000);
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHrs = Math.floor(diffMins / 60);
    if (diffHrs < 24) return `${diffHrs}h ago`;
    const diffDays = Math.floor(diffHrs / 24);
    if (diffDays < 7) return `${diffDays}d ago`;
    return new Date(dateStr).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    });
}
function MomentCard({ moment, currentUserId, onLikeToggle, onCommentAdded }) {
    _s();
    const [commentText, setCommentText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [submittingComment, setSubmittingComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [likePending, setLikePending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showComments, setShowComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [likeAnimating, setLikeAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isLiked = moment.likes?.some((id)=>id === currentUserId || id?._id === currentUserId);
    const likeCount = moment.likes?.length || 0;
    const commentCount = moment.comments?.length || 0;
    const handleLike = async ()=>{
        if (likePending) return;
        setLikePending(true);
        if (!isLiked) {
            setLikeAnimating(true);
            setTimeout(()=>setLikeAnimating(false), 400);
        }
        try {
            const res = await fetch(`/api/moments/${moment._id}/like`, {
                method: 'POST'
            });
            const data = await res.json();
            if (res.ok) onLikeToggle(moment._id, data.likes);
        } catch  {} finally{
            setLikePending(false);
        }
    };
    const handleComment = async (e)=>{
        e.preventDefault();
        if (!commentText.trim()) return;
        setSubmittingComment(true);
        try {
            const res = await fetch(`/api/moments/${moment._id}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text: commentText.trim()
                })
            });
            const data = await res.json();
            if (res.ok) {
                onCommentAdded(moment._id, data.comment);
                setCommentText('');
                setShowComments(true);
            }
        } catch  {} finally{
            setSubmittingComment(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fb-card",
        style: {
            marginBottom: '0.75rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.875rem 1rem 0.5rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Primitives$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                        name: moment.userId?.name,
                        size: 40,
                        variant: "gradient"
                    }, void 0, false, {
                        fileName: "[project]/components/MomentCard.jsx",
                        lineNumber: 96,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    fontWeight: '600',
                                    fontSize: '0.9375rem',
                                    color: 'var(--fb-text)'
                                },
                                children: moment.userId?.name || 'Unknown'
                            }, void 0, false, {
                                fileName: "[project]/components/MomentCard.jsx",
                                lineNumber: 98,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    fontSize: '0.75rem',
                                    color: 'var(--fb-text-muted)'
                                },
                                children: timeAgo(moment.createdAt)
                            }, void 0, false, {
                                fileName: "[project]/components/MomentCard.jsx",
                                lineNumber: 101,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MomentCard.jsx",
                        lineNumber: 97,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MomentCard.jsx",
                lineNumber: 90,
                columnNumber: 13
            }, this),
            moment.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    margin: '0.25rem 0 0.5rem',
                    padding: '0 1rem',
                    fontSize: '0.9375rem',
                    color: 'var(--fb-text)',
                    lineHeight: '1.5'
                },
                children: moment.caption
            }, void 0, false, {
                fileName: "[project]/components/MomentCard.jsx",
                lineNumber: 109,
                columnNumber: 17
            }, this),
            moment.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: '0.5rem',
                    background: 'var(--fb-bg)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: moment.imageUrl,
                    alt: moment.caption || 'Moment',
                    style: {
                        width: '100%',
                        maxHeight: '500px',
                        objectFit: 'cover',
                        display: 'block'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/MomentCard.jsx",
                    lineNumber: 123,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/MomentCard.jsx",
                lineNumber: 122,
                columnNumber: 17
            }, this),
            (likeCount > 0 || commentCount > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem',
                    color: 'var(--fb-text-muted)'
                },
                children: [
                    likeCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: '18px',
                                    height: '18px',
                                    borderRadius: '50%',
                                    background: 'var(--fb-blue)',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.625rem'
                                },
                                children: "👍"
                            }, void 0, false, {
                                fileName: "[project]/components/MomentCard.jsx",
                                lineNumber: 148,
                                columnNumber: 29
                            }, this),
                            likeCount
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MomentCard.jsx",
                        lineNumber: 147,
                        columnNumber: 25
                    }, this),
                    commentCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowComments((v)=>!v),
                        style: {
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--fb-text-muted)',
                            fontSize: '0.875rem',
                            marginLeft: 'auto'
                        },
                        children: [
                            commentCount,
                            " ",
                            commentCount === 1 ? 'comment' : 'comments'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MomentCard.jsx",
                        lineNumber: 162,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MomentCard.jsx",
                lineNumber: 138,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderTop: '1px solid var(--fb-border)'
                }
            }, void 0, false, {
                fileName: "[project]/components/MomentCard.jsx",
                lineNumber: 179,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    padding: '0.25rem 0.5rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleLike,
                        disabled: likePending,
                        className: `fb-action-btn${isLiked ? ' liked' : ''}`,
                        style: {
                            color: isLiked ? 'var(--fb-blue)' : undefined
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: likeAnimating ? 'like-bounce' : '',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThumbsUp, {
                                    filled: isLiked
                                }, void 0, false, {
                                    fileName: "[project]/components/MomentCard.jsx",
                                    lineNumber: 193,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/MomentCard.jsx",
                                lineNumber: 192,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isLiked ? 'Liked' : 'Like'
                            }, void 0, false, {
                                fileName: "[project]/components/MomentCard.jsx",
                                lineNumber: 195,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MomentCard.jsx",
                        lineNumber: 186,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setShowComments((v)=>!v);
                        },
                        className: "fb-action-btn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentBubble, {}, void 0, false, {
                                fileName: "[project]/components/MomentCard.jsx",
                                lineNumber: 202,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Comment"
                            }, void 0, false, {
                                fileName: "[project]/components/MomentCard.jsx",
                                lineNumber: 203,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MomentCard.jsx",
                        lineNumber: 198,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MomentCard.jsx",
                lineNumber: 182,
                columnNumber: 13
            }, this),
            showComments && commentCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderTop: '1px solid var(--fb-border)',
                    padding: '0.5rem 1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.625rem'
                },
                children: moment.comments.map((c, i)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '0.5rem',
                            alignItems: 'flex-start'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Primitives$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                name: c.userId?.name,
                                size: 28,
                                variant: "flat"
                            }, void 0, false, {
                                fileName: "[project]/components/MomentCard.jsx",
                                lineNumber: 219,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'var(--fb-surface2)',
                                    borderRadius: '0 12px 12px 12px',
                                    padding: '0.375rem 0.75rem',
                                    maxWidth: '85%'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            margin: '0 0 2px',
                                            fontSize: '0.8125rem',
                                            fontWeight: '600',
                                            color: 'var(--fb-text)'
                                        },
                                        children: c.userId?.name || 'User'
                                    }, void 0, false, {
                                        fileName: "[project]/components/MomentCard.jsx",
                                        lineNumber: 226,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            margin: 0,
                                            fontSize: '0.875rem',
                                            color: 'var(--fb-text-secondary)'
                                        },
                                        children: c.text
                                    }, void 0, false, {
                                        fileName: "[project]/components/MomentCard.jsx",
                                        lineNumber: 229,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MomentCard.jsx",
                                lineNumber: 220,
                                columnNumber: 33
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/components/MomentCard.jsx",
                        lineNumber: 218,
                        columnNumber: 29
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/MomentCard.jsx",
                lineNumber: 209,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderTop: commentCount > 0 && showComments ? 'none' : '1px solid var(--fb-border)',
                    padding: '0.625rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleComment,
                    style: {
                        display: 'flex',
                        flex: 1,
                        gap: '0.5rem',
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Write a comment...",
                            value: commentText,
                            onChange: (e)=>setCommentText(e.target.value),
                            className: "comment-input",
                            style: {
                                flex: 1,
                                background: 'var(--fb-surface2)',
                                border: '1px solid transparent',
                                borderRadius: '20px',
                                padding: '0.5rem 1rem',
                                fontSize: '0.9375rem',
                                color: 'var(--fb-text)',
                                outline: 'none',
                                transition: 'border-color 0.15s',
                                fontFamily: 'inherit'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/MomentCard.jsx",
                            lineNumber: 248,
                            columnNumber: 21
                        }, this),
                        commentText.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: submittingComment,
                            style: {
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: 'var(--fb-blue)',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                flexShrink: 0,
                                transition: 'background 0.15s'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SendIcon, {}, void 0, false, {
                                fileName: "[project]/components/MomentCard.jsx",
                                lineNumber: 286,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/MomentCard.jsx",
                            lineNumber: 268,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/MomentCard.jsx",
                    lineNumber: 247,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/MomentCard.jsx",
                lineNumber: 240,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MomentCard.jsx",
        lineNumber: 88,
        columnNumber: 9
    }, this);
}
_s(MomentCard, "PmdknRmtO4bOzn1YUtCtL2Ao5g8=");
_c3 = MomentCard;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ThumbsUp");
__turbopack_context__.k.register(_c1, "CommentBubble");
__turbopack_context__.k.register(_c2, "SendIcon");
__turbopack_context__.k.register(_c3, "MomentCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/groups/[id]/moments/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GroupMomentsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useAuth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MomentCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MomentCard.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// app/groups/[id]/moments/page.jsx
'use client';
;
;
;
;
;
const BackIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "19",
                y1: "12",
                x2: "5",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/app/groups/[id]/moments/page.jsx",
                lineNumber: 12,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "12 19 5 12 12 5"
            }, void 0, false, {
                fileName: "[project]/app/groups/[id]/moments/page.jsx",
                lineNumber: 13,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/groups/[id]/moments/page.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = BackIcon;
const CameraIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"
            }, void 0, false, {
                fileName: "[project]/app/groups/[id]/moments/page.jsx",
                lineNumber: 19,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "13",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/app/groups/[id]/moments/page.jsx",
                lineNumber: 20,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/groups/[id]/moments/page.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = CameraIcon;
function GroupMomentsPage({ params }) {
    _s();
    const { id: groupId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [moments, setMoments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [fetching, setFetching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupMomentsPage.useEffect": ()=>{
            if (!loading && !user) router.push('/login');
        }
    }["GroupMomentsPage.useEffect"], [
        user,
        loading,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupMomentsPage.useEffect": ()=>{
            if (!user || !groupId) return;
            fetchMoments();
        }
    }["GroupMomentsPage.useEffect"], [
        user,
        groupId
    ]);
    const fetchMoments = async ()=>{
        try {
            const res = await fetch(`/api/moments?groupId=${groupId}`);
            const data = await res.json();
            setMoments(data.moments || []);
        } catch (error) {
            console.error('Failed to fetch moments:', error);
        } finally{
            setFetching(false);
        }
    };
    const handleLikeToggle = (momentId, updatedLikes)=>{
        setMoments((prev)=>prev.map((m)=>m._id === momentId ? {
                    ...m,
                    likes: updatedLikes
                } : m));
    };
    const handleCommentAdded = (momentId, newComment)=>{
        setMoments((prev)=>prev.map((m)=>m._id === momentId ? {
                    ...m,
                    comments: [
                        ...m.comments || [],
                        newComment
                    ]
                } : m));
    };
    if (loading || fetching) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '40px',
                            height: '40px',
                            border: '3px solid var(--fb-blue)',
                            borderTopColor: 'transparent',
                            borderRadius: '50%',
                            animation: 'spin 0.8s linear infinite',
                            margin: '0 auto 1rem'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/groups/[id]/moments/page.jsx",
                        lineNumber: 67,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: 'var(--fb-text-secondary)',
                            margin: 0
                        },
                        children: "Loading group moments…"
                    }, void 0, false, {
                        fileName: "[project]/app/groups/[id]/moments/page.jsx",
                        lineNumber: 75,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `@keyframes spin { to { transform: rotate(360deg); } }`
                    }, void 0, false, {
                        fileName: "[project]/app/groups/[id]/moments/page.jsx",
                        lineNumber: 76,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/groups/[id]/moments/page.jsx",
                lineNumber: 66,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/groups/[id]/moments/page.jsx",
            lineNumber: 65,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            maxWidth: '700px',
            margin: '0 auto',
            padding: '1rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/groups/${groupId}/chat`,
                                className: "hover-surface",
                                style: {
                                    color: 'var(--fb-text)',
                                    textDecoration: 'none',
                                    background: 'var(--fb-surface2)',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackIcon, {}, void 0, false, {
                                    fileName: "[project]/app/groups/[id]/moments/page.jsx",
                                    lineNumber: 98,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/groups/[id]/moments/page.jsx",
                                lineNumber: 87,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    margin: 0,
                                    fontSize: '1.25rem',
                                    fontWeight: '800',
                                    color: 'var(--fb-text)'
                                },
                                children: "📸 Group Moments"
                            }, void 0, false, {
                                fileName: "[project]/app/groups/[id]/moments/page.jsx",
                                lineNumber: 100,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/groups/[id]/moments/page.jsx",
                        lineNumber: 86,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/moments/create?groupId=${groupId}`,
                        className: "hover-btn-blue",
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'var(--fb-blue)',
                            color: '#fff',
                            padding: '0.55rem 1rem',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '0.9375rem',
                            whiteSpace: 'nowrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraIcon, {}, void 0, false, {
                                fileName: "[project]/app/groups/[id]/moments/page.jsx",
                                lineNumber: 122,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Create"
                            }, void 0, false, {
                                fileName: "[project]/app/groups/[id]/moments/page.jsx",
                                lineNumber: 123,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/groups/[id]/moments/page.jsx",
                        lineNumber: 105,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/groups/[id]/moments/page.jsx",
                lineNumber: 85,
                columnNumber: 13
            }, this),
            moments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fb-card",
                style: {
                    textAlign: 'center',
                    padding: '4rem 1rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '4rem',
                            marginBottom: '0.75rem'
                        },
                        children: "📸"
                    }, void 0, false, {
                        fileName: "[project]/app/groups/[id]/moments/page.jsx",
                        lineNumber: 130,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            margin: '0 0 0.5rem',
                            fontSize: '1.125rem',
                            fontWeight: '700',
                            color: 'var(--fb-text)'
                        },
                        children: "No moments yet"
                    }, void 0, false, {
                        fileName: "[project]/app/groups/[id]/moments/page.jsx",
                        lineNumber: 131,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: '0 0 1.5rem',
                            color: 'var(--fb-text-secondary)'
                        },
                        children: "Start sharing your memories with your group"
                    }, void 0, false, {
                        fileName: "[project]/app/groups/[id]/moments/page.jsx",
                        lineNumber: 134,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/moments/create?groupId=${groupId}`,
                        style: {
                            display: 'inline-block',
                            background: 'var(--fb-blue)',
                            color: '#fff',
                            fontWeight: '600',
                            padding: '0.625rem 1.5rem',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontSize: '0.9375rem'
                        },
                        children: "Create Your First Moment"
                    }, void 0, false, {
                        fileName: "[project]/app/groups/[id]/moments/page.jsx",
                        lineNumber: 137,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/groups/[id]/moments/page.jsx",
                lineNumber: 129,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                },
                children: moments.map((moment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MomentCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        moment: moment,
                        currentUserId: user?.userId,
                        onLikeToggle: handleLikeToggle,
                        onCommentAdded: handleCommentAdded
                    }, moment._id, false, {
                        fileName: "[project]/app/groups/[id]/moments/page.jsx",
                        lineNumber: 156,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/groups/[id]/moments/page.jsx",
                lineNumber: 154,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/groups/[id]/moments/page.jsx",
        lineNumber: 83,
        columnNumber: 9
    }, this);
}
_s(GroupMomentsPage, "PfzwTdJBEtDsVOOIAcacG0ewRs4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c2 = GroupMomentsPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "BackIcon");
__turbopack_context__.k.register(_c1, "CameraIcon");
__turbopack_context__.k.register(_c2, "GroupMomentsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_28089c38._.js.map