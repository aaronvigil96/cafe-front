import { create } from "zustand";
import { ProductItemProps } from "../interfaces/product-item.interface";

interface ProductsStore {
    products: ProductItemProps[];
    toggleOffert: (id: number) => void;
}

export const useProductsStore = create<ProductsStore>((set) => ({
    products: [
        {id: 1, name: 'cafe argentino', offert: true, price: 1000, stock: 200, description:'cafe totalmente rico', grams:1200},
        {id: 2, name: 'cafe arábico', offert: true, price: 9500, stock: 2, description:'cafe con notas de no sé qué', grams:300}
    ],
    toggleOffert: (id:number) => set((state) => ({
        products: state.products.map(product => product.id === id ? {...product, offert: !product.offert } : product)
    }))
}))