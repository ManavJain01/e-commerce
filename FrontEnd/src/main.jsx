import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from './Project/Layout'
import Home from './Project/Home Page/components/Main'
import MedicinePage from './Project/Medicines/components/MedicinePage'
import ProductCard2 from './Project/Product Card/components/ProductCard2'
import Categories from './Project/Categories/components/Categories'
// Header Links
import Cart from './Project/Cart/components/Cart'
import SavedForLater from './Project/Header-Footer/components/Header/SavedForLater'
import ReferEarn from './Project/Header-Footer/components/Header/ReferEarn'
// Footer Links
import FAQ from './Project/Header-Footer/components/Footer/Company/Help'
import Health from './Project/Header-Footer/components/Footer/Company/Health'
import Terms from './Project/Header-Footer/components/Footer/Legal/Terms'
import Privacy from './Project/Header-Footer/components/Footer/Legal/Privacy'
import Editorial from './Project/Header-Footer/components/Footer/Legal/Editorial'
import Returns from './Project/Header-Footer/components/Footer/Legal/Returns'

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
        path: "Products/:type",
        element: <ProductCard2 />
      },
      {
        path: "Medicines",
        element: <MedicinePage />
      },
      {
        path: "Categories/:type",
        element: <Categories />
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
  </React.StrictMode>
)