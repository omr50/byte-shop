import FrontPage from "./components/frontPage/frontPage.component";
import { Routes, Route} from 'react-router-dom';
import Navigbar from "./components/navbar/navbar.component";
import CarouselSale from "./components/PageTitle/carousel.component";
import SignInComp from "./components/SignUp/SignIn.component";
import LogIn from "./components/LogIn/login.component";
import Shop from "./components/shop/shop.component";
import Checkout from "./components/checkout/checkout.component";
const App = () => {
  
  return (
    // electronic e commerce
    // front page should be an intro to the website, what it does, etc.
    // should have a nav bar as well, and a few categories to shop from.
    // home, about, login/out, 
    <Routes>
      
      <Route path='/' element={<Navigbar/>}>
        <Route path='/' element={<CarouselSale/>}>
        <Route index element={<FrontPage/>}/>
      </Route>
      
      <Route path='/signin' element={<SignInComp/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/shop' element={<Shop route={"shop"}/>}/>
      <Route path='/sbc' element={<Shop route={"sbc"}/>}/>
      <Route path='/tools' element={<Shop route={"tool"}/>}/>
      <Route path='/mc' element={<Shop route={"mc"}/>}/>
      <Route path='/wires' element={<Shop route={"wire"}/>}/>
      <Route path='/components' element={<Shop route={"comp"}/>}/>
      <Route path='/limited' element={<Shop route={"limited"}/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Route>

    </Routes>
  );
}

export default App;
