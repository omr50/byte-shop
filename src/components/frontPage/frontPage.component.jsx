import Category from "../category/category.component"
const categories =[
    {
      id: 1,
      title: 'Microcontollers' ,
      description: 'We have microcontrollers such as the Arduino for hobbyist, Arduino Nano if you need something smaller and even wifi based MCUs such as the ESP32',
      image: '1',
      route:'mc'
    },
    {
      id: 2,
      title: 'Single Board Computers' ,
      description: 'We have a wide range of SBCs. Try the Raspberry Pi board or if you need more processing power try something like the NVIDIA Jetson Nano',
      image: '1',
      route: 'sbc'
    },
    {
      id: 3,
      title: 'Components',
      description: 'Resistors, capacitors, inductors, Amplifiers, transistors, MOSFETS, logic gates, we have them all!',
      image: '1',
      route: 'components'
    },
    {
      id: 4,
      title: 'Tools' ,
      description: 'Need some pliers, wire cutters or crimpers, multimeters, oscillosopes, we got you covered.',
      image: '1',
      route: 'tools'
    },
    {
      id: 5,
      title: 'Cables and Wires' ,
      description: 'Need specific cables for specific applications, or wires to connect your breadboard components together? Well you came to the right place.',
      image: '1',
      route: 'wires'
    }
  ]
const FrontPage = () =>{
  let col1 = [];
  let col2 = [];
  for(let i = 0; i < categories.length; i++){ 
    let category = categories[i];
    if (i < 3)
      col1.push(category)
    else
      col2.push(category)
  }
    return(
        <div className="card-grid">
          <div className='row'>
          {col1.map((category)=>(
            <Category key = {category.id} Category={category}/>
            ))}
          </div>  
                
          <div className='row'>
          {col2.map((category)=>(
            <Category key = {category.id} Category={category}/>
            ))}
          </div>
        </div>
    )
}

export default FrontPage