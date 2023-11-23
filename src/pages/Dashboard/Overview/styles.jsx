import styled from "styled-components";

export default styled.div`
  position: relative;
  width: 100%;
  p {
    margin-bottom: 2rem !important;
  }

  .leading_row {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 450px) {
      flex-direction: column-reverse;
      gap: 0.5rem;
    }
  }

  h3 {
    font-weight: bold !important;
    color: #000 !important;
    font-size: 1.5em !important;
    // line-height: 0;
    // text-transform: uppercase;

    @media screen and (max-width: 425px) {
      font-size: 1.2rem;
    }
  }

  .group {
    display: flex;
    align-items: center;
    gap: 1rem;

    .icon {
      font-size: 1.1rem;
      cursor: pointer;

      :hover {
        opacity: 0.8;
      }
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    p {
      margin: 0 !important;
      padding: 0 !important;
    }
    @media screen and (max-width: 1024px) {
      width: 60%;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      font-size: 0.7rem;
    }

    @media screen and (max-width: 425px) {
      h3 {
        font-size: 1rem;
      }
    }

    .balance__group {
      display: flex;
      gap: 1rem;

      @media screen and (max-width: 768px) {
        p {
          font-size: 0.8rem;
          font-weight: bold;
        }
      }

      b {
        color: grey;
      }

      @media screen and (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }

  a {
    font-weight: bold;
  }

  .loading {
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 1.2rem;
    color: #333333;
    margin-top: 2rem;
  }

  .card_group {
    width: 100%;
    display: grid;
    grid-template-columns: 2.5fr 2.5fr;
    column-gap: 4rem;

    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
      row-gap: 2rem;
      column-gap: 0;
    }
  }

  .assets {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;

    .group {
      display: flex;
      gap: 1.5rem;

      @media screen and (max-width: 320px) {
        flex-direction: column;
      }
    }
  }
`;
