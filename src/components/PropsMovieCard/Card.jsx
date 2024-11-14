import React from 'react'
import './movieCart.css'

const Card = (props) => {
    let {id, actor,actress,desc, dor,rating, img} = props
  return (
    <>
    <div className="card">
           <div className="card-img">
              <img src={img} alt="movie"/>
          </div>
          <div className="card-info">
              <h2>Actor: {actor}</h2>
              <h2>Actress: {actress}</h2>
              <h2>Description: {desc}</h2>
              <h2>Date of Release: {dor}</h2>
              <h2>Rating: {rating}</h2>
          </div>
    </div>
    </>
  )
}

export default Card