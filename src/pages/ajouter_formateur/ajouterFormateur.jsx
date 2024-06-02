import AjouterF from "../../components/listeFormateur/ajouterF";
import Layout from "../../components/template/Layout";
import {
    useGetSpecialitesQuery,
    useGetInstitutsQuery,
} from "../../features/apiSlice";

export default function AjouterFormateur(){
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