import React, { useState, useEffect } from "react"
import "./Review.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Program from "./Program";


function Review({}) {
    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState('');
    const [body, setBody] = useState('')

    useEffect(() => {
        fetch("/reviews")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setReviews(data)
            })
    }, [])

    // function handleChange(e){
    //     setReviews(sign => ({ ...sign, [e.target.name]: e.target.value }))

    // }

    function handlePost(e) {
        e.preventDefault()
        const serverOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                body: body,
            })
        }
        fetch(`/reviews`, serverOptions)
            .then(r => r.json())
            .then((review) => {
                setReviews((reviews) => [review, ...reviews]);
                setName('');
                setBody('')
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
function handleDelete(id){
    fetch(`/reviews/${id}`, {method: "DELETE"})
    .then(r => r.json())
    .then(()=> setReviews(reviews => reviews.filter(review => review.id !== id)))
    
}


    return (
        <div className="review">
            {reviews.slice(0,5).map(review => {
                return (
                    <div className="review-card" key={review.id}>
                        <div className="review-profile">
                            <img className="review-img" src="https://images.pexels.com/photos/6533881/pexels-photo-6533881.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
                            <h3 className="review-name">{review.name}</h3>
                        </div>
                        <div className="review-text">
                            <p>{review.body}</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faTrashCan} className="trashcan" onClick={() => handleDelete(review.id)}/>

                        </div>
                    </div>
                )
            })}

            

            <form className="review-form" onSubmit={handlePost}>
                <input type="text" placeholder="username" onChange={(e)=> setName(e.target.value)} value={name}/>
                <textarea placeholder="Add Review" onChange={(e) => setBody(e.target.value)} value={body}/> 
                <button className="review-button">Post Review</button>
            </form>

        </div>
    )
}

export default Review