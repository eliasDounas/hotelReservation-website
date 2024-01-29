import './style.css'
import logo from './assets/pngegg.png'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import accord from './assets/logo.svg'
import Cookies from 'js-cookie';


const Nav = () => {
    const [hasUserIdCookie, setHasUserIdCookie] = useState(false);
    const [username, setUsername] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const userIdCookie = Cookies.get('username');
        setUsername(Cookies.get('username'));
        setHasUserIdCookie(!!userIdCookie); // Set to true if userIdCookie exists, false otherwise
      }, []);

    const handleDialog = () => {
        setIsOpen(!isOpen);
      };
    const navigate = useNavigate();
    const clearAuthCookies = () => {
        Cookies.remove('userId');
        Cookies.remove('email');
        Cookies.remove('username');

    };
    const handleLogout = () => {
        // Clear authentication-related cookies
        clearAuthCookies();
        setHasUserIdCookie(false);
    };
    const handleContact = () => {

        navigate("/contactUs");
    }
    return ( 
        <>
        <nav className="bg-blue-50 h-20 fixed w-full z-10 top-0 block">
            <div className="flex justify-around items-center h-20">
            <img src={logo} alt="Logo" className='w-64 pt-7 h-32 cursor-pointer' onClick={() => navigate('/')}/>
                    

            <div className="flex justify-center items-center gap-16">
                <a href="#description" className="text-2xl font-body font-medium hover:font-bold transform hover:scale-110 transition-transform">Description</a>
                <a href="#chambres" className="text-2xl font-body font-medium hover:font-bold transform hover:scale-110 transition-transform">Chambres</a>
                <a href="#localisation" className="text-2xl font-body font-medium hover:font-bold transform hover:scale-110 transition-transform">Localisation</a>
                <a href="#avis" className="text-2xl font-body font-medium hover:font-bold transform hover:scale-110 transition-transform">Avis</a>
                <a href="#contact" className="text-2xl font-body font-medium hover:font-bold transform hover:scale-110 transition-transform" onClick={handleContact}>Contact</a>
            </div>

            <div className="">
            {!hasUserIdCookie ? ( <><button className='text-xl border-2 rounded-3xl py-1.5 px-6 transition-all duration-500 ease-in-out text-white brightness-120 hover:bg-blue-900 bg-blue-950' onClick={handleDialog}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block w-10 pr-1.5 pb-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>Mon Compte et mes points</button>
                </>
                ):(
                
                <><button className='text-xl border-4 rounded-3xl py-1 px-4 font-medium transition-all duration-500 ease-in-out hover:bg-blue-950 hover:text-white text-blue-950 border-blue-950' onClick={handleDialog}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block w-10 pr-1.5 pb-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>Mon Compte et mes points</button>
            </>)}
                
                
            </div>
            </div>
        </nav>
        

        {isOpen && 
            ( <><div className="z-30 w-3/4 h-full fixed top-20 left-0 bottom-0" onClick={handleDialog}></div>
            <div className="z-40 h-auto w-1/4 mr-4 fixed top-20 right-0 flex flex-col items-start bg-white  border-x-2 border-b-2 border-gray-500 rounded-b-2xl pb-5" >

                {hasUserIdCookie ? ( <> <h2 className=' overflow-x-hidden ml-6 mt-10 font-medium text-2xl text-blue-950 '>Bienvenue, {username} </h2>
                </>
                ):(
                    <></>)}
                <div className="flex flex-col bg-blue-50 border-2 border-blue-950 m-6 p-3 rounded-2xl">
                <img src={accord} alt="Logo" className="mx-6 mt-4 " />
                <h1 className='text-blue-900 font-serif font-bold tracking-wider ml-6 mt-3'>ALL récompense toutes vos activités, partout.</h1></div>
                {hasUserIdCookie ? ( <>
                <button className="mx-3 text-xl border-2 rounded-3xl w-11/12 transition-all duration-500 ease-in-out text-white brightness-120 hover:bg-blue-900 bg-blue-950 py-1.5">Mes Réservations</button>
                <button className="my-2 mx-3 w-11/12 text-xl border-2 rounded-3xl transition-all duration-500 ease-in-out text-blue-950 border-blue-950 brightness-120 hover:bg-blue-950 hover:text-white py-1.5" onClick={handleLogout}>Se Déconnecter</button></>
                ):(
                <>
                <button className="mx-3 text-xl border-2 rounded-3xl w-11/12 transition-all duration-500 ease-in-out text-white brightness-120 hover:bg-blue-900 bg-blue-950 py-1.5"onClick={() => navigate('/login')}>Se Connecter</button>
                <button className="my-2 mx-3 w-11/12 text-xl border-2 rounded-3xl transition-all duration-500 ease-in-out text-blue-950 border-blue-950 brightness-120 hover:bg-blue-950 hover:text-white py-1.5"onClick={() => navigate('/signup')}>Créer un compte</button></>)}
                
                <h1 className='ml-6 mt-6 font-medium text-xl text-blue-950'>Béneficiez de 10% de réduction sur toutes vos réservations avec un seul compte!</h1>
          </div> </>)
     }</>
    )};
export default Nav;