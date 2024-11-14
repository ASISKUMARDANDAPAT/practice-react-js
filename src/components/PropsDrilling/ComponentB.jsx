import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = ({Name}) => {
  return (
    <> <h1>hi iam from componenetB : {Name}</h1>
        <ComponentC MyName={Name}/>
    </>
  )
}

export default ComponentB