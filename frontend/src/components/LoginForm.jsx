import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import {FaGoogle} from "react-icons/fa"
import { FaApple } from "react-icons/fa";
import "../styles/LoginForm.css";
import bg from "../assets/bg-login.png";
function LoginForm({ route, method }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await api.post(route, { email, password });
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      navigate("/");
    } catch (error) {
      alert("Login failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  const onClick = async(e) => {
    e.preventDefault();
    navigate("/register")
  }

  return (
    <div>
      <div className="Login-form">
      <div className="left">
      <div className="left-container-form">
      <div className="left-content">
      <div className="top">
      <div className="title-form">Welcome Back!</div>
      <div className="desc-form">Ready to resume your success story?</div>
      </div>
      <div className="loginoptions">
      <div className="google">Continue with Google? <div className="googleicon"><FaGoogle/></div></div>
      <div className="apple">Continue with Apple? <div className="appleicon"><FaApple/></div></div>
      </div>
      <hr></hr>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="email-box">
        Email 
        <input
          className="form01-email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        </div>
        <div className="pass-box">
        Password
        <input
          className="form01-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        </div>
        <div className="bottom">
        <div className="left-bottom">
          <input
          className="checkbox01"
          type= "checkbox"
          />
        Remember me </div>
        <div className="right-bottom">
        Reset Password
        </div>
        </div>
        <button className="form01-button" type="submit">
          {loading ? "Logging in..." : "LOGIN"}
        </button>
        <div className="sign-in-here" onClick={onClick}>Dont have an account? <b>Sign in.</b></div>
      </form>
      </div>
      </div>
      </div>
      <div className="right">
        <div className="components-right">
          <button className="right-but-01">LOGIN</button>
          <button className="right-but-02" onClick={onClick}>SIGNUP</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LoginForm;