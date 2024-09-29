// Importing local files
import SideNavbar from "../components/SideNavbar";

// Importing routing
import { Outlet } from 'react-router-dom'

export default function User() {
  return (
    <div className="sm:mt-40 min-h-[60vh] flex flex-col sm:flex-row items-start">
      <SideNavbar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}