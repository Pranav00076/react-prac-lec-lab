import React, { useState } from "react";

function Child({pickColor}){
    let [value,setValue] = useState("grey")
    return(
        <div>
            <h2 style={{backgroundColor:value}}>Hello</h2>
            <button onClick={()=>{
                setValue(value == "grey" ? "blue" : "grey")
                pickColor(value)
            }}>
                Give
            </button>
        </div>
    )
}

export default Child