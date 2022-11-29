import React from "react";
import { Row } from "react-bootstrap";
import copy from "copy-to-clipboard";
import {  AiOutlineCopy } from "react-icons/ai";

const copyToClipboard = (id) => {

  var c = document.getElementById(id).innerText;
  copy(c);
};

// export function VerifyOtpCode() {
//   return (
//     <>
//       <Row className="codebg">
//         <h3 className="text-white codehead p-3">URL:</h3>
//         <code className="text-white pt-5 pb-5">
//           http://194.195.113.218:8090/paymento/remitter-reg/verify-otp
//         </code>
//         <h3 className="text-white p-3">Method:</h3>
//         <p className="text-white p-3">POST</p>

//         <h3 className="text-white  p-3">Header:</h3>
//         <p className="output text-white ">
//           <br /> <code>"apiKey"</code>
//           <span>:</span>
//           "abs1nxxxxx"
//           <br />
//         </p>

//         <h3 className="text-white  p-3">Request:</h3>
//         <p className="output  text-white">
//           <br />
//           <code>"otp"</code> <span>: </span>
//           <code className="code-cyan"> "017111" </code> <br />
//           <code>"otpRefferenceId"</code> <span>: </span>
//           <code className="code-yellow">"URMDiiD2UQkIkkQy" </code> <br />
//           <code>"mobile"</code> <span>: </span>
//           <code className="code-cyan">"7902626443" </code> <br />
//           <code>"remitterType"</code> <span>: </span>
//           <code className="code-cyan">3 </code> <br />
//         </p>

//         <h3 className="text-white  p-3">Response:</h3>
//         <h5 className="text-white  p-3">SUCCESS </h5>
//         <p className="output text-white ">
//           <br /> <code>"status"</code> <span>: </span>
//           <code className="code-cyan">"200"</code>
//           <br /> <code>"success"</code> <span>: </span>
//           <code className="code-cyan">"true"</code>
//           <br /> <code>"message"</code> <span>: </span>
//           <code className="code-yellow">"OTP verified"</code>
//           <br /> <code>"responseCode"</code> <span>: </span>
//           <code className="code-cyan">"0"</code>
//           <br />
//         </p>
//       </Row>
//     </>
//   );
// }

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
          "http://194.195.113.218:8090/paymento/remitter-reg/verify-otp"
        </code>
        <br />
        <code className="text-white">payload = json.dumps</code>({" "}
        <p className="output link-heading text-white">
          <br />
          <code>"otp" </code> <span>: </span>
          <code className="code-cyan"> "017111",</code>
          <br />
          <code> "otpRefferenceId" </code> <span>: </span>
          <code className="code-cyan"> "URMDiiD2UQkIkkQy",</code>
          <br />
          <code> "mobile"</code> <span>: </span>
          <code className="code-cyan"> "7902626443"</code>
          <br />
          <code> "remitterType"</code> <span>: </span>
          <code className="code-cyan">  3</code>
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
          <br/><code className="text-white">RequestBody body = RequestBody.create(mediaType, <code className="code-yellow">"\r\n" <span className="output">\r\n        \"otp\":\"017111\",\r\n   <br/> \"otpRefferenceId\":\"URMDiiD2UQkIkkQy\",\r\n <br/>\"mobile\":\"7902626443\",\r\n    \"remitterType\":3\r\n</span><br/> \r\n\t      \r\n" <code className="text-white" >);</code> </code></code>
          <br/><code className="text-white">Request request = <code>new</code>  Request.Builder()</code>
          <br/><code className="text-white">.url( <code className="code-yellow" >"http://194.195.113.218:8090/paymento/remitter-reg/verify-otp"</code>)</code>
          <br/><code  className="text-white">.method(<code  className="code-yellow" >"POST"</code>, body)</code>
          <br/><code className="text-white">.addHeader(<code  className="code-yellow" >"apiKey"</code>, <code  className="code-yellow" >"apiKey"</code>)</code>
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
        <div>
          <br/> <code className="text-white">wget --no-check-certificate --quiet \</code>  
          <br/> <code className="text-white">--method POST \</code>
          <br/> <code className="text-white">  --timeout=0 \</code>
          <br/> <code className="text-white">  --header <code className="code-yellow"> 'apiKey':' \</code></code>
          <br/> <code className="text-white">--header  <code className="code-yellow"> 'Content-Type: application/json' \</code></code>
          <br/> <code className="text-white">--body-data '</code>  
          <p className="output link-heading text-white"><br/>       
          <code>"otp" </code> <span>: </span><code className="code-cyan"> "017111",</code><br />
          <code> "otpRefferenceId" </code> <span>: </span><code className="code-cyan"> "URMDiiD2UQkIkkQy"</code><br />
          <code> "mobile"</code> <span>: </span><code className="code-cyan"> "7902626443",</code><br />
          <code> "remitterType" </code> <span>: </span><code className="code-cyan"> 3</code><br />            
          </p>
          <br/> <code className="code-yellow">' \</code>
          <br/><code className="code-yellow">'http://194.195.113.218:8090/paymento/remitter-reg/verify-otp'</code>  
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
         <div>
 
          <br/> <code className="text-white">$curl = curl_init();</code>
          <br/><code className="text-white">curl_setopt_array($curl, <code>array</code>(</code>
          <br/><code>CURLOPT_URL =&#62;<code> 'http://194.195.113.218:8090/paymento/remitter-reg/verify-otp'</code>,</code>
          <br/><code className="text-white">CURLOPT_RETURNTRANSFER =&#62; <code>true</code>,</code>
          <br/><code className="text-white"> CURLOPT_ENCODING =&#62;<code className="code-yellow">''</code>,</code>
          <br/><code className="text-white"> CURLOPT_MAXREDIRS =&#62; 10,</code>
          <br/><code className="text-white"> CURLOPT_TIMEOUT =&#62; 0,</code>
          <br/><code className="text-white">   CURLOPT_FOLLOWLOCATION =&#62; <code>true</code>,</code>
          <br/><code className="text-white">CURLOPT_HTTP_VERSION =&#62; CURL_HTTP_VERSION_1_1,</code>
          <br/><code className="text-white"> CURLOPT_CUSTOMREQUEST =&#62;  <code className="code-yellow">'POST'</code>,</code>
          <br/><code className="text-white"> CURLOPT_POSTFIELDS =&#62;</code><code className="code-yellow"> '
          <br/>
          <code className="output code-yellow" ><br/>
          "otp":"017111",<br/>
          "otpRefferenceId":"URMDiiD2UQkIkkQy",<br/>
          "mobile":"7902626443",<br/>
          "remitterType":3,<br/>   
          </code>
           <br/>  
          ' ,<br/>
          <code className="text-white">CURLOPT_HTTPHEADER =&#62; <code>array</code> ( <br/>
          <code className="code-yellow">'apiKey: ', <br/>
          'Content-Type: application/json'</code><br/>
          </code>
 
          ),<br/>
          ));
         </code>
          <br/>
          <code className="text-white">$response = curl_exec($curl);</code>
          <br></br><code className="text-white">curl_close($curl);</code>
          <br/><code className="text-white"><code>echo </code>$response;</code>
          </div>
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