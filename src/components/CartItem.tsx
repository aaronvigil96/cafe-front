import { CartItemProps } from "../interfaces/cart-item.interface";

const CartItem = ({name, quantity, image}:CartItemProps) => {
    return(
        <div className="mt-2 flex items-center gap-2 border p-2 rounded-sm">
            <div className="w-10">
                <img className="w-full" src={`${image}`}/>
            </div>
            <p className="capitalize font-bold">{name}</p>
            <p className="font-bold text-green-800">{quantity}</p>
        </div>
    )
}

export default CartItem;