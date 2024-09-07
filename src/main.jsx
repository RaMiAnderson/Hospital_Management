import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import App from './App.jsx'

const route = createBrowserRouter([
  {
    path: '/auth',
    element : <App.AppLog/>
  },
  {
    path: '/',
    element: <Navigate to="/auth" replace/>
  },
  {
    path: 'doc',
    element : <App.AppMain/> 
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
