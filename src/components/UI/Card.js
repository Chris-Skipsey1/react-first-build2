import React from 'react'
import './Card.css'


function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="image" alt="cat" />
        <h2 className="title">{props.title}</h2>
        <p className="description">{props.description}</p>
      </div>
     
      
    </div>
  )
}



export default Card