import React from "react";
import {  Route } from "react-router-dom";
import Home from "../container/Home";
import Login from "../container/Login";
import Register from "../container/Register";
import Details from "../container/Details";
import Shiping from "../container/Shiping";
import About from "../component/About";
import Contact from '../component/Contact';
import Category from "../component/Category"


function Routing(){
    return(
      <>
      
       {/* <Route path="/" component={Home}/>
       <Route path="*" component={Login}/> */}
      
       <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/Register" component={Register}/>
      <Route path="/home" component={Home}/>
      <Route path="/details" component={Details}/>
      <Route path="/shiping" component={Shiping}/>
      <Route path="/about" component={About}/>
      <Route path="/Contact" component={Contact}/>
      <Route path="/Category" component={Category}/>

      {/* <Route path="/Admin" component={Admin}/> */}
      {/* <Route path="/Products" component={Products}/> */}
     
     
     

      </>
    )
}
export default Routing




