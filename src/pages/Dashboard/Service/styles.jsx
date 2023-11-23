import styled from "styled-components";

export default styled.div`
  position: relative;
  width: 100%;
  text-align: left;

  h1 {
    margin: 0 !important;
    padding: 0 !important;
    font-size: 1.7rem !important;
    font-weight: 600;
    text-align: left;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .tab_group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    // padding: 24px 0x;
    // width: 100%;

    @media screen and (max-width: 768px) {
      background: #0052cc0a;
      gap: 0;
      flex-direction: row;
    }

    @media screen and (max-width: 375px) {
      display: grid;
      grid-template-columns: 1fr;
    }
  }

  .tab_container {
    min-height: 400px;
    padding: 1rem;
    margin-left: 10px;
    text-align: left;
    background: #fff;

    @media screen and (max-width: 768px) {
      margin-left: 0;
    }

    .rating_container {
      width: 50%;
      text-align: left;

      @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0;
      }
    }
  }
  .btn_wrapper {
    margin: 2rem auto 0;
    width: 50%;
    bottom: 1rem;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .active {
    background: #28d1ff !important;
    color: #fff !important;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0px;
  }
`;

export const RateServiceWrapper = styled.div`
  width: 50%;
  padding:1rem;
  background:#0052cc0a;
  text-align: 
  position: relative;
`;
