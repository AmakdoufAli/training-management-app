import {useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { useGetFormateurByIdQuery, useGetInstitutsQuery, useGetSpecialitesQuery } from "../../features/apiSlice";
import axios from "axios";
import Layout from "../../components/template/Layout";

export default function ModifierFormateur(){

    const { id } = useParams();

    const {data: formateur} = useGetFormateurByIdQuery(id);

    console.log(formateur);

    const {data: specialites} = useGetSpecialitesQuery();
    const {data: instituts} = useGetInstitutsQuery();

    const navigate = useNavigate();    
        
    useEffect(()=>{
        setFormateurData(formateur);
    },[formateur])

    const [formateurData, setFormateurData] = useState({cin: null, nom: null, prenom: null, dateNaiss: null, tel: null, email: null, niveau_academique:null, institut_id: null, specialite_id:null});


    const SendInfos = async(e) => {
        e.preventDefault();
        await axios.put(`http://127.0.0.1:8000/api/formateurs/${id}`, formateurData)
        .then(response=>{
            navigate('/listeFormateurs');
        })
        .catch(err=>{
            console.log('error : ', err);
        })
    }
    
    return (
        
        <Layout>
            <div className="w-full bg-white">
                <header>
                    <div className=" m-0 mb-8">
                        <div style={{backgroundColor: "#F5A962"}} className=" overflow-hidden w-full h-14 shadow-sm  rounded-t-lg">
                            <div class="p-2 text-gray-900 flex justify-between">
                                
                                <div className="flex justify-start items-center ">
                                    <h1 className="text-[20px] ml-2 text-white  mr-5"> Modifier un Formateur </h1>
                                </div>      
                            </div>
                        </div>
                    </div>
                </header>
                
                {/* formulaire */}
                <div className=" mx-auto sm:px-4 lg:px-8 ">
                    <form onSubmit={(e)=>SendInfos(e)} className="flex flex-col gap-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-24">
                            <div>
                                <label htmlFor="nom" className="m-1 text-gray-700 text-sm font-medium">nom</label>
                                <input type="text"  value={formateurData && formateurData.nom}  onChange={(e)=>{setFormateurData({...formateurData, nom: e.target.value})}} name="nom" id="nom" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"  required />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="prenom" className="m-1 text-gray-700 text-sm font-medium">prenom</label>
                                <input type="text"  value={formateurData && formateurData.prenom}  onChange={(e)=>{setFormateurData({...formateurData, prenom: e.target.value})}} name="prenom" id="prenom" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required/>
                            </div>
                            
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-24">
                            <div className='w-full'>
                                <label htmlFor="cin" className="m-1 text-gray-700 text-sm font-medium">cin</label>
                                <input type="text"  value={formateurData && formateurData.cin}  onChange={(e)=>{setFormateurData({...formateurData, cin: e.target.value})}} name="cin" id="cin" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required/>
                            </div>
                            <div className='w-full'>
                                <label htmlFor="dateNaiss" className="m-1 text-gray-700 text-sm font-medium">Date Naissane</label>
                                <input type="date"  value={formateurData && formateurData.dateNaiss}  onChange={(e)=>{setFormateurData({...formateurData, dateNaiss: e.target.value})}} name="dateNaiss" id="dateNaiss" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required/>
                            </div>
                            
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-24">
                            <div className='w-full'>
                            <label htmlFor="tel" className="m-1 text-gray-700 text-sm font-medium">Tél</label>
                            <input type="tel" value={formateurData && formateurData.tel}  onChange={(e)=>{setFormateurData({...formateurData, tel: e.target.value})}} name="tel" id="tel" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required/>
                            </div>
                            <div className='w-full'>
                            <label htmlFor="email" className="m-1 text-gray-700 text-sm font-medium">Email</label>
                            <input type="email" value={formateurData && formateurData.email} onChange={(e)=>{setFormateurData({...formateurData, email: e.target.value})}} name="email" id="email" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required/>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-24">
                            <div className='w-full'>
                                <label htmlFor="niveau_academique" className="m-1 text-gray-700 text-sm font-medium">Niveau academique</label>
                                <input type="text" value={formateurData && formateurData.niveau_academique}  onChange={(e)=>{setFormateurData({...formateurData, niveau_academique: e.target.value})}} name="niveau_academique" id="niveau_academique" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required/>
                            </div>
                            <div className="w-full">
                            <label className="text-sm font-medium" htmlFor="specialite_id">Spécialité :</label>
                            <select name="specialite_id" id="specialite_id" onChange={(e)=>{setFormateurData({...formateurData, specialite_id: parseInt(e.target.value)})}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                                <option value="">--specialite--</option>
                                {specialites && specialites.map(spec => (
                                    <option key={spec.id} value={spec.id}>{spec.nom}</option>
                                ))}
                            </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-24">
                            <div className="w-full">
                                <label className="text-sm font-medium" htmlFor="specialite_id">institut (de travail) :</label>
                                <select name="institut_id" id="institut_id" onChange={(e)=>{setFormateurData({...formateurData, institut_id: parseInt(e.target.value)})}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                                    <option value="">--instituts--</option>
                                    {instituts && instituts.map(inst => (
                                        <option key={inst.id} value={inst.id} >{inst.nom}</option>
                                    ))}
                                </select>
                            </div>
                        </div>


                        <div className="flex items-center gap-2 justify-end mt-4">
                            <button type="submit" style={{backgroundColor: "#3c8dad"}} className="py-1 px-4 text-md font-medium text-center text-white rounded-lg mr-0">Enregistrer</button>
                            <button type="reset"  className="py-1 px-4 text-md font-medium text-center text-white rounded-lg bg-primary-700 bg-gray-300 mr-0">Annuler</button>
                            <Link to={"/listeFormateurs"} style={{backgroundColor: "#F5A962"}} className="py-1 px-4 text-md font-medium text-center text-white rounded-lg ">Retour</Link>
                        </div>
                    </form>

                </div>
            </div>
        </Layout>
        
    )
}