// Importing React Packages
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Importing local files
import './index.css'
import Layout from './Layout.jsx'
import App from './App.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children : [
      {
        path: "",
        element : <App />
      },
      // {
      //   path: "Home",
      //   element : <Home />
      // }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)