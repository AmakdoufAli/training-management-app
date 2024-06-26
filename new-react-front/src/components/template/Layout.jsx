import AddFormation from "../../pages/addFormation/AddFormation";
import Brouillons from "../../pages/brouillons/Brouillons ";
import UpdateForm from "../UpdateForm/UpdateForm";
import HeadingPage from "./HeadingPAge";
import Header from "./header";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from "./Sidebar";


export default function Layout ({children}) {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="flex flex-col  md:mx-auto max-w-screen px-0 bg-gray-100">
            <Header/>
            <div className=" absolute top-16 h-8">
                {sidebarVisible && <div className="w-96 sticky top-16 h-8 bg-gray-100"></div>}
                <div className={`w-full fixed top-16 h-8 bg-gray-100 z-10 ${sidebarVisible ? 'left-72' : ''}`}></div>
            </div>

            
            <div className="flex gap-10">
                {/* Sidebar */}
                <Sidebar sidebarVisible={sidebarVisible}/>
                {/* Main Content */}
                <main className="main-content relative w-full">
                    {/* Page Heading */}
                    <HeadingPage toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
                    {/* Page Content */}
                    <section className="mt-44">
                        <div className="mx-auto sm:px-3 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className=" text-gray-900">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}