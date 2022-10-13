import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../component/Navigation';
import "../component/About.css";
import Footer from '../component/Footer';

const About = () => {
  return (
    <>
    
        <Navigation/>

        <div className='about-homeabu'>
            <div>
        <Link  to="/Home" className='abt-home-lik'> home / </Link>{" "}
    <Link to="/Home" className='abt-about-lik'> About Us </Link>
    <h1 className='about-haad'>ABOUT US</h1>

    <p className='pcon1'>DREAMS™, as a name, is a thoughtful reflection of what the brand stands for. A strategic amalgamation of two common words, [“DREAM”(ue); a turning force/power + “STYLE”; to wear], DREAM OF STYLE exudes every ounce of “Power Dressing” as we know it by creating designs which mirror the essence of the young, confident & independent woman of today.</p>
     
     
     <p className='pcon1'>DREAM is a first of its kind luxury prêt-à-couture label aiming to bring out the perfect blend of “ready to wear “& “couture” elements into each of its ensembles.</p>
     <p className='pcon1'>Our collections are an enchantingly compelling chronicle of a young woman who is fearless in her varied pursuits while also being proud of the on-going journey of finding herself. She is someone who wants to experience luxury silhouettes in their most contemporary & authentic form, painting the canvas of her life adorning pieces that accentuate her own trademark personality.</p>
     <p className='pcon1'>An exemplification of exceptional precision & unprecedented achievement; a hybrid between classic silhouettes & modern tailoring along with creative surface ornamentation techniques, our collections are nothing short of a visual rendering of hopes & dreams.</p>
     <p className='pcon1'>DREAM’s futuroligistic approach to design has resulted in a repertoire of ensembles injected with elements of art, people & culture garnered from creative spaces in far flung places that take it a notch above.</p>
        
        <div className='about-imfoter'>
        <img src="https://i.pinimg.com/originals/ce/7d/24/ce7d24ecbd3eb25221795be24a3ac7bb.jpg" class="detail-foot-backimg" alt="..." />
        <Footer/>
        </div>
       
    
    
    </div>
    </div>
    



      
    </>
  )
}

export default About
