import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Reviews = ({props}) => {
    const [review, setReview] = useState()
    const { id, userName } = useSelector(state => state.Auth);
    const [reviews, setReviews] = useState([])
    console.log(props)
    const getReviews = async () => {
        const data = await fetch(`/api/reviews/${props}`)
        if (data.ok) {
            const { reviewsArr } = await data.json()
            const readyReviews = reviewsArr.map(rev => {
            return {...rev, createdAt: rev.createdAt.split(":").slice(0,1).join(":").slice(0,10)}
            })
            setReviews(readyReviews)
        }
    }
    useEffect(() => {
        getReviews()
    }, [])

    const handleChange = (e) => {
        setReview(e.target.value)
    }

    const handleSubmit = async () => {
        const data = { userId: id, roomId: props, review }
        const send = await fetch('/api/reviews/new', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        if (send.ok) {
            console.log('NICE')
        }
    }

    return (
        <div className="reviews-container">
            <div className="reviews-form-container">
                <form className="reviews-form" onSubmit={handleSubmit}>
                    <textarea className="reviews-form-textarea" 
                    value={review} onChange={handleChange} placeholder="Write your review...">
                    </textarea>
                    <button className="reviews-form-submit-button" type="submit">Submit</button>
                </form>
            </div>
            <div className="reviews-review-container">
                {reviews.map(rev => 
                    <div className="review-container">
                        <p className="review-date">{rev.createdAt}</p>
                        <div className="review-review-container">
                            <p className="review-review">{rev.review}</p>
                        </div>
                        <p className="review-user-name">{`by ${rev.User.userName}`}</p>
                    </div>    
                )}
            </div>
        </div>
    );
};

export default Reviews