import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useGetFormateurByIdQuery } from "../../features/apiSlice";
import Layout from "../../components/template/Layout";
import { Link } from "react-router-dom";

const DetailsForm = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setShow(true);
    } else {
      setShow(false);
      navigate("/login");
    }
  }, []);
  const { id } = useParams();
  const { data: formateur } = useGetFormateurByIdQuery(id);
  return (
    show && (
      <Layout>
        <header>
          <div className="">
            <div
              style={{ backgroundColor: "#F5A962" }}
              className=" overflow-hidden w-full shadow-sm  rounded-t-lg"
            >
              <div className="p-3 flex justify-between">
                <div className="flex justify-start items-center ">
                  <h1 className="text-[20px] ml-2 text-white  mr-5">
                    Détails de formateur
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="p-6 bg-white rounded-lg shadow-md space-y-6 pb-14">
          <Link
            to={"/listeFormateurs"}
            className="bg-blue-1 text-white text-lg px-7 py-1 rounded-l-full"
          >
            Retour
          </Link>
          <div className="space-y-10">
            <table className="w-full">
              <tbody className="border">
                <tr className="border-b-2 border-white">
                  <td className="text-xl text-gray-600 font-semibold p-3 bg-blue-100">
                    CIN:
                  </td>
                  <td className="text-xl bg-blue-50 p-3">{formateur?.cin}</td>
                </tr>
                <tr className="border-b-2 border-white">
                  <td className="text-xl text-gray-600 font-semibold p-3 bg-blue-100">
                    Nom:
                  </td>
                  <td className="text-xl bg-blue-50 p-3">{formateur?.nom}</td>
                </tr>
                <tr className="border-b-2 border-white">
                  <td className="text-xl text-gray-600 font-semibold p-3 bg-blue-100">
                    Prénom:
                  </td>
                  <td className="text-xl bg-blue-50 p-3">
                    {formateur?.prenom}
                  </td>
                </tr>
                <tr className="border-b-2 border-white">
                  <td className="text-xl text-gray-600 font-semibold p-3 bg-blue-100">
                    Date de Naissance:
                  </td>
                  <td className="text-xl bg-blue-50 p-3">
                    {formateur?.dateNaiss}
                  </td>
                </tr>
                <tr className="border-b-2 border-white">
                  <td className="text-xl text-gray-600 font-semibold p-3 bg-blue-100">
                    Email:
                  </td>
                  <td className="text-xl bg-blue-50 p-3">
                    <a
                      href={`mailto:${formateur?.email}`}
                      className="text-teal-500 hover:text-teal-700 underline"
                    >
                      {formateur?.email}
                    </a>
                  </td>
                </tr>
                <tr className="border-b-2 border-white">
                  <td className="text-xl text-gray-600 font-semibold p-3 bg-blue-100">
                    Téléphone:
                  </td>
                  <td className="text-xl bg-blue-50 p-3">{formateur?.tel}</td>
                </tr>
                <tr className="border-b-2 border-white">
                  <td className="text-xl text-gray-600 font-semibold p-3 bg-blue-100">
                    Niveau Académique:
                  </td>
                  <td className="text-xl bg-blue-50 p-3">
                    {formateur?.niveau_academique}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="border-t border-gray-300 pt-6">
              <h2 className="text-3xl font-semibold pb-3">Institut</h2>
              <table className="w-full">
                <tbody className="border">
                  <tr className="border-b-2 border-white">
                    <td className="text-xl text-gray-600 font-semibold p-3 bg-blue-100">
                      Nom:
                    </td>
                    <td className="text-xl bg-blue-50 p-3">
                      {formateur?.institut.nom}
                    </td>
                  </tr>
                  <tr className="border-b-2 border-white">
                    <td className="text-xl text-gray-600 font-semibold p-3 bg-blue-100">
                      Adresse:
                    </td>
                    <td className="text-xl bg-blue-50 p-3">
                      {formateur?.institut.adresse}
                    </td>
                  </tr>
                  <tr className="border-b-2 border-white">
                    <td className="text-xl text-gray-600 font-semibold p-3 bg-blue-100">
                      Nom du Directeur:
                    </td>
                    <td className="text-xl bg-blue-50 p-3">
                      {formateur?.institut.nom_directeur}
                    </td>
                  </tr>
                  <tr className="border-b-2 border-white">
                    <td className="text-xl text-gray-600 font-semibold p-3 bg-blue-100">
                      Téléphone:
                    </td>
                    <td className="text-xl bg-blue-50 p-3">
                      {formateur?.institut.tel_institut}
                    </td>
                  </tr>
                  <tr className="border-b-2 border-white">
                    <td className="text-xl text-gray-600 font-semibold p-3 bg-blue-100">
                      Email:
                    </td>
                    <td className="text-xl bg-blue-50 p-3">
                      <a
                        href={`mailto:${formateur?.institut.email_institut}`}
                        className="text-teal-500 hover:text-teal-700 underline"
                      >
                        {formateur?.institut.email_institut}
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b-2 border-white">
                    <td className="text-xl text-gray-600 font-semibold p-3 bg-blue-100">
                      Ville:
                    </td>
                    <td className="text-xl bg-blue-50 p-3">
                      {formateur?.institut.ville.nom} (
                      {formateur?.institut.ville.codeP})
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border-t border-gray-300 pt-6">
              <h2 className="text-3xl font-semibold pb-3">Spécialité</h2>
              <table className="w-full">
                <tbody className="border">
                  <tr className="border-b-2 border-white">
                    <td className="text-xl text-gray-600 font-semibold p-3 bg-blue-100">
                      Nom:
                    </td>
                    <td className="text-xl bg-blue-50 p-3">
                      {formateur?.specialite.nom}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border-t border-gray-300 pt-6">
              <h2 className="text-3xl font-semibold pb-3">Formations</h2>
              <ul className="list-disc list-inside pl-5 space-y-1">
                {formateur?.formations.map((formation) => (
                  <li key={formation.id} className="text-lg text-gray-800">
                    <strong className="text-gray-600">{formation.titre}</strong>{" "}
                    - {formation.date_debut} à {formation.date_fin} (
                    {formation.adresse})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    )
  );
};

export default DetailsForm;
