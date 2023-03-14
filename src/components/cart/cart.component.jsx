import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
function CartLink() {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
      <a href='#'>
      <div className='cart-style' onClick={toggleIsCartOpen}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
      </a>
    )
  }

export default CartLink;