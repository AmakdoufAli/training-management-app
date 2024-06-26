import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Afficher(props) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/users/${id}`);
      props.refetch();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteClick = (id) => {
    setDeleteUserId(id);
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    if (deleteUserId) {
      deleteUser(deleteUserId);
    }
    setShowConfirm(false);
    setDeleteUserId(null);
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
    setDeleteUserId(null);
  };

  return (
    <div className="bg-white mb-32">
      <header>
        <div className="m-0 mb-8">
          <div
            style={{ backgroundColor: "#F5A962" }}
            className="overflow-hidden w-full shadow-sm rounded-t-lg"
          >
            <div className="p-3 text-gray-900 flex justify-between">
              <div className="flex justify-start items-center ">
                <h1 className="text-[20px] ml-2 text-white mr-5">Liste des utilisateurs</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* boutton d'ajout */}
      <div className="mx-3 my-6">
        <Link to={"/ajouterUser"} className="py-2 px-6 text-md font-medium text-center text-white rounded-lg bg-blue-4">
          Ajouter Utilisateur
        </Link>
      </div>

      {/* tableau d'affichage */}
      <div>
        <table className="text-sm text-left rtl:text-right text-gray-500 w-full">
          <thead className="border-b text-md text-left text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">id</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {props.users &&
              props.users.map((user) => (
                <tr key={user.id} className="odd:text-black odd:dark:bg-gray-100 even:bg-gray-50 border-b">
                  <td className="px-6 py-3">{user.id}</td>
                  <td className="px-6 py-3">{user.name}</td>
                  <td className="px-6 py-3">{user.email}</td>
                  <td className="px-6 py-3">{user.role}</td>
                  <td className="px-6 py-3 flex">
                    <Link to={`/modifierUser/${user.id}`} className="mr-2 rounded text-orange-950 bg-orange-200" title="modifier">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </Link>
                    <button onClick={() => handleDeleteClick(user.id)} className="text-red-800 bg-red-300 mr-2 rounded" title="supprimer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Confirmation Dialog */}
      {showConfirm && (
        <div className="modal-overlay fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="modal bg-white rounded-lg p-4 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p className="mb-4">Êtes-vous sûr de vouloir supprimer ce utilisateur ?</p>
            <div className="modal-buttons flex justify-end">
              <button
                className="cancel-button mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded"
                onClick={handleCancelDelete}
              >
                Cancel
              </button>
              <button
                className="delete-button px-4 py-2 bg-red-600 text-white rounded"
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
