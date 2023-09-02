
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";
import Footer from "./Footer";
import items from "../data/program";
import "./css/Contact.css"

export default function Gallery() {


  return (
    <div>
      <Header headerTitle1="Our Gallery" /> {/*Header*/}
      
      <div className="event">
            <div className="container">
             
                <div className="row">
                    <div className="col-lg-6">
                        <div className="event-item">
                            <img src="images/11.jpg" alt="Image"/>
                     
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="event-item">
                            <img src="images/pic17.jpg" alt="Image"/>
                   
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="event-item">
                            <img src="images/pic18.jpg" alt="Image"/>
                          
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="event-item">
                            <img src="images/pic20.jpg" alt="Image"/>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>

      <Footer />
    </div>
  );
}
