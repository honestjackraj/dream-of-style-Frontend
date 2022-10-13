import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../component/Navigation';
import "../component/Contact.css";
import Footer from '../component/Footer';


function Contact  ()  {
  return (
    <>
    
        <Navigation/>

        <div className='cont-homeabu'>
            <div>
        <Link  to="/Home" className='cont-home-lik'> home / </Link>{" "}
    <Link to="/Home" className='cont-about-lik'> About Us </Link>
    <h1 className='cont-head'>CONTACT US</h1>
     <p className=''>Hi </p>

    <p className='pcon1'>We hope you’re enjoying shopping with us.</p>
    <p className='pcon1'>Should you have any issues related to our products and services, please reach out to our customer care team at customercare@honestjack.com or call us on +91-9841517684 / 0120-6850262.
</p>
    <p className='pcon1'>We’re available Monday TO Sunday from 9:00 AM to 9:00 PM.

</p>
     
     
     
        <div className='about-imfoter'>
        <img src="https://i-design.fashion/wp-content/uploads/2021/08/1920-x-870-dresses-banner.jpg" class="detail-foot-backimg" alt="..." />
        <Footer/>
        </div>
       
    
    
    </div>
    </div>
    



      
    </>
  )
}

export default Contact
