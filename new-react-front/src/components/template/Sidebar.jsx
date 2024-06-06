import { Link, useLocation } from "react-router-dom"
import { useNavigate } from "react-router";
import { useState } from "react";


export default function Sidebar ({sidebarVisible}) {

    const location = useLocation();

    const userData = JSON.parse(localStorage.getItem('user'));
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                    </svg>
                    <span className="text-[15px] ml-4 text-white font-bold">Dashboard</span>
                </Link>
                <hr className='mx-11 my-1'/>
                {userData && userData.role === "gestionnaire" && <>
                    <Link to={"/planification"} className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/planification' && 'bg-blue-2'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>

                        <span className="text-[15px] ml-4 text-white font-bold">Planification</span>
                    </Link>
                    <hr className='mx-11 my-1'/>
                </>}
                <Link to={"/historique"} className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/historique' && 'bg-blue-2'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                    </svg>
                    <span className="text-[15px] ml-4 text-white font-bold">Historique</span>
                </Link>
                <hr className='mx-11 my-1'/>
                {userData && userData.role === "gestionnaire" && <>
                    <Link to={"/brouillons"} className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/brouillons' && 'bg-blue-2'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>
                        <span className="text-[15px] ml-4 text-white font-bold">Brouillons</span>
                    </Link>
                    <hr className='mx-11 my-1'/>
                </>}
                <Link to={"/listInstituts"} className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/listInstituts' || location.pathname === '/ajouterInst' ? 'bg-blue-2' : ''}`}>
                    {userData && userData.role === "admin" ? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                            :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    }
                    <span className="text-[15px] ml-4 text-white font-bold">{userData && userData.role == "admin" ? 'Gestion Des' : 'Liste Des'} Instituts</span>
                </Link>
                <hr className='mx-11 my-1'/>
                <Link to={"/listeFormateurs"} className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/listeFormateurs' || location.pathname === '/ajouterFrm' ? 'bg-blue-2' : ''}`}>
                    {userData && userData.role === "admin" ? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                            :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    }
                    <span className="text-[15px] ml-4 text-white font-bold">{userData && userData.role == "admin" ? 'Gestion Des' : 'Liste Des'} Formateurs</span>
                </Link>
                <hr className='mx-11 my-1'/>
                {userData && userData.role === "admin" && <>
                    <Link to={"/users"} className={`p-2.5  flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/users' || location.pathname === '/ajouterUser' ? 'bg-blue-2' : ''}`}>
                        {userData && userData.role === "admin" ? 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                            </svg>
                                :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        }
                        <span className="text-[15px] ml-4 text-white font-bold">{userData && userData.role == "admin" ? 'Gestion Des' : 'Liste Des'} Utilisateurs</span>
                    </Link>
                    <hr className='mx-11 my-1'/>
                </>}
                <button className="p-2.5 w-full flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black" onClick={logout}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                    </svg>
                    <span className="text-[15px] ml-4 text-white font-bold">Se deconnecter</span>
                </button>

                
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