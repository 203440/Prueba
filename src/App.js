import './App.css';
import Home from './app/pages/home/home';
import {
  BrowserRouter as Router,
  Route, 
  Routes
} from "react-router-dom";
import ProductosDetail from './app/pages/producto/productodetail';
import Carrito from './app/pages/carrito/carrito';
import React, {useState} from 'react';
import Search from './app/components/searchContext';
import Comidas from './app/pages/categoria/comidas'
import BebidasCalientes from './app/pages/categoria/bebidacaliente';
import BebidasFrias from './app/pages/categoria/bebidasfrias';
import Postres from './app/pages/categoria/postres';
function App() {
  const [searchQ, setSearchQ] = useState('');

  return (
    <Router>
      <div className="App">
        <Search.Provider value={{searchQ, setSearchQ}}>
        <Routes>
          <Route path="/product/:id" element={<ProductosDetail/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/carrito" element={<Carrito/>} />
          <Route path="/comidas" element={<Comidas/>} />
          <Route path="/bebidas-calientes" element={<BebidasCalientes/>} />
          <Route path="/bebidas-frias" element={<BebidasFrias/>} />
          <Route path="/postres" element={<Postres/>} />
        </Routes>
        </Search.Provider>
      </div>
    </Router>
  );
}

export default App;
