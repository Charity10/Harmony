import React from 'react'
import '../sass/main.scss'
const LandingPage = () => {
  return (
    <div className='landingPage'>
      <div className='landingPage__nav'>
        <h1 className='landingPage__nav--title'>Harmony</h1>
        <div className="landingPage__nav--btn">Sign in</div>
        <div className="landingPage__nav--btn">Sign up</div>
      </div>
      
      <div className="landingPage__slogan">
        <h2>Find your place, Find your people</h2>
      </div>
    </div>
  )
}

export default LandingPage