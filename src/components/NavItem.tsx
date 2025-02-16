import { NavLink } from "react-router";
import { NavItemProps } from "../interfaces/nav-item.interface";

const NavItem = ({name, location}:NavItemProps) => {
    return(
        <NavLink to={location} className={({isActive}) => `text-slate-400 text-1xl uppercase ${isActive ? "text-slate-950" : ""}`}>
            {name}
        </NavLink>
    )
}

export default NavItem;