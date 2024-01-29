import './style.css'
import { useNavigate } from 'react-router-dom';
const Success = () => {
    const navigate = useNavigate();
    return ( <>
        <div className='font-semibold text-5xl text-center pt-32 mx-64'>
            Votre reservation a bien été enregistrer. Nous vous attendons avec impatience!
        </div>
        <div className=' font-semibold text-2xl text-gray-600 text-center mt-8 mb-16 mx-64'>
            Vous pouvez quittez cette page ou revenir à la page d'acceuil.
        </div>
        <div className="text-center">
            <button className='text-xl border-2 rounded-3xl py-3 font-medium px-10 transition-all duration-500 ease-in-out text-white brightness-120 hover:bg-blue-900 bg-blue-950 mb-10' onClick={ () => navigate('/')}>Revenir à la page d'acceuil</button>
        </div>
        </>
     );
}
 
export default Success;