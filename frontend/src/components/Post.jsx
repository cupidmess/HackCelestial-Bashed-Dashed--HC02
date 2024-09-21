import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Post.css";
import {FaWindowClose} from "react-icons/fa"
import api from '../api';
export default function Post() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [payment, setPayment] = useState("");
  const [experience, setExperience] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [user, setDashboard] = useState("")
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleClick = async(e) => {
    navigate("/")
  }
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
 
    try {
      const post1 = {
        user,
        name, 
        job_title: title,
        experience, 
        desc, 
        link, 
        skill_1: skill1,
        skill_2: skill2, 
        skill_3: skill3, 
        payment 
      };
      // Use the passed route prop
      const res = await api.post("/api/v1/auth/jobposts/", post1);
 
      setLoading(false);
      navigate("/mp"); // Navigate after the state update
    } catch (error) {
      setLoading(false);
      console.error("Error during form submission", error);
    }
  };


  return (
    <div>
    <div className='post-p'>
     <form onSubmit={handleSubmit}>
      <div className='jobpost-container'>
        
          <div className='p-h1'> Job Post Application
          <div className='jb-close' onClick={handleClick}><FaWindowClose/> </div>
          </div>
          <hr></hr>
          <div className='jp-title'>
          <div className='field_0'>
            User
            <input id='jp-f-p0'
            className = 'jp-i0'
            value = {user}
            onChange={(e)=> setDashboard(e.target.value)} />
          </div>
          <div className='field_1'>
          Name
          <input 
          className='jp-i1'
          value={name}
          id = "jb-f-p1"
          onChange={(e)=> setName(e.target.value)}
          />
          </div>
          <div className='field_2'>
            Job Title
            <input id='jp-f-p2'
            value = {title}
            className = 'jp-i2'
            onChange={(e)=> setTitle(e.target.value)} />
          </div>
          </div>
          
          <div className='field_3'>
            Experience
            <input id='jp-f-p3'
            className = 'jp-i3'
            value = {experience}
            onChange={(e)=> setExperience(e.target.value)} />
          </div>
          <div className='field_4'>
            Description 
            <input id='jp-f-p4'
            value = {desc}
            className = 'jp-i4'
            onChange={(e)=> setDesc(e.target.value)} />
          </div>
          <div className='field_5'>
            Link
            <input id='jp-f-p5'
            className = 'jp-i5'
            value = {link}
            onChange={(e)=> setLink(e.target.value)} />
          </div>
          <div className='p-skills'>
          <div className='field_6'>
            Skill 1
            <input id='jp-f-p6'
            className = 'jp-i6'
            onChange={(e)=> setSkill1(e.target.value)} />
          </div>
          <div className='field_7'>
            Skill 2
            <input id='jp-f-p7'
            className = 'jp-i7'
            onChange={(e)=> setSkill2(e.target.value)} />
          </div>
          <div className='field_8'>
            Skill 3
            <input id='jp-f-p8'
            className = 'jp-i8'
            onChange={(e)=> setSkill3(e.target.value)} />
          </div>
          </div>
          <div className='field_9'>
            Payment 
            <input id='jp-f-p9'
            className = 'jp-i9'
            onChange={(e)=> setPayment(e.target.value)} />
          </div>

       <button className='jb-but' type = 'submit'>POST</button>
      </div>
     </form>
    </div>
    </div>
  );
}