// Importing React Packages
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Header Links
import Layout from './Project/Layout'
import Home from './Project/Home Page/components/Main'
import MedicinePage from './Project/Medicines/components/MedicinePage'
import Categories from './Project/Categories/components/Categories'
import ProductCard2 from './Project/Product Card/components/ProductCard2'
// User Links
import User from './Project/User/pages/User'
import Profile from './Project/User/pages/Profile'
import MyOrders from './Project/User/pages/MyOrders'
import MyRefills from './Project/User/pages/MyRefills'
import MedicalRecords from './Project/User/pages/MedicalRecords'
import SavedForLater from './Project/User/pages/SavedForLater'
import Wallet from './Project/User/pages/Wallet'
import ReferEarn from './Project/User/pages/ReferEarn'
import Cart from './Project/Cart/components/Cart'
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
      // Header Links-----------------------------------------------------------------
      {
        path: "",
        element : <Home />
      },
      {
        path: "Home",
        element : <Home />
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
        path: "Products/:type",
        element: <ProductCard2 />
      },
      // User Links-------------------------------------------------------------------
      {
        path: "User",
        element: <User />,
        children: [
          {
            path: "profile",
            element: <Profile />
          },
          {
            path: "MyOrders",
            element: <MyOrders />
          },
          {
            path: "MyRefills",
            element: <MyRefills />
          },
          {
            path: "MedicalRecords",
            element: <MedicalRecords />
          },
          {
            path: "SavedForLater",
            element: <SavedForLater />
          },
          {
            path: "Wallet",
            element: <Wallet />
          },
          {
            path: "Refer&Earn",
            element: <ReferEarn />
          }
        ]
      },
      {
        path: "Cart",
        element: <Cart />
      },
      // Footer---------------------------------------------------------------------
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