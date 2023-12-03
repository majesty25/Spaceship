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

export default function Home() {
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

  const longText1 = `                <p className="rounded-font">
  The MOLEX Foundation Africa stands as a stalwart beacon of
  dedicated effort, committed to fostering the growth and
  empowerment of children and young individuals, with a special
  emphasis on those who find themselves vulnerable and
  marginalized. At the heart of our mission lies the fervent
  belief in not only acknowledging their rights but also
  actively enabling them to seize these rights and pave the way
  toward equal opportunities for the pursuit of their
  aspirations and hidden potentials. Through the impactful
  channels of mentoring and coaching, we are embarking on a
  transformative journey that holds the promise of better lives
  and brighter futures for countless children, particularly
  girls, who reside in the most deprived and marginalized
  corners of our communities.
</p>
<p>
  Our unwavering dedication extends beyond the immediate
  horizon. We are resolute in our commitment to amplify our
  impact, reaching an even larger swath of the population
  through the strategic mobilization of funds. The channels of
  grants and aids provide us with the means to widen our sphere
  of influence, touching lives and enacting positive change on a
  broader scale.
</p>
<p>
  Yet our aspirations are not confined solely to the grassroots
  level. We envision a future where the very fabric of societal
  structures is woven with the threads of equity and
  empowerment. To this end, we are actively engaged in the
  strategic development of approaches that hold the power to
  influence national policies, thereby paving the way for
  systemic change that can uplift marginalized segments of our
  society.
</p>
As we navigate this multifaceted landscape, we recognize the
immense potential of collaborative efforts. By engaging with
conventional influencers, we seek to magnify our reach,
leveraging the collective strength of individuals and entities
who share in our vision of a more just and inclusive society.`;

  const longText2 = `Indeed, the path to success is not a serendipitous
occurrence, nor can it be traversed without dedicated and
concerted efforts. The MOLEX Foundation stands as a shining
exemplar of this truth, for its very essence is rooted in
the unwavering belief that success is a journey that
requires deliberate cultivation. <br />
In a world where opportunities often remain concealed,
particularly within marginalized and underserved areas, the
MOLEX Foundation emerges as a beacon of enlightenment. Its
noble mission is to illuminate the way toward success for
the youth, especially those dwelling in the shadows of
societal neglect. In such regions, a fog of ignorance often
shrouds the future, and the road from one horizon to the
other remains obscured. Financial constraints and a dearth
of exposure to the transformative power of education
conspire to tether these young souls to the fringes of
life's journey. <br />
Recognizing this stark reality, the MOLEX Foundation Africa
has risen with purpose. Its commitment is resolute—to
empower, to inspire, and to guide. Through a tapestry of
modern and effective coaching and mentorship initiatives,
the foundation unravels the threads of potential that lie
within each young heart. By nurturing these potential gems,
the foundation imparts the tools of growth, self-discovery,
and resilience, enabling these aspiring souls to not only
sculpt a brighter future for themselves but also to
contribute to the betterment of society at large. <br />
The ethos of the MOLEX Foundation resonates with the very
essence of transformation. It is a catalyst that propels
young minds from the dim corridors of uncertainty into the
luminous arena of possibility. Through the alchemy of
coaching and mentorship, barriers are shattered, limitations
are transcended, and the trajectory of life takes a positive
and purposeful turn. <br />
In this noble endeavor, the MOLEX Foundation Africa becomes
an architect of change, shaping futures and forging
destinies. It stands as a guardian, a guide, and a partner
on the journey toward success. As each young individual
walks the path laid out by the foundation, they carry within
them the torch of knowledge, illuminating not just their
personal journey, but also collectively lighting the way for
a society that stands poised for progress. The MOLEX
Foundation Africa, through its unwavering dedication,
ensures that the spark of potential is ignited, nurtured,
and set ablaze—a beacon that brightens the lives of the
youth and ushers in a future defined by hope, empowerment,
and resounding success.`;

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
        isHome="true"
        active="active"
        showImage={true}

      />{" "}
      <Marquee Content="SHEROS IN STEM" />

      {/*MODAL START*/}
      {/* <Modal
        show={showWebModal}
        onHide={handleCloseModal}
        dialogClassName="modal-l"
      >
        <Modal.Header>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="col-12" src="/img/day.jpg" />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-outline-danger"
            variant=""
            onClick={handleCloseWebModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
      {/*MODAL END*/}
      {/*Header*/}
      {/*Who we are*/}
      <div className="about container-lg mt-5 rounded-font">
        <div className="">
          <div className="col align-items-center">
            <div className="col-lg-12">
              <div id="" className=" priority p-2 rounded text-justify">
                <ReadMore text={longText1} maxLength={850} />
              </div>
            </div>

            {/*OUR PRIOTIES START*/}
            <div className="col-lg-12 mt-4">
              <div className="about-tab priority">
                <div className="section-header text-center">
                  <h2 className="text-center ml-xl-5 rounded-font">
                    Our Priorities
                  </h2>
                </div>
                <div className="">
                  <div className="service-item d-flex flex-row">
                    <div className="">
                      <i className="fa fa-check p-3 fs-30 text-danger"></i>
                    </div>
                    <div className="service-text ">
                      <p className="h5">
                        To mentor, coach and guide children and young people
                        especially girls to enable them to decide, learn, lead,
                        and thrive in our contemporary society.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="service-item d-flex flex-row">
                    <div className="">
                      <i className="fa fa-check p-3 fs-30 text-danger"></i>
                    </div>
                    <div className="service-text">
                      <p className="h5">
                        To make sure that the girl-child has equal access and
                        opportunity to quality and inclusive education.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="service-item d-flex flex-row">
                    <div className="">
                      <i className="fa fa-check p-3 fs-30 text-danger"></i>
                    </div>
                    <div className="service-text">
                      <p className="h5">
                        To create a safe environment for children and women
                        against all forms of violence, gender discrimination,
                        and climate change catastrophes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="service-item d-flex flex-row">
                    <div className="">
                      <i className="fa fa-check p-3 fs-30 text-danger"></i>
                    </div>
                    <div className="service-text">
                      <p className="h5">
                        To pursue equal opportunities for women and youth by
                        providing them with platforms that ensure their
                        participation and activate their roles in societies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="service-item d-flex flex-row">
                    <div className="">
                      <i className="fa fa-check p-3 fs-30 text-danger"></i>
                    </div>
                    <div className="service-text">
                      <p className="h5">
                        Fostering enthusiasm in students, especially girls, for
                        Science, Technology, Engineering, and Mathematics (STEM)
                        disciplines
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*OUR PRIOTIES END*/}
      {/*FACT START*/}
      <div
        className="facts mt-5"
        data-parallax="scroll"
        // data-image-src="images/pic21.png"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="facts-item">
                <i className="flaticon-home"></i>
                <div className="facts-text">
                  <h3 className="facts-plus" data-toggle="counter-up">
                    10
                  </h3>
                  <p>Regions</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="facts-item">
                <i className="flaticon-charity"></i>
                <div className="facts-text">
                  <h3 className="facts-plus" data-toggle="counter-up">
                    100
                  </h3>
                  <p>Volunteers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*FACT END*/}
      {/*PROGRAMS START*/}
      <div className="causes">
        <div className="container">
          <div className="section-header text-center">
            <h2>Previous Programs</h2>
          </div>
          <Slider className="causes-carousel pt-2" {...settings}>
            {items.map((item, index) => (
              <div className="causes-item m-2" key={index}>
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
      <div
        className="donate quote"
        data-parallax="scroll"
        // data-image-src="img/donate..jpg"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="donate-content">
                <div className="section-header"></div>
                <div className="donate-text">
                  <p className="text-justify">
                    <ReadMore text={longText2} maxLength={850} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Volunteer Start  */}
      <div
        className="volunteer"
        data-parallax="scroll"
        // data-image-src="images/pic1.jpg"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="volunteer-form">
                <div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required="required"
                    />
                  </div>
                  <div className="control-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required="required"
                    />
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control"
                      placeholder="Why you want to become a volunteer?"
                      required="required"
                    ></textarea>
                  </div>
                  <div>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSenQguFNiXfjtC_182jZf4SFuT0-aXWbAQqXkS1OVVo6Urehg/viewform?usp=sf_link">
                      <button className="btn btn-custom" type="submit">
                        Become a volunteer
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="volunteer-content">
                <div className="section-header">
                  {/* <!-- <p>Become A Volunteer</p> --> */}
                  <h2>Let’s make a difference in the lives of others!</h2>
                </div>
                <div className="volunteer-text"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Volunteer End  */}
      {/*  Blog Start  */}
      <div class="blog">
        <div class="container">
          <div class="section-header text-center">
            <h2>Latest news & articles directly from our blog</h2>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4">
              <div class="blog-item">
                <div class="blog-img">
                  <img src="img/article1.png" alt="Image" />
                </div>
                <div class="blog-text">
                  <h3>
                    <a
                      href="https://kastlefmonline.com/there-is-the-need-to-invest-in-tvet-dr-patrick-essien-to-govt/"
                      target="_blank"
                    >
                      Read More
                    </a>
                  </h3>
                  <p></p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="blog-item">
                <div class="blog-img">
                  <img src="img/article2.png" alt="Image" />
                </div>
                <div class="blog-text">
                  <h3>
                    <a
                      href="https://kastlefmonline.com/let-educate-and-motivate-people-in-rural-areas-to-achieve-their-dreams-dr-patrick-essien/"
                      target="_blank"
                    >
                      Read More
                    </a>
                  </h3>
                  <p></p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="blog-item">
                <div class="blog-img">
                  <img src="img/article3.png" alt="Image" />
                </div>
                <div class="blog-text">
                  <h3>
                    <a href="https://post.molexfoundationafrica.org/blog/1" target="_blank">
                      Read More
                    </a>
                  </h3>
                  <p></p>
                </div>
              </div>
            </div>
            <a href="https://post.molexfoundationafrica.org/" target="blank">
              <div className="btn-outline-danger p-3 rounded">
                View more articles
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* Blog End  */}
      <Footer />
    </div>
  );
}
