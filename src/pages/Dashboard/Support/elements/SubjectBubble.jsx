import React from 'react';
import styled from 'styled-components';

const Tab = (props) => {
  return (
    <Container>
      <div className='issue'>
        <div className='tag'>{props?.name}</div>
        <div className='text'>
          <span>Subject:</span> {props?.subject}
        </div>
        <div className='text'>
          <span>Message:</span> {props?.message}
        </div>
        <div className='time'>
          {new Date(props?.createdAt).toLocaleString()}
        </div>
      </div>
    </Container>
  );
};

export default Tab;

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid green;
  border-left: 4px solid green;
  margin-bottom: 0.5rem;

  .time {
    font-size: 11px;
    font-style: italic;
    font-weight: 500;
    margin-top: 0.5em;
  }

  .tag {
    background: green;
    border-radius: 5px;
    color: #fff;
    font-weight: 500;
    padding: 0.25rem 0.5rem;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    width: 150px;
    text-align: center;
  }

  .text {
    span {
      font-weight: bold;
    }
  }
`;
