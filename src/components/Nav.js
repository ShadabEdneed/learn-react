import React, { useState } from "react";
import { Link } from "react-router-dom";
import cart from "./assect/cart.png"
import { useSelector } from "react-redux";
import "./nav.scss";
// import "./sidenav.scss";
// import SlideNave from "./SideNav";


const Nav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

  

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
      }
      
    const { cartdata } = useSelector((state) => {
        return {
            cartdata: state.cardData
        }
    })
    return (
        <div className="header">
            <div>
                <button class={`hamburder ${navbarOpen ? " open" : ""}`} onClick={handleToggle}>{navbarOpen}
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </button>
            </div>


            <nav  className={`close ${navbarOpen ? " open" : ""}`}>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/edit">Edit</Link>
                    </li>
                    <li>
                        <Link to="/list">List</Link>
                    </li>
                    <li>
                        <Link to="/form">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/buttons">Button Kit</Link>
                    </li>
                </ul>
            </nav>
            <Link to="/cartitems">
                <div className="icon">
                    <img src={cart} style={{ maxWidth: "100%" }} alt="" />
                    {cartdata > 0 ? <span>{cartdata}</span> : ""}
                </div>
            </Link>
        </div>
    )
}


export default Nav;