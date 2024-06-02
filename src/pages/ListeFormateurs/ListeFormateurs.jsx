import { useState } from 'react';
import './style.css';
import Layout from '../../components/template/Layout';
import { useGetFormateursQuery } from '../../features/apiSlice';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function ListeFormateurs () {

  const {data: formateurs} = useGetFormateursQuery();

  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce formateur ?")) {
      axios.delete(`http://127.0.0.1:8000/api/formateurs/${id}`);
    }
  };

  return (
    <Layout>
      <div className="users-page">
      <h1>Liste des formateurs</h1>
      <div className="addNewUser">
        <Link to={'/ajouterFrm'} className="btn"><i className="fas fa-plus"></i> Ajouter Formateur</Link>
      </div>
      <div className="">
        <table className="text-sm text-left rtl:text-right text-gray-500 w-full">
          <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th className='px-6 py-3'>Nom</th>
              <th className='px-6 py-3'>Prénom</th>
              <th className='px-6 py-3'>Date de Naissance</th>
              <th className='px-6 py-3'>Email</th>
              <th className='px-6 py-3'>Téléphone</th>
              <th className='px-6 py-3'>Niveau Académique</th>
              <th className='px-6 py-3'>Institut</th>
              <th className='px-6 py-3'>Spécialité</th>
              <th className='px-6 py-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {formateurs && formateurs.map(formateur => (
              <tr key={formateur.id}  className='odd:text-black odd:dark:bg-gray-100 even:bg-gray-50'>
                <td className='px-6 py-3'>{formateur.nom}</td>
                <td className='px-6 py-3'>{formateur.prenom}</td>
                <td className='px-6 py-3'>{formateur.dateNaiss}</td>
                <td className='px-6 py-3'>{formateur.email}</td>
                <td className='px-6 py-3'>{formateur.tel}</td>
                <td className='px-6 py-3'>{formateur.niveau_academique}</td>
                <td className='px-6 py-3'>{formateur.institut.nom}</td>
                <td className='px-6 py-3'>{formateur.specialite.nom}</td>
                <td className='px-6 py-3'>
                  <div className='flex flex-wrap items-center justify-center gap-1'>
                      <Link to={`/formateur/edit/${formateur.id}`} className='bg-blue-500 p-2 rounded-md text-white font-semibold'>
                        <i className="fas fa-edit"></i> Modifier
                      </Link>
                      <button className="btn btn-edit" onClick={() => handleDelete(formateur.id)}>
                        <i className="fas fa-trash-alt"></i> Supprimer
                      </button>
                  </div>
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