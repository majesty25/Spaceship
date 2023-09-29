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
import items from "../data/program";
import "./css/Home.css";
import ReadMore from "./ReadMore";

export default function About() {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const headerTile = "About Us";

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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

  const longText = `In the year 2021, a group of young scholars assembled in the
tranquil village of Nyanfeku Ekroful, nestled within the AAK district. Bound by
a shared vision and propelled by an unwavering determination to give back to the
society that had nurtured them, these remarkable individuals embarked on a trans
formative journey. Their formative years, spent navigating the challenges of impoverished
circumstances, had not dampened their spirits; instead, they had harnessed these trials as
catalysts for change. This pivotal juncture marked the genesis of the MoLEX Foundation
Africa – an embodiment of their collective resolve to amplify the human experience
through an intricate tapestry of life coaching, career guidance, mentoring, and advocacy
services. Their resounding mission was to spark the flame of greatness within individuals,
empowering them to transcend their circumstances and accomplish extraordinary feats.  At the heart of their mission, the MoLEX Foundation Africa champions a tapestry of transformative
initiatives. Central to their endeavors is the laudable "Girls-in-STEM" program, an illuminating beacon for
young women in remote rural areas, both in junior and senior high schools. Rooted in the firm belief that
gender should never be a barrier to brilliance, this initiative is a manifestation of the foundation's
commitment to igniting passion and breaking stereotypes. By nurturing a profound interest in Science,
Technology, Engineering, and Mathematics (STEM), particularly among girls, the program not only paves the
way for career aspirations but also dismantles the traditional underrepresentation of women in these fields.
Through empowerment, education, and hands-on engagement, it serves as a conduit for young women to become
architects of their own futures. <p>
    MoLEX Foundation Africa's luminous mission extends far beyond classroom walls. As fervent advocates for
    change, the foundation steadfastly confronts and combats the scourge of Sexual and Gender-Based Violence
    (SGBV). With unyielding resolve, they stand as a collective voice against the injustices that plague
    society, nurturing a culture where safety, respect, and equality thrive. </p>
<p>
    In a world grappling with the profound challenges of climate change, the MoLEX Foundation Africa emerges
    as
    a harbinger of resilience and education. Through extensive outreach and enlightening initiatives, they
    empower the public to develop the resilience necessary to confront the catastrophic implications of
    climate
    change. With a call to action that reverberates across communities, the foundation actively engages
    individuals in vital mitigation and adaptation measures.</p>
<p>
    Guided by an unshakeable commitment to nurturing transformative leaders, the MoLEX Foundation Africa
    shapes
    a future where leadership is defined by values and potential. Their endeavors strive to curtail the
    transformation of leadership culture, sculpting a landscape where integrity, empathy, and visionary
    thinking
    flourish. </p>
The story of MoLEX Foundation Africa resonates as a symphony of determination, compassion, and unwavering
dedication. Rooted in personal experiences, fueled by a fervent desire to uplift others, and propelled by a
shared vision of greatness, this foundation becomes a beacon of hope. With every initiative, every
mentorship, and every stand against injustice, they carve a path toward a more inclusive, empowered, and
promising tomorrow.`;

  return (
    <div>

      <Header headerTitle1="About Us" /> {/*Header*/}
      <h2 className="text-center">Learn About Us</h2>
      <div className="container py-3 text-justify bg-dark text-light rounded">
        <ReadMore text={longText} maxLength={850} />
        {/* <button className="btn btn-link read-more-btn">Read More</button> */}{" "}
      </div>
      <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="section-header justify-content-center align-items-center container-fluid">
                {/* <!-- <p>Learn About Us</p> --> */}
                <h3 className="text-center">
                  OUR MISSION AND VISION STATEMENTS
                </h3>
              </div>
              <div className="about-tab">
                <ul className="nav nav-pills nav-justified">
                  <li className="nav-item">
                    <a
                      className="nav-link active h4"
                      data-toggle="pill"
                      href="#tab-content-2"
                    >
                      Mission
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link h4"
                      data-toggle="pill"
                      href="#tab-content-1"
                    >
                      Vision
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    id="tab-content-2"
                    className="container text-dark tab-pane active h5 text-justify"
                  >
                    Molex Foundation Africa is committed to enriching lives
                    through the provision of life coaching, career guidance,
                    mentoring, and advocacy services that inspire individuals to
                    embark on a journey towards greatness, ultimately enhancing
                    the quality of their lives.
                  </div>

                  <div id="tab-content-1" className="container tab-pane h5">
                    {/*  Mission statements start */}
                    <div className="service-item d-flex flex-row">
                      <div className="">
                        <i className="fa fa-check p-3 fs-30 text-danger"></i>
                      </div>
                      <div className="service-text">
                        <p className="h6 text-dark">
                          Paving the way for equal opportunities across society,
                          allowing every individual to chase their dreams
                          uninhibited
                        </p>
                      </div>
                    </div>
                    <div className="service-item d-flex flex-row">
                      <div className="">
                        <i className="fa fa-check p-3 fs-30 text-danger"></i>
                      </div>
                      <div className="service-text">
                        <p className="h6 text-dark">
                          Coach girls and women to live beyond the cultural and
                          gender limitations.
                        </p>
                      </div>
                    </div>
                    <div className="service-item d-flex flex-row">
                      <div className="">
                        <i className="fa fa-check p-3 fs-30 text-danger"></i>
                      </div>
                      <div className="service-text">
                        <p className="h6 text-dark">
                          Sparking enthusiasm among students, particularly
                          girls, for Science, Technology, Engineering, and
                          Mathematics (STEM) fields
                        </p>
                      </div>
                    </div>
                    <div className="service-item d-flex flex-row">
                      <div className="">
                        <i className="fa fa-check p-3 fs-30 text-danger"></i>
                      </div>
                      <div className="service-text">
                        <p className="h6  text-dark">
                          Taking a stand against Sexual and Gender-Based
                          Violence, cultivating a society free from such harm.
                        </p>
                      </div>
                    </div>
                    <div className="service-item d-flex flex-row">
                      <div className="">
                        <i className="fa fa-check p-3 fs-30 text-danger"></i>
                      </div>
                      <div className="service-text">
                        <p className="h6  text-dark">
                          Educating the public to fortify resilience against
                          Climate Change challenges and actively engage in
                          mitigation and adaptation efforts.
                        </p>
                      </div>
                    </div>
                    <div className="service-item d-flex flex-row">
                      <div className="">
                        <i className="fa fa-check p-3 fs-30 text-danger"></i>
                      </div>
                      <div className="service-text">
                        <p className="h6  text-dark">
                          Cultivating transformative leaders imbued with potent
                          capabilities and values that reshape our society's
                          leadership landscape.
                        </p>
                      </div>
                    </div>
                    <div className="service-item d-flex flex-row">
                      <div className="">
                        <i className="fa fa-check p-3 fs-30 text-danger"></i>
                      </div>
                      <div className="service-text">
                        <p className="h6  text-dark">
                          Fostering a deep sense of responsibility towards our
                          environment, advocating for sustainable practices that
                          safeguard nature for future generations
                        </p>
                      </div>
                    </div>
                    {/* <!-- Mission statement end  */}{" "}
                  </div>

                  <div
                    id="tab-content-3"
                    className="container text-dark tab-pane h6"
                  >
                    Molex Foundation Africa has been working diligently to
                    support children and young people, especially the vulnerable
                    and marginalised, to exercise their right and create equal
                    platforms to pursue their dreams and potentials through
                    mentoring and coaching. This is gradually improving the
                    lives of many children in most deprived and disadvantaged
                    communities in Ghana. Additionally, the Foundation seeks to
                    mobilize funds through grants and aids to reach a larger
                    population with its activities. We also develop strategies
                    to influence national policies, and engage other
                    conventional influencers.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Facts Start --> */}
      <div
        className="facts container-fluid quote"
        data-parallax="scroll-"
        // data-image-src="/image/"
      >
        <div className="container">
        <h1 className="text-warning text-center">OUR CORE VALUES</h1>

          <div className="row justify-content-center">
            
            <div className="col-lg-4 col-md-6">
              <div className="facts-item align-items-center d-flex flex-column">
                <i className="mdi mdi-tools"></i>
                <div className="facts-text">
                  <p>Excellent Service</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="facts-item align-items-center justify-content-center d-flex flex-column">
                <i className="mdi mdi-account-group"></i>
                <div className="facts-text">
                  <p className="text-center">Teamwork</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="facts-item align-items-center d-flex flex-column">
                <i className="mdi mdi-hand-back-left-outline"></i>
                <div className="facts-text">
                  <p>Volunteerism</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="facts-item align-items-center d-flex flex-column">
                <i className="mdi mdi-image-filter-center-focus-strong-outline"></i>
                <div className="facts-text">
                  <p>Person Focused</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="facts-item align-items-center d-flex flex-column">
                <i className="flaticon-kindness"></i>
                <div className="facts-text">
                  <p>Respect</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="facts-item align-items-center d-flex flex-column">
                <i className="mdi mdi-sitemap-outline"></i>
                <div className="facts-text">
                  <p>Servant Leadership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Facts End --> */}
      <Footer />
    </div>
  );
}
