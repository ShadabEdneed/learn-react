import React, { } from 'react';
import "./home.scss";
// import Head from "./head";
// import dots from "./assect/more-horizontal-outline.png";
// import card from "./assect/play--icon.png";
// import Form from "./signup";
import { addToCart, removeToCart } from "../Redux/services/Action/action";
import { useDispatch } from "react-redux";
import "../pages/edit.scss";
import MyData from "../utility.json"
// import car1 from "./assect/img-2.jpg";
// import car2 from "./assect/img3.jpg";
// import car3 from "./assect/img4.jpg";
// import car4 from "./assect/img5.jpg";



// const Data = [
//   {
//       image:car,
//       name:"BMW XR Price :",
//       price: "10Cr"
//   },
//   {
//       image:car1,
//       name:"BMW XR Price :",
//       price: "10Cr"
//   },
//   {
//       image:car2,
//       name:"BMW XR Price :",
//       price: "10Cr"
//   },
//   {
//       image:car3,
//       name:"BMW XR Price :",
//       price: "10Cr"
//   },
//   {
//       image:car4,
//       name:"BMW XR Price :",
//       price: "10Cr"
//   }

// ]


const HomePage = () => {
  const dispatch = useDispatch();


  const addToCartHandle = () => {
    dispatch(addToCart("type data"))
  }
  const removeToCartHandle = () => {
    dispatch(removeToCart("remove data"))
  }

  return (
    <section className="page">
      <div className="container">
        <div className="row-contain">
          {
            MyData.map(item => (
              <div className="card-wrapper" Key={item.id}>
                <div className="img-wraper">
                  <img src={item.images} className="img-fluid" style={{ maxWidth: "100%" }} alt="" />
                </div>
                <div className="text-wrapper">
                  <span>{item.name} :</span><span> {item.price}</span>
                </div>
                <div className="btn-wrapper">
                  <button type="btn" className="effect-btn" onClick={addToCartHandle}>Add to cart</button>
                  <button type="btn" className="effect-btn" onClick={removeToCartHandle}>Remove to cart</button>
                </div>
              </div>
            ))

          }

        </div>
        
      </div>











      {/* <Head />
      <div className="container">
        <div className="row">
          <div className="box">
            <div>
              <img src={dots} alt="" />
            </div>
            <p>I never thought about All the things you have given to me</p>
          </div>
        </div>
        <div className="sec2">
          <div className="content">
            <h1>Dunya</h1>
            <p>Mahir Zain</p>
            <small>Album - Deen Over Dunya</small>
          </div>
          <div className="card">
            <img src={card} className="" alt="" />
          </div>
        </div>
      </div> */}
      {/* <Form data={{ name: "enter your accout details", age: '26' }} /> */}




    </section>
  );
};

export default HomePage;
