import { FiPlus } from "react-icons/fi";
import { CartItemProps } from "../interfaces/cart-item.interface";
import { GoDash } from "react-icons/go";
import { useCartStore } from "../stores/cart.store";

const CartItem = ({id, name, quantity, image, price}:CartItemProps) => {

    const increase = useCartStore().increaseQuantity;
    const decrease = useCartStore().decreaseQuantity;

    return(
        <div className="mt-2 flex items-center justify-between gap-4 p-2 shadow">
            <div className="flex gap-4 items-center">
                <div className="w-10 shadow">
                    <img className="w-full" src={`${image}`}/>
                </div>
                <div className="w-24">
                    <p className="capitalize font-bold w-48 truncate">{name}</p>
                    <p>1000gr</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div onClick={() => decrease(id)} className="w-8 h-8 shadow flex items-center justify-center cursor-pointer hover:bg-red-800 hover:text-white transition-colors duration-300 ease-in-out">
                    <GoDash className="text-2xl"/>
                </div>
                <div className="w-8 h-8 flex items-center justify-center">
                    <p className="font-bold text-green-800">{quantity}</p>
                </div>
                <div onClick={() => increase(id)} className="w-8 h-8 shadow flex items-center justify-center cursor-pointer hover:bg-green-800 hover:text-white transition-colors duration-300 ease-in-out">
                    <FiPlus className="text-2xl"/>
                </div>
            </div>
            <p className="font-bold">{price * quantity}</p>
        </div>
    )
}

export default CartItem;