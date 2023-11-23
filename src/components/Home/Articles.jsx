import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ArticleCard from "./elements/ArticleCard";
import { Pointer } from "./Hero";

const Articles = () => {
  return (
    <Container>
      <h1>Read our latest articles</h1>
      <p>
        Have you checked our blog? We provide tips and tricks to get you started
        fast
      </p>
      <ArticleListWrapper>
        {Array.from({ length: 4 }, (item, index) => {
          return <ArticleCard key={index} />;
        })}
      </ArticleListWrapper>
      <Readmore>
        <span>Want to read more? </span>
        <Link to="/">
          Go Here
          <Pointer />
        </Link>
      </Readmore>
    </Container>
  );
};

export default Articles;

const Container = styled.div`
  padding: 100px 0;
  min-height: calc(100vh - 80px);

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }

  h1 {
    font-weight: 500;
    font-size: 32px;
    text-align: center;
    color: #28d1ff;
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
      margin-bottom: 1.5rem !important;
    }
  }
`;

const ArticleListWrapper = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
  }
`;

const Readmore = styled.div`
  margin: 4rem auto;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1.5rem;
  border-radius: 50px;
  border: 1px solid #e5e5e5;

  span {
    color: #4b4b4b;
  }
  a {
    color: #28d1ff;

    :hover {
      opacity: 0.7;
    }
  }
`;
