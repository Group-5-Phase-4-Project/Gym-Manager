import React, { useState } from "react"
import "./Signup.css"
import { quotes } from "./data"
import { useHistory } from "react-router-dom"


function Signup({ getUser }) {
    const [signupDetails, setSignupDetails] = useState({ name: "", password: "", age: "", gender: "", weight: "", height: "" })
    let history = useHistory()

    const handleChange = (e) => {
        setSignupDetails(sign => ({ ...sign, [e.target.name]: e.target.value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        const serverOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signupDetails)
        }
        fetch(`/signup`, serverOptions)
            .then(r => {
                if(r.ok){
                    r.json().then(getUser)
                    history.push("/home/main")
                }else {
                    r.json().then(console.log)
                }
            })
           
    }

    function handleLoggingIn(e){

        history.push("/")
    }




    return (
        <div className="signup" style={{ backgroundImage: `url("https://images.pexels.com/photos/4944311/pexels-photo-4944311.jpeg?auto=compress&cs=tinysrgb&w=400")` }} >

            <div className="left-blur" >
                <div className="left-container">
                    <h1>Just Gym-It</h1>

                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Username" name="name" value={signupDetails.name} onChange={handleChange} required/>
                        <input type="password" placeholder="Password" name="password" onChange={handleChange} required/>
                        <input type="text" placeholder="Age" name="age" value={signupDetails.age} onChange={handleChange} required/>
                        <input type="text" placeholder="Gender" name="gender" value={signupDetails.gender} onChange={handleChange} required/>
                        <input type="text" placeholder="Height in cm" name="height" value={signupDetails.height} onChange={handleChange} required/>
                        <input type="text" placeholder="Weight in kgs" name="weight" value={signupDetails.weight} onChange={handleChange} required/>
                        <button className="signup-btn">Sign Up</button>
                    </form>
                 
                </div>

               
            </div>
            <div className="right-blur">
                <div className="right-container">
                    <div className="right-text">
                        <span>???</span>
                        <h2>{quotes[Math.floor(Math.random() * quotes.length)]}</h2>
                    </div>

                    <div className="right-text-login">
                        <p onClick={handleLoggingIn}>Sign In Here</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Signup