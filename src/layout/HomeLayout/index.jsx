import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';
import { useDispatch,  } from 'react-redux';
import {  toggleSidebar } from '../../redux/reducers/sidebar';

const Index = (props) => {
  const dispatch = useDispatch();
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Container>
      <Navbar toggleSidebar={handleToggleSidebar} />
      <Body content={props.content} />
      <Footer />
    </Container>
  );
};

export default Index;

const Container = styled.div`
  position: relative;
  overflow: hidden !important;
  // width:100%;
  // min-height: 100vh;
`;
