import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";
import Footer from "./Footer";
import ReadMore from "./ReadMore";
import items from "../data/program";
import "./css/Board.css";

export default function Board() {
  const longText = `<p>
    Dr.Patrick Essien is the founder and chief executive officer of The MoLEX Foundation Africa . He hails from a village called Nyanfeku Ekroful and has the zeal to help children and youths from poor background to become better people in our society through coaching, mentorship and career guidance. He is a gender advocate and confidence to promote gender equality in Science, Technology, Engineering and Mathematics (STEM). Due to his passion in creating equal opportunity for all, he dedicated a lot of his time for community service. He is currently a Lecturer at University of Cape Coast in Ghana and an AIMS Canada Postdoctoral research fellow. He is also a visiting lecturer at Africa Institute for Mathematical Sciences (AIMS) Senegal and formal consultant at AIMS Ghana who developed the climate and atmospheric master's program
    </p>
    <p>
    Dr. Essien is a Space and Climate change enthusiast. Dr. Essien holds a Ph.D. in Space Geophysics from National Institute for Space Research (INPE) in Brazil, where he doubled as the assistance Scientist for the space weather program. His research interests focus is on the effects of space weather and atmospheric/ionospheric conditions on Global Navigation Satellite Systems (GNSS) and their applications. He is also working in the field of climate change. He received numerous scientific awards during his academic years including Max Hammond Student Award for the best abstract and project to present his Ph.D. work orally during America Geophysics Union (AGU) conference in 2019 in San Francisco <br/><br/>
    </p>
      He emerged as the best oral presentation during 2018 international COSPAR Capacity building workshop on space weather in Brazil, and the best scientist of the month (May, 2020) by Africa Geophysical Society (AGS). He has participated in numerous international conferences and has several publications in various international journals to his credit. Aside his academic prowess he has been holding several key leadership positions, among others, he is the former national point of contact to Ghana for the Space Generation Advisory Council, and a first foreigner to become the President of the Postgraduate Students of the National Institute for Space Research. Among others, he is a member of American Geophysical Union, European Geophysical Union, African Geophysical Society, Brazilian Symposium on Space Geophysics and Aeronomy and Ghana Institute of Physics.
    `;

  return (
    <div>
      <Header headerTitle1="Board Members" /> {/*Header*/}
      <div className="card HIDDEN">
        <div className="card-body">
          <section className="row-sm">
            <h4 className="text-light my-2 text-center">
              DR PATRICK ESSIEN (CEO)
            </h4>
            <img
              className="img-fluid col-sm-7 rounded scale- float-start mx-md-3"
              src="images/212.jpg"
              alt=""
              srcset=""
            />
            <div></div>
            <ReadMore className="description" text={longText} maxLength={850} />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
