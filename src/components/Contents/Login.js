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
      <form className="ml-82 mt-20 w-1/3 bg-white shadow-lg mx-auto py-20 px-3">
        <div className="ml-12">
            <label className="font-medium">Username</label>
            <input type="text" className="ml-4 border border-lime-400 px-3 py-2 rounded-lg hover:border-lime-600" 
              value={username}
              onChange={e => setUsername(e.target.value)} name="" id="" placeholder="username" />
        </div>
        <div className= "mt-4 ml-12">
            <label className="font-medium">Password</label>
            <input type="text" className="ml-5 border border-lime-400 px-3 py-2 rounded-lg"
               value={password}
               onChange={e => setPassword(e.target.value)}
               name="" id="" placeholder="password"/>
        </div>
        <div className= "mt-4 ml-12">
            <label className="font-medium">Email</label>
            <input type="text" className="ml-12 border border-lime-400 px-3 py-2 rounded-lg" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="email" />
        </div>
     
        <div className='ml-32'>
        <button className='px-6 py-2 bg-lime-600 text-white ml-18 mt-4 rounded-lg hover:bg-lime-700' onClick={handleLogin}>Login</button>
        {errorMessage && <p>{errorMessage}</p>}
        </div>
      
        <div className="text-gray-400 ml-36 mt-2">
            <span>Have account yet? </span>
            <a className="text-blue-600" href="./register">signup</a>
        </div>
      </form>

  );
}

export default Login;
