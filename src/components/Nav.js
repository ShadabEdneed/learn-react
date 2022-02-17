import React, { useState } from "react";
import { Link } from "react-router-dom";
import cart from "./assect/cart.png"
import { useSelector } from "react-redux";
import "./nav.scss";
// import "./sidenav.scss";
// import SlideNave from "./SideNav";


const Nav = () => {
    const [open, setOpen] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false)

    const hamburger = () => {
        setOpen(!open)
    }

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

            {/* <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button> */}

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