import { Link } from "react-router";
import { products } from "../db/product";
import { ProductItemProps } from "../interfaces/product-item.interface";

const ProductsPage = () => {

    const totalProducts:ProductItemProps[] = products;

    return(
        <div className="max-w-3xl mx-auto p-2">
            <nav className="mt-2 w-full text-end">
                <Link className="text-slate-400 hover:text-black transition-colors ease-in-out duration-300 capitalize" to={'/'}>home / </Link><span className="capitalize">tienda</span>
            </nav>
            <div className="flex flex-wrap justify-center">
                {
                    totalProducts.map(({id, name}) => (
                        <Link to={`/product/${id}`} key={id}>
                            <div className="bg-white m-2 rounded-sm shadow">
                                <div className="w-44 flex flex-col mx-auto rounded-sm cursor-pointer">
                                    <img className="w-full mx-auto p-4 drop-shadow-xs" src="bag-coffee.png"/>
                                    <p className="text-center capitalize font-semibold">{name}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
        
    )
}

export default ProductsPage;