import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
const Index = (props) => {
  return (
    <Container>
      <FaStar className="icon" />
      <h3>{props.name}</h3>
    </Container>
  );
};

export default Index;

const Container = styled.div`
  display: flex;
  width: 250px;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 0.5rem;
  background: #f4f4f4;
  padding:0.5rem 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 10px;

  .icon {
    color: #28d1ff;
    font-size:1.2rem;
  }
  
  h3 {
    font-size: 1.1rem;
    text-align: left;
    // width: 33.3%;
    color: #21325b;
    line-height: 1rem;
    text-transform: capitalize;
    margin: 0 !important;
    padding: 0 !important;

    @media screen and (max-width: 768px) {
      width: 100%;
      font-size: 1rem;
    }
  }

  }

  .btn {
    // width: 33.3%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;
