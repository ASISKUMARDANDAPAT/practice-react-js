import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
  let name = 'React'
  return (
    <div>
      <h1>hi i am from componentA</h1>
        <ComponentB Name={name}/>
    </div>
  )
}

export default ComponentA