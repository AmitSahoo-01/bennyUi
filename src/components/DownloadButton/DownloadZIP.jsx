import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Download } from "lucide-react";

export async function downloadComponentZip(componentName, files) {
  const zip = new JSZip();
  const folder = zip.folder(componentName);

  // Add all component files
  Object.entries(files).forEach(([fileName, content]) => {
    folder.file(fileName, content);
  });

  // Generate package.json for mini-package
  const packageJson = {
    name: `@bennyui/${componentName.toLowerCase()}`,
    version: "1.0.0",
    description: `${componentName} component from BennyUI`,
    main: "index.js",
    peerDependencies: {
      "react": ">=18",
      "react-dom": ">=18"
    }
  };

  folder.file("package.json", JSON.stringify(packageJson, null, 2));

  // Generate zip and save
  const blob = await zip.generateAsync({ type: "blob" });
  saveAs(blob, `${componentName}.zip`);
}

export default function DownloadZIP({ componentName, files }) {
  return (
    <button
      onClick={() => downloadComponentZip(componentName, files)}
      className="action-btn"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 16px',
        background: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '500',
        fontSize: '0.9rem'
      }}
    >
      <Download size={18} />
      Download ZIP
    </button>
  );
}
