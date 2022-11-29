import React from "react";
import { Row } from "react-bootstrap";
import copy from "copy-to-clipboard";
import {  AiOutlineCopy } from "react-icons/ai";

const copyToClipboard = (id) => {

  var c = document.getElementById(id).innerText;
  copy(c);
};

// export function SendOtpCode() {
//   return (
//     <>
//       <Row className="codebg">
//         {/* <h3 className="text-white codehead p-3">URL:</h3>
//         <code className="text-white pt-5 pb-5">
//           http://194.195.113.218:8090/paymento/remitter-reg/send-otp
//         </code>
//         <h3 className="text-white">Method:</h3>
//         <p className=" text-white p-3">POST</p>

//         <h3 className="text-white  p-3">Header:</h3>
//         <p className="output  text-white ">
//           <br /> <code>"apiKey"</code>
//           <span>:</span>
//           <code className="code-yellow">"abs1nxxxxx"</code>
//           <br />
//         </p>

//         <h3 className="text-white  p-3">Request:</h3>
//         <p className="output  text-white ">
//           <br /> <code>"remitterPhone"</code>
//           <span>:</span>
//           <code className="code-cyan">"7902900295"</code>
//           <br />
//           <code>"remitterName"</code>
//           <span>:</span>
//           <code className="code-yellow">"anu"</code>
//           <br />
//         </p> */}

//         <h3 className="text-white  p-3">Response:</h3>
//         <h5 className="text-white  p-3">SUCCESS </h5>
//         <p className="output  text-white ">
//           <br /> <code>"status" </code>
//           <span>: </span> <code className="code-cyan">"201"</code>
//           <br /> <code>"success"</code> <span>: </span>
//           <code className="code-cyan">"true"</code>
//           <br /> <code>"message"</code> <span>: </span>
//           <code>"OTP send successfully"</code>
//           <br /> <code>"responseCode"</code> <span>: </span>
//           <code className="code-cyan">"0"</code>
//           <br /> <code>"data"</code>
//           <p className="output-two  text-white">
//             <br />
//             <code>"remitterId"</code> <span>: </span>
//             <code className="code-cyan">15</code>
//             <br />
//             <code>"otpRefferenceId"</code> <span>: </span>
//             <code className="code-yellow">"2NEBGNVgCJ92agZg"</code>
//             <br />
//             <code>"mobile"</code> <span>: </span>
//             <code className="code-cyan">"7902666443"</code>
//             <br />
//             <code>"name"</code> <span>: </span>
//             <code className="code-yellow">"Anju"</code>
//             <br />
//             <code>"userId"</code> <span>: </span>
//             <code className="code-cyan">3</code>
//             <br />
//             <code>"remitterType"</code> <span>: </span>
//             <code className="code-cyan">3</code>
//             <br />
//           </p>
//         </p>

