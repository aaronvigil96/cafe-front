import { ProductItemProps } from "../interfaces/product-item.interface";
import { CarrouselProductProps } from "../interfaces/carrousel-product.interface";
import ProductItem from "./ProductItem";

const CarrouselProduct = ({ slides }:CarrouselProductProps) => {
    return(
        <div className="embla__container">
            {slides.map((slideItem:ProductItemProps) => (<ProductItem name={slideItem.name}/>))}
        </div>
    )
}

export default CarrouselProduct;