import React from 'react'
import Navbar from '../components/Navbar'
import Main from './Main'
import MainRight from './MainRight'
import MobileNavbar from './MobileNavbar'

function Home() {
    return (
        <div className='container-fluid mh-100 mw-100'>
            <div className="row">
                <Navbar />
                <Main />
                <MainRight/>
                <MobileNavbar/>
            </div>
        </div>
    )
}

export default Home
