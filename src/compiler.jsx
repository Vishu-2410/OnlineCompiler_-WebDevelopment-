import React, { useState, useEffect } from 'react';
import './styles.css'; // Import CSS file for styling

function CompilerDesign() {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
 // const [output, setOutput] = useState('');

  useEffect(() => {
    const iframe = document.getElementById('output-frame').contentWindow.document;

    // Write HTML content to iframe
    iframe.open();
    iframe.write(`
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>${htmlCode}</body>
        <script>${jsCode}</script>
      </html>
    `);
    iframe.close();
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div className="compiler-container">
      <div className="editor">
        <div className="code-editor">
          <h2>HTML</h2>
          <textarea value={htmlCode} onChange={(e) => setHtmlCode(e.target.value)}></textarea>
        </div>
        <div className="code-editor">
          <h2>CSS</h2>
          <textarea value={cssCode} onChange={(e) => setCssCode(e.target.value)}></textarea>
        </div>
        <div className="code-editor">
          <h2>JavaScript</h2>
          <textarea value={jsCode} onChange={(e) => setJsCode(e.target.value)}></textarea>
        </div>
      </div>
      <div className="output">
        <h2>Output</h2>
        <iframe id="output-frame"></iframe>
      </div>
    </div>
  );
}

export default CompilerDesign;
