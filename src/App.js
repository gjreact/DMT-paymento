import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicLayout from "./layout/BasicLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RemitterPage from "./pages/DMT/Remitter/RemitterPage";
import RemitterInfoPage from "./pages/DMT/Remitter/components/RemitterInfoPage";
import SendOtpPage from "./pages/DMT/Remitter/components/SendOtpPage";
import ResendOtpPage from "./pages/DMT/Remitter/components/ResendOtpPage";
import VerifyOtpPage from "./pages/DMT/Remitter/components/VerifyOtpPage";
import RemitterBalancePage from "./pages/DMT/Remitter/components/RemitterBalancePage";

import BeneficiaryPage from "./pages/DMT/Beneficiary/BeneficiaryPage";
import BeneficiaryRegister from "./pages/DMT/Beneficiary/components/BeneficiaryRegister";
import BeneficiaryListPage from "./pages/DMT/Beneficiary/components/BeneficiaryListPage";
import BeneficiaryDeletePage from "./pages/DMT/Beneficiary/components/BeneficiaryDeletePage";

import SendMoneyPage from "./pages/DMT/SendMoney/SendMoneyPage";
import SendMoney1 from "./pages/DMT/SendMoney/components/SendMoney1";
import Authentication from "./pages/DMT/Authentication";
import TransactionRequeryPage from "./pages/DMT/TransactionRequery/TransactionRequeryPage";

function App() {
  return (
    <div className = "App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<BasicLayout><Authentication /></BasicLayout>} />

          <Route path = "/remitter/remitterinfo" element = {<RemitterPage />} />
          <Route path = "/remitter/remitterinfo"element = {<BasicLayout><RemitterInfoPage /></BasicLayout>}/>
          <Route path = "/remitter/sendotp" element = {<BasicLayout> <SendOtpPage /> </BasicLayout>} />
          <Route path = "/remitter/resendotp" element = {<BasicLayout> <ResendOtpPage /> </BasicLayout>}/>
          <Route path = "/remitter/verifyotp" element = {<BasicLayout> <VerifyOtpPage /> </BasicLayout>} />
          <Route path = "/remitter/balance" element = {<BasicLayout> <RemitterBalancePage /> </BasicLayout>} />

          <Route path = "/beneficiary/register" element = {<BeneficiaryPage />} />
          <Route path = "/beneficiary/register" element = {<BasicLayout> <BeneficiaryRegister /> </BasicLayout>} />
          <Route path = "/beneficiary/list" element={<BasicLayout> <BeneficiaryListPage /> </BasicLayout>} />
          <Route path = "/beneficiary/delete" element={<BasicLayout> <BeneficiaryDeletePage /> </BasicLayout>} />

          <Route path = "/sendmoney" element = {<SendMoneyPage />} />
          <Route path = "/sendmoney/sendmoney" element={<BasicLayout> <SendMoney1 /> </BasicLayout>} />

          <Route path = "/transactionmoney" element = {<BasicLayout><TransactionRequeryPage /></BasicLayout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
