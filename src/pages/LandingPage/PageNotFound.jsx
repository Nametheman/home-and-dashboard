import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageNotFoundImage } from "../../assets/images";
import { HomeLayout } from "../../layout";

const PageNotFound = () => {
  return (
    <HomeLayout
      content={
        <Container>
          <div className="flex">
            <h1>404</h1>
            <h4>
              Oops! Looks like you followed a bad link. <br /> If you think this
              is a problem with us, please tell us.
            </h4>
            <GoBackBtn to="/">Go Home</GoBackBtn>
          </div>
          <img
            className="flex"
            src={PageNotFoundImage}
            alt={PageNotFoundImage}
          />
        </Container>
      }
    />
  );
};

export default PageNotFound;

const Container = styled.div`
  margin: 100px 80px;
  padding: 2rem 0;
  min-height: calc(100vh - 80px);
  display: flex;
  gap: 2rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 1rem;
  }

  .flex {
    flex: 1;

    @media screen and (max-width: 768px) {
      flex: none;
    }
  }

  h1 {
    margin: 0 !important;
    padding: 0 !important;
    font-size: 4.5rem;
    color: #28d1ff;
    opacity: 0.7;

    @media screen and (max-width: 768px) {
      font-size: 4rem;
      width: 100%;
      text-align: center;
    }

    @media screen and (max-width: 450px) {
      font-size: 3.5rem;
    }
    // line-height:0;
  }

  h4 {
    margin-bottom: 2rem !important;
    font-size: 1.5rem;
    font-weight: 400;
    color: #677788;

    @media screen and (max-width: 450px) {
      font-size: 1.1rem;
      text-align: center;
    }
  }

  img {
    object-fit: cover;
    border-radius: 50% 50% 1% 50%;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 200px !important;
    }
  }
`;

const GoBackBtn = styled(Link)`
  width: 200px;
  padding: 0.5rem 1rem;
  background: #28d1ff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.4rem;
  color: #fff;
  border-radius: 25px;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 1.2rem;
  }
`;
