import React from 'react';
import styled from 'styled-components';
import { sidebarSelector, toggleSidebar } from '../../redux/reducers/sidebar';
import Content from './Content';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';

const Index = ({ content }) => {
  const dispatch = useDispatch();
  const { sidebarActive } = useSelector(sidebarSelector);
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <React.Fragment>
      <Container id='container'>
        <Navbar toggleSidebar={handleToggleSidebar} />
        <Sidebar
          showSidebar={sidebarActive}
        />
        <Content content={content} />
      </Container>
    </React.Fragment>
  );
};

export default Index;

const Container = styled.div``;
