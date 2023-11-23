import React from "react";
import { HeroBg } from "../../assets/images";
import styled from "styled-components";
import { GlassBox } from "./Testimonials";
import { InputField, Button } from "../../reusables";

const Subscribe = () => {
  return (
    <Container>
      <GlassBox>
        <div className="text__wrapper">
          <h1>Join Our Global Developer Community</h1>
          <p>
            Join our email list and receive the latest case studies, event
            updates, product news, and much more.
          </p>
          <div className="input__group">
            <InputField
              value=""
              onTextChange={() => console.log()}
              onKeyPress={() => console.log()}
              placeholder="Email address"
              fieldname="email"
              inputType="email"
            />
            <Button full primary text="Subscribe" />
          </div>
        </div>
      </GlassBox>
    </Container>
  );
};

export default Subscribe;

const Container = styled.div`
  margin: 100px 0;
  min-height: calc(100vh - 80px);
  background: url(${HeroBg}) no-repeat center center;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // position: relative;

  .text__wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80%;

    h1 {
      font-weight: 500;
      font-size: 24px;
      text-align: center;
      color: #28d1ff;
      margin-bottom: 0.5rem !important;
    }

    p {
      color: grey;
      font-size: 16px;
      text-align: center;
      margin-bottom: 2.5rem !important;
    }

    .input__group {
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: 0.5rem;

      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }
  }
`;
