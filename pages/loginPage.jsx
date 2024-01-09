import React from "react"

export default function LoginPage(){
    const[loginInfo, setLoginInfo] = React.useState({
        username: "",
        password: ""
    })

    return(
        <div className = "login-page">
            <div className = "login-box">
                <div className = "login-header">
                    <div className = "login-header-logo">
                        <img src = "../images/logo.png"/>
                    </div>
                    <h1> Sign In To Account</h1>
                </div>
                <form className = "login-form">
                    <input type="text" name = "username" id = "username"/>
                    <input type="text" name = "password" id = "password"/>
                </form>
                <button>Login</button>
            </div>
        </div>
        
    )
}