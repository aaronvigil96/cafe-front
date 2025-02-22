import { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { IoHomeSharp } from "react-icons/io5";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { Link, NavLink } from "react-router";

const NavBarDashboard = () => {

    const [menuIsActive, setMenuIsActive] = useState(true);

    const toggleMenu = () => {
        setMenuIsActive(!menuIsActive);
    }

    return(
        <nav className={`h-full ${ menuIsActive ? "w-20" : "w-5"} md:w-20 bg-slate-700 pt-2 relative transition-all duration-300 ease-in-out border-r border-yellow-700`}>
            <div onClick={toggleMenu} className="absolute right-[-15px] rounded bg-slate-200 cursor-pointer md:hidden">
                <RxDoubleArrowLeft className={`${menuIsActive ? "" : "rotate-180"}  text-black text-3xl transition-transform duration-300 ease-in-out`}/>
            </div>
            <div className="flex flex-col justify-between h-full">
                <div className={`${menuIsActive ? "flex flex-col items-center gap-2 mt-10 p-2" : "hidden"} md:visible`}>
                    <NavLink to={'/dashboard/home'} className={({isActive}) => ` ${isActive ? "border-yellow-700" : ""} p-4 border rounded bg-slate-900 max-w-max hover:rounded-sm transition-all duration-300 ease-in-out cursor-pointer group`}>
                        <IoHomeSharp className="text-3xl text-white group-hover:text-yellow-700 transition-colors duration-300 ease-in-out" />
                    </NavLink>

                    <NavLink to={'/dashboard/product'} className={({isActive}) => ` ${isActive ? "border-yellow-700" : ""} p-4 border rounded bg-slate-900 max-w-max hover:rounded-sm transition-all duration-300 ease-in-out cursor-pointer group`}>
                        <GrCart className="text-3xl text-white group-hover:text-yellow-700 transition-colors duration-300 ease-in-out" />
                    </NavLink>
                </div>
                <Link to={'/'} className={`${menuIsActive ? "" : "hidden"} p-4 border rounded bg-slate-900 max-w-max hover:rounded-sm transition-all duration-300 ease-in-out cursor-pointer group mx-auto mb-2`}>
                    <FaLongArrowAltLeft className="text-3xl text-white group-hover:text-red-500 transition-colors duration-300 ease-in-out" />
                </Link>
            </div>
        </nav>
    )
}

export default NavBarDashboard;