import React from "react";
import "./Marketing.css";
import img1 from "./image.png";
import right from "../../assets/banner/Solidright.png";
import { Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import ProgressBar2 from "../ProgressBar/ProgressBar2";
import topright from "../../assets/banner/topright.png";
import call from "./call.png"

export default function Marketing() {
  return (
    <div className="parentMark" id='marketing'>
      <div className="d-flex row">
        <div className="d-flex col-12 col-xl-6">
          <img
            src={img1}
            style={{ width: "97%", padding: "2% 10% 2% 10%" }}
            alt=""
          />
        </div>
        <div className="d-flex col-12 col-xl-6">
          <Container>
            <div className="d-flex flex-row">
              <img
                src={right}
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
              <span className="aboutus">WITH SEO OPTIMIZATION</span>
            </div>
            <div className="d-flex flex-col heading">
              Marketing And Creative Solutions Seo
            </div>
            <div className="d-flex flex-col description">
              We are 100+ professional software engineers with more than 10 year
              of experience in delivering superior products.
            </div>
            <br></br>
            <div className="m-1">
              <div className="d-flex row" style={{ marginBottom: "5px" }}>
                <div className="d-flex col-6 point1">Finance Consulting</div>
                <div className="d-flex col-6 aboutus justify-content-end pr-2">
                  80
                </div>
              </div>
              <ProgressBar2></ProgressBar2>
            </div>

            <div className="mt-3">
              <div className="d-flex row" style={{ marginBottom: "5px" }}>
                <div className="d-flex col-6 point1">Finance Consulting</div>
                <div className="d-flex col-6 aboutus justify-content-end pr-2">
                  80
                </div>
              </div>
              <ProgressBar2></ProgressBar2>
            </div>

            <div className="mt-3">
              <div className="d-flex row" style={{ marginBottom: "5px" }}>
                <div className="d-flex col-6 point1">Finance Consulting</div>
                <div className="d-flex col-6 aboutus justify-content-end pr-2">
                  80
                </div>
              </div>
              <ProgressBar2></ProgressBar2>
            </div>

            <div className="d-flex row mt-5">
              <div className="d-flex col-12 col-md-6 view">
                <div className="d-flex flex-row ">
                  <button className="btnbn" style={{ width: "auto" }}>
                    VIEW ALL SERVICES
                  </button>
                  <img src={topright} alt="" style={{ padding: "0px", width:"54px", height:"54px" }} />
                </div>
              </div>

              <div className="d-flex col-12 col-md-6 justify-content-center callus1">
                <div className="d-flex row">
                    <div className="d-flex col-3">
                        <img src={call} alt="" style={{width:"54px", height:"54px"}}/>

                    </div>

                    <div className="d-flex col-9">
                        <div className="d-fex flex-col">
                        <div className="aboutus callus">
                            Call Us Anytime
                        </div>
                        <div className="number">
                        0215 6856 9875
                        </div>
                        </div>
                    </div>

                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
