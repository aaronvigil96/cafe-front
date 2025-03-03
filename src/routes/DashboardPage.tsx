import { Outlet } from "react-router";
import NavBarDashboard from "../components/NavBarDashboard";
import React, { useState } from "react";
import CreateProduct from "../components/CreateProduct";
import { IoIosAdd } from "react-icons/io";

const DashboardPage = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const closePopup = () => {
        setIsPopupOpen(!isPopupOpen)
    }

    const togglePopup = (e:React.MouseEvent) => {
        setIsPopupOpen(!isPopupOpen);
    }

    return(
        <>
            <div className="h-screen w-full bg-slate-950 flex gap-2 relative">
                <NavBarDashboard/>
                <div className="bg-slate-950 w-full h-full rounded p-2">
                    <Outlet/>
                </div>
                <div onClick={(e) => togglePopup(e)} className="absolute bottom-5 right-5 h-14 w-14 bg-green-700 flex justify-center items-center rounded-full">
                    <IoIosAdd className="text-3xl text-white" />
                </div>
                <div onClick={closePopup} className={isPopupOpen ? `fixed w-full h-full bg-slate-950/60 flex justify-center items-center z-20` : "hidden"}>
                    <div onClick={(e) => e.stopPropagation()}>
                        <CreateProduct/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardPage;