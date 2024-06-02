
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetFormationByIdQuery } from '../../features/apiSlice';
import Layout from '../../components/template/Layout';
import "./Detail.css"


const Detail = () => {

  const navigate = useNavigate();

  useEffect(()=>{
      !localStorage.getItem('user') && navigate('/login');
  },[]);

  const { id } = useParams();
  
  const { data: formation } = useGetFormationByIdQuery(id);

  return (
    <Layout>
      <div className="div1">
          <h1 className='text-4xl text-bold text-center p-3 border rounded my-2 border-black'>{ formation && formation.titre}</h1>
          <div className=''>
            <div className='grid grid-cols-2'><h1 className='text-2xl font-semibold'>Nombre d heurs:</h1><p className='text-xl'>{formation && formation.nbr_heures}</p></div>
            <div className='grid grid-cols-2'><h1 className='text-2xl font-semibold'>Nombre de jours:</h1><p className='text-xl'>{formation && formation.nbr_jours}</p></div>
            <div className='grid grid-cols-2'><h1 className='text-2xl font-semibold'>Date de début:</h1><p className='text-xl'>{formation && formation.date_debut}</p></div>
            <div className='grid grid-cols-2'><h1 className='text-2xl font-semibold'>Date de fin:</h1><p className='text-xl'>{formation && formation.date_fin}</p></div>
            <div className='grid grid-cols-2'><h1 className='text-2xl font-semibold'>Adresse:</h1><p className='text-xl'>{formation && formation.adresse}</p></div>
            <div className='grid grid-cols-2'><h1 className='text-2xl font-semibold'>Etat de formation:</h1><p className='text-xl'>{formation && (formation.etat == 1 ? 'Publié' : 'Pas Encore')}</p></div>
            <div className='grid grid-cols-2'><h1 className='text-2xl font-semibold'>Animateur:</h1><p className='text-xl'>{formation && formation.animateur.nom}</p></div>
            <div className='grid grid-cols-2'><h1 className='text-2xl font-semibold'>Ville:</h1><p className='text-xl'>{formation && formation.ville.nom}</p></div>
          </div>

      </div>  
      
        
    
      
   
    </Layout>
  );
};

export default Detail;
