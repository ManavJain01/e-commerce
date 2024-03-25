import Header from './Main Page/components/Header/Header'
import Footer from './Main Page/components/Footer'

import { Outlet } from 'react-router-dom'

function Layout(){
  return(
    <>
      <div className=' overflow-x-hidden'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default Layout;