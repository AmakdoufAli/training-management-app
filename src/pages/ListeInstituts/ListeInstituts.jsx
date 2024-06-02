import { useState } from 'react';
import './style.css';
import Layout from '../../components/template/Layout';
import { useGetInstitutsQuery } from '../../features/apiSlice';
import { Link } from 'react-router-dom';

export default function ListeInstituts () {

    const {data: instituts} = useGetInstitutsQuery();
    
    const handleModify = (id) => {
        console.log(`Modifier l'institut avec l'ID: ${id}`);
    };
    
    const handleDelete = (id) => {
        // Affichage d'une alerte de confirmation
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cet institut ?")) {
          // Mettez ici la logique pour supprimer l'institut avec l'ID spécifié
          // setInstituts(prevInstituts => {
          //   return prevInstituts.filter(institut => institut.id !== id);
          // });
        }
      };
    
      const handleAdd = () => {
        console.log("Ajouter un nouvel institut");
      };
    
      return (
        <Layout>
          <div className="bg-white">
          <header>
                <div className="m-0 mb-8">
                    <div style={{backgroundColor: "#F5A962"}} className=" overflow-hidden w-full shadow-sm  rounded-t-lg">
                        <div className="p-3 text-gray-900 flex justify-between">
                            
                            <div className="flex justify-start items-center ">
                                <h1 className="text-[20px] ml-2 text-white  mr-5">Liste Des Institiuts</h1>
                            </div>      
                        </div>
                    </div>
                </div>
            </header>    
            
                  <div className="mx-auto sm:px-4 lg:px-8">
            <Link to={'/ajouterInst'} className="btn" onClick={handleAdd}><i className="fas fa-plus"></i> Ajouter Institut</Link>
          </div>
          <div className="">
            <table className='text-sm text-left rtl:text-right text-gray-500 w-full'>
              <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
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
                  <tr key={institut.id} className='odd:text-black odd:dark:bg-gray-100 even:bg-gray-50'>
                    <td className='px-6 py-3'>{institut.nom}</td>
                    <td className='px-6 py-3'>{institut.adresse}</td>
                    <td className='px-6 py-3'>{institut.nom_directeur}</td>
                    <td className='px-6 py-3'>{institut.tel_institut}</td>
                    <td className='px-6 py-3'>{institut.email_institut}</td>
                    <td className='px-6 py-3 flex flex-nowrap items-center justify-center gap-1'>
                      
                      <Link to={`/institut/edit/${institut.id}`} className="">
                        <i className="fas fa-edit"></i> Modifier
                      </Link>    
                      <button className="btn" onClick={() => handleDelete(institut.id)}><i className="fas fa-trash-alt"></i> Supprimer</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </Layout>
      );
    };