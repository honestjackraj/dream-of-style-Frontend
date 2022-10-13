import React from 'react'
import Navigation from '../component/Navigation'
import "../container/Details.css"
// import React, { Component, useState } from "react";
import { Link ,useLocation } from "react-router-dom";
import Footer from "../component/Footer";
import UpperFooter from '../component/UpperFooter';


function Details() {

  // const [count, setCount] = useState(0);

  // const increment = () => setCount(count + 1);
  // const decrement = () => setCount(count - 1);
  // const reset = () => setCount(0);

    const details = useLocation()
    console.log(details);
     const  datadetails = details.buycard

   

    


  return (
    <>
      <Navigation/>

      <h2 className="detail-brand-name">
        DREAM OF STYLE
      </h2>


      <div className="details-bg">
        <div className="details-full">
          <section className="my-4 mx-5 cl">
            <div className="container details-container " >
              <div className="row details-row ">
                <div className="col-lg-5">
                  <img src={datadetails.image} class="details-image" alt="..." />

                </div>
                <div className="col-lg-7 details-form">
                  <h2 className='detail-dress-name'>{datadetails.name}</h2>
                  <h1 className='detail-rate'>{datadetails.price}</h1>
                  <p className='detail-pra-tag'>Tax included. Shipping calculated at checkout.</p>
                  <div>
                    <p className='detail-size'>Size</p>
                    <div>
                      <div className='detail-size-butall' >
                        <button className='detail-size-bottN1'>XS</button>{" "}
                        <button className='detail-size-bottN2'>X</button>{" "}
                        <button className='detail-size-bottN3'>M</button>{" "}
                        <button className='detail-size-bottN4'>L</button>{" "}
                        <button  className='detail-size-bottN5'>XL</button>{" "}
                      </div>
                      <p className='detail-size'>QUANTITY</p>

                      {/* <div>

                        <button onClick={increment}>+</button>{" "}
                        <button onClick={reset}>0</button>
                        <button onClick={decrement}>-</button>{" "}
                        
                      </div> */}

                      <p className='detail-size'>Size Chart</p>

                      <button className='detail-addcart-bn'>ADD TO CART</button>
                      <br />
                     {/* <Link to="/Shiping"> <button  className='detail-buycard-desing'>BUY IT NOW</button></Link> */}
                     <button  className='detail-buycard-desing'> <Link to="/Shiping"> BUY IT NOW</Link></button>


                      <p className='detail-para-tag'>This Under the radar standout piece with edgy belt detail
                        on the shoulders. The outfit you wear when you know
                        you want to be in the spotlight.</p>

                      <li className='detail-para-tag-sdark'>Crepe and Georgette</li>
                      <li className='detail-para-tag-sdark'>Dry Clean</li>
                      <li className='detail-para-tag-sdark'>Side Pockets</li>
                      <li className='detail-para-tag-sdark'>Fabric does not provide stretch</li>
                      <li className='detail-para-tag-sdark'>33.5" garment length</li>


                    </div>
                  </div>


                </div>

              </div>
            </div>
          </section>
        </div>
      </div>

        <UpperFooter/>

      <div className='detail-footer'>
        <Footer />
      </div>

    </>
  )
}
export default Details








