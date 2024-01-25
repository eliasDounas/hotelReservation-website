import React, { useState, useEffect } from 'react';
import './style.css'
import bg from './assets/waves.png'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


const SignUp = () => {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [matchingPassword, setMatchingPassword] = useState(true);
  const [failedLogin, setFailedLogin] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (password!==repeatPassword && repeatPassword!==''){
        setMatchingPassword(false);
    } else {
        setMatchingPassword(true);
    }
  },[password, repeatPassword]);

  const handleSignUp = async (username, email, password) => {
    if ( matchingPassword === true && password!=="" && repeatPassword!=="" ){
    try {
        const user = { username, email, password };
        const response = await fetch('http://localhost:3001/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        
        if (response.ok) {
            const data = await response.json();
            Cookies.set('userId', data.userId);
            Cookies.set('email', data.email);
            Cookies.set('username', data.username);
            // Redirect to /
            navigate('/');
        } else {
            const data = await response.json();
            setError(data.error)
            setFailedLogin('true');
        } 
    } catch (error) {
        console.error('Error during login:', error.message);
      }}
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center bg-transparent" style={{ backgroundImage: `url(${bg})` }}>
        <Link to='/' className="cursor-pointer absolute top-2 left-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline mr-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            <h6 className='my-3 inline font-medium font-body text-xl'> Retour </h6>
        </Link>
        <div className="bg-white p-8 rounded-2xl shadow-current shadow-2xl w-96">
            <h1 className="text-5xl font-semibold mb-6 font-body text-center pb-4 border-b border-black">Sign Up</h1>
            {failedLogin && <div className="bg-red-200 rounded-lg text-red-500 border-red-900 border p-3 mb-6">{ error }</div>}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
                </label>
            <input
            className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
                </label>
            <input
            className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            type="username"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
            </label>
            <input
            className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="repeatPassword">
            Repeat Password
          </label>
          <input
            className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            type="password"
            id="repeatPassword"
            placeholder="Repeat your password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
        {!matchingPassword && <h4 className="rounded-lg text-red-500 pb-2">Passwords don't match!</h4>}

        <button
          className="bg-blue-900 text-white py-2 px-4 rounded-full focus:outline-none w-full hover:bg-blue-800 mt-1"
          onClick={() => {handleSignUp(username, email, password)}}
        >
          Sign Up    
        </button>
        <button
          className=" py-2 px-4 rounded-full border-2 shadow-sm shadow-black hover:shadow-none focus:outline-none w-full hover:border-black mt-1"
          onClick={SignUp}
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className='w-7 h-7 inline-block mr-6'><path fill="#000000" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
          Sign Up with Google 
        </button>
        <Link to='/login' className="cursor-pointer">
        <h6 className='mt-3'>Already have an account? <span className="text-blue-400 ml-2 underline">Login</span> </h6>
      </Link>
      </div>
    </div>
  );
};

export default SignUp;