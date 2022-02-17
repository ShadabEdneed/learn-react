import React,{useState} from "react";
import "./signup.scss"



const Signup = () => {
    const Data ={
        name:"",
        email:"",
        password:""
    }

    const [input,setInput] = useState(Data)
    // const [list,setList] = useState([]);


    const handleChange = (e) =>{
        let inputValue= e.target.value;
        let inputName= e.target.name;
        setInput({...input,[inputName]:inputValue})
    }


    // const handleONSubmit = () => {

    // }
   
    return (
        <section>
            <div className="container">
                <div className={`form-container signup-container`}>
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <span>or use your email to join us</span>
                            <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
                            <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
                            <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                            <button className="effect-btn">Sign Up</button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}


export default Signup;