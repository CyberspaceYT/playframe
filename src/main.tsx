import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'           // ← Remove .tsx
import './index.css'              // Remove this if you get error here too

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
