import { useEffect, useState } from "react";
import { useParams } from "react-router";


const OrderItem = ({item}:any) => {

    console.log(item);

    return (
        <div>
            <h2 className="font-bold">{item.product.title}</h2>
            <p>Cantidades: <span className="font-bold">{item.quantity}</span></p>
        </div>
    )
}


const DashboardOrderPage = () => {

    const [order, setOrder] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    let {id} = useParams();

    useEffect(() => {
        if(!id) return;
        setLoading(true);
        fetch(`http://localhost:3000/order/${id}`)
        .then(res => {
            if(!res.ok) throw new Error('Orden no encontrada');
            return res.json();
        })
        .then(data => setOrder(data))
        .catch(() => setOrder(null))
        .finally(() => setLoading(false))
    },[id]);

    if(!order) return <h2 className="text-white text-center text-2xl">No se encontró la orden</h2>

    if(loading) return <h2 className="text-white text-center text-2xl">Cargando...</h2>

    return (
        <div className="text-white shadow-2xl border border-yellow-700 p-2 rounded-md w-60">
            <h3 className="text-xl">Orden N°: {order.id}</h3>
            <div>
                {
                    order?.items.map((item:any) => (<OrderItem key={item.id} item={item}/>))
                }
            </div>
            <h3>Total: $<span className="font-bold">{order.totalAmount}</span></h3>
        </div>
    )
}

export default DashboardOrderPage;