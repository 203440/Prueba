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
        <div className='head'>
            <img src={logo1} alt="Descripción de mi imagen" className='logo'/>
            <div>
                <div>
                    <button className='boton' onClick={() => navigate('/')}>Home</button>
                    <div onMouseEnter={() => setMenu(true)} onMouseLeave={() => setMenu(false)}>
                        <button className='boton'>Categoria</button>
                        {mostrarMenu && (
                            <div className='dropdownMenu'>
                                <button onClick={() => navigate('/bebidas-frias')}>Bebidas Frias</button>
                                <button onClick={() => navigate('/bebidas-calientes')}>Bebidas Calientes</button>
                                <button onClick={() => navigate('/postres')}>Postres</button>
                                <button onClick={() => navigate('/comidas')}>Comidas</button>
                            </div>
                        )}
                    </div>
                    <button className='boton' onClick={() => navigate('/carrito')}><img src={carrito} alt='Carrito' className='carrito'></img></button>
                    <input type="text" placeholder="Buscar Producto" value={searchQ} onChange={e => setSearchQ(e.target.value)} className='buscador'/>
                    <button className='boton'>
                        Buscar
                    </button>
                </div>
            </div>
        </div>
    )
}