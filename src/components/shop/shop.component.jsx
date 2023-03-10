import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import { Card, Button } from "react-bootstrap";
import { Route } from "react-router-dom";
import './shop.styles.css'

const Shop = ({route}) => {
    const {products} = useContext(ProductsContext)
    const routeToCategoryName = {
            'mc': 'MicroControllers',
            'sbc': 'Single Board Computers',
            'limited': 'Limited Time Only!',
            'tool': "Tools",
            'wire': "Wires and Cables",
            'comp': "Circuit Components",
            'shop': "All Items"
        }
    
    if (route === 'shop')
    return (
        <div>
        <h1 style={{textAlign:'center', color:'#9F2B68', marginTop:'10px'}} className='robot-text'>{routeToCategoryName[route]}</h1>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:'center'}}>
            {products.map(({id, name, price, imageURL}) =>(
                    <Card style={{ width: '22rem', margin:'10px'}}>
                    <div style={{ height: '220px', overflow: 'hidden' }}>
                      <Card.Img variant="top" src={imageURL} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
                    </div>
                    <Card.Body>
                      <Card.Title style={{minHeight:'40px'}}>{name}</Card.Title>
                      <Card.Text>
                        <Card.Text style={{fontSize:'25px', color:'#AA4A44'}}><sup>$</sup>{price}</Card.Text>
                        <Button className="buttonCustom">Add to cart</Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
            ))}
        </div>
        </div>
    )
    else {
        const filteredItems = products.filter(product => product.category === route)
        return (
            <div>
            <h1 style={{textAlign:'center', color:'#9F2B68', marginTop:'10px'}} className='robot-text'>{routeToCategoryName[route]}</h1>
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:'center'}}>
                {filteredItems.map(({id, name, price, imageURL}) =>(
                        <Card style={{ width: '22rem', margin:'10px'}}>
                        <div style={{ height: '220px', overflow: 'hidden' }}>
                        <Card.Img variant="top" src={imageURL} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
                        </div>
                        <Card.Body>
                        <Card.Title style={{minHeight:'40px'}}>{name}</Card.Title>
                        <Card.Text>
                            <Card.Text style={{fontSize:'25px', color:'#AA4A44'}}><sup>$</sup>{price}</Card.Text>
                            <Button>Add to cart</Button>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            </div>
        )
    }
        
}

export default Shop;