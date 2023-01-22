import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
import image1 from './ard.jpg'
import image2 from './robot.jpg'
import image3 from './mac.jpg'
import './carousel.styles.css'
function UncontrolledExample() {
  return (
    <Fragment>
      <div className='carousel-container'>
    <Carousel className="bg-primary" style={{textAlign:'center', color:'yellow'}} pause='false' interval={5000}>
      <Carousel.Item>
        <h1 className="robot-text" style={{marginTop: '20px', marginBottom:'45px', fontSize:'1.5rem'}}>50% off sale on Robotics Starter Kits!</h1>
      </Carousel.Item>
      <Carousel.Item>
        <h1 className="robot-text" style={{marginTop: '20px', marginBottom:'45px', fontSize:'1.5rem'}}>Up to 45% off on Macbooks</h1>
      </Carousel.Item>
      <Carousel.Item>
        <h1 className="robot-text" style={{marginTop: '20px', marginBottom:'45px', fontSize:'1.5rem'}}>3D printers low in stock. Buy Now!</h1>
      </Carousel.Item>
    </Carousel>
    </div>
    <Outlet/>
    </Fragment>
  );
}

export default UncontrolledExample;