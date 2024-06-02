import { useState } from "react";



export default function Step1 (props) {

  const [formationData, setFormationData] = useState({titre: null, nbr_heures: null, nbr_jours: null, date_debut: null, date_fin: null, specialite_id: null, ville_id: null, adresse: null});

  const SendInfos = (e) => {
    e.preventDefault();
    props.usePostFormation(formationData);
    props.setStep(props.step + 1);
    setFormationData(null);
  }

  return (
    <div className="">
      <form onSubmit={(e)=>SendInfos(e)}>
        <div className="grid grid-cols-2 gap-8">
          <div className="w-full space-y-2">
            <label htmlFor="titre" className="font-medium">Titre</label>
            <input type="text" onChange={(e)=>{setFormationData({...formationData, titre: e.target.value})}} name="titre" id="titre" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5" placeholder="Titre" required />
          </div>

          <div className='w-full space-y-2'>
            <label htmlFor="nbr_heures" className="font-medium">Nombre Heures</label>
            <input type="number" onChange={(e)=>{setFormationData({...formationData, nbr_heures: e.target.value})}} name="nbr_heures" id="nbr_heures" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5" placeholder="Nombre Heures" required/>
          </div>
          <div className='w-full space-y-2'>
            <label htmlFor="nbr_jours" className="font-medium">Nombre Jours</label>
            <input type="number" onChange={(e)=>{setFormationData({...formationData, nbr_jours: e.target.value})}} name="nbr_jours" id="nbr_jours" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5" placeholder="Nombre Jours" required/>
          </div>

          <div className='w-full space-y-2'>
            <label htmlFor="date_debut" className="font-medium">Date Début</label>
            <input type="date" onChange={(e)=>{setFormationData({...formationData, date_debut: e.target.value})}} name="date_debut" id="date_debut" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5" placeholder="Date Début" required/>
          </div>
          <div className='w-full space-y-2'>
            <label htmlFor="date_fin" className="font-medium">Date Fin</label>
            <input type="date" onChange={(e)=>{setFormationData({...formationData, date_fin: e.target.value})}} name="date_fin" id="date_fin" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5" placeholder="Date Fin" required/>
          </div>

          <div className="w-full space-y-2">
            <label className="font-medium" htmlFor="specialite_id">Spécialité :</label>
            <select name="specialite_id" id="specialite_id" onChange={(e)=>{setFormationData({...formationData, specialite_id: parseInt(e.target.value)})}} className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5">
              <option value="">--specialite--</option>
              {props.specialites && props.specialites.map(spec => (
                <option key={spec.id} value={spec.id}>{spec.nom}</option>
              ))}
            </select>
          </div>
          <div className="w-full space-y-2">
            <label className="font-medium" htmlFor="ville_id">Ville :</label>
            <select name="ville_id" onChange={(e)=>{setFormationData({...formationData, ville_id : parseInt(e.target.value)})}} className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5" required>
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

          <div className="w-full space-y-2">
            <label htmlFor="adresse" className="font-medium">Adresse</label>
            <input type="text" onChange={(e)=>{setFormationData({...formationData, adresse: e.target.value})}} name="adresse" id="adresse" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5" placeholder="Adresse" required/>
          </div>
        </div>

        <div className="my-5 text-right">
          <button type="submit" className="py-1 px-4 text-md font-medium text-center text-white rounded-lg" style={{backgroundColor: "#F5A962"}}>Suivant</button>
        </div>

      </form>
    </div>
  )
}