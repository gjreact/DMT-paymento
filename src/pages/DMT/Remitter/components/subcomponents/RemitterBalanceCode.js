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

export function Node(){
  return(
    <>
     <Row className="codebg">
      <div className="copyclip" >
          <AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("node")} />
      </div>
      <p id="node">

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
