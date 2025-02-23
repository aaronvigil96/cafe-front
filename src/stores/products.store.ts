import { create } from "zustand";
import { ProductItemProps } from "../interfaces/product-item.interface";

interface ProductsStore {
    products: ProductItemProps[];
    toggleOffert: (id: number) => void;
}

export const useProductsStore = create<ProductsStore>((set) => ({
    products: [
        {id: 1, name: 'cafe argentino', offert: true, price: 1000, stock: 200, description:'cafe totalmente rico', grams:1200, image:"bag-coffee.png"},
        {id: 2, name: 'cafe arábico', offert: true, price: 9500, stock: 2, description:'cafe con notas de no sé qué', grams:300, image: "bag-coffee.png"},
        {id: 3, name: 'cafetera italiana', offert: true, price: 50000, stock: 3, description: 'cafetera para hornalla', image:"cafetera.png"},
        {id: 4, name: 'molinillo manual', offert: true, price: 15000, stock: 0, description: 'molinillo manual', image:"molinillo.png"}
    ],
    toggleOffert: (id:number) => set((state) => ({
        products: state.products.map(product => product.id === id ? {...product, offert: !product.offert } : product)
    }))
}))