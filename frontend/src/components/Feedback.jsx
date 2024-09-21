import React, { useState } from 'react';
import '../styles/Feedback.css';
import api from '../api';
import { useNavigate } from 'react-router-dom';
export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [description, setDescription] = useState("")
  const [user, setUser] = useState("")
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    e.preventDefault();
    try {
      const rateapi = {
        rating, description, user 
      };
      const res = await api.post('/api/v1/auth/feedback/', rateapi);
   
      
    } catch (error) {
      console.log("Failed " + error.message);
    } finally {
    
      setLoading(false)
      navigate("/mp");
    }
  };
  return (
    <div className="feedback-cont">
      <form onSubmit={handleSubmit}>
        <div className="fb-title">
          <div className='fb-tit'>
          Feedback 
          </div>
          <div className='rate-user'>Rate @cupidmess:</div>
          <div className="star-rating">
            <div className="stars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                      style={{ display: 'none' }} // Hiding radio input
                      className='rate-it-1'
                    />
                    <span
                      className={`star ${ratingValue <= (hover || rating) ? 'filled' : ''}`}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                    >
                      ★
                    </span>
                  </label>
                );
              })}
            </div>
            <div className="rate">Your rating: {rating} stars</div>
          </div>
          <div className='rating-input'>
            <div className='rate-cmt'>
              Comments, if any?
            </div>
            <div className='inputs-cmt'>
            <input 
            className='cmt-input'
            type = 'text'
            value = {description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <input 
            className='cmt-input-2'
            type = 'text'
            value = {user}
            onChange={(e) => setUser(e.target.value)}
            />
            </div> 
            <div className='rate-but'>
              <button className='rate-but-1'>Remind me later</button>
              <button className='rate-but-2' type = 'submit'>Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}