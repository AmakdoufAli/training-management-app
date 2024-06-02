import { Link, useLocation } from "react-router-dom"

export default function Sidebar ({sidebarVisible}) {

    const location = useLocation();


    return (
        <div className={`sidebar ${sidebarVisible ? '' : 'hidden'} w-1/5 mr-12`}>
        <div style={{backgroundColor: "#3c8dad"}} className="sidebar top-24 fixed h-screen    lg:left-0 p-2 w-[300px] overflow-y-auto text-center  sm:rounded-lg w-62  text-wight">
          <div className="text-black text-xl">
            <div className="mx-24 mt-2 flex items-center">
              <img src="/images/logo.png" alt="Logo" className=" fixed w-24 rounded-full" />
            </div>

            {/* Liens de navigation */}
            <div>
                <Link to={"/"} className={`p-2.5 mt-12 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/' && 'bg-blue-2'}`}>
                    <i className="bi bi-speedometer text-white text-2xl ml-2"></i>
                    <span className="text-[15px] ml-4 text-white font-bold">Dashboard</span>
                </Link>
                <hr className='mx-11 my-1'/>
                <Link to={"/users"} className={`p-2.5  flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/' && 'bg-blue-2'}`}>
                    <i className="bi bi-speedometer text-white text-2xl ml-2"></i>
                    <span className="text-[15px] ml-4 text-white font-bold">Gestion des utilisateurs</span>
                </Link>
                <hr className='mx-11 my-1'/>
                <Link to={"/planification"} className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/planification' && 'bg-blue-2'}`}>
                    <img src="/images/planification.png"/>
                    <span className="text-[15px] ml-4 text-white font-bold">Planification</span>
                </Link>
                <hr className='mx-11 my-1'/>
                <Link to={"/historique"} className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/historique' && 'bg-blue-2'}`}>
                    <img src="/images/historique.png" className='h-8 w-8 ml-2'/>
                    <span className="text-[15px] ml-4 text-white font-bold">Historique</span>
                </Link>
                <hr className='mx-11 my-1'/>
                <Link to={"/brouillons"} className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/brouillons' && 'bg-blue-2'}`}>
                    <img src="/images/brouillon.png" className='h-8 w-7 ml-2'/>
                    <span className="text-[15px] ml-4 text-white font-bold">Brouillons</span>
                </Link>
                <hr className='mx-11 my-1'/>
                <Link to={"/ajouterInst"} className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/ajouterInst' && 'bg-blue-2'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-building-add text-white ml-1" viewBox="0 0 16 16">
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0"/>
                        <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1z"/>
                        <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
                    </svg>
                    <span className="text-[15px] ml-4 text-white font-bold">Ajouter Instituts</span>
                </Link>
                <hr className='mx-11 my-1'/>
                <Link to={"/listInstituts"} className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/listInstituts' && 'bg-blue-2'}`}>
                    <i class="bi bi-card-list text-2xl text-white ml-1"></i>
                    <span className="text-[15px] ml-4 text-white font-bold">Liste Instituts</span>
                </Link>
                <hr className='mx-11 my-1'/>
                <Link to={"/ajouterFrm"} className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/ajouterFrm' && 'bg-blue-2'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-building-add text-white ml-1" viewBox="0 0 16 16">
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0"/>
                        <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1z"/>
                        <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
                    </svg>
                    <span className="text-[15px] ml-4 text-white font-bold">Ajouter Formateurs</span>
                </Link>
                <hr className='mx-11 my-1'/>
                <Link to={"/listeFormateurs"} className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black ${location.pathname === '/listeFormateurs' && 'bg-blue-2'}`}>
                    <i class="bi bi-card-list text-2xl text-white ml-1"></i>
                    <span className="text-[15px] ml-4 text-white font-bold">Liste Formateurs</span>
                </Link>
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
                <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-2 text-black">
                    <img src="/images/deconnecter.png" className='h-7 w-6 ml-3'/>
                    <Link to='#' className="text-[15px] ml-4 text-white font-bold">Se deconnecter</Link>
                </div> */}
                
            </div>
          </div>
        </div>
      </div>
    )
}