import React from "react"
import "./Home.css"


function Home() {
    return (
        <div className="home" style={{backgroundImage: `url("https://images.pexels.com/photos/7991666/pexels-photo-7991666.jpeg?auto=compress&cs=tinysrgb&w=400")`}}>
            <div className="home-blur">
                <div className="home-container">
                    <h1 className="one">Welcome,</h1>
                    <h1 className="two">Precious</h1>

                </div>
            
            </div>
        </div>
    )
}

export default Home