import { Link, useParams } from "react-router";
import { ProductsItemProps } from "../interfaces/products-item.interface";
import { ProductItemProps } from "../interfaces/product-item.interface";

const ProductPage = ({products}:ProductsItemProps) => {

    let {pid} = useParams();

    const product = products.find((product:ProductItemProps) => product.id.toString() === pid);

    if(!product){
        return <h2>Producto no encontrado</h2>
    }

    return(
        <div className="max-w-3xl mx-auto p-2 sm:flex">
            <div className="mx-auto w-60">
                <img className="w-full" src="/bag-coffee.png"/>
            </div>
            <div>
                <nav>
                    <Link className="text-slate-400 hover:text-black transition-colors ease-in-out duration-300" to={'/'}>Home / </Link><span className="capitalize">{product.name}</span>
                </nav>
                <h2 className="font-bold text-3xl capitalize">{product.name}</h2>
                <p className="font-thin">{product.description}</p>
            </div>
        </div>
    )
}

export default ProductPage;