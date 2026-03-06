import React, { useState } from "react";
import API from "../api/api";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await API.post("/auth/register", {
        username,
        password,
        role: "USER",
      });

      alert("User registered");
    } catch (err) {
      alert("Error");
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;
