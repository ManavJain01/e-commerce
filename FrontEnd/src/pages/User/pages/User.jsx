// Importing local files
import SideNavbar from "../components/SideNavbar";

// Importing routing
import { Outlet } from 'react-router-dom'

export default function User() {
  return (
    <div className="min-h-[60vh] flex items-start">
      <SideNavbar />
      <Outlet />
    </div>
  )
}