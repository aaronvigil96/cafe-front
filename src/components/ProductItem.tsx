import { ProductItemProps } from "../interfaces/product-item.interface";

const ProductItem = ({name}:ProductItemProps) => {

    return(
        <div className="embla__slide">
            <div className="w-44 flex flex-col mx-auto rounded-sm cursor-pointer">
                <img className="w-full mx-auto p-4 drop-shadow-xs" src="bag-coffee.png"/>
                <p className="text-center capitalize">{name}</p>
            </div>
        </div>
    )
}

export default ProductItem;