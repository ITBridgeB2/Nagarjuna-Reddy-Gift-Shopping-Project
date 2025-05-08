import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./../styles/LoginPage.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => { 
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', { username, password });
      if (res.data.success) {
        navigate('/Dashboard'); 
      } else {
        alert('Invalid credentials');
      }
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="button-group">
          <button type="reset" className="btn btn-secondary">Reset</button>&nbsp;
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
}
