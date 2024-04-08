import React from "react";
import right from "../../assets/banner/Solidright.png";
import "./Testinomial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testcard from './testcard.png'

export default function Testinomial() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
  };
  return (
    <div className="parenttest" id='testi'>
      <center className="">
        <div className="d-flex flex-row justify-content-center">
          <img src={right} alt="" style={{ width: "24px", height: "24px" }} />
          <span className="aboutus">OUR TESTINOMIALS</span>
        </div>
        <div className="row">
          <div className="d-flex col-12 col-lg-3"></div>
          <div
            className="d-flex flex-row justify-content-center heading mb-5 mt-3 col-12 col-lg-6"
            style={{ lineHeight: "1" }}
          >
            What Our Clients Say About Us
          </div>
          <div className="d-flex col-12 col-lg-3"></div>
        </div>
      </center>
      <div>

      </div>
      <div className="center">
        <div className="slider-container m-5 ">
          <Slider {...settings}>
            <div>
              <img src={testcard} className="testcard" alt="" />
            </div>
            <div >
            <img src={testcard} className="testcard" alt="" />
            </div>
            <div >
            <img src={testcard} className="testcard" alt="" />
            </div>
            <div >
            <img src={testcard} className="testcard" alt="" />
            </div >
            <div>
            <img src={testcard} className="testcard" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
