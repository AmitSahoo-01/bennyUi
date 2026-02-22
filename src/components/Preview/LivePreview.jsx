export default function LivePreview({ children }) {
  return (
    <div className="live-preview-container" style={{
      border: '1px solid #e5e5e5',
      borderRadius: '12px',
      overflow: 'hidden',
      marginBottom: '2rem',
      background: '#fff',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
    }}>
      <div className="preview-header" style={{
        padding: '12px 20px',
        borderBottom: '1px solid #f0f0f0',
        background: '#fafafa',
        fontSize: '0.85rem',
        fontWeight: '600',
        color: '#666',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }}></div>
        Live Preview
      </div>
      <div className="preview-canvas" style={{
        padding: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px',
        background: '#ffffff', // clean white or grid pattern
        backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}>
        {children}
      </div>
    </div>
  );
}
