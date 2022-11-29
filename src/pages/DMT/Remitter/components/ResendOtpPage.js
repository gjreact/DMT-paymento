import React from "react";
import { Row, Col, Table, Tab ,Tabs } from "react-bootstrap";
import Bar from "../../../SideBar/Bar";
import  { Java, Node, Php, Python, Shell } from "./subcomponents/ResendOtpCode";

function ResendOtpPage() {
  return (
    <>
      <Col className="col-12 col-sm-6">
        <Bar />
        <Row>
          <h2 className="mb-0 mt-0 heading2">Remitter Resend OTP</h2>
          <p className="px-4  mb-0 backroundP-tag">
            For any kind of reasons if the remitter send otp to get failed or
            the remitter not verified using the OTP, This endpoint using for
            resend the OTP
          </p>
          <span className="m my-5">
            <Table bordered>
              <thead>
                <tr>
                  <th>Si no.</th>
                  <th>HTTP Response Conde</th>
                  <th>Response Code</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>404</td>
                  <td>0</td>
                  <td>Remitter already exist</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>2</td>
                  <td>404</td>
                  <td>105</td>
                  <td>Enter a valid name</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>3</td>
                  <td>404</td>
                  <td>102</td>
                  <td>Invalid Mobile number</td>
                </tr>
              </tbody>
            </Table>
          </span>
        </Row>
      </Col>
      <Col className="col-12 col-sm-6 sideMenuColor" >
      <Row id="style-1" className="border border-2 rounded-3">
        <Tabs defaultActiveKey="python" className="tab ">
          <Tab eventKey="python" title="python"><Python /></Tab>
          <Tab eventKey="java" title="java"><Java /></Tab>
          <Tab eventKey="shell" title="shell"><Shell /></Tab>
          <Tab eventKey="node" title="node"><Node /></Tab>
          <Tab eventKey="php" title="php"><Php /></Tab>
        </Tabs>
      </Row>
      </Col>
    </>
  );
}

export default ResendOtpPage;
