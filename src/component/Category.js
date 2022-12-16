import axios from "axios";
import React, {  useState ,useEffect} from "react";
import "../component/Category.css"


import {Link}from "react-router-dom"
import Footer from "./Footer";
import Navigation from "./Navigation";
// import StripeCheckout from "react-stripe-checkout";




function Category() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/auth/allCategory")
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            }).catch((error) => {
                console.log(error)
            })
    }, [])

   
  // const getdata = async () => {
  //   const response = await axios({
  //     method: "get",
  //     url: "http://localhost:5000/auth/allCategory",
  //   });
  //   setData(response.data);

  // };
  // getdata();
  // console.log(data);

  // const buy = (token)=>{
  //   console.log(token);
  // }


    return (
        <>
        <Navigation/>

<div className="category-all">
        <div className="category-container">
        <div className="category-row">
        
          {data.map((item) => {
            return (
                <>
                <div>
                <Link className="link2" to={{pathname:"/Details",data:item}}>
                <div className="category-image-sz">
                    <img  src={item.image} alt="image"/>
                    </div>
                    
                    <button  className="category-Bnt">
                     QUICK VIEW
                        

                        

                    </button>

                    <h4 className="category-image-NM">{item.name}</h4>
                    <h1 className="category-image-prz">{item.price}</h1>
                    </Link>


                    

                </div>
                </>
            );
          })}
         </div>
         </div>
         </div>

         <Footer/>





        </>
    )
}

export default  Category

