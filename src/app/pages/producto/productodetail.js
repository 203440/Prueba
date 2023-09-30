import { productos } from "../../components/dataoferta";
import { useParams } from "react-router-dom";
import '../../public/css/productdetails.css'
import Head from '../../components/head'
import { productosFrias } from "../../components/datafrias";
import { productosPostres } from "../../components/datapostres";
import { productosCalientes } from "../../components/datacaliente";
export default function Productodetail(){
    const {id} = useParams();
    const product = productos && productosFrias && productosPostres && productosCalientes.find (p => p.id === parseInt (id));
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
                    <button>Agregar al Carrito</button>
                </div>
                </div>
            </div>
        </div>
    )
}