export const adsCSS = `
  .sponsor-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    z-index: 100000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
  }

  .sponsor-modal {
    width: 90%;
    max-width: 580px;
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
    padding: 20px 24px;
    background: #111;
    border-bottom: 1px solid #222;
  }

  .sponsor-modal-title {
    font-size: 14px;
    font-weight: 900;
    color: #fff;
    margin: 0;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-family: 'JetBrains Mono', monospace;
  }

  .sponsor-close-btn {
    background: transparent;
    border: 1px solid #333;
    color: #666;
    width: 32px;
    height: 32px;
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
    padding: 24px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .sponsor-card {
    background: #111;
    border: 1px solid #222;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    position: relative;
  }

  .sponsor-card:hover {
    border-color: var(--scalar-color-accent);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }

  .sponsor-card-header {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 20px;
    border-bottom: 1px solid #222;
    background: #161616;
  }

  .sponsor-logo {
    width: 40px;
    height: 40px;
    background: #000;
    border: 1px solid #333;
    border-radius: 4px;
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
    gap: 4px;
  }

  .sponsor-name {
    font-size: 16px;
    font-weight: 800;
    color: #fff;
    margin: 0;
    letter-spacing: 0.05em;
  }

  .sponsor-type {
    font-size: 9px;
    font-weight: 900;
    color: var(--scalar-color-accent);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-family: 'JetBrains Mono', monospace;
  }

  .sponsor-banner-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
    filter: grayscale(0.5);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .sponsor-card:hover .sponsor-banner-image {
    filter: grayscale(0);
    transform: scale(1.05);
  }

  .sponsor-modal-footer {
    padding: 20px;
    text-align: center;
    background: #080808;
    border-top: 1px solid #111;
  }

  .sponsor-support-text {
    font-size: 11px;
    color: #444;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`;
