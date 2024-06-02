import { useState } from "react";
import axios from "axios";
import { useGetBrouillonsByIdQuery, useGetRegionsQuery, useGetSpecialitesQuery, useGetVillesQuery } from "../../features/apiSlice";


export default function Step1 (props) {

  const { data:brouillon } = useGetBrouillonsByIdQuery(props.brouillonId);
  const [brouillonData, setBrouillonData] = useState(brouillon);
  const { data: regions } = useGetRegionsQuery();
  const { data: villes } = useGetVillesQuery();
  const { data: specialites, refetch } = useGetSpecialitesQuery();

  const SendInfos = async(e) => {
    e.preventDefault();
      await axios.put(`http://127.0.0.1:8000/api/brouillons/${brouillon.id}`, brouillonData)
    .catch(error => {
      console.log(error);
    });
    props.setStep(props.step + 1);
  }

  return (
    <form onSubmit={(e)=>SendInfos(e)} className="flex flex-col gap-4">
      <div>
        <label htmlFor="titre" className="text-sm font-medium">Titre</label>
        <input type="text" defaultValue={brouillonData && brouillonData.titre} onChange={(e)=>{setBrouillonData({...brouillonData, titre: e.target.value})}} name="titre" id="titre" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Titre" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className='w-full'>
          <label htmlFor="nbr_heures" className="text-sm font-medium">Nombre Heures</label>
          <input type="number" defaultValue={brouillonData && brouillonData.nbr_heures} onChange={(e)=>{setBrouillonData({...brouillonData, nbr_heures: e.target.value})}} name="nbr_heures" id="nbr_heures" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Nombre Heures" />
        </div>
        <div className='w-full'>
          <label htmlFor="nbr_jours" className="text-sm font-medium">Nombre Jours</label>
          <input type="number" defaultValue={brouillonData && brouillonData.nbr_jours} onChange={(e)=>{setBrouillonData({...brouillonData, nbr_jours: e.target.value})}} name="nbr_jours" id="nbr_jours" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Nombre Jours" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className='w-full'>
          <label htmlFor="date_debut" className="text-sm font-medium">Date Début</label>
          <input type="date" defaultValue={brouillonData && brouillonData.date_debut} onChange={(e)=>{setBrouillonData({...brouillonData, date_debut: e.target.value})}} name="date_debut" id="date_debut" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Date Début" />
        </div>
        <div className='w-full'>
          <label htmlFor="date_fin" className="text-sm font-medium">Date Fin</label>
          <input type="date" defaultValue={brouillonData && brouillonData.date_fin} onChange={(e)=>{setBrouillonData({...brouillonData, date_fin: e.target.value})}} name="date_fin" id="date_fin" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Date Fin" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="w-full">
          <label className="text-sm font-medium" htmlFor="specialite_id">Spécialité :</label>
          <select name="specialite_id" id="specialite_id" onChange={(e)=>{setBrouillonData({...brouillonData, specialite_id: parseInt(e.target.value)})}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
            <option value="">--specialite--</option>
            {specialites && specialites.map(spec => (
              <option key={spec.id} value={spec.id} selected={brouillon && brouillon.specialite_id === spec.id}>{spec.nom}</option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label className="text-sm font-medium" htmlFor="ville_id">Ville :</label>
          <select name="ville_id" onChange={(e)=>{setBrouillonData({...brouillonData, ville_id : parseInt(e.target.value)})}} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required>
            {regions && regions.map((region) => (
              <optgroup label={region.nom} key={region.id}>
                {villes && villes.map((ville) => {
                  if (region.id === ville.region_id) {
                    return <option key={ville.id} value={ville.id} selected={brouillon && brouillon.ville_id === ville.id}>{ville.nom}</option>
                  }
                })}
              </optgroup>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="adresse" className="text-sm font-medium">Adresse</label>
        <input type="text" defaultValue={brouillonData && brouillonData.adresse} onChange={(e)=>{setBrouillonData({...brouillonData, adresse: e.target.value})}} name="adresse" id="adresse" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Adresse" />
      </div>

      <div className="flex items-center gap-3 justify-end">
        <button type="submit" className="py-3 px-5 text-md font-medium text-center text-white rounded-lg bg-primary-700 bg-green-500">Suivant</button>
      </div>

    </form>
  )
}