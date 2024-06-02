import Layout from '../../components/template/Layout';
import Afficher from '../../components/listeUtilisateurs/afficher';

import { useGetUsersQuery } from '../../features/apiSlice';

export default function Utilisateurs() {

   const { data: users, refetch } = useGetUsersQuery();

  return (
    <Layout>

      <Afficher users={users} refetch={refetch} />

    </Layout>
  )
}
