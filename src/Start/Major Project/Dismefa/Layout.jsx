import Header from './Main Page/components/Header/Header'
import Footer from './Main Page/components/Footer/Footer'

import { Outlet } from 'react-router-dom'
import { createGlobalStyle } from "styled-components"


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
      <div className='overflow-x-hidden'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default Layout;