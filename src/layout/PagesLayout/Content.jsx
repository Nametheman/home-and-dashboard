import React from "react";
import styled from "styled-components";
import contentHd from "../../assets/images/contentHead.svg";

const Content = ({ children }) => {
  return (
    <Container>
      <div className="frameComtainer"></div>
      <div>{children}</div>
    </Container>
  );
};

export default Content;

const Container = styled.section`
  width: calc(100% - 16%) !important;
  min-height: 100vh !important;
  overflow-y: scroll !important;
  background-color: #f4f3f3 !important;
  margin-left: 16% !important;

  @media only screen and (max-width: 1147px) {
    width: calc(100%) !important;
    margin-left: 0 !important;
  }

  .frameComtainer {
    background: linear-gradient(rgba(0, 9, 13, 0.35), rgba(0, 9, 13, 0.298)),
      url(${contentHd}), no-repeat, center;
    width: 100%;
    height: 200px;
    img {
      object-fit: cover;
      width: 100vw;
      height: 240px;
    }
  }
  .children {
  }
`;
