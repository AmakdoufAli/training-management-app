import React, { useEffect, useState } from "react";
import Layout from "../../components/template/Layout";
import { useGetUserByIdQuery } from "../../features/apiSlice";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const DoubleForm = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    } else {
      setShow(true);
    }
  }, []);

  const { id } = useParams();
  const { data: userdata, refetch } = useGetUserByIdQuery(id);

  const [userInfo, setUserInfo] = useState(userdata);

  const [passwordInfo, setPasswordInfo] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.put(`http://127.0.0.1:8000/api/users/${userInfo.id}`, userInfo);
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (passwordInfo.password !== passwordInfo.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    try {
      await axios.put(
        `http://127.0.0.1:8000/api/updatepassword/${userInfo.id}`,
        passwordInfo
      );
    } catch (err) {
      console.error(err);
    }
    console.log("Mot de passe modifié");
  };

  const handleCancel = () => {
    setUserInfo({
      name: "",
      email: "",
      role: "",
    });
  };

  return (
    <Layout>
        <header>
          <div className="">
              <div style={{backgroundColor: "#F5A962"}} className="overflow-hidden w-full shadow-sm  rounded-t-lg">
                  <div className="p-3 text-gray-900 flex justify-between">
                      
                      <div className="flex justify-start items-center ">
                          <h1 className="text-[20px] ml-2 text-white  mr-5">Modifier les informations utilisateur</h1>
                      </div>      
                  </div>
              </div>
          </div>
      </header>
      <div className="bg-white max-w-4xl mx-auto mt-10 mb-32 space-y-8">
        <Link to={'/users'} className="bg-blue-1 text-white text-lg px-7 py-1 rounded-l-full">Retour</Link>
        <form onSubmit={handleUserSubmit} className="border-2 p-5 shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Nom :
            </label>
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
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email :
            </label>
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
            <label htmlFor="role" className="block text-gray-700 mb-2">
              Rôle :
            </label>
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
            <button
              type="submit"
              className="bg-blue-4 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mr-2"
            >
              Enregistrer
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Annuler
            </button>
          </div>
        </form>

        <form onSubmit={handlePasswordSubmit} className="mb-8 border-2 p-5 shadow-lg">
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Nouveau mot de passe :
            </label>
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
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 mb-2"
            >
              Confirmer le mot de passe :
            </label>
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
            <button
              type="submit"
              className="bg-blue-4 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Modifier Mot de passe
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default DoubleForm;
