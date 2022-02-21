import React,{useState} from "react";
import "./signup.scss";
import "../pages/button.scss";


const Signup = () => {
    const [flip,setFlip] = useState();


    const handleToggle = () => {
        setFlip(!flip)
    }
    return (
        <section>
            <div className="form-container">
                <div className={`card ${flip ? "unflip" : "flip"}`}>
                    
                    <div className="face card-front" >
                        <div className="signin-form">
                            <form action="#">
                                <h3>Sign in</h3>

                                <div className="social-container">
                                    <a href="#" className="social" id="fb"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="social" id="gp"><i className="fab fa-google-plus-g"></i></a>
                                    <a href="#" className="social" id="lin"><i className="fab fa-linkedin-in"></i></a>
                                </div>

                                <span className="formspan">or use your registered account</span>
                                <input type="email" placeholder="Email" autoComplete="false"/>
                                <input type="password" placeholder="Password" />
                                <span className="olspan forgot"><a href="#">Forgot your password?</a></span>
                                <button className="formbtn">Sign in</button>
                            </form>
                        </div>
                    </div>
                    
                    <div className="face card-back" >
                        <div className="panel">
                            <h4>Welcome back!</h4>
                            <span className="panelspan">To keep connected with us please login with your personal info</span>
                            <button className="panelbtn signInBtn" onClick={handleToggle}>Sign In</button>
                        </div>
                    </div>
                        
                </div>
                
                <div className={`card ${flip ? "unflip" : "flip"}`}>
                    
                   
                    <div className="face card-front" >
                        <div className="panel">
                            <h4>Hello, Friend!</h4>
                            <span className="panelspan">Enter your personal details and start journey with us</span>
                            <button className="panelbtn common signUpBtn"  onClick={handleToggle}>Sign Up</button>
                        </div>
                    </div>
                    
                    <div className="face card-back" >
                        <div className="signup-form">
                            <form action="#">
                                <h3>Create Account</h3>

                                <div className="social-container">
                                    <a href="#" className="social" id="fb"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="social" id="gp"><i className="fab fa-google-plus-g"></i></a>
                                    <a href="#" className="social" id="lin"><i className="fab fa-linkedin-in"></i></a>
                                </div>

                                <span className="formspan">or use your email for registration</span>
                                <input type="email" placeholder="Email" />
                                <input type="name" placeholder="Username" />
                                <input type="password" placeholder="Password" />
                                <button className="formbtn">Sign up</button>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}


export default Signup;