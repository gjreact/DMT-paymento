import React from "react";
import { Row } from "react-bootstrap";
import copy from "copy-to-clipboard";
import {  AiOutlineCopy } from "react-icons/ai";

const copyToClipboard = (id) => {
  var c = document.getElementById(id).innerText;
  copy(c);
};

export function Sendmoney1code() {
  return (
    <>
      <Row className="codebg">
      <div className="copyclip" >
          <AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("s")} />
      </div>
      <p id="s">
        <h3 className="text-white  p-3">Response:</h3>
        <h5 className="text-white ">Success Response : </h5>
        <p className="output  text-white ">
          <br /> <code>"status"</code> <span>: </span>
          <code className="code-cyan">"200"</code>
          <br /> <code>"success"</code> <span>: </span>
          <code className="code-cyan">"true"</code>
          <br /> <code>"message"</code> <span>: </span>
          <code className="code-yellow">"Sendmoney Success"</code>
          <br /> <code>"responseCode"</code> <span>: </span>
          <code className="code-cyan">1</code>
          <br /> <code>"data"</code>
          <p className="output-two  text-white">
            <br />
            <code>"statusCode"</code> <span>: </span>
            <code className="code-yellow">0</code>
            <br />
            <code>"transactionId"</code> <span>: </span>
            <code className="code-yellow">"I22313011897"</code>
            <br />
            <code>"amount"</code> <span>: </span>
            <code className="code-yellow">200.0</code>
            <br />
            <code>"utrNumber"</code> <span>: </span>
            <code className="code-yellow">"927019161118"</code>
            <br />
          </p>
        </p>
        <h5 className="text-white  p-3">Send money failed response:</h5>
        <p className="output text-white ">
          <br /> <code>"status"</code> <span>: </span>
          <code className="code-cyan">"400"</code>
          <br /> <code>"success"</code> <span>: </span>
          <code className="code-cyan"> "false"</code>
          <br /> <code>"message"</code> <span>: </span>
          <code className="code-yellow">"Sendmoney Failed"</code>
          <br /> <code>"responseCode"</code> <span>: </span>
          <code className="code-cyan"> 0</code>
          <br /> <code>"data"</code>
          <p className="output-two text-white">
            <br />
            <code>"statusCode"</code> <span>: </span>
            <code className="code-yellow">0</code>
            <br />
            <code>"transactionId"</code> <span>: </span>
            <code className="code-yellow">"I22313011919"</code>
            <br />
            <code>"amount"</code> <span>: </span>
            <code className="code-yellow">200.0</code>
            <br />
            <code>"utrNumber" </code>
            <span>: </span>
            <code className="code-yellow">"927019161118"</code>
          </p>
        </p>
        <h5 className="text-white p-3">Send money processing response:</h5>
        <p className="output text-white ">
          <br /> <code>"status"</code> <span>: </span>
          <code className="code-cyan">"201"</code>
          <br /> <code>"success"</code> <span>: </span>
          <code className="code-cyan">"true"</code>
          <br /> <code>"message"</code> <span>: </span>
          <code className="code-yellow">"Sendmoney processing"</code>
          <br /> <code>"responseCode"</code> <span>: </span>
          <code className="code-cyan">2</code>
          <br /> <code>"data"</code>
          <p className="output-two text-white">
            <br />
            <code>"statusCode"</code> <span>: </span>
            <code className="code-cyan">0</code>
            <br />
            <code>"transactionId"</code> <span>: </span>
            <code className="code-cyan">"I22313011920"</code>
            <br />
            <code>"amount"</code> <span>: </span>
            <code className="code-cyan">200.0</code>
            <br />
            <code>"utrNumber"</code> <span>: </span>
            <code className="code-cyan">"927019161118"</code>
            <br />
          </p>
        </p>
        </p>
      </Row>
    </>
  );
}

export function Python() {
  return (
    <>
      <Row className="codebg">
      <div className="copyclip" >
          <AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("p")} />
      </div>
      <p id="p">
        <p>Python - Requests</p>
        <br /> <code>import</code> <code className="text-white">requests</code>
        <br /> <code>import</code> <code className="text-white">json</code>
        <br />
        <code className="text-white"> url =</code>{" "}
        <code className="code-yellow">
          "http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money"
        </code>
        <br />
        <code className="text-white">payload = json.dumps</code>({" "}
        <p className="output link-heading text-white">
          <br />
          <code>"beneficiaryBankId" </code> <span>: </span>
          <code className="code-cyan"> 36,</code>
          <br />
          <code>"remitterId" </code> <span>: </span>
          <code className="code-cyan"> 26,</code>
          <br />
          <code> "Amount"</code> <span>: </span>
          <code className="code-cyan"> 200</code>
          <br />
        </p>
        ) <br />
        <code className="text-white">
          headers ={" "}
          <p className="output link-heading text-white">
            <br />
            <code>'apiKey'</code>: <code className="code-yellow">'apiKey'</code>{" "}
            ,
            <br />
            <code>'Content-Type'</code>:
            <code className="code-yellow"> 'application/json'</code>
            <br />
          </p>
        </code>
        <code className="text-white">
          response = requests.request(
          <code className="code-yellow">"POST"</code>, url, headers=headers,
          data=payload)
          <br />
          <code>print</code>(response.text className="text-white")
        </code>
        </p>
      </Row>
    </>
  );
}

