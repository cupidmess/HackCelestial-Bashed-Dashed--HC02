import React from 'react'
import "../styles/Page7.css"
import { useState } from 'react'
import api from "../api";
import {useNavigate} from "react-router-dom"
export default function Page7() {
  const navigate = useNavigate()
  const [education_start,setStart_date] = useState("")
  const [loading, setLoading] = useState(false);
  const [education_end,setEnd_date] = useState("")
  const [education_type,setType] = useState("")
  const [degree_type,setDegree_type] = useState("")
  const [education_score,setScore] = useState("")
  const [dashboard,setDashboard] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    e.preventDefault();
    try {
      const exp = {
        education_start,education_end,education_type,degree_type,education_score, dashboard
      };
      const res = await api.post(route, exp);
   
      
    } catch (error) {
      console.log("Failed " + error.message);
    } finally {
    
      setLoading(false)
      navigate("/page8");
    }
  };
  const handleNextClick = async(e)=> {
    navigate("/page8")
  }
  const handleBackClick = async(e) => {
    navigate("/page6")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className='body-07'>
      <div className="experience-container-07">
      <div className="header-07">
        <span>3/3</span>
        <h2>Enter your educational details.</h2>
      </div>
      <hr className="Line-07"></hr>
      <div className='input-boxes-2'>
        <div className='in-p-top'>
        <div className='in-p-2'>
          Start Date
        <input
          type="text"
          id="skills-07-1"
          className="skill-input-07-1"
          placeholder="DD/MM/YYYY"
          value={education_start}
          onChange={(e) => setStart_date(e.target.value)}
        />
        </div>
        <div className='in-p-3'>
          End Date
        <input
          type="text"
          id="skills-07-n"
          className="skill-input-07-1"
          placeholder="DD/MM/YYYY"
          value={education_end}
          onChange={(e) => setEnd_date(e.target.value)}
        />
        </div>
        </div>
        <div className='in-p-mid'>
        <div className='in-p-4'>
          Education Type
        <input
          type="text"
          id="skills-07-2"
          className="skill-input-07-2"
          placeholder="Type"
          value={education_type}
          onChange={(e) => setType(e.target.value)}
        />
        </div>
        <div className='in-p-4'>
          Degree Type
        <input
          type="text"
          id="skills-07-3"
          className="skill-input-07-3"
          placeholder="Degree"
          value={degree_type}
          onChange={(e) => setDegree_type(e.target.value)}
        />
        </div>
        </div>
        <div className='in-p-5'>
          Location
        <input
          type="text"
          id="skills-07-4"
          className="skill-input-07-4"
          placeholder="Location"
          value={education_score}
          onChange={(e) => setScore(e.target.value)}
        />
        </div>
        <div className='in-p-6'>
          Dashboard
        <input 
        type = "text"
        id = "skills-06-6"
        className='skill-input-07-6'
        value={dashboard}
        onChange={(e) => setDashboard(e.target.value)}
        />
        </div>
        </div>

      <div className="footer-07">
        <button className="back-button-07" onClick={handleBackClick}>BACK</button>
        <div className="footer-right-07">
          <button className="skip-button-07" onClick={handleNextClick}>SKIP</button>
          <button className="next-button-07" type='submit'>NEXT</button>
        </div>
      </div>
    </div>
      </div>
      </form>
    </div>
  )
  
}