import React from "react";
import styled from "styled-components";

const Tab = (props) => {
  return (
    <Container sender={props.sender}>
      <div className="issue">
        <div className="tag">{props?.sender !== "ADMIN" ? "You" : "Admin"}</div>
        <div className="text"> {props?.message}</div>
        <div className="time">
          {new Date(props?.createdAt).toLocaleString()}
        </div>
      </div>
    </Container>
  );
};

export default Tab;

const Container = styled.div`
  width: calc(100% - 200px);
  margin: ${({ sender }) =>
    sender !== "admin" ? "0 200px 0 0" : "0 0 0 200px"};
  border: ${({ sender }) =>
    sender === "admin" ? "1px solid green" : "1px solid #28d1ff"};
  border-left: ${({ sender }) =>
    sender === "admin" ? "4px solid green" : "4px solid #28d1ff"};
  padding: 1rem;
  margin-bottom: 1rem !important;

  @media screen and (max-width: 425px) {
    width: 100%;
    margin: ${({ sender }) => (sender !== "admin" ? "0" : "0")};
  }

  .time {
    font-size: 9px;
    font-style: italic;
    font-weight: 500;
    color: grey;
    margin-top: 0.5em;
  }

  .tag {
    color: ${({ sender }) => (sender !== "admin" ? "green" : "blue")};
    border-radius: 5px;
    font-weight: 500;
    // padding: 0.25rem 0.5rem;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    text-transform: capitalize;
    // width: 150px;
    // text-align: center;
  }

  .text {
    font-size: 16px;

    @media screen and (max-width: 425px) {
      font-size: 14px;
    }
    span {
      font-weight: bold;
    }
  }
`;
