import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routs/Router';
import AuthProvider from './context/Authcontext/AuthProvider';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router = {router}></RouterProvider>
   </AuthProvider>
  </StrictMode>
)
