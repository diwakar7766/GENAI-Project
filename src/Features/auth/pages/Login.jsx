import React, { useState } from "react";
import "../auth.form.scss";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../hooks/useAuth.js";

export default function Login() {
  const navigate = useNavigate();
  const { loading, handleLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin({ email, password });
    navigate("/");
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #141e30, #243b55)" }}>
      <div style={{
        background: "rgba(255,255,255,0.07)",
        padding: "2.5rem 2rem",
        borderRadius: "18px",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        width: "100%",
        maxWidth: "370px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <h1 style={{ color: "#fff", fontWeight: 700, marginBottom: "1.5rem", fontSize: "2rem" }}>Sign In</h1>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div className="input-group">
            <label style={{ color: "#e0e0e0", marginBottom: 4 }}>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
              required
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: "12px",
                border: "none",
                outline: "none",
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
                fontSize: "1rem",
                marginBottom: "1.2rem"
              }}
            />
          </div>
          <div className="input-group">
            <label style={{ color: "#e0e0e0", marginBottom: 4 }}>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
              required
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: "12px",
                border: "none",
                outline: "none",
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
                fontSize: "1rem",
                marginBottom: "1.5rem"
              }}
            />
          </div>
          <button
            className="button primary-button"
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "0.9rem",
              borderRadius: "12px",
              background: "linear-gradient(90deg, #ff267a 0%, #ff6a00 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.1em",
              border: "none",
              marginBottom: "1.2rem",
              boxShadow: "0 2px 12px rgba(255, 38, 122, 0.2)",
              cursor: "pointer"
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p style={{ color: "#bfc6d1", marginTop: 8 }}>
          Don't have an account? <Link to="/register" style={{ color: "#ff267a", textDecoration: "underline" }}>Register</Link>
        </p>
      </div>
    </main>
  );
}