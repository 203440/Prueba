import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addCart = (product) => {
        setCart(prevCart => [...prevCart, product]);
    }

    const clearCart = () => {
        setCart([]);
    }

    return(
        <CartContext.Provider value={{cart, addCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}