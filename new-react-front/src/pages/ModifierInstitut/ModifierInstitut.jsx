import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useGetInstitutsByIdQuery, useGetRegionsQuery, useGetVillesQuery } from "../../features/apiSlice";
import { Link } from "react-router-dom";
import Layout from "../../components/template/Layout";


export default function ModifierInstitut () {

    const navigate = useNavigate();

    useEffect(()=>{
        !localStorage.getItem('user') && navigate('/login');
    },[]);
    
    const { id } = useParams();

    const { data:institut } = useGetInstitutsByIdQuery(id);

    useEffect(()=>{
        setInstitutData(institut);
    },[institut])

    const [institutData, setInstitutData] = useState({nom: null, adresse: null, nom_directeur: null, tel_institut: null, email_institut: null, ville_id: null});
    

    const { data: regions } = useGetRegionsQuery();
    const { data: villes } = useGetVillesQuery();

    const SendInfos = async(e) => {

        e.preventDefault();
        await axios.put(`http://127.0.0.1:8000/api/instituts/${id}`, institutData)
        .then(response=>{
            navigate('/listInstituts');
        })
        .catch(err=>{
            console.log('error : ', err);
        })
    }
    
    return (
        
        <Layout>
            <div className="w-full bg-white ">
                <header>
                    <div className="mb-5">
                        <div style={{backgroundColor: "#F5A962"}} className=" overflow-hidden w-full shadow-sm  rounded-t-lg">
                            <div className="p-3 text-gray-900 flex justify-between">
                                
                                <div className="flex justify-start items-center ">
                                    <h1 className="text-[20px] ml-2 text-white  mr-5">List Des Instituts</h1>
                                </div>      
                            </div>
                        </div>
                    </div>
                </header>  
                
                {/* formulaire */}
                <div className="container mx-auto px-4 py-4">
                    <form onSubmit={(e)=>SendInfos(e)} className="flex flex-col gap-8">
                        <div className="grid grid-cols-2 gap-8">
                        <div>
                                <label htmlFor="nom" className="m-1 text-gray-700 text-base font-medium">nom</label>
                                <input type="text" value={institutData && institutData.nom} onChange={(e)=>{setInstitutData({...institutData, nom: e.target.value})}} name="nom" id="nom" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"  required />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="nom_directeur" className="m-1 text-gray-700 text-basefont-medium">Nom directeur</label>
                                <input type="text"  value={institutData && institutData.nom_directeur} onChange={(e)=>{setInstitutData({...institutData, nom_directeur: e.target.value})}} name="nom_directeur" id="nom_directeur" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required/>
                            </div>

                            <div className='w-full'>
                                <label htmlFor="adresse" className="m-1 text-gray-700 text-basefont-medium">Adresse</label>
                                <input type="text" value={institutData && institutData.adresse} onChange={(e)=>{setInstitutData({...institutData, adresse: e.target.value})}} name="adresse" id="adresse" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required/>
                            </div>
                            <div className="w-full">
                                <label className="m-1 text-gray-700 text-basefont-medium" htmlFor="ville_id">Ville :</label>
                                <select name="ville_id" onChange={(e)=>{setInstitutData({...institutData, ville_id : parseInt(e.target.value)})}} className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" >
                                    {regions && regions.map((region) => (
                                        <optgroup label={region.nom} key={region.id}>
                                            {villes && villes.map((ville) => {
                                                if (region.id === ville.region_id) {
                                                    return <option key={ville.id} value={ville.id}>{ville.nom}</option>
                                                }
                                            })}
                                        </optgroup>
                                    ))}
                                </select>
                            </div>
                            

                            <div className='w-full'>
                            <label htmlFor="tel_institut" className="m-1 text-gray-700 text-basefont-medium">Tél institut</label>
                            <input type="text" value={institutData && institutData.tel_institut} onChange={(e)=>{setInstitutData({...institutData, tel_institut: e.target.value})}} name="tel_institut" id="tel_institut" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required/>
                            </div>
                            <div className='w-full'>
                            <label htmlFor="email_institut" className="m-1 text-gray-700 text-basefont-medium">Email</label>
                            <input type="email"  value={institutData && institutData.email_institut} onChange={(e)=>{setInstitutData({...institutData, email_institut: e.target.value})}} name="email_institut" id="email_institut" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required/>
                            </div>
                        </div>

                        <div className="flex items-end gap-2 justify-end mt-5">
                            <button type="submit" style={{backgroundColor: "#3c8dad"}} className="py-1 px-4 text-md font-medium text-center text-white rounded-lg mr-0">Enregistrer</button>
                            <button type="reset"  className="py-1 px-4 text-md font-medium text-center text-white rounded-lg bg-primary-700 bg-gray-400 mr-0">Annuler</button>
                            <Link to={"/users"} style={{backgroundColor: "#F5A962"}} className="py-1 px-4 text-md font-medium text-center text-white rounded-lg ">Retour</Link>
                        </div>
                    </form>

                </div>
            </div>
        </Layout>
        
    )
}