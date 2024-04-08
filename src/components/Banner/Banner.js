import React from "react";
import { Container } from "react-bootstrap";
import bgimage from "../../assets/banner/bg.png";
import "./Banner.css";
import girl from "../../assets/banner/girl.png";
import card from "../../assets/banner/frame.png";
import solidright from "../../assets/banner/Solidright.png";
import topright from "../../assets/banner/topright.png";
import watch from "../../assets/banner/watch.png";

export default function Banner() {
  return (
    <div className="container-fluid" id='home'>
      <div
        className="banner row"
        style={{ height: "100%", width: "auto", maxWidth: "100vw" }}
      >
        <div className="col-12 col-xl-6 d-flex align-items-center justify-content-center flex-row px-5">
          <div className="d-flex flex-column">
            <img src={girl} alt="" className="align-items-bottom p-0 girl" />
            <img
              src={card}
              alt=""
              className="align-items-bottom mr-10 p-0 card"
            />
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <Container className="cont">
            <div className="d-flex col-12">
              <img
                src={solidright}
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
              <span className="welcome">WELCOME TO JYTHU</span>
            </div>
            <div className="bold align-items-center col-10">
              A Marketing <span className="agency">Agency</span> To Grow Your
              Business
            </div>
            <div className="d-flex col-10 description">
              We are 100+ professional software engineers with more than 10 year
              of experience in delivering superior products Believe it because
              you have seen it. Here are real numbers
            </div>
            <div className="row buttondiv">
              <div className="d-flex col-12 col-md-5">
                <button className="btnbn">GET STARTED</button>
                <img src={topright} alt="" style={{ padding: "0px" }} />
              </div>
              <div className="d-flex col-12 col-md-5 justify-content-start watch">
                <img src={watch} alt="" style={{}} />
              </div>
            </div>
            <br></br>
          </Container>
        </div>
        {/* <img alt='' src={bgimage}></img> */}
      </div>
      <br></br>
    </div>
  );
}
