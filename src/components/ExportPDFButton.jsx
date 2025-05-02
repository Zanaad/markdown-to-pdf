import html2pdf from 'html2pdf.js';

export default function ExportPDFButton() {
  const handleExport = () => {
    const element = document.getElementById('preview');

    const opt = {
      margin: 0.5,
      filename: 'markdown.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <button className="export-button" onClick={handleExport}>
      Export to PDF
    </button>
  );
}
