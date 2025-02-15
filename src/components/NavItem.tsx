import { NavLink } from "react-router";
import { NavItemProps } from "../interfaces/nav-item.interface";

const NavItem = ({name, location}:NavItemProps) => {
    return(
        <NavLink to={location} className={({isActive}) => `text-1xl uppercase ${isActive ? "text-slate-400" : ""}`}>
            {name}
        </NavLink>
    )
}

export default NavItem;