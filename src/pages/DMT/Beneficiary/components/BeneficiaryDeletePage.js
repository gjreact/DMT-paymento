import React from "react";
import { Col, Row, Tab, Table, Tabs } from "react-bootstrap";
import Bar from "../../../SideBar/Bar";
import { Java, Php, Python, Shell } from "./subcomponents/BeneficiaryDeleteCode";

function BeneficiaryDeletePage() {
  return (
    <>
      <Col className="col-12 col-sm-6">
        <Bar />
        <Row id="beneficiarydelete">
          <h2 className="mb-0 mt-0 heading2">Delete Beneficiary</h2>
          <p className="px-4 mb-0 backroundP-tag">
            Use this API to remove an existing beneficiary from a list of added
            beneficiaries.
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
                  <td>400</td>
                  <td>0</td>
                  <td>Beneficiary not found</td>
                </tr>
              </tbody>
            </Table>
          </span>
          <h4 className="text-secondary">URL:</h4>
        <code className="text-info">
          http://194.195.113.218:8090/paymento/remitter-reg/delete-beneficiary
        </code>
        <h3 className="text-secondary pt-2">Method:</h3>
        <p className="text-secondary">POST</p>

        <h3 className="text-secondary">Header:</h3>
        <p className="output" ><br /> <code>"apiKey"</code>
          <span>
            :
          </span>
          <code className="code-yellow">"abs1nxxxxx"</code><br />
        </p>

        <h3 className="text-secondary">Request:</h3>
        <p className="output" ><br /> <code>"remitterPhone"</code>
          <span>
            :
          </span>
          <code className="code-cyan"> "7902626443"</code><br />

        </p>
        </Row>
      </Col>
      <Col className="col-12 col-sm-6 sideMenuColor ">
        <Row id="style-1" className="border border-2 rounded-3">
        <Tabs defaultActiveKey="python" className="tab ">
          <Tab eventKey="python" title="python"><Python /></Tab>
          <Tab eventKey="java" title="java"><Java /></Tab>
          <Tab eventKey="shell" title="shell"><Shell /></Tab>
          <Tab eventKey="php" title="php"><Php /></Tab>
        </Tabs>
      </Row>
      </Col>
    </>
  );
}

export default BeneficiaryDeletePage;
