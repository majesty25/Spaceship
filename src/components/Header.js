import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import "owl.carousel/dist/assets/owl.carousel.css";
import { Link } from 'react-router-dom';
import "owl.carousel"; // Import Owl Carousel JS
import "./css/MyCarousel.css";
import "./css/Header.css";
import "./css/PageHead.css"

const Header = (props) => {
  return (
    <div>
      <div className="top-bar d-none bg-dark d-md-block">
        <div className="container-fluid">
          <div className="row">
          <div className="col-md-9">
              <div className="top-bar-left">
                <div className="text">
                  <i className="fa fa-phone-alt"></i>
                  <p>+233 24686 5534</p>
                </div>
                <div className="text">
                  <i className="fa fa-phone-alt"></i>
                  <p>+233 54993 4817</p>
                </div>
                {/*
                <div className="text">
                  <i className="fa fa-phone-alt"></i>
                  <p>+233 242337839</p>
                </div>
                 */}
                <div className="text">
                  <i className="fa fa-envelope"></i>
                  <p>info@molexfoundationafrica.org</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="top-bar-right">
                <div className="social">
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100073088127630&mibextid=ZbWKwL"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/molex-foundation-africa/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://instagram.com/molex_foundation_21?igshid=YzQ5NzA2ZmU="
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link to="/">
          <img
            className="logo-img rounded mx-2"
            src="img/logo0.jpg"
            alt=""
            srcset=""
          />
          <div href="index.html" className="navbar-brand rounded-font">
            MOLEX
          </div>
          </Link>
 
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto">
              <Link to="/" className={`nav-item nav-link ${props.isHome?props.active:''}`}>
                Home
              </Link>
              <Link to="/about" className={`nav-item nav-link ${props.isAbout?props.active:''}`}>
                About
              </Link>

              <a href="https://post.molexfoundationafrica.org/" className={`nav-item nav-link ${props.isArticle?props.active:''}`} target="blank">
                News & Articles
              </a>

              <Link to="/gallery" className={`nav-item nav-link ${props.isGallery?props.active:''}`}>
                Gallery
              </Link>

              <div className="nav-item dropdown">
                <div                  
                  className={`nav-item nav-link dropdown-toggle ${props.isPortfolio?props.active:''}`}
                  data-toggle="dropdown"
                >
                  Portfolio
                </div>
                <div className="dropdown-menu">
                  {/* <!-- <a href="single.html" className="dropdown-item">Detail Page</a> --> */}
                  <Link to="/executives" className="dropdown-item">
                    The Executives
                  </Link>
                  <Link to="/board" className="dropdown-item">
                    Board Members
                  </Link>
                </div>
              </div>
              <Link to="/contact" className={`nav-item nav-link ${props.isContact?props.active:''}`}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="custom-carousel"
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
      >
        <div>
          <img src="/images/pic22.png" alt="Slide 1" />
          <div className="overlay-p">
            <div className="carousel-text">
              <h3 className="text-warning larger-heading display-4">
                {/* {props.headerTitle1} */}
              </h3>
              {/* <h2 className="text-warning">{props.headerTitle2}</h2> */}
            </div>
          </div>
        </div>
        {/* <div>
          <img src="/images/pic21.png" alt="Slide 2" />
          <div className="overlay">
            <h1>MoLEX Foundation Africa</h1>
            <h2>Subheading 2</h2>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
