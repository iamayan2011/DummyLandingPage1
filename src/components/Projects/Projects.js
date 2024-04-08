import React from "react";
import "./Project.css";
import right from "../../assets/banner/Solidright.png";
import { Container } from "react-bootstrap";
import topright from "../../assets/banner/topright.png";

export default function Projects() {
  return (
    <div className="parentprojects" id='project'>
      <div className="d-flex row">
        <div className="d-flex col-12 col-lg-6">
          <Container>
            <div className="d-flex flex-row">
              <img
                src={right}
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
              <span className="aboutus">OUR BEST PROJECTS</span>
            </div>

            <div
              className="d-flex flex-col heading"
              style={{ lineHeight: "1" }}
            >
              Take A Look Our Work Gallery Recent Projects
            </div>
          </Container>
        </div>

        <div className="d-flex col-12 col-lg-6">
            <Container>
          <div className="description">
            We Are 100+ Professional Software Engineers With More Than 10 Years
            Of Experience In Delivering Superior
          </div>

          <div className="">
            <div className="d-flex flex-row justify-content-start mt-4">
              <button className="btnbn" style={{ width: "auto" }}>
                VIEW ALL TEAM
              </button>
              <img
                src={topright}
                alt=""
                style={{ padding: "0px", width: "54px", height: "54px" }}
              />
            </div>
          </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
