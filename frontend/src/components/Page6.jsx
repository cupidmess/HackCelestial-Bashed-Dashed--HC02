import React, { useState } from 'react'
import "../styles/Page6.css"
import api from "../api";
import {useNavigate} from "react-router-dom"
export default function Page6() {
  const [start_date,setStart_date] = useState("")
  const [loading, setLoading] = useState(false);
  const [end_date,setEnd_date] = useState("")
  const [experience_title,setExperience_title] = useState("")
  const [experience_company,setExperience_company] = useState("")
  const [location,setLocation] = useState("")
  const [exp_description,setExp_description] = useState("")
  const [dashboard,setDashboard] = useState("")
  const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    e.preventDefault();
    try {
      const exp = {
        start_date, end_date, experience_title, experience_company, location, exp_description, dashboard
      };
      const res = await api.post(route, exp);
   
      
    } catch (error) {
      console.log("Failed " + error.message);
    } finally {
    
      setLoading(false)
      navigate("/page7");
    }
  };
  const handleBackClick = async(e) => {
    navigate("/page5")
  }
  const handleNextClick = async(e) => {
    navigate("/page7")
  }
  return (
    <div>
      <div className='body-06'>
        <form onSubmit={handleSubmit}>
      <div className="experience-container-06">
      <div className="header-06">
        <span>3/3</span>
        <h2>Enter your experience.</h2>
      </div>
      <hr className="Line-06"></hr>

      <div className='input-boxes-1'>
        <div className='i-b-date'>
        <div className='i-b-1'>Start Date
        <input
          type="text"
          id="skills-06-1"
          className="skill-input-06-1"
          placeholder="DD/MM/YYYY"
          value={start_date}
          onChange={(e) => setStart_date(e.target.value)}
        />
        </div>
        <div className='i-b-2'>End Date
        <input
          type="text"
          id="skills-06-n"
          className="skill-input-06-0"
          placeholder="DD/MM/YYYY"
          value={end_date}
          onChange={(e) => setEnd_date(e.target.value)}
        />
        </div>
        </div>
        <div className='main-p6'>
        <div className='i-b-3'> Title
        <input
          type="text"
          id="skills-06-2"
          className="skill-input-06-2"
          placeholder="Title"
          value={experience_title}
          onChange={(e) => setExperience_title(e.target.value)}
        />
        </div>
        <div className='i-b-4'> Company 
        <input
          type="text"
          id="skills-06-3"
          className="skill-input-06-3"
          placeholder="Company"
          value={experience_company}
          onChange={(e) => setExperience_company(e.target.value)}
        />
        </div>
        <div className='i-b-5'> Location
        <input
          type="text"
          id="skills-06-4"
          className="skill-input-06-4"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        </div>
        </div>
        <div className='i-b-6'>Description
        <input
          type="text"
          id="skills-06-5"
          className="skill-input-06-5"
          placeholder="Desc"
          value={exp_description}
          onChange={(e) => setExp_description(e.target.value)}
        />
        </div>
        <div className='i-b-7'> Dashboard
        <input 
        type = "text"
        id = "skills-06-6"
        className='skill-input-06-6'
        value={dashboard}
        onChange={(e) => setDashboard(e.target.value)}
        />
        </div>
        </div>
      <div className="footer-06">
        <button className="back-button-06" onClick={handleBackClick}>BACK</button>
        <div className="footer-right-06">
          <button className="skip-button-06" onClick={handleNextClick}>SKIP</button>
          <button className="next-button-06" type = "submit">NEXT</button>
        </div>
      </div>
    </div>
    </form>
      </div>
    </div>
  )
}