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
        <div className="max-w-3xl mx-auto sm:flex my-4">
            <div className="mx-auto w-60">
                <img className="w-full" src="/bag-coffee.png"/>
            </div>
            <div className="flex flex-col">
                <div>
                    <nav>
                        <Link className="text-slate-400 hover:text-black transition-colors ease-in-out duration-300 capitalize" to={'/'}>home / </Link><Link className="text-slate-400 hover:text-black transition-colors ease-in-out duration-300 capitalize" to={'/product'}>tienda / </Link><span className="capitalize">{product.name}</span>
                    </nav>
                    <h2 className="font-bold text-3xl capitalize">{product.name}</h2>
                    <p>Peso: {product.grams}gr</p>
                    <h3 className="font-semibold text-3xl">${product.price}</h3>
                    <p className="font-thin">{product.description}</p>
                </div>
                <div>
                    <button className="w-full border p-2 text-center font-bold rounded-sm cursor-pointer">Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;