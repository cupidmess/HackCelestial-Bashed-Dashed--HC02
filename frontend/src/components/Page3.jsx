import React from 'react'
import { useNavigate } from "react-router-dom";
import "../styles/Page3.css"
import {FaUpload} from "react-icons/fa"
import img5 from "../assets/img5.jpeg"
import img6 from "../assets/img6.jpeg"
export default function Page3() {
  const navigate = useNavigate();
  const handleNextClick = async(e)=>{
    navigate("/page4")
  }
  const handleBackClick = async(e)=> {
    navigate("/page2")
  }
  return (
    <div>
         <div className="cont-1">
    <header className="head-1">
        <p className="page-1">2/3</p>
        <h2 className='h2-1'>Tell us more about yourself</h2>
    </header>
    <main className="main-1">
        <div className="b1-b1">
               <div className="box1-1">
                <img className="img-12" src={img5} alt="Linkedin"></img>
                <p className="l-1">CONNECT LINKEDIN</p>
               </div>
               <input className="check-1" type="checkbox"></input>
        </div>
        <div className="b1-b2">
               <div className="box1-1">
                <FaUpload/>
                <div className="l-1">UPLOAD RESUME</div>
               </div>
               <input className="check-1" type="checkbox"></input>
        </div>
        <div className="b1-b3">
               <div className="box1-1">
                <p className="l-1">FILL OUT MANUALLY</p>
               </div>
        </div>
    </main>
    <hr></hr>
    <footer className="foor-1">
        <button className="bc-1" onClick={handleBackClick}>BACK</button>
        <button className='nc-1' onClick={handleNextClick}>NEXT</button>
    </footer>
   </div>
    </div>
  )
}