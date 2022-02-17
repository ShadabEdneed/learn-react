
import React, {useEffect, useState} from 'react';
import "../login/login.scss";




const Login = (props) => {
    const {data} = props;
    const [login,setLogin] = useState(false);

    // useEffect(() => {
    //     if{

    //     }
    // })


    const handel = () =>{
        setLogin(!login)
    }
    console.log(login)

    

    
    return (
        <section>
            <div className="container" id="container">
                <div className={`form-container signup-container ${login? "overlay-right" : ""}`}>
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email to join us</span>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                        <button >Sign Up</button>
                    </form>
                </div>
                {/* <div className="form-container signin-container">
                    <form action="#">
                        <h1>Sign In {data.age}</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account {data.name}</span>
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                        <a href="#" className="forgot">Forgot your Password</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className={"overlay-container" } >
                    <div className="overlay">{login ?
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please log in with your account</p>
                            <button className="over-btn" id="signin" onClick={handel}>Sign In</button>
                        </div> :
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, there</h1>
                            <p>To join us please enter your personal details</p>
                            <button className="over-btn" id="signup" onClick={handel}>Sign Up</button>
                        </div>}
                    </div>
                </div> */}
            </div>
        </section>
    )
}


export default Login;