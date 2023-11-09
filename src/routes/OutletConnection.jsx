import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { Outlet } from 'react-router-dom'

function OutletConnection() {
  return (
    <>
                {/*=================================
        preloader */}
        <div id="preloader">
            <div className="clear-loading loading-effect"><img src="/assets/images/loading.gif" alt /></div>
        </div>
        {/*=================================
        preloader */}
        
        <Header/>
        <Outlet/>
        <Footer/>
    
    </>
  )
}

export default OutletConnection