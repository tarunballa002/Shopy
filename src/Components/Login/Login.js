// Components/Login.js
import React, { useState } from 'react';
import './Login.css';  // Import the associated CSS file


const Login = () => {
  // State to handle form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Basic validation (you can expand this further)
    if (username === '' || password === '') {
      setErrorMessage('Both fields are required!');
    } else {
      setErrorMessage('');
      alert(`Login successful with username: ${username}`);
      // You would typically call an API here to verify credentials
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="submit-btn" >Login</button>
      </form>
    </div>
  );
};

export default Login;
