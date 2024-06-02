import React, { useEffect, useState } from 'react';
import Layout from '../../components/template/Layout';
import { useGetUserByIdQuery } from '../../features/apiSlice';
import { useParams } from 'react-router';
import axios from 'axios';

const DoubleForm = () => {

  const { id } = useParams();
  const { data: userdata, refetch } = useGetUserByIdQuery(id);
  
  const [userInfo, setUserInfo] = useState(userdata);
  
  const [passwordInfo, setPasswordInfo] = useState({
    password: '',
    confirmPassword: ''
  });

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUserSubmit = async(e) => {
    e.preventDefault();
    try{
      axios.put(`http://127.0.0.1:8000/api/users/${userInfo.id}`, userInfo);
      refetch();
    }catch(err){
      console.error(err);
    }
  };

  const handlePasswordSubmit = async(e) => {
    e.preventDefault();
    if (passwordInfo.password !== passwordInfo.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    try{
      await axios.put(`http://127.0.0.1:8000/api/updatepassword/${userInfo.id}`, passwordInfo);
    }catch(err){
      console.error(err);
    }
    console.log('Mot de passe modifié');
  };

  const handleCancel = () => {
    setUserInfo({
      name: '',
      email: '',
      role: ''
    });
  };

  return (
  <Layout>
<div className="p-5 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-10">
  {/* Formulaire de modification des informations utilisateur */}
  <form onSubmit={handleUserSubmit} className="mb-8">
    <h2 className="text-3xl font-bold mb-8 text-gray-800 font-sans border-b-2 pb-4 border-gray-300">
      Modifier les informations utilisateur
    </h2>
    <div className="mb-4">
      <label htmlFor="name" className="block text-gray-700 mb-2">Nom :</label>
      <input
        type="text"
        id="name"
        name="name"
        value={userInfo && userInfo.name}
        onChange={handleUserChange}
        required
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700 mb-2">Email :</label>
      <input
        type="email"
        id="email"
        name="email"
        value={userInfo && userInfo.email}
        onChange={handleUserChange}
        required
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="role" className="block text-gray-700 mb-2">Rôle :</label>
      <select
        id="role"
        name="role"
        value={userInfo && userInfo.role}
        onChange={handleUserChange}
        required
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Sélectionner un rôle</option>
        <option value="admin">Admin</option>
        <option value="gestionnaire">Gestionnaire</option>
        <option value="utilisateur">Utilisateur</option>
      </select>
    </div>
    <div className="flex justify-end">
      <button type="submit" className="bg-blue-4 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mr-2">Enregistrer</button>
      <button type="button" onClick={handleCancel} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400">Annuler</button>
    </div>
  </form>

  {/* Formulaire de modification du mot de passe */}
  <form onSubmit={handlePasswordSubmit}>
    <h2 className="text-3xl font-bold mb-8 text-gray-800 font-sans border-b-2 pb-4 border-gray-300">
        Modifier le mot de passe
    </h2>
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-700 mb-2">Nouveau mot de passe :</label>
      <input
        type="password"
        id="password"
        name="password"
        value={passwordInfo.password}
        onChange={handlePasswordChange}
        required
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirmer le mot de passe :</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={passwordInfo.confirmPassword}
        onChange={handlePasswordChange}
        required
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div className="flex justify-end">
      <button type="submit" className="bg-blue-4 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">Modifier Mot de passe</button>
    </div>
  </form>
</div>

    </Layout>
  );
};

export default DoubleForm;

