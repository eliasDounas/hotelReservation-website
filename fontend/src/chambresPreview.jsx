import litSimple from './assets/litSimple.avif'
import litDouble from './assets/litDouble.jpg'
import suite from './assets/suite.jpg'
import './style.css'
import React, { useState } from 'react';

const Preview = () => {
    const [selectedElement, setSelectedElement] = useState("litsSimples");
    return ( 
        <>
        <nav className="flex gap-10 justify-center pt-10" id="chambres">
            <span onClick={() => setSelectedElement("litsSimples")}
            className={`cursor-pointer text-2xl font-body ${selectedElement === 'litsSimples' ? 'font-medium border-b-4 border-blue-900 pb' : ''}`}>Lit Simple</span>
            <span onClick={() => setSelectedElement("litDouble")}
            className={`cursor-pointer text-2xl font-body ${selectedElement === 'litDouble' ? 'font-medium border-b-4 border-blue-900 pb' : ''}`}>Lit Double</span>
            <span  onClick={() => setSelectedElement("suite")}
            className={`cursor-pointer text-2xl font-body ${selectedElement === 'suite' ? ' font-medium border-b-4 border-blue-900 pb' : ''}`}>Suite</span>
        </nav>
        <div className="flex justify-center pb-10">
        {selectedElement === "litsSimples" && <div className="flex flex-col justify-center items-center border-2 rounded-lg border-gray-300 mt-10 p-4 w-2/5">
            <img src={litSimple} alt="Photo de la chambre avec 2 Lits Simples" className=" w-full rounded-lg" />
            <div className=" text-gray-500 font-body self-start ml-3 mt-3">Lit Simple</div>
            <div className=" font-sans font-medium self-start ml-3 text-2xl mt-[-6px]">Chambre Standard avec 2 lits simples</div>
            <div className="self-start ml-3 mt-3">
                <span className="mr-10">2 personnes</span>
                <div className="inline-block w-1.5 h-1.5 bg-blue-950 rounded-full mr-8"></div>
                <span className="">16 m² / 172 sq ft</span>
            </div>
            <div className="self-start ml-3 mt-1">🛌 2 x Lit(s) jumeau(s)</div>
            <div className="self-end mt-5">
                <span className="text-gray-700 text-md">Tarif à partir de </span>
                <span className="ml-1 text-3xl font-bold font-body text-blue-950">54.78€</span>
            </div>
            <div className="self-end text-xs">Frais et taxes inclus</div>
            <button className="w-full bg-blue-950 hover:bg-blue-900 text-white text-xl mt-5 mb-3 rounded-3xl h-12 cursor-pointer font-sans">Réserver</button>
        </div>}
        {selectedElement === "litDouble" && <div className="flex flex-col justify-center items-center border-2 rounded-lg border-gray-300 mt-10 p-4 w-2/5">
            <img src={litDouble} alt="Photo de la chambre avec 2 Lits Simples" className=" w-full rounded-lg" />
            <div className=" text-gray-500 font-body self-start ml-3 mt-3">Lit Double</div>
            <div className=" font-sans font-medium self-start ml-3 text-2xl mt-[-6px]">Chambre Standard avec un lit double</div>
            <div className="self-start ml-3 mt-3">
                <span className="mr-10">2 personnes</span>
                <div className="inline-block w-1.5 h-1.5 bg-blue-950 rounded-full mr-8"></div>
                <span className="">18 m² / 129 sq ft</span>
            </div>
            <div className="self-start ml-3 mt-1">🛌 1 x Lit(s) double(s)</div>
            <div className="self-end mt-3">
                <span className="text-gray-700 text-md">Tarif à partir de </span>
                <span className="ml-1 text-3xl font-bold font-body text-blue-950">53.56€</span>
            </div>
            <div className="self-end text-xs">Frais et taxes inclus</div>
            <button className="w-full bg-blue-950 hover:bg-blue-900 text-white text-xl mt-5 mb-3 rounded-3xl h-12 cursor-pointer font-sans">Réserver</button>
        </div>}
        {selectedElement === "suite" && <div className="flex flex-col justify-center items-center border-2 rounded-lg border-gray-300 mt-10 p-4 w-2/5">
            <img src={suite} alt="Photo de la chambre avec 2 Lits Simples" className=" w-full rounded-lg" />
            <div className=" text-gray-500 font-body self-start ml-3 mt-3">Suite</div>
            <div className=" font-sans font-medium self-start ml-3 text-2xl mt-[-6px]">Chambre Luxe avec un lit double</div>
            <div className="self-start ml-3 mt-3">
                <span className="mr-10">2 personnes</span>
                <div className="inline-block w-1.5 h-1.5 bg-blue-950 rounded-full mr-8"></div>
                <span className="">20 m² / 192 sq ft</span>
            </div>
            <div className="self-start ml-3 mt-1">🛌 1 x Lit(s) Double(s)</div>
            <div className="self-end mt-5">
                <span className="text-gray-700 text-md">Tarif total à partir de </span>
                <span className="ml-1 text-3xl font-bold font-body text-blue-950">94.78€</span>
            </div>
            <div className="self-end text-xs">Frais et taxes inclus, ne prend pas en compte d'eventuelles promotion</div>
            <button className="w-full bg-blue-950 hover:bg-blue-900 text-white text-xl mt-5 mb-3 rounded-3xl h-12 cursor-pointer font-sans">Réserver</button>
        </div>}        
        </div>
        <hr></hr>
        </>
     );
}
export default Preview;