(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/PromoteEventModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PromoteEventModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// components/PromoteEventModal.jsx
'use client';
;
function PromoteEventModal({ message, groupId, onClose, onPromoted }) {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        description: '',
        location: '',
        dateTime: '',
        visibility: 'public'
    });
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
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
            const res = await fetch(`/api/messages/${message._id}/promote`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || 'Failed');
                return;
            }
            onPromoted(data.event);
        } catch  {
            setError('Network error');
        } finally{
            setSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fb-card",
            style: {
                width: '100%',
                maxWidth: '440px',
                background: 'var(--fb-surface)'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '1.25rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '1rem',
                            paddingBottom: '1rem',
                            borderBottom: '1px solid var(--fb-border)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    margin: 0,
                                    fontSize: '1.125rem',
                                    fontWeight: '700',
                                    color: 'var(--fb-text)'
                                },
                                children: "📅 Promote to Event"
                            }, void 0, false, {
                                fileName: "[project]/components/PromoteEventModal.jsx",
                                lineNumber: 52,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                fileName: "[project]/components/PromoteEventModal.jsx",
                                lineNumber: 53,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PromoteEventModal.jsx",
                        lineNumber: 51,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'var(--fb-surface2)',
                            borderLeft: '3px solid var(--fb-blue)',
                            borderRadius: '0 8px 8px 0',
                            padding: '0.625rem 0.875rem',
                            marginBottom: '1.25rem',
                            fontSize: '0.9375rem',
                            color: 'var(--fb-text-secondary)',
                            fontStyle: 'italic'
                        },
                        children: [
                            '"',
                            message.text,
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PromoteEventModal.jsx",
                        lineNumber: 70,
                        columnNumber: 21
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        fileName: "[project]/components/PromoteEventModal.jsx",
                        lineNumber: 84,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '0.875rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'block',
                                            fontSize: '0.8125rem',
                                            fontWeight: '600',
                                            color: 'var(--fb-text-secondary)',
                                            marginBottom: '0.375rem'
                                        },
                                        children: "Event Title *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromoteEventModal.jsx",
                                        lineNumber: 95,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "title",
                                        type: "text",
                                        placeholder: "e.g. Friday Night Hangout",
                                        value: form.title,
                                        onChange: handleChange,
                                        required: true,
                                        className: "fb-input"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromoteEventModal.jsx",
                                        lineNumber: 96,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PromoteEventModal.jsx",
                                lineNumber: 94,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '0.875rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'block',
                                            fontSize: '0.8125rem',
                                            fontWeight: '600',
                                            color: 'var(--fb-text-secondary)',
                                            marginBottom: '0.375rem'
                                        },
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromoteEventModal.jsx",
                                        lineNumber: 102,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        name: "description",
                                        placeholder: "Details about the event...",
                                        rows: 2,
                                        value: form.description,
                                        onChange: handleChange,
                                        className: "fb-input",
                                        style: {
                                            resize: 'none',
                                            height: 'auto'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromoteEventModal.jsx",
                                        lineNumber: 103,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PromoteEventModal.jsx",
                                lineNumber: 101,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '0.75rem',
                                    marginBottom: '0.875rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    fontSize: '0.8125rem',
                                                    fontWeight: '600',
                                                    color: 'var(--fb-text-secondary)',
                                                    marginBottom: '0.375rem'
                                                },
                                                children: "Date & Time"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PromoteEventModal.jsx",
                                                lineNumber: 111,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "dateTime",
                                                type: "datetime-local",
                                                value: form.dateTime,
                                                onChange: handleChange,
                                                className: "fb-input"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PromoteEventModal.jsx",
                                                lineNumber: 112,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PromoteEventModal.jsx",
                                        lineNumber: 110,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    fontSize: '0.8125rem',
                                                    fontWeight: '600',
                                                    color: 'var(--fb-text-secondary)',
                                                    marginBottom: '0.375rem'
                                                },
                                                children: "Location"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PromoteEventModal.jsx",
                                                lineNumber: 117,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "location",
                                                type: "text",
                                                placeholder: "Where?",
                                                value: form.location,
                                                onChange: handleChange,
                                                className: "fb-input"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PromoteEventModal.jsx",
                                                lineNumber: 118,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PromoteEventModal.jsx",
                                        lineNumber: 116,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PromoteEventModal.jsx",
                                lineNumber: 109,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '1.25rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'block',
                                            fontSize: '0.8125rem',
                                            fontWeight: '600',
                                            color: 'var(--fb-text-secondary)',
                                            marginBottom: '0.375rem'
                                        },
                                        children: "Visibility"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromoteEventModal.jsx",
                                        lineNumber: 125,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "visibility",
                                        value: form.visibility,
                                        onChange: handleChange,
                                        className: "fb-input",
                                        style: {
                                            cursor: 'pointer'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "public",
                                                children: "🌐 Public — all group members"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PromoteEventModal.jsx",
                                                lineNumber: 128,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "private",
                                                children: "🔒 Private — invite only"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PromoteEventModal.jsx",
                                                lineNumber: 129,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PromoteEventModal.jsx",
                                        lineNumber: 126,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PromoteEventModal.jsx",
                                lineNumber: 124,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '0.625rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onClose,
                                        className: "btn-secondary",
                                        style: {
                                            flex: 1
                                        },
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromoteEventModal.jsx",
                                        lineNumber: 134,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: submitting,
                                        className: "btn-primary",
                                        style: {
                                            flex: 1
                                        },
                                        children: submitting ? 'Creating…' : 'Create Event'
                                    }, void 0, false, {
                                        fileName: "[project]/components/PromoteEventModal.jsx",
                                        lineNumber: 137,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PromoteEventModal.jsx",
                                lineNumber: 133,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PromoteEventModal.jsx",
                        lineNumber: 93,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PromoteEventModal.jsx",
                lineNumber: 49,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/PromoteEventModal.jsx",
            lineNumber: 48,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PromoteEventModal.jsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
}
_s(PromoteEventModal, "QYAuM7K9Wp6CKIX+UWZkIZL5QLI=");
_c = PromoteEventModal;
var _c;
__turbopack_context__.k.register(_c, "PromoteEventModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/app/groups/[id]/chat/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useAuth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PromoteEventModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PromoteEventModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Primitives$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Primitives.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
// app/groups/[id]/chat/page.jsx
'use client';
;
;
;
;
;
;
function ChatPage() {
    _s();
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { id: groupId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeThread, setActiveThread] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [replies, setReplies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [promoteTarget, setPromoteTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [replyToMessage, setReplyToMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // For inline WhatsApp-style replies
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPage.useEffect": ()=>{
            if (!loading && !user) router.push('/login');
        }
    }["ChatPage.useEffect"], [
        user,
        loading
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPage.useEffect": ()=>{
            if (!user || !groupId) return;
            fetchMessages();
            const interval = setInterval(fetchMessages, 5000);
            return ({
                "ChatPage.useEffect": ()=>clearInterval(interval)
            })["ChatPage.useEffect"];
        }
    }["ChatPage.useEffect"], [
        user,
        groupId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPage.useEffect": ()=>{
            bottomRef.current?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }["ChatPage.useEffect"], [
        messages
    ]);
    const fetchMessages = async ()=>{
        try {
            const res = await fetch(`/api/messages?groupId=${groupId}`);
            const data = await res.json();
            if (data.messages) setMessages(data.messages);
        } catch  {}
    };
    const sendMessage = async (e)=>{
        e.preventDefault();
        if (!text.trim()) return;
        setSending(true);
        try {
            const res = await fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    groupId,
                    text: text.trim(),
                    replyTo: replyToMessage ? replyToMessage._id : undefined
                })
            });
            const data = await res.json();
            if (res.ok) {
                setMessages((prev)=>[
                        ...prev,
                        data.message
                    ]);
                setText('');
                setReplyToMessage(null);
            }
        } catch  {} finally{
            setSending(false);
        }
    };
    const loadReplies = async (messageId)=>{
        if (activeThread === messageId) {
            setActiveThread(null);
            return;
        }
        setActiveThread(messageId);
        try {
            const res = await fetch(`/api/messages/${messageId}/reply`);
            const data = await res.json();
            setReplies((prev)=>({
                    ...prev,
                    [messageId]: data.replies || []
                }));
        } catch  {}
    };
    const sendReply = async (messageId, replyText)=>{
        try {
            const res = await fetch(`/api/messages/${messageId}/reply`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text: replyText
                })
            });
            const data = await res.json();
            if (res.ok) {
                setReplies((prev)=>({
                        ...prev,
                        [messageId]: [
                            ...prev[messageId] || [],
                            data.reply
                        ]
                    }));
                setMessages((prev)=>prev.map((m)=>m._id === messageId ? {
                            ...m,
                            replyCount: (m.replyCount || 0) + 1
                        } : m));
            }
        } catch  {}
    };
    const formatTime = (dateStr)=>{
        const d = new Date(dateStr);
        return d.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    const formatDate = (dateStr)=>{
        const d = new Date(dateStr);
        return d.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'short',
            day: 'numeric'
        });
    };
    const grouped = messages.reduce((acc, msg)=>{
        const date = new Date(msg.createdAt).toDateString();
        if (!acc[date]) acc[date] = [];
        acc[date].push(msg);
        return acc;
    }, {});
    if (loading) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            height: '100vh',
            width: '100%',
            background: '#0a0e14',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    minWidth: 0,
                    transition: 'all 0.3s'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#1c1e22',
                            padding: '0.75rem 1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            borderBottom: '1px solid #2a2f38',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.3)'
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
                                        href: "/dashboard",
                                        className: "hover-blue",
                                        style: {
                                            color: 'var(--fb-text-secondary)',
                                            textDecoration: 'none',
                                            fontSize: '1.5rem',
                                            lineHeight: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '0.25rem'
                                        },
                                        children: "←"
                                    }, void 0, false, {
                                        fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                        lineNumber: 146,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #1877f2 0%, #0d5dbf 100%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '1rem',
                                            fontWeight: '700',
                                            color: '#fff',
                                            flexShrink: 0
                                        },
                                        children: "💬"
                                    }, void 0, false, {
                                        fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                        lineNumber: 157,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                style: {
                                                    margin: 0,
                                                    fontSize: '1.125rem',
                                                    fontWeight: '600',
                                                    color: '#e4e6eb'
                                                },
                                                children: "Group Chat"
                                            }, void 0, false, {
                                                fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                                lineNumber: 173,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: 0,
                                                    fontSize: '0.75rem',
                                                    color: '#8a8d91'
                                                },
                                                children: "Tap message for thread"
                                            }, void 0, false, {
                                                fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                                lineNumber: 174,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                        lineNumber: 172,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                lineNumber: 145,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '0.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/groups/${groupId}/moments`,
                                        className: "hover-chat-link",
                                        style: {
                                            fontSize: '0.875rem',
                                            background: '#2a2f38',
                                            color: '#8a8d91',
                                            padding: '0.5rem 0.875rem',
                                            borderRadius: '20px',
                                            textDecoration: 'none',
                                            fontWeight: '600',
                                            border: '1px solid #3a3f48'
                                        },
                                        children: "📸 Moments"
                                    }, void 0, false, {
                                        fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                        lineNumber: 178,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/groups/${groupId}/events`,
                                        className: "hover-chat-link",
                                        style: {
                                            fontSize: '0.875rem',
                                            background: '#2a2f38',
                                            color: '#8a8d91',
                                            padding: '0.5rem 0.875rem',
                                            borderRadius: '20px',
                                            textDecoration: 'none',
                                            fontWeight: '600',
                                            border: '1px solid #3a3f48'
                                        },
                                        children: "📅 Events"
                                    }, void 0, false, {
                                        fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                        lineNumber: 194,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                lineNumber: 177,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/groups/[id]/chat/page.jsx",
                        lineNumber: 135,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            overflowY: 'auto',
                            padding: '1rem',
                            background: 'linear-gradient(to bottom, #0a0e14 0%, #0d1117 100%)',
                            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(24, 119, 242, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(24, 119, 242, 0.03) 0%, transparent 50%)'
                        },
                        children: [
                            Object.entries(grouped).map(([date, msgs])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '1.5rem 0 1rem'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: '#1c1e22',
                                                    padding: '0.375rem 0.875rem',
                                                    borderRadius: '8px',
                                                    fontSize: '0.75rem',
                                                    color: '#8a8d91',
                                                    fontWeight: '500',
                                                    boxShadow: '0 1px 2px rgba(0,0,0,0.3)'
                                                },
                                                children: formatDate(msgs[0].createdAt)
                                            }, void 0, false, {
                                                fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                                lineNumber: 225,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                            lineNumber: 224,
                                            columnNumber: 29
                                        }, this),
                                        msgs.map((msg)=>{
                                            const isOwn = msg.userId?._id === user?.userId || msg.userId?.toString() === user?.userId;
                                            const isThreadOpen = activeThread === msg._id;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "chat-msg-group chat-msg-enter",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'flex-start',
                                                        gap: '0.5rem',
                                                        flexDirection: isOwn ? 'row-reverse' : 'row',
                                                        marginBottom: '0.5rem',
                                                        maxWidth: '85%',
                                                        marginLeft: isOwn ? 'auto' : '0',
                                                        marginRight: isOwn ? '0' : 'auto'
                                                    },
                                                    children: [
                                                        !isOwn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Primitives$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                            name: msg.userId?.name,
                                                            size: 32,
                                                            variant: "chat"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                                            lineNumber: 257,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                alignItems: isOwn ? 'flex-end' : 'flex-start',
                                                                flex: 1,
                                                                minWidth: 0
                                                            },
                                                            children: [
                                                                !isOwn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: '0.8125rem',
                                                                        fontWeight: '600',
                                                                        color: '#1877f2',
                                                                        marginBottom: '0.25rem',
                                                                        marginLeft: '0.5rem'
                                                                    },
                                                                    children: msg.userId?.name || 'Unknown User'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                                                    lineNumber: 269,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        background: isOwn ? 'linear-gradient(135deg, #1877f2 0%, #0d5dbf 100%)' : '#1c1e22',
                                                                        color: '#fff',
                                                                        padding: '0.375rem 0.375rem 0.625rem 0.375rem',
                                                                        borderRadius: isOwn ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                                                                        fontSize: '0.9375rem',
                                                                        lineHeight: '1.4',
                                                                        position: 'relative',
                                                                        boxShadow: isOwn ? '0 2px 8px rgba(24, 119, 242, 0.4)' : '0 2px 4px rgba(0,0,0,0.3)',
                                                                        border: msg.promotedToEvent ? '2px solid #25d366' : 'none',
                                                                        maxWidth: '100%',
                                                                        minWidth: '120px'
                                                                    },
                                                                    children: [
                                                                        msg.replyTo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                background: 'rgba(0,0,0,0.15)',
                                                                                borderRadius: '8px',
                                                                                padding: '0.5rem',
                                                                                marginBottom: '0.375rem',
                                                                                borderLeft: '4px solid',
                                                                                borderLeftColor: isOwn ? '#fff' : '#1877f2',
                                                                                fontSize: '0.8125rem'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        fontWeight: '700',
                                                                                        color: isOwn ? '#fff' : '#1877f2',
                                                                                        marginBottom: '0.125rem'
                                                                                    },
                                                                                    children: msg.replyTo.userId?.name || 'Someone'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                                                                    lineNumber: 311,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        opacity: 0.8,
                                                                                        overflow: 'hidden',
                                                                                        textOverflow: 'ellipsis',
                                                                                        whiteSpace: 'nowrap'
                                                                                    },
                                                                                    children: msg.replyTo.text
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                                                                    lineNumber: 318,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                                                            lineNumber: 302,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                padding: '0 0.5rem',
                                                                                wordBreak: 'break-word'
                                                                            },
                                                                            children: [
                                                                                msg.text,
                                                                                msg.promotedToEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        marginLeft: '6px',
                                                                                        fontSize: '0.75rem',
                                                                                        color: '#25d366',
                                                                                        fontWeight: '600'
                                                                                    },
                                                                                    children: "📅 Event"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                                                                    lineNumber: 332,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                                                            lineNumber: 329,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: '0.6875rem',
                                                                                color: isOwn ? 'rgba(255,255,255,0.7)' : '#8a8d91',
                                                                                marginTop: '0.25rem',
                                                                                textAlign: 'right',
                                                                                paddingRight: '0.5rem'
                                                                            },
                                                                            children: formatTime(msg.createdAt)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                                                            lineNumber: 344,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                                                    lineNumber: 281,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "chat-actions",
                                                                    style: {
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        gap: '0.5rem',
                                                                        marginTop: '0.25rem',
                                                                        opacity: 0,
                                                                        transition: 'opacity 0.2s'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setReplyToMessage(msg),
                                                                            className: "hover-chat-action",
                                                                            style: {
                                                                                background: '#1c1e22',
                                                                                border: '1px solid #2a2f38',
                                                                                cursor: 'pointer',
                                                                                fontSize: '0.75rem',
                                                                                color: '#8a8d91',
                                                                                fontFamily: 'inherit',
                                                                                padding: '0.25rem 0.625rem',
                                                                                borderRadius: '12px',
                                                                                fontWeight: '500'
                                                                            },
                                                                            children: "↪ Reply"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                                                            lineNumber: 364,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setActiveThread(msg._id),
                                                                            className: "hover-chat-action",
                                                                            style: {
                                                                                background: '#1c1e22',
                                                                                border: '1px solid #2a2f38',
                                                                                cursor: 'pointer',
                                                                                fontSize: '0.75rem',
                                                                                color: '#8a8d91',
                                                                                fontFamily: 'inherit',
                                                                                padding: '0.25rem 0.625rem',
                                                                                borderRadius: '12px',
                                                                                fontWeight: '500'
                                                                            },
                                                                            children: [
                                                                                "💬 ",
                                                                                msg.replyCount > 0 ? `${msg.replyCount} ` : '',
                                                                                "Thread"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                                                            lineNumber: 382,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        !msg.promotedToEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setPromoteTarget(msg),
                                                                            className: "hover-chat-promote",
                                                                            style: {
                                                                                background: '#1c1e22',
                                                                                border: '1px solid #2a2f38',
                                                                                cursor: 'pointer',
                                                                                fontSize: '0.75rem',
                                                                                color: '#8a8d91',
                                                                                fontFamily: 'inherit',
                                                                                padding: '0.25rem 0.625rem',
                                                                                borderRadius: '12px',
                                                                                fontWeight: '500'
                                                                            },
                                                                            children: "📅 Event"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                                                            lineNumber: 401,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                                                    lineNumber: 356,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                                            lineNumber: 260,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                                    lineNumber: 245,
                                                    columnNumber: 41
                                                }, this)
                                            }, msg._id, false, {
                                                fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                                lineNumber: 243,
                                                columnNumber: 37
                                            }, this);
                                        })
                                    ]
                                }, date, true, {
                                    fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                    lineNumber: 222,
                                    columnNumber: 25
                                }, this)),
                            messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    padding: '5rem 1rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '4rem',
                                            marginBottom: '0.75rem',
                                            opacity: 0.3
                                        },
                                        children: "💬"
                                    }, void 0, false, {
                                        fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                        lineNumber: 431,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#8a8d91',
                                            margin: 0,
                                            fontSize: '0.9375rem'
                                        },
                                        children: "No messages yet. Start the conversation!"
                                    }, void 0, false, {
                                        fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                        lineNumber: 432,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                lineNumber: 430,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: bottomRef
                            }, void 0, false, {
                                fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                lineNumber: 436,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/groups/[id]/chat/page.jsx",
                        lineNumber: 214,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#1c1e22',
                            padding: '0.875rem 1rem',
                            flexShrink: 0,
                            borderTop: '1px solid #2a2f38',
                            boxShadow: '0 -2px 8px rgba(0,0,0,0.3)',
                            display: 'flex',
                            flexDirection: 'column'
                        },
                        children: [
                            replyToMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#2a2f38',
                                    borderLeft: '4px solid #1877f2',
                                    borderRadius: '4px 8px 8px 4px',
                                    padding: '0.5rem 0.75rem',
                                    marginBottom: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            minWidth: 0,
                                            overflow: 'hidden'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.75rem',
                                                    fontWeight: '700',
                                                    color: '#1877f2',
                                                    marginBottom: '0.25rem'
                                                },
                                                children: [
                                                    "Replying to ",
                                                    replyToMessage.userId?.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                                lineNumber: 461,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.8125rem',
                                                    color: '#8a8d91',
                                                    whiteSpace: 'nowrap',
                                                    textOverflow: 'ellipsis',
                                                    overflow: 'hidden'
                                                },
                                                children: replyToMessage.text
                                            }, void 0, false, {
                                                fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                                lineNumber: 464,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                        lineNumber: 460,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setReplyToMessage(null),
                                        style: {
                                            background: 'transparent',
                                            border: 'none',
                                            color: '#8a8d91',
                                            cursor: 'pointer',
                                            padding: '0.25rem'
                                        },
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                        lineNumber: 468,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                lineNumber: 450,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: sendMessage,
                                style: {
                                    display: 'flex',
                                    gap: '0.625rem',
                                    alignItems: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Type a message...",
                                        value: text,
                                        onChange: (e)=>setText(e.target.value),
                                        className: "chat-text-input",
                                        style: {
                                            flex: 1,
                                            borderRadius: '24px',
                                            margin: 0,
                                            padding: '0.75rem 1.125rem',
                                            fontSize: '0.9375rem',
                                            background: '#2a2f38',
                                            border: '1px solid #3a3f48',
                                            color: '#e4e6eb',
                                            outline: 'none',
                                            transition: 'background 0.2s, border-color 0.2s'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                        lineNumber: 478,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: sending || !text.trim(),
                                        style: {
                                            width: '48px',
                                            height: '48px',
                                            padding: 0,
                                            borderRadius: '50%',
                                            background: text.trim() ? 'linear-gradient(135deg, #1877f2 0%, #0d5dbf 100%)' : '#2a2f38',
                                            color: '#fff',
                                            border: 'none',
                                            cursor: text.trim() ? 'pointer' : 'not-allowed',
                                            fontSize: '1.25rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.2s',
                                            boxShadow: text.trim() ? '0 2px 8px rgba(24, 119, 242, 0.4)' : 'none',
                                            opacity: text.trim() ? 1 : 0.5
                                        },
                                        className: "hover-scale",
                                        children: sending ? '...' : '➤'
                                    }, void 0, false, {
                                        fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                        lineNumber: 497,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                lineNumber: 477,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/groups/[id]/chat/page.jsx",
                        lineNumber: 440,
                        columnNumber: 17
                    }, this),
                    promoteTarget && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PromoteEventModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        message: promoteTarget,
                        groupId: groupId,
                        onClose: ()=>setPromoteTarget(null),
                        onPromoted: (event)=>{
                            setMessages((prev)=>prev.map((m)=>m._id === promoteTarget._id ? {
                                        ...m,
                                        promotedToEvent: event
                                    } : m));
                            setPromoteTarget(null);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/groups/[id]/chat/page.jsx",
                        lineNumber: 526,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `
                .chat-msg-group:hover .chat-actions { opacity: 1 !important; }
            `
                    }, void 0, false, {
                        fileName: "[project]/app/groups/[id]/chat/page.jsx",
                        lineNumber: 540,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/groups/[id]/chat/page.jsx",
                lineNumber: 126,
                columnNumber: 13
            }, this),
            " ",
            activeThread && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '320px',
                    borderLeft: '1px solid #2a2f38',
                    background: '#0a0e14',
                    display: 'flex',
                    flexDirection: 'column'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#1c1e22',
                            padding: '0.875rem 1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            borderBottom: '1px solid #2a2f38'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    margin: 0,
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    color: '#e4e6eb'
                                },
                                children: "Thread"
                            }, void 0, false, {
                                fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                lineNumber: 562,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveThread(null),
                                style: {
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#8a8d91',
                                    cursor: 'pointer',
                                    fontSize: '1.25rem'
                                },
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                lineNumber: 563,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/groups/[id]/chat/page.jsx",
                        lineNumber: 554,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            overflowY: 'auto'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThreadPanel, {
                            messageId: activeThread,
                            replies: replies[activeThread] || [],
                            onReply: sendReply,
                            currentUserId: user?.userId
                        }, void 0, false, {
                            fileName: "[project]/app/groups/[id]/chat/page.jsx",
                            lineNumber: 569,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/groups/[id]/chat/page.jsx",
                        lineNumber: 568,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/groups/[id]/chat/page.jsx",
                lineNumber: 547,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/groups/[id]/chat/page.jsx",
        lineNumber: 124,
        columnNumber: 9
    }, this);
}
_s(ChatPage, "MBZQE5SqKAuLaPOsYvLXFFkYleI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ChatPage;
// ── Thread panel ─────────────────────────────────────────────────────
function ThreadPanel({ messageId, replies, onReply, currentUserId }) {
    _s1();
    const [replyText, setReplyText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const threadBottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreadPanel.useEffect": ()=>{
            threadBottomRef.current?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }["ThreadPanel.useEffect"], [
        replies
    ]);
    const handleReply = async (e)=>{
        e.preventDefault();
        if (!replyText.trim()) return;
        setSending(true);
        await onReply(messageId, replyText.trim());
        setReplyText('');
        setSending(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    padding: '1rem',
                    overflowY: 'auto'
                },
                children: [
                    replies.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            paddingTop: '2rem'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: '0.8125rem',
                                color: '#8a8d91',
                                fontStyle: 'italic',
                                margin: 0
                            },
                            children: "No replies yet. Start the thread!"
                        }, void 0, false, {
                            fileName: "[project]/app/groups/[id]/chat/page.jsx",
                            lineNumber: 610,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/groups/[id]/chat/page.jsx",
                        lineNumber: 609,
                        columnNumber: 21
                    }, this),
                    replies.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '0.625rem',
                                alignItems: 'flex-start',
                                marginBottom: '1rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Primitives$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                    name: r.userId?.name,
                                    size: 28,
                                    variant: "chat"
                                }, void 0, false, {
                                    fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                    lineNumber: 622,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        minWidth: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '0.8125rem',
                                                fontWeight: '600',
                                                color: '#1877f2',
                                                display: 'block',
                                                marginBottom: '0.25rem'
                                            },
                                            children: r.userId?.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                            lineNumber: 624,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '0.875rem',
                                                color: '#e4e6eb',
                                                wordBreak: 'break-word',
                                                lineHeight: '1.4'
                                            },
                                            children: r.text
                                        }, void 0, false, {
                                            fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                            lineNumber: 633,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/groups/[id]/chat/page.jsx",
                                    lineNumber: 623,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, r._id, true, {
                            fileName: "[project]/app/groups/[id]/chat/page.jsx",
                            lineNumber: 616,
                            columnNumber: 21
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: threadBottomRef
                    }, void 0, false, {
                        fileName: "[project]/app/groups/[id]/chat/page.jsx",
                        lineNumber: 644,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/groups/[id]/chat/page.jsx",
                lineNumber: 607,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '1rem',
                    borderTop: '1px solid #2a2f38',
                    background: '#1c1e22'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleReply,
                    style: {
                        display: 'flex',
                        gap: '0.5rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Reply in thread...",
                            value: replyText,
                            onChange: (e)=>setReplyText(e.target.value),
                            style: {
                                flex: 1,
                                margin: 0,
                                fontSize: '0.875rem',
                                padding: '0.625rem 0.875rem',
                                borderRadius: '20px',
                                background: '#2a2f38',
                                border: '1px solid #3a3f48',
                                color: '#e4e6eb',
                                outline: 'none'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/groups/[id]/chat/page.jsx",
                            lineNumber: 653,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: sending || !replyText.trim(),
                            style: {
                                width: '36px',
                                height: '36px',
                                padding: 0,
                                borderRadius: '50%',
                                fontSize: '1rem',
                                background: replyText.trim() ? 'linear-gradient(135deg, #1877f2 0%, #0d5dbf 100%)' : '#2a2f38',
                                color: '#fff',
                                border: 'none',
                                cursor: replyText.trim() ? 'pointer' : 'not-allowed',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: replyText.trim() ? 1 : 0.5
                            },
                            children: "➤"
                        }, void 0, false, {
                            fileName: "[project]/app/groups/[id]/chat/page.jsx",
                            lineNumber: 670,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/groups/[id]/chat/page.jsx",
                    lineNumber: 652,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/groups/[id]/chat/page.jsx",
                lineNumber: 647,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/groups/[id]/chat/page.jsx",
        lineNumber: 602,
        columnNumber: 9
    }, this);
}
_s1(ThreadPanel, "HvXIv2GjBq0pctcU8j1Qu/6D2hI=");
_c1 = ThreadPanel;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChatPage");
__turbopack_context__.k.register(_c1, "ThreadPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_e6e15fd5._.js.map