//         <h5 className="text-white  p-3 ">UNKNOWN RESPONSE </h5>
//         <p className="output  text-white ">
//           <br /> <code>"status"</code> <span>: </span>
//           <code className="code-cyan">"404"</code>
//           <br /> <code>"success"</code> <span>: </span>
//           <code className="code-cyan">"false"</code>
//           <br /> <code>"message"</code> <span>: </span>
//           <code className="code-yellow">" "</code>
//           <br /> <code>"responseCode"</code> <span>: </span>
//           <code className="code-yellow">" "</code>
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
        <div>
    
            <br/> <code>import</code>  <code className="text-white">requests</code>
            <br/> <code>import</code> <code className="text-white">json</code><br/>
            <code className="text-white"> url =</code> <code className="code-yellow">"http://194.195.113.218:8090/paymento/remitter-reg/send-otp"</code><br/>
            <code className="text-white">payload = json.dumps(</code><code className="output link-heading text-white"><br/>
  
         
            <code>"remitterPhone" </code> <span>: </span><code className="code-cyan"> "7902626443",</code><br />
            <code>"remitterName" </code> <span>: </span><code className="code-cyan"> "anu"</code><br />
          
          
           )</code><br/>

           <code className="text-white">
           headers = <p className="output link-heading text-white"><br/>
           <code>'apiKey'</code>: <code className="code-yellow">'apiKey'</code> ,<br/>
           <code>'Content-Type'</code>:<code className="code-yellow"> 'application/json'</code><br/>
           </p>
          </code>
          <code className="text-white">
           response = requests.request(<code className="code-yellow">"POST"</code>, url, headers=headers, data=payload)<br/>
   
         <code>print</code>(response.text )
         </code>
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
          <br/><code className="text-white">OkHttpClient client = <code >new</code>  OkHttpClient().newnewBuilder()</code>
          <br/><code className="text-white">.build();</code>
          <br/><code className="text-white">MediaType mediaType = MediaType.parse( <code className="code-yellow">"application/json"</code>);</code>
          <br/><code className="text-white">RequestBody body = RequestBody.create(mediaType, <code className="code-yellow"> <span className="output">\r\n        \"remitterphone\":\"7902626443\",\r\n    \"remitterName\":\"anu\"\r\n </span>  \r\n" <code className="text-white" >);</code> </code></code>
          <br/><code className="text-white">Request request = <code>new</code>  Request.Builder()</code>
          <br/><code className="text-white">.url( <code className="code-yellow" >"http://194.195.113.218:8090/paymento/remitter-reg/send-otp"</code>)</code>
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
          <AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("Shell")} />
      </div>
      <p id="Shell">
      <div>
   
          <br/> <code className="text-white">wget --no-check-certificate --quiet \</code>  
          <br/> <code className="text-white">--method POST \</code>
          <br/> <code className="text-white">  --timeout=0 \</code>
          <br/> <code className="text-white">  --header <code className="code-yellow"> 'apiKey':'apiKey' \</code></code>
          <br/> <code className="text-white">--header  <code className="code-yellow"> 'Content-Type: application/json' \</code></code>
          <br/> <code className="text-white">--body-data '</code>
          <p className="output link-heading text-white"><br/>       
         <code>"remitterPhone" </code> <span>: </span><code className="code-cyan"> "7902626443",</code><br />
         <code> "remitterName" </code> <span>: </span><code className="code-cyan"> "anu"</code><br />
        </p>     
        <br/> <code className="code-yellow">' \</code>
        <br/><code className="code-yellow">'http://194.195.113.218:8090/paymento/remitter-reg/send-otp'</code>
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
          <br/><code>CURLOPT_URL =&#62;<code> 'http://194.195.113.218:8090/paymento/remitter-reg/send-otp'</code>,</code>
          <br/><code className="text-white">CURLOPT_RETURNTRANSFER =&#62; <code>true</code>,</code>
          <br/><code className="text-white"> CURLOPT_ENCODING =&#62;<code className="code-yellow">''</code>,</code>
          <br/><code className="text-white"> CURLOPT_MAXREDIRS =&#62; 10,</code>
          <br/><code className="text-white"> CURLOPT_TIMEOUT =&#62; 0,</code>
          <br/><code className="text-white">   CURLOPT_FOLLOWLOCATION =&#62; <code>true</code>,</code>
          <br/><code className="text-white">CURLOPT_HTTP_VERSION =&#62; CURL_HTTP_VERSION_1_1,</code>
          <br/><code className="text-white"> CURLOPT_CUSTOMREQUEST =&#62;  <code className="code-yellow">'POST'</code>,</code>
          <br/><code className="text-white"> CURLOPT_POSTFIELDS =&#62;</code><code className="code-yellow"> '
          <code className="output code-yellow" ><br/>
          "remitterPhone":"7902626443",<br/>
          "remitterName":"anu",<br/>
        </code>
        <br/>  
          '          ,<br/>
          <code className="text-white">CURLOPT_HTTPHEADER =&#62; <code>array</code> ( <br/>
          <code className="code-yellow">'apiKey': 'apiKey', <br/>
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
//     </Row>
    
//     </>
//   )
// }