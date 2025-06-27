import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Router/Router.jsx'
import AuthProvider from './Contexts/AuthProvider.jsx'
import { ThemeProvider } from './Contexts/theme/ThemeProvider.jsx'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider>
  <AuthProvider>
    <ToastContainer></ToastContainer>
   <RouterProvider router={router} />
   </AuthProvider>
  </ThemeProvider>
  </StrictMode>,
)
