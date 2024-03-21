import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignUp from './SignUp';

const AuthenticationPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSwitch = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="authentication-page">
      {isSignIn ? <LoginPage onSwitch={handleSwitch} /> : <SignUp onSwitch={handleSwitch} />}
    </div>
  );
};

export default AuthenticationPage;
