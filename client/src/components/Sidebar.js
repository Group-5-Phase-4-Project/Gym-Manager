import React from "react"
import "./Sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'


function Sidebar(){
    return(
        <div className="sidebar">
            <div className="logo">
            <h1>Just Gym-It <FontAwesomeIcon icon={faDumbbell}/></h1>
            
            </div>
            
            <p>Home</p>
            <p>Programs</p>
            <p>Trainers</p>
            <p>Reviews</p>

        </div>
    )
}

export default Sidebar