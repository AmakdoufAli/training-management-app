import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { useGetInstitutsByIdQuery } from '../../features/apiSlice';
import Layout from '../../components/template/Layout';
import { Link } from 'react-router-dom';

const DetailsInst = () => {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem('user')){
            setShow(true);
        }else{
            setShow(false);
            navigate('/login');
        }
    },[]);

    const { id } = useParams();
    const {data: institut} = useGetInstitutsByIdQuery(id);

    const navigateTo = (id) =>{
        navigate(`/detailsFormateurs/${id}`);
    }

  return (
    show && (
        <Layout>
            <header>
                <div className="">
                    <div style={{backgroundColor: "#F5A962"}} className=" overflow-hidden w-full shadow-sm  rounded-t-lg">
                        <div className="p-3 flex justify-between">
                            <div className="flex justify-start items-center ">
                                <h1 className="text-[20px] ml-2 text-white  mr-5">Détails de l'Institut</h1>
                            </div>      
                        </div>
                    </div>
                </div>
            </header>

            <div className="p-8 bg-white rounded-lg shadow-md mx-auto space-y-6 pb-16">
                <Link to={'/listInstituts'} className="bg-blue-1 text-white text-lg px-7 py-1 rounded-l-full">Retour</Link>
                <div className="space-y-6">
                    <table className="w-full">
                        <tbody className='border'>
                            <tr className='border-b-2 border-white'>
                                <td className="text-xl text-gray-600 font-semibold p-3 bg-blue-100">Nom:</td>
                                <td className="text-xl bg-blue-50 p-3">{institut?.nom}</td>
                            </tr>
                            <tr className='border-b border-white'>
                                <td className="text-xl text-gray-600 font-semibold p-3 bg-blue-100">Adresse:</td>
                                <td className="text-xl bg-blue-50 p-3">{institut?.adresse}</td>
                            </tr>
                            <tr className='border-b border-white'>
                                <td className="text-xl text-gray-600 font-semibold p-3 bg-blue-100">Nom du Directeur:</td>
                                <td className="text-xl bg-blue-50 p-3">{institut?.nom_directeur}</td>
                            </tr>
                            <tr className='border-b border-white'>
                                <td className="text-xl text-gray-600 font-semibold p-3 bg-blue-100">Téléphone:</td>
                                <td className="text-xl bg-blue-50 p-3">{institut?.tel_institut}</td>
                            </tr>
                            <tr className='border-b border-white'>
                                <td className="text-xl text-gray-600 font-semibold p-3 bg-blue-100">Email:</td>
                                <td className="text-xl bg-blue-50 p-3">
                                    <a href={`mailto:${institut?.email_institut}`} className="text-teal-500 hover:text-teal-700 underline">
                                        {institut?.email_institut}
                                    </a>
                                </td>
                            </tr>
                            <tr className='border-b border-white'>
                                <td className="text-xl text-gray-600 font-semibold p-3 bg-blue-100">Ville:</td>
                                <td className="text-xl bg-blue-50 p-3">{institut?.ville.nom} ({institut?.ville.codeP})</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="border-t border-gray-300 pt-6">
                        <h2 className="text-3xl font-semibold pb-3">Spécialités</h2>
                        <table className="w-full">
                            <tbody className='border'>
                                {institut?.specialites.map(specialite => (
                                    <tr key={specialite.id} className='border-b border-white'>
                                        <td className="text-xl text-gray-600 font-semibold p-3 bg-blue-100">{specialite.nom}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="border-t border-gray-300 pt-6">
                        <h2 className="text-3xl font-semibold pb-3">Formateurs</h2>
                        <table className="w-full">
                            <tbody className='border'>
                                {institut?.formateurs.map(formateur => (
                                    <tr key={formateur.id} className='border-b cursor-pointer bg-blue-100 hover:bg-white' onClick={()=>navigateTo(formateur.id)}>
                                        <td>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ml-3">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                            </svg>
                                        </td>
                                        <td className="text-xl text-gray-600 font-semibold p-3">{formateur.nom} {formateur.prenom}</td>
                                        <td className="text-xl text-gray-600 font-semibold p-3">{formateur.email}</td>
                                        <td className="text-xl text-gray-600 font-semibold p-3">{formateur.tel}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </Layout>
    )
  )
}

export default DetailsInst