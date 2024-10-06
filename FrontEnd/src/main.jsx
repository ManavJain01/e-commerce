// Importing Local Components
// import Header from './components/Header/Header'
import Header from './pages/Header/Header'
import Footer from './pages/Footer/Footer'
import ScrollToTop from './components/scroll/ScrollToTop'

// Importing routing
import { Outlet } from 'react-router-dom'

function Layout(){
  return(
    <div className='overflow-x-hidden flex flex-col'>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;