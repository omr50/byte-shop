import { useState } from "react";
import PRODUCTS from "../shop-data.json"
import { createContext } from "react";

// import products

export const ProductsContext = createContext({})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products}
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}