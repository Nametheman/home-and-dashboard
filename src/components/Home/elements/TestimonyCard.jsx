import React from 'react';
import { Client } from '../../../assets/images';
import styled from 'styled-components';

const TestimonialCard = () => {
  return (
    <Container>
      <img src={Client} alt={Client} />
      <div className='lead-text'>
        We are using the Screenshot API to capture the display of ads on our
        website. It is cheap, with high limits of request, integration is
        simple.
      </div>

      <div className='details'>
        <h4>Kryštof Zeman</h4>
        <p>Software Development Professional</p>
      </div>
    </Container>
  );
};

export default TestimonialCard;

const Container = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;

    @media screen and (max-width: 768px) {
      width: 48px;
      height: 48px;
    }
  }

  .lead-text {
    width: 80%;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 400;
    color: #1e2022 !important;

    @media screen and (max-width: 768px) {
      font-size: 1.05rem;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    h4 {
      font-size: 1.125rem;
      color: #1e2022;
      font-weight: 600;
    }

    p {
      color: #677788;
    }
  }
`;
