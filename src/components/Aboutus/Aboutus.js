import React from "react";
import right from "../../assets/banner/Solidright.png";
import "./Aboutus.css";
import { Container } from "react-bootstrap";
import topright from "../../assets/banner/topright.png";
import group17 from "./Group17.png";
import tick from "./tick.png";

export default function Aboutus() {
  return (
    <div
      className="aboutusmain"
      style={{ margin: "4.625rem" }} id='about'
    >
      <div className="d-flex row">
        <div className="d-flex col-12 col-xl-6">
          <Container>
            <div className="d-flex flex-row">
              <img
                src={right}
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
              <span className="aboutus">ABOUT US</span>
            </div>
            <br></br>
            <div className="bold1 align-items-center flex-column">
              We Want To Give You The Best Service
            </div>
            <div className="description">
              We are 100+ professional software engineers with more than 10 year
              of experience in delivering superior products Believe it because
              you have seen it. Here are real numbers
            </div>

            <div className="d-flex row">
              <div className="d-flex col-12 col-md-6">
                <Container className="">
                  <div className="d-flex twenty4 flex-column">24</div>
                  <div className="d-flex flex-column exp">
                    Year <br></br>Experience
                  </div>
                  <div className="d-flex col-12" style={{ marginTop: "40px" }}>
                    <button className="btnbn">GET STARTED</button>
                    <img src={topright} alt="" style={{ padding: "0px" }} />
                  </div>
                </Container>
              </div>
              <div className="d-flex col-12 col-md-6">
                <Container>
                  <br></br>
                  <div className="d-flex flex-row my-3">
                    <img
                      src={tick}
                      style={{ width: "24px", height: "24px" }}
                      alt=""
                    />
                    <div className="point1 mx-1"> Product Engineering</div>
                  </div>
                  <div className="d-flex flex-row my-3">
                    <img
                      src={tick}
                      style={{ width: "24px", height: "24px" }}
                      alt=""
                    />
                    <div className="point1 mx-1"> Digital Services</div>
                  </div>
                  <div className="d-flex flex-row my-3">
                    <img
                      src={tick}
                      style={{ width: "24px", height: "24px" }}
                      alt=""
                    />
                    <div className="point1 mx-1"> IT Consultancy</div>
                  </div>
                  <div className="d-flex flex-row my-3">
                    <img
                      src={tick}
                      style={{ width: "24px", height: "24px" }}
                      alt=""
                    />
                    <div className="point1 mx-1"> Digital Services</div>
                  </div>
                </Container>
              </div>
            </div>
          </Container>
        </div>
        <div className="d-flex col-12 col-xl-6">
          <img src={group17} style={{width:"95%", height:"auto"}}alt="" />
        </div>
      </div>
    </div>
  );
}
