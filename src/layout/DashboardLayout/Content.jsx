import React from 'react';
import styled from 'styled-components';
// import { ReactComponent as ChevronLeft } from '../../../assets/images/icons/chevron-left.svg';
const Content = ({ content }) => {
  return <Container>{content}</Container>;
};

export default Content;

const Container = styled.div`
  position: relative;
  top: 60px;
  left: 250px;
  width: calc(100vw - 250px);
  height: -webkit-calc(100% - 60px);
  height: -moz-calc(100% - 60px);
  min-height: calc(100vh - 60px);
  background: #efefef;
  padding: 2rem;
  color: #000;
  overflow-x: hidden !important;

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

  @media screen and (max-width: 768px) {
    width: 100%;
    left: 0;
    padding: 2rem 1rem;
  }
`;

// export const BackArrow = styled(ChevronLeft)`
//   cursor: pointer;

//   :hover {
//     transform: scale(1.05);
//   }
// `;
