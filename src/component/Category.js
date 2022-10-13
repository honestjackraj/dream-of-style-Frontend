import axios from "axios";
import React, {  useState } from "react";
import "../component/Category.css"


import {Link}from "react-router-dom"
import Footer from "./Footer";
import Navigation from "./Navigation";



function Category() {

    const [data, setData] = useState([]);

    // useEffect(() => {
    //     axios.get("http://localhost:5000/auth/allCategory")
    //         .then((res) => {
    //             setData(res.data);
    //             console.log(res.data);
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    // }, [])

   
  const getdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:5000/auth/allCategory",
    });
    setData(response.data);

  };
  getdata();
  console.log(data);


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
                <div className="category-image-sz">
                    <img  src={item.image} alt="image"/>
                    </div>
                <Link to={{pathname:"/details",buycard:item}}>
                    <button  className="category-Bnt">
                     QUICK VIEW

                    </button>
                    </Link>
                  
                    <p className="category-image-NM">{item.name}</p>

                
                    <h4 className="category-image-prz" >{item.price}</h4>
                  
                    

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

