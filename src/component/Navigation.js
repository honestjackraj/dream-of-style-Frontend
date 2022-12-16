import React from "react";
import "../component/Navigation.css"
import {FaUser } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { WindowSharp } from "@mui/icons-material";
import {useHistory}from "react-router-dom";



export default function Navigation() {

  const  quantity = useSelector(state=>state.cart.quantity)
 
 const history =useHistory()
  const handellogout=()=>{ 
     localStorage.removeItem("auth")
    //  window.location.reload()
     history.push("/login")
  }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-#2c333d ">
                <div className="container-fluid nav-1stbar">
                    <div>
                        <h3 classNameName="discount-bar1">FREE NATIONWIDE SHIPPING FOR ORDERS ABOVE PKR 2500/-</h3>
                    </div>
                </div>
            </nav>

  <div>

<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid nav-2ndbar">
    <div className="ngatio-logo">
  <img src="./image/logo/dream.png" alt="logo" width="180" height="150"/>
  </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active nav-contant1" aria-current="page" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active nav-contant2" aria-current="page" to="">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active nav-contant3" aria-current="page" to="">Contact</Link>
        </li>
      
      </ul>

      <div className="nav-icons">
          <Link to="/Login" > <FaUser  className="nav-icon1"/></Link> 
            <FaHeart className="nav-icon2"/>
            
            
                        <button className="logoutbtn" onClick={handellogout}>Logout</button>

            {/* <h4>cart{quantity}</h4> */}
            {/* <FaShoppingCart  className="nav-icon3"/> */}
      </div>
    </div>
  </div>
</nav>
</div>



        </>



    );
}



