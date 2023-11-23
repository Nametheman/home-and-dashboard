// import { RegisterComponent } from 'components/Auth';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from '../../../layout';
import Home from './Home';
import DepositHistory from './Deposits';
import ServiceHistory from './Services';

const Register = () => {
  return (
    <DashboardLayout
      content={
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/transactions' element={<DepositHistory />} />
          <Route path='/services' element={<ServiceHistory />} />
        </Routes>
      }
    />
  );
};

export default Register;


