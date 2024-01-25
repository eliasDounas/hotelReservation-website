import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hebergements = () => {
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [promo, setPromo] = useState('');
  const [minCheckoutDate, setMinCheckoutDate] = useState('');
  const [promoAttempts, setPromoAttempts] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');

  const navigate = useNavigate();

  const enableCheckout = (e) => {
    const selectedDate = e.target.value;

    // Set the minimum date for checkout to be one day after the selected checkin date
    const checkinDate = new Date(selectedDate);
    checkinDate.setDate(checkinDate.getDate() + 1);

    // Format the date as YYYY-MM-DD
    const formattedMinDate = checkinDate.toISOString().split('T')[0];

    setCheckin(selectedDate);
    setMinCheckoutDate(formattedMinDate);
  };

  const validatePromo = (e) => {
      if (e === "summer2024" || e === ""){
        return true;
      }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let promoValue = promo.trim().toLowerCase();
    if (!validatePromo(promoValue)) {
      
      setPromoAttempts(n => n+1);
      setPromoMessage(`Promo Code Invalid! ${3 - promoAttempts} tentatives restantes.`)
      if (promoAttempts>=3){
        setPromoMessage("Promo Code Invalide! Plus de tentatives autorisés")
        document.getElementById('promo').disabled = true;
        setPromo(""); 
      };
      return false;
      } else {
        setPromoAttempts(0);
        
        try {
          const dataCheck = { checkin, checkout };
          const response = await fetch('http://localhost:3001/check-availability', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataCheck),
          });
          
          if (response.ok) {
              const data = await response.json();
              const reservationData = { checkin, checkout, promo, data };
              navigate('chambres', { state: reservationData });
          } else {
              //display incorrect Email or Password message
              setFailedLogin('true');
          } 
      } catch (error) {
          console.error('Error during login:', error.message);
        }}
    };
        
      

  return (
    <>
      <h2 className="font-body font-extrabold text-4xl mb-8 ml-64">Nos hébergements</h2>

      <div className="mx-64 p-4">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 md:justify-around">
            <div className="">
              <label htmlFor="checkin" className="block text-xl font-medium text-gray-700">
                Arrivée
              </label>
              <input
                type="date"
                id="checkin"
                name="checkin"
                value={checkin}
                onChange={enableCheckout}
                className="mt-1 p-2 border border-gray-300"
                min={new Date().toISOString().split('T')[0]} // Minimum date is today
                required
              />
            </div>
            <div className="">
              <label htmlFor="checkout" className="block text-xl font-medium text-gray-700">
                Départ
              </label>
              <input
                type="date"
                id="checkout"
                name="checkout"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
                className="mt-1 p-2 border border-gray-300"
                disabled={minCheckoutDate === ''}
                min={minCheckoutDate}
                required
              />
            </div>
            <div className="">
              <label htmlFor="promo" className="block text-xl font-medium text-gray-700">
                Code Promo
              </label>
              <input
                type="text"
                id="promo"
                name="promo"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                className="mt-1 p-2 border border-gray-300 disabled:cursor-not-allowed"
              />
            </div>
          
          <input
            type="submit"
            value="Voir les tarifs"
            className="transform translate-y-[28px] bg-blue-950 hover:bg-blue-900 text-white text-xl px-10 rounded-3xl h-12 cursor-pointer"
          /></div>
          <p id="promoMessage" className="text-red-500 self-end mr-60 w-80 h-auto ">{promoMessage}</p>
        </form></div>
      
    </>
  );
};

export default Hebergements;
