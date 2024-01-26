import { Producto } from '../types';
import productosData from './productos.json';

const productos: Array<Producto> = productosData as Array<Producto>; //es necesario usar la exrcion de tipo para que el compilador sepa que es un array de productos

export const getProductos = () => productos;

export const addProducto = () => null;
