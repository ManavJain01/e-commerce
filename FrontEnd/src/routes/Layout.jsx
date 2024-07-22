// Importing Local Components
import Header from '../components/Header/Header'
import Footer from '../pages/Footer/Footer'
import ScrollToTop from '../components/scroll/ScrollToTop'
import LoadingScreen from '../components/loading/LoadingScreen'

// Import Custom Hooks
import { useLoading } from '../hooks/useLoading'

// Importing routing
import { Outlet } from 'react-router-dom'

// Importing Css styles
import { createGlobalStyle } from "styled-components"

// Importing Redux Configuration
import {Provider} from 'react-redux'
import {store} from '../Redux/Store/store'


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function Layout(){
  // Custom Hook
  const { loading } = useLoading();

  return(
    <>
      <Provider store={store}>
        <div className={`overflow-x-hidden flex flex-col ${loading ? "h-lvh overflow-hidden" : ""}`}>
          <ScrollToTop />
          {loading && <LoadingScreen />}
          <Header />
          <Outlet />
          <Footer />
        </div>
      </Provider>
    </>
  )
}

export default Layout;