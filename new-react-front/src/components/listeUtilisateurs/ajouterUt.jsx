import { useState, useEffect } from "react";
import { usePostUserMutation } from "../../features/apiSlice";
import Layout from "../template/Layout";
import { Link, useNavigate } from "react-router-dom";

export default function AjouterUt(){
   
    const [PostUser] = usePostUserMutation();
    const navigate = useNavigate();

    const [userData, setUserData] = useState({name: null, email: null, role: null, password:null, password_confirmation:null});

    const SendInfos = (e) => {
        e.preventDefault();
        if(userData.password !== userData.password_confirmation){
            alert('Les mots de passe ne sont pas compatible');
        }else{
            PostUser(userData);
            document.forms[0].reset();
            navigate('/users');
        }
    }
    
    return (
        <Layout className="bg-white mb-32">
            <header>
            <div className="m-0 mb-8">
                <div style={{backgroundColor: "#F5A962"}} className=" overflow-hidden w-full shadow-sm  rounded-t-lg">
                    <div className="p-3 text-gray-900 flex justify-between">
                        <div className="flex justify-start items-center ">
                            <h1 className="text-[20px] ml-2 text-white  mr-5">Ajouter un Utilisateur</h1>
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
                            <label htmlFor="name" className="m-1 text-gray-700 text-base font-medium">Nom</label>
                            <input type="text" onChange={(e)=>{setUserData({...userData, name: e.target.value})}} name="name" id="name" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5"  required autoFocus />
                        </div>
                       
                        <div className='w-full'>
                            <label htmlFor="email" className="m-1 text-gray-700 text-base font-medium">Email</label>
                            <input type="email" onChange={(e)=>{setUserData({...userData, email: e.target.value})}} name="email" id="email" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5 " required/>
                        </div>

                        <div className='w-full'>
                            <label htmlFor="role" className="m-1 text-gray-700 text-base font-medium">Role</label>
                            <select id="role" name="role" onChange={(e)=>{setUserData({...userData, role: e.target.value})}} className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5 " required autoComplete="role">
                                <option value=""></option>
                                <option value="admin">Admin</option>
                                <option value="gestionnaire">Gestionnaire</option>
                            </select>
                        </div>

                        <div className='w-full'>
                            <label htmlFor="password" className="m-1 text-gray-700 text-base font-medium">Password</label>
                            <input type="password" onChange={(e)=>{setUserData({...userData, password: e.target.value})}} name="password" id="password" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5 " required/>
                        </div>

                        <div className='w-full'>
                            <label htmlFor="password_confirmation" className="m-1 text-gray-700 text-base font-medium">Confirme Password</label>
                            <input type="password" onChange={(e)=>{setUserData({...userData, password_confirmation: e.target.value})}} name="password_confirmation" id="password_confirmation" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5 " required/>
                        </div>
                    
                    </div>
                    <div className="flex items-end gap-2 justify-end mt-8">
                        <button type="submit" style={{backgroundColor: "#3c8dad"}} className="py-1 px-4 text-md font-medium text-center text-white rounded-lg mr-0">Enregistrer</button>
                        <button type="reset"  className="py-1 px-4 text-md font-medium text-center text-white rounded-lg bg-primary-700 bg-gray-400 mr-0">Annuler</button>
                        <Link to={"/users"} style={{backgroundColor: "#F5A962"}} className="py-1 px-4 text-md font-medium text-center text-white rounded-lg ">Retour</Link>
                    </div>
                </form>

            </div>
        </Layout>
    )
}