import React, { useEffect, useState } from 'react';
import { useGetBrouillonsQuery } from '../../features/apiSlice';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../components/template/Layout';

function Brouillons() {
    const navigate = useNavigate();
    const { data: brouillons } = useGetBrouillonsQuery();
    const [showConfirm, setShowConfirm] = useState(false);
    const [deleteBrouillonId, setDeleteBrouillonId] = useState(null);

    useEffect(() => {
        !localStorage.getItem('user') && navigate('/login');
    }, []);

    const handleDeleteClick = (id) => {
        setDeleteBrouillonId(id);
        setShowConfirm(true);
    };

    const handleConfirmDelete = async () => {
        if (deleteBrouillonId) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/documentationByIdFormation/${deleteBrouillonId}`);
                await axios.delete(`http://127.0.0.1:8000/api/notificationByIdFormation/${deleteBrouillonId}`);
                await axios.get(`http://127.0.0.1:8000/api/detaching/${deleteBrouillonId}`);
                await axios.delete(`http://127.0.0.1:8000/api/formations/${deleteBrouillonId}`);
                // Trigger refetch or update the state to remove the deleted item from the list
            } catch (err) {
                alert("On ne peut pas supprimer cette brouillon à cause d'un problème non reconnu !");
            }
        }
        setShowConfirm(false);
        setDeleteBrouillonId(null);
    };

    const handleCancelDelete = () => {
        setShowConfirm(false);
        setDeleteBrouillonId(null);
    };

    return (
        <Layout>
            <div>
                <header>
                    <div className="m-0 mb-8">
                        <div style={{ backgroundColor: "#F5A962" }} className="overflow-hidden w-full shadow-sm rounded-t-lg">
                            <div className="p-3 text-gray-900 flex justify-between">
                                <div className="flex justify-start items-center">
                                    <h1 className="text-[20px] ml-2 text-white mr-5">Liste Des Brouillons</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {brouillons && brouillons.map((formation, index) => (
                    <div className="p-5 space-y-3" key={index}>
                        <div className="text-center py-1 px-5 font-semibold bg-gray-1 rounded-lg w-fit">
                            <p>Formation</p>
                            <p>n°{formation.id}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-x-8 text-lg">
                                <p><b>Titre : </b>{formation.titre}</p>
                                <p> | {formation.date_debut}</p>
                            </div>
                            <div className="flex items-center gap-3 text-lg">
                                <Link to={`/brouillons/edit/${formation.id}`} className="bg-orange-1 py-1 rounded-lg text-white px-4">Modifier</Link>
                                <button className="bg-orange-1 py-1 rounded-lg text-white px-4" onClick={() => handleDeleteClick(formation.id)}>Supprimer</button>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>

            {showConfirm && (
                <div className="modal-overlay fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="modal bg-white rounded-lg p-4 shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Confirmer la suppression</h2>
                        <p className="mb-4">Voulez-vous vraiment supprimer cette brouillon numéro {deleteBrouillonId} ? Cette action est irréversible.</p>
                        <div className="modal-buttons flex justify-end">
                            <button
                                className="cancel-button mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded"
                                onClick={handleCancelDelete}
                            >
                                Annuler
                            </button>
                            <button
                                className="delete-button px-4 py-2 bg-red-600 text-white rounded"
                                onClick={handleConfirmDelete}
                            >
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
}

export default Brouillons;
