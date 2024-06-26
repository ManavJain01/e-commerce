// Importing Local Components
import Sidebar from './Common Components/Sidebar'
import Header from './Common Components/Header'
import Footer from './Common Components/Footer'

// Importing React Packages
import { useState } from "react"

// Importing routing
import { Outlet } from 'react-router-dom'

export default function Layout() {
  const [darkTheme, setDarkTheme] = useState(true)

  return (
    <div className={`font-mono min-h-lvh flex transition-all duration-1000 ${darkTheme ? "bg-gray-950 text-white" : "bg-gray-200 text-black"}`}>
      <Sidebar darkTheme={darkTheme} />
      
      <div className="w-full p-8 flex flex-col">
        <Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        
        <div className="flex-1 py-11"><Outlet /></div>
        
        <Footer />
      </div>
    </div>
  )
}