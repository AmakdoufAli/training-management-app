import { useGetFormationsQuery } from '../../features/apiSlice'
import Layout from '../../components/template/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Historique() {

  const navigate = useNavigate();

  useEffect(()=>{
      !localStorage.getItem('user') && navigate('/login');
  },[]);

  const { data: formations } = useGetFormationsQuery();

  return (
    <Layout>
      <div className='space-y-10'>
        <header>
              <div className="">
                  <div style={{backgroundColor: "#F5A962"}} className=" overflow-hidden w-full shadow-sm  rounded-t-lg">
                      <div className="p-3 text-gray-900 flex justify-between">
                          
                          <div className="flex justify-start items-center ">
                              <h1 className="text-[20px] ml-2 text-white  mr-5">List des formations</h1>
                          </div>      
                      </div>
                  </div>
              </div>
            </header>  
        <table className='text-sm text-left rtl:text-right text-gray-500 w-full'>
          <thead className='border-b text-md text-left text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th className='px-6 py-3'>id</th>
              <th className='px-6 py-3'>titre</th>
              <th className='px-6 py-3'>date debut</th>
              <th className='px-6 py-3'>date fin</th>
              <th className='px-6 py-3'>Nombre Heures</th>
              <th className='px-6 py-3'>Nombre Jours</th>
              <th className='px-6 py-3'>action</th>
            </tr>
          </thead>
          <tbody>
            {formations && formations.map((formation)=>(
              <tr key={formation.id} className='odd:text-black odd:dark:bg-gray-100 even:bg-gray-50  border-b'>
                  <td className='px-6 py-3'>{formation.id}</td>
                  <td className='px-6 py-3'>{formation.titre}</td>
                  <td className='px-6 py-3'>{formation.date_debut}</td>
                  <td className='px-6 py-3'>{formation.date_fin}</td>
                  <td className='px-6 py-3'>{formation.nbr_heures}</td>
                  <td className='px-6 py-3'>{formation.nbr_jours}</td>
                  <td className=''>
                    <a href={`detail/${formation.id}`} className='py-2 px-6 text-md font-medium text-center text-white rounded-lg bg-blue-4'>Détails</a>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
