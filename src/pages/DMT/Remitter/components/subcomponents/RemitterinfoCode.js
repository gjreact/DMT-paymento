import React from "react";
import { Row } from "react-bootstrap";
import copy from "copy-to-clipboard";
import {  AiOutlineCopy } from "react-icons/ai";

const copyToClipboard = (id) => {

  var c = document.getElementById(id).innerText;
  copy(c);
};

// export function RemitterinfoCode() {
//   return (
//     <>
//       <Row className="codebg">
//       <div className="copyclip" >
//           <AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("p")} />
//       </div>
//         <p id="p">
//         <h6 className="text-secondary ">If Remitter Exist : </h6>
//         <p className="output  text-white ">
//           <br /> <code>"status"</code> <span>: </span>
//           <code className="code-cyan">"200"</code>,
//           <br /> <code>"success"</code> <span>: </span>
//           <code className="code-cyan">"true"</code>,
//           <br /> <code>"message"</code> <span>: </span>
//           <code className="code-yellow">"Remitter Exists"</code>,
//           <br /> <code>"responseCode"</code> <span>: </span>
//           <code className="code-cyan">"0"</code>,
//           <br /> <code>"data"</code>
//           <p className="output-two  text-white">
//             <br />
//             <code>"remitterPhone"</code> <span>: </span>
//             <code className="code-cyan">"7902900295"</code>,
//             <br />
//             <code>"remitterName"</code> <span>: </span>
//             <code className="code-yellow">"dilsha"</code>,
//             <br />
//             <code>"remitterAddress" </code>
//             <span>: </span> <code className="code-yellow">"veluthedath"</code>
//             ,
//             <br />
//             <code>"remitterPinCode"</code> <span>: </span>
//             <code className="code-cyan">"528963"</code>,
//             <br />
//             <code>"remitterCity"</code> <span>: </span>
//             <code className="code-yellow">"calicut"</code>,
//             <br />
//             <code>"remitterState"</code> <span>: </span>
//             <code className="code-yellow">"kerala"</code>,
//             <br />
//             <code>"remitterStatus"</code> <span>: </span>
//             <code className="code-yellow">"Active"</code>,
//             <br />
//             <code>"userId"</code> <span>: </span>
//             <code className="code-cyan">"3"</code>,
//             <br />
//             <code>"userName"</code> <span>: </span>
//             <code className="code-yellow">"qwert G"</code>,
//             <br />
//             <code>"totalBalance"</code> <span>: </span>
//             <code className="code-cyan">"9"</code>,
//             <br />
//             <code>"id"</code> <span>: </span>
//             <code className="code-cyan">"25000.0"</code>
//             <br />
//           </p>
//         </p>
//         </p>
//       </Row>
//     </>
//   );
// }

