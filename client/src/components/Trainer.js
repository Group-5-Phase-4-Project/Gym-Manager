
import React, { useState, useEffect } from "react"
import "./Trainer.css"


function Trainer() {
    const [trainers, setTrainers] = useState([])
    
    useEffect(() =>{
        fetch("/trainers")
        .then(res => {
            return res.json()
        })
        .then(data => {
            setTrainers(data)
        })
    }, [] )

    return (
        <div className="trainer">
            {trainers.map(trainer => {
                return(
                    <div className="trainer-card">
                    <div className="trainer-profile">
                        <div className="trainer-image">
                            <img src="https://images.pexels.com/photos/7991680/pexels-photo-7991680.jpeg?auto=compress&cs=tinysrgb&w=400" />
                        </div>
                        <h2>{trainer.name}</h2>
                        <p className="trainer-specialty">{trainer.specialization}</p>
                    </div>
                    <div className="trainer-bio">
                        <p>{trainer.background}</p>
                        <div className="trainer-trainees">
                        <h4>Trainees:</h4>
                        <p>{trainer.no_of_trainees}</p>
                        </div>
                        
                    </div>        
                </div>

                )
            })}
           
        </div>
    )
}

export default Trainer