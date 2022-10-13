import React from "react";
import "../component/Carousel.css"

function Carousel() {
    return (
        <section>
 <div className="total-carosal">
 <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active caro-image-siz">
      <img src="https://i.pinimg.com/originals/02/cf/cf/02cfcffac595c832c514d58704cd82ce.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item caro-image-siz">
      <img src="https://i.pinimg.com/originals/2d/95/b4/2d95b4fc6a1d0b6aee28a1553ae70766.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item caro-image-siz">
      <img src="https://tipsmake.com/data/images/collection-of-the-most-beautiful-fashion-banners-picture-22-LmTLHWkkY.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>



        </section>
    )
}


export default Carousel