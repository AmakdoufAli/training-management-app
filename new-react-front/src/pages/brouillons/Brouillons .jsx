import React, { useEffect } from 'react';
// import './Brouillons.css'; 
import { useGetBrouillonsQuery } from '../../features/apiSlice';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../components/template/Layout';

function Brouillons() {

    const navigate = useNavigate();

    useEffect(()=>{
        !localStorage.getItem('user') && navigate('/login');
    },[]);

    const { data:brouillons } = useGetBrouillonsQuery();

    const handleDelete = (id) => {
        alert("Suppression du brouillon avec l'ID :", id);
    }

    const publish = async (id) => {
        if (window.confirm("Êtes-vous sûr de publier cette formation ?")) {
            try {
                const response = await axios.put(`http://127.0.0.1:8000/api/brouillon-publish/${id}`);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const deleteBrouillons = async(id) =>{
        if(window.confirm('Vouler-vous vraiment supprimer cette brouillon numéro '+ id + ' ?')){
            try{
                await axios.delete(`http://127.0.0.1:8000/api/documentationByIdFormation/${id}`);
                await axios.delete(`http://127.0.0.1:8000/api/notificationByIdFormation/${id}`);
                await axios.get(`http://127.0.0.1:8000/api/detaching/${id}`);
                await axios.delete(`http://127.0.0.1:8000/api/formations/${id}`);
            }catch(err){
                alert('On peut pas supprimer cette à cause d\'un probleme non reconu !')
            }
        }
    }

    return (
        <Layout>
            <div>
                <header>
                    <div className="m-0 mb-8">
                        <div style={{backgroundColor: "#F5A962"}} className=" overflow-hidden w-full shadow-sm  rounded-t-lg">
                            <div className="p-3 text-gray-900 flex justify-between">
                                
                                <div className="flex justify-start items-center ">
                                    <h1 className="text-[20px] ml-2 text-white  mr-5">Liste Des Brouillons</h1>
                                </div>      
                            </div>
                        </div>
                    </div>
                </header>    
                {brouillons && brouillons.map((formation, index) => (

                    <div className="p-5 space-y-3" key={index}>
                        <div className='text-center py-1 px-5 font-semibold bg-gray-1 rounded-lg w-fit'>
                            <p>Formation</p>
                            <p>n°{formation.id}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className='flex items-center gap-x-8 text-lg'>
                                <p><b>Titre : </b>{formation.titre}</p>
                                <p> | {formation.date_debut}</p>
                            </div>
                            <div className="flex items-center gap-3 text-lg">
                                <Link to={`/brouillons/edit/${formation.id}`} className='bg-orange-1 py-1 rounded-lg text-white px-4'>Modifier</Link>
                                <button className='bg-orange-1 py-1 rounded-lg text-white px-4' onClick={()=>deleteBrouillons(formation.id)}>Supprimer</button>
                            </div>
                        </div>
                        <hr />
                    </div>

                ))}
            </div>
        </Layout>
    );

}

export default Brouillons;


    

    // return (
    //     <Layout>
    //         <div>
    //             <h2 className='text-3xl font-bold m-3'>Liste de Brouillons</h2>
    //             <table className="text-sm text-left rtl:text-right text-gray-500 w-full">
    //                 <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
    //                     <tr>
    //                         <th className='px-6 py-3'>ID</th>
    //                         <th className='px-6 py-3'>Titre</th>
    //                         <th className='px-6 py-3'>Nombre d'heures</th>
    //                         <th className='px-6 py-3'>Nombre de jours</th>
    //                         <th className='px-6 py-3'>Date de début</th>
    //                         <th className='px-6 py-3'>Date de fin</th>
    //                         <th className='px-6 py-3'>Adresse</th>
    //                         <th className='px-6 py-3'>Actions</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {brouillons && brouillons.map((brouillon, index) => (
    //                         <tr key={index} className='odd:text-black odd:dark:bg-gray-100 even:bg-gray-50'>
    //                             <td className='px-6 py-3'>{brouillon.id}</td>
    //                             <td className='px-6 py-3'>{brouillon.titre}</td>
    //                             <td className='px-6 py-3'>{brouillon.nbr_heures}</td>
    //                             <td className='px-6 py-3'>{brouillon.nbr_jours}</td>
    //                             <td className='px-6 py-3'>{brouillon.date_debut}</td>
    //                             <td className='px-6 py-3'>{brouillon.date_fin}</td>
    //                             <td className='px-6 py-3'>{brouillon.adresse}</td>
    //                             <td className='px-6 py-3 flex items-center gap-2'>
    //                                 <Link to={`/brouillons/edit/${brouillon.id}`} className='bg-blue-500 p-3 rounded-md text-white font-semibold'>Modifier</Link>
    //                                 <button onClick={() => handleDelete(brouillon.id)} className='bg-red-500 p-3 rounded-md text-white font-semibold'>Supprimer</button>
    //                                 {/* <button onClick={() =>publish(brouillon.id)} className='bg-green-500 p-3 rounded-md text-white font-semibold'>Publish</button> */}
    //                             </td>
    //                         </tr>
    //                     ))}
    //                 </tbody>
    //             </table>
    //         </div>
    //     </Layout>
    // );