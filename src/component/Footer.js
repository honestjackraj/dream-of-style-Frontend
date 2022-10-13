import React from "react"
import { Link } from "react-router-dom"
import "../component/Footer.css"
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

function Footer() {
    return (
        <div>

            <div class="row primary bg-dark footer-row">
                <div class="column about footer-col">

                    <h3 className="foot-heading">STORE LOCATION</h3>
                    <div className="store-footer">
                        <ul className="footer-ul">
                            <li>
                                <Link>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span>22-A, Block chennai
                                        <br />
                                        <span>Tamil Nadu, India</span>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link>


                                    <i class="fa-solid fa-envelope"></i>
                                    <span>customersupport@lamaretail.com

                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <i class="fa-solid fa-phone"></i>

                                    <span>+919841517648

                                    </span>
                                </Link>
                            </li>





                        </ul>
                    </div>

                    <div className="social">
                        <FaFacebook color="#1773EA" className="fot-soc-fb" />
                        <FaInstagram color=" #D22A89"   className="fot-soc-ins"/>
                        <FaTwitterSquare color="#1DA1F2"  className="fot-soc-twi" />
                        <FaYoutube color=" #FF0000"  className="fot-soc-utube" />
                        < FaWhatsapp color="#2EE310"  className="fot-soc-wtapp" />
                    </div>
                </div>

                <div class="column links">
                    <h3 className="foot-heading" >INFORMATION</h3>

                    <ul>

                        <li>
                            <Link to="#ABOUT-US">ABOUT US</Link>
                        </li>
                        <li>
                            <Link to="#COVID-INFORMATION">COVID INFORMATION</Link>
                        </li>
                        <li>
                            <Link to="#FAQs">FAQs</Link>
                        </li>
                        <li>
                            <Link to="#RETURN-&-EXCHANGE-POLICY">RETURN & EXCHANGE POLICY</Link>
                        </li>
                    </ul>

                </div>



                <div class="column subscribe">
                    <h3 className="foot-heading">Newsletter</h3>
                    <div className="footer-button">
                        <input type="email" placeholder="Your email id here" />
                        <button className="subscribe-botton">Subscribe</button>
                    </div>

                </div>

            </div>

            <div class="row copyright">

                <p>Copyright © 2022 LAMA Retail All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer