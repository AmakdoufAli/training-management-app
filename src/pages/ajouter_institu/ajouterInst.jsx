import Ajouter from "../../components/listeInstituts/ajouter";
import Layout from "../../components/template/Layout";

import {
    useGetVillesQuery,
    useGetRegionsQuery,
} from "../../features/apiSlice";

export default function AjouterInst(){
    const { data: regions } = useGetRegionsQuery();
    const { data: villes } = useGetVillesQuery();
    
    return (
        <Layout>
           <Ajouter
                regions={regions}
                villes={villes}
           />
        </Layout>
    )
}