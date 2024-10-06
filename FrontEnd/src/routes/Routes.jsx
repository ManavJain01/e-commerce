// Importing React Packages
import React from 'react'
import ReactDOM from 'react-dom/client'
import '../../public/assets/styles/index.css'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'

// Importing Redux Configuration
import {Provider} from 'react-redux'
import {store} from '../Redux/Store/store'

// Import Local components
import { AuthProvider } from './AuthContext'
import ProtectedRoute from './ProtectedRoute'
import Main from '../main'

// Public Links
import Home from '../pages/Home Page/Main'
import MedicinePage from '../pages/Products/Medicines/MedicinePage'
import Categories from '../pages/Products/Categories/Categories'
import FilteredCategories from '../pages/Products/Categories/FilteredCategories'
import Search from '../pages/Search/Search'
import ProductCard2 from '../components/Product Card/ProductCard2'
// User Links
import User from '../pages/User/pages/User'
import Profile from '../pages/User/pages/Profile'
import ManageAddress from '../pages/User/pages/Profile/ManageAddress'
import ManagePatient from '../pages/User/pages/Profile/ManagePatient'
import MyOrders from '../pages/User/pages/MyOrders'
import MyRefills from '../pages/User/pages/MyRefills'
import MedicalRecords from '../pages/User/pages/MedicalRecords'
import UploadingPrescrip from '../pages/User/pages/Medical Records/UploadingPrescrip'
// import SavedForLater from '../pages/User/pages/SavedForLater'
import Wallet from '../pages/User/pages/Wallet'
import ReferEarn from '../pages/User/pages/ReferEarn'
import Cart from '../pages/Cart/Cart'
import Summary from '../pages/Cart/components/Summary'
import Verify from '../pages/Cart/components/Verify'
// Footer Links
import FAQ from '../pages/Footer/Company/Help'
import Health from '../pages/Footer/Company/Health'
import Terms from '../pages/Footer/Legal/Terms'
import Privacy from '../pages/Footer/Legal/Privacy'
import Editorial from '../pages/Footer/Legal/Editorial'
import Returns from '../pages/Footer/Legal/Returns'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children : [
      // Public Links-----------------------------------------------------------------
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
        path: "search",
        element: <Search />
      },
      {
        path: "Products/:type",
        element: <ProductCard2 />
      },
      // User Links-------------------------------------------------------------------
      {
        path: "User",
        element: <ProtectedRoute element={<User />} />,
        children: [
          {
            path: "",
            element: <ProtectedRoute element={<Profile />} />
          },
          {
            path: "profile",
            element: <ProtectedRoute element={<Profile />} />
          },
          {
            path: "addresses",
            // element: <ProtectedRoute element={<ManageAddress />} />
            element: <ProtectedRoute element={<ManageAddress />} />
          },
          {
            path: "patients",
            element: <ProtectedRoute element={<ManagePatient />} />
          },
          {
            path: "MyOrders",
            element: <ProtectedRoute element={<MyOrders />} />,
          },
          {
            path: "MyRefills",
            element: <ProtectedRoute element={<MyRefills />} />
          },
          {
            path: "MedicalRecords",
            element: <ProtectedRoute element={<MedicalRecords />} />
          },
          {
            path: "upload-prescription",
            element: <ProtectedRoute element={<UploadingPrescrip />} />
          },
          // {
          //   path: "SavedForLater",
          //   element: <ProtectedRoute element={<SavedForLater />} />
          // },
          {
            path: "Wallet",
            element: <ProtectedRoute element={<Wallet />} />
          },
          {
            path: "Refer&Earn",
            element: <ProtectedRoute element={<ReferEarn />} />
          }
        ]
      },
      {
        path: "Cart",
        element: <Cart />
      },
      {
        path: "Summary",
        element: <Summary />
      },
      {
        path: "verify",
        element: <Verify />
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
      },
      {
        path: "*",
        element: <Navigate to="/" />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
)