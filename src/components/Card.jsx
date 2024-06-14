import React from 'react'
import '../sass/main.scss'

const Card = (props) => {
  return (
    <div className='card'>  
      <img className="card__img" src= {props.img}alt='userImage' />    
       <div className='card__body'>
       <div className="card__details">
        <h1 className='card__details--name'>Name: {props.name}</h1>
        <div className="card__details--more">View</div>
        <p className='card__details--location'>Location: {props.location}</p>
        <h2 className="card__details--age">{props.gender} ~ {props.age} years</h2>
        <h3 className="card__details--description">{props.description}</h3>
        </div>
       </div>
    </div>
  )
}

export default Card