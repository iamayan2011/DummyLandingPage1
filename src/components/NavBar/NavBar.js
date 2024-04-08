import React from 'react'
import logo from "../../assets/images/logo.png"
import './Navbar.css'
import {Navbar} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import cart from "../../assets/navbar/cart.png"
import search from "../../assets/navbar/order.png"
import down from "../../assets/navbar/down.png"
import right from "../../assets/navbar/right.png"

export default function NavBar() {
  return (
    <div className='wrap'>
       <Navbar expand="lg" className="nav" >
       <Navbar.Brand href="#home"><img alt='logo' src={logo}></img></Navbar.Brand>
      
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='justify-content-end mr-3'/>
        
        <Navbar.Collapse id="basic-navbar-nav " className=" "style={{alignContent:"center", paddingLeft:'10rem'}}>
        <center>
          <Nav className="me-auto nav1 justify-content-center" style={{}}>
            <Nav.Link className='navtext d-flex p-0' href="#home">Home<img src={down} alt="" className='p-0 align-items-center'></img></Nav.Link>
            <Nav.Link className='navtext d-flex p-0' href="#link">About Us</Nav.Link>
            <Nav.Link className='navtext d-flex p-0' href="#link">Pages<img src={down} alt="" className='p-0 align-items-center'></img></Nav.Link>
            <Nav.Link className='navtext d-flex p-0' href="#link">Service<img src={down} alt="" className='p-0 align-items-center'></img></Nav.Link>
            <Nav.Link className='navtext d-flex p-0' href="#link">News & Event<img src={down} alt="" className='p-0 align-items-center'></img></Nav.Link>
            <Nav.Link className='navtext d-flex p-0' href="#link">Contact Us</Nav.Link>
           
          </Nav>
          </center>
          <Container className='d-flex  align-items-center justify-content-end'>
            <img src={cart} alt="cart" className='btn2 m-1'></img>
            <img src={search} alt="search" className='btn2 m-3'></img>
          <button className='btn1 m-1 d-flex align-items-center p-4'>GET QUOTE<img src={right} alt="" className='p-0 align-items-center'></img></button>
          </Container>
          
        </Navbar.Collapse>
        
      
    </Navbar>
      
    </div>
  )
}
