import { Link, useLocation } from "react-router-dom"
import { useNavigate } from "react-router";
import { useState } from "react";


export default function Sidebar ({sidebarVisible}) {

    const location = useLocation();

    const role = JSON.parse(localStorage.getItem('user')).role;
    const navigate = useNavigate();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  
    const logout = () =>{
      localStorage.removeItem('user');
      navigate('/login');
    }


    return (
        <div className={`sidebar ${sidebarVisible ? '' : 'hidden'} w-1/5 mr-12`}>
        <div style={{backgroundColor: "#3c8dad"}} className="sidebar top-24 fixed h-screen    lg:left-0 p-2 w-[300px] overflow-y-auto text-center  sm:rounded-lg w-62  text-wight">
          <div className="text-black text-xl">
            <div className="mx-24 mt-2 flex items-center">
              <img src="/images/logo.png" alt="Logo" className=" fixed w-24 rounded-full" />
            </div>

            {/* Liens de navigation */}
            <div className="mt-20">
                <Link to={"/"} className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/' && 'bg-blue-2'}`}>
                    <i className="bi bi-speedometer text-white text-2xl ml-2"></i>
                    <span className="text-[15px] ml-4 text-white font-bold">Dashboard</span>
                </Link>
                <hr className='mx-11 my-1'/>
                {role === "gestionnaire" && <>
                    <Link to={"/planification"} className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/planification' && 'bg-blue-2'}`}>
                        <img src="/images/planification.png"/>
                        <span className="text-[15px] ml-4 text-white font-bold">Planification</span>
                    </Link>
                    <hr className='mx-11 my-1'/>
                </>}
                <Link to={"/historique"} className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/historique' && 'bg-blue-2'}`}>
                    <img src="/images/historique.png" className='h-8 w-8'/>
                    <span className="text-[15px] ml-4 text-white font-bold">Historique</span>
                </Link>
                <hr className='mx-11 my-1'/>
                {role === "gestionnaire" && <>
                    <Link to={"/brouillons"} className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/brouillons' && 'bg-blue-2'}`}>
                        <img src="/images/brouillon.png" className='h-8 w-7 ml-2'/>
                        <span className="text-[15px] ml-4 text-white font-bold">Brouillons</span>
                    </Link>
                    <hr className='mx-11 my-1'/>
                </>}
                <Link to={"/listInstituts"} className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/listInstituts' || location.pathname === '/ajouterInst' ? 'bg-blue-2' : ''}`}>
                    <i className="bi bi-card-list text-2xl text-white ml-1"></i>
                    <span className="text-[15px] ml-4 text-white font-bold">{role == "admin" ? 'Gestion Des' : 'Liste Des'} Instituts</span>
                </Link>
                <hr className='mx-11 my-1'/>
                <Link to={"/listeFormateurs"} className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/listeFormateurs' || location.pathname === '/ajouterFrm' ? 'bg-blue-2' : ''}`}>
                    <i className="bi bi-card-list text-2xl text-white ml-1"></i>
                    <span className="text-[15px] ml-4 text-white font-bold">{role == "admin" ? 'Gestion Des' : 'Liste Des'} Formateurs</span>
                </Link>
                <hr className='mx-11 my-1'/>
                {role === "admin" && <>
                    <Link to={"/users"} className={`p-2.5  flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/users' || location.pathname === '/ajouterUser' ? 'bg-blue-2' : ''}`}>
                        <i className="bi bi-speedometer text-white text-2xl"></i>
                        <span className="text-[15px] ml-4 text-white font-bold">{role == "admin" ? 'Gestion Des' : 'Liste Des'} Utilisateurs</span>
                    </Link>
                    <hr className='mx-11 my-1'/>
                </>}
                <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black">
                    <img src="/images/deconnecter.png" className='h-7 w-6'/>
                    <button  className="text-[15px] ml-4 text-white font-bold" onClick={logout}>Se deconnecter</button>
                </div>

                
                {/* <hr className='mx-11 my-1'/>
                <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black">
                    <img src="/images/rapport.png" className='h-8 w-7 ml-2'/>
                    <Link to='#' className="text-[15px] ml-4 text-white font-bold">Rapports et statistique</Link>
                </div>
                <hr className='mx-11 my-1'/>
                <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black">
                    <img src="/images/calendrier.png" className='h-7 w-6 ml-3'/>
                    <Link to={'#'} className="text-[15px] ml-4 text-white font-bold">Calendrier</Link>
                </div>
                <hr className='mx-11 my-1'/>
                <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black">
                    <img src="/images/journal.png" className='h-7 w-6 ml-3'/>
                    <Link to='#' className="text-[15px] ml-4 text-white font-bold">Journal d'absence</Link>
                </div>
                <hr className='mx-11 my-1'/>
 */}
                
            </div>
          </div>
        </div>
      </div>
    )
}