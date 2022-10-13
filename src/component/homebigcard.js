// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "../component/Homecard.css"


// function Homecard() {

//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios.get("http://localhost:5000/auth/allproducts")
//             .then((res) => {
//                 setData(res.data);
//                 console.log(res.data);
//             }).catch((error) => {
//                 console.log(error)
//             })
//     }, [])

//     return (
//         <>
       
//             {data.map((res) => {
//                 return (

//                     <div className="container text-center   product-big-image " >
//                     <div className="row">
//                       <div className="col-sm">
                      
//                                 <img src={res.image} alt="" key={res._id} className="productImg" />
//                                 {/* <Link to="#" className="btn btn-light card-prize ">SHOP NOW</Link> */}
//                             </div>

//                         </div>
//                     </div>

//                  )
//             })} 
        
//             {/* <div className="homecard-full">
//                 <div className="container text-center">
//                     <div className="row">
//                         <div className="col">
//                             <div className="card" >
//                                 <img src="" />
//                                 <Link to="#" className="btn btn-light card-prize ">SHOP NOW</Link>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="col">
//                                 <div className="card" >
//                                     <img src="" />
//                                     <Link to="Details" className="btn btn-light card-prize ">SHOP NOW</Link>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="col">
//                                 <div className="card" >
//                                     <img src="." alt=".image" />
//                                     <Link to="#" className="btn btn-light card-prize ">SHOP NOW</Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <h1 className="homecard-heading">SHOP BY STYLE</h1>


//                 <div className="container text-center">
//                     <div className="row">
//                         <div className="col">
//                             <div className="card" >
//                                 <img src="./image/card/card4.webp" className="card-img-top" alt=".image" />
//                                 <Link to="#" className="btn card-prize ">SHOP NOW</Link>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="col">
//                                 <div className="card" >
//                                     <img src="./image/card/card5.webp" className="card-img-top" alt=".image" />
//                                     <Link to="#" className="btn card-prize ">SHOP NOW</Link>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="col">
//                                 <div className="card" >
//                                     <img src="./image/card/card6.webp" className="card-img-top" alt=".image" />
//                                     <Link to="#" className="btn card-prize ">SHOP NOW</Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <h1 className="homecard-heading">TRENDING</h1>

//                 <div className="home-card-animation">
//                     <div className="container text-center">
//                         <div className="row">
//                             <div className="col">
//                                 <div className="card-group">
//                                     <div className="card card-home">
//                                         <img src="./image/card/homelastcard4.webp" className="card-img-top" alt="img" />
//                                         <div className="card-body ">
//                                             <Link to="#" className="btn btn-light card-prize ">SHOP NOW</Link>
//                                             <p className="home-card-text home-card-text1 ">SUNNY LIME SATIN SHIRT</p>
//                                             <h4 className="home-card-rate">Rs. 4,995.00</h4>
//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="col">
//                                 <div className="card-group">
//                                     <div className="card card-home">
//                                         <img src="./image/card/homelastcard3.webp" className="card-img-top" alt="img" />
//                                         <div className="card-body">
//                                             <Link to="#" className="btn btn-light card-prize ">SHOP NOW</Link>
//                                             <p className="home-card-text">WHITE SATIN FEATHER DETAILING TOP</p>
//                                             <h4 className="home-card-rate">Rs. 6,995.00</h4>
//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col">
//                                 <div className="card-group">
//                                     <div className="card card-home">
//                                         <img src="./image/card/homelastcard2.webp" className="card-img-top" alt="img" />
//                                         <div className="card-body">
//                                             <Link to="#" className="btn btn-light card-prize ">SHOP NOW</Link>
//                                             <p className="home-card-text">CRIMSON PLEATED SLEEVES BLAZER DRESS</p>
//                                             <h4 className="home-card-rate">Rs. 3,995.00</h4>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col"> <div className="card-group">
//                                 <div className="card card-home">
//                                     <img src="./image/card/homelastcard1.webp" className="card-img-top" alt="img" />
//                                     <div className="card-body">
//                                         <Link to="#" className="btn btn-light card-prize ">SHOP NOW</Link>
//                                         <p className="home-card-text">SILVER BLUE PEPLUM FLARED DRESS</p>
//                                         <h4 className="home-card-rate">Rs. 4,995.00</h4>
//                                     </div>
//                                 </div>
//                             </div></div>
//                         </div>
//                     </div>
//                 </div>

//                 <h1 className="homecard-heading3">DREAMS Now Also Retailing through!</h1>




//             </div> */}

//         </>
//     )
// }

// export default Homecard

