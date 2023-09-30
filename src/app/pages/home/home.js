import Head from '../../components/head';
import '../../public/css/home.css'
import {productos} from '../../components/dataoferta'
import { useNavigate } from 'react-router-dom';
import SearchContext from '../../components/searchContext';
import React from 'react';

export default function Home(){
    const navigate = useNavigate(); 
    const {searchQ} = React.useContext(SearchContext)
    const filtered = productos.filter(producto =>
     producto.nombre.toLowerCase().includes(searchQ.toLowerCase())   
    );

    return(
        <div>
            <Head></Head>
            <div>
                <h1 className='div1'>
                    Ofertas
                </h1>
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