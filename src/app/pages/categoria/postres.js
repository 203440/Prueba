import Head from "../../components/head"
import { productosPostres } from "../../components/datapostres"
import SearchContext from "../../components/searchContext"
import React from "react"
import { useNavigate } from "react-router-dom"
//import '../../public/css/postres.css'

export default function Postres() {
    const navigate = useNavigate();
    const {searchQ, currentPage, setCurrentPage} = React.useContext(SearchContext)
    const itemsPerPage = 8;

    const filtered = productosPostres.filter(producto =>
        producto.nombre.toLowerCase().includes(searchQ.toLowerCase())   
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => setCurrentPage(prev => prev + 1);
    const prevPage = () => setCurrentPage(prev => prev - 1);

    return (
        <div>
            <Head/>
            <div>
                <h2 className="frase">"Una sinfonía de sabores en tu paladar."</h2>
                <div className='productos'>
                    {currentItems.map(producto => (
                        <div className='produ' key={producto.id}>
                                <img onClick={() => navigate(`/product/postres/${producto.id}`)} src={producto.imagen} alt={producto.nombre} className="imagen-sombra"></img>
                                <h2 onClick={() => navigate(`/product/postres/${producto.id}`)}>{producto.nombre}</h2>
                            <p>${producto.precio}</p>
                        </div>
                    ))}
                </div>
                <div>
                    {currentPage > 1 && <button onClick={prevPage}>Anterior</button>}
                    {filtered.length > indexOfLastItem && <button onClick={nextPage}>Siguiente</button>}
                </div>
            </div>
        </div>
    )
}