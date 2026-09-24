import { createRoot } from "react-dom/client";
import "./style.css"
// const root = createRoot(document.getElementById("root"));

// function Header(){
//   return (
//     <h1 style={{
//       position: "fixed",
//       top: "0px",
//       width: "100vw",
//       textAlign: "center"
//     }}>
//       Memes App
//     </h1>
//   );
// }

// function renderApp(memes = []) {
//   root.render(
//     <div>
//       <Header />
//       <div style={{ marginTop: "80px" }}>
//         {memes.map((meme, i) => (
//           <div key={i}>
//             <h3>{meme.title}</h3>
//             <img src={meme.url} width="300" />
//             <p>{meme.ups}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// fetch("https://meme-api.com/gimme/wholesomememes/5")
//   .then(res => res.json())
//   .then(data => {
//     renderApp(data.memes); // 
//   });



// import { createRoot } from "react-dom/client";

// function Header(){
//   return(
//   <>
//   <div>
//   <h1 style={{position: "fixed",top: "0px",width: "100vw",textAlign: "center"}}>Memes App</h1>
//   </div>
//   </>
//   )
// }

// function App(){
//   fetch("https://meme-api.com/gimme/wholesomememes/5")
//   .then(x=>x.json())
//   .then(data => {
//     data.memes.map(meme => {
//       return (
//         <div>
//           <h3>{meme.title}</h3>
//           <img src={meme.url}> </img>
//           <p>{meme.ups}</p>
//         </div>
//       )
//     })
//     return {data}
//   })
//   .then(x=>console.log(x))
// }

// let a = ()=>{
//   return (
//       <div className="App">
//         {<Header />}
//         {<App />}
//       </div>
//     )
// }
// let b = a()


// createRoot(document.getElementById("root")).render(
//   fetch("https://meme-api.com/gimme/wholesomememes/5")
//   .then(x=>x.json())
//   .then(data => {
//     data.memes.map(meme => {
//       return (
//         <div>
//           <h3>{meme.title}</h3>
//           <img src={meme.url}> </img>
//           <p>{meme.ups}</p>
//         </div>
//       )
//     })
//     return data
//   })
// );


// async function GetData(url) {
//   try{
//     let res = await fetch(url);
//     let data = res.json()
//     let str = Object.keys(data)
//     console.log(str)
//     return str
//   }
//   catch(err){
//     return err
//   }
// }
// let a = [GetData("https://anapioficeandfire.com/api/books/1")]
// createRoot(document.getElementById("root")).render(a);


//JSX -> Javascript Syntax Extension

// let a = <h1>I am batman</h1>;
// let superhero = "superman";
// let age = 30;
// let a = (
//   <div>
//         
//     <h1>
//       {superhero + "!"}
//       {1 + 1}
//       {2 * 3} {50}
//     </h1>
//         <h1>my age is {age + 100}</h1>
//         <h1>I am batman</h1>
//         <h2>I am superman</h2>
//         
//     <ul>
//       <li>I am spiderman</li>
//             <li>I am ironman</li>
//           
//     </ul>
//       
//   </div>
// );

//vite converts this JSX code into normal JavaScript code using babel
//babel is a JavaScript compiler that converts modern JavaScript code into a version that is compatible with older browsers.
//It also converts JSX syntax into regular JavaScript function calls.

// let obj = {
//   name: "Bruce Wayne",
//   actualName: "batman",
//   skill : "Iam rich"
// }
// let a = (
//   <div>
//     {obj.name}
//   </div>
// )

// let greet = () => {
//   return "Hello world"
// }

// let isLoggedIn = true
//  let a = (
//   <div>
//     {isLoggedIn ? "Success" : "Shit"}
//   </div>
// )

// let isLoggedIn = true
// let a  = (
//   <div>
//     {isLoggedIn}
//     {true}
//     {undefined}
//   </div>
// )


// let a = (
//   <div>
//     {<p>Hello</p>}
//   </div>
// )

// let arr1 = [1,2,3]
// let arr2 = ["batman", "shaktimaan", "Zeeshan"]
// let arr3 = [<p>Batman</p>,<p>Batman</p>,<p>Batman</p>]
// let arr4 = [<li>Batman</li>,<li>Batman</li>,<li>Batman</li>,<li>Batman</li>]
let arr5 = ["batman","zeeshan","shinchan","doraemon"]
let arr6 = arr5.map(x=><li>{x}</li>)
let a = (
  <div>
    <ul>{arr6}</ul>
  </div>
)

createRoot(document.getElementById("root")).render(a);
//what line 9 does is it takes the JSX element 'a' and renders it inside the HTML element with the id 'root'.

// let a = <h1>I am batman</h1> <h2>I am superman</h2>;
//cant do this, have to wrap them in a div or a fragment





  // async function getData() {
  //   try{
  //   let res = await fetch("https://meme-api.com/gimme/wholesomememes/5")
  //   let data = await res.json()
  //   let newdata = data.memes.map(meme => {
  //     return (
  //       <div>
  //         <h3>{meme.title}</h3>
  //         <img src={meme.url}> </img>
  //         <p>{meme.ups}</p>
  //       </div>
  //     )
  //   })
  //   }
  //   catch (err){
  //     return err
  //   }
  // }
  // return getData()