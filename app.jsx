import React from "react"
import ReactDOM from "react-dom"
import Header from "./src/Header.jsx"


function App(){
    return(
        <div>
            <Header/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)