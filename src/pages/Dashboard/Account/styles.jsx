import styled from 'styled-components';

export default styled.div`
  position: relative;
  width: 100%;
  text-align: left !important;
`;

export const UserDetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 2rem;

  h2 {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 768px) {
   grid-template-columns: 1fr;

    h2 {
      font-size: 1.2rem;
    }
  }

  .info_group {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  img {
    width: 100px;
    height: 100px;
    margin-bottom:0.5rem;
    border-radius: 50%;

    @media screen and (max-width: 768px) {
      width: 60px;
      height: 60px;
    }

    @media screen and (max-width: 450px) {
      width: 48px;
      height: 48px;
    }
  }

  .details__group {
    width: 100%;
    display: flex;
    // align-items: center;
    flex-direction: column;
    gap: 0.5rem;

    .wrapper {
      margin-top:1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .copy__group {
        display: flex;
      }
    }

    .text_group {
      display: flex;

      h3 {
        font-size: 1rem;
        font-weight: bold;
        width: 150px;
      }

      p {
        color: #000 !important;
      }
    }
  }

  .auth__group {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    
  }
`;
