import { useState } from "react"

function Coordinates(){
    let [coord,setCoord] = useState({x:0,y:0,z:0})
    function changeX(){
        let coord2 = {...coord}
        coord2["x"] += 1
        setCoord(coord2)
    }
    function changeY(){
        let coord2 = {...coord}
        coord2["y"] += 1
        setCoord(coord2)
    }
    function changeZ(){
        let coord2 = {...coord}
        coord2["z"] += 1
        setCoord(coord2)
    }
    function inpChangeX(event){
        let coord2 = {...coord}
        coord2["x"] = parseInt(event.target.value)
        setCoord(coord2)
    }
    function inpChangeY(event){
        let coord2 = {...coord}
        coord2["y"] = parseInt(event.target.value)
        setCoord(coord2)
    }function inpChangeZ(event){
        let coord2 = {...coord}
        coord2["z"] = parseInt(event.target.value)
        setCoord(coord2)
    }

    return (
        <div>
            <h4>Coordinates</h4>
            <h4>{`X : ${coord.x} - Y : ${coord.y} - Z : ${coord.z}`}</h4>
            <input onChange={inpChangeX} value={coord.x} />
            <button onClick={changeX}  >Change X+</button><br />
            <input onChange={inpChangeY} value={coord.y} />
            <button onClick={changeY}  >Change Y+</button><br />
            <input onChange={inpChangeZ} value={coord.z} />
            <button onClick={changeZ}  >Change Z+</button><br />

        </div>
    )
}

export default Coordinates