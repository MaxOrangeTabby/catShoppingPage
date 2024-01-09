import React from "react"
import { BrowserRouter as Router,Routes, Route} from "react-router-dom"
import ReactDOM from "react-dom/client"
import Main from "./src/Main.jsx"
import ShoppingPage from "./pages/shoppingPage.jsx"
import LoginPage from "./pages/loginPage.jsx"


let siteWidth = 1280;
let scale = screen.width /siteWidth;

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');


function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/shopping-page" element={<ShoppingPage />} />
                <Route path="/login-page" element={<LoginPage />} />
            </Routes>
    </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)