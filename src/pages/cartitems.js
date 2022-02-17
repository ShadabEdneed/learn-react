import React from 'react'
import car from "../components/assect/img1.jpg";
import "./cartitem.scss"

const List = () => {
  return (
    <div className='container'>
        <div className="card-wrapper">
              <div className="img-wraper">
                <img src={car} className="img-fluid" style={{ maxWidth: "100%" }} alt="" />
              </div>
              <div className="text-wrapper">
                <span>BMW</span><span> 10Cr</span>
              </div>
              <div className="btn-wrapper">
                <button type="btn" className="effect-btn" >Add to cart</button>
                <button type="btn" className="effect-btn" >Remove to cart</button>
              </div>
            </div>
    </div>
  )
}

export default List;