import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styled from 'styled-components';

const FAQTabs = (props) => {
  const [active, setActive] = React.useState(false);
  return (
    <Container active={active} onClick={() => setActive(!active)}>
      <div className='header'>
        {props.title}
        {active && <FaChevronUp />}
        {!active && <FaChevronDown />}
      </div>
      {active && <div className='body'>{props.body}</div>}
    </Container>
  );
};

export default FAQTabs;

export const Container = styled.div`
  width: 100%;
  margin-bottom: 10px;
  cursor: pointer;

  .active {
    background: #455afe;
  }

  .header {
    padding: 14px 30px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ active }) => (active ? '#455afe' : '#999')};
    color: #fff;
    font-size: 20px;
    font-weight: normal;
    line-height: 23px;
    letter-spacing: 0.0015em;
  }

  .body {
    padding: 20px 30px;
    width: 100%;
    color: #999;
    font-size: 16px;
    font-weight: normal;
    line-height: 19px;
    letter-spacing: 0.005em;
  }
`;
