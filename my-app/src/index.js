import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Col, Container, ModalFooter, Nav, Navbar, Row } from 'react-bootstrap';
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons';


const TopMenu = () => (
  <div className="justify-content-center pb-2" id="topMenu">
    <Navbar>
      <Container>

        <Nav className="justify-content-start">
          <a className="navbar-brand" href="#"><img src="http://courses.ics.hawaii.edu/ics314f22/morea/ui-frameworks/murphyslogowhite.png" width="200px"></img></a>
        </Nav>
        <Nav className="nav justify-content-end">
          <Nav.Link>Home
          </Nav.Link>
          <Nav.Link>
            About Us
          </Nav.Link>
          <Nav.Link>St. Patrick's Day
          </Nav.Link>
          <Nav.Link>
            To Go Ordering
          </Nav.Link>
          <Nav.Link><Instagram/></Nav.Link>
          <Nav.Link><Facebook/></Nav.Link>
          <Nav.Link><Twitter/></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </div>

);

const BottomMenu = () => (

  <footer className="mt-auto py-3" id="bottomMenu">
    <Container>
      <Row>
        <Col>
          Lunch
          <hr/>
          Monday - Friday: 11:00am - 2:30pm<br/>
          Saturday - Sunday: Not open
        </Col>
        <Col>
          Bar
          <hr/>
          Monday - Friday: From 11:00am to closing<br/>
          Saturday - Sunday: Not open
        </Col>
        <Col>
          Dinner
          <hr/>
          Monday - Friday: 5:00pm - 9:00pm<br/>
          Saturday - Sunday: Not open
        </Col>
      </Row>
    </Container>
  </footer>


);

const CenterText = () => (
  <Row className="align-items-center justify-content-center" id="centerText">
    <Col className="col-8 text-center">
      <h1>Now accepting reservations for St Patrick's Day</h1>
      <h1>Please call 808-531-0422 for reservations</h1>
      <h1>St Patrick's Day To-Go Orders can be ordered on our website menu.</h1>
    </Col>
  </Row>

);

const Murphys = () => (
  <div>
    <TopMenu/>
    <CenterText/>
    <BottomMenu/>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Murphys/>);