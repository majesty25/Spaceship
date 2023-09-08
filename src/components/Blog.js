import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";
import Footer from "./Footer";
import ReadMore from "./ReadMore";
import items from "../data/program";
import "./css/Board.css";

export default function Blog() {
  return (
    <div>
        <head>
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/212.png" />
        </head>
      <Header headerTitle1="Board Members" /> {/*Header*/}

              {/* <!-- Single Post Start--> */}
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content text-justify">
                            <h2>FOSTERING GIRLS IN STEM: PAVING THE PATH FOR GHANA'S FUTURE 
                                DEVELOPMENT</h2>
                            <p>
                                Nestled within the heart of Ghana, a pivotal moment unfolds for its girls and women. At this critical 
                                juncture, they hold the key to the nation's unfolding development journey. As the nation aspires to 
                                achieve sustainable progress across various sectors, there is a compelling realization that holds the 
                                key to unlocking unprecedented growth: the active engagement of girls and young women in 
                                Science, Technology, Engineering, and Mathematics (STEM) fields.                            
                                Girls' participation in STEM education is crucial for several reasons. 
                                Firstly,it helps bridge the gender gap in the technology sector, which has traditionally been male-dominated. By encouraging girls to pursue STEM subjects, we can increase their representation and contribution in this field, promoting gender equality.
                                                            </p>
                            <p>
                                Education has long been recognized as the cornerstone of progress, and in the 21st century, STEM 
                                education has emerged as a driving force behind innovation, economic growth, and social 
                                advancement. Encouragingly, Ghana has taken significant strides in enhancing educational 
                                opportunities for its citizens. However, the gender gap in STEM participation remains a challenge 
                                that cannot be ignored. Addressing this gap by fostering girls' involvement in STEM fields will 
                                undoubtedly yield far-reaching benefits for the nation.
                                                            </p>
                            <p>
                                The gender gap in STEM is a global concern, and Ghana is no exception. By promoting and 
                                supporting girls in STEM, Ghana has a unique opportunity to bridge this gap and simultaneously 
                                tap into a vast reservoir of untapped potential. When girls are given equal opportunities to explore, 
                                learn, and excel in STEM disciplines, the entire nation stands to gain. STEM fields are the crucibles 
                                of innovation, where ideas transform into groundbreaking technologies and solutions. By 
                                involving more girls in STEM, Ghana can harness a diverse range of perspectives and ideas, 
                                fostering a culture of innovation that drives economic growth and social progress.            </p>  <p>
                                In view of this, the Asuansi technical institute had a mentorship programs and partnerships with industry professionals  that inspired many who were present during the program. Few successful women in ICT were showcased,highlighting their achievements to motivate and empower girls to pursue their passions and break barriers.                            </p>
                            <p>
                                As girls and young women gain expertise in STEM, they are better equipped to participate in high-skill, high-demand jobs. This not only enhances their personal economic prospects but also 
                                contributes to the nation's overall economic development. STEM education equips individuals 
                                with the tools to address complex challenges, from healthcare to infrastructure. By encouraging 
                                girls to pursue STEM careers, Ghana can tap into a homegrown talent pool that is uniquely 
                                positioned to develop contextually relevant solutions to local issues. When girls see women 
                                thriving in STEM careers, they are more likely to believe in their own potential and pursue these 
                                fields. Increasing the representation of women in STEM sends a powerful message that these fields 
                                are for everyone, regardless of gender.
                            </p>
                            <p>
                                In an increasingly interconnected world, nations that excel in STEM are better positioned to 
                                compete on the global stage. By nurturing a generation of skilled STEM professionals, Ghana can 
                                bolster its competitiveness and strengthen its contributions to international research and 
                                development. Fostering girls in STEM requires a multifaceted approach that involves collaboration 
                                between government, educational institutions, civil society, NGOs and the private sector. Revising 
                                and modernizing the curriculum to emphasize practical, hands-on STEM learning can make these 
                                fields more appealing and accessible to girls.                            </p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>

                        



                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Search Keyword"/>
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

 

               


                            <div class="single-bio flex-column">
                                <div class="author text-primary pl-3">Author</div>
                                <div class="single-bio-img">
                                    <img src="images/212.jpg" class="rounded"/>
                                </div>
                                <div class="single-bio-text">
                                    <h3>Dr. Patrick Essien</h3>
                                    <p class="text-justify">
                                        The founder and chief executive officer of The MoLEX Foundation Africa. He is currently a Lecturer at University of Cape Coast in Ghana and an AIMS Canada Postdoctoral research fellow
                                    </p>
                                </div>

                                
                            </div>
          
                        
                        
                        </div>


                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Single Post End-->      */}
      
      <Footer />
    </div>
  );
}
