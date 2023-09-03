import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";
import Footer from "./Footer";
import ReadMore from "./ReadMore";
// import items from "../data/program";
import board from "../data/board";
import "./css/Board.css";

export default function Board() {
  // const longText = ;

  return (
    <div>
      <Header headerTitle1="Board Members" /> {/*Header*/}
      <div className="card HIDDEN">
      {board.map((boardMember, index) => (
        <div>
          <div className="card-body board-item">
            <section className="row-sm">
              <h4 className="text-light my-2 text-center">
                {/* {boardMember.name} */}
              </h4>
              <img
                className="img-fluid col-sm-4 rounded scale- float-start mx-md-3 board-img"
                src={boardMember.image}
                alt=""
                srcset=""
              />
              {/* <div></div> */}
              <h2 className="text-danger"> {boardMember.name}</h2>
              <ReadMore
                className="description col-sm-2"
                text={boardMember.portfolio}
                maxLength={850}
              />
            </section>
            {/* <div className="board-sep"></div> */}
        </div>
        <hr/>

        </div>

        
                  ))}

      </div>
      <Footer />
    </div>
  );
}
