import React from "react";
import "./Bestservice.css";
import right from "../../assets/banner/Solidright.png";
import carrow from "./arrow.png";
import img1 from "./1.png";
import topright from "../../assets/banner/topright.png";

export default function Bestservice() {
  return (
    <div className="parentbest" id='service'>
      <center className="">
        <div className="d-flex flex-row justify-content-center">
          <img src={right} alt="" style={{ width: "24px", height: "24px" }} />
          <span className="aboutus">OUR BEST SERVICES</span>
        </div>
        <div className="d-flex flex-row justify-content-center heading mb-5">
          We Provide Best Services
        </div>
      </center>

      <div className="d-flex row justify-content-center">
        <div className="card1 flex-column d-flex col-12 col-md-6 col-xl-4">
          <div className="d-flex flex-row justify-content-center cardimg">
            <img src={img1} alt="" />
          </div>
          <div className="cardname d-flex flex-row justify-content-center">
            Strategy & Planning
          </div>
          <div className="carddesc d-flex flex-row justify-content-center">
            Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus
            sodales parturien lore arcu eros vel erat pede netus qu.
          </div>
          <div className="cardarrow d-flex flex-row justify-content-center">
            <img src={carrow} alt="" />
          </div>
        </div>

        <div className="card1 flex-column d-flex col-12 col-md-6 col-xl-4">
          <div className="d-flex flex-row justify-content-center cardimg">
            <img src={img1} alt="" />
          </div>
          <div className="cardname d-flex flex-row justify-content-center">
            Strategy & Planning
          </div>
          <div className="carddesc d-flex flex-row justify-content-center">
            Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus
            sodales parturien lore arcu eros vel erat pede netus qu.
          </div>
          <div className="cardarrow d-flex flex-row justify-content-center">
            <img src={carrow} alt="" />
          </div>
        </div>

        <div className="card1 flex-column d-flex col-12 col-md-6 col-xl-4">
          <div className="d-flex flex-row justify-content-center cardimg">
            <img src={img1} alt="" />
          </div>
          <div className="cardname d-flex flex-row justify-content-center">
            Strategy & Planning
          </div>
          <div className="carddesc d-flex flex-row justify-content-center">
            Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus
            sodales parturien lore arcu eros vel erat pede netus qu.
          </div>
          <div className="cardarrow d-flex flex-row justify-content-center">
            <img src={carrow} alt="" />
          </div>
        </div>

        <div className="card1 flex-column d-flex col-12 col-md-6 col-xl-4">
          <div className="d-flex flex-row justify-content-center cardimg">
            <img src={img1} alt="" />
          </div>
          <div className="cardname d-flex flex-row justify-content-center">
            Strategy & Planning
          </div>
          <div className="carddesc d-flex flex-row justify-content-center">
            Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus
            sodales parturien lore arcu eros vel erat pede netus qu.
          </div>
          <div className="cardarrow d-flex flex-row justify-content-center">
            <img src={carrow} alt="" />
          </div>
        </div>

        <div className="card1 flex-column d-flex col-12 col-md-6 col-xl-4">
          <div className="d-flex flex-row justify-content-center cardimg">
            <img src={img1} alt="" />
          </div>
          <div className="cardname d-flex flex-row justify-content-center">
            Strategy & Planning
          </div>
          <div className="carddesc d-flex flex-row justify-content-center">
            Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus
            sodales parturien lore arcu eros vel erat pede netus qu.
          </div>
          <div className="cardarrow d-flex flex-row justify-content-center">
            <img src={carrow} alt="" />
          </div>
        </div>

        <div className="card1 flex-column d-flex col-12 col-md-6 col-xl-4">
          <div className="d-flex flex-row justify-content-center cardimg">
            <img src={img1} alt="" />
          </div>
          <div className="cardname d-flex flex-row justify-content-center">
            Strategy & Planning
          </div>
          <div className="carddesc d-flex flex-row justify-content-center">
            Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus
            sodales parturien lore arcu eros vel erat pede netus qu.
          </div>
          <div className="cardarrow d-flex flex-row justify-content-center">
            <img src={carrow} alt="" />
          </div>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-center m-5">
      
                    <button className="btnbn"   style={{width: "auto"}}>VIEW ALL SERVICES</button>
                    <img src={topright} alt="" style={{ padding: "0px" }} />
                  
        </div>


    </div>
  );
}
