import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import '../sass/main.scss'


const LandingPage = () => {
  return (
    <div className='landingPage'>
      <div className='landingPage__nav'>
        <h1 className='landingPage__nav--title'>Harmony</h1>
        <div className="landingPage__nav--btn"><Link className='landingPage__nav--btn-link' to="/signup">Sign in/Sign up</Link></div>
      </div>
      
      <div className="landingPage__slogan">
        <h2>Live smarter, study harder</h2>
        <button className="landingPage__slogan--btn"><Link className='landingPage__slogan--btn-link' to="/signup">Get Started</Link></button>
      </div>

      <Outlet />
    </div>
  )
}

export default LandingPage