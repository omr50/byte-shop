import FrontPage from "./components/frontPage/frontPage.component";
import { Routes, Route} from 'react-router-dom';
import Navigbar from "./components/navbar/navbar.component";
import PageTitle from "./components/PageTitle/carousel.component";
const App = () => {
  
  return (
    // electronic e commerce
    // front page should be an intro to the website, what it does, etc.
    // should have a nav bar as well, and a few categories to shop from.
    // home, about, login/out, 
    <Routes>
      <Route path='/' element={<Navigbar/>}>
        <Route path='/' element={<PageTitle/>}>
          <Route index element={<FrontPage/>}/>
        </Route>
      </Route>

    </Routes>
  );
}

export default App;
