import React, { useState } from 'react';
// import "./LoginPage.css";
function SignUp({ onSwitch }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted:', { fullName, email, password });
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    setFullName('');
    setEmail('');
    setPassword('');
  };

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
        <div className="title">Create an Account</div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label className="label">Full Name</label>
              <input
                className="input-field"
                placeholder="Enter your full name"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label className="label">Email</label>
              <input
                type="email"
                className="input-field"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <label className="label">Password</label>
              <input
                type="password"
                className="input-field"
                style={{ height: '30px' }}
                placeholder="Enter your password"
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
          Already have an account?
          <a className="login" href="#" onClick={onSwitch}>
            LogIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
