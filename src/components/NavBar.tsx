import { Link } from "react-router";
import NavItem from "./NavItem";

const NavBar = () => {
    return(
        <header className="p-2 shadow">
            <nav className="flex items-center justify-between max-w-5xl mx-auto">
                <Link to={'/'}>
                    <h1 className="font-thin text-2xl">Cafelist</h1>
                </Link>
                <nav className="flex gap-2">
                    <NavItem name="servicio" location="/service"/>
                    <NavItem name="contacto" location="/contact"/>
                </nav>
            </nav>
        </header>
    )
}

export default NavBar;