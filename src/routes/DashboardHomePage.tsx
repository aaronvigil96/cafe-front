import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import { useProductStore } from "../stores/product.store";

const DashboardHomePage = () => {

    const {products, fetchProducts} = useProductStore();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchProducts();
        fetch('http://localhost:3000/order')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])

    return(
        <div className="h-full rounded ml-2">
            <h1 className="text-white text-3xl">Dashboard</h1>
            <div className="flex gap-2 flex-wrap">
                <NavLink to={'/dashboard/product'} className="inline-block w-44 h-28">
                    <div className="p-4 border border-dashed border-gray-100 bg-slate-800 flex flex-col items-center justify-center w-full h-full">
                        <h3 className="text-white text-2xl font-bold">Productos</h3>
                        <p className="text-white text-xl">Total: <span className="font-bold">{products.length}</span></p>
                    </div>
                </NavLink>

                <NavLink to={'/dashboard/order'} className="inline-block w-44 h-28">
                    <div className="p-4 border border-dashed border-gray-100 bg-slate-800 flex flex-col items-center justify-center w-full h-full">
                        <h3 className="text-white text-2xl font-bold">Ordenes</h3>
                        <p className="text-white text-xl">Total: <span className="font-bold">{orders?.length}</span></p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default DashboardHomePage;