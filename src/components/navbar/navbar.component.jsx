import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase.utils';
import CartLink from '../cart/cart.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

function Navigbar() {
  // this useContext will re-render nav bar anytime there
  // is an update to the context.
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  return (
    <Fragment>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand style={{color:'#50C878', fontSize:'25px'}} href="/" className='robot-text'>BYTE SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/shop" className='navig-link'>Shop</Nav.Link>
            <NavDropdown title="Categories" id="collasible-nav-dropdown" className='navig-link'>
              <NavDropdown.Item href="/mc">Microcontrollers</NavDropdown.Item>
              <NavDropdown.Item href="/sbc">
                Single Board Computers
              </NavDropdown.Item>
              <NavDropdown.Item href="/components">Components</NavDropdown.Item>
              <NavDropdown.Item href="/tools">Tools</NavDropdown.Item>
              <NavDropdown.Item href="/wires">Cables and Wires</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/limited">
                Limited Time Items
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {
            currentUser ? (
                <Nav>
                  <Nav.Link href="" onClick={signOutUser} className='navig-link'>Sign Out</Nav.Link>
                </Nav>
            ) :
            (<Nav>
              <Nav.Link href="/login" className='navig-link'>Log In</Nav.Link>
              <Nav.Link eventKey={2} href="/signin" className='navig-link'>Sign Up</Nav.Link>
            </Nav>)
            
          }
          <Nav className='mr-auto'>
            <CartLink/>
          </Nav>
          {/* if total statement is true return last thing (cart dropdown) */}
          {isCartOpen && <CartDropdown/>}

          {/* <Nav>
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link eventKey={2} href="/signin">Sign Up</Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </Fragment>
  );
}

export default Navigbar;