import { useGetFormationsQuery } from '../../features/apiSlice'
import Layout from '../../components/template/Layout';
import { Link } from 'react-router-dom';

export default function Historique() {

  const { data: formations } = useGetFormationsQuery();

  return (
    <Layout>
      <div >
        <h1 className='text-3xl font-bold m-3'>List des formations</h1>
        <table className='text-sm text-left rtl:text-right text-gray-500 w-full'>
          <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
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
              <tr key={formation.id} className='odd:text-black odd:dark:bg-gray-100 even:bg-gray-50'>
                  <td className='px-6 py-3'>{formation.id}</td>
                  <td className='px-6 py-3'>{formation.titre}</td>
                  <td className='px-6 py-3'>{formation.date_debut}</td>
                  <td className='px-6 py-3'>{formation.date_fin}</td>
                  <td className='px-6 py-3'>{formation.nbr_heures}</td>
                  <td className='px-6 py-3'>{formation.nbr_jours}</td>
                  <td className='px-6 py-3'>
                    <a href={`detail/${formation.id}`} className='bg-blue-500 p-2 rounded-md text-white font-semibold'>Détails</a>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
