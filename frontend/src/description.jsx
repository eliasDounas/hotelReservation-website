import './style.css'
const Description = () => {
    return ( 
        <> 
        <div className="w-5/12 mt-32 ml-64 inline-block">
            <h2 className="font-body font-bold text-6xl mb-4">Hotel Fairmont</h2>
            <h4 className="font-body font-medium text-3xl mb-8">Une expérience en or pour un séjour inoubliable</h4>
            <p  className="text-xl opacity-85">L'hôtel Fairmont, niché dans un cadre pittoresque, vous accueille avec élégance et modernité. Idéalement situé à quelques pas de la gare, notre établissement offre une ambiance chaleureuse aux teintes orientales. Avec ses 120 chambres confortables, chacune équipée d'une salle de bain privée, d'un coin bureau, de la climatisation et d'une connexion Wi-Fi illimitée, vous trouverez ici tout le confort nécessaire pour un séjour agréable.
            </p> <p className="text-xl opacity-85">
            Pour votre bien-être, notre établissement met à votre disposition un restaurant proposant une cuisine internationale raffinée, un bar ouvert 24h/24 pour des moments de détente, ainsi qu'un jardin paisible agrémenté d'une piscine. De plus, nos 2 salles de réunion modernes sont parfaites pour accueillir vos événements professionnels avec succès.</p>
        </div>
        <div className="w-1/5 mr-48 ml-20 my-24 bg-blue-50 border-2 rounded-xl p-3 inline-block h-auto transform translate-y-[-32px]">
            <h4 className="p-2 font-body font-medium text-2xl mb-8">Les plus de l'hôtel</h4>
            <ul className="">
                <li><div className="flex my-1 mx-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-20  mr-2 self-start">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg><div className="text-xl">
                Chambres confortables avec salle de bain, coin bureau, climatisation et wifi illimité</div></div></li>
                <li><div className="flex my-1 mx-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-20  mr-2 self-start">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg><div className="text-xl">
                Emplacement stratégique, situé en plein centre-ville et près de la gare ferroviaire</div></div></li>
                <li><div className="flex my-1 mx-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-20 mr-2 self-start">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg><div className="text-xl">
                Hôtel doté de deux salles de réunion pour accueillir vos événements professionnels</div></div></li>
                <li><div className="flex my-1 mx-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 mr-2 self-start">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg><div className="text-xl">
                Un très bon rapport qualité prix</div></div></li>
            </ul> 
        </div>
        </>
     );
}
 
export default Description;