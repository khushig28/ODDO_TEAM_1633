import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css"; // Reuse the same CSS for consistency

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Registered successfully!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.msg || "Registration failed");
    }
  };
return (
  <div className="app-background login-container">
    <form className="login-box" onSubmit={handleSubmit}>
      <h2>Create an Account</h2>
      <div className="input-group">
        <span className="icon">👤</span>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div className="input-group">
        <span className="icon">📧</span>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div className="input-group">
        <span className="icon">🔒</span>
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </div>
      <button type="submit">Register</button>
      <div className="signup-link">
        Already have an account? <Link to="/">Login</Link>
      </div>
    </form>
  </div>
);
}

export default Signup;
