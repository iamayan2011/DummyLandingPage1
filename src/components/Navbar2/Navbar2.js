import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import down from "../../assets/navbar/down.png";
import cart from "../../assets/navbar/cart.png"
import search from "../../assets/navbar/order.png"
import right from "../../assets/navbar/right.png"
import './Navbar2.css'
import logo from '../../assets/images/logo.png'

export default function Navbar2() {
  return (
    <div className="parentnav align-items-center">
      {["xl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="navv ">
          <Container fluid className="align-self-center d-flex containerrr">
            <Navbar.Brand href="#"><img src={logo} alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center align-items-center flex-grow-1 pe-3 ">
                  <Nav.Link className="navtext d-flex " href="#home">
                    Home
                    <img
                      src={down}
                      alt=""
                      className="p-0 align-items-center"
                    ></img>
                  </Nav.Link>
                  <Nav.Link className="navtext d-flex " href="#about">
                    About Us
                  </Nav.Link>
                  <Nav.Link className="navtext d-flex " href="#work">
                    Pages
                    <img
                      src={down}
                      alt=""
                      className="p-0 align-items-center"
                    ></img>
                  </Nav.Link>
                  <Nav.Link className="navtext d-flex " href="#service">
                    Service
                    <img
                      src={down}
                      alt=""
                      className="p-0 align-items-center"
                    ></img>
                  </Nav.Link>
                  <Nav.Link className="navtext d-flex " href="#blog">
                    News & Event
                    <img
                      src={down}
                      alt=""
                      className="p-0 align-items-center"
                    ></img>
                  </Nav.Link>
                  <Nav.Link className="navtext d-flex " href="#contact">
                    Contact Us
                  </Nav.Link>
                  
                </Nav>
                <div className="d-flex align-items-center">
                <img src={cart} alt="cart" className='btn2 m-1'></img>
            <img src={search} alt="search" className='btn2 m-1'></img>
          <button className='btn1 m-1 d-flex align-items-center p-4'>GET QUOTE<img src={right} alt="" className='p-0 align-items-center'></img></button>
                  
                  
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}
