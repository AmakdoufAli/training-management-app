import { useEffect, useState } from "react";
import { useGetFormateursQuery, useGetInstitutsQuery, useGetParticipationByIdQuery, usePostParticipationMutation } from "../../features/apiSlice";
import { useNavigate } from "react-router";
import axios from "axios";


export default function Step3(props){

    const navigate = useNavigate();

    const { data: formateurs } = useGetFormateursQuery();
    const { data: instituts } = useGetInstitutsQuery();
    
    const [filtredFormateurs, setFiltredFormateurs] = useState(formateurs);
    
    const [checkedFormateurs, setCheckedFormateurs] = useState([]);

    const [filterField, setFilterField] = useState({nom: null, niveau: null, ville: null, specialite: null, institut: null});

    const [checkedAll, setCheckedAll] = useState(false);

    const [participationData, setParticipationData] = useState();

    const [postParticipation] = usePostParticipationMutation();

    useEffect(()=>{
        const filtrer = (formateurs, filterField) => {
            return formateurs.filter(f => {
                if (filterField.nom !== null && filterField.nom !== "" && !f.nom.toLowerCase().includes(filterField.nom.toLowerCase())) {
                    return false;
                }
                if (filterField.niveau !== null && filterField.niveau !== "" && !f.niveau_academique.toLowerCase().includes(filterField.niveau.toLowerCase())) {
                    return false;
                }
                if (filterField.ville !== null && filterField.ville !== "" && f.institut.ville.id != filterField.ville) {
                    return false;
                }
                if (filterField.specialite !== null && filterField.specialite !== "" && f.specialite_id != filterField.specialite) {
                    return false;
                }
                if (filterField.institut !== null && filterField.institut !== "" && f.institut_id != filterField.institut) {
                    return false;
                }
                return true;
            });
        };
        if(formateurs){
            const filtredFormateures = filtrer(formateurs, filterField);
            setFiltredFormateurs(filtredFormateures);
        }
    },[filterField]);

    useEffect(()=>{
        if(formateurs){
            setFiltredFormateurs(formateurs);
        }
    },[formateurs])

    useEffect(()=>{
        setParticipationData({formationId : props.brouillon, formateursIds : checkedFormateurs});
    },[checkedFormateurs])

    const checkFormateur = (id) =>{
        const element = document.getElementById(`formateur_${id}`);
        element.checked = !element.checked;
        if(element.checked){
            setCheckedFormateurs([...checkedFormateurs, id]);
        }else{
            const newF = checkedFormateurs.filter(idf => idf !== id);
            setCheckedFormateurs(newF);
        }
    }

    const SelectAll = () =>{
        const lines = document.querySelectorAll('.line');
        setCheckedAll(!checkedAll);
        lines.forEach(element => {
            checkedAll ? element.checked = false : element.checked = true;
        });
        if(lines[0].checked){
            filtredFormateurs.map(element => {
                const ids = filtredFormateurs.map(element => element.id);
                setCheckedFormateurs(ids);
            });
        }else{
            setCheckedFormateurs([]);
        }
    }

    const SendInfos = async(btn) => {
        if(btn == 1){
            try{
                await postParticipation(participationData);
            }catch(err){
                console.log('error is : ', err);
            }
            setParticipationData([]);
            navigate('/brouillons');
        }else{
            try{
                await axios.put(`http://127.0.0.1:8000/api/formations/${props.brouillon}`, {"etat":1})
                await axios.post(`http://127.0.0.1:8000/api/send-email`, {
                    'formationId' : props.brouillon
                })
            }catch(err){
                console.error('error is : ', err);
            }
            setParticipationData([]);
            navigate('/historique');
        }
    }

    return (
        <form onSubmit={(e)=>{e.preventDefault(e)}} className="flex flex-col gap-6">

            <div className="grid grid-cols-3 gap-3">
                <div>
                    <label htmlFor="nomformateur" className="text-sm font-medium">Nom Formateur :</label>
                    <input type="text" name="nomformateur" id="nomformateur" onChange={(e)=>{setFilterField({...filterField, nom: e.target.value})}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Nom"/>
                </div>

                <div>
                    <label htmlFor="niveauacademique" className="text-sm font-medium">Niveau Académique :</label>
                    <input type="text" name="niveauacademique" id="niveauacademique" onChange={(e)=>{setFilterField({...filterField, niveau: e.target.value})}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Niveu Academique" />
                </div>

                <div>
                    <label htmlFor="villeformateur" className="text-sm font-medium">Ville :</label>
                    <select name='ville' id="villeformateur" onChange={(e)=>{setFilterField({...filterField, ville: e.target.value})}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                        <option value="">---Ville---</option>
                        {props.regions && props.regions.map((region) => (
                            <optgroup label={region.nom} key={region.id}>
                                {props.villes && props.villes.map((ville) => {
                                    if (region.id === ville.region_id) {
                                        return <option key={ville.id} value={ville.id}>{ville.nom}</option>
                                    }
                                })}
                            </optgroup>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="specialiteformateur" className="text-sm font-medium">Spécialité :</label>
                    <select name='specialiteformateur' id="specialiteformateur" onChange={(e)=>{setFilterField({...filterField, specialite: e.target.value})}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                        <option value="">---Spécialité---</option>
                        {props.specialites && props.specialites.map(spec=>(
                            <option value={spec.id} key={spec.id}>{spec.nom}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="institutsformateur" className="text-sm font-medium">Instituts :</label>
                    <select name='institutsformateur' id="institutsformateur" onChange={(e)=>{setFilterField({...filterField, institut: e.target.value})}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                    <option value="">---Instituts---</option>
                        {instituts && instituts.map(i=>(
                            <option value={i.id} key={i.id}>{i.nom}</option>
                        ))}
                    </select>
                </div>

            </div>

            <table className="text-sm rtl:text-right text-gray-500">
                <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3 px-2" >
                            <input type="checkbox" id="globalInput" onClick={()=>SelectAll()} className="cursor-pointer"/>
                        </th>
                        <th scope="col" className="py-3 px-2">
                            CIN
                        </th>
                        <th scope="col" className="py-3 px-2">
                            Nom Complet
                        </th>
                        <th scope="col" className="py-3 px-2">
                            Email
                        </th>
                        <th scope="col" className="py-3 px-2">
                            Téléphone
                        </th>
                        <th scope="col" className="py-3 px-2">
                            Niveau Académique
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filtredFormateurs && filtredFormateurs.map(f=>(
                        <tr key={f.id} className="odd:text-black hover:bg-blue-100 odd:bg-gray-100 even:bg-gray-50 cursor-pointer" onClick={()=>checkFormateur(f.id)}>
                            <td className="py-3 px-2">
                                <input type="checkbox" name={`formateur_${f.nom}`} value={f.id} id={`formateur_${f.id}`} onClick={()=>checkFormateur(f.id)} className="line" />
                            </td>
                            <td className="py-3 px-2">{f.cin}</td>
                            <td className="py-3 px-2">{f.nom} {f.prenom}</td>
                            <td className="py-3 px-2">{f.email}</td>
                            <td className="py-3 px-2">{f.tel}</td>
                            <td className="py-3 px-2">{f.niveau_academique}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex items-center gap-3 justify-end">
                <button type="button" style={{backgroundColor: "#F5A962"}} className="py-1 px-4 text-md font-medium text-center text-white rounded-lg" onClick={()=>SendInfos(1)}>Enregistrer</button>
                <button type="button" style={{backgroundColor: "#3c8dad"}} className="py-1 px-4 text-md font-medium text-center text-white rounded-lg mr-0" onClick={()=>SendInfos(2)}>Valider</button>
            </div>

        </form>
    )
}
