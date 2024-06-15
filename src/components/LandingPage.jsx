import React from 'react'
import '../sass/main.scss'
const LandingPage = () => {
  return (
    <div className='landingPage'>
      <div className='landingPage__nav'>
        <h1 className='landingPage__nav--title'>Harmony</h1>
        <div className="landingPage__nav--btn">Sign in/Sign up</div>
      </div>
      
      <div className="landingPage__slogan">
        <h2>Find your place <br />Find your people</h2>
        <button className="landingPage__slogan--btn">Get Started</button>
      </div>
    </div>
  )
}

export default LandingPage