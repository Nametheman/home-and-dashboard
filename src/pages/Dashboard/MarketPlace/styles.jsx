import styled from 'styled-components';

export default styled.div`
  position: relative;
  width: 100%;
  text-align:left !important;
`;

export const UserDetailsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;

  h2 {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    h2 {
      font-size: 1.2rem;
    }
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;

    @media screen and (max-width: 768px) {
      width: 100px;
      height: 100px;
    }

    @media screen and (max-width: 450px) {
      width: 72px;
      height: 72px;
    }
  }

  .details__group {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  .auth__group {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .wrapper {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .copy__group {
        display: flex;
      }
    }
  }
`;
