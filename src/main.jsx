import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './Context/AppContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LoginProvider } from './Context/LoginContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LoginProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </LoginProvider>
  </BrowserRouter>
)
