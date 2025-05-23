# 🌐 Portfolio Website Deployment (K3s + CI/CD)

This repository contains a **sanitized replica** of my personal portfolio website deployment, designed to showcase a **production-grade DevOps workflow** using Kubernetes, GitHub Actions, Docker, and TLS termination via Cloudflare and Let's Encrypt.

> ⚠️ All sensitive data (secrets, domains, IPs) have been removed or replaced with placeholders. This repository is for educational and demonstration purposes.

---

## 🚀 Overview

The portfolio website is built using **React** and **Tailwind CSS**, deployed on a self-hosted **K3s cluster** running on **Raspberry Pi 5 nodes**. A full CI/CD pipeline ensures seamless builds, containerization, and rollouts using **GitHub Actions** and **cert-manager** for HTTPS.

---

## 🔧 Tech Stack

- **Frontend**: React + Tailwind CSS
- **Infrastructure**: K3s (lightweight Kubernetes)
- **CI/CD**: GitHub Actions with self-hosted runners
- **Containerization**: Docker
- **Ingress**: NGINX Ingress Controller
- **TLS / HTTPS**:  
  - **Public TLS termination** via **Cloudflare Reverse Proxy**
  - **Internal TLS management** using **cert-manager** + **Let’s Encrypt (HTTP-01 challenge)**

---

## 🧩 Key Features

### ✅ CI/CD Pipeline Highlights (`.github/workflows/pipeline.yaml`)

- **Auto-trigger**: On push to `client/prod` branch
- **Docker Build & Push**: Builds image with backend API URL passed as a build argument
- **Kubeconfig Setup**: Uses GitHub Secret for secure K8s cluster access
- **Smart Deployment**: Only applies updated YAMLs if changes are detected
- **Rolling Updates**: Performed with `kubectl set image`
- **Image Cleanup**: Prunes unused Docker images on the node

---

## ⚙️ Kubernetes Configuration

### 📂 `k8s/` Folder Contains:
| File | Description |
|------|-------------|
| `frontend-deployment.yaml` | Deploys the React app to K3s |
| `frontend-service.yaml` | Exposes the app internally within the cluster |
| `frontend-ingress.yaml` | Routes external traffic to the frontend |
| `nginx-ingress-controller-service.yaml` | Exposes the NGINX Ingress Controller via NodePort |
| `nginx-load-balancer-config.yaml` | Custom reverse proxy configuration for HTTPS |
| `nginx-load-balancer-deployment.yaml` | Optional internal load balancer deployment |

---

## 🔐 TLS Setup

### 🔒 External (Cloudflare Proxy):
- Cloudflare is used as the DNS provider and reverse proxy.
- All HTTPS traffic is terminated at Cloudflare's edge before being forwarded securely to the internal cluster.

### 🔒 Internal (Let’s Encrypt):
TLS certificates are issued and managed via `cert-manager` using the ACME HTTP-01 challenge through the NGINX ingress.

#### Example `ClusterIssuer`:
```yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-production
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: your-email@example.com
    privateKeySecretRef:
      name: letsencrypt-production-key
    solvers:
    - http01:
        ingress:
          class: nginx
```

## 🖥️ Architecture Overview

### 🔄 TLS + Ingress Flow

```text
User
  ↓ HTTPS (Cloudflare TLS)
Cloudflare (Reverse Proxy)
  ↓ HTTPS (Let's Encrypt TLS)
NGINX Ingress Controller
  ↓
Portfolio React App (K8s Pod)
```

This setup ensures end-to-end encrypted traffic while allowing Cloudflare to protect the public-facing endpoints and handle caching, WAF, and DDoS protection.

