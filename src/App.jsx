import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";
import "./App.css";
import { ForgotPasswordPage, LoginPage, RegisterPage } from "./pages/AuthPage";
import {
  HomePage,
  Marketplace,
  FAQ,
  Legal,
  PrivacyPolicy,
  TANDC,
  PageNotFound,
  APIDetailsPage,
  ServiceAgreement,
} from "./pages/LandingPage";
import { Account, Service, Support, Overview, Bulk } from "./pages/Dashboard";
import { ProtectedRoute } from "./hooks";
import InActivityTimeOut from "./hooks/InActiveTimeOut";
import "antd/dist/antd.min.css";
import {
  Dashboard,
  Transactions,
  Accounts,
  History,
  Services,
  BulkServices,
  Profile,
} from "./newPages";
import ScrollToTop from "./ScrollToTop";
import { Toaster } from "react-hot-toast";

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  window.addEventListener("load", AOS.refresh);
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Landing Pages */}
          <Route element={<InActivityTimeOut />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy_policy" element={<PrivacyPolicy />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/service_agreement" element={<ServiceAgreement />} />
            <Route path="/terms_and_conditions" element={<TANDC />} />
            <Route
              path="/api/details/:serviceName"
              element={<APIDetailsPage />}
            />{" "}
            {/* Auth Pages */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register/*" element={<RegisterPage />} />
            <Route path="/forgot_password/*" element={<ForgotPasswordPage />} />
            {/* Dashboard Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/account/*" element={<Accounts />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/services/*" element={<Services />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard/profile-settings" element={<Profile />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/account/deposit-history" element={<History />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/transactions" element={<Transactions />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/support" element={<Support />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/bulk-services" element={<BulkServices />} />
            </Route>
            {/* Invalid Routes */}
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
