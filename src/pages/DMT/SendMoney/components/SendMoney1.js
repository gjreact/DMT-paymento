import React from "react";
import { Col, Row, Tab, Table, Tabs } from "react-bootstrap";
import {
  Java,
  Php,
  Python,
  Sendmoney1code,
  Shell,
} from "./subcomponents/Sendmoney1code";

function SendMoney1() {
  return (
    <>
      <Col className="col-12 col-sm-6">
        <Row>
          <h2 className="mb-0 mt-0 heading2">Send Money</h2>
          <p className="px-4  mb-0 backroundP-tag">
            When you are in an UAT Environment try this account numbers for
            success , processing and failure response
            <br />
            <span>Account number</span>
            <br />
            9087718721 - failure
            <br />
            123456789 - success
            <br />
            9087718722 – unknown
            <br />
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
                  <td>114</td>
                  <td>
                    Invalid amount please enter a valid amount (100 to 5000)
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>2</td>
                  <td>404</td>
                  <td>117</td>
                  <td>Beneficiary Not found</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>3</td>
                  <td>400</td>
                  <td>106</td>
                  <td>Remitter does not exist</td>
                </tr>
              </tbody>
            </Table>
          </span>
          <h3 className="text-secondary p-3">URL:</h3>
          <code className="text-info">
            http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money
          </code>

          <h3 className="text-secondary p-3">Request:</h3>
          <p className="output  text-white ">
            <br /> <code>"beneficiaryId"</code> <span>: </span>
            <code className="code-cyan">36</code>
            <br /> <code>"remitterId"</code> <span>: </span>
            <code className="code-cyan">26</code>
            <br /> <code>"Amount"</code> <span>: </span>
            <code className="code-yellow">200</code>
            <br />
          </p>

          <h3 className="text-secondary  p-3">Header:</h3>
          <p className="output  text-white ">
            <br /> <code>"apiKey"</code>
            <span>:</span>
            <code className="code-yellow"> "abs1nxxxxx"</code>
            <br />
          </p>
        </Row>
      </Col>
      <Col id="style-1" className="col-12 col-sm-6 sideMenuColor scrollbar">
        <Row id="style-1" className="border border-2 rounded-3">
          <Tabs defaultActiveKey="python" className="tab ">
            <Tab eventKey="Response" title="response" className="text-white">
              <Sendmoney1code />
            </Tab>
            <Tab eventKey="python" title="python">
              <Python />
            </Tab>
            <Tab eventKey="java" title="java">
              <Java />
            </Tab>
            <Tab eventKey="shell" title="shell">
              <Shell />
            </Tab>
            <Tab eventKey="PHP" title="PHP">
              <Php />
            </Tab>
          </Tabs>
        </Row>
      </Col>
    </>
  );
}

export default SendMoney1;
