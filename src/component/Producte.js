import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "../component/Producte.css"
import Card from "./Card"



function Producte() {

    const [data, setData] = useState([]);

    // useEffect(() => {
    //     axios.get("http://localhost:5000/auth/allproducts")
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
      url: "http://localhost:5000/auth/allproducts",
    });
    setData(response.data);

  };
  getdata();
  console.log(data);

  


    return (
        <>
          {/* <div className="home">
        <div className=" home__container">
        <div className="home__row">
        
          {data.map((item) => {
            return <Card detail={item}/>;
          })}
         </div>
         </div>
         </div> */}
          <div className=" home">
        <div className="  home__container">
        <div className="home__row">
        
          {data.map((item) => {
            return <Card detail={item}/>;
          })}
         </div>
         </div>
         </div>





           

        </>
    )
}

export default Producte

