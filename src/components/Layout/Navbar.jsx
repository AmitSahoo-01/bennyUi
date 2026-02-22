import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <nav style={{
            padding: '20px 40px',
            borderBottom: `1px solid var(--border)`,
            display: 'flex',
            // justifyContent: 'space-between',
            justifyContent:'center',
            gap: '60rem',
            alignItems: 'center',
            background: 'var(--nav-bg)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            transition: 'background-color 0.3s ease, border-color 0.3s ease'
        }}>
            <Link to="/" style={{
                textDecoration: 'none',
                fontSize: '1.5rem',
                fontWeight: '900',
                color: 'var(--text)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}>
                <div style={{
                    width: 50,
                    height: 50,
                    borderRadius: '8px'
                }}> <img src="/images/logo.png" alt="" /> </div>
                BennyUI
            </Link>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    style={{
                        background: 'transparent',
                        border: `1px solid var(--border)`,
                        borderRadius: '8px',
                        padding: '8px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text)',
                        transition: 'all 0.2s ease'
                    }}
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <a className="linkedin" href="https://www.linkedin.com/in/amit-sahoo-407b6b356/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--secondary-text)', fontWeight: '500' }}>Linkedin</a>
                <a className="github" href="https://github.com/AmitSahoo-01" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--secondary-text)', fontWeight: '500' }}>GitHub</a>
            </div>
        </nav>
    );
}
