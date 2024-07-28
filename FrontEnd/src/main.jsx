// Importing Local Components
import Header from './components/Header/Header'
import Footer from './pages/Footer/Footer'
import ScrollToTop from './components/scroll/ScrollToTop'

// Importing routing
import { Outlet } from 'react-router-dom'

// Importing Redux Configuration
import {Provider} from 'react-redux'
import {store} from './Redux/Store/store'

function Layout(){
  return(
    <>
      <Provider store={store}>
        <div className='overflow-x-hidden flex flex-col'>
          <ScrollToTop />
          <Header />
          <Outlet />
          <Footer />
        </div>
      </Provider>
    </>
  )
}

export default Layout;