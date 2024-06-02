import { useNavigate } from "react-router";
import AjouterF from "../../components/listeFormateur/ajouterF";
import Layout from "../../components/template/Layout";
import {
    useGetSpecialitesQuery,
    useGetInstitutsQuery,
} from "../../features/apiSlice";
import { useEffect } from "react";

export default function AjouterFormateur(){

    const navigate = useNavigate();

    useEffect(()=>{
        !localStorage.getItem('user') && navigate('/login');
    },[]);

    const { data: specialites} = useGetSpecialitesQuery();
    const { data: instituts} = useGetInstitutsQuery();

    return (
        <Layout>
           <AjouterF
                specialites={specialites}
                instituts={instituts}
            />
        </Layout>
    )
}