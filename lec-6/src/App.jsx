// import {useState} from 'react';


// const LoginForm = () => {
//   let [user,setUser] = useState("")
//   let [passw,setPassw] = useState("")
  
//   const handleUser = (event) => {
//     setUser(event.target.value);
//   };
//   const handlePass = (event) => {
//     setPassw(event.target.value);
//   };

//   return (
//     <div>
//       <h3>{`User: ${user} | pass: ${passw}`}</h3>
//       <input id="username" type="text" value={user} onChange={handleUser} />
//       <input id="password" type="password" value={passw} onChange={handlePass} />
//       <button id="submit" onClick={()=>{console.log(`Username: ${user}, Password: ${passw}`)}}>Submit</button>
//     </div>
//   );
// };

// export default LoginForm;

import { useState } from "react"

// export default function Search(){
//     const [inputval,setInputval] = useState("")
//     const fruits = ["Apple", "Banana", "kiwi", "pineapple"]

//     let filterarr = fruits.filter(fruit => fruit.toLowerCase().includes(inputval.toLowerCase()))
//     let newarr = filterarr.map((x,idx)=><li key={idx}>{x}</li>)

//     return (
//         <div>
//             <input type="text" onChange={(e) => setInputval(e.target.value)} />
//             <ul>
//                 {newarr}
//             </ul>
//         </div>
//     )

// }


export default function PassWord(){
  const [inpval,setInpval] = useState("")
  const [lower,setLower] = useState("❌")
  const [upper,setUpper] = useState("❌")
  const [num,setNum] = useState("❌")
  const [len,setlen] = useState("❌")

  function check(e){
    setInpval(e.target.value)
    for (let i = 0; i<e.target.value.lenght; i++){
      inpval[i] >= "A" && inpval <= "Z" ? setUpper("✅") : setUpper("❌")
      inpval[i] >= "a" && inpval <= "z" ? setLower("✅") : setLower("❌")
      inpval[i] >= "0" && inpval <= "9" ? setNum("✅") : setNum("❌")
      inpval.length > 8 ? setlen("✅") : setlen("❌")
    }
    console.log(inpval)
  }

  return (
    <div>
      <input onChange={check} />
      <p>{`lower : ${lower}`}</p>
      <p>{`upper : ${upper}`}</p>
      <p>{`num : ${num}`}</p>
      <p>{`len : ${len}`}</p>
    </div>
  )

}

