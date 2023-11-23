import React from "react";
// import { Link } from 'react-router-dom';
import styled from "styled-components";
import { ArticleImage } from "../../../assets/images";

const ArticleCard = () => {
  return (
    <Container>
      <img src={ArticleImage} alt="Article" />
      <div className="text__container">
        <h3>ARTICLE</h3>
        <p>Create REST API in Laravel with authentication using Passport</p>
      </div>
    </Container>
  );
};

export default ArticleCard;

const Container = styled.div`
  // position: relative;
  width: 100%;
  height: 250px;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  cursor: pointer;
  padding-bottom: 2rem;

  @media screen and (max-width: 450px) {
    height: 150px;
  }

  img {
    width: 100%;
    height: 35%;
    object-fit: cover;
    border-radius: 5px 5px 0 0;

    @media screen and (max-width: 450px) {
      height: 40%;
    }
  }

  .text__container {
    width: 100%;
    height: 65%;
    padding: 1rem;

    h3 {
      font-size: 1rem;
      color: #28d1ff;
      font-weight: 500;
      text-align: center;
      margin-bottom: 0.4rem !important;
    }

    p {
      font-size: 1rem;
      color: #000;
      text-align: center;
    }
  }
`;
