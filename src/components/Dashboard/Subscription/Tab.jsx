import React from 'react';
import styled from 'styled-components';

const Tab = (props) => {
  return (
    <Container className={props.tab === 'info' ? 'active' : ''} onClick={props.click}>
      {props.text}
    </Container>
  );
};

export default Tab;

const Container = styled.div`
  color: silver;
  font-weight: 500;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 1rem;

  @media screen and (max-width:768px){
    font-size: 1rem;
  }

  :hover {
    opacity: 0.7;
  }
`;
