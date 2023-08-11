import './header.css';
import LogoMenu from '../../multimedia/LogoMenu.png';
import LogoOzonoSensitive from '../../multimedia/LogoOzonoSensitive.png';


export default function Header() {

    return (
        <header>
            <img src={LogoOzonoSensitive} alt="Logo" className="LogoNav" />
            <input type="checkbox" id="btn-menu"/>
            <label id="ham-menu" for="btn-menu"><img src={LogoMenu} alt=""/></label>
            <nav className="menu" id="conteiner">
                <ul className="BotonesNav">
                    <li><a href="">Acerca de nosotros</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
                <ul className="carrito-usuario">
                    <li><a href="./carrito.html"><span className="material-symbols-outlined">shopping_cart</span></a></li>
                    <li><a href="./usuario.html"><span className="material-symbols-outlined">account_circle</span></a></li>
                </ul>
            </nav>
        </header>
    )
}