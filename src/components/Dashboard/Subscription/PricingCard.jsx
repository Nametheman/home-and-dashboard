import React from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "../../../reusables";
const PricingCard = () => {
  return (
    <Container>
      <div className="plan__type">
        <h4>Free Plan</h4>
        <h1>
          $0.00 <span>/ mo</span>
        </h1>
      </div>
      <div className="plan__details">
        <div className="text__group">
          <FaCheckCircle className="icon" />
          <p>5 Requests / Daily</p>
        </div>
        <div className="text__group">
          <FaCheckCircle className="icon" />
          <p>20 Requests / Monthly</p>
        </div>
        <div className="text__group">
          <FaCheckCircle className="icon" />
          <p>Free for Lifetime</p>
        </div>
        <div className="text__group">
          <FaCheckCircle className="icon" />
          <p>No Credit Card Required</p>
        </div>
      </div>
      <div className="btn__wrapper">
        <Button full lightPrimary text="Subcribe" />
      </div>
    </Container>
  );
};

export default PricingCard;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  padding: 1.5rem 0;
  border-radius: 5px;
  border: 1px solid #f4f4f4;
  box-shadow: 0 12px 15px rgb(140 152 164 / 10%);

  .plan__type {
    padding: 0 1.5rem 2rem;
    text-align: center;
    height: 25%;
    border-bottom: 1px solid #f4f4f4;
  }

  h4 {
    font-size: 22px;
  }

  h1 {
    font-size: 36px;

    span {
      font-size: 15px;
      color: grey;
    }
  }

  .plan__details {
    display: flex;
    padding: 1.5rem;
    height: 60%;
    flex-direction: column;
    gap: 1rem;

    .text__group {
      display: flex;
      align-items: center;
      gap: 1rem;

      .icon {
        color: #28d1ff;
      }
    }

    p {
      font-size: 16px;
      color: grey;
    }
  }

  .btn__wrapper {
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
  }
`;
