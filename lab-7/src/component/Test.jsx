import React, { useState } from 'react'

export const Test = () => {
    const [state,setState] = useState(0)
  return (
    <>
        <h1>{state}</h1>
        <button onClick={()=>{
            setState(state=>state+1)
            setState(state=>state+1)
        }}>+2</button>
    </>
  )
}
