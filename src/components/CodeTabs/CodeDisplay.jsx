import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
// import languages
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import { Copy, Check } from "lucide-react";

export default function CodeDisplay({ code, language }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Prism.highlightAll() works on the whole document, but better to target the element if possible, 
    // or just let it run globally.
    // For React, `Prism.highlight` string manipulation is often cleaner to avoid DOM sync issues, 
    // but higlightAll is easiest.
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, [code, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-display-wrapper" style={{ position: 'relative', marginTop: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
      <button 
        onClick={handleCopy}
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff',
          padding: '6px 10px',
          borderRadius: '6px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.75rem',
          zIndex: 10,
          backdropFilter: 'blur(4px)'
        }}
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {copied ? "Copied" : "Copy"}
      </button>
      <pre style={{ margin: 0, padding: '20px', fontSize: '14px', borderRadius: '8px' }} className={`language-${language}`}>
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
