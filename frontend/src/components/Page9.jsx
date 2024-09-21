import React from 'react'
import "../styles/Page9.css"
import {useNavigate} from "react-router-dom"
import api from "../api";
import { useState } from 'react';
export default function Page9() {
  const navigate = useNavigate()
  const [dob, setdob] = useState('');
  const [street_add,setStreet] = useState('');
  const [pin,setPin] = useState('');
  const [city,setCity] = useState('');
  const [dashboard,setDashboard] = useState('')
  const [loading,setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    try {
      const add = {
        dob, street_add, pin, city, dashboard
      };
      const res = await api.post(route, add);
   
      
    } catch (error) {
      console.log("Failed " + error.message);
    } finally {
    
      setLoading(false)
      navigate("/mp");
    }
  };
  return (
    <div className='body-09'>
      <form onSubmit={handleSubmit}>
      <div className="contain-09">
    <header className="h-09">
      <p className="st-09">3/3</p>
      <h2 className="head-09">Almost there!</h2>
      <hr className="l-09"></hr>
    </header>

    <main className="main-09">
        <div className="profile-09"></div>
        <div className='box1'>
        <p className="date-09">Date of Birth</p>
        <input type="text" placeholder="dd/mm/yyyy" className="dob-09"
        value  = {dob}
        onChange = {(e) => setdob(e.target.value)}
        />
        <p className="street-09">Street Address</p>
        <input type="text" placeholder="Address" className="street-input-09"
        value = {street_add}
        onChange={(e) => setStreet(e.target.value)}
        ></input>
      <div className="box2">
        <div>
        <p className="pin-09">PIN</p>
        <input type="text" placeholder="pincode" className="pin-input-09"
        value = {pin}
        onChange={(e) => setPin(e.target.value)}
        ></input>
        </div>
       <div>
       <p className="city-09">City</p>
       <input type="text" placeholder="City" className="city-input-09"
       value = {city}
       onChange={(e) => setCity(e.target.value)}
       ></input>
       <input type="text" placeholder="dash" className="city-input-10"
       value = {dashboard}
       onChange={(e) => setDashboard(e.target.value)}
       ></input>
       </div>
      </div>
        </div>
    </main>
    <footer className="foot-09">
          <button className="btn-09" type='submit'>LET'S GO</button>
    </footer>
  </div>
  </form>
    </div>
  )
}