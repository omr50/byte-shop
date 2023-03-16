import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
import image1 from './ard.jpg'
import image2 from './robot.jpg'
import image3 from './mac.jpg'
import './carousel.styles.css'
import { LinkContainer } from "react-router-bootstrap";

function CarouselSale() {
  return (
    <Fragment>
      <LinkContainer to="/limited" style={{cursor:'pointer'}}>
      <div className='carousel-container'>
    <Carousel className="bg-primary" style={{textAlign:'center', color:'yellow'}} pause='false' interval={3000}>
      <Carousel.Item>
        <h1 className="robot-text" style={{marginTop: '20px', marginBottom:'45px', fontSize:'1.5rem'}}>50% off on Robotics Kits!</h1>
      </Carousel.Item>
      <Carousel.Item>
        <h1 className="robot-text" style={{marginTop: '20px', marginBottom:'45px', fontSize:'1.5rem'}}>Up to 45% off on Macbooks</h1>
      </Carousel.Item>
      <Carousel.Item>
        <h1 className="robot-text" style={{marginTop: '20px', marginBottom:'45px', fontSize:'1.5rem'}}>New 3D printers! Buy Now!</h1>
      </Carousel.Item>
    </Carousel>
    </div>
    </LinkContainer>
    <Outlet/>
    </Fragment>
  );
}

export default CarouselSale;