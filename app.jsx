import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/Header.jsx"
import Main from "./src/Main.jsx"

let siteWidth = 1280;
let scale = screen.width /siteWidth;

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

function App(){
    return(
        <div>
            <Header/>
            <Main />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)