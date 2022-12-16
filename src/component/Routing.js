import React from "react";
import { Route } from "react-router-dom";
import Home from "../container/Home";
import Login from "../container/Login";
import Register from "../container/Register";
import Details from "../container/Details";
import Shiping from "../container/Shiping";
import About from "../component/About";
import Contact from '../component/Contact';
import Category from "../component/Category"
import Admin from "../Adminpages/Admin";
import User from "../Adminpages/user";
import Adminform from "./Adminform"
import Adminlist from "./Adminlist"


function Routing() {
  return (
    <>

      {/* <Route path="/" component={Home}/>
       <Route path="*" component={Login}/> */}

       
      <Route exact path="/" component={Login} />
      <Route  path="/login" component={Login} />

      <Route path="/Register" component={Register} />

      <Route path="/home" component={Home} />
      <Route path="/Details" component={Details} />
      <Route path="/shiping" component={Shiping} />
      <Route path="/about" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Category" component={Category} />
      <Route path="/Admin" component={Admin} />
      <Route path="/user" component={User} />
      <Route path="/Adminform" component={Adminform} />
      <Route path="/Adminlist" component={Adminlist} />

      {/* <Route path="/Products" component={Products}/> */}




    </>
  )
}
export default Routing




