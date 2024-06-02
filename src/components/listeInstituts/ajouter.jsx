import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { usePostInstitutsMutation } from "../../features/apiSlice";

export default function Ajouter(props){
   
    const [PostInstitut] = usePostInstitutsMutation();

    const [institutData, setInstitutData] = useState({nom: null, adresse: null, nom_directeur: null, tel_institut: null, email_institut: null, ville_id: null});

    const SendInfos = (e) => {
        e.preventDefault();
        PostInstitut(institutData);
        document.forms[0].reset();
    }
    
    return (
        <div className="bg-white mb-32">
            <header>
                <div className="m-0 mb-2">
                    <div style={{backgroundColor: "#F5A962"}} className=" overflow-hidden w-full h-14 shadow-sm  rounded-t-lg">
                        <div className="p-2 text-gray-900 flex justify-between">
                            <div className="flex justify-start items-center ">
                                <h1 className="text-[20px] ml-2 text-white  mr-5"> Ajouter un Institut </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            {/* formulaire */}
            <div className=" container mx-auto px-4 py-4 ">
                <form onSubmit={(e)=>SendInfos(e)} >
                <div className="grid grid-cols-2 gap-8">
                        <div>
                            <label htmlFor="nom" className="m-1 text-gray-700 text-sm font-medium">nom</label>
                            <input type="text" onChange={(e)=>{setInstitutData({...institutData, nom: e.target.value})}} name="nom" id="nom" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"  required />
                        </div>
                        <div >
                            <label htmlFor="nom_directeur" className="m-1 text-gray-700 text-sm font-medium">Nom directeur</label>
                            <input type="text" onChange={(e)=>{setInstitutData({...institutData, nom_directeur: e.target.value})}} name="nom_directeur" id="nom_directeur" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required/>
                        </div>
                    

                    
                        <div>
                            <label htmlFor="adresse" className="m-1 text-gray-700 text-sm font-medium">Adresse</label>
                            <input type="text" onChange={(e)=>{setInstitutData({...institutData, adresse: e.target.value})}} name="adresse" id="adresse" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required/>
                        </div>
                        <div >
                            <label className="m-1 text-gray-700 text-sm font-medium" htmlFor="ville_id">Ville :</label>
                            <select name="ville_id" onChange={(e)=>{setInstitutData({...institutData, ville_id : parseInt(e.target.value)})}} className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" >
                                {props.regions && props.regions.map((region) => (
                                <optgroup label={region.nom} key={region.id}>
                                    {props.villes && props.villes.map((ville) => {
                                    if (region.id === ville.region_id) {
                                        return <option key={ville.id} value={ville.id}>{ville.nom}</option>
                                    }
                                    })}
                                </optgroup>
                                ))}
                            </select>
                        </div>
                        
                    

                    
                        <div >
                            <label htmlFor="tel_institut" className="m-1 text-gray-700 text-sm font-medium">Tél institut</label>
                            <input type="text" onChange={(e)=>{setInstitutData({...institutData, tel_institut: e.target.value})}} name="tel_institut" id="tel_institut" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required/>
                        </div>
                        <div className='w-full'>
                            <label htmlFor="email_institut" className="m-1 text-gray-700 text-sm font-medium">Email</label>
                            <input type="email" onChange={(e)=>{setInstitutData({...institutData, email_institut: e.target.value})}} name="email_institut" id="email_institut" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required/>
                        </div>
                    
                    </div>
                    <div className="flex items-end gap-2 justify-end mt-8">
                        <button type="submit" style={{backgroundColor: "#3c8dad"}} className="py-1 px-4 text-md font-medium text-center text-white rounded-lg mr-0">Enregistrer</button>
                        <button type="reset"  className="py-1 px-4 text-md font-medium text-center text-white rounded-lg bg-primary-700 bg-gray-400 mr-0">Annuler</button>
                        <Link to={"/listInstituts"} style={{backgroundColor: "#F5A962"}} className="py-1 px-4 text-md font-medium text-center text-white rounded-lg ">Retour</Link>
                    </div>
                </form>

            </div>
        </div>
    )
}