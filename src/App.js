import './App.css';
import Header from './components/header/header.jsx';
import Slider from './components/slider/slider.jsx';
import Productos from './components/productos/productos.jsx'
import Carrito from './components/carrito/carrito.jsx';

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Slider></Slider>
      <Productos></Productos>
      <Carrito></Carrito>
      


    </div>
  );
}

export default App;
