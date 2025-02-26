import { Link, useParams } from "react-router";
import { ProductItemProps } from "../interfaces/product-item.interface";
import { useCartStore } from "../stores/cart.store";
import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";

const ProductPage = () => {

    const { addToCart, getTotalCountProductById } = useCartStore();
    const [products, setProducts] = useState<ProductItemProps[]>([]);
    let isValid = true;

    let {pid} = useParams();

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    if(products.length === 0){
        return <h2>Cargando productos...</h2>
    }

    const product = products.find((product:ProductItemProps) => product.id.toString() === pid);

    if(!product){
        return <h2>Producto no encontrado</h2>
    }

    const addCartStoreProduct = () => {
        addToCart({id: product.id, image: product.image, price: product.price, quantity: 1, title: product.title});
    }

    if(product.stock > getTotalCountProductById(product.id)){
        isValid = true;
    } else {
        isValid = false
    }

    return(
        <div className="max-w-3xl mx-auto sm:flex my-4 p-4">
            <div className="mx-auto w-60 h-60">
                <img className="w-full h-full object-contain" src={`/${product.image}`}/>
            </div>
            <div className="flex flex-col mt-2 md:w-60">
                <div>
                    <nav>
                        <Link className="text-slate-400 hover:text-black transition-colors ease-in-out duration-300 capitalize" to={'/'}>home / </Link><Link className="text-slate-400 hover:text-black transition-colors ease-in-out duration-300 capitalize" to={'/product'}>tienda / </Link><span className="capitalize">{product.title}</span>
                    </nav>
                    <h2 className="font-bold text-3xl capitalize">{product.title}</h2>
                    <p className="font-thin">{product.description}</p>
                    <h3 className="font-semibold text-3xl">${product.price.toFixed(2)}</h3>
                    <p className={`${isValid ? "text-green-700" : "text-red-600"}`}>Disponible: {product.stock}</p>
                </div>
                <div>
                    <button disabled={!isValid} onClick={() => addCartStoreProduct()} className="w-full border p-2 text-center font-bold rounded-sm cursor-pointer disabled:text-red-600 disabled:cursor-not-allowed">Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;