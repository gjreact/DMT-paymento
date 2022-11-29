import React from "react";
import { Row } from "react-bootstrap";
import copy from "copy-to-clipboard";
import {  AiOutlineCopy } from "react-icons/ai";

const copyToClipboard = (id) => {

  var c = document.getElementById(id).innerText;
  copy(c);
};

export function Python(){
  return(
    <>
     <Row className="codebg">
      <div className="copyclip" >
          <AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("python")} />
      </div>
      <p id="python">
      <div>
          <br/> <code>import</code>  <code className="text-white">requests</code>
          <br/> <code>import</code> <code className="text-white">json</code><br/>
          <code className="text-white"> url =</code> <code className="code-yellow">"localhost:8084/paymento/beneficiary-reg/delete-beneficiary"</code><br/><br/>
          <code className="text-white">payload = json.dumps</code>( <span className="output link-heading text-white"><br/>
          <code>"beneficiaryId"</code>  <span>: </span> <code className="code-yellow">10</code><br />
b         </span>) <br/><br/>
          <code className="text-white">
          headers = <span className="output link-heading text-white"><br/>
          <code>'apiKey'</code>: <code className="code-yellow">'apiKey'</code> ,<br/>
          <code >'Authorization'</code>: <code className="code-yellow">'Bearer  token'</code>,<br/>
          <code>'Content-Type'</code>:<code className="code-yellow"> 'application/json'</code><br/>
          </span>
          </code><br/>
          <code className="text-white">response = requests.request</code>(<code className="code-yellow">"POST"</code><code className="text-white">, url, headers=headers, data=payload)</code><br/>
          <code className="text-white">print(response.text)</code>
          </div>
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
        <div>         
          <code className="text-white">OkHttpClient client =</code> <code>new</code><code className="text-white"> OkHttpClient().newBuilder()  <br />
              .build();</code>
          <br/><code className="text-white">MediaType mediaType = MediaType.parse(</code><code className="code-yellow">"application/json"</code><code className="text-white">);</code>
            <br/><code className="text-white">RequestBody body =  RequestBody.create(mediaType,</code>  <code className="code-yellow">"\r\n  </code>
            <br/> <code className="code-yellow">\"beneficiaryId\":10\r\n"</code>);
            <br /><code className="text-white">Request request = <code>new</code> Request.Builder()</code> <br />
            <code className="text-white">.url(</code><code className="code-yellow">"localhost:8084/paymento/beneficiary-reg/delete-beneficiary"</code>) <br />
            <code className="text-white">.method(</code><code className="code-yellow">"POST"</code><code className="text-white">,body)</code><br />
            <code className="text-white">.addHeader(</code><code className="code-yellow">"apiKey"</code><code className="code-yellow">, apiKey</code>) <br />
            <code className="text-white">.addHeader(</code><code className="code-yellow">"Authorization"</code><code className="code-yellow">, "Bearer token"</code>) <br/>
            <code className="text-white">.addHeader(</code><code className="code-yellow">"Content-Type"</code><code className="code-yellow">, "application/json"</code>)  <br />
            <code className="text-white">.build();</code><br/>
            <code className="text-white">Response response = client.newCall(request).execute();</code> 
        </div>
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
         <div>
          <br/> <code className="text-white">wget --no-check-certificate --quiet \</code>
          <br/> <code className="text-white"> --method POST \</code>
          <br/> <code className="text-white"> --timeout=0 \</code>

          <br/> <code className="text-white"> --header <code className="code-yellow">'apiKey: apiKey' </code></code>\
          <br/> <code className="text-white"> --header <code className="code-yellow">'Authorization: Bearer token' </code></code>\
          <br/> <code className="text-white"> --header <code className="code-yellow"> 'Content-Type: application/json' </code></code>\
          <br/> <code className="text-white"> --body-data </code>
          <span>'</span><span className="output link-heading text-white"><br />
          <code>"beneficiaryId"</code>  <span>: </span> <code className="code-yellow">10</code><br />   
          </span><span>'   \</span> <br />     
          <code className="code-yellow">'localhost:8084/paymento/beneficiary-reg/delete-beneficiary'</code>
          </div>
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
        <code>	&#60;&#63;php</code>

        <code className="text-white">$curl = curl_init();</code>

        <code className="text-white">curl_setopt_array(<code className="code-yelllow">$curl,<code className="text-white"> array(</code></code></code>
        <code>CURLOPT_URL =&#62; <code className="code-yellow">'localhost:8084/paymento/beneficiary-reg/delete-beneficiary',</code></code>
        <code>CURLOPT_RETURNTRANSFER =&#62; <code className="code-yellow">true,</code></code> 
        <code>CURLOPT_ENCODING =&#62;  <code className="code-yellow">'',</code></code>
        <code>CURLOPT_MAXREDIRS =&#62;  <code className="code-cyan">10,</code></code>
        <code>CURLOPT_TIMEOUT =&#62;  <code className="code-cyan">0,</code></code>
        <code>CURLOPT_FOLLOWLOCATION =&#62;  <code className="code-yellow">true,</code></code>
        <code>CURLOPT_HTTP_VERSION =&#62;  <code className="code-yellow">CURL_HTTP_VERSION_1_1,</code></code>
        <code>CURLOPT_CUSTOMREQUEST =&#62;  <code className="code-yellow">'POST',</code></code>
        <code>CURLOPT_POSTFIELDS =&#62; <code>'</code></code>
        <span className="output text-white"><br />
        <code>"beneficiaryId"</code>  <span>: </span> <code className="code-yellow">10</code><br />      
         </span><code>',</code>
          <code>CURLOPT_HTTPHEADER =&#62; <code>array(</code></code>
          <code>'apiKey <span>: </span> <code className="code-yellow">apiKey',</code></code> <br />
          <code>"Authorization <span>: </span><code className="code-cyan">Bearer  token', </code></code><br />
          <code>'Content-Type  <span>: </span><code className="code-cyan"> application/json'</code></code><br />
          <code>),</code>
          <code  className="code-yellow">$response = curl_exec($curl);</code><br />
          <code className="code-yellow">curl_close($curl);</code>
          <code>echo <code className="code-yellow">$response</code></code>;
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