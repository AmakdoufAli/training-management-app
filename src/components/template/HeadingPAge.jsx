

export default function HeadingPage ({toggleSidebar, sidebarVisible}) {

    return (
        <header>
          <div className={`top-24 fixed ${sidebarVisible ? 'w-[1190px]' : 'w-full'} sm:px-6 lg:px-8 mt-0`}>
            <div style={{backgroundColor: "#85C8DD"}} className=" overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-2 text-gray-900 flex justify-between">
                <div className="flex justify-start">
                  <button id="sidebarToggleBtn" className="text-[20px] ml-2 text-white font-bold mr-5" onClick={toggleSidebar}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                  </button>
                </div>
                <div className="flex justify-end items-center">
                  <img src="/images/profil.png" width="35" height="35" alt="User icon" />
                  <h1 className="text-[20px] ml-2 text-white font-bold mr-5">Ahmed Alami</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
    )
}