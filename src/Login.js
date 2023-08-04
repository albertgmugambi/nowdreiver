// components/Login.js
import React, { useState } from 'react';

const Login = ({ setUserType }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check if the username and password match the admin or user credentials
    if (username === 'admin' && password === '9777') {
      setUserType('admin');
    } else if (username === 'user' && password === '2015') {
      setUserType('user');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
