// login.js

import { useState } from 'react';
import { useRouter } from 'next/router';
import 'login.css';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      // Perform login logic here
      // You can make an API call to authenticate the user
      
      // Simulating an asynchronous API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to the dashboard after successful login
      router.push('/dashboard');
    } catch (err) {
      // Handle login errors
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
