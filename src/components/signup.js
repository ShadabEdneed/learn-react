import React from "react";
import "./signup.scss";
import { Field, reduxForm } from 'redux-form';

const validate = (values) => {
    const errors = {}
    if (!values.username) {
        errors.username = 'required'
    } else if (values.username.length > 15) {
        errors.username = "Must be 15 characters or less"
    }
    if (!values.email) {
        errors.email = "required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address"
    }
    if (!values.password) {
        errors.password = "required"
    } else if (!/^[A-Z0-9._%+-]+\.[A-Z]{2,4}$/i.test(values.password)) {
        errors.password = "Wrong password";
    }
    if (!values.age) {
        errors.age = "required"
    } else if (isNaN(Number(values.age))) {
        errors.age = "Must be anumber"
    } else if (Number(values.age) > 18) {
        errors.age = "Sorry, you must be at least 18 years old"
    }
    return errors
}
const warn = (values) => {
    const warning = {}
    if (values.age < 19) {
        warning.age = "Hmm, you seem a young"
    }
    return warning
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
}

const Signup = (props) => {

    const { handleSubmit, pristine, reset, submitting } = props

    // const Data = {
    //     name: "",
    //     email: "",
    //     password: ""
    // }

    // const [input, setInput] = useState(Data)
    // const [list,setList] = useState([]);


    // const handleChange = (e) => {
    //     let inputValue = e.target.value;
    //     let inputName = e.target.name;
    //     setInput({ ...input, [inputName]: inputValue })
    // }


    // const handleONSubmit = () => {

    // }

    return (
        <section>
            <div className="container">
                <div className={`form-container signup-container`}>
                    <form onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <span>or use your email to join us</span>
                            <input type="text" placeholder="Name" name="name"  component={renderField} label="Username"/>
                            <input type="email" placeholder="Email" name="email"  component={renderField} label="Email"/>
                            <input type="password" placeholder="Password" name="password"  component={renderField} label="Password"/>
                            <input type="number" placeholder="Age" name="Age"  component={renderField} label="Age"/>
                            <button className="effect-btn" type="submit" disabled={submitting}>Sign Up</button>
                            <button className="effect-btn" type="reset" disabled={reset}>Clear</button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}



export default reduxForm({
    form: 'syncValidation',  // a unique identifier for this form
    validate,                // <--- validation function given to redux-form
    warn                     // <--- warning function given to redux-form
  })(Signup)