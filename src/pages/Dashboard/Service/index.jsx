// import { RegisterComponent } from 'components/Auth';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
// import Pricing from './PricingPage';
// import APIDetails from '../../LandingPage/APIDetailsPage';
import styled from 'styled-components';
import { DashboardLayout } from '../../../layout';

const Index = () => {
  return (
    <DashboardLayout
      content={
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/api/pricing' element={<Pricing />} />
            <Route path='/api/details/:serviceName' element={<APIDetails />} /> */}
          </Routes>
        </Container>
      }
    />
  );
};

export default Index;

const Container = styled.div`
  position: relative;
`;
