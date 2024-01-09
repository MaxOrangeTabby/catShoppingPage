import React from "react"
import {Link} from "react-router-dom"

export default function LoginPage(){
    const [loginInfo, setLoginInfo] = React.useState({
        username: "",
        password: ""
    })

    function formChange(event){
        const {name, value} = event.target

        setLoginInfo(prevInfo =>{
            return{
                ...prevInfo,
                [name]: value
            }
        })
    }

    return(
        <div className = "login-page">
            <div className = "login-box">
                <div className = "login-header">
                <Link to = "/shopping-page">
                    <button className = "login-header-back-btn">Back</button>
                </Link>
                    <div className = "login-header-logo">
                        <img src = "../images/logo.png"/>
                    </div>
                    <h1> Sign In To Account</h1>
                </div>
                <form className = "login-form">
                    <label for="username">Username</label>
                    <input type="text" name = "username" id = "username" value = {loginInfo.username} onChange = {formChange}/>
                    <label for="username">Password</label>
                    <input type="text" name = "password" id = "password" value  = {loginInfo.password} onChange = {formChange}/>
                </form>
                <button>Sign In</button>
            </div>
        </div>
        
    )
}