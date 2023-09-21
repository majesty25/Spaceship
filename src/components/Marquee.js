import React from 'react';
import './css/Marquee.css';

function Marquee(props) {
  return (
    <div className="marquee-container mt-0 p-2 rounded d-none d-sm-block">
      <div className="marquee">        
        <span className='p-5'>MoLEX Foundation Africa - Giving Back to Society</span> 
        <span className='p-5'>Upcoming: "SHEROS IN STEM - 2024"</span>
        {/* <span className='p-5'>{props.Content}</span> */}
      </div>
    </div>
  );
}

export default Marquee;
