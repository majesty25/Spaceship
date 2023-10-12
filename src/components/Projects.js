import React from 'react';
import styled from 'styled-components';
import ProjectsCard from './ProjectsCard';
import Slider from "react-slick";


const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
`;

const projects = [
  { id: 1, title: 'Project 1', description: 'Description for Project 1' },
  { id: 2, title: 'Project 2', description: 'Description for Project 2' },
  // Add more projects here
];

const programs = [
  {
    title: "Previous Programs",
    items: [
      {
        image: "/images/207.jpg",
        description: "Description of program 1",
      },
      {
        image: "/images/9.jpg",
        description: "Description of program 2",
      },
      // Add more program items as needed
    ],
  },
];

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
        slidesToShow: 4,
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

const ProjectList = () => {
  return (
    <div>
 

{/*PROGRAMS START*/}
{programs.map((program, programIndex) => (
  <div className="causes" key={programIndex}>
    <div className="container">
      <div className="section-header text-center">
        <h2>{program.title}</h2>
      </div>
      <Slider className="causes-carousel pt-2" {...settings}>
        {program.items.map((item, itemIndex) => (
          <div className="causes-item m-2" key={itemIndex}>
            <div className="causes-img">
              <img className="m-1" src={item.image} alt={`Images${itemIndex}`} />
            </div>
            <div className="causes-text">
              <p className="text-justify custom-truncate">{item.description}</p>
              <button
                type="button"
                // onClick={() => handleItemClick(item)}
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

      
    </div>
  </div>
))}
{/*PROGRAMS END*/}

    </div>
  );
};

export default ProjectList;
