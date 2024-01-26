export type name = "Espresso" | "Capo" | "Latte" | "Mocha" | "Americano" | "Cortado" | "Cappuccino" | "Flat White" | "Macchiato" 

export interface Producto {
    name: name;
    description: string;
    price: number;
}