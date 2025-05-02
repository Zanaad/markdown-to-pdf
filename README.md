# Markdown to PDF Converter

A user-friendly web application that lets you input or upload Markdown content, preview it as rendered HTML, and export it as  PDF. Built with React and deployed with CI/CD on Google Kubernetes Engine (GKE) using GitHub Actions and Docker.

---

## Features

### Core Features (MVP)
- Input area for Markdown text
- Option to upload `.md` files
- Live preview of rendered Markdown
- Export the preview as a PDF
- Support for:
  - Headings
  - Lists
  - Tables (coming soon)
  - Links
  - Code blocks
  - Images (coming soon)

### Bonus Features
- Custom PDF themes (Dark mode, Resume, Article layout, etc.) (coming soon)
- Drag-and-drop file upload support

---

## Tech Stack

- **Frontend**: React JS (Vite)
- **PDF Export**: jsPDF / html2canvas
- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Deployment**: Google Kubernetes Engine (GKE) via Kustomize

---

## Docker Setup

To build and run the app locally with Docker:

```bash
docker build -t markdown-to-pdf .
docker run -p 80:80 markdown-to-pdf
```
Then open http://localhost in your browser.

## CI/CD & Deployment (GKE)

This project uses a fully automated CI/CD pipeline with **GitHub Actions** to:

1. Authenticate with Google Cloud
2. Build and push the Docker image to Artifact Registry
3. Update the image reference in `kustomization.yaml`
4. Deploy the app to a GKE cluster using `kubectl apply -k .`

### GitHub Actions Workflow

Workflow path: `.github/workflows/deploy.yaml`

- **Trigger**: On every push to the `main` branch
- **Secrets used**:
  - `GKE_PROJECT`: Google Cloud project ID
  - `GKE_SA_KEY`: Base64-encoded service account credentials
### Kubernetes Deployment
Your Kubernetes configuration includes:

- Deployment
- Service
- Ingress
- Image reference replacement via kustomization.yaml

---

## Project Structure
```bash
├── manifests/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ingress.yaml
├── components/
│   ├── MarkdownEditor.jsx
│   ├── MarkdownPreview.jsx
│   └── ExportPDFButton.jsx
├── Dockerfile
├── kustomization.yaml
├── .github/workflows/deploy.yaml
└── README.md
```

---

## Live Demo

> 🔗 **Live App**: [http://34.160.150.137/](http://34.160.150.137/)

---

## Local Development

```bash
npm install

npm run dev

```
Then open http://localhost:5173 in your browser.

---
