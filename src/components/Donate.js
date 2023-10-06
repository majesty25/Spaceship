import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Modal } from "react-bootstrap";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";
import ReadMore from "./ReadMore";

import items from "../data/program";
import "./css/Home.css";
import "./css/Donate.css"

export default function Donate() {
  const title = "Dynamic Page Title";
  const description = "A dynamic description for the page.";
  const imageUrl = "/path/to/dynamic-image.jpg";
  const url = window.location.href;

  const apiUrl = "https://nyankie.onrender.com";

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data received:", data);
      // Handle the data as needed
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle errors
    });

  return (
    <div>
<div class="row justify-content-center">
  <div class="col-10">
    <div class="CONTAINER">
      <form action="">
      
        <div class="row">
          <div class="col-50">
            <h3>Your Address</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input className="form-control input" type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input className="form-control input" type="text" id="email" name="email" placeholder="john@example.com"/>
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input className="form-control input" type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input className="form-control input" type="text" id="city" name="city" placeholder="New York"/>

            <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input className="form-control input" type="text" id="state" name="state" placeholder="NY"/>
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input className="form-control input" type="text" id="zip" name="zip" placeholder="10001"/>
              </div>
            </div>
          </div>

          <div class="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" ></i>
              <i class="fa fa-cc-amex" ></i>
              <i class="fa fa-cc-mastercard" ></i>
              <i class="fa fa-cc-discover"></i>
            </div>
            <label for="cname">Name on Card</label>
            <input className="form-control input" type="text" id="cname" name="cardname" placeholder="John More Doe"/>
            <label for="ccnum">Credit card number</label>
            <input className="form-control input" type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label for="expmonth">Exp Month</label>
            <input className="form-control input" type="text" id="expmonth" name="expmonth" placeholder="September"/>
            <div class="row">
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input className="form-control input" type="text" id="expyear" name="expyear" placeholder="2018"/>
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input className="form-control input" type="text" id="cvv" name="cvv" placeholder="352"/>
              </div>
            </div>
          </div>
          
        </div>
        <label>
        </label>
        <input className="btn btn-outline-danger" type="submit" value="Donate" />
      </form>
    </div>
  </div>
  
</div>

      <Footer />
    </div>
  );
}
