import React from "react";
import Child from "./Child";

function Parent(){
    function pickColor(s){
        console.log(s)
    }
    return (
        <div>
            <h1>Child</h1>
            <Child pickColor={pickColor} />
        </div>
    )
}

export default Parent