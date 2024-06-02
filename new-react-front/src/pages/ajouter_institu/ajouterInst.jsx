import { useNavigate } from "react-router";
import Ajouter from "../../components/listeInstituts/ajouter";
import Layout from "../../components/template/Layout";

import {
    useGetVillesQuery,
    useGetRegionsQuery,
} from "../../features/apiSlice";
import { useEffect } from "react";

export default function AjouterInst(){

    const navigate = useNavigate();

    useEffect(()=>{
        !localStorage.getItem('user') && navigate('/login');
    },[]);

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