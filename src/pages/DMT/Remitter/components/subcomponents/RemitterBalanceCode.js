import React from "react";
import { Row } from "react-bootstrap";
import copy from "copy-to-clipboard";
import {  AiOutlineCopy } from "react-icons/ai";

const copyToClipboard = (id) => {

  var c = document.getElementById(id).innerText;
  copy(c);
};

export function RemitterBalanceCode() {
  return (
    <>
      <Row className="codebg">
        <h3 className="text-white codehead p-3">URL:</h3>
        <code className="text-white pt-5 pb-5 ">
          http://194.195.113.218:8090/paymento/remitter-reg/check-balance
        </code>
        <h3 className="text-white p-3">Method:</h3>
        <p className="text-white p-3">POST</p>

        <h3 className="text-white p-3">Header:</h3>
        <p className="output text-white ">
          <br /> <code>"apiKey"</code>
          <span>:</span>
          <code className="code-yellow">"abs1nxxxxx"</code>
          <br />
        </p>

        <h3 className="text-white p-3 ">Request:</h3>
        <p className="output  text-white">
          <br />
          <code> "remitterphone"</code> <span>: </span>
          <code className="code-cyan">"7902626443"</code> <br />
        </p>

        <h3 className="text-white p-3">Response:</h3>
        <h5 className="text-white p-3">SUCCESS </h5>
        <p className="output text-white ">
          <br /> <code>"status"</code> <span>: </span>
          <code className="code-cyan">"200"</code>
          <br /> <code>"success" </code>
          <span>: </span> <code className="code-cyan">"true"</code>
          <br /> <code>"message"</code> <span>: </span>
          <code className="code-yellow">"Remitter Balance"</code>
          <br /> <code>"responseCode"</code> <span>: </span>
          <code className="code-cyan">"0"</code>
          <br /> <code>"data" </code>
          <p className="output-two text-white">
            <br />
            <code>"remitterId"</code> <span>: </span>
            <code className="code-cyan">29</code>
            <br />
            <code>"remitterName"</code> <span>: </span>
            <code className="code-yellow">"dil"</code>
            <br />
            <code>"mobileNumber"</code> <span>: </span>
            <code className="code-cyan">"7902626443"</code>
            <br />
            <code>"availableBalance" </code>
            <span>: </span> <code className="code-cyan">25000.0</code>
            <br />
            <code>"totalBalance" </code>
            <span>: </span> <code className="code-cyan">25000.0</code>
            <br />
          </p>
        </p>
      </Row>
    </>
  );
}


export function Python(){
  return(
    <>
     <Row className="codebg">
      <div className="copyclip" >
          <AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("python")} />
      </div>
      <p id="python">
      <br /> <code>import</code> <code className="text-white">requests</code>
        <br /> <code>import</code> <code className="text-white">json</code>
        <br />
        <code className="text-white"> url =</code>{" "}
        <code className="code-yellow">
          "http://194.195.113.218:8090/paymento/remitter-reg/check-balance"
        </code>
        <br />
        <code className="text-white">payload = <code className="code-yellow">"
        <code className="output link-heading code-yellow">\r\n  <br/>  \"remitterphone\":\"7902626443\",\r\n </code><br/>\r\n"</code>
        </code>
         <br />
        <code className="text-white">
          headers ={" "}
          <p className="output link-heading text-white">
            <br />
            <code>'apiKey'</code>: <code className="code-yellow">''</code>{" "}
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
          <code>print</code>(response.text )
        </code>
      </p>
      </Row>
    </>
  )
}

export function Java(){
  return(
    <>
     <Row className="codebg">
      <div className="copyclip" >
          <AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("java")} />
      </div>
      <p id="java">
         <br/><code className="text-white">OkHttpClient client = <code >new</code>  OkHttpClient().newnewBuilder()</code>
          <br/><code className="text-white">.build();</code>
          <br/><code className="text-white">MediaType mediaType = MediaType.parse( <code className="code-yellow">"application/json"</code>);</code>
          <br/><code className="text-white">RequestBody body = RequestBody.create(mediaType, <code className="code-yellow">"<span className="output">\r\n  <br/>      \"remitterphone\":\"7902626443\",\r\n </span> \r\n ");</code> </code>
          <br/><code className="text-white">Request request = <code>new</code>  Request.Builder()</code>
          <br/><code className="text-white">.url( <code className="code-yellow" >"http://194.195.113.218:8090/paymento/remitter-reg/check-balance"</code>)</code>
          <br/><code  className="text-white">.method(<code  className="code-yellow" >"POST"</code>, body)</code>
          <br/><code className="text-white">.addHeader(<code  className="code-yellow" >"apiKey"</code>, <code  className="code-yellow" >" "</code>)</code>
          <br/><code className="text-white">.addHeader(<code  className="code-yellow" >"Content-Type", "application/json"</code>)</code>
           <br/> <code className="text-white">.build();</code>
           <br/> <code className="text-white">Response response = client.newCall(request).execute();</code>
       </p>
      </Row>
    </>
  )
}


export function Shell(){
  return(
    <>
     <Row className="codebg">
      <div className="copyclip" >
          <AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("shell")} />
      </div>
      <p id="shell">

      </p>
      </Row>
    </>
  )
}



export function Php(){
  return(
    <>
     <Row className="codebg">
      <div className="copyclip" >
          <AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("php")} />
      </div>
      <p id="php">

      </p>
      </Row>
    </>
  )
}


// export function Node(){
//   return(
//     <>
//      <Row className="codebg">
//       <div className="copyclip" >
//           <AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("node")} />
//       </div>
//       <p id="node">

//       </p>
//       </Row>
//     </>
//   )
// }

