import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Temporal } from "temporal-polyfill";


const OrderItem = ({order}:any) => {
    const date = Temporal.Instant.from(order.createdAt);
    const timeZone = 'America/Argentina/Buenos_Aires';
    const zonedDateTime = date.toZonedDateTimeISO(timeZone);
    const formatter = `${zonedDateTime.toPlainDate().toString()} ${zonedDateTime.hour.toString().padStart(2, '0')}:${zonedDateTime.minute.toString().padStart(2, '0')}`

    return(
        <Link to={`/dashboard/order/${order.id}`} className="w-60 border border-yellow-700 rounded-md p-2 text-white">
            <p>Total: <span className="font-bold">${order.totalAmount}</span></p>
            <p>Creado: {formatter}</p>
            <h2>Hacé click para obtener más detalles</h2>
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

    const totalAmount = orders.reduce((acc, currentValue:any) => acc + currentValue.totalAmount, 0);

    return(
        <div className="overflow-y-auto h-full">
            <h1 className="text-white text-3xl">Ventas</h1>
            <div className="flex flex-col gap-2 md:flex-row flex-wrap mt-2">
                {
                    orders?.map((item:any) => (<OrderItem key={item.id} order={item}/>))
                }
            </div>
            {
                orders.length > 0 ? <h3 className="text-white text-2xl">Total: <span className="font-bold">${totalAmount}</span></h3> : ""
            }
        </div>
    )
}

export default DashboardOrdersPage;