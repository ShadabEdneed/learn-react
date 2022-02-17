import React,{} from "react";
import "./sidenav.scss"

const SlideNave = () => {

    // const [open, setOpen] = useState(false);
    return(
        <sidenav className={open ? "open" : null}>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Service</a>
                </li>
                <li>
                    <a href="#">Contact us</a>
                </li>
                <li>
                    <a href="#">List</a>
                </li>
            </ul>
        </sidenav>
    )
}

export default SlideNave;