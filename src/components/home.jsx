import React, { } from 'react';
import "./home.scss";
import { addToCart, removeToCart } from "../Redux/services/Action/action";
import { useDispatch } from "react-redux";
import "../pages/edit.scss";
import MyData from "../utility.json"


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
                  <button type="btn" className="effect-btn-theme" onClick={addToCartHandle}>Add to cart</button>
                  <button type="btn" className="effect-btn-theme" onClick={removeToCartHandle}>Remove to cart</button>
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
