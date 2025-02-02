import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div className="text-red-500 font-bold text-xl">Hello, Tailwind!</div>

  </StrictMode>,
)
