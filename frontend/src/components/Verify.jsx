import {useState} from "react"
import api from "../api"
import "../styles/Verify.css"
import img from "../assets/email.png"
import {useNavigate} from "react-router-dom"
function Verify ({route,method}) {
  const [otp,setOTP] = useState("")
  const navigate = useNavigate()
  const [loading,setLoading] = useState(false)
  const handleSubmit = async(e) => {
    setLoading(true);
    e.preventDefault()
    try {
      const res = await api.post(route,{otp})
      navigate("/page1")
    } catch (error){
      alert(error)
    }
    finally {
      setLoading(false)
    }
  }
  return (
  <div className="body1">
  <div className="email-verification-container">
    <form onSubmit={handleSubmit} className="email-verification-card">
    <div className="image-container">
        <img src={img} alt="Email Verification" className="email-image" />
        </div>
        <h2 className="h2">Verify your email to continue</h2>
        <p className="p1">We just sent an email to: <strong>shreyasameerbhoir16@gmail.com</strong>.</p>
        <p className="p1">Enter the code to continue.</p>
    <div className="verifybox">
    <input
    className="verification-input"
    type = "text"
    value = {otp}
    onChange={(e) => setOTP(e.target.value)}
    placeholder="OTP"
    ></input>
    <button className="bx" type="submit"> :) </button>
    </div>
    <div className="resend-container">
          Send again 
          </div> 
    </form>
  
  </div>
  </div>
  )
} 
export default Verify