export function Python() {
  return (
    <>
      <Row className="codebg">
      <div className="copyclip" >
          <AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("python")} />
      </div>
        <p id="python">
          <code>import</code> <code className="text-white">requests</code>
          <br />
          <code>import</code> <code className="text-white">json</code>
          <br />
          <br />
          <code className="text-white">url</code>{" "}
          <span className="text-white">=</span>{" "}
          <code className="code-yellow">
            "http://194.195.113.218:8090/paymento/remitter-reg/remitter-verify"
          </code>
          <br />
          <br />
          <code className="text-white">payload</code>{" "}
          <span className="text-white">=</span>{" "}
          <code className="text-white">json.dumbs(</code>{" "}
          <span className="output text-white">
            <br />
            <code className="code-yellow">"remitter-phone"</code>{" "}
            <span>: </span> <code className="code-yellow">"7902900295"</code>{" "}
            <br />
          </span>{" "}
          <span className="text-white">)</span>
          <br />
          <br />
          <br />
          <code className="text-white">headers</code>
          <span className="text-white">=</span>{" "}
          <code className="output text-white">
            <br /> <code className="code-yellow">'apikey'</code>
            <span className="text-white">:</span>
            <span className="output">
              <span className="output">Api key</span>
            </span>,
            <br /> <code className="code-yellow">'Authorization'</code>{" "}
            <span>:</span>{" "}
            <code className="code-yellow">'Bearer <span className="output text-white"><span className="output">Auth</span></span>'</code>,
  
            <br /> <code className="code-yellow">'Content-Type'</code>{" "}
            <span>:</span>{" "}
            <code className="code-yellow">'application/json'</code>
            <br/>
          </code><br/><br/>
          <code className="text-white">response</code>{" "}
          <span className="text-white">=</span>{" "}
          <code className="text-white"> requests.request(</code>{" "}
          <span className="text-white"><code className="code-yellow">"POST",</code><code className="text-white">url ,  </code><code className="text-white">data=payload)</code></span><br/>
          <br/>
          <code>print</code> <code className="text-white">(response.text)</code>
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
          <AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("java")} />
      </div>
      <p id="java">
          <br/><code className="text-white">OkHttpClient client = <code >new</code>  OkHttpClient().newnewBuilder()</code>
          <br/><code className="text-white">.build();</code>
          <br/><code className="text-white">MediaType mediaType = MediaType.parse( <code className="code-yellow">"application/json"</code>);</code>
          <br/><code className="text-white">RequestBody body = RequestBody.create(mediaType,</code> <code className="code-yellow">"<span className="output">\r\n        \"remitterPhone\":\"7902900295\"\r\n </span>  <code className="text-white" >);</code> </code>
          <br/><code className="text-white">Request request = <code>new</code>  Request.Builder()</code>
          <br/><code className="text-white">.url( <code className="code-yellow" >"http://194.195.113.218:8090/paymento/remitter-reg/remitter-verify"</code>)</code>
          <br/><code  className="text-white">.method(<code  className="code-yellow" >"POST"</code>, body)</code>
          <br/><code className="text-white">.addHeader(<code  className="code-yellow" >"apiKey"</code>, <code  className="code-yellow" >"lScaZNyjCrMrTq1AeTWFK9zEEnlMl9No"</code>)</code>
          <br/><code className="text-white">.addHeader(<code  className="code-yellow" >"Authorization", <span className="output"><span className="output">Auth</span></span></code>)</code>
          <br/><code className="text-white">.addHeader(<code  className="code-yellow" >"Content-Type", "application/json"</code>)</code>
          <br/> <code className="text-white">.build();</code>
          <br/> <code className="text-white">Response response = client.newCall(request).execute();</code>
        </p>
      </Row>
    </>
  );
}

export function Shell(){
  return(
    <>
     <Row className="codebg">
      <div className="copyclip" >
          <AiOutlineCopy className="copyicon" onClick={()=>copyToClipboard("java")} />
      </div>
      <p id="shell">
       <div>  
            <br/> <code className="text-white">wget --no-check-certificate --quiet \</code>  
            <br/> <code className="text-white">--method POST \</code>
            <br/> <code className="text-white">  --timeout=0 \</code>
            <br/> <code className="text-white">  --header <code className="code-yellow"> 'apiKey':'apiKey' \</code></code>
            <br/> <code className="text-white">  --header <code className="code-yellow"> 'Authorization':'Auth' \</code></code>
            <br/> <code className="text-white">--header  <code className="code-yellow"> 'Content-Type: application/json' \</code></code>
            <br/> <code className="text-white">--body-data '</code>
            <p className="output link-heading text-white"><br/>       
            <code>"remitterPhone" </code> <span>: </span><code className="code-cyan"> "7902626443",</code><br />
          </p>     
          <br/> <code className="code-yellow">' \</code>
          <br/><code className="code-yellow">'http://194.195.113.218:8090/paymento/remitter-reg/remitter-verify'</code>
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
          "remitterPhone":"7902900295",<br/>
        </code>
        <br/>  
          '          ,<br/>
          <code className="text-white">CURLOPT_HTTPHEADER =&#62; <code>array</code> ( <br/>
          <code className="code-yellow">'apiKey': 'apiKey', <br/>
              'Authorization':<span className="output"><span className="output">Auth</span></span><br/>
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