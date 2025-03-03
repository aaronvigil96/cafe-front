import { create } from "zustand";

interface ProductStore {
    products: any[];
    fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductStore>((set) => ({
    products: [],
    fetchProducts: async () => {
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json();
        set({products: data});
    }
}))