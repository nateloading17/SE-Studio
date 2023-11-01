import React, { useState } from 'react';
import SignUpScreen from './SignUpScreen';
import ConfirmationScreen from './ConfirmationScreen';

function ParentComponent() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignUp = () => {
    // Extract form data
    const { firstName, lastName, email, username, password, confirmPassword } = formData;

    // Basic validation
    if (!firstName || !lastName || !email || !username || !password || !confirmPassword) {
      alert('Please fill in all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    if (username === 'existingUser') {
      alert('Username is already in use. Please choose another.');
      return;
    }

    // Assuming registration is successful
    setShowConfirmation(true);
  };

  const handleCancel = () => {
    // This function should handle navigating back to the home screen.
    setShowConfirmation(false);
  };

  return (
    <div>
      <h1>My Application</h1>
      {showConfirmation ? (
        <ConfirmationScreen onCancel={handleCancel} />
      ) : (
        <SignUpScreen formData={formData} setFormData={setFormData} handleSignUp={handleSignUp} />
      )}
    </div>
  );
}

export default ParentComponent;
