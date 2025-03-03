import { Link } from "react-router";
import { ProductItemProps } from "../interfaces/product-item.interface";
import { useEffect, useState } from "react";

const ProductsPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    const totalProducts:ProductItemProps[] = products;

    return(
        <div className="max-w-3xl mx-auto p-2">
            <nav className="mt-2 pr-2 w-full text-end">
                <Link className="text-slate-400 hover:text-black transition-colors ease-in-out duration-300 capitalize" to={'/'}>home / </Link><span className="capitalize">tienda</span>
            </nav>
            <div className="flex flex-wrap justify-center">
                {
                    totalProducts.length != 0 ? 
                    totalProducts.map(({id, title, image}) => (
                        <div key={id} className="bg-white m-2 rounded-sm shadow">
                            <Link to={`/product/${id}`}>
                                <div className="w-44 flex flex-col mx-auto rounded-sm cursor-pointer">
                                    <img className="w-full h-56 mx-auto p-4 drop-shadow-xs" src={`/${image}`}/>
                                    <p className="text-center capitalize font-semibold">{title}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                    :
                    <h3 className="text-2xl">No hay articulos públicados</h3>
                }
            </div>
        </div>
        
    )
}

export default ProductsPage;