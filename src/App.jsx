
import './App.css'

import Footer from './Footer/Footer'
import Home from './Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from './Nosotros/Nosotros';
import ServiciosPage from './Servicios/ServiciosPage/ServiciosPage';
import NavMenu from './NavMenu/NavMenu';
function App() {
  

  return (
    <>
      <BrowserRouter>
       <NavMenu />
      <Routes>
       <Route path="/" Component={Home}/>
       <Route path="/nosotros" Component={Nosotros}/>
       <Route path="/servicios" Component={ServiciosPage}/>

      </Routes>
      
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
