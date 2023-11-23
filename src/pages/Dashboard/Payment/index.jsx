// import { RegisterComponent } from 'components/Auth';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {DashboardLayout} from '../../../layout';
import Home from './Home';

const Register = () => {
  return (
    <DashboardLayout
      content={
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      }
    />
  );
};

export default Register;
