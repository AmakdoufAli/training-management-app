import { useState } from "react";


export default function HeadingPage ({toggleSidebar, sidebarVisible}) {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    return (
        <header>
          <div className={`top-24 fixed ${sidebarVisible ? 'w-[1059px]' : 'w-full'} sm:px-6 lg:px-8 mt-0`}>
            <div style={{backgroundColor: "#85C8DD"}} className=" overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-2 text-gray-900 flex justify-between">
                <div className="flex justify-start">
                  <button id="sidebarToggleBtn" className="text-[20px] ml-2 text-white font-bold mr-5" onClick={toggleSidebar}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                  </button>
                </div>
                <div className="flex justify-end items-center gap-3">
                  {/* <button type="button" onClick={logout} title="logout"><i className="bi bi-box-arrow-left text-3xl text-white"></i></button> */}
                  <div className="flex justify-end items-center gap-x-1 px-5">
                    <img src="/images/profil.png" width="46" height="46" alt="User icon" />
                    <div className="-space-y-2">
                      <div className="text-white font-bold text-lg">{user && user.name}</div>
                      <div className="text-white font-sans">{user && user.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
    )
}