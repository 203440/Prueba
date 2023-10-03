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
import { CartProvider } from './app/pages/carrito/cartContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const [searchQ, setSearchQ] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Router>
      <div className="App">
        <ToastContainer/>
        <Search.Provider value={{searchQ, setSearchQ, currentPage, setCurrentPage}}>
          <CartProvider>
            <Routes>
              <Route path="/product/oferta/:id" element={<ProductosDetail/>} />
              <Route path="/product/frias/:id" element={<ProductosDetail/>} />
              <Route path="/product/caliente/:id" element={<ProductosDetail/>} />
              <Route path="/product/postres/:id" element={<ProductosDetail/>} />
              <Route path="/product/comida/:id" element={<ProductosDetail/>} />
              <Route path="/" element={<Home/>} />
              <Route path="/carrito" element={<Carrito/>} />
              <Route path="/comidas" element={<Comidas/>} />
              <Route path="/bebidas-calientes" element={<BebidasCalientes/>} />
              <Route path="/bebidas-frias" element={<BebidasFrias/>} />
              <Route path="/postres" element={<Postres/>} />
            </Routes>
          </CartProvider>
        </Search.Provider>
      </div>
    </Router>
  );
}

export default App;
