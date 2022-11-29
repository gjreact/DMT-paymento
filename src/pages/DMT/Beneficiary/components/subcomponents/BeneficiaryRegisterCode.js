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
          <code className="text-white"> url =</code> <code className="code-yellow">"http://194.195.113.218:8090/paymento/beneficiary-reg/add-beneficiary"</code><br/>
          <code className="text-white">payload = json.dumps</code>( <span className="output link-heading text-white"><br/>
  
          <code>"beneficiaryName"</code>  <span>: </span> <code className="code-yellow">"anu",</code><br />
          <code>"beneficiaryBankId" </code> <span>: </span><code className="code-cyan"> 36,</code><br />
          <code>"remitterMobileNumber" </code> <span>: </span><code className="code-cyan"> 7902900295,</code><br />
          <code>"beneficiaryMobileNumber"</code>  <span>: </span> <code className="code-cyan">8596321478,</code><br />
          <code>"accountNumber"</code>  <span>: </span> <code className="code-cyan">88654888892,</code><br />
          <code>"address" </code> <span>: </span> <code className="code-yellow">Calicut,</code><br />
          <code>"ifscCode" </code> <span>: </span> <code className="code-yellow">UTIB0002916,</code><br />
          <code>"accountHolderName" </code> <span>: </span><code className="code-yellow"> Venu,</code><br />
          <code>"branchName"</code>  <span>: </span> <code className="code-yellow">Mavoor Road</code>  <br />
           </span>) <br/>

           <code className="text-white">
          headers = <span className="output link-heading text-white"><br/>
          <code>'apiKey'</code>: <code className="code-yellow">'apiKey'</code> ,<br/>
          <code >'Authorization'</code>: <code className="code-yellow">'Bearer  token'</code>,<br/>
          <code>'Content-Type'</code>:<code className="code-yellow"> 'application/json'</code><br/>
          </span>
          </code><br/>

          <code className="text-white">response = requests.request(</code><code className="code-yellow">"POST"</code><code className="text-white">, url, headers=headers, data=payload)</code><br/>
          <code>print</code><code className="text-white">(response.text)</code>
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

          <code className="text-white">OkHttpClient client = </code><code>new</code><code className="text-white"> OkHttpClient().newBuilder()  </code><br />
              .build();
          <br/><code className="text-white">MediaType mediaType = MediaType.parse</code>(<code className="code-yellow">"application/json"</code>);
          <br/><code className="text-white">RequestBody body = RequestBody.create(mediaType,</code>  <code className="code-yellow">"\r\n  </code>
            <br/> <code className="code-yellow">\"beneficiaryName\": \"anu\",\r\n  \"beneficiaryBankId\": \"36\"</code>,
            <br/> <code className="code-yellow">\r\n        \"remitterMobileNumber\": \"7902900295\",\r\n </code> 
            <br/> <code className="code-yellow">\"beneficiaryMobileNumber\":\"8596321478\",\r\n        \"accountNumber\":  </code> 
            <br/> <code className="code-yellow">\"88654888892\",\r\n        \"address\": \"Calicut \",\r\n </code> 
            <br/> <code className="code-yellow">\"ifscCode\": \"UTIB0002916\",\r\n        \"accountHolderName\": \"Venu\", </code> 
            <br/> <code className="code-yellow">\r\n        \"branchName\": \"Mavoor Road\"\r\n");</code>
             <br /><code className="text-white">Request request = <code>new</code> Request.Builder()</code> <br />
            <code className="text-white">.url(</code><code className="code-yellow">"http://194.195.113.218:8090/paymento/beneficiary-reg/add-beneficiary"</code>) <br />
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
            <code>"beneficiaryName"</code>  <span>: </span> <code className="code-yellow">"anu",</code><br />
            <code>"beneficiaryBankId" </code> <span>: </span><code className="code-cyan"> 36,</code><br />
            <code>"remitterMobileNumber" </code> <span>: </span><code className="code-cyan"> "7902900295,</code><br />
            <code>"beneficiaryMobileNumber"</code>  <span>: </span> <code className="code-cyan">8596321478,</code><br />
            <code>"accountNumber"</code>  <span>: </span> <code className="code-cyan">88654888892,</code><br />
            <code>"address" </code> <span>: </span> <code className="code-yellow">Calicut,</code><br />
            <code>"ifscCode" </code> <span>: </span> <code className="code-yellow">UTIB0002916,</code><br />
            <code>"accountHolderName" </code> <span>: </span><code className="code-yellow"> Venu,</code><br />
            <code>"branchName"</code>  <span>: </span> <code className="code-yellow">Mavoor Road</code>  <br />
            </span><span>'   \</span> <br />     
            <code className="code-yellow">'http://194.195.113.218:8090/paymento/beneficiary-reg/add-beneficiary'</code>
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
          <code className="text-white">OkHttpClient client =</code> <code>new</code><code className="text-white"> OkHttpClient().newBuilder() </code> <br />
             .build();
          <br/><code className="text-white">MediaType mediaType = MediaType.parse</code>(<code className="code-yellow">"application/json"</code>);
            <br/><code className="text-white">RequestBody body = RequestBody.create(mediaType,</code>  <code className="code-yellow">"\r\n  </code>
           <br/> <code className="code-yellow">\"remitterPhone\":7902900295\r\n"</code>);

             <br /><code className="text-white">Request request = <code>new</code> Request.Builder()</code> <br />
            <code className="text-white">.url(</code><code className="code-yellow">"http://194.195.113.218:8090/paymento/beneficiary-reg/getbeneficiary"</code>) <br />
            <code className="text-white">.method(</code><code className="code-yellow">"POST"</code><code className="text-white">,body)</code><br />
            <code className="text-white">.addHeader(</code><code className="code-yellow">"apiKey"</code><code className="code-yellow">, "lScaZNyjCrMrTq1AeTWFK9zEEnlMl9No"</code>) <br />
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