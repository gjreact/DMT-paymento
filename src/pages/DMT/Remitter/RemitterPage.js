import React from "react";
import RemitterInfoPage from "./components/RemitterInfoPage";
import Remitter from "./components/Remitter";
import BasicLayout from "../../../layout/BasicLayout";

function RemitterPage() {
  return (
    <BasicLayout>
      <Remitter />
      <RemitterInfoPage />
    </BasicLayout>
    
  );
}

export default RemitterPage;
