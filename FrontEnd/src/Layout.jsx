// Importing Local Components
import Header from './components/Header/Header'
import Footer from './pages/Footer/Footer'
import ScrollToTop from './components/ScrollToTop'

// Importing routing
import { Outlet } from 'react-router-dom'
// Importing Css styles
import { createGlobalStyle } from "styled-components"
// Importing Redux Configuration
import {Provider} from 'react-redux'
import {store} from './Redux/Store/store'


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

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