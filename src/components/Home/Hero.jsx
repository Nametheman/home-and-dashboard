import React from "react";
import styled from "styled-components";
import { HeroIllustration } from "../../assets/images";
import { BtnFilled, BtnOutline } from "../../layout/Navbar/styles";
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Container id="home">
      <HeroImageWrapper
      // data-aos='fade-right'
      >
        <HeroImage src={HeroIllustration} alt="Hero" />
      </HeroImageWrapper>
      <HeroText
      // data-aos='fade-left'
      >
        <h1>
          Hassle-free <br />
          API Marketplace
        </h1>
        <br />
        <p>
          Boost your app’s capabilities without worrying about scalability and
          stability.
        </p>
        <br />
        <br />
        <div className="button__group">
          {user ? (
            <BtnFilled to="/">
              <div>Go to API Marketplace</div> <Pointer />
            </BtnFilled>
          ) : (
            <>
              <BtnFilled to="/">
                <div>Learn More</div> <Pointer />
              </BtnFilled>
              <BtnOutline to="/register">
                <div>Sign Up Free</div> <Pointer />
              </BtnOutline>
            </>
          )}
        </div>
      </HeroText>
    </Container>
  );
};

export default Hero;

export const Container = styled.section`
  width: 100%;
  padding-bottom: 50px;
  min-height: calc(100vh - 80px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 200px;
  background: #f5f7fc;

  @media screen and (max-width: 1024px) {
    padding: 0 50px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 16px;
    grid-template-columns: 1fr;
  }
`;

export const HeroImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    height: 250px;
  }
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
    font-size: 54px;
    font-weight: 500;
    color: #28d1ff;
    line-height: normal;

    @media screen and (max-width: 1024px) {
      font-size: 48px;
    }

    @media screen and (max-width: 768px) {
      font-size: 36px;
    }

    @media screen and (max-width: 450px) {
      font-size: 32px;
    }
  }

  p {
    font-size: 24px;
    font-weight: normal;
    color: grey;

    @media screen and (max-width: 768px) {
      font-size: 22px;
      width: 80%;
    }

    @media screen and (max-width: 450px) {
      font-size: 18px;
      width: 100%;
    }
  }

  .button__group {
    display: flex;
    gap: 1rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export const Pointer = styled(FaChevronRight)`
  font-size: 0.7rem;
`;
