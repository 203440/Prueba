import Head from "../../components/head"
import { productosComida } from "../../components/datacomida"
import React from "react"
import SearchContext from "../../components/searchContext"
import { useNavigate } from "react-router-dom"

export default function Comidas (){
    const navigate = useNavigate();
    const {searchQ} = React.useContext(SearchContext)
    const filtered = productosComida.filter(producto =>
        producto.nombre.toLowerCase().includes(searchQ.toLowerCase())   
    );

    return (
        <div>
            <Head></Head>
            <div>
                Comidas
                <div className='productos'>
                    {filtered.map(producto => (
                        <div className='produ' key={producto.id}>
                                <img onClick={() => navigate(`/product/comida/${producto.id}`)} src={producto.imagen} alt={producto.nombre} className="imagen-sombra"></img>
                                <h2 onClick={() => navigate(`/product/comida/${producto.id}`)}>{producto.nombre}</h2>
                            <p>${producto.precio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}