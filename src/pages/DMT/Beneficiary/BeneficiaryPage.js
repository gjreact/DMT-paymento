import React from "react";
import BasicLayout from "../../../layout/BasicLayout";
import Beneficiary from "./components/Beneficiary";
import BeneficiaryRegister from "./components/BeneficiaryRegister";

function BeneficiaryPage() {
  return (
    <>
      <BasicLayout>
        <Beneficiary />
        <BeneficiaryRegister />
      </BasicLayout>
    </>
  );
}

export default BeneficiaryPage;
