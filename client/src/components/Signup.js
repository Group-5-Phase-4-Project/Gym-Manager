import React, {useState, useEffect} from "react"
import "./Signup.css"
import { quotes } from "./data"
import { useHistory } from "react-router-dom"

function Signup() {
    let history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        history.push("/home/main")
    }
    

    return (
        <div className="signup" style={{ backgroundImage: `url("https://images.pexels.com/photos/4944311/pexels-photo-4944311.jpeg?auto=compress&cs=tinysrgb&w=400")` }} >

            <div className="left-blur" >
                <div className="left-container">
                    <h1>Just Gym-It</h1>
                    
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Username" name="username" />
                        <input type="password" placeholder="Password" name="password" />
                        <select name="gender">
                            <option value="">--Select gender--</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <select name="age">
                            <option value="">--Select age--</option>
                            <option value="18-25">18-25</option>
                            <option value="26-35">26-35</option>
                            <option value="36-45">36-45</option>
                            <option value="46 and above">46 and above</option>
                        </select>
                        <select name="weight">
                            <option value="">--Select weight--</option>
                            <option value="18-25">18-25</option>
                            <option value="26-35">26-35</option>
                            <option value="36-45">36-45</option>
                            <option value="46 and above">46 and above</option>
                        </select>
                        <select name="height">
                            <option value="">--Select height--</option>
                            <option value="18-25">18-25</option>
                            <option value="26-35">26-35</option>
                            <option value="36-45">36-45</option>
                            <option value="46 and above">46 and above</option>
                        </select>
                        <button className="signup-btn">Sign Up</button>
                       
                    </form>
                </div>
            </div>
            <div className="right-blur">
                <div className="right-container">
                    <div className="right-text">
                    <span>“</span>
                    <h2>{quotes[Math.floor(Math.random() * quotes.length)]}</h2>
                    </div>

                    <div className="right-text-login">
                        <p>Sign In Here</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Signup