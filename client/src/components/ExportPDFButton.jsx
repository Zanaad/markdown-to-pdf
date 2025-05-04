export default function ExportPDFButton({ markdown, theme }) {
  const handleExport = async () => {
    try {
      const response = await fetch('/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ markdown, theme }),
      });

      if (!response.ok) {
        throw new Error('PDF generation failed');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'markdown.pdf';
      a.click();
    } catch (error) {
      alert('Error exporting PDF: ' + error.message);
      console.error(error);
    }
  };

  return (
    <button className="export-button" onClick={handleExport}>
      Export to PDF
    </button>
  );
}
