import React from 'react'
import Navbar from '../Navbar'
import About from './About'
import Dashboard from './Dashboard'
import Ceo from './Ceo'
import Footer from './Footer'
import Updates from './Updates'
import Office from '../Office'

export default function Index() {
  return (
    <>
        <Navbar/>
        <div className='w-full justify-center mx-auto overflow-hidden'>
            <Dashboard/>
            <About/>
            <Ceo/>
            <Office/>
            <Updates/>
            <Footer/>
        </div>
    </>
    
  )
}
