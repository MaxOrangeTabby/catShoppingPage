import React from "react"

export default function LoginPage(){
    return(
        <div className = "login-page">
            <div className = "login-box">
                <form className = "login-form">
                    <input type="text"/>
                    <input type="text"/>
                </form>
                <button>Login</button>
            </div>
        </div>
        
    )
}