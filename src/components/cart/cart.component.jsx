import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
function CartLink() {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
      <div className='cart-style' onClick={toggleIsCartOpen}>
      <a href='#' style={{textDecoration:'none'}}>
        <FontAwesomeIcon icon={faShoppingCart} style={{width:'35px', height:'35px'}}>
        </FontAwesomeIcon>
        <text y="50%" textAnchor="middle" style={{ fill: 'red', fontSize: '12px', fontWeight: 'bold' }}>
          {cartCount}
        </text>
      </a>

      {/* <span style={{fontSize:'15px'}}>{cartCount}</span> */}
      </div>
        )
  }

export default CartLink;