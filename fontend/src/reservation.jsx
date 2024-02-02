import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './style.css'
import accord from './assets/logo.svg'
import Cookies from 'js-cookie';



const Reservation = () => {
    const location = useLocation();
    const reservationData = location.state;

    const [hasUserIdCookie, setHasUserIdCookie] = useState(false);
    useEffect(() => {
        const userIdCookie = Cookies.get('userId');
        setHasUserIdCookie(!!userIdCookie); // Set to true if userIdCookie exists, false otherwise
      }, []);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        checkin : reservationData.checkin,
        checkout : reservationData.checkout,
        promo : reservationData.promo,
        chambre : reservationData.chambre,
        firstName: '',
        lastName: '',
        nationality: '',
        phoneNumber: '',
        email: '',
        billingAddress: '',
        countryOrRegion: '',
        city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:3001/reservation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
    
        if (response.ok) {
            navigate('/success');
        } else {
            console.error('Error during reservation');
            return;
        } 
    } catch (error) {
        console.error('Error during reservation:', error.message);
      }
  };
  

  return (
    <>
    <h1 className='text-2xl font-bold mt-32 mb-6 mx-72'>Veuillez entrer les informations suivantes: </h1>
    <form onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="max-w-2xl mx-72 p-6 shadow-right-bottom rounded-xl border  bg-slate-100 border-blue-950">
      <div className="mb-4">
        <label htmlFor="firstName" className="block  mb-2 text-xl font-medium ">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          autoFocus
          value={formData.firstName}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-500 rounded-md w-full bg-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="lastName" className="block  mb-2 text-xl font-medium ">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-500 rounded-md w-full"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="nationality" className="block text-xl font-medium  mb-2">
          Nationality
          <span className="text-sm text-gray-500 block">To help the hotelier to welcome you</span>
        </label>
        <input
          type="text"
          id="nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-500 rounded-md w-full"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-xl  mb-2 font-medium ">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-500 rounded-md w-full"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-xl  mb-2 font-medium ">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-500 rounded-md w-full"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="billingAddress" className="block  mb-2 text-xl font-medium ">
          Billing Address
        </label>
        <input
          type="text"
          id="billingAddress"
          name="billingAddress"
          value={formData.billingAddress}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-500 rounded-md w-full"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="countryOrRegion" className="block  mb-2 text-xl font-medium ">
          Country or Region
        </label>
        <input
          type="text"
          id="countryOrRegion"
          name="countryOrRegion"
          value={formData.countryOrRegion}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-500 rounded-md w-full"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="city" className="block text-xl  mb-2 font-medium ">
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-500 rounded-md w-full"
        />
      </div>

      <div className="mt-8 text-end text-xl">
        <button
          type="submit"
          className="text-blue-950 transition-all duration-500 ease-in-out bg-white border-2 font-medium border-blue-950 p-2 rounded-3xl px-5 hover:bg-blue-900 hover:text-white focus:outline-none focus:ring focus:border-blue-300"
        >
          Confirm Reservation
        </button>
      </div>
    </form>
    <div className="hidden md:block w-1/4 p-8 mt-20 mr-20 fixed bg-blue-50 top-20 h-auto right-0 -z-10">
    <img src={accord} alt="Logo" className="w-20" />

    <h4 className="text-blue-950 font-bold mb-3">Paramount Hotel</h4>
    <hr className='bg-gray-600 h-0.5'></hr>
    <h4 className="text-md my-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline-block mr-2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
    Check-in 2:00 PM | Check-out 12:00 PM</h4>
    <hr className='bg-gray-600 h-0.5'></hr>
        <h4 className="my-4 text-lm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline-block mr-2">            
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
        {reservationData.checkin} | {reservationData.checkout} </h4>
    
    <hr className='bg-gray-600 h-0.5'></hr>
    {!reservationData.promo ? (<h4 className="my-4 text-lm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline-block mr-2">
    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>Promocode</h4>):( <h4 className="my-4 text-lm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block mr-2 w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    </svg>
    Promocode</h4>
        
    )}
    <hr className='bg-gray-600 h-0.5'></hr>
    {!hasUserIdCookie ? (<h4 className="my-4 text-lm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline-block mr-2">
    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>User Discount</h4>):( <h4 className="my-4 text-lm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block mr-2 w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    </svg>
    User Discount</h4>
        
    )}
   
</div>
</>
  );
};

export default Reservation;
