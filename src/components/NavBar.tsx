import { Link } from "react-router";
import NavItem from "./NavItem";
import MessageHeader from "./MessageHeader";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import CartItem from "./CartItem";
import { useCartStore } from "../stores/cart.store";

const NavBar = () => {

    const [cart, setCart] = useState(false);
    const cartStore = useCartStore().cart;
    const total = useCartStore().getTotalPrice();
    const totalCountProductCart = useCartStore().getTotalCountProducts()

    useEffect(() => {
        document.documentElement.style.overflow = cart ? "hidden" : "";
        return () => {
            document.documentElement.style.overflow = "";
        };
    }, [cart]);

    const toggleCart = () => {
        setCart(!cart);
    }

    const handleButton = async () => {

        try{
            const response = await fetch('http://localhost:3000/create-preference', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cartStore)
            })
            const data = await response.json();
            window.location.href = data.init_point;
        }catch(err){
            console.log(err);
        }
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
                            <NavItem name="cuenta" location="/auth"/>
                            <NavItem name="panel" location="/dashboard"/>
                        </div>
                        <div className="relative p-2 cursor-pointer">
                            <MdOutlineShoppingCart onClick={toggleCart} className="text-2xl"/>
                            {
                                !cartStore.length ? "" : <span className="absolute p-3 flex items-center w-2 h-2 justify-center bg-green-600 rounded-full font-bold text-white top-[-10px] right-[-7px]">{totalCountProductCart}</span>
                            }    
                        </div>
                    </nav>
                </nav>
                <div className={`fixed top-0 right-0 h-full flex flex-col w-full bg-white ${cart ? "translate-x-0 z-[100]" : "translate-x-full"} md:w-[500px] transition-transform duration-300 ease-in-out`}>
                    <div className="flex justify-end pr-2 pt-2">
                        <IoClose onClick={toggleCart} className="text-4xl cursor-pointer"/>
                    </div>
                    <div className="flex flex-col flex-1 justify-between">
                        <div className="max-w-max pl-2">
                            <h2 className="text-3xl">Carrito</h2>
                        </div>
                        <div className="flex-1 p-2 overflow-y-auto max-h-[70vh]">
                            {
                                cartStore?.map(product => <CartItem key={product.id} id={product.id} price={product.price} image={product.image} name={product.name} quantity={product.quantity}/>)
                            }
                        </div>
                        <div className="p-2">
                            <hr className="px-2"/>
                            <p className="text-2xl">Total: <span className="font-bold text-2xl">${total.toFixed(2)}</span></p>
                            <button onClick={() => handleButton()} className="cursor-pointer w-full p-2 mt-2 bg-blue-500 text-white rounded-sm">Comprar</button>
                        </div>
                    </div>
                </div>
                <div onClick={toggleCart} className={`${cart ? "fixed w-full h-full top-0 right-0 z-[90] backdrop-brightness-50" : ""}`}>
                </div>
            </header>
        </>
    )
}

export default NavBar;