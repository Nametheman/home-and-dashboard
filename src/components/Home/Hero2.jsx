import React from "react";
import styled from "styled-components";
import { HeroImageWrapper } from "./Hero";
import { HeroIllustration2 } from "../../assets/images";
import { Link } from "react-router-dom";
import { BtnFilled } from "../../layout/Navbar/styles";

const Hero2 = () => {
  return (
    <Container>
      <HeroImageWrapper>
        <HeroImage src={HeroIllustration2} alt="Hero" />
      </HeroImageWrapper>
      <HeroText>
        <h1>
          Build with TM<span>SaaS</span>
        </h1>
        <br />
        <div className="card">
          <div className="bullet">1</div>
          <div className="text-group">
            <div className="lead">We provide the APIs</div>
            <p>
              <Link to="/">We've carefully selected</Link> best-in-class APIs in
              the market. We monitor, scale and secure them.
            </p>
          </div>
        </div>
        <br />
        <div className="card">
          <div className="bullet">2</div>
          <div className="text-group">
            <div className="lead">We provide the APIs</div>
            <p>
              <Link to="/">We've carefully selected</Link> best-in-class APIs in
              the market. We monitor, scale and secure them.
            </p>
          </div>
        </div>
        <br />
        <BtnFilled to="/">Start Building</BtnFilled>
      </HeroText>
    </Container>
  );
};

export default Hero2;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 50px 0;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5rem;
  // align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding-left: 0;
  }

  h1 {
    font-weight: 500;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }

    span {
      color: #333;
    }
  }

  .card {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  //   .text-group {
  //     display: flex;
  //     gap: 1rem;
  //     margin-bottom: 1.5rem;
  //   }

  p {
    font-size: 18px;
    font-weight: 400;
    color: #677788;
    text-wrap: break-word;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }

    a {
      color: #28d1ff;
    }
  }

  .lead {
    font-size: 1.3rem;
    color: #000000;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  .button__group {
    display: flex;
    gap: 1rem;
  }

  .bullet {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #28d1ff;
    background-color: rgba(0, 82, 204, 0.1);
  }
`;
