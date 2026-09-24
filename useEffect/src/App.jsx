import { useState,useEffect } from 'react'
import Timer from './components/timer'
import Pprompt from './components/promptforgecore'

function App(){
  return Pprompt
}

// function App(){
//   let [ui,setUI] = useState([])
//   let [loading,setLoading] = useState(true)
//   let [error,setError] = useState(false)

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json()) 
//       .then(json => {
//         setLoading(false)
//         return json.slice(0,5)
//       })
//       .then(json => json.map((x,idx) => <li key={idx}>{x.title}</li>)) 
//       .then(data => setUI(data))
//       .catch(err => {
//         setError(true)
//         console.log(err)
//       })
//   },[])
//   if (loading) return <p>loading....</p>
//   if (error) return <p>Error</p>
//   return(
//     <div>
//       <ul>
//         {ui}
//       </ul>
//     </div>
//   )
// }

/////////////////////////////////////////////////////////////////

// function Child(){
//   let [count,setCount] = useState(0)
//   useEffect(()=>{
//     let val = setInterval(()=>{
//     console.log("interval runing")
//     setCount(count => count + 1)
//   },1000)
//   return () => {clearInterval(val)}  // interval runs only when true not when false
//   },[])
  
//   return <h1>Child: {count}</h1>
// }

// function App(){
//   const [toggle,setToggle] =useState(false)
//   return(
//     <div>
//       {toggle&&<Child/>}
//       <button onClick={()=>{setToggle(!toggle)}}>Toggle</button>
//     </div>
    
//   )
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// function App() {
//   const [flag,setFlag] = useState(false)
//   const [visi,setVisi] = useState("hidden")
  
//   function inter(){
//     setTimeout(() => {
//       setFlag(!flag)
//     }, 4000);
//   }

//   return(
//     <div>
//       <div style={{backgroundColor:"black", height:"100px", width:"100px", visibility: flag ? "visible" : "hidden", marginBottom:"50px"}}></div>
//       <button onClick={()=>{setFlag(!flag); inter()}}>Click me Ahhh!</button>
//     </div>
//   )
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// function App() {

//   const [val,setVal] = useState(false)

//   console.log(1);

//   useEffect(()=>{
//     console.log(2)
//     return ()=>{console.log(3)}
//   },[val])
//   console.log(4)

//   return (
//     <>
//       <button onClick={()=>{setVal(!val)}}>click</button>
//     </>
//   )
// }

export default App
