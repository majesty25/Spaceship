import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import 'owl.carousel/dist/assets/owl.carousel.css';
import { Link } from 'react-router-dom';
import 'owl.carousel'; // Import Owl Carousel JS
import './css/MyCarousel.css'


export default function Footer() {

    
    return(
        <div className="footer rounded-font">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-6">
                    <div className="footer-contact">
                        <h2>Our Head Office</h2>
                        <p>
                            <i className="fa fa-map-marker-alt"></i>
                            Cape Coast, Central Region
                        </p>
                        <p>
                            <i className="fa fa-phone-alt"></i>
                            +233 554161195/ +233 509865106
                        </p>
                        <p>
                            <i className="fa fa-envelope"></i>
                            info@molexfoundationafrica.org
                        </p>
                        <div className="footer-social">
                            <a className="btn btn-custom" href="">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="btn btn-custom"
                                href="https://www.facebook.com/profile.php?id=100073088127630&mibextid=ZbWKwL"
                                taget='_blank'>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="btn btn-custom" href="https://www.youtube.com/@molexfoundationafrica4635"
                                target='_blank'>
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a className="btn btn-custom"
                                href="https://instagram.com/molex_foundation_21?igshid=YzQ5NzA2ZmU=" target='_blank'>
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="btn btn-custom" href="https://www.linkedin.com/in/molex-africa2021/"
                                target='_blank'>
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="footer-link">
                        <h2>Popular Links</h2>
                        <Link to="/about">About Us</Link>
                        <a href="">Contact Us</a>
                        <a href="">Upcoming Events</a>
                        <a href="">Latest Blog</a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="footer-newsletter">
                        <h2>Newsletter</h2>
                        <form>
                            <input className="form-control" placeholder="Email goes here"/>
                            <button className="btn btn-custom">Submit</button>
                            <label>Don't worry, we don't spam!</label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="container copyright">
            <div className="row">
                <div className="col-md-6">
                    <p>
                        &copy;
                        <a href="https://molexfoundationafrica.org">molexfoundationafrica.org</a>
                        , All Right Reserved.
                    </p>
                </div>
                <div className="col-md-6">
                    <p>
                        Designed By
                        <a href="#">MOLEX IT Team</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}