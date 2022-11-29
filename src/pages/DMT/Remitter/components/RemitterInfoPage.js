import React from "react";
import { Row, Col, Table, Tabs, Tab } from "react-bootstrap";
import "../../../../asset/css/code.css";
import {Python, Java, Shell, Node, Php} from "./subcomponents/RemitterinfoCode";

function RemitterInfoPage() {
  return (
    <>
      <Col className="col-12 col-sm-6 ">
        <Row>
          <h2 className="mb-0 mt-0 heading2">Remitter Information</h2>
          <p className="px-4  mb-0 backroundP-tag">
            Using this API You can use this API to check if the customer has
            been created on our platform. If not, you must create the customer
            before using Eko related services (like Money Transfer) for him/her.
          </p>
          <span className="m my-4">
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
                  <td>505</td>
                  <td>Remitter Doesn’t exist</td>
                </tr>
              </tbody>
            </Table>
          </span>
          <h4 className="text-secondary">URL:</h4>
          <code className="text-info">
            http://194.195.113.218:8090/paymento/remitter-reg/remitter-verify
          </code>

          <h5 className="text-secondary ">Request:</h5>
          <p className="output  text-white">
            <br /> <code> "remitterPhone"</code>
            <span>:</span>
            <span>"7902900295"</span>
            <br />
          </p>

          <h5 className="text-secondary  p-3">Header:</h5>
          <p className="output  text-white ">
            <br /> <code>"apiKey"</code>
            <span>:</span>
            <code className="code-yellow"> "abs1nxxxxx"</code>
            <br />
          </p>
        </Row>
      </Col>
      <Col  className="col-12 col-sm-6 sideMenuColor ">
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

export default RemitterInfoPage;
