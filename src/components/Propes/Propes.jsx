import React from 'react'
import Child from './child'


const Propes = () => {
    let fnm = 'Heyee   Murkh'
    let lnm = ' Apni chhabi Sudhar'
    let num = 420
  return (
    <>
    <h2>Welcome to propes..</h2>
    <Child fname={fnm} lname ={lnm} count={num}/> 
   
    </>
  )
}

export default Propes