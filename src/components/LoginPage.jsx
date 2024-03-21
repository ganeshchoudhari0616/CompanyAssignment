import React, { useState } from 'react';
import './LoginPage.css';
import HomePage from './HomePage';

const LoginPage = ({ onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = e => {
    e.preventDefault();

    // Email validation
    const validateEmail = email => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };

    if (validateEmail(email) && password.length >= 6) {
      // Retrieving user information from local storage
      const storedEmail = localStorage.getItem('email');
      const storedPassword = localStorage.getItem('password');

      if (email === storedEmail && password === storedPassword) {
        setLoggedIn(true);
      } else {
        alert('Invalid email or password. Please try again.');
      }
    } else {
      alert('Invalid email or password format. Please try again.');
    }
  };

  if (loggedIn) {
    return <HomePage />;
  }

  return (
    <div className="app">
      <div
        className="login-form"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          gap: '10px'
        }}
      >
        <div className="title">LogIn to your account</div>
        <div className="form">
          <form onSubmit={handleLogin}>
            <div className="input-container">
              <label className="label">Username </label>
              <input
                type="email"
                placeholder="Email"
                className="input-field"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <label className="label">Password </label>
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
        <div className="switch">
          Don't have an account?
          <a className="login" href="#" onClick={onSwitch}>
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
