import './App.css';
import Header from './components/header/header.jsx';
import Slider from './components/slider/slider.jsx';
import Productos from './components/productos/productos.jsx'
import Carrito from './components/carrito/carrito.jsx';
import CuentaDeUsuario from './components/Usuario/CuentaDeUsuario.jsx';

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Slider></Slider>
      <Productos></Productos>
      <Carrito></Carrito>
      <CuentaDeUsuario></CuentaDeUsuario>
      


    </div>
  );
}

export default App;
