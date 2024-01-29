import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './style.css'

const Reservation = () => {
    const location = useLocation();
    const reservationData = location.state;
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
    <form onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="max-w-lg mx-auto p-6 bg-slate-200 shadow-md rounded-xl mt-28 border border-blue-950">
      <div className="mb-4">
        <label htmlFor="firstName" className="block  mb-2 text-xl font-medium ">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md w-full bg-white"
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
          className="mt-1 p-2 border rounded-md w-full"
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
          className="mt-1 p-2 border rounded-md w-full"
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
          className="mt-1 p-2 border rounded-md w-full"
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
          className="mt-1 p-2 border rounded-md w-full"
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
          className="mt-1 p-2 border rounded-md w-full"
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
          className="mt-1 p-2 border rounded-md w-full"
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
          className="mt-1 p-2 border rounded-md w-full"
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
  );
};

export default Reservation;
