import React from 'react';
import { HeroDots } from '../../assets/images';
import styled from 'styled-components';
import TestimonialCard from './elements/TestimonyCard';

const Testimonials = () => {
  return (
    <Container>
      <GlassBox>
        <img className='dot' src={HeroDots} alt='Dot' />
        <TestimonialCard />
      </GlassBox>
    </Container>
  );
};

export default Testimonials;

const Container = styled.div`
  margin: 100px 0;
  // min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // position: relative;

  @media screen and (max-width: 768px) {
    margin: 24px 0;
  }
`;

export const GlassBox = styled.div`
  position: relative;
  width: 80%;
  height: 400px;
  border-radius: 5px;
  //   border: 0.1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px) opacity(1) contrast(0.95);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  .dot {
    position: absolute;
    bottom: -3rem;
    left: -3rem;
    width: 150px;
    height: 150px;

    @media screen and (max-width: 768px) {
      width: 75px;
      height: 75px;
      bottom: -1rem;
      left: -1rem;
    }
  }
`;
