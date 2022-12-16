import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../component/Navigation";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import "../container/Login.css";
import Footer from "../component/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function Login() {
	const navigation = useHistory();
	const [user, setUser] =useState({
		
		email: "",
		password: "",
	});

	const handlechange = ({ target: { name, value } }) => {
		setUser({ ...user, [name]: value })
	}

	const handlesubmit = async (e) => {
		e.preventDefault();
	

		try {
			const res = await axios.post("http://localhost:5000/auth/login", user);
	        localStorage.setItem("auth",JSON.stringify(res.data));
			navigation.push("/home")
		} catch (error) {
			console.log(error);

		}

	}

	const diffToast =()=> {
		toast("Wow so easy!");
	}

	return (
		<>
		<Navigation/>
		<div className="login-bg">
			<div className="login-full">
				<section className="my-4 mx-5 cl">
					<div className="container login-container " >
						<div className="row login-row ">
							<div className="col-lg-5">
								<img src="./image/login/login2.jpg" className="img-fluid login-image" alt="loginimage" />

							</div>
							<div className="col-lg-7 login-form">
								<h1 className="login-name">LOGIN</h1>

								<form onSubmit={handlesubmit}>
									<div className="from-row">
										<div className="col-lg-7">
											<input type="Email"
											name="email"
										 onChange={handlechange}
											 placeholder="Email-Address" 
											 className="log-form-control" />

										</div>

									</div>
									<div className="from-row">
										<div className="col-lg-7">
											<input type="password" 
											name="password"
										 onChange={handlechange}
											placeholder="Password"
											 className="log-form-control" />

										</div>

									</div>
									<div className="from-row">
										<div className="col-lg-7">
											<button type="submit" 
											className="login-btn1" onClick={diffToast}>SIGN IN</button>
										</div>
									</div>
									<ToastContainer />

									<p className="log-do-not-acc">Don't have an account? </p>
									<Link to="/Register" className="log-rigister"> Create account</Link>
									<br />



								</form>
							
								{/* <div className="method-control login-social1" >
									<Link to="#" className="method-action">
										<FaGoogle size="3rem" color="red"/>
										<span>Sign in with Google</span>
									</Link>
								</div>
								<div className="method-control">
									<Link to="#" className="method-action login-social2">
										<FaFacebookF size="3rem" color="blue"/>
										<span>Sign in with Facebook</span>
									</Link>
								</div> */}
							</div>

						</div>
					</div>
				</section>
			</div>
			</div>
     <div className="login-footer">
      <Footer/>
	  </div>

		</>
	)
}

export default Login
