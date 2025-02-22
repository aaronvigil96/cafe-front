import { useProductsStore } from "../stores/products.store";

const DashboardProductPage = () => {

    const {products, toggleOffert} = useProductsStore();

    const handleToggleChange = (id:number) => {
        toggleOffert(id);
    }


    return(
        <div className="h-full rounded ml-2">
            <h1 className="text-white text-3xl">Productos</h1>
            <div className="flex gap-2 flex-wrap">
            {
                products?.map(({id, name, offert, price, stock, grams}) => (
                    <div key={id} className="w-40 shadow bg-slate-900 rounded">
                        <h2 className="text-white text-2xl capitalize">{name}</h2>
                        <div className="flex items-center gap-1">
                            <p className="inline-block text-xl gap-2 text-white">Oferta: </p>
                            <label className="inline-block cursor-pointer relative w-[60px] h-[34px]">
                                <input type="checkbox" className="w-0 h-0 opacity-0 peer" checked={offert} onChange={() => handleToggleChange(id)}/>
                                <span className="absolute top-0 left-0 right-0 bottom-0 peer-not-checked:bg-slate-500 before:content-[''] before:h-[26px] before:w-[26px] before:left-[4px] before:bottom-[4px] before:bg-white peer-checked:bg-blue-500 rounded-[34px]"></span>
                                <span className="absolute top-1 left-[4px] bottom-[4px] w-[26px] h-[26px] bg-white rounded-full transition-all peer-checked:translate-x-[0px] peer-not-checked:translate-x-[26px]"></span>
                            </label>
                        </div>
                        <p className="text-white text-xl">Precio: ${price}</p>
                        <p className="text-white text-xl">stock: {stock}</p>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default DashboardProductPage;