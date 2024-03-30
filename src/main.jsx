
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
import MedicinePage from './Start/Major Project/Dismefa/Medicines/components/MedicinePage'
import ProductCard2 from './Start/Major Project/Dismefa/Product Card/components/ProductCard2'
// Header Links
import Cart from './Start/Major Project/Dismefa/Cart/components/Cart'
import SavedForLater from './Start/Major Project/Dismefa/Main Page/components/Header/SavedForLater'
import ReferEarn from './Start/Major Project/Dismefa/Main Page/components/Header/ReferEarn'
// Footer Links
import FAQ from './Start/Major Project/Dismefa/Main Page/components/Footer/Company/Help'
import Health from './Start/Major Project/Dismefa/Main Page/components/Footer/Company/Health'
import Terms from './Start/Major Project/Dismefa/Main Page/components/Footer/Legal/Terms'
import Privacy from './Start/Major Project/Dismefa/Main Page/components/Footer/Legal/Privacy'
import Editorial from './Start/Major Project/Dismefa/Main Page/components/Footer/Legal/Editorial'
import Returns from './Start/Major Project/Dismefa/Main Page/components/Footer/Legal/Returns'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children : [
      {
        path: "",
        element : <Home />
      },
      {
        path: "Home",
        element : <Home />
      },
      {
        path: "Cart",
        element: <Cart />
      },
      {
        path: "SavedForLater",
        element: <SavedForLater />
      },
      {
        path: "Refer&Earn",
        element: <ReferEarn />
      },
      {
        path: "Products",
        element: <ProductCard2 />
      },
      {
        path: "Medicines",
        element: <MedicinePage />
      },
      {
        path: "Company/Help",
        element: <FAQ />
      },
      {
        path: "Company/Health-Article",
        element: <Health />
      },
      {
        path: "Legal/Terms&Conditions",
        element: <Terms />
      },
      {
        path: "Legal/Privacy-policy",
        element: <Privacy />
      },
      {
        path: "Legal/Editorial-policy",
        element: <Editorial />
      },
      {
        path: "Legal/Returns&Cancellation-policy",
        element: <Returns />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)