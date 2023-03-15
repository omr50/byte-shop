
import './cart-item.styles.css'

const CartItem = ({cartItem}) =>{
    const {name, imageURL, price, quantity} = cartItem;
    return (
        <div className='cart-item-container'>
            <img src={imageURL} className='cart-img'/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem;