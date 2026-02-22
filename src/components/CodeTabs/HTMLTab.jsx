import { useState } from "react";

export default function HTMLTab({ code }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{ position: 'relative' }}>
            <button
                onClick={handleCopy}
                style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    padding: '8px 16px',
                    background: copied ? '#10b981' : '#111',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    zIndex: 10,
                    transition: 'background 0.2s ease'
                }}
            >
                {copied ? '✓ Copied!' : 'Copy'}
            </button>
            <pre style={{
                background: '#1e1e1e',
                color: '#d4d4d4',
                padding: '24px',
                borderRadius: '12px',
                overflow: 'auto',
                fontSize: '0.875rem',
                lineHeight: '1.6',
                margin: 0
            }}>
                <code>{code}</code>
            </pre>
        </div>
    );
}
