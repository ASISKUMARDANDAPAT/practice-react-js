import React from 'react'
import { cardData } from './Card_data'
import './Cards.css'

const Cards = () => {
  return (
   <>
     <div className="
     ">
      <h1>ANIMAL IMAGES</h1>
      </div>
      <div className="card">
        {
          cardData.map((elem)=>{
            let {id,title,description,image} = elem
            return(
              <>
               <div className="box">

                <div className="child-1">
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <img src={image} alt/>

                </div>
                
               </div>
              </>
            )
          })
        }
      </div>
    
   </>
  )
}

export default Cards