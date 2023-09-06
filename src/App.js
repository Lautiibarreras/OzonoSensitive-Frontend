import './App.css';
import Header from './components/header/header.jsx';
import Slider from './components/slider/slider.jsx';
import Productos from './components/productos/productos.jsx'
import Carrito from './components/carrito/carrito.jsx';
import Login from './components/Usuario/Login.jsx';
import SignUp from './components/Usuario/SignUp.jsx';


function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Slider></Slider>
      <Productos></Productos>
      <Carrito></Carrito>
      <Login></Login>
      <SignUp></SignUp>
      


    </div>
  );
}

export default App;
