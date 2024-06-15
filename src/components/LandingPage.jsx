import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import '../sass/main.scss'


const LandingPage = () => {
  return (
    <div className='landingPage'>
      <div className='landingPage__nav'>
        <h1 className='landingPage__nav--title'>Harmony</h1>
        <div className="landingPage__nav--btn"><Link className='landingPage__nav--btn-link' to="/signin">Sign in/Sign up</Link></div>
      </div>
      
      <div className="landingPage__slogan">
        <h2>Find your place <br />Find your people</h2>
        <button className="landingPage__slogan--btn"><Link className='landingPage__slogan--btn-link' to="/signin">Get Started</Link></button>
      </div>

      <Outlet />
    </div>
  )
}

export default LandingPage