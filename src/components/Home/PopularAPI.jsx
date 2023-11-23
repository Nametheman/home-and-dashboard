import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { services } from "../../services/dummyData";
import APISummaryCard from "./elements/APISummaryCard";
import { Pointer } from "./Hero";

const PopularAPI = () => {
  return (
    <Container>
      <h1>Our Services</h1>
      <p>Supercharge your app with these ready to run backends and APIs.</p>
      <CardWrapper>
        {services.map((service) => {
          return <APISummaryCard {...service} />;
        })}
      </CardWrapper>
      <More to="/marketplace">
        <div>See all APIs</div>
        <Pointer />
      </More>
    </Container>
  );
};

export default PopularAPI;

const Container = styled.div`
  padding: 50px 0;
  min-height: calc(100vh - 80px);
  padding: 0 200px;

  @media screen and (max-width: 1024px) {
    padding: 0 50px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 16px;
    grid-template-columns: 1fr;
  }

  // @media screen and (max-width: 768px) {
  //   padding: 50px 0;
  // }

  h1 {
    font-weight: 500;
    font-size: 32px;
    text-align: center;
    color: #28d1ff;
    line-height: 2rem;
    margin-bottom: 0.5rem !important;

    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    color: grey;
    font-size: 16px;
    text-align: center;
    margin-bottom: 2.5rem !important;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

const CardWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const More = styled(Link)`
  margin-top: 2rem;
  width: 100%;
  text-align: center;
  color: #28d1ff;
  display: flex;
  gap: 0.5rem !important;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;

  :hover {
    opacity: 0.7;
  }
`;
