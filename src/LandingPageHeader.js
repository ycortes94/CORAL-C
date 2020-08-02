import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Button, Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("./assets/img/landing-page.png") + ")" 
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>CORAL-C</h1>
            <h3>A Collection of Resources for Low Income Communities</h3>
            <h3>A Web App by Ayush, Matt, Yosimy and Kevin</h3>
            <br />
              <Row>
                <Col className="ml-auto mr-auto" md="2">
                  <Nav navbar>
                  <NavItem>
                    <NavLink to="/app" tag={Link}>
                        <Button className="btn-fill" color="danger" size="lg">
                          Enter!
                        </Button>
                    </NavLink>
                  </NavItem>
                  </Nav>
                </Col>
              </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
