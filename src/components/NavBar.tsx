import { Link } from "react-router";
import NavItem from "./NavItem";
import MessageHeader from "./MessageHeader";

const NavBar = () => {
    return(
        <>
            <MessageHeader/>
            <header className="p-2 shadow">
                <nav className="flex mx-auto items-center justify-between max-w-5xl px-4">
                    <Link to={'/'}>
                        <h1 className="font-thin text-2xl">Cafelist</h1>
                    </Link>
                    <nav className="flex gap-2">
                        <NavItem name="tienda" location="/product"/>
                        <NavItem name="contacto" location="/contact"/>
                    </nav>
                </nav>
            </header>
        </>
    )
}

export default NavBar;