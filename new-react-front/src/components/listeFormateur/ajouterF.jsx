import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { usePostFormateurMutation } from "../../features/apiSlice";

export default function AjouterF(props){

    const [PostFormateur] = usePostFormateurMutation();

    const [formateurData, setFormateurData] = useState({cin: null, nom: null, prenom: null, dateNaiss: null, tel: null, email: null, niveau_academique:null, institut_id: null, specialite_id:null});

    const SendInfos = (e) => {
        e.preventDefault();
        PostFormateur(formateurData);
        document.forms[0].reset();
    }
    
    return (
        <div className="bg-white mb-32">
            <header>
            <div className="m-0 mb-8">
                <div style={{backgroundColor: "#F5A962"}} className=" overflow-hidden w-full shadow-sm  rounded-t-lg">
                    <div className="p-3 text-gray-900 flex justify-between">
                        
                        <div className="flex justify-start items-center ">
                            <h1 className="text-[20px] ml-2 text-white  mr-5">Ajouter Un Formateur</h1>
                        </div>      
                    </div>
                </div>
            </div>
            </header>  
            
            {/* formulaire */}
            <div className="px-3 py-4">
                <form onSubmit={(e)=>SendInfos(e)} className="grid grid-cols-2 gap-y-4">
                        <div>
                            <label htmlFor="nom" className="m-1 text-gray-700 text-sm font-medium">nom</label>
                            <input type="text" onChange={(e)=>{setFormateurData({...formateurData, nom: e.target.value})}} name="nom" id="nom" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-9/12 p-2.5"  required />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="prenom" className="m-1 text-gray-700 text-sm font-medium">prenom</label>
                            <input type="text" onChange={(e)=>{setFormateurData({...formateurData, prenom: e.target.value})}} name="prenom" id="prenom" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-9/12 p-2.5 " required/>
                        </div>
                        

                        <div className='w-full'>
                            <label htmlFor="cin" className="m-1 text-gray-700 text-sm font-medium">cin</label>
                            <input type="text" onChange={(e)=>{setFormateurData({...formateurData, cin: e.target.value})}} name="cin" id="cin" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-9/12 p-2.5 " required/>
                        </div>
                        <div className='w-full'>
                            <label htmlFor="dateNaiss" className="m-1 text-gray-700 text-sm font-medium">Date Naissane</label>
                            <input type="date" onChange={(e)=>{setFormateurData({...formateurData, dateNaiss: e.target.value})}} name="dateNaiss" id="dateNaiss" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-9/12 p-2.5 " required/>
                        </div>
                        

                        <div className='w-full'>
                        <label htmlFor="tel" className="m-1 text-gray-700 text-sm font-medium">Tél</label>
                        <input type="text" onChange={(e)=>{setFormateurData({...formateurData, tel: e.target.value})}} name="tel" id="tel" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-9/12 p-2.5 " required/>
                        </div>
                        <div className='w-full'>
                        <label htmlFor="email" className="m-1 text-gray-700 text-sm font-medium">Email</label>
                        <input type="email" onChange={(e)=>{setFormateurData({...formateurData, email: e.target.value})}} name="email" id="email" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-9/12 p-2.5 " required/>
                        </div>

                        <div className='w-full'>
                            <label htmlFor="niveau_academique" className="m-1 text-gray-700 text-sm font-medium">Niveau academique</label>
                            <input type="text" onChange={(e)=>{setFormateurData({...formateurData, niveau_academique: e.target.value})}} name="niveau_academique" id="niveau_academique" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-9/12 p-2.5 " required/>
                        </div>
                        <div className="w-full">
                        <label className="text-sm font-medium" htmlFor="specialite_id">Spécialité :</label>
                        <select name="specialite_id" id="specialite_id" onChange={(e)=>{setFormateurData({...formateurData, specialite_id: parseInt(e.target.value)})}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-9/12 p-2.5" required>
                            <option value="">--specialite--</option>
                            {props.specialites && props.specialites.map(spec => (
                                <option key={spec.id} value={spec.id}>{spec.nom}</option>
                            ))}
                        </select>
                        </div>

                        <div className="">
                            <label className="text-sm font-medium" htmlFor="specialite_id">institut (de travail) :</label>
                            <select name="institut_id" id="institut_id" onChange={(e)=>{setFormateurData({...formateurData, institut_id: parseInt(e.target.value)})}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-9/12 p-2.5" required>
                                <option value="">--instituts--</option>
                                {props.instituts && props.instituts.map(inst => (
                                    <option key={inst.id} value={inst.id}>{inst.nom}</option>
                                ))}
                            </select>
                        </div>


                    <div className="flex items-center gap-2 mt-4 col-span-2">
                        <button type="submit" style={{backgroundColor: "#3c8dad"}} className="py-1 px-4 text-md font-medium text-center text-white rounded-lg mr-0">Enregistrer</button>
                        <button type="reset"  className="py-1 px-4 text-md font-medium text-center text-white rounded-lg bg-primary-700 bg-gray-300 mr-0">Annuler</button>
                        <Link to={"/listeFormateurs"} style={{backgroundColor: "#F5A962"}} className="py-1 px-4 text-md font-medium text-center text-white rounded-lg ">Retour</Link>
                    </div>
                </form>

            </div>
        </div>
    )
}