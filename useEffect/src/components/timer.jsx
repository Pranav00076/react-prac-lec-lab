import { useEffect, useEffectEvent, useState } from "react";

export default function Timer(){
    const [show,setShow] = useState(false)
    console.log(show)
    return (
        <div>
            {show && <TimerText />}
            <button onClick={()=>{setShow(!show)}}>Show Text</button>
        </div>
    )
}

function TimerText(){
    useEffect(()=>{
        console.log("Mounting...")
        return () => console.log('Unmounting...')
    },[])
    return (
        <h1>React Timer</h1>
    )
}