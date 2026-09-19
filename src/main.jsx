import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Auto-remove Vercel Toolbar if injected
if (typeof window !== 'undefined') {
  const removeToolbar = () => {
    document.querySelectorAll('vercel-live-feedback, vercel-toolbar, [data-vercel-toolbar]').forEach(el => el.remove());
  };
  removeToolbar();
  const observer = new MutationObserver(() => removeToolbar());
  observer.observe(document.documentElement, { childList: true, subtree: true });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

