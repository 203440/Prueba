import { productos } from "../../components/dataoferta";
import { useParams } from "react-router-dom";
import '../../public/css/productdetails.css'
import Head from '../../components/head'
import { productosFrias } from "../../components/datafrias";
import { productosPostres } from "../../components/datapostres";
import { productosCalientes } from "../../components/datacaliente";
import { productosComida } from "../../components/datacomida";
import { useContext } from "react";
import { CartContext } from "../carrito/cartContext";
import {toast} from 'react-toastify'

export default function Productodetail(){
    const {id} = useParams();

    const product =
    (productos && productos.find(p => p.id === parseInt(id))) ||
    (productosFrias && productosFrias.find(p => p.id === parseInt(id))) ||
    (productosCalientes && productosCalientes.find(p => p.id === parseInt(id))) ||
    (productosPostres && productosPostres.find(p => p.id === parseInt(id))) ||
    (productosComida && productosComida.find(p => p.id === parseInt(id)));
    
    const {addCart} =useContext(CartContext);

    const hadleAddCart = () => {
        addCart (product);
        toast.success('Producto enviado al  Carrito con Exito',{
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true, 
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
        })
    }
     
    return (
        <div>
            <Head></Head>
            <div className="container">
                <div className='divfondo'>
                <img src={product.imagen} alt={product.nombre} className="imge imagen-sombra"></img>
                <div className="productInfo">
                    <h2>{product.nombre}</h2>
                    <h3>Descripcion:</h3>
                    <div className="des">
                    <p>{product.descripcion}</p>
                    </div>
                    <p>${product.precio}</p>
                    <button onClick={hadleAddCart} className="agregar">Agregar al Carrito</button>
                </div>
                </div>
            </div>
        </div>
    )
}