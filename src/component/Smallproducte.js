import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import {Link}from "react-router-dom"
import "../component/Smallproducte.css"


function Smallproducte ()  {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/auth/allSmallproducte")
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    
       
//     const response = await axios({
//       method: "get",
//       url: "http://localhost:5000/auth/allproducts",
//     });
//     setData(response.data);

//   };
//   getdata();
//   console.log(data);


return (
    <>

<div className="home">
    <div className="home__container">
    <div className="home__row">
    
      {data.map((item) => {
        return (
            <>
            <div className="SMALLPRODUCTS">
            <div className="SMPBOX">
                <img className="smallproducte-size" src={item.image} alt="image"/>
                <Link to={{pathname:"/Details",data:item}}>
                <button className="SMALL-P-B" >
                    SHOP NOW
                </button>
                </Link>
                <h5 className="s-m-p-name">{item.name}</h5>
                <h4 className="s-m-p-prize">{item.price}</h4>
              
            </div>
            </div>
            </>
        );
      })}
     </div>
     </div>
     </div>




    </>
  )
}

export default Smallproducte