export function Java() {
  return (
    <>
      <Row className="codebg">
      <div className="copyclip" >
          <AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("j")} />
      </div>
      <p id="j">
        <br />
        <code className="text-white">
          OkHttpClient client = <code>new</code> OkHttpClient().newnewBuilder()
        </code>
        <br />
        <code className="text-white">.build();</code>
        <br />
        <code className="text-white">
          MediaType mediaType = MediaType.parse({" "}
          <code className="code-yellow">"application/json"</code>);
        </code>
        <br />
        <code className="text-white">
          RequestBody body = RequestBody.create(mediaType,
        </code>{" "}
        <code className="code-yellow">
          "\r\n{" "}
          <span className="output">
            \r\n \"beneficiaryId\":36, \r\n \"remitterId\":26,\r\n
            \"Amount\":200\r\n{" "}
          </span>{" "}
          \r\n\r\n\t \r\n" <code className="text-white">);</code>{" "}
        </code>
        <br />
        <code className="text-white">
          Request request = <code>new</code> Request.Builder()
        </code>
        <br />
        <code className="text-white">
          .url({" "}
          <code className="code-yellow">
            "http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money"
          </code>
          )
        </code>
        <br />
        <code className="text-white">
          .method(<code className="code-yellow">"POST"</code>, body)
        </code>
        <br />
        <code className="text-white">
          .addHeader(<code className="code-yellow">"apiKey"</code>,{" "}
          <code className="code-yellow">
            "lScaZNyjCrMrTq1AeTWFK9zEEnlMl9No"
          </code>
          )
        </code>
        <br />
        <code className="text-white">
          .addHeader(
          <code className="code-yellow">
            "Content-Type", "application/json"
          </code>
          )
        </code>
        <br /> <code className="text-white">.build();</code>
        <br />{" "}
        <code className="text-white">
          Response response = client.newCall(request).execute();
        </code>
        </p>
      </Row>
    </>
  );
}

export function Shell() {
  return (
    <>
      <Row className="codebg">
      <div className="copyclip" >
          <AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("shell")} />
      </div>
      <p id="shell">
        <p>shell</p>
        <br />{" "}
        <code className="text-white">
          wget --no-check-certificate --quiet \
        </code>
        <br /> <code className="text-white">--method POST \</code>
        <br /> <code className="text-white"> --timeout=0 \</code>
        <br />{" "}
        <code className="text-white">
          {" "}
          --header{" "}
          <code className="code-yellow">
            {" "}
            'apiKey: lScaZNyjCrMrTq1AeTWFK9zEEnlMl9No' \
          </code>
        </code>
        <br />{" "}
        <code className="text-white">
          --header{" "}
          <code className="code-yellow">
            {" "}
            'Content-Type: application/json' \
          </code>
        </code>
        <br /> <code className="text-white">--body-data '</code>
        <p className="output link-heading text-white">
          <br />
          <code>"beneficiaryBankId" </code> <span>: </span>
          <code className="code-cyan"> 36,</code>
          <br />
          <code>"remitterId" </code> <span>: </span>
          <code className="code-cyan"> 26,</code>
          <br />
          <code> "Amount"</code> <span>: </span>
          <code className="code-cyan"> 200</code>
          <br />
        </p>
        <br /> <code className="code-yellow">' \</code>
        <br />
        <code className="code-yellow">
          'http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money'
        </code>
        </p>
      </Row>
    </>
  );
}

export function Php() {
  return (
    <>
      <Row className="codebg">
      <div className="copyclip" >
          <AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("php")} />
      </div>
      <p id="php">
        <h2>php curl</h2>
        <br /> <code className="text-white">$curl = curl_init();</code>
        <br />
        <code className="text-white">
          curl_setopt_array($curl, <code>array</code>(
        </code>
        <br />
        <code>
          CURLOPT_URL =&#62;
          <code>
            {" "}
            'http://194.195.113.218:8090/paymento/sendmoney-api/api-send-money'
          </code>
          ,
        </code>
        <br />
        <code className="text-white">
          CURLOPT_RETURNTRANSFER =&#62; <code>true</code>,
        </code>
        <br />
        <code className="text-white">
          {" "}
          CURLOPT_ENCODING =&#62;<code className="code-yellow">''</code>,
        </code>
        <br />
        <code className="text-white"> CURLOPT_MAXREDIRS =&#62; 10,</code>
        <br />
        <code className="text-white"> CURLOPT_TIMEOUT =&#62; 0,</code>
        <br />
        <code className="text-white">
          {" "}
          CURLOPT_FOLLOWLOCATION =&#62; <code>true</code>,
        </code>
        <br />
        <code className="text-white">
          CURLOPT_HTTP_VERSION =&#62; CURL_HTTP_VERSION_1_1,
        </code>
        <br />
        <code className="text-white">
          {" "}
          CURLOPT_CUSTOMREQUEST =&#62;{" "}
          <code className="code-yellow">'POST'</code>,
        </code>
        <br />
        <code className="text-white"> CURLOPT_POSTFIELDS =&#62;</code>
        <code className="code-yellow">
          {" "}
          '
          <code className="output code-yellow">
            <br />
            "beneficiaryId":36,
            <br />
            "remitterId":26,
            <br />
            "Amount":200
            <br />
          </code>
          <br />
          ' ,<br />
          <code className="text-white">
            CURLOPT_HTTPHEADER =&#62; <code>array</code> ( <br />
            <code className="code-yellow">
              'apiKey: lScaZNyjCrMrTq1AeTWFK9zEEnlMl9No', <br />
              'Content-Type: application/json'
            </code>
            <br />
          </code>
          ),
          <br />
          ));
        </code>
        <br />
        <code className="text-white">$response = curl_exec($curl);</code>
        <br />
        <code className="text-white">
          <code>echo </code>$response;
        </code>
        </p>
      </Row>
    </>
  );
}
