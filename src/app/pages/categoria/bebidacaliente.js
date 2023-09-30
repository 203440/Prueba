import Head from "../../components/head"
import SearchContext from '../../components/searchContext';
import React from 'react';
import { productosCalientes } from "../../components/datacaliente";
import { useNavigate } from 'react-router-dom';
//import '../../public/css/frias.css'

export default function BebidasCalientes (){
    const navigate = useNavigate();
    const {searchQ} = React.useContext(SearchContext)
    const filtered = productosCalientes.filter(producto =>
        producto.nombre.toLowerCase().includes(searchQ.toLowerCase())   
    );
    return(
        <div>
            <Head/>
            <div>Hola desde BebidasCalientes
            <div className='productos'>
                    {filtered.map(producto => (
                        <div className='produ' key={producto.id}>
                                <img onClick={() => navigate(`/product/${producto.id}`)} src={producto.imagen} alt={producto.nombre} className="imagen-sombra"></img>
                                <h2 onClick={() => navigate(`/product/${producto.id}`)}>{producto.nombre}</h2>
                            <p>${producto.precio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}