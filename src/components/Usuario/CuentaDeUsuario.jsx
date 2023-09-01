import './CuentaDeUsuario.css';
import facebook from '../../multimedia/facebook.png'; 
import google from '../../multimedia/google.png'; 
import twitter from '../../multimedia/twitter.png'; 



export default function CuentaDeUsuario() {



    var x = document.getElementById("login");
    var y = document.getElementById("registrar");
    var z = document.getElementById("elegir");

    function login(){
        x.style.left = "50px";
        y.style.left = "450px";
        z.style.left = "0px";
    }
    function registrar(){
        x.style.left = "-400рх";
        y.style.left = "50px";
        z.style.left = "120px";

    }                                       

    return (

        <div class="container">
            <div class="form-box">
                <div class="button-box">
                    <div id='elegir'></div>
                    <button type="button" class="toggle-btn" onclick="login()">Iniciar Sesión</button>
                    <button type="button" class="toggle-btn" onclick="registrar()">Registrar</button>
                </div>
                <div class="redes-sociales">
                    <img src={facebook} alt="icono_facebook"/>
                    <img src={twitter} alt="icono_twitter"/>
                    <img src={google} alt="icono_google"/>
                </div>
                <form id="login" class="input-group">
                    <input type="text" class="input-field" placeholder="Nombre de Usuario" required/>
                    <input type="password" class="input-field" placeholder="Contraseña" required/>
                    <input type="checkbox" class="check-box"/><span>Recordar Contraseña. </span>
                    <button type="submit" class="submit-btn" >Acceder</button>
                </form>
                <form id="registrar" class="input-group">
                    <input type="text" class="input-field" placeholder="Nombre de Usuario" required/>
                    <input type="email" class="input-field" placeholdere="Correo" required/>
                    <input type="password" class="input-field" placeholder= "Contraseña" required/>
                    <input type="checkbox" class="check-box"/><span>Acepto los términos y Condiciones.</span>
                    <button type="submit" class="submit-btn" >Registrar</button>
                </form>
            </div>
        </div>



    )
}
