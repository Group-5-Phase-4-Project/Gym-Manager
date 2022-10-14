
import React, { useState, useEffect } from "react"
import "./Trainer.css"
import {femaleUrls, maleUrls} from "./data.js"


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
                            <img src={trainer.name === "Maria" || trainer.name == "Kefiya" || trainer.name == "Zara" || trainer.name == "Arya" ? femaleUrls[Math.floor(Math.random() * femaleUrls.length)]: maleUrls[Math.floor(Math.random() * maleUrls.length)]} />
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