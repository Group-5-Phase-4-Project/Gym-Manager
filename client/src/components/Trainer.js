
import React, { useState, useEffect } from "react"
import "./Trainer.css"


function Trainer() {

    return (
        <div className="trainer">
            <div className="trainer-card">
                <div className="trainer-profile">
                    <div className="trainer-image">
                        <img src="https://images.pexels.com/photos/7991680/pexels-photo-7991680.jpeg?auto=compress&cs=tinysrgb&w=400" />
                    </div>
                    <h2 className="trainer-name">Marlin</h2>
                    <p className="trainer-specialty">Calisthenics</p>
                </div>
                <div className="trainer-bio">
                    <p>An expert with 4 years experience in Yoga and martial arts</p>
                    <div className="trainer-trainees">
                    <h4>Trainees:</h4>
                    <p>2</p>
                    </div>
                    
                </div>        
            </div>
        </div>
    )
}

export default Trainer