import React from 'react'
import Navbar from './section/navbar/Nav'
import Banner from './section/banner/Banner'
import Service from './section/service/Service'
import Traffic from './section/traffic/Traffic'
import Help from './section/help/Help'
import Studies from './section/studies/Studies'
import Analytics from './section/analytics/Analytics'
import Footer from './section/footer/Footer'

const App = () => {
  return (
    <>
        <Navbar/>  
        <Banner/>
        <Service/>
        <Traffic />
        <Help />
        <Studies/>
        <Analytics/>
        <Footer/>
    </>
  )
}

export default App