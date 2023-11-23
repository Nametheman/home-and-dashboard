import React from "react";
import styled from "styled-components";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { Button } from "../../../reusables";
// import { PricingCard } from '../../../components/Dashboard/Subscription';

const Index = () => {
  return (
    <Container>
      <h1>Social Media Asset Generator API</h1>
      <p className="subtitle">
        Resizes and creates images with all appropriate sizes for any social
        media service.
      </p>
      <PayAsYouGoCard>
        <div className="text__group">
          <FaMoneyCheckAlt className="icon" />
          <div className="row__group">
            <h4>Add Service</h4>
            <p>Only pay what you use, pay later.</p>
          </div>
        </div>
        <Button full lightPrimary text="$0.000035 Per Request" />
      </PayAsYouGoCard>
    </Container>
  );
};

export default Index;
const Container = styled.div`
  padding: 0 150px;
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;

  .subtitle {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 16px;

    h1 {
      font-size: 28px;
    }
  }
`;
const PayAsYouGoCard = styled.div`
  margin-top: 2rem;
  width: 80%;
  background: #fff;
  padding: 1rem 2rem;
  border: 1px solid #f4f4f4;
  border-radius: 5px;
  box-shadow: 0 12px 15px rgb(140 152 164 / 10%);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  .text__group {
    display: flex;
    align-items: center;
    gap: 2rem;

    .icon {
      font-size: 2rem;
      color: #28d1ff;
    }
    .row__group {
      h4 {
        font-size: 1.3rem;
        text-align: left;
      }
      p {
        color: #677788;
      }
    }
  }
`;

// const PricingCardContainer = styled.div`
//   margin-top: 3rem;
//   width: 100%;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 1.5rem;
// `;
