import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import image5 from './image5.jpg'

const Category = ({Category}) => {
    const {id, image, title, description} = Category
    let img = [image1, image2, image3, image4, image5]
    console.log(img)
    return (

        <Card style={{ width: '30.3%', margin: '10px'}}>
        {/*React relative paths don't work so import images above */}
        <Card.Img variant="top" src={img[id-1]}/>
        <Card.Body>
          <Card.Title style={{ textAlign: 'center', fontSize: '1.5rem'}}>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        {/* <Card.Body style={{ textAlign: 'center'}}>
          <Button className='btn-primary'>Shop Now</Button>
        </Card.Body> */}
      </Card>
    )
}

export default Category