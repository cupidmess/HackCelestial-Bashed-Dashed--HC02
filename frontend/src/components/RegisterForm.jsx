import { useState } from "react";
import api from "../api";
import "../styles/RegisterForm.css";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import register from "../assets/register.png"
function RegisterForm({ route, method }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onClick = async(e) => {
    e.preventDefault();
    navigate("/login")
  }
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await api.post(route, {
        email,
        name,
        username,
        password,
        password2,
      });
      navigate("/verify");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="Register-Form">
      <div className="left-container-register">
        <div className="left-cont-reg">
        <button className="left-but-01">SIGNUP</button>
        <button className="left-but-02" onClick={onClick}>LOGIN</button>
        </div>
      </div>
      <div className="right-container-register">
      <div className="right-02">
      <div className="right-form-content-02">
      <div className="right-top-02">
      <div className="right-title-form">Join Us</div>
      <div className="right-desc-form">Ready to start your success story?</div>
      </div>
      <hr></hr>
      <form onSubmit={handleSubmit} className="form-container02">
        <label>Email</label>
        <input
          className="form02-email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <label>Name</label>
        <input
          className="form02-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <label>Username</label>
        <input
          className="form02-username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <label>Password</label>
        <input
          className="form02-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <label>Confirm Password</label>
        <input
          className="form02-password2"
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          placeholder="Re-enter Password"
        />
        <div className="right-bottom-02">
        <input 
        className="checkbox-right"
        type="checkbox"></input>
        I agree to the terms and conditions
      </div>
      <button className="form02-button" type="submit">
          {loading ? "Registering..." : "REGISTER"}
        </button>
      </form>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default RegisterForm;