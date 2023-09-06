import './SignUp.css';
import facebook from '../../multimedia/facebook.png'; 
import google from '../../multimedia/google.png'; 
import twitter from '../../multimedia/twitter.png'; 


export default function SignUp() {                                  

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
                <form action="#" class="signup">
                  <div class="field">
                    <input type="text" placeholder="Name" required/>
                  </div>
                  <div class="field">
                    <input type="text" placeholder="Email Address" required/>
                  </div>
                  <div class="field">
                    <input type="password" placeholder="Password" required/>
                  </div>
                  <div class="field">
                    <input type="password" placeholder="Confirm password" required/>
                  </div>
                  <div class="field btn">
                    <div class="btn-layer"></div>
                    <input type="submit" value="Signup"/>
                  </div>
                  <div class="signup-link">Already have an account? <a href="">Login</a></div>
                </form>
              </div>
            </div>
        </div>



    )
}
