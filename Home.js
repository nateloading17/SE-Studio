import React, { useState } from 'react';
import './App.css';

function Home() {
  const [page, setPage] = useState('home');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securityQuestion1, setSecurityQuestion1] = useState('');
  const [securityAnswer1, setSecurityAnswer1] = useState('');
  const [securityQuestion2, setSecurityQuestion2] = useState('');
  const [securityAnswer2, setSecurityAnswer2] = useState('');

  const clickButton = (e) => {
    if (e.target.name === 'Login') {
      setPage('signin');
    } else if (e.target.name === 'Signup') {
      setPage('signup');
    } else if (e.target.name === 'Submit') {
      // Handle form submission and show confirmation screen
      setPage('confirmation');
    }
  };

  return (
    <div className="App">
      {page === 'home' && (
        <div>
          <header className="App-header">
            <img className="App-logo" src="https://picsum.photos/50" alt="tutorassist.io logo" />
            <h2>TutorAssist.IO</h2>
            <div className="login-wrapper">
              <button className="Button" name="Login" onClick={clickButton}>
                Sign In
              </button>
              <button className="Button" name="Signup" onClick={clickButton}>
                Sign Up
              </button>
            </div>
          </header>
          <body className="App-body">
            <div className="about-us frame">
              <h1 style={{ textAlign: 'left', fontWeight: 'bold' }}>About Us</h1>
              <p>
                Unlike many existing tutoring applications that require costly subscriptions and lack the assurance
                of tutor accreditation, our platform caters to students of all socioeconomic levels, offering them
                high-quality, personalized tutoring in a range of subjects. Our application enables students to
                search for tutors based on subject expertise, availability, and ratings, facilitating an engaging and
                seamless learning experience. From K-12 to higher education, our core objective is to enhance the
                knowledge and skills of students, not only improving their academic performance but also empowering
                them for future career success.
              </p>
            </div>
          </body>
          <footer style={{ backgroundColor: 'red', justifyContent: 'flex-end' }}>
            TODO: Add trademark and social media links
          </footer>
        </div>
      )}

      {page === 'signin' && (
        <div>
          {/* Sign In form */}
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
          <button className="Button" name="Submit" onClick={clickButton}>
            Sign In
          </button>
          <button
            className="Button"
            name="ForgotPassword"
            onClick={() => alert('Forgot Password')}
          >
            Forgot Password
          </button>
        </div>
      )}

      {page === 'signup' && (
        <div>
          {/* Sign Up form */}
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
          <button className="Button" name="Submit" onClick={clickButton}>
            Sign Up
          </button>
        </div>
      )}

      {page === 'confirmation' && (
        <div>
          {/* Confirmation screen */}
          <h1>Account Created Successfully</h1>
          <p>Your account has been created successfully.</p>
        </div>
      )}
    </div>
  );
}

export default Home;

