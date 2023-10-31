import React, { useState } from 'react';

function SignUpScreen({ onSignUp, onCancel }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securityQuestion1, setSecurityQuestion1] = useState('');
  const [securityAnswer1, setSecurityAnswer1] = useState('');
  const [securityQuestion2, setSecurityQuestion2] = useState('');
  const [securityAnswer2, setSecurityAnswer2] = useState('');

  const handleSignUp = () => {
    // Add your logic for signing up here
    if (
      username &&
      password &&
      confirmPassword &&
      securityQuestion1 &&
      securityAnswer1 &&
      securityQuestion2 &&
      securityAnswer2
    ) {
      if (password === confirmPassword) {
        onSignUp(username);
      } else {
        alert('Passwords do not match.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Security Question 1"
        value={securityQuestion1}
        onChange={(e) => setSecurityQuestion1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Answer to Question 1"
        value={securityAnswer1}
        onChange={(e) => setSecurityAnswer1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Security Question 2"
        value={securityQuestion2}
        onChange={(e) => setSecurityQuestion2(e.target.value)}
      />
      <input
        type="text"
        placeholder="Answer to Question 2"
        value={securityAnswer2}
        onChange={(e) => setSecurityAnswer2(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default SignUpScreen;
