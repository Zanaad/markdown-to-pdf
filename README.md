# Markdown to PDF Converter

A user-friendly web application that lets you input or upload Markdown content, preview it as rendered HTML, and export it as  PDF. Built with React and deployed with CI/CD on Google Kubernetes Engine (GKE) using GitHub Actions and Docker.

---

## Features

### Core Functionality
- Live Markdown input and preview
- Upload `.md` files
- Drag-and-drop Markdown file support
- Export to PDF using different themes:
  - Default
  - Dark mode
  - Resume layout
  - Article style

---

## Tech Stack

| Layer       | Tech                     |
|-------------|--------------------------|
| **Frontend** | React (Vite)             |
| **Backend**  | Express.js + `md-to-pdf` |
| **Containerization** | Docker |
| **CI/CD**| GitHub Actions |
| **Deployment** | GKE |

---

## CI/CD & Deployment (GKE)

This project uses **GitHub Actions** to automate deployment to **Google Kubernetes Engine (GKE)**.

---

###  Workflow Summary

On every push to the `main` branch:

- Build Docker image for both **client** and **server**
- Push the image to **Google Artifact Registry**
- Patch image reference in `kustomization.yaml`
- Deploy to GKE using `kubectl apply -k`

---

### GitHub Secrets Used

- `GKE_PROJECT`: Your Google Cloud project ID
- `GKE_SA_KEY`: Base64-encoded Google service account key with GKE and Artifact Registry access

---

## Kubernetes Deployment

The Kubernetes configuration files in the `manifests/` directory include:

- **Deployment** for both client and server Pods
- **Service** definitions to expose them within the cluster
- **Ingress** (optional) for external access over HTTP
- **`kustomization.yaml`** to dynamically inject the latest Docker image tags

---

## Live Demo

> 🔗 **Live App**: [http://34.160.150.137/](http://34.160.150.137/)

---

## How to Run Locally

**Frontend:**
```bash
cd client
npm install
npm run dev
```
Runs on: http://localhost:5173

**Backend:**

```bash
cd server
npm install
node server.js
```

