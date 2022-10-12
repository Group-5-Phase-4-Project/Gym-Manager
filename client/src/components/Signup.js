import React from "react"
import "./Signup.css"

function Signup(){
    return(
        <div className="signup">
            <div className="container">
                <div className="left" style={{ backgroundImage: `url("https://images.pexels.com/photos/4944311/pexels-photo-4944311.jpeg?auto=compress&cs=tinysrgb&w=400")` }} >
                    <div className="left-blur">
                        <h2>Just Gym-It</h2>
                        <h3>Sign Up Here</h3>
                        <form>
                        <input type="text" placeholder='First name' value={signupDetails.first_name} name="first_name" onChange={handleChange}></input>
                         <input type="password" placeholder='Password' required value={signupDetails.password} name="password" onChange={handleChange}></input>
                        <input type="password" placeholder='Confirm Password' required value={confirmPassword} name="confirm_password" onChange={handleConfirm} onBlur={handleCheckMatch}></input>
                        <input type="text" placeholder='City' required value={signupDetails.city} name="city" onChange={handleChange}></input>
                        <input type="text" placeholder='Field of Work' value={signupDetails.job} name="job" onChange={handleChange}></input>
                        <input type="date" value={signupDetails.birth} name="birth" onChange={handleChange} />
 

                        </form>
                    </div>

                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}
export default Signup