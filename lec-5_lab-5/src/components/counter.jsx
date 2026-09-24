import React,{ useState } from "react";

function Counter(prop){
  let [num,setNum] = useState(prop.initial ? prop.initial : 0)

  function increment(){
    setNum(++num)
  }
  function decrement(){
    setNum(--num)
  }
  function reset(){
    setNum(prop.initial)
  }

  return (
    <div>
      {`${prop.label ? prop.label : "Counter1"} : ${num}`}<br></br>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter