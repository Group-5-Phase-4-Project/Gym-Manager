import React, {useEffect, useState} from "react"
import "./Program.css"

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
                    <h3>{program.name}</h3>
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