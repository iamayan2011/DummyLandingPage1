import React from "react";
import girl from "./girl.png";
import "./Newsletter.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Newsletter() {
  return (
    <div className="parentnewsletter">
      <div className="d-flex row">
     

        <div className="d-flex col-12 newsbg">
          <Container>
            <div className="d-flex row">
              <div className="d-flex col-0 col-lg-5">
                <img src={girl} alt="" className="girlnews"/>
              </div>

              <div className="d-flex col-12 col-xl-7 justify-content-center align-items-end">
                <Container>
                  <div className="heading headingnewss" style={{ color: "white", lineHeight:"1.25"}}>
                    Subscribe To Our <u>NewsLetter!</u>
                  </div>
                  <div className="decription mt-4" style={{ color: "white", marginRight:"10%" }}>
                    We are 100+ professional software engineers with more than
                    10 years in delive ring super products it because you've
                    seen it.
                  </div>

                  <div className="bg-white p-1" style={{borderRadius: "8px", margin: "10% 10% 10% 0%"}}>
                    <InputGroup className="">
                      <Form.Control
                        placeholder="Your Email"
                        aria-label="Your Email"
                        aria-describedby="basic-addon2"
                        className="p-2"
                        style={{border:"0px"}}
                      />
                      <Button variant="" id="" className="btn1" style={{borderRadius:"8px"}}>
                        Submit
                      </Button>
                    </InputGroup>
                  </div>
                </Container>
              </div>
            </div>
          </Container>
        </div>

     
      </div>
    </div>
  );
}
