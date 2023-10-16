
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";
import Footer from "./Footer";
import items from "../data/program";
import "./css/Contact.css"

export default function Contact() {


  return (
    <div>
      <Header headerTitle1="Contact Us" 
      isContact="true"
      active="active"/> 

      {/* <!-- Contact Start --> */}
<div className="container-md mt-5">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.926984403735!2d-1.2930430855529191!3d5.115469839346532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfddfed6fc798569%3A0x7531c2a02fe48636!2sUniversity%20Of%20Cape%20Coast!5e0!3m2!1sen!2sgh!4v1673617004224!5m2!1sen!2sgh"
        width="100%" height="460" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade" className="map"></iframe>

    <span className="container d-lg-flex flex-row align-items-end bg-light mt-5">
        <div className="col-lg-5 mt-3">
            <address>
                <span className="d-flex flex-row flex-wrap align-items-center my-2">
                    <em className="mdi mdi-home-outline icon mx-2"></em>
                    <div className="d-flex flex-column align-items-start">
                        <div className="head">Accra, Ghana</div>
                        <div className="text-small text-fade">CAPE COAST, CENTRAL REGION</div>
                    </div>
                </span>

                <span className="d-flex flex-row flex-wrap align-items-start my-4">
                    <em className="mdi mdi-email-outline icon mx-2"></em>
                    <div className="d-flex flex-column align-items-start">
                        <div className="head"> molexfoundation@gmail.com</div>
                        <div className="text-small text-fade">Send us your query anytime!</div>
                    </div>
                </span>

                <span className="d-flex flex-row flex-wrap align-items-center my-2">
                    <em className="mdi mdi-headphones icon mx-2"></em>
                    {/* <div className="d-flex flex-column align-items-start"> */}
                        <div className="head">+233 554161195/ +233 509865106
                            <div className="text-small text-fade">Mon to Fri 8am - 6pm</div>
                        </div>
                </span>

            </address>
        </div>
        <div className="container-md col-lg-7 mt-3 align-items-start">
            <form action="https://www.w3schools.com/action_page.php" className="d-lg-flex flex-row justify-content-around">
                <span className="col-5">
                    <div className="mb-3 mt-3">
                        <input type="text" className="form-control input-bg" id="email" placeholder="Enter your name"
                            name="email"/>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control input-bg" id="pwd
                      " placeholder="Enter your email" name="pswd"/>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control input-bg" id="pwd
                      " placeholder="Enter your subject" name="pswd"/>
                    </div>

       
                </span>
                <span className="col-6">
                    <div className="mb-3 mt-3">
                        <textarea className="form-control input-bg" rows="5" id="comment" name="text"
                            placeholder="Enter your message here"></textarea>
                    </div>
                    <button type="submit" className="btn btn-danger">Send message</button>
                </span>


            </form>
        </div>
    </span>
</div>
        {/* <!-- Contact End --> */}
      
      <Footer />
    </div>
  );
}
