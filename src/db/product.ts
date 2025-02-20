import { ProductItemProps } from "../interfaces/product-item.interface";

export const products:ProductItemProps[] = [
    {id: 1, name: 'cafe argentino', description: 'cafe de cuerpo intenso, baja acidez', price: 15000, grams: 250, stock: 6},
    {id: 2, name: 'cafe brasilero', description: 'cafe de cuerpo suave, baja acidez', price: 13000, grams: 150, stock: 10},
    {id: 3, name: 'cafe arabico', description: 'cafe de cuerpo locazo', price: 12000, grams: 1000, stock: 0},
    {id: 4, name: 'cafe no sé', description: 'cafoe de no sé qué', price: 11500, grams: 250, stock: 10}
]