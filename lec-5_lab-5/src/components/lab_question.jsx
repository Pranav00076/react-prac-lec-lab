import { use, useState } from "react";

export default function Tasks(){
    let arr = [
        { id: 1, title: "Learn React", completed: false },
        { id: 2, title: "Practice JS", completed: false },
        { id: 3, title: "Build Project", completed: false }
        ]
    let [array,setArray] = useState(arr)
    let arr2 = array.map((obj,idx)=>{
        return(<li key={idx}>{`${obj.title} - ${obj.completed ? "Completed" : "Pending"}`}</li>)
    })

    function change(){
        let arr3 = [...array].map(obj => {
            let obj2 = {...obj}
            obj2["completed"] = obj.completed ? false : true
            return obj2
        })

        setArray(arr3)
    }
    return (
        <div>
            <ul>{arr2}</ul>
            <button onClick={change}>Change</button>
        </div>
    )

        
}