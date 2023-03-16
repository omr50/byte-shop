import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import image5 from './image5.jpg'

const Category = ({Category}) => {
    const {id, image, title, description, route} = Category
    let img = [image1, image2, image3, image4, image5]
    console.log(img)
    return (
        
        <Card style={{ maxWidth: '500px', margin: '10px', cursor:'pointer'}} className="category-card">
          <LinkContainer to={route} style={{ textDecoration: 'none', color: 'darkgreen' }}>
            <div>
        {/*React relative paths don't work so import images above */}
        <Card.Img variant="top" src={img[id-1]} style={{minHeight:'30vh'}}/>
        <Card.Body>
          <Card.Title style={{ textAlign: 'center', fontSize: '1.5rem', fontFamily: "'Roboto Mono', monospace"}}>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        {/* <Card.Body style={{ textAlign: 'center'}}>
          <Button className='btn-primary'>Shop Now</Button>
        </Card.Body> */}
        </div>
      </LinkContainer>

      </Card>
    )
}

export default Category