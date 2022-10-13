import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../component/Navigation";
import Footer from "../component/Footer";
// import { FaGoogle } from 'react-icons/fa';
// import { FaFacebookF } from 'react-icons/fa';
import "../container/Register.css";
import axios from 'axios';
import { useHistory } from "react-router-dom";



function Register() {
	const navigation = useHistory();
	const [user, setUser] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	});
	


	const handlechange = ({ target: { name, value } }) => {
		setUser({ ...user, [name]: value })
	}

	const handelsubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:5000/auth/register", user);
			navigation.push("/login");
		} catch (error) {
			console.log(error);

		}

	}



	return (
		<>
			<Navigation />
			<div className="register-bg">
				<div className="register-full">
					<section className="my-4 mx-5 cl">
						<div className="container register-container " >
							<div className="row register-row ">
								<div className="col-lg-5">
									<img src="./image/login/register1.jpg" className="img-fluid register-image" alt="loginimage" />

								</div>
								<div className="col-lg-7 register-form">
									<h1 className="register-name">CREATE ACCOUNT</h1>

									<form onSubmit={handelsubmit} >
										<div className="from-row">
											<div className="col-lg-7">
												<input type="text"
													name="firstname"
													onChange={handlechange}

													placeholder="FIRST-NAME"
													className="regis-form-control"/>

											</div>
										</div>
										<div className="from-row">
											<div className="col-lg-7">
												<input type="text"
													name="lastname"

													onChange={handlechange}
													placeholder="LAST-NAME"
													className="regis-form-control"/>

											</div>
										</div>

										<div className="from-row">
											<div className="col-lg-7">
												<input type="email"
													name="email"

													onChange={handlechange}

													className="log-form-control" />

											</div>
										</div>

										<div className="from-row">
											<div className="col-lg-7">
												<input type="password"
													name="password"
													onChange={handlechange}
													placeholder="******"
													className="regis-form-control" />

											</div>

										</div>
										<div className="from-row">
											<div className="col-lg-7">
												<button type="submit"
												
													className="register-btn1">CREATE</button>

											</div>
										</div>

										<p className="register-do-not-acc">Already have an account? </p>
										<Link to="/Login" className="register-rigister"> SIGN IN</Link>
										<br />



									</form>

								</div>

							</div>
						</div>
					</section>
				</div>
			</div>

			<div className="rigister-footer">
				<Footer />
			</div>






		</>
	)
}

export default Register
