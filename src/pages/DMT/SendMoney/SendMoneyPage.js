import React from "react";
import BasicLayout from "../../../layout/BasicLayout";
import SendMoney from "./components/SendMoney";
import SendMoney1 from "./components/SendMoney1";

function SendMoneyPage() {
  return (
    <>
      <BasicLayout>
        <SendMoney />
        <SendMoney1 />
      </BasicLayout>
    </>
  );
}

export default SendMoneyPage;
