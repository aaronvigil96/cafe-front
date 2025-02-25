import { FiPlus } from "react-icons/fi";
import { CartItemProps } from "../interfaces/cart-item.interface";
import { GoDash } from "react-icons/go";
import { useCartStore } from "../stores/cart.store";
import { useProductsStore } from "../stores/products.store";

const CartItem = ({id, name, quantity, image, price}:CartItemProps) => {

    const decrease = useCartStore().decreaseQuantity;
    const getProductStock = useProductsStore().getProductStock;
    const increase = useCartStore().increaseQuantity;

    const isValid = quantity < getProductStock(id);

    const handleButton = () => {
        if(isValid){
            increase(id);
        }
    }

    console.log(isValid);

    return(
        <div className="mt-2 flex items-center justify-between gap-4 p-2 shadow">
            <div className="flex gap-4 items-center">
                <div className="w-10 h-16 shadow flex items-center">
                    <img className="w-full" src={`/${image}`}/>
                </div>
                <div className="w-24">
                    <p className="capitalize font-bold w-48 truncate">{name}</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div onClick={() => decrease(id)} className="w-8 h-8 shadow flex items-center justify-center cursor-pointer hover:bg-red-800 hover:text-white transition-colors duration-300 ease-in-out">
                    <GoDash className="text-2xl"/>
                </div>
                <div className="w-8 h-8 flex items-center justify-center">
                    <p className="font-bold text-green-800">{quantity}</p>
                </div>
                <button disabled={!isValid} onClick={() => handleButton()} className={`disabled:text-red-500 disabled:cursor-not-allowed disabled:hover:bg-transparent w-8 h-8 shadow flex items-center justify-center cursor-pointer hover:bg-green-800 hover:text-white transition-colors duration-300 ease-in-out`}>
                    <FiPlus className="text-2xl"/>
                </button>
            </div>
            <p className="font-bold">${price * quantity}</p>
        </div>
    )
}

export default CartItem;