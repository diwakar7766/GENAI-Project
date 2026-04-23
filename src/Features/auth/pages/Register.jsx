import React,  {useState}from "react";
import { useNavigate, Link } from "react-router";
import "../auth.form.scss";
import { useAuth } from "../hooks/useAuth";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();
  const { loading, handleRegister } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault()
    await  handleRegister({username,email, password})
    navigate("/")
  };

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
            onChange={(e)=>setUsername(e.target.value)}
              type="text"
              id="username"
              name="username"
              placeholder="Enter the username"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="Enter the email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
            onChange={(e)=>setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              placeholder="Enter the password"
              required
            />
          </div>
          <button className="button primary-button" type="submit" disabled={loading}>
            Register
          </button>
        </form>
        <p>
          Already have account? <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
}
