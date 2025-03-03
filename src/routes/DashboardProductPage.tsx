import { useEffect, useState } from "react";
import { ProductItemProps } from "../interfaces/product-item.interface";
import { MdDelete } from "react-icons/md";

const DashboardProductPage = () => {

    const [products, setProducts] = useState<ProductItemProps[]>([]);
    const [editedProducts, setEditedProducts] = useState<Record<number, Partial<ProductItemProps>>>({});

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    }, []);

    const handleChange = (id:number,name: keyof ProductItemProps, value: string | number | boolean) => {
        setEditedProducts((prev) => ({
            ...prev,
            [id]: { ...prev[id], [name]:value }
        }))
    }

    const handleDelete = async (id:number) => {
        try{
            await fetch(`http://localhost:3000/products/${id}`, {
                method: 'DELETE',
            });
            const res = await fetch('http://localhost:3000/products')
            const data = await res.json();
            setProducts(data);
        }catch(err){
            console.log(err);
        }
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>, id:number) => {
        e.preventDefault();

        const updateProduct = editedProducts[id];

        if(!updateProduct) return;

        try{
            const res = await fetch(`http://localhost:3000/products/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updateProduct)
            });

            if(!res.ok) throw new Error('Error al actualizar el producto');

            setProducts((prev) => prev.map((item) => item.id === id ? {...item, ...updateProduct} : item))

            setEditedProducts((prev) => {
                const updated = { ...prev };
                delete updated[id];
                return updated;
            });

            console.log('producto actualizado correctamente');

        }catch(err){
            console.log(err);
        }

    }


    return(
        <div className="h-full rounded ml-2 overflow-y-auto relative">
            <h1 className="text-white text-3xl">Productos</h1>
            <div className="flex gap-2 flex-wrap mt-2">
            {
                products.length != 0 ? 
                products?.map(({id, title, offert, price, stock, description, image}) => (
                    <form onSubmit={(e) => handleSubmit(e,id)} key={id} className="shadow w-60 bg-slate-900 rounded mx-auto sm:mx-0 p-4 border border-yellow-700">
                        <div className="flex justify-end" onClick={(e) => handleDelete(id)}>
                            <div className="p-2 max-w-max cursor-pointer">
                                <MdDelete className="text-white text-2xl"/>
                            </div>
                        </div>
                        <div>
                            <input type="text" onChange={(e) => handleChange(id, 'title', e.target.value)} className="text-white text-2xl font-bold capitalize w-full" value={editedProducts[id]?.title ?? title}/>
                        </div>
                        <input type="text" onChange={(e) => handleChange(id,'description', e.target.value)} className="text-white text-xl w-full border-b border-amber-600 focus:outline-none" value={editedProducts[id]?.description ?? description}/>
                        <div className="flex items-center gap-1">
                            <p className="inline-block text-xl gap-2 text-white">Destacado: </p>
                            <label className="inline-block cursor-pointer relative w-[34px] h-[20px]">
                                <input type="checkbox" className="w-0 h-0 opacity-0 peer" checked={editedProducts[id]?.offert ?? offert} onChange={(e) => handleChange(id, 'offert', e.target.checked)}/>
                                <span className="absolute top-0 left-0 right-0 bottom-0 peer-not-checked:bg-slate-500 before:content-[''] before:h-[13px] before:w-[13px] before:left-[4px] before:bottom-[4px] before:bg-white peer-checked:bg-blue-500 rounded-[34px]"></span>
                                <span className="absolute top-0.6 left-[4px] bottom-[4px] w-[13px] h-[13px] bg-white rounded-full transition-all peer-checked:translate-x-[0px] peer-not-checked:translate-x-[12px]"></span>
                            </label>
                        </div>
                        <div className="flex items-center">
                            <p className="text-white text-xl">$</p>
                            <input type="number" onChange={(e) => handleChange(id, 'price', e.target.value)} className="text-white text-xl w-full" value={editedProducts[id]?.price ?? price}/>
                        </div>
                        <div className="flex w-full gap-2">
                            <p className="text-white text-xl capitalize">stock:</p>
                            <input type="number" onChange={(e) => handleChange(id, 'stock', e.target.value)} min={0} value={editedProducts[id]?.stock ?? stock} className="inline w-full text-white text-xl"/>
                        </div>
                        <div className="flex w-full gap-2">
                            <p className="text-white text-xl capitalize">imagen:</p>
                            <input type="text" onChange={(e) => handleChange(id, 'image', e.target.value)} value={editedProducts[id]?.image ?? image} className="inline w-full text-white text-xl"/>
                        </div>
                        <button type="submit" className="cursor-pointer text-white p-2 bg-amber-700 w-full rounded-sm font-bold uppercase">actualizar</button>
                    </form>
                ))
                :
                <h3 className="text-white text-2xl">No hay productos para mostrar</h3>
            }
            </div>
        </div>
    )
}

export default DashboardProductPage;