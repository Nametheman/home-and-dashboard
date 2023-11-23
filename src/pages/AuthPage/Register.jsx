// import { RegisterComponent } from 'components/Auth';
import { Routes, Route } from "react-router-dom";
import React from "react";
import { HomeLayout } from "../../layout";
import { Step1, Step2, Step3, Step4 } from "../../components/Auth/Register";

const Register = () => {
  return (
    <HomeLayout
      content={
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="step-2" element={<Step2 />} />
          <Route path="step-3" element={<Step3 />} />
          <Route path="verify" element={<Step4 />} />
        </Routes>
      }
    />
  );
};

export default Register;
