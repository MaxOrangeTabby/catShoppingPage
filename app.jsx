import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/Header.jsx"
import Main from "./src/Main.jsx"


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