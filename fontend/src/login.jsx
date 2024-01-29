import React, { useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import bg from './assets/stacked-waves-haikei.png'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import CircularJSON from 'circular-json';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
        const user = { emails: email, passwords: password }
        const response = await fetch('http://localhost:3001/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        
    
        if (response.ok) {
          const data = CircularJSON.parse(CircularJSON.stringify(await response.json()));
          Cookies.set('userId', data.userId);
            Cookies.set('email', data.email);
              Cookies.set('username', data.username);
            // Redirect to /
            navigate('/');
        } else {
            //display incorrect Email or Password message
            setFailedLogin('true');
            return;
        } 
    } catch (error) {
        console.error('Error during login:', error.message);
      }
  };
  const handleGoogleLogin = async () => {
    try {
    const response = await fetch('https://localhost:3001/auth/google');
    if (response.ok) {
      const data = CircularJSON.parse(CircularJSON.stringify(await response.json()));
      Cookies.set('userId', data.userId);
        Cookies.set('email', data.email);
          Cookies.set('username', data.username);
        // Redirect to /
        navigate('/');
    } else {
        //display incorrect Email or Password message
        setFailedLogin('true');
        return;
    } 
  } catch (error) {
    console.error('Error during login:', error.message);
  }
};

  return (
    <div className="fixed min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center bg-transparent" style={{ backgroundImage: `url(${bg})` }}>
    <Link to='/' className="cursor-pointer absolute top-2 left-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline mr-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

        <h6 className='my-3 inline font-medium font-body text-xl'> Retour </h6>
      </Link>
      <div className="bg-white p-8 rounded-2xl shadow-current shadow-2xl w-96">
        <h1 className="text-5xl font-semibold mb-6 font-body text-center pb-4 border-b border-black">Login</h1>
        {failedLogin && <div className="bg-red-200 rounded-lg text-red-500 border-red-900 border p-3 mb-6">Incorrect Email or Password</div>}
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="username">
            Email
          </label>
          <input
            className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => { setEmail(e.target.value);
            setFailedLogin(false)}}
            />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {setPassword(e.target.value);
            setFailedLogin(false)}}
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            className="mr-2 leading-tight"
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label className="text-md" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        <button
          className="bg-blue-900 text-white py-2 px-4 rounded-full focus:outline-none w-full hover:bg-blue-800 mt-1"
          onClick={() => {handleLogin(email, password)}}
        >
          Log In
        </button>
        <button
          className=" py-2 px-4 rounded-full border-2 shadow-sm shadow-black hover:shadow-none focus:outline-none w-full hover:border-black mt-1" onClick={handleGoogleLogin}
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className='w-7 h-7 inline-block mr-6'><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
          Sign In with Google 
        </button>
        <Link to='/signup' className="cursor-pointer">
        <h6 className='mt-3'>Not a member? <span className="text-blue-400 ml-2 underline">Sign Up</span> </h6>
      </Link>
      </div>
    </div>
  );
};

export default Login;
