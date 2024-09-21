import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import "../styles/Page2.css"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
export default function Page2() {
  const [selectedOption, setSelectedOption] = useState("");

  // Handle the change for selection
  const handleSelectionChange = (value) => {
    setSelectedOption(value);
  };
  const navigate = useNavigate();
  const handleNextClick = async(e)=>{
    navigate("/page3")
  }
  const handleBackClick = async(e)=> {
    navigate("/page1")
  }

  return (
    <div className='body-03'> 
      <div className="con">
        <header className="he">
            <p className="pr">1/3</p>
            <h2 className="h">A few questions  : first, have you freelanced before?</h2>
            <p className="para">This let us know how much help to give you along the way. We won't share your answer with anyone else, including potential clients.</p>
        </header>
        <main className="m">
        <div className="custom-boxes-container">
      {/* Box 1 */}
      <label
        className={`custom-box ${selectedOption === "beginner" ? "active" : ""}`}
        onClick={() => handleSelectionChange("beginner")}
      >
        <input
          type="radio"
          name="experience"
          value="beginner"
          checked={selectedOption === "beginner"}
          onChange={() => handleSelectionChange("beginner")}
        />
        <img src={img2} alt="Ready" className="img2" />
        <p className="box-text">I am brand new to this</p>
      </label>

      {/* Box 2 */}
      <label
        className={`custom-box ${selectedOption === "intermediate" ? "active" : ""}`}
        onClick={() => handleSelectionChange("intermediate")}
      >
        <input
          type="radio"
          name="experience"
          value="intermediate"
          checked={selectedOption === "intermediate"}
          onChange={() => handleSelectionChange("intermediate")}
        />
        <img src={img3} alt="Experienced" className="img3" />
        <p className="box-text">I have some experience</p>
      </label>

      {/* Box 3 */}
      <label
        className={`custom-box ${selectedOption === "pro" ? "active" : ""}`}
        onClick={() => handleSelectionChange("pro")}
      >
        <input
          type="radio"
          name="experience"
          value="pro"
          checked={selectedOption === "pro"}
          onChange={() => handleSelectionChange("pro")}
        />
        <img src={img4} alt="Pro" className="img4" />
        <p className="box-text">I am a pro</p>
      </label>
    </div>
        </main>
       <hr></hr>
        <footer className="btn">
            <button className="back" onClick={handleBackClick}>BACK</button>
            <div className="btn-contain">
                <button className="btn2" onClick={handleNextClick}>SKIP</button>
                <button className="btn3" onClick={handleNextClick}>NEXT</button>
            </div>
        </footer>
      </div>
    </div>
  )
}