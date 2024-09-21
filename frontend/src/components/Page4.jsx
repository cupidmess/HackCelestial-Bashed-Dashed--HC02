import React from 'react'
import "../styles/Page4.css"
import {useNavigate} from "react-router-dom"
export default function Page4() {
  const navigate = useNavigate()
  const handleNextClick = async(e) => {
    navigate("/page5");
  }
  return (
    <div>
      <div className='body-023'>
      <div className="container-023">
     <header className="header-023">
      <p className="pr-023">3/3</p>
      <h2 className="head-023">Great, so what kind of work are you here to do?</h2>
      <hr className="hline-023"></hr>
     </header>
     <main className="main-023">
      <div className="bx1-023">
        <p className="px1-023">Select 1 category</p>
        <div className="bx1c-023">
          <p className="k-023">Artificial Intelligence</p>
          <p className="k-023">App Developement</p>
          <p className="k-023">Cyber Security</p>
          <p className="k-023">Data Science</p>
          <p className="k-023">Design & Creactive</p>
          <p className="k-023">Web Developement</p>
        </div>
      </div>
      <div className="vline-023"></div>
      <p className="war-023">Select 1 to 3 specialities</p>
     </main>

     <footer className="foot-023">
      <button className='button-023'onClick={handleNextClick}>ADD YOUR SKILLS</button>
     </footer>
    </div>
    </div>
    </div>
  )
}