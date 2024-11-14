import React from 'react'
import ComponentD from './componentD'

const ComponentC = ({MyName,place}) => {
  return (
    <><h1>hi i am from componentC:{MyName}  {place}</h1>
        <ComponentD MyName1={MyName}/>

    </>
  )
}

export default ComponentC