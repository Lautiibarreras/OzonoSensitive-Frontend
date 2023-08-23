import './carrito.css';
import IMAGEN from '../../multimedia/IMAGEN.png'; 


export default function Carrito() {

    return (
        
        <div class="container">

            <div class="modal/ active" id="jsModalCarrito">
                <div class="modal__container">
                    <button type="button" class="modal__close fa-solid fa-xmark jsModalClose "></button>
    
                    <div class="modal__info">
                        <div class="modal__header">
                            <h2><i class="fa-brands fa-opencart"></i>Carrito</h2>
                        </div>
    
                        <div class="modal__body">
                            <div class="modal__list">
                                <div class="modal__item">
                                    <div class="modal__thumb">
                                        <img src={IMAGEN} alt="Naranja"/>
                                    </div>
                                    <div class="modal__text-product">
                                        <p>Naranja</p>
                                        <p><strong>$9.00 / kg</strong></p>
                                    </div>
                                </div>
    
    
                                <div class="modal__item">
                                    <div class="modal__thumb">
                                        <img src={IMAGEN} alt="Naranja"/>
                                    </div>
                                    <div class="modal__text-product">
                                        <p>Manzana</p>
                                        <p><strong>$5.00 / kg</strong></p>
                                    </div>
                                </div>
    
                            </div>
                        </div>
    
                        <div class="modal__footer">
                            <div class="modal__list-price">
                                <ul>
                                    <li>Subtotal: <strong>$14.00</strong></li>
                                </ul>
                                <h4 class="modal__total-cart"> Total: $14.00</h4>
                            </div>
    
                            <div class="modal__btns">
                                <a href="#" class="btn-border">Ir al carrito</a>
                                <a href="#" class="btn-primary">Comprar Ahora</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    
    )
}