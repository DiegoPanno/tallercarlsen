
import './App.css'

import Footer from './Footer/Footer'
import Home from './Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from './Nosotros/Nosotros';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
       <Route path="/" Component={Home}/>
       <Route path="/nosotros" Component={Nosotros}/>

      </Routes>
      
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
