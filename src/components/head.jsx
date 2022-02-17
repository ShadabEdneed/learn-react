import { ToggleOn } from "@mui/icons-material";
import React, { useState } from "react";
import bar from "./assect/bar.png";
import exit from "./assect/exit.png";
import "./head.scss";




const Head = () => {
  const [count, setCount] = useState(0);
  // const [remove, setRemove] = useState(0);

  return (
    <div className="container">
      <div className="row">
        <nav>
          <div>
            <a href="#" >
              <img src={bar} alt="" />
            </a>
          </div>
          <div>
            <h3 className=" m-0">Now Playing {count}</h3>
          </div>
          <div>
            <a href="#" onClick={() => setCount(count - 10)}>
              <img src={exit} alt="" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Head;
