import { ProductItemProps } from "../interfaces/product-item.interface";
import { CarrouselProductProps } from "../interfaces/carrousel-product.interface";
import ProductItem from "./ProductItem";

const CarrouselProduct = ({ slides }:CarrouselProductProps) => {
    return(
        <div className="embla__container">
            {slides.map((slideItem:ProductItemProps) => (<ProductItem key={slideItem.id} id={slideItem.id} image={slideItem.image} name={slideItem.name} price={slideItem.price} stock={slideItem.stock} description={slideItem.description} offert={slideItem.offert}/>))}
        </div>
    )
}

export default CarrouselProduct;