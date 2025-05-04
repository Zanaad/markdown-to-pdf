import { useState } from 'react';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownPreview';
import ExportPDFButton from './components/ExportPDFButton';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState('# Welcome!\nStart writing your Markdown here...');
  const [pdfTheme, setPdfTheme] = useState('default');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith('.md')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setMarkdown(event.target.result);
      };
      reader.readAsText(file);
    } else {
      alert('Please upload a valid Markdown (.md) file');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.name.endsWith('.md')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setMarkdown(event.target.result);
      };
      reader.readAsText(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`app-container dark`} onDrop={handleDrop} onDragOver={handleDragOver}>
      <h1>Markdown to PDF Converter</h1>
      <div className="button-bar">
        <select value={pdfTheme} onChange={(e) => setPdfTheme(e.target.value)} className="export-select">
          <option value="default">Default</option>
          <option value="dark">Dark</option>
          <option value="resume">Resume Style</option>
          <option value="article">Article Layout</option>
        </select>

        <label htmlFor="file-upload" className="custom-file-upload">
          Choose file
        </label>
        <input
          id="file-upload"
          type="file"
          accept=".md"
          onChange={handleFileUpload}
          className="upload-input"
        />
        <ExportPDFButton markdown={markdown} theme={pdfTheme} />
      </div>
      <div className="editor-preview-container">
        <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
        <MarkdownPreview markdown={markdown} />
      </div>
    </div>
  );
}

export default App;