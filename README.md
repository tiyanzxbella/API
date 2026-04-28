# MiuuAPI Infrastructure 🚀

MiuuAPI is a high-performance, production-ready API gateway and documentation portal built on a modular **Hono** architecture. It features a native Node.js clustering engine, real-time security monitoring, and a premium **AnimeJS**-powered user interface.

---

## ✨ Key Features

### 🛡️ Advanced Security & DDoS Protection
- **Multi-Core Synchronization**: Automated and manual IP bans are synchronized in real-time across all cluster workers using a master-broadcast pattern.
- **Two-Tier Banning System**:
  - **Manual Bans**: Managed via `manualBans` configuration for permanent IP blocks with custom reasoning.
  - **Auto-Ban (Anti-DDoS)**: Automated temporary blocking (30-min duration) of IPs that exceed aggressive request thresholds.
- **Real-time Monitoring**: Integrated `Rate Limit Widget` providing users with instant feedback on their remaining quota.

### 🎨 Premium UI/UX Design
- **AnimeJS Integration**: Sophisticated entrance and exit animations for all major UI components.
- **Glassmorphism Theme**: A theme-aware documentation portal (Light/Dark mode) built on the Scalar engine with custom glassmorphism effects.
- **Interactive Sponsor Modal**: 
  - **Responsive Grid**: Supports 1 to 4 sponsor cards with automatic layout adjustment.
  - **High-Fidelity Assets**: Full support for local SVG assets and interactive hover animations (logo rotation, banner scaling, and shine effects).
- **Preloader Engine**: Hardware-accelerated SVG preloader with staggered drawing animations.

### ⚡ Infrastructure & Performance
- **Node.js Clustering**: Native implementation of the `cluster` module for maximum multi-core CPU utilization and high availability.
- **Fault Tolerance**: Automatic worker recovery and port-cleaning on startup for seamless deployments.
- **Zero-Dependency Favicon**: Infallible logo delivery using Base64 Data URIs, ensuring 100% visibility on all browsers and platforms.
- **Optimized Logging**: categorization of server interactions with automatic log rotation and monitoring noise filtering.

---

## 🛠️ Configuration Guide

### 🔑 Security & API Keys (`src/configs/apiKeys.js`)
Manage your API access policies and global ban lists:
```javascript
export const autoBanConfig = {
    enabled: true,
    threshold: 2000,    // Requests per window
    windowMs: 10 * 60 * 1000, // 10 minutes
    banDuration: 30 * 60 * 1000 // 30 minutes
}
```

### 📢 Sponsor Ads (`src/configs/ads.js`)
Control the featured partnership modal:
- **`enabled`**: Toggle the entire system.
- **`delayMs`**: Set the entrance delay after preloader completes.
- **`sponsors`**: Array of up to 4 partners. Supports local paths (e.g., `/assets/discord-logo.svg`).

### 📱 Mobile Optimization
The portal is strictly optimized for mobile responsiveness:
- **Anti-Translation Layer**: Prevents Chrome/Android from forcibly translating technical content.
- **Touch-Friendly Controls**: Large interactive areas and optimized touch-tap highlights.
- **Compact UI**: Dynamic scaling of font sizes and paddings for small screens.

---

## 🚀 Deployment

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Launch Application**:
   ```bash
   # Standard Mode
   npm run start
   
   # Cluster Mode (Recommended for Production)
   npm run start -- --cluster
   ```

---

## 📦 Tech Stack
- **Framework**: [Hono](https://hono.dev/)
- **Runtime**: [Node.js](https://nodejs.org/) (v20+)
- **Animation**: [AnimeJS](https://animejs.com/)
- **Docs**: [Scalar](https://scalar.com/)
- **Validation**: [Zod](https://zod.dev/)

---

## 🤝 Community & Support
Join our community for updates and professional support:
- **Discord**: [Join our Server](https://discord.gg/miuubyte)
- **GitHub**: [@miuubyte](https://github.com/miuubyte)

*Built with ❤️ by the MiuuAPI Community.*
