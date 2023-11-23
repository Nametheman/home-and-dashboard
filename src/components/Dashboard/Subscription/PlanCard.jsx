import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../reusables';

const PlanCard = (props) => {
  return (
    <Container>
      <div className='title'>
        <h4>{props.title}</h4>
        <p>{props.subtitle}</p>
      </div>
      <p>{props.details}</p>
      <div className='button'>
        <Button full text={props.pricing} lightPrimary />
      </div>
    </Container>
  );
};

export default PlanCard;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 1rem;
  padding: 0 1rem;

  p {
    color: #677788;
    font-size: 15px !important;
  }

  .title {
    text-align: left;
    display: flex;
    justify-content: start;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;

    h4 {
      text-align: left !important;
      font-size: 1.3rem;
      font-weight: 600;
    }

    p {
      font-size: 15px;
    }
  }

  .button {
    min-width: 200px;
  }

  :hover {
    background: #f4f4f4;
  }
`;
