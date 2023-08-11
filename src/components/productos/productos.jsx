import './productos.css'
import IMAGEN from '../../multimedia/IMAGEN.png'

export default function Productos() {

    return (
        <section class="contenedorProductos">
            <div class="Productos">
                <figure>
                    <img src={IMAGEN} alt=""/>
                </figure>
            </div>
            <div class="Productos">
                <figure>
                    <img src={IMAGEN} alt=""/>
                </figure>
            </div>
            <div class="Productos">
                <figure>
                    <img src={IMAGEN} alt=""/>
                </figure>
            </div>
            <div class="Productos">
                <figure>
                    <img src={IMAGEN} alt=""/>
                </figure>
            </div>
        </section>
    )
}