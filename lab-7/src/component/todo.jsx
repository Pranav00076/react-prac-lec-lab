import { useState,useEffect, use } from "react";

function Li({inp, keyt}){
    let [styling,setStyling] = useState("none")
    return(
        <li style={{textDecoration:styling}} key={keyt}>
            <input type="checkbox" onClick={()=>{styling=="none" ? setStyling("line-through") : setStyling("none")}} />
            <span>{inp}</span>
        </li>
    )

}

export default function Ex(){
    const [inp,setInp] = useState("")
    const [tasks,settasks] = useState([])

    function addTask(){
        let copyarr = [...tasks]
        copyarr.push(<Li inp = {inp} key={copyarr.length}/>)
        settasks(copyarr)
    }

    return (
        <div>
            <h1>ToDo App</h1>
            <div>
                <input type="text" value={inp} onChange={(e)=>setInp(e.target.value)} />
                <button onClick={()=>{addTask(); setInp("")}} >Add</button>
            </div>
            <ul>
                {tasks}
            </ul>
           
        </div>
    )

}