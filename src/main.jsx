
// Original Configuration
/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './Start/Major Project/Dismefa/Layout'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from './Start/Major Project/Dismefa/Layout'
import Home from './Start/Major Project/Dismefa/Main Page/components/Main'
import Cart from './Start/Major Project/Dismefa/Cart/components/Cart'
import LgSp from './Start/Major Project/Dismefa/Login-Signup/components/LoginSignup'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children : [
      {
        path: "Home",
        element : <Home />
      },
      {
        path: "Cart",
        element: <Cart />
      },
      {
        path: "Login-Signup",
        element: <LgSp />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)