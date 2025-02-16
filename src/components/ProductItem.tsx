import { Link } from "react-router";
import { ProductItemProps } from "../interfaces/product-item.interface";

const ProductItem = ({id, name}:ProductItemProps) => {

    return(
        <div className="embla__slide">
            <Link to={`/product/${id}`}>
                <div className="w-44 flex flex-col mx-auto rounded-sm cursor-pointer">
                    <img className="w-full mx-auto p-4 drop-shadow-xs" src="bag-coffee.png"/>
                    <p className="text-center capitalize">{name}</p>
                </div>
            </Link>
        </div>
    )
}

export default ProductItem;