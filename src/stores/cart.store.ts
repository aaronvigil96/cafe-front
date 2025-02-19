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
    getTotalPrice: () => number;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    getPriceByProduct: (id:number) => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
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
    getTotalPrice: () => {
        return get().cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    increaseQuantity: (id:number) => set((state) => ({
        cart: state.cart.map((item) => item.id === id ? {...item, quantity: item.quantity + 1} : item)
    })),
    decreaseQuantity: (id:number) => set((state) => ({
        cart: state.cart.map((item) => item.id === id ? {...item, quantity: item.quantity - 1} : item).filter((item) => item.quantity > 0)
    })),
    getPriceByProduct: (id:number) => {
        const item = get().cart.find((item) => item.id === id);
        return item ? item.price * item.quantity : 0;
    }
}))