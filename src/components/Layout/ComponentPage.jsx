import { useState, useEffect } from "react";
import { components } from "../../data/components";
import LivePreview from "../Preview/LivePreview";
import HTMLTab from "../CodeTabs/HTMLTab";
import CSSTab from "../CodeTabs/CSSTab";
import ReactTab from "../CodeTabs/ReactTab";
import DownloadZIP from "../DownloadButton/DownloadZIP";
import "../Layout/noteHighlighter.css";

export default function ComponentPage({ componentName, LiveComponent }) {
  const data = components.find(c => c.name === componentName);

  if (!data) return <div style={{ padding: 40 }}>Component not found</div>;

  // Determine available tabs based on files
  const hasReact = data.files[`${data.name}.jsx`];
  const hasHTML = data.files[`${data.name}.html`];
  const hasCSS = data.files[`${data.name}.css`];
  const hasJS = data.files[`${data.name}.js`] || data.files[`index.js`];

  const tabs = [];
  if (hasReact) tabs.push("React");
  if (hasHTML) tabs.push("HTML");
  if (hasCSS) tabs.push("CSS");
  if (hasJS) tabs.push("JS");

  const [activeTab, setActiveTab] = useState(tabs[0] || "HTML");

  // Get file content
  const reactCode = data.files[`${data.name}.jsx`] || "";
  const htmlCode = data.files[`${data.name}.html`] || "";
  const cssCode = data.files[`${data.name}.css`] || "";
  const jsCode = data.files[`${data.name}.js`] || data.files[`index.js`] || "";

  // Create iframe content for HTML preview
  const iframeContent = hasHTML ? `
    <!DOCTYPE html>
    <html>
    <head>
      <style>${cssCode}</style>
    </head>
    <body>
      ${htmlCode.replace(/<html[^>]*>|<\/html>|<head[^>]*>.*?<\/head>|<body[^>]*>|<\/body>|<!DOCTYPE html>/gi, '')}
    </body>
    </html>
  ` : '';

  return (
    <div className="component-page" style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px', fontFamily: "'Inter', sans-serif" }}>
      <div className="note">
        <h4> <span>*</span> Only copy the main chunk of code for better results & you can also customize the code according to your requirements.</h4>
      </div>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '16px', letterSpacing: '-0.02em', color: 'var(--text)' }}>{data.name}</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--secondary-text)', lineHeight: 1.6 }}>{data.description || "A highly customizable component."}</p>
      </header>

      {/* Live Preview */}
      {hasHTML ? (
        <div style={{ marginBottom: '40px', background: '#f9fafb', border: '2px solid #e5e7eb', borderRadius: '16px', padding: '40px', minHeight: '400px' }}>
          <iframe
            srcDoc={iframeContent}
            style={{
              width: '100%',
              height: '500px',
              border: 'none',
              borderRadius: '8px',
              background: 'white'
            }}
            title="Component Preview"
          />
        </div>
      ) : (
        <LivePreview>
          {LiveComponent}
        </LivePreview>
      )}



      <div className="actions-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>

        <div className="tabs" style={{ display: 'flex', gap: '4px', background: '#f5f7f9', padding: '6px', borderRadius: '10px' }}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '8px 20px',
                borderRadius: '8px',
                border: 'none',
                background: activeTab === tab ? '#fff' : 'transparent',
                color: activeTab === tab ? '#000' : '#666',
                boxShadow: activeTab === tab ? '0 2px 4px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.02)' : 'none',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <DownloadZIP componentName={data.name} files={data.files} />
      </div>

      <div className="code-section">
        {activeTab === "React" && <ReactTab code={reactCode} />}
        {activeTab === "HTML" && <HTMLTab code={htmlCode} />}
        {activeTab === "CSS" && <CSSTab code={cssCode} />}
        {activeTab === "JS" && <HTMLTab code={jsCode} />}
      </div>
    </div>
  );
}
