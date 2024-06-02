import { useEffect, useState } from "react";
import { useGetAnimateursQuery, useGetDocumentationByIdQuery, useGetNotificationByIdQuery, usePostAnimateurMutation, usePostSpecialiteMutation } from "../../features/apiSlice";
import axios from "axios";

export default function Step2(props){

    const { data: doc } = useGetDocumentationByIdQuery(props.brouillon);
    const { data: not } = useGetNotificationByIdQuery(props.brouillon);

    const [documentationData, setDocumentationData] = useState();
    const [notificationData, setNotificationData] = useState();
    const [animateurId, setAnimateurId] = useState(null);

    useEffect(()=>{
        if(doc){
            setDocumentationData(doc[0]);
        }
    },[doc])

    useEffect(()=>{
        if(not){
            setNotificationData(not[0]);
        }
    },[not])

    const [filterField, setFilterField] = useState({nom: null, tel: null, email: null, secteur: null});
    const [newAnimateur, setNewAnimateur] = useState({nom: null, prenom: null, tel: null, email: null, secteur: null, specialite_id: null});
    const [refetchNeded, seRefetchNeded] = useState(false);

    const { data: animateurs, refetch } = useGetAnimateursQuery();
    const [postAnimateur, animateurResponse] = usePostAnimateurMutation();
    const [postSpecialite, specialiteResponse] = usePostSpecialiteMutation();

    if(specialiteResponse.data){
        console.log("data :", specialiteResponse.data.id);
        props.setRefreshNeeded(true);
    }

    useEffect(()=>{
        if(refetchNeded){
            refetch();
            setAnimateurId(animateurResponse.data.id);
        }
    },[refetchNeded]);

    const [filtredAnimateurs, setFiltredAnimateurs] = useState(animateurs);

    useEffect(()=>{
        const filtrer = (animateurs, filterField) => {
            return animateurs.filter(f => {
                if (filterField.nom !== null && filterField.nom !== "" && !f.nom.toLowerCase().startsWith(filterField.nom.toLowerCase())) {
                    return false;
                }
                if (filterField.tel !== null && filterField.tel !== "" && !f.tel.includes(filterField.tel)) {
                    return false;
                }
                if (filterField.email !== null && filterField.email !== "" && !f.email.toLowerCase().includes(filterField.email.toLowerCase())) {
                    return false;
                }
                if (filterField.secteur !== null && filterField.secteur !== "" && !f.secteur.toLowerCase().includes(filterField.secteur.toLowerCase())) {
                    return false;
                }
                return true;
            });
        };
        const newList = animateurs && filtrer(animateurs, filterField);
        setFiltredAnimateurs(newList);
    },[filterField])

    const [secteurs, setSecteurs] = useState();

    useEffect(()=>{
        if(animateurs){
            const uniqueSecteurs = [...new Set(animateurs.map(animateur => animateur.secteur))];
            setSecteurs(uniqueSecteurs);
        }
        setFiltredAnimateurs(animateurs);
    },[animateurs])

    const convertFile = (files) =>{
      if (files) {
        setDocumentationData({...documentationData,
            src: `/${files[0].type}/${files[0].name}`,
            type: files[0].type,
        });
      }
    }

    const checkAnimateur = (id) =>{
        const element = document.getElementById(`animateur_${id}`);
        element.checked = !element.checked;
        if(element.checked){
            setAnimateurId(parseInt(element.value));
        }else{
            setAnimateurId(null);
        }
    }

    const [mode, setMode] = useState(true);

    const AjouterAnimateur = async() =>{
        await postAnimateur(newAnimateur);
        seRefetchNeded(true);
        setMode(!mode)
    }

    const creerSpecialite = () =>{
        let nom = prompt('Entrer le nom de la nouveau specialite :');
        if (nom !== null) {
            postSpecialite({"nom": nom});
        }
    }

    useEffect(() => {
        if (props.formationId != null) {
            setDocumentationData({...documentationData, formation_id: parseInt(props.formationId)});
            setNotificationData({...notificationData, formation_id: parseInt(props.formationId)});
        }
    }, [props.formationId]);

    const SendInfos = async(e) => {
        e.preventDefault();
        await axios.put(`http://127.0.0.1:8000/api/documentations/${documentationData.id}`, documentationData)
        .catch(error => {
            console.log(error);
        });
        await axios.put(`http://127.0.0.1:8000/api/notifications/${notificationData.id}`, notificationData)
        .catch(error => {
            console.log(error);
        });
        await axios.put(`http://127.0.0.1:8000/api/update-formation/${props.brouillon}`, {animateurId})
        .catch(error => {
            console.log(error);
        });
        props.setStep(props.step + 1);
    }

    return (
        <form onSubmit={(e)=>SendInfos(e)} className="flex flex-col gap-4">

            <div className="grid grid-cols-2 items-start">
                <div className="">
                    <label htmlFor="file" className="text-sm font-medium">Ajouter L'affiche De Cette Formation : </label>
                    <input type="file" name="file" onChange={(e)=>{convertFile(e.target.files)}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                </div>
                <div className="">
                    {documentationData && (
                        <img src={documentationData && documentationData.src} width={60} alt="img" className="mx-auto" />
                    )}
                </div>
            </div>

            <div>
                <label htmlFor="contenu" className="text-sm font-medium">Message De Notification :</label>
                <textarea name="contenu" id="contenu" onChange={(e)=>{setNotificationData({...notificationData, contenu: e.target.value})}} rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300" defaultValue={notificationData && notificationData.contenu}></textarea>
            </div>

            <div className="flex items-center justify-between my-5">
                <h1 className="text-2xl font-medium">Animateur</h1>
                <button type="button" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 bg-green-400" onClick={()=>{setMode(!mode)}}>{mode ? "Ajouter Animateur" : "Choisire Animateur"}</button>
            </div>

            {mode && (
                <div className="w-full flex flex-col gap-5">
                    <div className="grid grid-cols-4 gap-2 w-full">
                        <div>
                            <label htmlFor="nom" className="text-sm font-medium">Nom :</label>
                            <input type="text" name="nom" id="nom" onChange={(e)=>{setFilterField({...filterField, nom: e.target.value})}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"placeholder="nom" />
                        </div>

                        <div>
                            <label htmlFor="tel" className="text-sm font-medium">Téléphone :</label>
                            <input type="tel" name="tel" id="tel" onChange={(e)=>{setFilterField({...filterField, tel: e.target.value})}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Téléphone"/>
                        </div>

                        <div>
                            <label htmlFor="email" className="text-sm font-medium">Email :</label>
                            <input type="email" name="email" id="email" onChange={(e)=>{setFilterField({...filterField, email: e.target.value})}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="email"/>
                        </div>

                        <div>
                            <label htmlFor="secteur" className="text-sm font-medium">Secteur :</label>
                            <select name='secteur' id="secteur" onChange={(e)=>{setFilterField({...filterField, secteur: e.target.value})}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                                <option value="">---Secteur---</option>
                                {secteurs && secteurs.map(secteur=>(
                                    <option value={secteur} key={secteur}>{secteur}</option>
                                ))}
                            </select>
                        </div>

                    </div>
                    <table className="text-sm rtl:text-right w-full text-gray-500">
                        <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="py-3 px-2" ></th>
                                <th scope="col" className="py-3 px-2">
                                    Nom Complet
                                </th>
                                <th scope="col" className="py-3 px-2">
                                    Téléphone
                                </th>
                                <th scope="col" className="py-3 px-2">
                                    Email
                                </th>
                                <th scope="col" className="py-3 px-2">
                                    Secteur
                                </th>
                                <th scope="col" className="py-3 px-2">
                                    Specialite
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtredAnimateurs && filtredAnimateurs.map(animateur=>(
                                <tr key={animateur.id} className="odd:text-black hover:bg-blue-100 odd:bg-gray-100 even:bg-gray-50 cursor-pointer" onClick={()=>{checkAnimateur(animateur.id)}}>
                                    <td className="py-3 px-2">
                                        <input type="radio" name="animateur_id" value={animateur.id} id={`animateur_${animateur.id}`} />
                                    </td>
                                    <td className="py-3 px-2">{animateur.nom} {animateur.prenom}</td>
                                    <td className="py-3 px-2">{animateur.tel}</td>
                                    <td className="py-3 px-2">{animateur.email}</td>
                                    <td className="py-3 px-2">{animateur.secteur}</td>
                                    <td className="py-3 px-2">{animateur.specialite.nom}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {!mode && (
                <div className="grid grid-cols-4 gap-2">
                    <div>
                        <label htmlFor="nom" className="text-sm font-medium">Nom :</label>
                        <input type="text" onChange={(e)=>{setNewAnimateur({...newAnimateur, nom: e.target.value})}} name="nom" id="nom" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Nom" required />
                    </div>
                    <div>
                        <label htmlFor="prenom" className="text-sm font-medium">Prènom :</label>
                        <input type="text" onChange={(e)=>{setNewAnimateur({...newAnimateur, prenom: e.target.value})}} name="prenom" id="prenom" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Prènom" required />
                    </div>
                    <div>
                        <label htmlFor="tel" className="text-sm font-medium">Téléphone :</label>
                        <input type="tel" onChange={(e)=>{setNewAnimateur({...newAnimateur, tel: e.target.value})}} name="tel" id="tel" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Téléphone" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm font-medium">Email :</label>
                        <input type="email" onChange={(e)=>{setNewAnimateur({...newAnimateur, email: e.target.value})}} name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Email" required />
                    </div>
                    <div>
                        <label htmlFor="secteur" className="text-sm font-medium">Secteur :</label>
                        <input type="text" onChange={(e)=>{setNewAnimateur({...newAnimateur, secteur: e.target.value})}} name="secteur" id="secteur" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Secteur" required />
                    </div>
                    <div className="col-span-2 grid grid-cols-2 items-end gap-2">
                        <div>
                            <label htmlFor="specialite_id" className="text-sm font-medium">Specialite :</label>
                            <select name='specialiteformateur' id="specialiteformateur" onChange={(e)=>{setNewAnimateur({...newAnimateur, specialite_id: e.target.value})}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required>
                                <option value="">---Spécialité---</option>
                                {props.specialites && props.specialites.map(spec=>(
                                    <option value={spec.id} key={spec.id}>{spec.nom}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <button type="button" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 bg-fuchsia-700 w-full h-fit" onClick={()=>creerSpecialite()}>Ajouter Specialité</button>
                        </div>
                    </div>
                    <div className="flex justify-center items-end">
                        <button type="button" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 bg-green-400 w-full h-fit" onClick={()=>AjouterAnimateur()}>Ajouter Animateur</button>
                    </div>
                </div>
            )}

            <div className="flex items-center gap-3 justify-end">
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 bg-blue-500">Suivant</button>
            </div>

        </form>
    )
}