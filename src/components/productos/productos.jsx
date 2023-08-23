import './productos.css'
import IMAGEN from '../../multimedia/IMAGEN.png'



export default function Productos() {

    return (
        <div class="containerProductos">

            <h1 class="title">Productos</h1>
    
            <div class="product-grid">
                <div class="product-grid__item">
                    <div class="product-grid__imagen">
                        <img src={IMAGEN} alt=""/>
                    </div>
    
                    <div class="product-grid__info">
                        <p class="product-grid__name">Naranja</p>
                        <p class="product-grid__price">$9.00 / kg</p>
    
                        <a href="#" class="product-grid__btn btn-default" data-btn-action="add-btn-cart" data-modal="#jsModalCarrito"  >Agregar al carrito</a>
    
                    </div>
    
                </div>
    
                <div class="product-grid__item">
                    <div class="product-grid__imagen">
                        <img src={IMAGEN} alt=""/>
                    </div>
    
                    <div class="product-grid__info">
                        <p class="product-grid__name">Manzana</p>
                        <p class="product-grid__price">$5.00 / kg</p>
                        <a href="#" class="product-grid__btn btn-default" data-btn-action="add-btn-cart" data-modal="#jsModalCarrito" >Agregar al carrito</a>
                    </div>
    
                </div>
    
                <div class="product-grid__item">
                    <div class="product-grid__imagen">
                        <img src={IMAGEN} alt=""/>
                    </div>
    
                    <div class="product-grid__info">
                        <p class="product-grid__name">Limón</p>
                        <p class="product-grid__price">$3.00 / kg</p>
                        <a href="#" class="product-grid__btn btn-default" data-btn-action="add-btn-cart" data-modal="#jsModalCarrito">Agregar al carrito</a>
                    </div>
    
                </div>
    
                <div class="product-grid__item">
                    <div class="product-grid__imagen">
                        <img src={IMAGEN} alt=""/>
                    </div>
    
                    <div class="product-grid__info">
                        <p class="product-grid__name">Platano</p>
                        <p class="product-grid__price">$5.50 / kg</p>
                        <a href="#" class="product-grid__btn btn-default" data-btn-action="add-btn-cart" data-modal="#jsModalCarrito">Agregar al carrito</a>
                    </div>
    
                </div>
    
            </div>
        </div>
    )
}