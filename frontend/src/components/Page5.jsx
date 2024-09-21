import React from 'react'
import {useNavigate} from "react-router-dom"
import { useState } from 'react';
import api from "../api";
import "../styles/Page5.css"
export default function Page5({route,method}) {
  const [skills_1,setSkill_1] = useState("")
  const [skills_2,setSkill_2] = useState("")
  const [skills_3,setSkill_3] = useState("")
  const [skills_4,setSkill_4] = useState("")
  const [skills_5,setSkill_5] = useState("")
  const [user,setUser] = useState("")
  const [loading, setLoading] = useState(false);
  const navigate= useNavigate()
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const payload = {
        skills_1, skills_2, skills_3, skills_4, skills_5,user
      };
      const res = await api.post(route, payload);
      navigate("/page6");
    } catch (error) {
      alert("Failed " + error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleBackClick = async(e) => {
    navigate("/page4")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className='body-05'>
      <div className="form-container-05">
      <div className="skill-entry-05">
        <div className="progress-indicator-05">3/3</div>
        <h2 className='h2-05'>Enter your skills.</h2>
        <div className="li-05"></div>
        <p className="description-05">
          Your skills show clients what you can offer, and help us choose which jobs to recommend to you. 
          Add or remove the ones we've suggested, or start typing to pick more. It's up to you.
        </p>
        
        <div className='label-05'> Your skills</div>
        <div className='input-boxes'>
        <input
          type="text"
          id="skills-05-1"
          className="skill-input-05-1"
          placeholder="Java"
          value={skills_1}
          onChange={(e) => setSkill_1(e.target.value)}
        />
        <input
          type="text"
          id="skills-05-2"
          className="skill-input-05-2"
          placeholder="Python"
          value={skills_2}
          onChange={(e) => setSkill_2(e.target.value)}
        />
        <input
          type="text"
          id="skills-05-3"
          className="skill-input-05-3"
          placeholder="CSS"
          value={skills_3}
          onChange={(e) => setSkill_3(e.target.value)}
        />
        <input
          type="text"
          id="skills-05-4"
          className="skill-input-05-4"
          placeholder="C++"
          value={skills_4}
          onChange={(e) => setSkill_4(e.target.value)}
        />
        <input
          type="text"
          id="skills-05-5"
          className="skill-input-05-5"
          placeholder="Digital Marketing"
          value={skills_5}
          onChange={(e) => setSkill_5(e.target.value)}
        />
        <input 
        type = "text"
        id = "skills-05-6"
        className='skill-input-05-6'
        value={user}
        onChange={(e) => setUser(e.target.value)}
        />
        </div>
      </div>

      <div className="suggestion-card-05">
        <div className="profile-05">
          <div className="profile-image-05">
          <img src="https://via.placeholder.com/40" alt="profile" />
          </div>
          <div className="profile-details-05">
            <h3>Angad Shinde</h3>
            <p>AI/ML Developer</p>
          </div>
        </div>
        <p className="suggestion-text-05">
          "BGD's algorithm will recommend specific job posts to you based on your skills. 
          So choose them carefully to get the best match!"
        </p>
      </div>

      {/* Bottom buttons */}
     
    </div>
      </div>
      <div className="form-buttons-05">
        <button className="back-button-05" onClick={handleBackClick}>Back</button>
        <button className="next-button-05"type='submit'>Next</button>
      </div>
      </form>
    </div>
    
  )
}