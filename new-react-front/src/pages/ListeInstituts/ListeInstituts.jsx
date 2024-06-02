import { useEffect, useState } from 'react';
import './style.css';
import Layout from '../../components/template/Layout';
import { useGetInstitutsQuery } from '../../features/apiSlice';
import { Link, useNavigate } from 'react-router-dom';

export default function ListeInstituts () {

  const navigate = useNavigate();

  const role = JSON.parse(localStorage.getItem('user')).role;

  useEffect(()=>{
      !localStorage.getItem('user') && navigate('/login');
  },[]);

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
          <div className="bg-white space-y-10">
            <header>
              <div className="">
                  <div style={{backgroundColor: "#F5A962"}} className=" overflow-hidden w-full shadow-sm  rounded-t-lg">
                      <div className="p-3 text-gray-900 flex justify-between">
                          
                          <div className="flex justify-start items-center ">
                              <h1 className="text-[20px] ml-2 text-white  mr-5">Liste Des Institiuts</h1>
                          </div>      
                      </div>
                  </div>
              </div>
            </header>    
            {/* <div className="flex flex-row justify-between items-center px-5 my-10"> */}
              {role === "admin" &&
                <div className="mx-3 my-6">
                  <Link to={'/ajouterInst'} className="py-2 px-6 text-md font-medium text-center text-white rounded-lg bg-blue-4" onClick={handleAdd}><i className="fas fa-plus"></i> Ajouter Institut</Link>
                </div>
              }
            {/* </div> */}
          <div className="">
            <table className='text-sm text-left rtl:text-right text-gray-500 w-full'>
              <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
                <tr>
                  <th className='p-4'>Nom</th>
                  <th>Adresse</th>
                  <th>Directeur</th>
                  <th>Téléphone</th>
                  <th>Email</th>
                  {role === "admin" &&
                    <th>Actions</th>
                  }
                </tr>
              </thead>
              <tbody>
                {instituts && instituts.map(institut => (
                  <tr key={institut.id} className='odd:text-black odd:dark:bg-gray-100 even:bg-gray-50'>
                    <td className='p-4'>{institut.nom}</td>
                    <td>{institut.adresse}</td>
                    <td>{institut.nom_directeur}</td>
                    <td>{institut.tel_institut}</td>
                    <td>{institut.email_institut}</td>
                    {role === "admin" &&
                      <td className='p-2 flex flex-nowrap items-center justify-center gap-x-3'>
                        
                        <Link to={`/institut/edit/${institut.id}`} className="">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-gear text-blue-800" viewBox="0 0 16 16">
                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                          </svg>
                        </Link>    
                        <button className="" onClick={() => handleDelete(institut.id)}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3-fill text-red-600" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                          </svg>
                        </button>
                      </td>
                    }
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </Layout>
      );
    };