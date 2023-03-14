import { Button } from "react-bootstrap";

import './cart-dropdown.styles.css'

const CartDropdown = () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items"/>
            <Button>Go To Checkout</Button>   
        </div>
    )
}

export default CartDropdown;