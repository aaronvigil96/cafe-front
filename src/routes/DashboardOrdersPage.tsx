import { useEffect, useState } from "react";
import { Link } from "react-router";


const OrderItem = ({order}:any) => {

    return(
        <Link to={`/dashboard/order/${order.id}`} className="bg-slate-500 w-60 rounded-md p-2">
            <p>Total: <span className="font-bold text-black">${order.totalAmount}</span></p>
            <p>Creado: {order.createdAt}</p>
        </Link>
    )
}

const DashboardOrdersPage = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/order')
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);

    return(
        <div className="overflow-y-auto h-full">
            <h1 className="text-white text-3xl">Ordenes</h1>
            <div className="flex flex-col gap-2 md:flex-row flex-wrap">
                {
                    orders?.map((item:any) => (<OrderItem key={item.id} order={item}/>))
                }
            </div>
        </div>
    )
}

export default DashboardOrdersPage;