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
            <div className="options">
                <h3>Home</h3>
                <div className="stick"></div>
                <h3>Programs</h3>
                <div className="stick"></div>
                <h3>Trainers</h3>
                <div className="stick"></div>
                <h3>Reviews</h3>
            </div>  
        </div>
    )
}

export default Sidebar