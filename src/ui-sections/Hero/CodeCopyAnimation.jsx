import React, { useEffect, useRef, useState, useCallback } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-dark.css"; // Ensure you have a dark theme or handle styles manully for now since user provided custom styles

export default function CodeCopyAnimation() {
    const [isAnimating, setIsAnimating] = useState(false);
    const cursorRef = useRef(null);
    const copyButtonRef = useRef(null);
    const flashOverlayRef = useRef(null);
    const containerRef = useRef(null);

    const startAnimation = useCallback(() => {


        if (isAnimating || !cursorRef.current || !copyButtonRef.current) return;
        setIsAnimating(true);

        const cursor = cursorRef.current;
        const copyButton = copyButtonRef.current;
        const container = containerRef.current;

        // Get button position relative to the container (assumed to be the offset parent or close to it)
        // We need coordinates relative to the viewport or a common parent to move the fixed/absolute cursor correctly.
        // user's original CSS used fixed cursor. We'll use absolute within the relative container for better containment.

        const containerRect = container.getBoundingClientRect();
        const buttonRect = copyButton.getBoundingClientRect();

        // Target is center of button, relative to container
        const targetX = (buttonRect.left - containerRect.left) + buttonRect.width / 2;
        const targetY = (buttonRect.top - containerRect.top) + buttonRect.height / 2;

        // Start position (bottom right or some default if not moved)
        // For this demo let's start from somewhat random or bottom left to make it look like "entering"
        const startX = 50;
        const startY = containerRect.height - 50;

        const duration = 2000;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease in-out
            const easeProgress = progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            const currentX = startX + (targetX - startX) * easeProgress;
            const currentY = startY + (targetY - startY) * easeProgress;

            if (cursor) {
                cursor.style.left = `${currentX}px`;
                cursor.style.top = `${currentY}px`;
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Click action
                setTimeout(() => {
                    if (!copyButton) return;
                    copyButton.classList.add('clicked');
                    // Change content logic handled via React state ideally, but likely easiest to just set innerHTML or classes as per original script for visual fidelity
                    // But let's do it 'React way' slightly for the button content
                    // Actually, manipulating DOM nodes directly for animation is fine if we are careful.

                    // Simulating the original JS logic:

                    copyButton.innerHTML = '<svg class="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg> Copied!';

                    if (flashOverlayRef.current) flashOverlayRef.current.classList.add('active');

                    setTimeout(() => {
                        if (flashOverlayRef.current) flashOverlayRef.current.classList.remove('active');
                    }, 300);

                    setTimeout(() => {
                        copyButton.classList.remove('clicked');
                        copyButton.innerHTML = '<svg class="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg> Copy';
                        setIsAnimating(false);
                        // Reset cursor? user didn't ask but maybe nice loop
                    }, 1500);

                }, 100);
            }
        };


        requestAnimationFrame(animate);
    }, [isAnimating]);

    // Initial animation start
    useEffect(() => {
        const timer = setTimeout(() => {
            startAnimation();
        }, 1000);
        return () => clearTimeout(timer);
    }, [startAnimation]);


    return (
        <div
            ref={containerRef}
            className="animation-container"
            style={{
                position: 'relative',
                width: '100%',
                height: '400px', // Fixed height for the hero card
                background: '#0d1117',
                borderRadius: '16px',
                overflow: 'hidden',
                fontFamily: "'Consolas', 'Monaco', monospace",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <style>{`
                        .code - block {
                        background: #161b22;
                        border - radius: 8px;
                        padding: 24px;
                        width: 90 %;
                        max - width: 600px; /* Adjusted for component size */
                        position: relative;
                        box - shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
                    }
            .copy - button {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    background: #21262d;
                    border: 1px solid #30363d;
                    color: #c9d1d9;
                    padding: 6px 12px;
                    border - radius: 6px;
                    font - size: 14px;
                    cursor: pointer;
                    transition: all 0.2s;
                    display: flex;
                    align - items: center;
                    gap: 6px;
                    outline: none;
                }
            .copy - button:hover {
        background: #30363d;
        border - color: #8b949e;
    }
            .copy - button.clicked {
        background: #238636;
        border - color: #2ea043;
        color: white;
    }
            .flash - overlay {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(35, 134, 54, 0.15);
        border - radius: 8px;
        opacity: 0;
        pointer - events: none;
        transition: opacity 0.3s;
    }
            .flash - overlay.active { opacity: 1; }

            /* Syntax highlighting mocks */
            .keyword { color: #ff7b72; }
            .string { color: #a5d6ff; }
            .function { color: #d2a8ff; }
            .punctuation { color: #c9d1d9; }
            .property { color: #79c0ff; }
    `}</style>

            {/* Cursor */}
            <div
                ref={cursorRef}
                style={{
                    position: 'absolute',
                    top: '50%', right: '10%', // Start somewhere visible
                    width: '20px', height: '20px',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))'
                }}
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3L17 10L10 11L7 17L3 3Z" fill="white" stroke="black" strokeWidth="1" />
                </svg>
            </div>

            <div className="code-block">
                <div className="flash-overlay" ref={flashOverlayRef}></div>
                <button className="copy-button" ref={copyButtonRef}>
                    <svg className="w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                        <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                    </svg>
                    Copy
                </button>
                <pre style={{ margin: 0, color: '#c9d1d9', lineHeight: 1.6, fontSize: '13px', whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
                    <span className="string">"use client"</span><span className="punctuation">;</span>
                    <br />
                    <span className="keyword">import</span> <span className="punctuation">&#123;</span> Tooltip <span className="punctuation">&#125;</span> <span className="keyword">from</span> <span className="string">"@/components/ui/tooltip-card"</span><span className="punctuation">;</span>
                    <br />
                    <span className="keyword">import</span> React <span className="keyword">from</span> <span className="string">"react"</span><span className="punctuation">;</span>
                    <br />
                    <br />
                    <span className="keyword">export function</span> <span className="function">TooltipCardDemo</span><span className="punctuation">()</span> <span className="punctuation">&#123;</span>
                    <br />
                    <span className="keyword">return</span> <span className="punctuation">(</span>
                    <br />
                    <span className="punctuation">&lt;</span><span className="keyword">div</span> <span className="property">className</span><span className="punctuation">=</span><span className="string">"mx-auto max-w-2xl p-4 md:p-10"</span><span className="punctuation">&gt;</span>
                    <br />
                    <span className="punctuation">&lt;</span><span className="keyword">p</span> <span className="property">className</span><span className="punctuation">=</span><span className="string">"text-sm text-neutral-600"</span><span className="punctuation">&gt;</span>
                    <br />
                    There was a problem with the server<span className="punctuation">.</span>
                    <br />
                    <span className="punctuation">&lt;</span>Tooltip <span className="property">content</span><span className="punctuation">=</span><span className="string">"AWS markets..."</span><span className="punctuation">&gt;</span>
                    <br />
                    <span className="punctuation">&lt;</span><span className="keyword">span</span> <span className="property">className</span><span className="punctuation">=</span><span className="string">"font-bold"</span><span className="punctuation">&gt;</span>AWS<span className="punctuation">&lt;/</span><span className="keyword">span</span><span className="punctuation">&gt;</span>
                    <br />
                    <span className="punctuation">&lt;/</span>Tooltip<span className="punctuation">&gt;</span>
                    <br />
                    <span className="punctuation">&lt;/</span><span className="keyword">p</span><span className="punctuation">&gt;</span>
                    <br />
                    <span className="punctuation">&lt;/</span><span className="keyword">div</span><span className="punctuation">&gt;</span>
                    <br />
                    <span className="punctuation">)</span><span className="punctuation">;</span>
                    <br />
                    <span className="punctuation">&#125;</span></pre>
            </div>
        </div>
    );
}
