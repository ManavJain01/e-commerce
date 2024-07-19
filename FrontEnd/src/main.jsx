// Importing React Packages
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Header Links
import Layout from './Layout'
import Home from './pages/Home Page/Main'
import MedicinePage from './pages/Products/Medicines/MedicinePage'
import Categories from './pages/Products/Categories/Categories'
import FilteredCategories from './pages/Products/Categories/FilteredCategories'
import ProductCard2 from './components/Product Card/ProductCard2'
// User Links
import User from './pages/User/pages/User'
import Profile from './pages/User/pages/Profile'
import MyOrders from './pages/User/pages/MyOrders'
import MyRefills from './pages/User/pages/MyRefills'
import MedicalRecords from './pages/User/pages/MedicalRecords'
import SavedForLater from './pages/User/pages/SavedForLater'
import Wallet from './pages/User/pages/Wallet'
import ReferEarn from './pages/User/pages/ReferEarn'
import Cart from './pages/Cart/Cart'
// Footer Links
import FAQ from './pages/Footer/Company/Help'
import Health from './pages/Footer/Company/Health'
import Terms from './pages/Footer/Legal/Terms'
import Privacy from './pages/Footer/Legal/Privacy'
import Editorial from './pages/Footer/Legal/Editorial'
import Returns from './pages/Footer/Legal/Returns'

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
        path: "Categories",
        element: <Categories />
      },
      {
        path: "Categories/:type",
        element: <FilteredCategories />
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