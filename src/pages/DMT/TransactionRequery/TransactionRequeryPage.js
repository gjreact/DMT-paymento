import React from "react";
import copy from "copy-to-clipboard";

function TransactionRequeryPage() {
  const copyToClipboard = (e) => {
    var c = document.getElementById("p").innerText;
    // console.log(c);
    copy(c);
  };
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", height: "100px" }}
      >
        <button
          className="btn btn-primary"
          onClick={copyToClipboard}
          style={{ width: "100px", height: "50px" }}
        >
            copy
          {/* <AiOutlineCopy style={{ width: "80px", height: "80px" }} /> */}
        </button>
      </div>
     <p id="p" >dsjskljflkjsdlfkj</p>
    </div>
  );
}

export default TransactionRequeryPage;
