import React from 'react'
import userImage from '../assets/images/user.jpg'

const Card = () => {
  return (
    <div className='Card'>
       <img src={userImage} alt='userImage' />
       <div className='card_body'>
        <h1 className='card_name'>Name: Mercy Umoh</h1>
        <h2 className="card">Male ~ 25 years</h2>
        <p className="card_description">Looking for a prayerful roommate</p>
       </div>
    </div>
  )
}

export default Card