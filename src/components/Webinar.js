import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Modal } from "react-bootstrap";
import { Helmet } from 'react-helmet';

import Header from "./Header";
import Footer from "./Footer";
import ReadMore from "./ReadMore";
import Marquee from "./Marquee";
import MetaTags from "./MetaTags";
import items from "../data/program";
import "./css/Home.css";

export default function Webinar() {
  const title = 'Dynamic Page Title';
  const description = 'A dynamic description for the page.';
  const imageUrl = '/path/to/dynamic-image.jpg'; 
  const url = window.location.href; 

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [showWebModal, setShowWebModal] = useState(true);

  const handleCloseWebModal = () => {
    setShowWebModal(!true);
  };


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

  const iframeSrc = "https://www.canva.com/design/DAF0KwFZC8Q/view?embed";
  const canvaLink = "https://www.canva.com/design/DAF0KwFZC8Q/view?utm_content=DAF0KwFZC8Q&utm_campaign=designshare&utm_medium=embeds&utm_source=link";

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingTop: '33.3333%',
    paddingBottom: 0,
    boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
    marginTop: '1.6em',
    marginBottom: '0.9em',
    overflow: 'hidden',
    borderRadius: '8px',
    willChange: 'transform'
  };

  const iframeStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    border: 'none',
    padding: 0,
    margin: 0
  };


  return (
    <div>
      <Helmet>
        {/* <title></title> */}
        {/* <meta property="og:title" content="jwsreeeeeeeeeeeeeeeeeee"/> */}

      </Helmet>
      <MetaTags
        // title="fdfdfdff"
        description={description}
        imageUrl={imageUrl}
        url={url}
      />
      <Header
        headerTitle1="MOLEX Foundation Africa"
        headerTitle2="Giving Back to Society"
        isWebinar="true"
        active="active"
        showImage={false}

      />{" "}

      

<div className="container mt-4">
      <div className="section-header text-center">
            <h3>Upcoming Programs</h3>
          </div>


          <div style={containerStyle}>
      <iframe
        loading="lazy"
        style={iframeStyle}
        src={iframeSrc}
        allowFullScreen="allowfullscreen"
        allow="fullscreen"
        title="Canva Embed"
      ></iframe>
      {/* <a href={canvaLink} target="_blank" rel="noopener">
        Blue White Modern Business Strategy Blog Banner
      </a>{" "}
      by Stephen Nyankson */}
    </div>


 
      </div>

      

      {/*PROGRAMS START*/}
      <div className="causes">
        <div className="container">
          <div className="section-header text-center">
            <h2>Webinar series</h2>
          </div>
          <Slider className="causes-carousel pt-1" {...settings}>
            {items.map((item, index) => (
              <div className="causes-item m-1" key={index}>
                <div className="causes-img">
                  <img
                    className="m-1"
                    src={item.image}
                    alt={`Images${index}`}
                  />
                </div>
                <div className="causes-text">
                  <p className="text-justify custom-truncate">
                    {item.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleItemClick(item)}
                    className="btn btn-outline-primary mt-3"
                    data-bs-toggle="modal"
                    data-bs-target=".myModal1"
                  >
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </Slider>

          {/*MODAL START*/}
          <Modal
            show={showModal}
            onHide={handleCloseModal}
            dialogClassName="modal-xl"
          >
            <Modal.Header closeButton>
              <Modal.Title>{selectedItem && selectedItem.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedItem && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: selectedItem.description,
                  }}
                />
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          {/*MODAL END*/}
        </div>
      </div>
      {/*PROGRAMS END*/}

     
     
      <Footer />
    </div>
  );
}
