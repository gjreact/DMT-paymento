import React from "react";
import { Col, Row, Tab, Table, Tabs } from "react-bootstrap";
import { Java, Php, Python, Shell } from "./subcomponents/BeneficiaryRegisterCode";

function BeneficiaryRegister() {
  return (
    <>
      <Col className="col-12 col-sm-6">
        <Row id="beneficiarycreate">
          <h2 className="mb-0 mt-0 heading2">Register Beneficiary</h2>
          <p className="px-4  mb-0 backroundP-tag">
            Beneficiary need to be registered in the system through the
            remitter's mobile number and bank details.
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
                  <td>501</td>
                  <td>Beneficiary already exist</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>2</td>
                  <td>404</td>
                  <td>4104</td>
                  <td>Enter a valid name</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>3</td>
                  <td>404</td>
                  <td>105</td>
                  <td>Invaid bank code</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>4</td>
                  <td>404</td>
                  <td>106</td>
                  <td>Sender Does Not exist</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>5</td>
                  <td>404</td>
                  <td>107</td>
                  <td>Invalid Account number</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>6</td>
                  <td>404</td>
                  <td>108</td>
                  <td>Invalid bank IFSC</td>
                </tr>
              </tbody>
            </Table>
          </span>
          <h4 className="text-secondary">URL:</h4>
          <code className="text-info">
            http://194.195.113.218:8090/paymento/beneficiary-reg/add-beneficiary
          </code>
          <h5 className="text-secondary">Method:</h5>
          <p className="text-secondary">POST</p>

          <h4 className="text-secondary">Header:</h4>
          <p className="output">
            <br /> <code>"apiKey"</code>
            <span>:</span>
            "abs1nxxxxx"
            <br />
          </p>

          <h4 className="text-secondary">Request:</h4>
          <p className="output">
            <br />
            <code>"beneficiaryName"</code> <span>: </span>
            <code className="code-yellow">"anu",</code>
            <br />
            <code>"beneficiaryBankId" </code> <span>: </span>
            <code className="code-cyan"> 36,</code>
            <br />
            <code>"remitterMobileNumber" </code> <span>: </span>
            <code className="code-cyan"> "7902900295,</code>
            <br />
            <code>"beneficiaryMobileNumber"</code> <span>: </span>
            <code className="code-cyan">790290029,</code>
            <br />
            <code>"accountNumber"</code> <span>: </span>
            <code className="code-cyan">8865488888,</code>
            <br />
            <code>"address" </code> <span>: </span>
            <code className="code-yellow">Calicut,</code>
            <br />
            <code>"ifscCode" </code> <span>: </span>
            <code className="code-yellow">UTIB0002916,</code>
            <br />
            <code>"accountHolderName" </code> <span>: </span>
            <code className="code-yellow"> Venu,</code>
            <br />
            <code>"branchName"</code> <span>: </span>
            <code className="code-yellow">Mavoor Road</code> <br />
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

export default BeneficiaryRegister;
