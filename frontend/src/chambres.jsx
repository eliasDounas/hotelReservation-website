import './style.css'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import litSimple from './assets/litSimple.avif'
import litDouble from './assets/litDouble.jpg'
import suite from './assets/suite.jpg'
import accord from './assets/logo.svg'

const Chambres = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const reservationData = location.state;
    const [hasUserIdCookie, setHasUserIdCookie] = useState(false);
    const availability = reservationData.data;
    useEffect(() => {
        const userIdCookie = Cookies.get('userId');
        setHasUserIdCookie(!!userIdCookie); // Set to true if userIdCookie exists, false otherwise
      }, []);

    const reserverChambre1 = () => {
        const reservationsData = { checkin: reservationData.checkin , checkout: reservationData.checkout, promo : reservationData.checkout, chambre: "A" };
        navigate('/reservation', { state: reservationsData });
    }
    const reserverChambre2 = () => {
        const reservationsData = { checkin: reservationData.checkin , checkout: reservationData.checkout, promo : reservationData.checkout, chambre: "B" };
        navigate('/reservation', { state: reservationsData });
    }
    const reserverChambre3 = () => {
        const reservationsData = { checkin: reservationData.checkin , checkout: reservationData.checkout, promo : reservationData.checkout, chambre: "C" };
        navigate('/reservation', { state: reservationsData });
    }
    
    return (  
        <>
        <div className="flex flex-col justify-start mx-20 py-28 md:ml-32 md:mr-0 md:w-1/2 w-full bg-white">
        <h1 className='text-3xl font-bold mb-6'>Choose your room</h1>
        { availability.A && <div className="flex flex-col justify-center items-center border-2 rounded-lg border-gray-300 p-4 ">
            <img src={litSimple} alt="Photo de la chambre avec 2 Lits Simples" className=" w-full rounded-lg" />
            <div className=" text-gray-500 font-body self-start ml-3 mt-3">Lit Simple</div>
            <div className=" font-sans font-medium self-start ml-3 text-3xl mt-[-6px]">Chambre Standard avec 2 lits simples</div>
            <div className="self-start ml-3 mt-3">
                <span className="mr-10">2 personnes</span>
                <div className="inline-block w-1.5 h-1.5 bg-blue-950 rounded-full mr-8"></div>
                <span className="">16 m² / 172 sq ft</span>
            </div>
            <div className="self-start ml-3 mt-1">🛌 2 x Lit(s) jumeau(s)</div>
            <div className="self-end mt-5">
                <span className="text-gray-700 text-md">Tarif à partir de </span>

                {reservationData.promo ? (
                hasUserIdCookie ? (
                    <span className="ml-1 text-3xl font-bold font-body text-blue-950">43.82€</span>
                ) : (
                    <span className="ml-1 text-3xl font-bold font-body text-blue-950">54.78€</span>
                )
                ) : (
                hasUserIdCookie ? (
                    <span className="ml-1 text-3xl font-bold font-body text-blue-950">49.30€</span>
                ) : (
                    <span className="ml-1 text-3xl font-bold font-body text-blue-950">54.78€</span>
                )
                )}
            </div>
            <div className="self-end text-xs">Frais et taxes inclus</div>
            <button className="w-full bg-blue-950 hover:bg-blue-900 text-white text-xl mt-5 mb-3 rounded-3xl h-12 cursor-pointer font-sans" onClick={reserverChambre1}>Réserver</button>
        </div> }
        {availability.B && <div className="flex flex-col justify-center items-center border-2 rounded-lg border-gray-300 mt-10 p-4">
            <img src={litDouble} alt="Photo de la chambre avec 2 Lits Simples" className=" w-full rounded-lg" />
            <div className=" text-gray-500 font-body self-start ml-3 mt-3">Lit Double</div>
            <div className=" font-sans font-medium self-start ml-3 text-3xl mt-[-6px]">Chambre Standard avec un lit double</div>
            <div className="self-start ml-3 mt-3">
                <span className="mr-10">2 personnes</span>
                <div className="inline-block w-1.5 h-1.5 bg-blue-950 rounded-full mr-8"></div>
                <span className="">18 m² / 129 sq ft</span>
            </div>
            <div className="self-start ml-3 mt-1">🛌 1 x Lit(s) double(s)</div>
            <div className="self-end mt-3">
                <span className="text-gray-700 text-md">Tarif à partir de </span>
                {reservationData.promo ? (
                hasUserIdCookie ? (
                    <span className="ml-1 text-3xl font-bold font-body text-blue-950">42.84€</span>
                ) : (
                    <span className="ml-1 text-3xl font-bold font-body text-blue-950">48.20€</span>
                )
                ) : (
                hasUserIdCookie ? (
                    <span className="ml-1 text-3xl font-bold font-body text-blue-950">48.20€</span>
                ) : (
                    <span className="ml-1 text-3xl font-bold font-body text-blue-950">53.56€</span>
                )
                )}
            </div>
            <div className="self-end text-xs">Frais et taxes inclus</div>
            <button className="w-full bg-blue-950 hover:bg-blue-900 text-white text-xl mt-5 mb-3 rounded-3xl h-12 cursor-pointer font-sans" onClick={reserverChambre2}>Réserver</button>
            </div> }
            { availability.C && <div className="flex flex-col justify-center items-center border-2 rounded-lg border-gray-300 mt-10 p-4 ">
            <img src={suite} alt="Photo de la chambre avec 2 Lits Simples" className=" w-full rounded-lg" />
            <div className=" text-gray-500 font-body self-start ml-3 mt-3">Suite</div>
            <div className=" font-sans font-medium self-start ml-3 text-3xl mt-[-6px]">Chambre Luxe avec un lit double</div>
            <div className="self-start ml-3 mt-3">
                <span className="mr-10">2 personnes</span>
                <div className="inline-block w-1.5 h-1.5 bg-blue-950 rounded-full mr-8"></div>
                <span className="">20 m² / 192 sq ft</span>
            </div>
            <div className="self-start ml-3 mt-1">🛌 1 x Lit(s) Double(s)</div>
            <div className="self-end mt-5">
            {reservationData.promo ? (
                hasUserIdCookie ? (
                    <span className="ml-1 text-3xl font-bold font-body text-blue-950">75.80€</span>
                ) : (
                    <span className="ml-1 text-3xl font-bold font-body text-blue-950">85.30€</span>
                )
                ) : (
                hasUserIdCookie ? (
                    <span className="ml-1 text-3xl font-bold font-body text-blue-950">85.30€</span>
                ) : (
                    <span className="ml-1 text-3xl font-bold font-body text-blue-950">94.78€</span>
                )
                )}
            </div>
            <div className="self-end text-xs">Frais et taxes inclus</div>
            <button className="w-full bg-blue-950 hover:bg-blue-900 text-white text-xl mt-5 mb-3 rounded-3xl h-12 cursor-pointer font-sans" onClick={reserverChambre3}>Réserver</button>
        </div> }
        { (!availability.A && !availability.B && !availability.C) && <div className='font-bold text-3xl'> No Rooms Available at the requested timeline </div>}
        <p className='text-sm text-gray-600 mt-8'>(1) The prices indicated are per accommodation (room, bed, etc.) or other services, for the number of people and the date(s) selected previously, unless otherwise specified. If they are not included in the rate or specifically selected when the reservation is made, supplementary services (breakfast, half board, full board etc.) are available as option which can be paid at the hotel directly.</p>
        <p className='text-sm text-gray-600 mt-2'>
        Taxes are included in the price or indicated in the tax details. Some taxes may be payable on arrival at the hotel (for example, tourist tax), depending on current local regulations.</p>
        <p className='text-sm text-gray-600 mt-2'>
        All bookings, wherever they are made, are payable in the hotel's currency.​ Only the amount confirmed during the booking in the currency of the hotel is guaranteed. Conversion to the customer's currency is given for reference only and is not part of the contract. Costs linked to conversions between the hotel's currency and that of the customer (exchange rates, bank fees) shall be paid by the customer.​</p>
        <p className='text-sm text-gray-600 mt-2'>
        The amount is converted according to the exchange rate of the day provided by our partner DEVISEA, with the Euro as reference currency.</p>
        <p className='text-sm text-gray-600 mt-2'>
        The promotion displayed applies to the standard rate of the day offered by the hotel. The standard rate may vary depending on the reservation period and the dates of stay.</p>
        </div>






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
}
 
export default Chambres;