// Importing Local Components
import Header from './Main Page/components/Header/Header'
import Footer from './Main Page/components/Footer/Footer'
import ScrollToTop from './Main Page/components/ScrollToTop'

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
        <div className='overflow-x-hidden flex flex-col gap-10'>
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