import React, {useEffect, useState} from "react"
import "./Program.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Program(){
    const [programs, setPrograms] = useState([])
    
    useEffect(() =>{
        fetch("/programs")
        .then(res => {
            return res.json()
        })
        .then(data => {
            setPrograms(data)
        })
    }, [] )
 return(
 
    
     <div className="program">
         <div className="panel-container">
             {programs.map(program => {
                 
                 return(
                    <div className="panel" key={program.id}>
                    <img src={program.image}/>
                    <div className="panel-name">
                    <h3>{program.name}</h3>
                    <FontAwesomeIcon icon={faPlus} className="icon"/>
                    <p>Time: {program.duration} minutes</p>
                    </div>
                    
                    <p className="description">
                        {program.description}
                    </p>
                </div>
                     
                 )
                 })}
             
         </div>

     </div>
 )
}

export default Program