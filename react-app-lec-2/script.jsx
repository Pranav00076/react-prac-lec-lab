import {createRoot} from "react-dom/client"

// let Header = (props) => {
//     return (
//         <div>
//             <h1 className="header" onClick={()=>{console.log("Hello World")}}> {props.title} Page has {props.readers} Pages</h1>
//         </div>
        
//     )
// }

let Header = ({ title, readers }) => {
    return (
        <div>
            <h1 className="header" onClick={()=>{console.log("Hello World")}}> {title} Page has {readers} Pages</h1>
        </div>
        
    )
}

let a = (
    <div>
        <Header title="Home" readers="100"/>
        <Header title="About" readers="1000"/>
        <Header title="Contact" readers="1009"/>
    </div>
)

createRoot(document.getElementById("box")).render(a)