import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetFormationByIdQuery } from "../../features/apiSlice";
import Layout from "../../components/template/Layout";
import "./Detail.css";

const Detail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    !localStorage.getItem("user") && navigate("/login");
  }, []);

  const { id } = useParams();

  const { data: formation } = useGetFormationByIdQuery(id);

  console.log(formation);

  return (
    <Layout>
      <header>
        <div className="">
          <div
            style={{ backgroundColor: "#F5A962" }}
            className="overflow-hidden w-full shadow-sm rounded-t-lg"
          >
            <div className="p-3 text-gray-900 flex justify-between">
              <div className="flex justify-start items-center">
                <h1 className="text-[20px] ml-2 text-white mr-5">
                  Détails d'historique
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto p-6 bg-white shadow-2xl rounded-xl">
        <div className="p-4 rounded-md">
          <h1 className="text-4xl text-gray-500 font-extrabold w-fit border-gray-500 border-b-4">
            {formation?.titre}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 p-5">
          <div>
            <p className="text-lg">
              <strong>Nombre d'heures :</strong>{" "}
              {formation?.nbr_heures}
            </p>
            <p className="text-lg">
              <strong>Nombre de jours :</strong>{" "}
              {formation?.nbr_jours}
            </p>
            <p className="text-lg">
              <strong>Date de début :</strong>{" "}
              {formation?.date_debut}
            </p>
            <p className="text-lg">
              <strong>Date de fin :</strong>{" "}
              {formation?.date_fin}
            </p>
            <p className="text-lg">
              <strong>Adresse :</strong> {formation?.adresse}
            </p>
            <p className="text-lg">
              <strong>Ville :</strong>{" "}
              {formation?.ville.nom} (Code postal :{" "}
              {formation?.ville.codeP})
            </p>
            <p className="text-lg">
              <strong>Spécialité :</strong>{" "}
              {formation?.specialite.nom}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Animateur</h2>
            <p className="text-lg">
              <strong>Nom :</strong> {formation?.animateur.nom}{" "}
              {formation?.animateur.prenom}
            </p>
            <p className="text-lg">
              <strong>Secteur :</strong>{" "}
              {formation?.animateur.secteur}
            </p>
            <p className="text-lg">
              <strong>Téléphone :</strong> {formation?.animateur.tel}
            </p>
            <p className="text-lg">
              <strong>Email :</strong>{" "}
              <a
                href={`mailto:${formation?.animateur.email}`}
                className="text-blue-500 hover:text-blue-700"
              >
                {formation?.animateur.email}
              </a>
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-700 px-5">
          Formateurs
        </h2>
        <div className="space-y-6 p-5">
          {formation &&
            formation.formateurs.map((formateur) => (
              <div
                key={formateur.id}
                className="p-5 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="text-lg">
                  <strong>Nom :</strong> {formateur.nom} {formateur.prenom}
                </p>
                <p className="text-lg">
                  <strong>Date de naissance :</strong> {formateur.dateNaiss}
                </p>
                <p className="text-lg">
                  <strong>Email :</strong>{" "}
                  <a
                    href={`mailto:${formateur.email}`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {formateur.email}
                  </a>
                </p>
                <p className="text-lg">
                  <strong>Téléphone :</strong> {formateur.tel}
                </p>
                <p className="text-lg">
                  <strong>Niveau académique :</strong>{" "}
                  {formateur.niveau_academique}
                </p>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
