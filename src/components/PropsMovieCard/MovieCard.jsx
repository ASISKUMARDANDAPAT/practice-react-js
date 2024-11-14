import React from 'react'
import {MoveData }from './MoveData'
import Card from './Card'
import './movieCart.css'
const MovieCard = () => {
   
  return (
    <>
    <header><h1>Welcome to my movie collections</h1></header>
   <div className="movie-cart">
   {
        MoveData.map((movieObj)=>{
            let {id, actor,actress,desc, dor,rating, img} = movieObj
            return(
              <>
              <Card 
               id= {id}
               actor = {actor}
               actress = {actress}
               desc = {desc}
               dor = {dor}
               rating = {rating}
               img = {img}
              />
              </>
            )
        })
    }
   </div>
    </>
  )
}

export default MovieCard