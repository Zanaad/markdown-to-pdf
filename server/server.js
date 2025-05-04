const express = require('express');
const fs = require('fs');
const { mdToPdf } = require('md-to-pdf');
const app = express();

app.use(express.json());

app.post('/generate-pdf', async (req, res) => {
  try {
    const { markdown, theme } = req.body;
    const inputPath = '/tmp/input.md';
    const outputPath = '/tmp/output.pdf';
    const path = require('path');
    fs.writeFileSync(inputPath, markdown);
    let stylePath = '';
    if (theme === 'dark') {
      stylePath = path.join(__dirname, 'themes', 'dark.css');
    } else if (theme === 'resume') {
      stylePath = path.join(__dirname, 'themes', 'resume.css');
    } else if (theme === 'article') {
      stylePath = path.join(__dirname, 'themes', 'article.css');
    } else {
      stylePath = path.join(__dirname, 'themes', 'default.css');
    }
    await mdToPdf(
      { path: inputPath },
      {
        dest: outputPath,
        stylesheet: stylePath,
        launch_options: {
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        }
      }
    );

    const pdf = fs.readFileSync(outputPath);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=markdown.pdf');
    res.send(pdf);
  } catch (error) {
    console.error('PDF generation error:', error);
    res.status(500).send('PDF generation failed');
  }
});

app.get('/', (req, res) => {
  res.status(200).send('OK');
});

app.listen(3001, '0.0.0.0', () => {
  console.log('PDF server running on http://0.0.0.0:3001');
});
