// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Navbar from './Components/Navbar';
function App() {
  return (
    <>

    <BrowserRouter>
    <Navbar/>
    {/* <Home/> */}
    <Routes>
       
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
