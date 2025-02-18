import { Link } from "react-router";
import NavItem from "./NavItem";
import MessageHeader from "./MessageHeader";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";

const NavBar = () => {

    const [cart, setCart] = useState(false);
    const [cartItem, setCartItem] = useState([1]);

    useEffect(() => {
        document.documentElement.style.overflow = cart ? "hidden" : "";
        return () => {
            document.documentElement.style.overflow = "";
        };
    }, [cart]);

    const toggleCart = () => {
        setCart(!cart);
    }

    return(
        <>
            <MessageHeader/>
            <header className="p-2 shadow relative">
                <nav className="flex mx-auto items-center justify-between max-w-5xl px-4">
                    <Link to={'/'}>
                        <h1 className="font-thin text-2xl">Cafelist</h1>
                    </Link>
                    <nav className="flex gap-4 items-center">
                        <div className="flex gap-2">
                            <NavItem name="tienda" location="/product"/>
                            <NavItem name="contacto" location="/contact"/>
                        </div>
                        <div className="relative p-2 cursor-pointer">
                            <MdOutlineShoppingCart onClick={toggleCart} className="text-2xl"/>
                            {
                                !cartItem.length ? "" : <span className="absolute p-4 flex items-center w-2.5 h-2.5 justify-center bg-green-600 rounded-full font-bold text-white top-[-14px] right-[-15px]">{cartItem.length}</span>
                            }    
                        </div>
                    </nav>
                </nav>
                <div className={`fixed top-0 right-0 h-full w-80 bg-white ${cart ? "translate-x-0 z-[100]" : "translate-x-full"} md:w-xl transition-transform duration-300 ease-in-out`}>
                </div>
                <div onClick={toggleCart} className={`${cart ? "fixed w-full h-full top-0 right-0 z-[90] backdrop-brightness-50" : ""}`}>
                </div>
            </header>
        </>
    )
}

export default NavBar;