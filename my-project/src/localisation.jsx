import './style.css';

const Localisation = () => {
    return ( 
        <>
        <div className="mx-64 flex flex-col justify-center items-center mb-10">
            <h2 className="font-body font-extrabold text-4xl mb-8 pt-6 self-start">Localisation</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.437143833026!2d-6.83285238940859!3d34.032656018653576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b926283b669%3A0x8f3aaad1dd2b611d!2sFairmont%20Hotel%20%26%20Residences!5e0!3m2!1sen!2sma!4v1705936351555!5m2!1sen!2sma" width="600" height="450" style={{ border:"0" }} className=" border-0 w-full h-[500px]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <h2 className="font-body font-bold text-2xl mb-4 pt-6 self-start">Hotel Fairmont</h2>
            <div className="flex self-start">
                <ul className="mr-28">
                    <li className="font-body text-blue-950 text-xl">Avenue des Almohades, Place de la Gare</li>
                    <li className="font-body text-blue-950 text-xl">30000 FES</li>
                    <li className="font-body text-blue-950 text-xl">MAROC</li>
                    <li className="font-body text-blue-950 text-xl"><span className="font-bold">GPS</span>:34.046528, -5.004305</li>
                </ul>
                
                <ul className="">
                    <li className="font-body text-blue-950 mt-2 text-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block w-7 mr-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    +212 5356-51909</li>
                    <li className="font-body text-blue-950 mt-2 text-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block w-7 mr-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                    </svg>
                    +212 5356-51902</li>
                    <li className="font-body text-blue-950 mt-2 text-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block w-7 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    test@test.com</li>
                </ul>
            </div>

        </div>

        </>
     );
}
 
export default Localisation;