import React from "react";
import "../container/home.css";
import Footer from "../component/Footer";
import Producte from "../component/Producte";
import Navigation from "../component/Navigation";
import Carousel from "../component/Carousel";
import Smallproducte from "../component/Smallproducte";
import { Link } from "react-router-dom"

// import Video from "../../public/video/demovideo.webm";






function Home() {
    return (
        <>
        <div className="homeheight">
            <Navigation />
            <Carousel />

            {/* <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active corousel-image">
                        <img src="https://th.bing.com/th/id/R.eda6892dbf1d4f2d4981c4bdbde6c269?rik=oVvrxEeQ6%2btM3A&riu=http%3a%2f%2ffreshwidewallpapers.com%2fdownload%2f1123%2f3840x2400%2fnone%2fasian-model-in-red-dress-hot-wallpaper.jpg&ehk=xacGQfafHGvUNIGf425pajlafS1%2fUhhhl0V6XkAKRpk%3d&risl=&pid=ImgRaw&r=0" class="d-block" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item  active corousel-image">
                        <img src="https://th.bing.com/th/id/R.20730f3300bbabd64e40c561344b5dae?rik=WoIS0EY3T8viUA&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2fpriyanka-chopra-15-img.jpg&ehk=QBfmaM65POV4RPbZ6osgFsJ2Onvl2TA%2fzMaHPN6I%2fIo%3d&risl=&pid=ImgRaw&r=0"class="d-block" alt="..." />
                        <div class="carousel-caption d-none d-md-block ">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item active corousel-image">
                        <img src="https://c.wallhere.com/photos/ef/ab/Selena_Gomez_women_brunette_dress_black_dress_legs_high_heels_cleavage-107320.jpg!d " class="d-block " alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div> */}


            <div>
                <h2 className="brand-name">
                    DREAM OF STYLE
                </h2>
                <p className="carosal-after-p">(n.) (brand) (revolution) A thoughtful reflection of what the label stands for. A strategic amalgamation of two common words, ["DREAM"(ue); a turning force/power + "STYLE"; to wear]. Torqadorn exudes every ounce of "Power Dressing" as we know it by creating designs which mirror the essence of the young, confident and independent woman of today.</p>
            </div>
            <button    className="home-insta-button">#instagram page</button>

           
               

            <br />
            <h2 className="carosal-after-heading2">SHOP BY OCCASION</h2>


              <div className="hoprd">
            <Producte />
            </div>

            <div className="home-second-heading1">
                <h1 className="home-second-heading">SHOP BY STYLE </h1>
                <Link to={{ pathname: "/Category", }}>
                    <button className="VIEW-all-b" >
                        VIEW ALL

                    </button>
                </Link>

            </div>


            <div className="smallprocss" >
                <Smallproducte />
            </div>

            <h1 className="LAST-heading" >DREAMS Now Also Retailing through :</h1>




            <Footer />

            </div>

        </>
    );
}

export default Home;
