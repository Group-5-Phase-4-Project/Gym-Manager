import React from "react"
import "./Sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom"


function Sidebar(){
    let history = useHistory()

    function handleProgram(){
       history.push("/home/program") 
    }
    function handleReview(){
        history.push("/home/review") 
     }
     function handleTrainer(){
        history.push("/home/trainer") 
     }
    return(
        <div className="sidebar">
            <div className="logo">
                <h1>Just Gym-It <FontAwesomeIcon icon={faDumbbell}/></h1>
            </div>
            <div className="options">
                <h3>Home</h3>
                <div className="stick"></div>
                <h3 onClick={handleProgram}>Programs</h3>
                <div className="stick"></div>
                <h3 onClick={handleTrainer}>Trainers</h3>
                <div className="stick"></div>
                <h3 onClick={handleReview}>Reviews</h3>
                <div className="stick"></div>
                <h3>Logout</h3>
            </div>  
        </div>
    )
}

export default Sidebar