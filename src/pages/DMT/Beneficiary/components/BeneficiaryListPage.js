import React from "react";
import { Col, Row, Tab, Table, Tabs } from "react-bootstrap";
import Bar from "../../../SideBar/Bar";
import { Java, Node, Php, Python, Shell } from "./subcomponents/BeneficiaryListCode";

function BeneficiaryListPage() {
  return (
    <>
      <Col className="col-12 col-sm-6">
        <Bar />
        <Row id="beneficiarylist">
          <h2 className="mb-0 mt-0 heading2">List Beneficiary</h2>
          <p className="px-4  mb-0 backroundP-tag">
            Get list of recipients for a Remitter
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
                  <td>Not found</td>
                </tr>
              </tbody>
            </Table>
          </span>
        </Row>
      </Col>
      <Col className="col-12 col-sm-6 sideMenuColor ">
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

export default BeneficiaryListPage;
