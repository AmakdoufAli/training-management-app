import React from 'react';
import './Brouillons.css'; 
import { useGetBrouillonsQuery } from '../../features/apiSlice';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../components/template/Layout';

function Brouillons() {

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

    return (
        <Layout>
            <div>
                <h2>Liste des Formations</h2>
                {brouillons && brouillons.map((formation, index) => (
                    <div className="formation-card" key={index}>
                        <div className="">
                            <p className='numero'>Formation n°{formation.id}</p>
                            <h3>titre:{formation.titre} <span className="space"></span><span className="slash"></span> {formation.date_debut}</h3>
                        </div>
                        <div className="button-group flex items-center gap-3">
                            <Link to={`/brouillons/edit/${formation.id}`} className='bg-orange-1 py-2 rounded-full text-white px-6'>Modifier</Link>
                            <button className='bg-orange-1 py-2 rounded-full text-white px-6'>Supprimer</button>
                        </div>
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