import React from "react";
import logo from "../asset/images/logo.png";

import "../theme/theme.css";
import "../asset/css/heading.css";
import "../asset/css/basiclayout.css";

import { Col, Container, Row } from "react-bootstrap";

import SideMenu from "../pages/SideBar/SideMenu";

function BasicLayout({ children }) {
  return (
    <>
      <Container fluid className="margin-0 containerr">
        <Row className="Roww">
          <Col
            className="d-none d-md-block sideMenuColor left-section"
            style={{ maxWidth: "270px" }}
          >
            <div className="mt-3 d-flex justify-content-center">
              <img
                className="align-center"
                style={{ width: "100%", maxWidth: "150px" }}
                src={logo}
                alt="Paymento_Logo"
              />
            </div>
            <div>
              <SideMenu />
            </div>
            <h6>Documentation Powered by Paymento</h6>
          </Col>

          <Col className="xs-12 md-10 bg-white overflow-scroll ">
            <Row className="Roww1">

              {children}
              
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BasicLayout;
