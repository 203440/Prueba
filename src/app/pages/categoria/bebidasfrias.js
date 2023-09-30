import Head from "../../components/head"
import SearchContext from '../../components/searchContext';
import React from 'react';
import { productosFrias } from "../../components/datafrias";
import { useNavigate } from 'react-router-dom';
//import '../../public/css/frias.css'

export default function BebidasFrias(){
    const navigate = useNavigate();
    const {searchQ} = React.useContext(SearchContext)
    const filtered = productosFrias.filter(producto =>
        producto.nombre.toLowerCase().includes(searchQ.toLowerCase())   
    );
    return(
        <div>
            <Head/>
            <div>Hola desde BebidasFrias
            <div className='productos'>
                    {filtered.map(producto => (
                        <div className='produ' key={producto.id}>
                                <img onClick={() => navigate(`/product/frias/${producto.id}`)} src={producto.imagen} alt={producto.nombre} className="imagen-sombra"></img>
                                <h2 onClick={() => navigate(`/product/frias/${producto.id}`)}>{producto.nombre}</h2>
                            <p>${producto.precio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}