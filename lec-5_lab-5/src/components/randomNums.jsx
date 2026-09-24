import { useState } from "react";

function RandomNums(){
    let [arr,setArr] = useState([1,2])
    let arr6 = arr.map((x,idx)=><li key={idx}>{x}</li>)

    function GenRandom(){
        let arr2 = [...arr]
        arr2.push(Math.floor(Math.random()*10 + 1))
        setArr(arr2)
    }

    return (
        <div>
            <h4>Random Numbers</h4>
        <ul>{arr6}</ul>
        <button onClick={GenRandom}>Click</button>
        </div>
    )
}

export default RandomNums
