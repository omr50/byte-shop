import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase.utils';
import { LinkContainer } from 'react-router-bootstrap';
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
      <Container className='navig-container'>
      <LinkContainer to="/">
        <Navbar.Brand className='robot-text title-style'>BYTE SHOP</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/shop">
              <Nav.Link className='navig-link'>Shop</Nav.Link>
            </LinkContainer>
            
            <NavDropdown title="Categories" id="collasible-nav-dropdown" className='navig-link'>
            <LinkContainer to="/mc">
              <NavDropdown.Item>Microcontrollers</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/sbc">
                <NavDropdown.Item>
                  Single Board Computers
                </NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/components">
                <NavDropdown.Item>Components</NavDropdown.Item>
              </LinkContainer>
              
              <LinkContainer to="/components">
                <NavDropdown.Item>Tools</NavDropdown.Item>
              </LinkContainer>
              
              <LinkContainer to="/wires">
                <NavDropdown.Item>Cables and Wires</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Divider />
              <LinkContainer to="/limited">
                <NavDropdown.Item>
                Limited Time Items
              </NavDropdown.Item>
              </LinkContainer>
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