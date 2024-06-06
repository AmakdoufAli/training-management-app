import Layout from '../../components/template/Layout';
import Afficher from '../../components/listeUtilisateurs/afficher';

import { useGetUsersQuery } from '../../features/apiSlice';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

export default function Utilisateurs() {

  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(()=>{
      if(!localStorage.getItem('user')){
        navigate('/login');
      }else{
        setShow(true);
      }
  },[]);

   const { data: users, refetch } = useGetUsersQuery();

  return show && (
    <Layout>

      <Afficher users={users} refetch={refetch} />

    </Layout>
  )
}
