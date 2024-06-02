import { useEffect, useState } from "react";
import "./style.css";
import Layout from "../../components/template/Layout";
import { useGetFormateursQuery } from "../../features/apiSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ListeFormateurs() {
  const navigate = useNavigate();

  const role = JSON.parse(localStorage.getItem("user")).role;

  useEffect(() => {
    !localStorage.getItem("user") && navigate("/login");
  }, []);

  const { data: formateurs } = useGetFormateursQuery();

  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce formateur ?")) {
      axios.delete(`http://127.0.0.1:8000/api/formateurs/${id}`);
    }
  };

  return (
    <Layout>
      <div className="">
        <header>
          <div className="m-0 mb-8">
              <div style={{backgroundColor: "#F5A962"}} className=" overflow-hidden w-full shadow-sm  rounded-t-lg">
                  <div className="p-3 text-gray-900 flex justify-between">
                      
                      <div className="flex justify-start items-center ">
                          <h1 className="text-[20px] ml-2 text-white  mr-5">Liste Des Formateurs</h1>
                      </div>      
                  </div>
              </div>
          </div>
        </header>    
        {role === "admin" && (
          <div className="mx-3 my-6">
            <Link
              to={"/ajouterFrm"}
              className="py-2 px-6 text-md font-medium text-center text-white rounded-lg bg-blue-4"
            >
              <i className="fas fa-plus"></i> Ajouter Formateur
            </Link>
          </div>
        )}
        <div className="">
          <table className="text-sm text-left rtl:text-right text-gray-500 w-full">
            <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="p-2">Nom</th>
                <th className="p-2">Prénom</th>
                <th className="">Date de Naissance</th>
                <th className="p-2">Email</th>
                <th className="p-2">Téléphone</th>
                <th className="p-2">Niveau Académique</th>
                <th className="p-2">Institut</th>
                <th className="p-2">Spécialité</th>
                {role === "admin" && <th className="p-2">Actions</th>}
              </tr>
            </thead>
            <tbody>
              {formateurs &&
                formateurs.map((formateur) => (
                  <tr
                    key={formateur.id}
                    className="odd:text-black odd:dark:bg-gray-100 even:bg-gray-50"
                  >
                    <td className="p-2">{formateur.nom}</td>
                    <td className="p-2">{formateur.prenom}</td>
                    <td className="">{formateur.dateNaiss}</td>
                    <td className="p-2">{formateur.email}</td>
                    <td className="p-2">{formateur.tel}</td>
                    <td className="p-2">{formateur.niveau_academique}</td>
                    <td className="p-2">{formateur.institut.nom}</td>
                    <td className="p-2">{formateur.specialite.nom}</td>
                    {role === "admin" && (
                      <td className="p-2">
                        <div className="flex flex-nowrap items-center justify-center gap-3">
                          <Link
                            to={`/formateur/edit/${formateur.id}`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-gear text-blue-800" viewBox="0 0 16 16">
                              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                            </svg>
                          </Link>
                          <button
                            onClick={() => handleDelete(formateur.id)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3-fill text-red-600" viewBox="0 0 16 16">
                              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
