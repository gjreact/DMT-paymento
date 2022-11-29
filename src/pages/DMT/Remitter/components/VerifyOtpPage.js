import React from "react";
import { Row, Col, Table, Tab, Tabs } from "react-bootstrap";
import Bar from "../../../SideBar/Bar";
import  { Java, Php, Python, Shell } from "./subcomponents/VerifyOtpCode";

function VerifyOtpPage() {
  return (
    <>
      <Col className="col-12 col-sm-6">
        <Bar />
        <Row>
          <h2 className="mb-0 mt-0 heading2">Verify Remitter OTP</h2>
          <p className="px-4  mb-0 backroundP-tag">
            As mentioned in Remitter information, if a remitter is not found
            registered in the system, then by this API remitter can register
            themselves, by filling below details with OTP and ReferenceID
            received from " Remitter send OTP"
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
                  <td>208</td>
                  <td>81</td>
                  <td>Invalid OTP</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>2</td>
                  <td>208</td>
                  <td>82</td>
                  <td>Invalid ReferenceID</td>
                </tr>
              </tbody>
            </Table>
          </span>
          <h3 className="text-secondary">URL:</h3>
        <code className="text-info ">
          http://194.195.113.218:8090/paymento/remitter-reg/verify-otp
        </code>
        <h3 className="text-secondary">Method:</h3>
        <p className="text-secondary">POST</p>

        <h3 className="text-secondary">Header:</h3>
        <p className="output ">
          <br /> <code>"apiKey"</code>
          <span>:</span>
          "abs1nxxxxx"
          <br />
        </p>

        <h3 className="text-secondary  p-3">Request:</h3>
        <p className="output">
          <br />
          <code>"otp"</code> <span>: </span>
          <code className="code-cyan"> "017111" </code> <br />
          <code>"otpRefferenceId"</code> <span>: </span>
          <code className="code-yellow">"URMDiiD2UQkIkkQy" </code> <br />
          <code>"mobile"</code> <span>: </span>
          <code className="code-cyan">"7902626443" </code> <br />
          <code>"remitterType"</code> <span>: </span>
          <code className="code-cyan">3 </code> <br />
        </p>

        </Row>
      </Col>
      <Col className="col-12 col-sm-6 sideMenuColor " >
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

export default VerifyOtpPage;
