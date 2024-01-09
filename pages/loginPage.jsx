import React from "react"

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
                    <div className = "login-header-logo">
                        <img src = "../images/logo.png"/>
                    </div>
                    <h1> Sign In To Account</h1>
                </div>
                <form className = "login-form">
                    <input type="text" name = "username" id = "username" value = {loginInfo.username} onChange = {formChange}/>
                    <input type="text" name = "password" id = "password" value  = {loginInfo.password} onChange = {formChange}/>
                </form>
                <button>Login</button>
            </div>
        </div>
        
    )
}