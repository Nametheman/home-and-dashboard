import styled from "styled-components";

export default styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 80px) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #677788;
  padding: 0px 150px 36px;

  @media screen and (max-width: 1024px) {
    padding: 48px 50px;
  }

  @media screen and (max-width: 768px) {
    padding: 36px;
  }

  @media screen and (max-width: 450px) {
    padding: 16px;
  }

  a {
    color: #28d1ff;
  }

  .label_group {
    display: flex;
    justify-content: space-between;
  }

  .steps {
    margin: 1.5em 0;
    color: #28d1ff;

    .line__group {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      margin-top: 0.5rem;

      @media screen and (max-width: 768px) {
        img {
          width: 40px;
        }
      }
    }

    h3 {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      gap: 1rem;
      font-weight: 400;
    }
  }
`;

export const Card = styled.form`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 1rem;
  }

  // margin: auto auto;
  // min-height: calc(100vh);

  .check {
    font-size: 3rem;
    color: #28d1ff;
    width: 100%;
    text-align: center;
    margin: 0 auto 1rem;
  }
  h1 {
    font-size: 2rem;
    color: #1e2022;
    font-weight: 500;
    margin-bottom: 0.5rem !important;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    color: #1e2022;
    font-weight: 500;
    margin-bottom: 0.5rem !important;

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  p {
    font-size: 1.25rem;
    font-weight: 300;
    margin-bottom: 2rem !important;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .code__wrapper {
    display: flex;
    width: 300px;
    gap: 2rem;
    // justify-content: space-between;
  }
  .input__group {
    margin-bottom: 1.5rem;
    width: 100%;
    p {
      color: #000;
      font-size: 1.1rem;
      font-weight: 300;
      margin-bottom: 0.3rem !important;

      @media screen and (max-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }

  .asterick {
    color: #28d1ff !important;
  }

  .info {
    text-align: justify;
    margin-bottom: 1em !important;
  }

  .others {
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 3rem !important;

    a {
      font-weight: 500;
    }
  }

  .input__column {
    display: flex;
    width: 100%;
    gap: 1rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 0;
    }
  }

  .btn__group {
    display: flex;
    gap: 1rem;
  }

  .code__btn__group {
    display: flex;
    width: 400px;
    gap: 1rem;
  }
`;

export const SuccessCard = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 1rem;
  }

  .check {
    font-size: 3rem;
    color: #28d1ff;
    width: 100%;
    text-align: center;
    margin: 0 auto 1rem;
  }

  .btn_wrapper {
    width: 50%;

    @media screen and (max-width: 425px) {
      width: 100%;
    }
  }

  h1 {
    font-size: 2rem;
    color: #1e2022;
    font-weight: 500;
    margin-bottom: 0.5rem !important;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.25rem;
    font-weight: 300;
    text-align: center;
    margin-bottom: 2rem !important;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;
