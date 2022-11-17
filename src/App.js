import logo from './logo.svg';
import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom"
import Home from './components/pages/Home';
import Navbar from './components/pages/navbar/Navbar';
import Gallery  from "./components/pages/Gallery"
import Contact from "./components/pages/Contact"
import About from "./components/pages/About"


function App() {
  return (
    <>
    <HashRouter>
  <Routes>
    <Route path="/" element={<Home />} >home</Route>
    <Route path='/contact' element={<Contact />}> Contact</Route>
    <Route path='/gallery' element={<Gallery />}>About</Route>
    <Route path='/about' element={<About />}>About</Route>
   </Routes>
   </HashRouter>
   
   </>
  )
}

export default App;
