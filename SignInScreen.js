import React, { useState } from 'react';

function SignInScreen({ onSignIn, onForgotPassword, onCancel }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Add your logic for signing in here
    if (username && password) {
      onSignIn(username);
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={onForgotPassword}>Forgot Password</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}
