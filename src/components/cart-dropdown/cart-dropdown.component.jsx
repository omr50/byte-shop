import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Button } from "react-bootstrap";
import CartItem from "../cartItem/cart-item.component";

import './cart-dropdown.styles.css'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(item => (
                <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button>Go To Checkout</Button>   
        </div>
    )
}

export default CartDropdown;