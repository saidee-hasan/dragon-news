import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes'
import AuthContext from './contextProvider/AuthContext'
import { HelmetProvider } from 'react-helmet-async'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
    <HelmetProvider>
          <RouterProvider router={routes} />
    </HelmetProvider>
    </AuthContext>
  </React.StrictMode>,
)
