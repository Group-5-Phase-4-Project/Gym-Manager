import React, { useState, useEffect } from "react"
import "./Review.css"


function Review() {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("/reviews")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div className="review">
            {reviews.map(review => {
                return (
                    <div className="review-card">
                        <div className="review-profile">
                            <img className="review-img" src="https://images.pexels.com/photos/6533881/pexels-photo-6533881.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
                            <h3 className="review-name">{review.name}</h3>
                        </div>
                        <div className="review-text">
                            <p>{review.body}</p>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Review