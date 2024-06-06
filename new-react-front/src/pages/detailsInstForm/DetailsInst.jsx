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


                </div>
            </div>
        </Layout>
    )
  )
}

export default DetailsInst