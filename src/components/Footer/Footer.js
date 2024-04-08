import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import logo from "./logo.png";
import payment from "./payment.png";
import { Link } from "react-router-dom";

import Newsletter from "../Newsletter/Newsletter";
export default function Footer() {
  return (
    <footer className="parentfooter" id='contact'>
        <Newsletter style={{ zIndex: "20" }}></Newsletter>
      <Container className="p-0">
        
        <div className="p-0 m-0 parentfoot1">
          <div
            className="d-flex row footer1"
            style={{ margin: "7% 10% 1% 7%" }}
          >
            <div className="d-flex col-12 col-md-5 align-items-start mt-0 mb-4">
              <Container className="logopay">
                <div>
                  <img src={logo} alt="" />
                </div>

                <div className="mt-4 footerdesc" style={{ marginRight: "5%" }}>
                  Improve Efficiency, Provide A Better Customer Experience With
                  Modern Technolo Services Available
                </div>

                <div className="mt-4">
                  <img src={payment} alt="" />
                </div>
              </Container>
            </div>

            <div className="d-flex col-12 col-md-6 col-xl-2">
              <Container>
                <div className="footerres">Resources</div>

                <ul
                  style={{
                    listStyle: "none",
                    paddingLeft: "0px",
                    marginTop: "32px",
                  }}
                >
                  <li className="footerlist">Carrier</li>
                  <li className="footerlist">Carrier</li>
                  <li className="footerlist">Carrier</li>
                  <li className="footerlist">Carrier</li>
                </ul>
              </Container>
            </div>

            <div className="d-flex col-12 col-md-6 col-xl-2">
              <Container>
                <div className="footerres">Resources</div>

                <ul
                  style={{
                    listStyle: "none",
                    paddingLeft: "0px",
                    marginTop: "32px",
                  }}
                >
                  <li className="footerlist">Carrier</li>
                  <li className="footerlist">Carrier</li>
                  <li className="footerlist">Carrier</li>
                  <li className="footerlist">Carrier</li>
                </ul>
              </Container>
            </div>

            <div className="d-flex col-12 col-md-6 col-xl-3">
              <Container>
                <div className="footerres">Resources</div>

                <ul
                  style={{
                    listStyle: "none",
                    paddingLeft: "0px",
                    marginTop: "32px",
                  }}
                >
                  <li className="footerlist">Carrier</li>
                  <li className="footerlist">Carrier</li>
                  <li className="footerlist">Carrier</li>
                  <li className="footerlist">Carrier</li>
                </ul>
              </Container>
            </div>
          </div>
        </div>

        <img src="./line.png" style={{width:"100%", height:"5px", color:"white"}} alt="" />
<div style={{width:"100%", height:"2px", backgroundColor:"white", margin:"0px"}}></div>
        <div className="copyright d-flex">
          Copyright © 2024, All Right Reserved
        </div>
      </Container>
    </footer>
  );
}
