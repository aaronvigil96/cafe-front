import { create } from "zustand";

interface CartItem {
    id: number;
    name: string;
    image: string;
    quantity: number;
    price: number;
}

interface CartStore {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
    cart: [],
    addToCart: (item) => set((state) => {
        const existingItem = state.cart.find((i) => i.id === item.id);
        if(existingItem){
            return {
                cart: state.cart.map((i) => i.id === item.id ? {...i, quantity: i.quantity + item.quantity} : i)
            }
        }
        return { cart: [...state.cart, item] }
    }),
    clearCart: () => set({ cart: [] }),
}))