// Importing React Packages
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Importing local files
import './index.css'
import Layout from './Layout.jsx'
import App from './App.jsx'
import Team from './pages/Team/Team.jsx'
import Contacts from './pages/Contact Information/Contacts.jsx'
import Invoices from './pages/Invoices/Invoices.jsx'
import Profile from './pages/Profile Form/Profile.jsx'
import Calender from './pages/Calender/Calender.jsx'
import FAQ from './pages/FAQ Page/FAQ.jsx'
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