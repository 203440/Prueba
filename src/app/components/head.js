import logo1 from '../public/img/head/logo.png';
import '../public/css/head.css';
import carrito from '../public/img/head/carrito.png';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import SearchContext from './searchContext';

export default function Head(){
    const navigate = useNavigate(); 
    const {searchQ, setSearchQ} = React.useContext(SearchContext);

    const [mostrarMenu, setMenu] = useState(false);
    return (
        <div className="head bg-dark d-flex justify-content-between align-items-center p-3">
            <img src={logo1} alt="Descripción de mi imagen" className='logo me-3'/>
            <div>
                <div className="d-flex align-items-center gap-3">
                    <button className="btn btn-light" onClick={() => navigate('/')}>Home</button>
                    <div className="dropdown" onMouseEnter={() => setMenu(true)} onMouseLeave={() => setMenu(false)}>
                        <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">Categoria</button>
                        {mostrarMenu && (
                            <div className='dropdownMenu'>
                                <button onClick={() => navigate('/bebidas-frias')}>Bebidas Frias</button>
                                <button onClick={() => navigate('/bebidas-calientes')}>Bebidas Calientes</button>
                                <button onClick={() => navigate('/postres')}>Postres</button>
                                <button onClick={() => navigate('/comidas')}>Comidas</button>
                            </div>
                        )}
                    </div>
                    <button onClick={() => navigate('/carrito')}><img src={carrito} alt='Carrito' className='carrito'></img></button>
                        <input className="form-control" type="text" placeholder="Buscar Producto" value={searchQ} onChange={e => setSearchQ(e.target.value)}/>
                    <button className="btn btn-light">
                        Buscar
                    </button>
                </div>
            </div>
        </div>
    )
}