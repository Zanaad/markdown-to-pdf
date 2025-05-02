import html2pdf from 'html2pdf.js';

export default function ExportPDFButton() {
  const handleExport = () => {
    const element = document.getElementById('preview');
    html2pdf().from(element).save('markdown.pdf');
  };

  return (
    <button className="export-button" onClick={handleExport}>
      Export to PDF
    </button>
  );
}