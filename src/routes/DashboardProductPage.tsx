import { useProductsStore } from "../stores/products.store";

const DashboardProductPage = () => {

    const {products, toggleOffert, updateProduct} = useProductsStore();

    const handleToggleChange = (id:number) => {
        toggleOffert(id);
    }

    const handleChange = (id:number, field:any, value:any) => {
        updateProduct(id, {[field]:value});
    }


    return(
        <div className="h-full rounded ml-2 overflow-y-auto">
            <h1 className="text-white text-3xl">Productos</h1>
            <div className="flex gap-2 flex-wrap mt-2">
            {
                products?.map(({id, name, offert, price, stock, description}) => (
                    <div key={id} className="shadow w-60 bg-slate-900 rounded mx-auto sm:mx-0 p-4 border border-yellow-700">
                        <div>
                            <input type="text" className="text-white text-2xl font-bold capitalize w-full" value={name} onChange={(e) => handleChange(id, 'name', e.target.value)}/>
                        </div>
                        <input type="text" className="text-white text-xl w-full border-b border-amber-600 focus:outline-none" value={description} onChange={(e) => handleChange(id, 'description', e.target.value)}/>
                        <div className="flex items-center gap-1">
                            <p className="inline-block text-xl gap-2 text-white">Destacado: </p>
                            <label className="inline-block cursor-pointer relative w-[34px] h-[20px]">
                                <input type="checkbox" className="w-0 h-0 opacity-0 peer" checked={offert} onChange={() => handleToggleChange(id)}/>
                                <span className="absolute top-0 left-0 right-0 bottom-0 peer-not-checked:bg-slate-500 before:content-[''] before:h-[13px] before:w-[13px] before:left-[4px] before:bottom-[4px] before:bg-white peer-checked:bg-blue-500 rounded-[34px]"></span>
                                <span className="absolute top-0.6 left-[4px] bottom-[4px] w-[13px] h-[13px] bg-white rounded-full transition-all peer-checked:translate-x-[0px] peer-not-checked:translate-x-[12px]"></span>
                            </label>
                        </div>
                        <p className="text-white text-xl">Precio: ${price}</p>
                        <div className="flex w-full gap-2">
                            <p className="text-white text-xl capitalize">stock:</p>
                            <input type="number" min={0} value={stock} className="inline w-full text-white text-xl" onChange={(e) => handleChange(id, 'stock', e.target.value)}/>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default DashboardProductPage;