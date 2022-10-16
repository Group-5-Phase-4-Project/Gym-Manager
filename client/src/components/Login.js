import React, { useState } from "react"
import "./Login.css"
import {quotes} from "./data"
import { useHistory } from "react-router-dom"

function Login({getUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
   
    let history = useHistory()
    function handleLogin(e){
        e.preventDefault()
        fetch("/login", {
           "method": "POST",
           "headers": {"Content-Type": "application/json"},
           "body": JSON.stringify({
               name: username,
               password: password
           })
        }).then(r => {
            if(r.ok){
                r.json().then(getUser)
                history.push("/home/main")
            }
        })

    }

    
    function handleSignup(){
        history.push("/signup")
    }

    return (
        <div className="login" style={{ backgroundImage: `url("https://images.pexels.com/photos/4944311/pexels-photo-4944311.jpeg?auto=compress&cs=tinysrgb&w=400")` }}>
            <div className="left-login">
                <div className="left-login-container">
                    <h1 >Just Gym-It</h1>
                    <form onSubmit={handleLogin}>
                        <input type="text" placeholder="Username" value={username}  onChange={(e)=> setUsername(e.target.value)}  autoComplete="off" required/>
                        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                        <button className="signup-btn">Login</button>
                    </form>
                    <p onClick={handleSignup}>Sign Up Here</p>
                </div>
            </div>

            <div className="right-blur">
                <div className="right-container">
                    <div className="right-text">
                        <span>“</span>
                        <h2>{quotes[Math.floor(Math.random() * quotes.length)]}</h2>
                        
                    </div>

                   

                </div>
            </div>


        </div>

    )
}

export default Login