module.exports = [
"[project]/components/CreateEventModal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateEventModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// components/CreateEventModal.jsx
'use client';
;
;
function CreateEventModal({ groupId, onClose, onCreated }) {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        description: '',
        location: '',
        dateTime: '',
        visibility: 'public'
    });
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleChange = (e)=>setForm((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
            }));
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!form.title.trim()) {
            setError('Title is required');
            return;
        }
        setSubmitting(true);
        try {
            const res = await fetch('/api/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...form,
                    groupId
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || 'Failed to create event');
                return;
            }
            onCreated(data.event);
        } catch  {
            setError('Network error');
        } finally{
            setSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1100,
            padding: '1rem'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fb-card",
            style: {
                width: '100%',
                maxWidth: '440px',
                background: 'var(--fb-surface)'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '1.25rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '1.25rem',
                            paddingBottom: '1rem',
                            borderBottom: '1px solid var(--fb-border)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    margin: 0,
                                    fontSize: '1.125rem',
                                    fontWeight: '700',
                                    color: 'var(--fb-text)'
                                },
                                children: "📅 Create Event"
                            }, void 0, false, {
                                fileName: "[project]/components/CreateEventModal.jsx",
                                lineNumber: 48,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                style: {
                                    background: 'var(--fb-surface2)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '32px',
                                    height: '32px',
                                    cursor: 'pointer',
                                    color: 'var(--fb-text-secondary)',
                                    fontSize: '1.25rem',
                                    lineHeight: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'background 0.15s'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.background = 'var(--fb-surface3)',
                                onMouseLeave: (e)=>e.currentTarget.style.background = 'var(--fb-surface2)',
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/components/CreateEventModal.jsx",
                                lineNumber: 49,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CreateEventModal.jsx",
                        lineNumber: 47,
                        columnNumber: 21
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'rgba(240,40,73,0.12)',
                            border: '1px solid rgba(240,40,73,0.3)',
                            color: 'var(--fb-red)',
                            borderRadius: '8px',
                            padding: '0.5rem 0.875rem',
                            marginBottom: '1rem',
                            fontSize: '0.875rem'
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/components/CreateEventModal.jsx",
                        lineNumber: 66,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '0.875rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'block',
                                            fontSize: '0.8125rem',
                                            fontWeight: '600',
                                            color: 'var(--fb-text-secondary)',
                                            marginBottom: '0.375rem'
                                        },
                                        children: "Title *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CreateEventModal.jsx",
                                        lineNumber: 77,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "title",
                                        type: "text",
                                        placeholder: "Event name",
                                        value: form.title,
                                        onChange: handleChange,
                                        required: true,
                                        className: "fb-input"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CreateEventModal.jsx",
                                        lineNumber: 78,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CreateEventModal.jsx",
                                lineNumber: 76,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '0.875rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'block',
                                            fontSize: '0.8125rem',
                                            fontWeight: '600',
                                            color: 'var(--fb-text-secondary)',
                                            marginBottom: '0.375rem'
                                        },
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CreateEventModal.jsx",
                                        lineNumber: 84,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        name: "description",
                                        placeholder: "What's happening?",
                                        rows: 2,
                                        value: form.description,
                                        onChange: handleChange,
                                        className: "fb-input",
                                        style: {
                                            resize: 'none',
                                            height: 'auto'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/CreateEventModal.jsx",
                                        lineNumber: 85,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CreateEventModal.jsx",
                                lineNumber: 83,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '0.75rem',
                                    marginBottom: '0.875rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    fontSize: '0.8125rem',
                                                    fontWeight: '600',
                                                    color: 'var(--fb-text-secondary)',
                                                    marginBottom: '0.375rem'
                                                },
                                                children: "Date & Time"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CreateEventModal.jsx",
                                                lineNumber: 93,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "dateTime",
                                                type: "datetime-local",
                                                value: form.dateTime,
                                                onChange: handleChange,
                                                className: "fb-input"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CreateEventModal.jsx",
                                                lineNumber: 94,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CreateEventModal.jsx",
                                        lineNumber: 92,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    fontSize: '0.8125rem',
                                                    fontWeight: '600',
                                                    color: 'var(--fb-text-secondary)',
                                                    marginBottom: '0.375rem'
                                                },
                                                children: "Location"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CreateEventModal.jsx",
                                                lineNumber: 99,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "location",
                                                type: "text",
                                                placeholder: "Where?",
                                                value: form.location,
                                                onChange: handleChange,
                                                className: "fb-input"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CreateEventModal.jsx",
                                                lineNumber: 100,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CreateEventModal.jsx",
                                        lineNumber: 98,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CreateEventModal.jsx",
                                lineNumber: 91,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '1.25rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'block',
                                            fontSize: '0.8125rem',
                                            fontWeight: '600',
                                            color: 'var(--fb-text-secondary)',
                                            marginBottom: '0.375rem'
                                        },
                                        children: "Visibility"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CreateEventModal.jsx",
                                        lineNumber: 107,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "visibility",
                                        value: form.visibility,
                                        onChange: handleChange,
                                        className: "fb-input",
                                        style: {
                                            cursor: 'pointer'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "public",
                                                children: "🌐 Public — all group members"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CreateEventModal.jsx",
                                                lineNumber: 110,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "private",
                                                children: "🔒 Private — invite only"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CreateEventModal.jsx",
                                                lineNumber: 111,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CreateEventModal.jsx",
                                        lineNumber: 108,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CreateEventModal.jsx",
                                lineNumber: 106,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '0.625rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onClose,
                                        className: "btn-secondary",
                                        style: {
                                            flex: 1
                                        },
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CreateEventModal.jsx",
                                        lineNumber: 116,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: submitting,
                                        className: "btn-primary",
                                        style: {
                                            flex: 1
                                        },
                                        children: submitting ? 'Creating…' : 'Create Event'
                                    }, void 0, false, {
                                        fileName: "[project]/components/CreateEventModal.jsx",
                                        lineNumber: 119,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CreateEventModal.jsx",
                                lineNumber: 115,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CreateEventModal.jsx",
                        lineNumber: 75,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CreateEventModal.jsx",
                lineNumber: 45,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/CreateEventModal.jsx",
            lineNumber: 44,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CreateEventModal.jsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
}),
"[project]/components/Primitives.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function initialsOf(name) {
    return (name || '?').split(' ').map((w)=>w[0]).join('').toUpperCase().slice(0, 2);
}
function Avatar({ name, size = 40, variant = 'gradient' }) {
    const bg = variant === 'gradient' ? 'var(--grad-avatar)' : variant === 'chat' ? 'var(--grad-bubble)' : variant === 'solid' ? 'var(--fb-blue)' : 'var(--fb-surface2)'; // flat
    const color = variant === 'flat' ? 'var(--fb-text)' : '#fff';
    const shadow = variant === 'chat' ? '0 2px 4px rgba(0,0,0,0.3)' : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
function Spinner({ size = 16 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        style: {
            animation: 'spin 0.8s linear infinite',
            width: size,
            height: size,
            flexShrink: 0
        },
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
}),
"[project]/app/groups/[id]/events/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useAuth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CreateEventModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CreateEventModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Primitives$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Primitives.jsx [app-ssr] (ecmascript)");
// app/groups/[id]/events/page.jsx
'use client';
;
;
;
;
;
;
;
function EventsPage() {
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { id: groupId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [fetching, setFetching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showCreate, setShowCreate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [summaries, setSummaries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [rsvping, setRsvping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!loading && !user) router.push('/login');
    }, [
        user,
        loading
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!user || !groupId) return;
        fetchEvents();
    }, [
        user,
        groupId
    ]);
    const fetchEvents = async ()=>{
        try {
            const res = await fetch(`/api/events?groupId=${groupId}`);
            const data = await res.json();
            setEvents(data.events || []);
        } catch  {} finally{
            setFetching(false);
        }
    };
    const formatDateTime = (dt)=>{
        if (!dt) return null;
        return new Date(dt).toLocaleString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    const getUserRsvp = (event)=>{
        const rsvp = event.rsvps?.find((r)=>r.userId?._id === user?.userId || r.userId?.toString() === user?.userId);
        return rsvp?.status || null;
    };
    const handleRsvp = async (eventId, status)=>{
        setRsvping((prev)=>({
                ...prev,
                [eventId]: true
            }));
        try {
            const res = await fetch(`/api/events/${eventId}/rsvp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status
                })
            });
            const data = await res.json();
            if (res.ok) {
                setEvents((prev)=>prev.map((e)=>e._id === eventId ? {
                            ...e,
                            rsvps: data.rsvps
                        } : e));
            }
        } catch  {} finally{
            setRsvping((prev)=>({
                    ...prev,
                    [eventId]: false
                }));
        }
    };
    const handleJoinChat = (eventId)=>{
        router.push(`/groups/${groupId}/events/${eventId}/chat`);
    };
    const handleSummarize = async (eventId)=>{
        if (summaries[eventId]) {
            setSummaries((prev)=>({
                    ...prev,
                    [eventId]: null
                }));
            return;
        }
        // Mock summary - in production, this would call an API
        const mockSummary = "This event discussion includes planning details, RSVP confirmations, and location updates. Members are excited and coordinating logistics.";
        setSummaries((prev)=>({
                ...prev,
                [eventId]: mockSummary
            }));
    };
    const handleEndEvent = async (eventId)=>{
        if (!confirm('Are you sure you want to end this event?')) return;
        try {
            // In production, this would call an API to delete/end the event
            setEvents((prev)=>prev.filter((e)=>e._id !== eventId));
            alert('Event ended successfully');
        } catch (error) {
            alert('Failed to end event');
        }
    };
    if (loading || fetching) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '36px',
                        height: '36px',
                        border: '3px solid var(--fb-blue)',
                        borderTopColor: 'transparent',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite'
                    }
                }, void 0, false, {
                    fileName: "[project]/app/groups/[id]/events/page.jsx",
                    lineNumber: 103,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `@keyframes spin { to { transform: rotate(360deg); } }`
                }, void 0, false, {
                    fileName: "[project]/app/groups/[id]/events/page.jsx",
                    lineNumber: 110,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/groups/[id]/events/page.jsx",
            lineNumber: 102,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            maxWidth: '700px',
            margin: '0 auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fb-card",
                style: {
                    marginBottom: '0.75rem',
                    padding: '0.875rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/groups/${groupId}/chat`,
                                className: "hover-blue",
                                style: {
                                    color: 'var(--fb-text-secondary)',
                                    textDecoration: 'none',
                                    fontSize: '0.875rem',
                                    fontWeight: '500'
                                },
                                children: "← Back to Chat"
                            }, void 0, false, {
                                fileName: "[project]/app/groups/[id]/events/page.jsx",
                                lineNumber: 121,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    margin: '0.25rem 0 0.125rem',
                                    fontSize: '1.25rem',
                                    fontWeight: '800',
                                    color: 'var(--fb-text)'
                                },
                                children: "Events"
                            }, void 0, false, {
                                fileName: "[project]/app/groups/[id]/events/page.jsx",
                                lineNumber: 124,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    fontSize: '0.875rem',
                                    color: 'var(--fb-text-muted)'
                                },
                                children: "From threads or created directly"
                            }, void 0, false, {
                                fileName: "[project]/app/groups/[id]/events/page.jsx",
                                lineNumber: 125,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/groups/[id]/events/page.jsx",
                        lineNumber: 120,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '0.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/moments",
                                className: "btn-secondary",
                                style: {
                                    width: 'auto',
                                    padding: '0.5rem 1rem',
                                    fontSize: '0.9375rem',
                                    textDecoration: 'none',
                                    display: 'inline-block'
                                },
                                children: "📸 Moments"
                            }, void 0, false, {
                                fileName: "[project]/app/groups/[id]/events/page.jsx",
                                lineNumber: 128,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowCreate(true),
                                className: "btn-primary",
                                style: {
                                    width: 'auto',
                                    padding: '0.5rem 1rem',
                                    fontSize: '0.9375rem'
                                },
                                children: "+ New Event"
                            }, void 0, false, {
                                fileName: "[project]/app/groups/[id]/events/page.jsx",
                                lineNumber: 141,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/groups/[id]/events/page.jsx",
                        lineNumber: 127,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/groups/[id]/events/page.jsx",
                lineNumber: 119,
                columnNumber: 13
            }, this),
            events.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fb-card",
                style: {
                    textAlign: 'center',
                    padding: '4rem 1rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '3.5rem',
                            marginBottom: '0.75rem'
                        },
                        children: "📅"
                    }, void 0, false, {
                        fileName: "[project]/app/groups/[id]/events/page.jsx",
                        lineNumber: 154,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            margin: '0 0 0.5rem',
                            fontSize: '1.125rem',
                            fontWeight: '700',
                            color: 'var(--fb-text)'
                        },
                        children: "No events yet"
                    }, void 0, false, {
                        fileName: "[project]/app/groups/[id]/events/page.jsx",
                        lineNumber: 155,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: '0 0 1.5rem',
                            color: 'var(--fb-text-secondary)'
                        },
                        children: "Promote a chat thread to an event, or create one directly"
                    }, void 0, false, {
                        fileName: "[project]/app/groups/[id]/events/page.jsx",
                        lineNumber: 156,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowCreate(true),
                        className: "btn-primary",
                        style: {
                            width: 'auto',
                            padding: '0.625rem 1.5rem'
                        },
                        children: "Create Event"
                    }, void 0, false, {
                        fileName: "[project]/app/groups/[id]/events/page.jsx",
                        lineNumber: 157,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/groups/[id]/events/page.jsx",
                lineNumber: 153,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                },
                children: events.map((event)=>{
                    const myRsvp = getUserRsvp(event);
                    const isGoing = myRsvp === 'going';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fb-card",
                        style: {
                            padding: '1rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    justifyContent: 'space-between',
                                    gap: '0.75rem',
                                    marginBottom: '0.75rem'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                flexWrap: 'wrap',
                                                marginBottom: '0.25rem'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        margin: 0,
                                                        fontSize: '1rem',
                                                        fontWeight: '700',
                                                        color: 'var(--fb-text)'
                                                    },
                                                    children: event.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/groups/[id]/events/page.jsx",
                                                    lineNumber: 172,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Primitives$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                    emoji: event.visibility === 'private' ? '🔒' : '🌐',
                                                    tone: event.visibility === 'private' ? 'amber' : 'green',
                                                    children: event.visibility === 'private' ? 'Private' : 'Public'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/groups/[id]/events/page.jsx",
                                                    lineNumber: 173,
                                                    columnNumber: 45
                                                }, this),
                                                event.sourceMessageId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Primitives$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                    emoji: "💬",
                                                    tone: "blue",
                                                    children: "From thread"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/groups/[id]/events/page.jsx",
                                                    lineNumber: 180,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/groups/[id]/events/page.jsx",
                                            lineNumber: 171,
                                            columnNumber: 41
                                        }, this),
                                        event.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                margin: 0,
                                                fontSize: '0.9375rem',
                                                color: 'var(--fb-text-secondary)'
                                            },
                                            children: event.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/groups/[id]/events/page.jsx",
                                            lineNumber: 184,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/groups/[id]/events/page.jsx",
                                    lineNumber: 170,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/groups/[id]/events/page.jsx",
                                lineNumber: 169,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '1rem',
                                    fontSize: '0.875rem',
                                    color: 'var(--fb-text-muted)',
                                    marginBottom: '0.875rem'
                                },
                                children: [
                                    event.dateTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "🕐 ",
                                            formatDateTime(event.dateTime)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/groups/[id]/events/page.jsx",
                                        lineNumber: 191,
                                        columnNumber: 56
                                    }, this),
                                    event.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "📍 ",
                                            event.location
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/groups/[id]/events/page.jsx",
                                        lineNumber: 192,
                                        columnNumber: 56
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "👤 ",
                                            event.createdBy?.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/groups/[id]/events/page.jsx",
                                        lineNumber: 193,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/groups/[id]/events/page.jsx",
                                lineNumber: 190,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '0.5rem',
                                    marginBottom: '0.75rem'
                                },
                                children: [
                                    {
                                        status: 'going',
                                        label: '✅ Going',
                                        activeColor: '#25d366'
                                    },
                                    {
                                        status: 'maybe',
                                        label: '🤔 Maybe',
                                        activeColor: '#f7b731'
                                    },
                                    {
                                        status: 'not_going',
                                        label: '❌ Can\'t go',
                                        activeColor: 'var(--fb-red)'
                                    }
                                ].map(({ status, label, activeColor })=>{
                                    const isActive = myRsvp === status;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleRsvp(event._id, status),
                                        disabled: rsvping[event._id],
                                        style: {
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
                                            transition: 'all 0.15s'
                                        },
                                        children: label
                                    }, status, false, {
                                        fileName: "[project]/app/groups/[id]/events/page.jsx",
                                        lineNumber: 205,
                                        columnNumber: 45
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/groups/[id]/events/page.jsx",
                                lineNumber: 197,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '0.5rem',
                                    borderTop: '1px solid var(--fb-border)',
                                    paddingTop: '0.75rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>isGoing && handleJoinChat(event._id),
                                        disabled: !isGoing,
                                        title: isGoing ? 'Open event chat' : 'RSVP as Going to join the chat',
                                        className: "fb-action-btn hover-btn-blue",
                                        style: {
                                            flex: 1,
                                            fontSize: '0.875rem',
                                            fontWeight: '600',
                                            padding: '0.5rem 1rem',
                                            background: isGoing ? 'var(--fb-blue)' : 'var(--fb-surface2)',
                                            color: isGoing ? '#fff' : 'var(--fb-text-muted)',
                                            border: isGoing ? 'none' : '1px solid var(--fb-border)',
                                            borderRadius: '8px',
                                            cursor: isGoing ? 'pointer' : 'not-allowed',
                                            opacity: isGoing ? 1 : 0.6
                                        },
                                        children: [
                                            "💬 ",
                                            isGoing ? 'Join Chat' : 'RSVP to Chat'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/groups/[id]/events/page.jsx",
                                        lineNumber: 231,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSummarize(event._id),
                                        className: "fb-action-btn hover-surface2",
                                        style: {
                                            flex: 1,
                                            fontSize: '0.875rem',
                                            fontWeight: '600',
                                            padding: '0.5rem 1rem',
                                            background: summaries[event._id] ? 'var(--fb-surface3)' : 'var(--fb-surface2)',
                                            color: 'var(--fb-text-secondary)',
                                            border: '1px solid var(--fb-border)',
                                            borderRadius: '8px',
                                            cursor: 'pointer'
                                        },
                                        children: [
                                            "📝 ",
                                            summaries[event._id] ? 'Hide Summary' : 'Summarize'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/groups/[id]/events/page.jsx",
                                        lineNumber: 251,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleEndEvent(event._id),
                                        className: "fb-action-btn hover-red",
                                        style: {
                                            fontSize: '0.875rem',
                                            fontWeight: '600',
                                            padding: '0.5rem 1rem',
                                            background: 'var(--fb-surface2)',
                                            color: 'var(--fb-red)',
                                            border: '1px solid var(--fb-border)',
                                            borderRadius: '8px',
                                            cursor: 'pointer'
                                        },
                                        children: "🔚 End Event"
                                    }, void 0, false, {
                                        fileName: "[project]/app/groups/[id]/events/page.jsx",
                                        lineNumber: 268,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/groups/[id]/events/page.jsx",
                                lineNumber: 230,
                                columnNumber: 33
                            }, this),
                            summaries[event._id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: '0.75rem',
                                    padding: '0.875rem',
                                    background: 'var(--fb-surface2)',
                                    borderRadius: '8px',
                                    borderLeft: '3px solid var(--fb-blue)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        style: {
                                            margin: '0 0 0.5rem'
                                        },
                                        children: "Summary"
                                    }, void 0, false, {
                                        fileName: "[project]/app/groups/[id]/events/page.jsx",
                                        lineNumber: 295,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            margin: 0,
                                            fontSize: '0.875rem',
                                            color: 'var(--fb-text)',
                                            lineHeight: '1.5'
                                        },
                                        children: summaries[event._id]
                                    }, void 0, false, {
                                        fileName: "[project]/app/groups/[id]/events/page.jsx",
                                        lineNumber: 296,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/groups/[id]/events/page.jsx",
                                lineNumber: 288,
                                columnNumber: 37
                            }, this)
                        ]
                    }, event._id, true, {
                        fileName: "[project]/app/groups/[id]/events/page.jsx",
                        lineNumber: 167,
                        columnNumber: 29
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/groups/[id]/events/page.jsx",
                lineNumber: 162,
                columnNumber: 17
            }, this),
            showCreate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CreateEventModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                groupId: groupId,
                onClose: ()=>setShowCreate(false),
                onCreated: (event)=>{
                    setEvents((prev)=>[
                            event,
                            ...prev
                        ]);
                    setShowCreate(false);
                }
            }, void 0, false, {
                fileName: "[project]/app/groups/[id]/events/page.jsx",
                lineNumber: 309,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/groups/[id]/events/page.jsx",
        lineNumber: 116,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=_9f8a9d2e._.js.map