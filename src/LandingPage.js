
import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

import LandingPageHeader from "./LandingPageHeader.js";

function LandingPage() {
  return (
    <>
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Let's talk about this application!</h2>
                <h5 className="description">
                CORAL-C is an application that host a collection of resources
                ​containing a vast number of governmental services as well as 
                non-governmental and nonprofit organizations that also offer
                services ​for low-income communities​.
                </h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-favourite-28" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Healthcare</h4>
                    <p className="description">
                      Affordable medical assistance.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-cart-simple" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Food & Supplies</h4>
                    <p>
                      Free or affordable food programs.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-umbrella-13" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Shelter & Homeless Assistance</h4>
                    <p>
                      Temporary shelter for displaced or homeless people.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Meet the Team!</h2>
            <Row>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("./assets/img/ayush-kumar.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Ayush</CardTitle>
                        <h6 className="card-category">Front-End & Project Manager</h6>
                      </div>
                    </a>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("./assets/img/matt-spadaro.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Matt</CardTitle>
                        <h6 className="card-category">Back-End & Server-Side Developer</h6>
                      </div>
                    </a>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("./assets/img/kevin-gomez.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Yosimy</CardTitle>
                        <h6 className="card-category"> Front-End & Database Management</h6>
                      </div>
                    </a>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("./assets/img/kevin-gomez.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Kevin</CardTitle>
                        <h6 className="card-category">Front-End & UX/UI Deisgner</h6>
                      </div>
                    </a>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
