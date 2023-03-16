import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CategoriesContext } from "../../contexts/categories.context";
import { Card, Button } from "react-bootstrap";
import { Route } from "react-router-dom";
import './shop.styles.css'

const Shop = ({route}) => {
    const {categoriesMap} = useContext(CategoriesContext)
    const { addItemToCart } = useContext(CartContext);
    if (Object.keys(categoriesMap).length === 0) {
        return <div style={{textAlign:'center', fontSize:'30px', padding:'50px', color:'#4F7942'}} className='robot-text'>Loading...</div>
      }
    console.log(categoriesMap, "works?");

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
            {categoriesMap.allproducts.map((category) =>(
                    
                    <Card style={{ width: '22rem', margin:'10px', backgroundColor:'#ffE6FA'}}>
                    <div style={{ height: '220px', overflow: 'hidden' }}>
                      <Card.Img variant="top" src={category.imageURL} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
                    </div>
                    <Card.Body>
                      <Card.Title style={{minHeight:'40px'}}>{category.name}</Card.Title>
                      <Card.Text>
                        <Card.Text style={{fontSize:'25px', color:'#AA4A44'}}><sup>$</sup>{category.price}</Card.Text>
                        <Button className="buttonCustom" onClick={() => addItemToCart(category)}>Add to cart</Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
            ))}
        </div>
        </div>
    )
    else {
        const filteredItems = categoriesMap.allproducts.filter(category => category.category === route)
        return (
            <div>
            <h1 style={{textAlign:'center', color:'#9F2B68', marginTop:'10px'}} className='robot-text'>{routeToCategoryName[route]}</h1>
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:'center'}}>
                {filteredItems.map((category) =>(
                        <Card style={{ width: '22rem', margin:'10px', backgroundColor:'#ffE6FA'}}>
                        <div style={{ height: '220px', overflow: 'hidden' }}>
                        <Card.Img variant="top" src={category.imageURL} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
                        </div>
                        <Card.Body>
                        <Card.Title style={{minHeight:'40px'}}>{category.name}</Card.Title>
                        <Card.Text>
                            <Card.Text style={{fontSize:'25px', color:'#AA4A44'}}><sup>$</sup>{category.price}</Card.Text>
                            <Button className="buttonCustom" onClick={() => addItemToCart(category)}>Add to cart</Button>
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