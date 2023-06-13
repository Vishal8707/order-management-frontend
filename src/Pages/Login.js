import React from 'react'
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Call your API endpoint to handle login with email and password
    const userData = {
      email,
      password
    };

    try {
      const response = await fetch('https://your-backend-api.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        // Login successful
        console.log('Login successful');
        // Reset the form
        setEmail('');
        setPassword('');
      } else {
        // Login failed
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
