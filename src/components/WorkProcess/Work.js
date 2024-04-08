import React from "react";
import right from "../../assets/banner/Solidright.png";
import circcard from "./circcard.png";
import { Container } from "react-bootstrap";
import "./Work.css";

export default function Work() {
  return (
    <div className="parentwork" id='work'>
      <center className="">
        <div className="d-flex flex-row justify-content-center">
          <img src={right} alt="" style={{ width: "24px", height: "24px" }} />
          <span className="aboutus">OUR WORK PROCESS</span>
        </div>
        <div className="row">
          <div className="d-flex col-12 col-lg-3"></div>
          <div
            className="d-flex flex-row justify-content-center heading mb-5 mt-3 col-12 col-lg-6"
            style={{ lineHeight: "1" }}
          >
            A Simple, Yet Powerful And Efficient Process
          </div>
          <div className="d-flex col-12 col-lg-3"></div>
        </div>
      </center>

      <div className="d-flex row ml-5">
        <div className="d-flex col-12 col-md-6 col-xl-4 justify-content-center flex-col">
          <Container className="justify-content-center m-4">
            <div className="d-flex justify-content-center">
              <img src={circcard} alt="" className="" />
            </div>
            <div className="d-flex justify-content-center pt-2 cardname1">
              1. MARKETING STRATEGY
            </div>
            <div className="carddesc carddesc1">
              Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent
              vestibulum pulvinar torqu ent.{" "}
            </div>
          </Container>
        </div>

        <div className="d-flex col-12 col-md-6 col-xl-4 justify-content-center flex-col">
          <Container className="justify-content-center m-4">
            <div className="d-flex justify-content-center">
              <img src={circcard} alt="" className="" />
            </div>
            <div className="d-flex justify-content-center pt-2 cardname1">
              1. MARKETING PLAN
            </div>
            <div className="carddesc carddesc1">
              Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent
              vestibulum pulvinar torqu ent.{" "}
            </div>
          </Container>
        </div>

        <div className="d-flex col-12 col-md-6 col-xl-4 justify-content-center flex-col">
          <Container className="justify-content-center m-4">
            <div className="d-flex justify-content-center">
              <img src={circcard} alt="" className="" />
            </div>
            <div className="d-flex justify-content-center pt-2 cardname1">
              1. MARKETING PLAN
            </div>
            <div className="carddesc carddesc1">
              Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent
              vestibulum pulvinar torqu ent.{" "}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
