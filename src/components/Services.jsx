import React from 'react'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/images/web_development.jpg";
import img2 from "../assets/images/Power-BI-header.jpg";
import img3 from "../assets/images/1_hTcNktVB9wrVT-CgUZogIw.png";
import img4 from "../assets/images/mern-stack-1024x576.png";

const Services = () => {
  return (
    <div className='services'>
        <Carousel infiniteLoop
         autoPlay showStatus={false} 
        showArrows={false} 
        showThumbs={false} 
        interval={1000}> 
            <div>
                <img src={img1} alt="Items1" className="carousel-image"/>
                <p className='legend'>Web development</p>
            </div>
            <div>
                <img src={img2} alt="Items2" className="carousel-image"/>
                <p className='legend'>Data Analyst</p>
            </div>
            <div>
                <img src={img3} alt="Items2" className="carousel-image"/>
                <p className='legend'>Full Stack Development</p>
            </div>
            <div>
                <img src={img4} alt="Items2" className="carousel-image"/>
                <p className='legend'>MERN Stack Development</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services