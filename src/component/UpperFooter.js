import React from 'react'
import { Link } from "react-router-dom";
import "../component/UpperFooter.css";


function UpperFooter () {
  return (
    <div>
              <div >
                <div >
                          <Link to="/Home" class="btn  btn-dark detail-learn-butto2">BACK TO HOME</Link>

     <div > 
     <img  className='uperfoter-image'src="https://i.pinimg.com/originals/6f/76/b7/6f76b7b5277565dcbd2e3d0db2178ff6.jpg"  alt="..." />
      </div>
      </div>
      </div>
      <div>
        <div className='container detail-imge-upcard'>
          <div className='row'>
            <div className='col-sm-4'>
              <div class="card detail-learn-container">
                <div class="card-body detail-learn-bod">
                  <p >WHY CHOOSE US?</p>
                  <h1 className='details-card-tit'>MORE POWER TO YOU</h1>
                  <p class="detail-para-tag">We are the first of its kind Made-to-Order, Ready-to-Wear Brand. No body is one perfect standard size ; and we make clothes to fit your unique body type!</p>
                  <Link to="#" class="btn  btn-dark detail-learn-button">LEAN MORE</Link>
                </div>
              </div>


            </div>

          </div>

        </div>
      </div>
      
    </div>
  )
}

export default UpperFooter
