import { NavLink } from "react-router";
import { useProductsStore } from "../stores/products.store";

const DashboardHomePage = () => {

    const {products} = useProductsStore();

    return(
        <div className="h-full rounded ml-2">
            <h1 className="text-white text-3xl">Dashboard</h1>
            <div className="flex gap-2">
                <NavLink to={'/dashboard/product'} className="inline-block">
                    <div className="w-32 h-32 border border-dashed border-gray-100 bg-slate-800 flex flex-col items-center justify-center">
                        <h3 className="text-white text-2xl font-bold">Productos</h3>
                        <p className="text-white text-xl">Total: <span className="font-bold">{products.length}</span></p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default DashboardHomePage;