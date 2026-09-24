import React,{useState} from "react";

export default function Search(){
    const [inputval,setInputval] = useState("")
    const fruits = ["Apple", "Banana", "kiwi", "pineapple"]

    let filterarr = fruits.filter(fruit => fruits.toLowerCase.includes(inputval.toLowerCase))
    filterarr.map((x,idx)=><li key={idx}>{x}</li>)

    return (
        <div>
            <input type="text" onChange={(e) => setInputval(e.target.value)} />
            <ul>
                {filterarr}
            </ul>
        </div>
    )

}
