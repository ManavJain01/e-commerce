// Importing React Packages
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Importing local files
import './index.css'
import Layout from './Layout.jsx'
// Dashboard
import App from './App.jsx'
// Data
import Team from './pages/Data/Team/Team.jsx'
import Contacts from './pages/Data/Contact Information/Contacts.jsx'
import Invoices from './pages/Data/Invoices/Invoices.jsx'
// Client
import Orders from './pages/Client/Orders/Orders.jsx'
import Customers from './pages/Client/Customers/Customers.jsx'
import Products from './pages/Client/Products/Products.jsx'
// Pages
import Profile from './pages/Pages/Profile Form/Profile.jsx'
import Calender from './pages/Pages/Calender/Calender.jsx'
import FAQ from './pages/Pages/FAQ Page/FAQ.jsx'
// Charts
import BarChart from './pages/Charts/Bar Chart/BarChart.jsx'
import PieChart from './pages/Charts/Pie Chart/PieChart.jsx'
import LineChart from './pages/Charts/Line Chart/LineChart.jsx'
import GeographyChart from './pages/Charts/Geography Chart/GeographyChart.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children : [
      {
        path: "",
        element : <App />
      },
      // Data
      {
        path: "Team",
        element : <Team />
      },
      {
        path: "Contacts",
        element : <Contacts />
      },
      {
        path: "Invoices",
        element : <Invoices />
      },
      // Client
      {
        path: "Orders",
        element : <Orders />
      },
      {
        path: "Customers",
        element : <Customers />
      },
      {
        path: "Products",
        element : <Products />
      },
      // Pages
      {
        path: "Profile",
        element : <Profile />
      },
      {
        path: "Calender",
        element : <Calender />
      },
      {
        path: "FAQ",
        element : <FAQ />
      },
      // Charts
      {
        path: "barChart",
        element : <BarChart />
      },
      {
        path: "pieChart",
        element : <PieChart />
      },
      {
        path: "lineChart",
        element : <LineChart />
      },
      {
        path: "geographyChart",
        element : <GeographyChart />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)