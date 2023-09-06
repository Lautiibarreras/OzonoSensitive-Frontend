import './Login.css';
import facebook from '../../multimedia/facebook.png'; 
import google from '../../multimedia/google.png'; 
import twitter from '../../multimedia/twitter.png'; 


export default function Login() {                                  

    return (

        <div class="wrapper">
            <div class="form-container">
              <div class="slide-controls">
                <input type="radio" name="slide" id="login" checked/>
                <input type="radio" name="slide" id="signup"/>
                <label for="login" class="slide login">Login</label>
                <label for="signup" class="slide signup">Signup</label>
                <div class="slider-tab"></div>
              </div>
              <div class="form-inner">
                <form action="#" class="login">
                  <pre>
                  </pre>
                  <div class="field">
                    <input type="text" placeholder="Email Address" required/>
                  </div>
                  <div class="field">
                    <input type="password" placeholder="Password" required/>
                  </div>
                  <div class="pass-link"><a href="#">Forgot password?</a></div>
                  <div class="field btn">
                    <div class="btn-layer"></div>
                    <input type="submit" value="Login"/>
                  </div>
                  <div class="signup-link">Create an account <a href="">Signup now</a></div>
                </form>
              </div>
            </div>
        </div>



    )
}
