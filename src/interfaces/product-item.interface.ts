export interface ProductItemProps {
    id: number;
    title: string;
    price: number;
    description?: string;
    stock:number;
    offert:boolean;
    image: string;
    isActive: boolean;
}