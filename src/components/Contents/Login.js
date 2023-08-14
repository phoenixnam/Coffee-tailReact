import React, { useState } from 'react';
import axios from 'axios';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get('https://63aa9f0e7d7edb3ae62c5cea.mockapi.io/user');
      const users = response.data;

      const user = users.find(user => user.email === email && user.password === password && user.username === username);

      if (user) {
        alert('Login successful');
        window.location.href = './home'
        setErrorMessage('');
      } else {
        setErrorMessage('Invalid credentials');
      }
    } catch (error) {
      alert('Error fetching user data', error);
    }
  };

  return (
      <form className='flex flex-col justify-center items-center mt-20 py-2 bg-white shadow-sm'>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button className='w-1/4 px-3 py-2 font-semibold bg-orange-500 rounded-sm text-white' onClick={handleLogin}>Login</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>

  );
}

export default Login;
