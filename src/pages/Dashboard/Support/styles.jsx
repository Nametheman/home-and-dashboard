import styled from "styled-components";
import { FaInfoCircle } from "react-icons/fa";
export default styled.div``;

export const Card = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1rem;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr 4fr;

  .active {
    background: #28d1ff !important;
    color: #fff !important;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  p {
    font-size: 1.2rem;
    line-height: 3rem;

    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  .tab_group {
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    @media screen and (max-width: 768px) {
      background: #0052cc0a;
      flex-direction: row;
      height: 40px;
      border-right: none;
    }

    @media screen and (max-width: 375px) {
      display: grid;
      height: auto;
      grid-template-columns: 1fr;
    }
  }

  .tab_container {
    min-height: 400px;

    @media screen and (max-width: 768px) {
      padding-left: 0;
    }
  }
`;

export const Support = styled(FaInfoCircle)`
  font-size: 1.2rem;
`;
