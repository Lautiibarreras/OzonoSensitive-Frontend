import './header.css';
import LogoMenu from '../../multimedia/LogoMenu.png';
import LogoSinNombreSinFondo from '../../multimedia/LogoSinNombreSinFondo.png';


export default function Header() {

    return (
        <header>
            
            <input type="checkbox" id="btn-menu"/>
            <label id="ham-menu" for="btn-menu"><img src={LogoMenu} alt=""/></label>
            <nav className="menu" id="conteiner">
                <img src={LogoSinNombreSinFondo} alt="Logo" className="LogoNav" />
                <ul className="BotonesNav">
                    <li><a href="">Acerca de nosotros</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
                <ul className="CarritoUsuario">
                    <li><a href="./carrito.html"><span className="material-symbols-outlined">shopping_cart</span></a></li>
                    <li><a href="./usuario.html"><span className="material-symbols-outlined">account_circle</span></a></li>
                </ul>
            </nav>
        </header>
    )
}