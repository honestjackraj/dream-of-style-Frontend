import React from 'react'
import "../component/Card.css"
import "./Card.css";
 import {Link} from "react-router-dom"

function Card ({detail}) {
  return (
    <>
    
    <div>
        <div className="product">
    <div className="product__info">
     
      
    </div>
    <div className='card-img-size'>
    <Link to={{pathname:"/Category"}}>
    <img className='card-image-main' src={detail.image} alt="" />
    {/* <p>{detail.name}</p>
      <p className="product__price">
        <small>₹</small>
        <h1 className=''>{detail.price}</h1>
      </p> */}
    <button className='card-shop_now' >SHOP NOW</button></Link>
    </div>
  </div>
    </div>

   

   </>
    

  // <div>
  //   <div hole-card>
  //    <div className='card-img-edit'>
  //   <img src={detail.image} alt="" />
  //   </div>
  //   <div className="product">
  //    <div className="product__info">
  //     <p>{detail.name}</p>
  //     <p className="product__price">
  //      <small>₹</small>
  //     <strong>{detail.price}</strong>
  
  //     </p>
  // </div>
  // </div>

  //   </div>


  // </div>
  )
}

export default Card
console.log(Card);

