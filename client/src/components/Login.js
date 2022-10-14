import React from "react"
import "./Login.css"

function Login() {
    return (
        <div className="login">
            <div className="left-login">
                <div className="left-login-container">
                    <h1>Just Gym-It</h1>
                    <form>
                        <input type="text" placeholder="Username" name="name" />
                        <input type="password" placeholder="Password" name="password" />
                        <button className="signup-btn">Login</button>
                    </form>
                    <p >Sign Up Here</p>
                </div>
            </div>

            <div className="right-blur">
                <div className="right-container">
                    <div className="right-text">
                        <span>“</span>
                        
                    </div>

                    <div className="right-text-login">
                        <p>Sign In Here</p>
                    </div>

                </div>
            </div>


        </div>

    )
}

export default Login