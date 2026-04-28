export const adsCSS = `
  .sponsor-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    z-index: 100000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    padding: 20px;
  }

  .sponsor-modal {
    width: 100%;
    max-width: 520px;
    max-height: 90vh;
    background: #000;
    border: 1px solid #333;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 40px 100px rgba(0, 0, 0, 0.8);
    font-family: 'Inter', system-ui, sans-serif;
    opacity: 0;
    transform: scale(0.9) translateY(40px);
    display: flex;
    flex-direction: column;
  }

  .sponsor-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    background: #111;
    border-bottom: 1px solid #222;
    flex-shrink: 0;
  }

  .sponsor-modal-title {
    font-size: 12px;
    font-weight: 900;
    color: #fff;
    margin: 0;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-family: 'JetBrains Mono', monospace;
  }

  .sponsor-close-btn {
    background: transparent;
    border: 1px solid #333;
    color: #666;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .sponsor-close-btn:hover {
    border-color: #fff;
    color: #fff;
    transform: rotate(90deg);
  }

  .sponsor-modal-body {
    padding: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;
    scrollbar-width: thin;
    scrollbar-color: #333 transparent;
  }

  .sponsor-modal-body::-webkit-scrollbar {
    width: 4px;
  }
  .sponsor-modal-body::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 10px;
  }

  .sponsor-card {
    background: #0a0a0a;
    border: 1px solid #1a1a1a;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    position: relative;
    flex-shrink: 0;
  }

  .sponsor-card:hover {
    border-color: var(--scalar-color-accent);
    transform: translateY(-4px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
  }

  .sponsor-card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-bottom: 1px solid #1a1a1a;
    background: #111;
  }

  .sponsor-logo {
    width: 32px;
    height: 32px;
    background: #000;
    border: 1px solid #222;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .sponsor-logo img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }

  .sponsor-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .sponsor-name {
    font-size: 13px;
    font-weight: 800;
    color: #eee;
    margin: 0;
    letter-spacing: 0.02em;
  }

  .sponsor-type {
    font-size: 8px;
    font-weight: 900;
    color: var(--scalar-color-accent);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-family: 'JetBrains Mono', monospace;
    opacity: 0.8;
  }

  .sponsor-card-body {
    height: 140px;
    overflow: hidden;
  }

  .sponsor-banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1);
    opacity: 0.6;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .sponsor-card:hover .sponsor-banner-image {
    filter: grayscale(0);
    opacity: 1;
    transform: scale(1.05);
  }

  .sponsor-modal-footer {
    padding: 14px;
    text-align: center;
    background: #050505;
    border-top: 1px solid #111;
    flex-shrink: 0;
  }

  .sponsor-support-text {
    font-size: 9px;
    color: #333;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }

  @media (max-width: 480px) {
    .sponsor-modal {
      max-height: 85vh;
    }
    .sponsor-card-body {
      height: 110px;
    }
    .sponsor-name {
      font-size: 12px;
    }
  }
`;
