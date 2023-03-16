import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // if item exists in cart increment count
    // otherwise add new item
    const existingCartItem = cartItems.find((cartItem)=> cartItem.id === productToAdd.id)
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
        {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    // find cart item we will remove
    const existingCartItem = cartItems.find((cartItem)=> cartItem.id === cartItemToRemove.id)
    // check if only one then remove, otherwise just reduce
    if (existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id != cartItemToRemove.id)
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? 
    {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
    )
}

const clearCartItem = (cartItems, cartItemToClear) =>{
    // if the cartItemToClear is equal to an item in the cart, just clear it.
    // the reason we always return new array of items is because react only updates
    // when object changes. If particular index changes react won't re-render but when
    // object itself changes, then it will re-render.
    return cartItems.filter((cartItem) => cartItem.id != cartItemToClear.id)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () =>{},
    cartItems: [],
    addItemToCart: () => {},
    removeItemToCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem)=> total + cartItem.quantity*cartItem.price, 0)
        setCartTotal(newCartTotal);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
            setCartItems(addCartItem(cartItems, productToAdd))
            console.log(cartItems)
    }
    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
        console.log(cartItems)
    }
    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear))
        console.log(cartItems)
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemToCart, clearItemFromCart, cartItems, cartCount, cartTotal }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}