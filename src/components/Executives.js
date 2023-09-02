import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";
import Slider from "react-slick";
import Footer from "./Footer";
import items from "../data/program";
import executives from "../data/executives";
import "./css/Contact.css";

export default function Executives() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Header headerTitle1="Executives" /> {/*Header*/}
      {/* <!-- Team Start --> */}
      <div className="team">
        <div className="container">
          <div className="section-header text-center">
            {/* <!-- <p>Meet Our Team</p> --> */}
            <h2>The Executives</h2>
          </div>
          <div className="row owl-carouselo causes-carousel mx-lg-5 justify-content-center">
            {executives.map((executive, index) => (
              <div className="team-container col-lg-4 mb-5">
                <div className="team-item ">
                  <div className="team-img">
                    <img
                      className="rounded"
                      src={executive.image}
                      alt="Images"
                    />
                  </div>
                  <div className="team-text p-1">
                    <h2>{executive.name}</h2>
                    <p>{executive.portfolio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}
      <Footer />
    </div>
  );
}
