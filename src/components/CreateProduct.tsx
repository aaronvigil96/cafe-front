import { useState } from "react";
import { useProductStore } from "../stores/product.store";

const CreateProduct = () => {

    const { fetchProducts } = useProductStore();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: 0,
        stock: 0,
        image: ""
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(data => console.log(data));
            fetchProducts();
        }catch(err){
            console.log('error');
        }
        
    }

    return(
        <form onSubmit={handleSubmit} className="border border-yellow-700 w-80 p-2 flex flex-col gap-1 mt-2 z-50 bg-gray-900">
            <div className="flex text-white text-xl gap-2">
                <p>Titulo:</p>
                <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Café Argentino"/>
            </div>
            <div className="flex text-white text-xl gap-2">
                <p>Descripcion:</p>
                <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Sabor intenso con suaves notas" className="w-full"/>
            </div>
            <div className="flex text-white text-xl gap-2">
                <p>Precio:</p>
                <input type="number" name="price" value={formData.price} onChange={handleChange} min={1} placeholder="$1500" className="w-full"/>
            </div>
            <div className="flex text-white text-xl gap-2">
                <p>Stock:</p>
                <input type="number" name="stock" value={formData.stock} onChange={handleChange} min={1} placeholder="2" className="w-full"/>
            </div>
            <div className="flex text-white text-xl gap-2">
                <p>Imagen:</p>
                <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="bag-coffee.png" className="w-full"/>
            </div>
            <button type="submit" className="cursor-pointer text-white p-2 bg-amber-700 w-full rounded-sm font-bold uppercase">crear</button>
        </form>
    )
}

export default CreateProduct;