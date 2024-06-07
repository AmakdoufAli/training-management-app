import { useEffect, useState } from 'react';
import './style.css';
import Layout from '../../components/template/Layout';
import { useGetInstitutsQuery } from '../../features/apiSlice';
import { Link, useNavigate } from 'react-router-dom';

export default function ListeInstituts() {

  const navigate = useNavigate();

  const role = JSON.parse(localStorage.getItem('user')).role;

  useEffect(() => {
    !localStorage.getItem('user') && navigate('/login');
  }, []);

  const { data: instituts } = useGetInstitutsQuery();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [instituteToDelete, setInstituteToDelete] = useState(null);

  const handleModify = (id) => {
    console.log(`Modifier l'institut avec l'ID: ${id}`);
  };

  const handleDelete = (id) => {
    setInstituteToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setShowDeleteModal(false);
  };


  return (
    <Layout>
      <div className="bg-white space-y-10">
        <header>
          <div className="">
            <div style={{ backgroundColor: "#F5A962" }} className=" overflow-hidden w-full shadow-sm  rounded-t-lg">
              <div className="p-3 text-gray-900 flex justify-between">
                <div className="flex justify-start items-center ">
                  <h1 className="text-[20px] ml-2 text-white  mr-5">Liste Des Institiuts</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
        {role === "admin" &&
          <div className="mx-3 my-6">
            <Link to={'/ajouterInst'} className="py-2 px-6 text-md font-medium text-center text-white rounded-lg bg-blue-4"><i className="fas fa-plus"></i> Ajouter Institut</Link>
          </div>
        }
        <div className="">
          <table className='text-sm text-left rtl:text-right text-gray-500 w-full'>
            <thead className='border-b text-md text-left text-gray-700 uppercase bg-gray-50'>
              <tr>
                <th className='px-6 py-3'>Nom</th>
                <th className='px-6 py-3'>Adresse</th>
                <th className='px-6 py-3'>Directeur</th>
                <th className='px-6 py-3'>Téléphone</th>
                <th className='px-6 py-3'>Email</th>
                <th className='px-6 py-3'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {instituts && instituts.map(institut => (
                <tr key={institut.id} className='odd:text-black odd:dark:bg-gray-100 even:bg-gray-50 border-b'>
                  <td className='p-4'>{institut.nom}</td>
                  <td className='px-6 py-3'>{institut.adresse}</td>
                  <td className='px-6 py-3'>{institut.nom_directeur}</td>
                  <td className='px-6 py-3'>{institut.tel_institut}</td>
                  <td className='px-6 py-3'>{institut.email_institut}</td>
                  <td className='px-2 pt-4 flex flex-nowrap items-center justify-center gap-1'>
                    {role === "admin" && <>
                      <Link to={`/institut/edit/${institut.id}`} className='mr-2 rounded text-orange-950 bg-orange-200' title="modifier">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>
                      </Link>
                      <button onClick={() => handleDelete(institut.id)} className='text-red-800 bg-red-300 mr-2 rounded' title="supprimer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
                      </button>
                    </>}
                    <Link to={`/detailsInstituts/${institut.id}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 bg-blue-2 rounded">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md">
            <p>Êtes-vous sûr de vouloir supprimer cet institut ?</p>
            <div className="flex justify-end mt-4">
              <button onClick={() => setShowDeleteModal(false)} className="mr-4 bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-md">Annuler</button>
              <button onClick={confirmDelete} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">Supprimer</button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};
